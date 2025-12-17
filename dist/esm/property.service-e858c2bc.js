import { a as axios } from './axios-aa1335b8.js';
import { B as BookingService } from './booking.service-845da1e2.js';
import { e as extras, g as getReleaseHoursString, a as downloadFile } from './utils-1819eb32.js';
import { z } from './index-1e1f097b.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';

class EventsService {
    bookingService = new BookingService();
    async reallocateEvent(pool, destination_pr_id, from_date, to_date, rateplan_id) {
        try {
            console.log(pool, destination_pr_id, from_date, to_date);
            const { data } = await axios.post(`/ReAllocate_Exposed_Room`, { pool, destination_pr_id, from_date, to_date, extras, rateplan_id });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async deleteEvent(POOL) {
        try {
            const { data } = await axios.post(`/UnBlock_Exposed_Unit`, {
                POOL,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async updateBlockedEvent(bookingEvent) {
        try {
            const releaseData = getReleaseHoursString(+bookingEvent.RELEASE_AFTER_HOURS);
            await this.deleteEvent(bookingEvent.POOL);
            const result = await this.bookingService.blockUnit({
                from_date: this.formatDate(bookingEvent.FROM_DATE),
                to_date: this.formatDate(bookingEvent.TO_DATE),
                pr_id: bookingEvent.PR_ID,
                STAY_STATUS_CODE: bookingEvent.OUT_OF_SERVICE ? '004' : bookingEvent.RELEASE_AFTER_HOURS === 0 ? '002' : '003',
                DESCRIPTION: bookingEvent.RELEASE_AFTER_HOURS || '',
                NOTES: bookingEvent.OPTIONAL_REASON || '',
                ...releaseData,
            });
            return result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    formatDate(date) {
        return date.split('/').join('-');
    }
}

// src/components/ir-sales-by-channel/types.ts
/* ---------- Report (input) ---------- */
z.object({
    code: z.string(),
    id: z.number(),
    symbol: z.string(),
});
const ChannelReportBaseSchema = z.object({
    NIGHTS: z.number(),
    PCT: z.number(),
    REVENUE: z.number(),
    SOURCE: z.string(),
    PROPERTY_ID: z.number(),
    PROPERTY_NAME: z.string(),
    currency: z.string(),
});
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
const ExtendedChanelReportBaseSchema = ChannelReportBaseSchema.extend({
    last_year: ChannelReportBaseSchema.optional(),
});
const ChannelReportResultSchema = z.array(ExtendedChanelReportBaseSchema).nullable();
/* ---------- Params ---------- */
const ChannelSalesParamsSchema = z.object({
    AC_ID: z.string().optional(),
    BOOK_CASE: z.string().min(1),
    FROM_DATE: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    TO_DATE: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    WINDOW: z.coerce.number().int().nonnegative(),
    // Accepts true/false, "true"/"false", 1/0; defaults to false
    is_export_to_excel: z.coerce.boolean().optional().default(false),
    LIST_AC_ID: z.array(z.number()).nullable(),
});
/* ---------- Filters ---------- */
ChannelSalesParamsSchema.extend({
    include_previous_year: z.boolean(),
});
const parseChannelReportResult = (data) => ChannelReportResultSchema.parse(data);
const parseChannelSalesParams = (data) => ChannelSalesParamsSchema.parse(data);

const SetPropertyCalendarExtraParamsSchema = z.object({
    property_id: z.number(),
    value: z.string(),
});
const AllowedPropertiesSchema = z.array(z.object({ id: z.number(), name: z.string() })).nullable();
const SetRoomCalendarExtraParamsSchema = z.object({
    property_id: z.number(),
    room_identifier: z.string(),
    value: z.string(),
});
class PropertyService {
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
}

export { EventsService as E, PropertyService as P };

//# sourceMappingURL=property.service-e858c2bc.js.map