import { parseChannelReportResult, parseChannelSalesParams } from "../components/ir-sales-by-channel/types";
import calendar_data from "../stores/calendar-data";
import { downloadFile } from "../utils/utils";
import axios from "axios";
import moment from "moment";
import { z } from "zod";
export const SetPropertyCalendarExtraParamsSchema = z.object({
    property_id: z.number(),
    value: z.string(),
});
export const AllowedPropertiesSchema = z.array(z.object({ id: z.number(), name: z.string() })).nullable();
export const SetRoomCalendarExtraParamsSchema = z.object({
    property_id: z.number(),
    room_identifier: z.string(),
    value: z.string(),
});
export const FetchNotificationsParamsSchema = z.object({
    property_id: z.coerce.number(),
});
export const FetchNotificationsResultSchema = z.array(z.object({ message: z.string(), type: z.enum(['financial', 'availability_alert']) }));
export const ExposedRectifierParamsSchema = z.object({
    property_id: z.coerce.number(),
    room_type_ids: z.array(z.number()).min(1),
    from: z.string().refine(date => {
        const _date = moment(date, 'YYYY-MM-DD');
        if (!moment.isMoment(_date)) {
            return false;
        }
        return true;
    }),
    to: z.string().refine(date => {
        const _date = moment(date, 'YYYY-MM-DD');
        if (!moment.isMoment(_date)) {
            return false;
        }
        return true;
    }),
});
export const FetchUnBookableRoomsSchema = z.object({
    property_ids: z.array(z.number()),
    period_to_check: z.coerce.number(),
    consecutive_period: z.coerce.number(),
});
export class PropertyService {
    async getExposedProperty(params) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Property`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            calendar_data.property = { ...results };
            calendar_data.adultChildConstraints = results.adult_child_constraints;
            calendar_data.allowedBookingSources = results.allowed_booking_sources;
            calendar_data.allowed_payment_methods = results.allowed_payment_methods;
            calendar_data.currency = results.currency;
            calendar_data.is_vacation_rental = results.is_vacation_rental;
            calendar_data.pickup_service = results.pickup_service;
            calendar_data.max_nights = results.max_nights;
            calendar_data.roomsInfo = results.roomtypes;
            calendar_data.taxes = results.taxes;
            calendar_data.id = results.id;
            calendar_data.country = results.country;
            calendar_data.name = results.name;
            calendar_data.is_automatic_check_in_out = results.is_automatic_check_in_out;
            calendar_data.tax_statement = results.tax_statement;
            calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
            calendar_data.is_pms_enabled = results.is_pms_enabled;
            const spitTime = results?.time_constraints?.check_out_till?.split(':');
            calendar_data.checkin_checkout_hours = {
                offset: results.city.gmt_offset,
                hour: Number(spitTime[0] || 0),
                minute: Number(spitTime[1] || 0),
            };
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async exposedRectifier(params) {
        const payload = ExposedRectifierParamsSchema.parse(params);
        const { data } = await axios.post('/Exposed_Rectifier', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setPropertyCalendarExtra(params) {
        const payload = SetPropertyCalendarExtraParamsSchema.parse(params);
        const { data } = await axios.post('/Set_Property_Calendar_Extra', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setRoomCalendarExtra(params) {
        const payload = SetRoomCalendarExtraParamsSchema.parse(params);
        const { data } = await axios.post('/Set_Room_Calendar_Extra', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getChannelSales(params) {
        const _params = parseChannelSalesParams(params);
        const { data } = await axios.post('/Get_Channel_Sales', _params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            downloadFile(data.My_Params_Get_Channel_Sales.Link_excel);
        }
        return parseChannelReportResult(data.My_Result);
    }
    async getExposedAllowedProperties() {
        const { data } = await axios.post('/Get_Exposed_Allowed_Properties', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return AllowedPropertiesSchema.parse(data.My_Result);
    }
    async searchExposedAllowedProperties(searchTerm) {
        const payload = searchTerm ? { search_term: searchTerm } : {};
        const { data } = await axios.post('/Get_Exposed_Allowed_Properties', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return Array.isArray(data.My_Result) ? data.My_Result : [];
    }
    async getCountrySales(params) {
        const { data } = await axios.post('/Get_Country_Sales', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            downloadFile(data.My_Params_Get_Country_Sales.Link_excel);
        }
        return data.My_Result;
    }
    async getDailyRevenueReport(params) {
        const { data } = await axios.post('/Get_Daily_Revenue_Report', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            downloadFile(data.My_Params_Get_Daily_Revenue_Report.Link_excel);
        }
        return data.My_Result;
    }
    async setExposedCleaningFrequency(params) {
        const { data } = await axios.post('/Set_Exposed_Cleaning_Frequency', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getMonthlyStats(params) {
        const { data } = await axios.post('/Get_Monthly_Stats', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            downloadFile(data.My_Params_Get_Monthly_Stats.Link_excel);
        }
        return data.My_Result;
    }
    async fetchNotifications(property_id) {
        const payload = FetchNotificationsParamsSchema.parse({ property_id });
        const { data } = await axios.post('/Fetch_Notifications', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return FetchNotificationsResultSchema.parse(data.My_Result);
    }
    async fetchUnBookableRooms(params) {
        const payload = FetchUnBookableRoomsSchema.parse(params);
        const { data } = await axios.post('/Fetch_UnBookable_Rooms', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}
//# sourceMappingURL=property.service.js.map
