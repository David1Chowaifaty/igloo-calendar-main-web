'use strict';

const utils = require('./utils-1ff7957f.js');
const calendarData = require('./calendar-data-0598de26.js');
const axios = require('./axios-6e678d52.js');
const moment = require('./moment-1780b03a.js');

// src/components/ir-sales-by-channel/types.ts
/* ---------- Report (input) ---------- */
utils.z.object({
    code: utils.z.string(),
    id: utils.z.number(),
    symbol: utils.z.string(),
});
const ChannelReportBaseSchema = utils.z.object({
    NIGHTS: utils.z.number(),
    PCT: utils.z.number(),
    REVENUE: utils.z.number(),
    SOURCE: utils.z.string(),
    PROPERTY_ID: utils.z.number(),
    PROPERTY_NAME: utils.z.string(),
    currency: utils.z.string(),
});
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
const ExtendedChanelReportBaseSchema = ChannelReportBaseSchema.extend({
    last_year: ChannelReportBaseSchema.optional(),
});
const ChannelReportResultSchema = utils.z.array(ExtendedChanelReportBaseSchema).nullable();
/* ---------- Params ---------- */
const ChannelSalesParamsSchema = utils.z.object({
    AC_ID: utils.z.string().optional(),
    BOOK_CASE: utils.z.string().min(1),
    FROM_DATE: utils.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    TO_DATE: utils.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    WINDOW: utils.z.coerce.number().int().nonnegative(),
    // Accepts true/false, "true"/"false", 1/0; defaults to false
    is_export_to_excel: utils.z.coerce.boolean().optional().default(false),
    LIST_AC_ID: utils.z.array(utils.z.number()).nullable(),
});
/* ---------- Filters ---------- */
ChannelSalesParamsSchema.extend({
    include_previous_year: utils.z.boolean(),
});
const parseChannelReportResult = (data) => ChannelReportResultSchema.parse(data);
const parseChannelSalesParams = (data) => ChannelSalesParamsSchema.parse(data);

const SetPropertyCalendarExtraParamsSchema = utils.z.object({
    property_id: utils.z.number(),
    value: utils.z.string(),
});
const AllowedPropertiesSchema = utils.z.array(utils.z.object({ id: utils.z.number(), name: utils.z.string() })).nullable();
const SetRoomCalendarExtraParamsSchema = utils.z.object({
    property_id: utils.z.number(),
    room_identifier: utils.z.string(),
    value: utils.z.string(),
});
const FetchNotificationsParamsSchema = utils.z.object({
    property_id: utils.z.coerce.number(),
});
const FetchNotificationsResultSchema = utils.z.array(utils.z.object({ message: utils.z.string(), type: utils.z.enum(['financial', 'availability_alert']) }));
const ExposedRectifierParamsSchema = utils.z.object({
    property_id: utils.z.coerce.number(),
    room_type_ids: utils.z.array(utils.z.number()).min(1),
    from: utils.z.string().refine(date => {
        const _date = moment.hooks(date, 'YYYY-MM-DD');
        if (!moment.hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
    to: utils.z.string().refine(date => {
        const _date = moment.hooks(date, 'YYYY-MM-DD');
        if (!moment.hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
});
const FetchUnBookableRoomsSchema = utils.z.object({
    property_ids: utils.z.array(utils.z.number()),
    period_to_check: utils.z.coerce.number(),
    consecutive_period: utils.z.coerce.number(),
});
class PropertyService {
    async getExposedProperty(params) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Property`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            calendarData.calendar_data.property = { ...results };
            calendarData.calendar_data.adultChildConstraints = results.adult_child_constraints;
            calendarData.calendar_data.allowedBookingSources = results.allowed_booking_sources;
            calendarData.calendar_data.allowed_payment_methods = results.allowed_payment_methods;
            calendarData.calendar_data.currency = results.currency;
            calendarData.calendar_data.is_vacation_rental = results.is_vacation_rental;
            calendarData.calendar_data.pickup_service = results.pickup_service;
            calendarData.calendar_data.max_nights = results.max_nights;
            calendarData.calendar_data.roomsInfo = results.roomtypes;
            calendarData.calendar_data.taxes = results.taxes;
            calendarData.calendar_data.id = results.id;
            calendarData.calendar_data.country = results.country;
            calendarData.calendar_data.name = results.name;
            calendarData.calendar_data.is_automatic_check_in_out = results.is_automatic_check_in_out;
            calendarData.calendar_data.tax_statement = results.tax_statement;
            calendarData.calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
            calendarData.calendar_data.is_pms_enabled = results.is_pms_enabled;
            const spitTime = results?.time_constraints?.check_out_till?.split(':');
            calendarData.calendar_data.checkin_checkout_hours = {
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
        const { data } = await axios.axios.post('/Exposed_Rectifier', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setPropertyCalendarExtra(params) {
        const payload = SetPropertyCalendarExtraParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Set_Property_Calendar_Extra', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setRoomCalendarExtra(params) {
        const payload = SetRoomCalendarExtraParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Set_Room_Calendar_Extra', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getChannelSales(params) {
        const _params = parseChannelSalesParams(params);
        const { data } = await axios.axios.post('/Get_Channel_Sales', _params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Channel_Sales.Link_excel);
        }
        return parseChannelReportResult(data.My_Result);
    }
    async getExposedAllowedProperties() {
        const { data } = await axios.axios.post('/Get_Exposed_Allowed_Properties', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return AllowedPropertiesSchema.parse(data.My_Result);
    }
    async searchExposedAllowedProperties(searchTerm) {
        const payload = searchTerm ? { search_term: searchTerm } : {};
        const { data } = await axios.axios.post('/Get_Exposed_Allowed_Properties', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return Array.isArray(data.My_Result) ? data.My_Result : [];
    }
    async getCountrySales(params) {
        const { data } = await axios.axios.post('/Get_Country_Sales', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Country_Sales.Link_excel);
        }
        return data.My_Result;
    }
    async getDailyRevenueReport(params) {
        const { data } = await axios.axios.post('/Get_Daily_Revenue_Report', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Daily_Revenue_Report.Link_excel);
        }
        return data.My_Result;
    }
    async setExposedCleaningFrequency(params) {
        const { data } = await axios.axios.post('/Set_Exposed_Cleaning_Frequency', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getMonthlyStats(params) {
        const { data } = await axios.axios.post('/Get_Monthly_Stats', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Monthly_Stats.Link_excel);
        }
        return data.My_Result;
    }
    async fetchNotifications(property_id) {
        const payload = FetchNotificationsParamsSchema.parse({ property_id });
        const { data } = await axios.axios.post('/Fetch_Notifications', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return FetchNotificationsResultSchema.parse(data.My_Result);
    }
    async fetchUnBookableRooms(params) {
        const payload = FetchUnBookableRoomsSchema.parse(params);
        const { data } = await axios.axios.post('/Fetch_UnBookable_Rooms', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

exports.ExposedRectifierParamsSchema = ExposedRectifierParamsSchema;
exports.PropertyService = PropertyService;

//# sourceMappingURL=property.service-ba17ae84.js.map