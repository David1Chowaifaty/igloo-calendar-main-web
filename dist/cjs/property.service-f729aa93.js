'use strict';

const index = require('./index-63734c32.js');
const calendarData = require('./calendar-data-960b69ba.js');
const utils = require('./utils-bf9b1b25.js');
const axios = require('./axios-6e678d52.js');

// src/components/ir-sales-by-channel/types.ts
/* ---------- Report (input) ---------- */
const CurrencySchema = index.z.object({
    code: index.z.string(),
    id: index.z.number(),
    symbol: index.z.string(),
});
const ChannelReportBaseSchema = index.z.object({
    NIGHTS: index.z.number(),
    PCT: index.z.number(),
    REVENUE: index.z.number(),
    SOURCE: index.z.string(),
    PROPERTY_ID: index.z.number(),
    PROPERTY_NAME: index.z.string(),
    currency: CurrencySchema,
});
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
const ExtendedChanelReportBaseSchema = ChannelReportBaseSchema.extend({
    last_year: ChannelReportBaseSchema.optional(),
});
const ChannelReportResultSchema = index.z.array(ExtendedChanelReportBaseSchema).nullable();
/* ---------- Params ---------- */
const ChannelSalesParamsSchema = index.z.object({
    AC_ID: index.z.string().optional(),
    BOOK_CASE: index.z.string().min(1),
    FROM_DATE: index.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    TO_DATE: index.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    WINDOW: index.z.coerce.number().int().nonnegative(),
    // Accepts true/false, "true"/"false", 1/0; defaults to false
    is_export_to_excel: index.z.coerce.boolean().optional().default(false),
    LIST_AC_ID: index.z.array(index.z.number()).optional(),
});
/* ---------- Filters ---------- */
ChannelSalesParamsSchema.extend({
    include_previous_year: index.z.boolean(),
});
const parseChannelReportResult = (data) => ChannelReportResultSchema.parse(data);
const parseChannelSalesParams = (data) => ChannelSalesParamsSchema.parse(data);

const AllowedPropertiesSchema = index.z.array(index.z.object({ id: index.z.number(), name: index.z.string() })).nullable();
class PropertyService {
    async getExposedProperty(params) {
        var _a, _b;
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Property`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
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
            const spitTime = (_b = (_a = results === null || results === void 0 ? void 0 : results.time_constraints) === null || _a === void 0 ? void 0 : _a.check_out_till) === null || _b === void 0 ? void 0 : _b.split(':');
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
}

exports.PropertyService = PropertyService;

//# sourceMappingURL=property.service-f729aa93.js.map