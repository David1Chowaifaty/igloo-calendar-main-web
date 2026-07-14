'use strict';

var index = require('./index-CLqkDPTC.js');
var calendarData = require('./calendar-data-CeBvVadE.js');
var utils = require('./utils-EjuW-lx0.js');
var axios = require('./axios-EresIryl.js');
var moment = require('./moment-CdViwxPQ.js');

// src/components/ir-sales-by-channel/types.ts
/* ---------- Report (input) ---------- */
index.libExports.z.object({
    code: index.libExports.z.string(),
    id: index.libExports.z.number(),
    symbol: index.libExports.z.string(),
});
const ChannelReportBaseSchema = index.libExports.z.object({
    NIGHTS: index.libExports.z.number(),
    PCT: index.libExports.z.number(),
    REVENUE: index.libExports.z.number(),
    SOURCE: index.libExports.z.string(),
    PROPERTY_ID: index.libExports.z.number(),
    PROPERTY_NAME: index.libExports.z.string(),
    currency: index.libExports.z.string(),
    SOURCE_ICON: index.libExports.z.string(),
});
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
const ExtendedChanelReportBaseSchema = ChannelReportBaseSchema.extend({
    last_year: ChannelReportBaseSchema.optional(),
});
const ChannelReportResultSchema = index.libExports.z.array(ExtendedChanelReportBaseSchema).nullable();
/* ---------- Params ---------- */
const ChannelSalesParamsSchema = index.libExports.z.object({
    AC_ID: index.libExports.z.string().optional(),
    BOOK_CASE: index.libExports.z.string().min(1),
    FROM_DATE: index.libExports.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    TO_DATE: index.libExports.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    WINDOW: index.libExports.z.coerce.number().int().nonnegative(),
    // Accepts true/false, "true"/"false", 1/0; defaults to false
    is_export_to_excel: index.libExports.z.coerce.boolean().optional().default(false),
    LIST_AC_ID: index.libExports.z.array(index.libExports.z.number()).nullable(),
});
/* ---------- Filters ---------- */
ChannelSalesParamsSchema.extend({
    include_previous_year: index.libExports.z.boolean(),
});
const parseChannelReportResult = (data) => ChannelReportResultSchema.parse(data);
const parseChannelSalesParams = (data) => ChannelSalesParamsSchema.parse(data);

const SetPropertyCalendarExtraParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    value: index.libExports.z.string(),
});
const AllowedPropertiesSchema = index.libExports.z.array(index.libExports.z.object({ id: index.libExports.z.number(), name: index.libExports.z.string() })).nullable();
const SetRoomCalendarExtraParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    room_identifier: index.libExports.z.string(),
    value: index.libExports.z.string(),
});
const FetchNotificationsParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.coerce.number(),
});
const FetchNotificationsResultSchema = index.libExports.z.array(index.libExports.z.object({ message: index.libExports.z.string(), type: index.libExports.z.enum(['financial', 'availability_alert']) }));
const ExposedRectifierParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.coerce.number(),
    room_type_ids: index.libExports.z.array(index.libExports.z.number()).min(1),
    from: index.libExports.z.string().refine(date => {
        const _date = moment.hooks(date, 'YYYY-MM-DD');
        if (!moment.hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
    to: index.libExports.z.string().refine(date => {
        const _date = moment.hooks(date, 'YYYY-MM-DD');
        if (!moment.hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
});
const FetchUnBookableRoomsSchema = index.libExports.z.object({
    property_ids: index.libExports.z.array(index.libExports.z.number()),
    period_to_check: index.libExports.z.coerce.number(),
    consecutive_period: index.libExports.z.coerce.number(),
});
const CategorySchema = index.libExports.z.object({
    code: index.libExports.z.string(),
    description: index.libExports.z.string(),
});
const taxationModes = {
    NOT_APPLICABLE: '002',
};
const TaxCategorySchema = index.libExports.z.object({
    category: CategorySchema,
    taxation_mode: CategorySchema,
    pct: index.libExports.z.number(),
    property_id: index.libExports.z.number().optional(),
});
const HandleExposedPropertyTaxCategoriesParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    VAT_INCLUDED_CODE: index.libExports.z.string(),
    VAT_PC: index.libExports.z.number(),
    CITY_TAX_INCLUDED_CODE: index.libExports.z.string(),
    CITY_TAX_PCT: index.libExports.z.number(),
    SERVICE_CHARGE_INCLUDED_CODE: index.libExports.z.string(),
    SERVICE_CHARGE_PCT: index.libExports.z.number(),
    tax_categories: index.libExports.z.array(TaxCategorySchema),
    TAXATION_STRATEGY: index.libExports.z.string(),
});
const SetPropertyGapConfigParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    gap_rule_code: index.libExports.z.string(),
    gap_lookahead_days: index.libExports.z.number(),
});
const GetUnifiedFolioParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number().int(),
    from_date: index.libExports.z.string().date().nullable(),
    to_date: index.libExports.z.string().date().nullable(),
    target_type: index.libExports.z.string().nullable(),
    doc_type: index.libExports.z.string().nullable(),
    fd_type_code: index.libExports.z.string().nullable(),
    doc_number: index.libExports.z.string().nullable(),
    agent_id: index.libExports.z.string().optional().nullable().default(null),
    guest_id: index.libExports.z.string().optional().nullable().default(null),
    booking_number: index.libExports.z.string().nullable(),
    page_index: index.libExports.z.number().int().nonnegative(),
    page_size: index.libExports.z.number().int().positive(),
    o_Total_Rows: index.libExports.z.number().int().nullable(),
    is_export_to_excel: index.libExports.z.boolean(),
    Link_excel: index.libExports.z.string(),
});
// A unified folio row can be tied either to an agent account or to a guest.
const UnifiedFolioTargetTypeSchema = index.libExports.z.enum(['AGENT', 'GUEST']);
const UnifiedFolioRecordSchema = index.libExports.z.object({
    TARGET_TYPE: UnifiedFolioTargetTypeSchema,
    AGENT_ID: index.libExports.z.number().nullable().optional(),
    AGENT_NAME: index.libExports.z.string().nullable().optional(),
    GUEST_ID: index.libExports.z.number().nullable().optional(),
    GUEST_NAME: index.libExports.z.string().nullable().optional(),
    GUEST_EMAIL: index.libExports.z.string().nullable().optional(),
    BOOKING_ID: index.libExports.z.number().nullable().optional(),
    BOOKING_NUMBER: index.libExports.z.string().nullable().optional(),
    DOC_ID: index.libExports.z.number().nullable().optional(),
    DOC_NUMBER: index.libExports.z.string().nullable().optional(),
    DOC_DATE: index.libExports.z.string().nullable().optional(),
    DOC_TYPE: index.libExports.z.string().nullable().optional(),
    FD_TYPE_CODE: index.libExports.z.string().nullable().optional(),
    CURRENCY_ID: index.libExports.z.number().nullable().optional(),
    TOTAL_AMOUNT: index.libExports.z.number().nullable().optional(),
    CREDIT: index.libExports.z.number().nullable().optional(),
    DEBIT: index.libExports.z.number().nullable().optional(),
    NET_AMOUNT: index.libExports.z.number().nullable().optional(),
    TAX_AMOUNT: index.libExports.z.number().nullable().optional(),
});
index.libExports.z.array(UnifiedFolioRecordSchema);
const PrintGuestFolioDocParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    booking_nbr: index.libExports.z.string(),
    mode: index.libExports.z.string(),
    reference: index.libExports.z.string(),
    extras: index.libExports.z.string().optional(),
});

class PropertyService {
    async printGuestFolioDoc(params) {
        const payload = PrintGuestFolioDocParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Print_Guest_Folio_Doc', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async handleExposedPropertyTaxCategories(params) {
        const payload = HandleExposedPropertyTaxCategoriesParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Handle_Exposed_Property_Tax_Categories', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async setPropertyGapConfig(params) {
        const payload = SetPropertyGapConfigParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Set_Property_Gap_Config', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
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
    async getUnifiedFolio(params) {
        const payload = GetUnifiedFolioParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_Unified_Folio', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const params_echo = data.My_Params_Get_Unified_Folio;
        if (payload.is_export_to_excel && params_echo?.Link_excel) {
            utils.downloadFile(params_echo.Link_excel);
        }
        const rows = data.My_Result ?? [];
        const total = params_echo?.o_Total_Rows ?? rows.length;
        return { rows, total };
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
    async setExposedGapNightsPolicy(params) {
        const { data } = await axios.axios.post('/Set_Exposed_Gap_Nights_Policy', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

exports.ExposedRectifierParamsSchema = ExposedRectifierParamsSchema;
exports.PropertyService = PropertyService;
exports.taxationModes = taxationModes;
