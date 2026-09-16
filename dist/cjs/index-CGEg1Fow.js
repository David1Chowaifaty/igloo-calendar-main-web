'use strict';

var types = require('./types-BVJQZ50e.js');
var calendarData = require('./calendar-data-UPPAEVR_.js');
var utils = require('./utils-oNe0zJBw.js');
var axios = require('./axios-EresIryl.js');
var moment = require('./moment-CdViwxPQ.js');
var commonSchemas = require('./commonSchemas-rhaJ5cvr.js');

// src/components/ir-sales-by-channel/types.ts
/* ---------- Report (input) ---------- */
types.objectType({
    code: types.stringType(),
    id: types.numberType(),
    symbol: types.stringType(),
});
const ChannelReportBaseSchema = types.objectType({
    NIGHTS: types.numberType(),
    PCT: types.numberType(),
    REVENUE: types.numberType(),
    SOURCE: types.stringType(),
    PROPERTY_ID: types.numberType(),
    PROPERTY_NAME: types.stringType(),
    currency: types.stringType(),
    SOURCE_ICON: types.stringType(),
});
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
const ExtendedChanelReportBaseSchema = ChannelReportBaseSchema.extend({
    last_year: ChannelReportBaseSchema.optional(),
});
const ChannelReportResultSchema = types.arrayType(ExtendedChanelReportBaseSchema).nullable();
/* ---------- Params ---------- */
const ChannelSalesParamsSchema = types.objectType({
    AC_ID: types.stringType().optional(),
    BOOK_CASE: types.stringType().min(1),
    FROM_DATE: types.stringType().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    TO_DATE: types.stringType().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    WINDOW: types.coerce.number().int().nonnegative(),
    // Accepts true/false, "true"/"false", 1/0; defaults to false
    is_export_to_excel: types.coerce.boolean().optional().default(false),
    LIST_AC_ID: types.arrayType(types.numberType()).nullable(),
});
/* ---------- Filters ---------- */
ChannelSalesParamsSchema.extend({
    include_previous_year: types.booleanType(),
});
const parseChannelReportResult = (data) => ChannelReportResultSchema.parse(data);
const parseChannelSalesParams = (data) => ChannelSalesParamsSchema.parse(data);

const SetPropertyCalendarExtraParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    value: types.stringType(),
});
const AllowedPropertiesSchema = types.arrayType(types.objectType({ id: types.numberType(), name: types.stringType() })).nullable();
const SetRoomCalendarExtraParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    room_identifier: types.stringType(),
    value: types.stringType(),
});
const FetchNotificationsParamsSchema = types.objectType({
    property_id: types.coerce.number(),
});
const FetchNotificationsResultSchema = types.arrayType(types.objectType({ message: types.stringType(), type: types.enumType(['financial', 'availability_alert']) }));
const ExposedRectifierParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    room_type_ids: types.arrayType(types.numberType()).min(1),
    from: types.stringType().refine(date => {
        const _date = moment.hooks(date, 'YYYY-MM-DD');
        if (!moment.hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
    to: types.stringType().refine(date => {
        const _date = moment.hooks(date, 'YYYY-MM-DD');
        if (!moment.hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
});
const FetchUnBookableRoomsSchema = types.objectType({
    property_ids: types.arrayType(commonSchemas.PropertyIdSchema),
    period_to_check: types.coerce.number(),
    consecutive_period: types.coerce.number(),
});
const CategorySchema = types.objectType({
    code: types.stringType(),
    description: types.stringType(),
});
const taxationModes = {
    INCLUSIVE: '001',
    NOT_APPLICABLE: '002',
};
const TaxCategorySchema = types.objectType({
    category: CategorySchema,
    taxation_mode: CategorySchema,
    pct: types.numberType(),
    default_price: types.numberType().nullable().optional(),
    property_id: types.numberType().optional(),
});
const HandleExposedPropertyTaxCategoriesParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    VAT_INCLUDED_CODE: types.stringType(),
    VAT_PC: types.numberType(),
    CITY_TAX_INCLUDED_CODE: types.stringType(),
    CITY_TAX_PCT: types.numberType(),
    SERVICE_CHARGE_INCLUDED_CODE: types.stringType().optional(),
    BABY_COT_PRICING_MODEL: types.stringType().optional(),
    SERVICE_CHARGE_PCT: types.numberType().optional(),
    tax_categories: types.arrayType(TaxCategorySchema),
    TAXATION_STRATEGY: types.stringType(),
    DAY_USE_BLOCK: types.unionType([types.literalType('0'), types.literalType('1')])
        .nullable()
        .optional()
        .default(null),
});
const SetPropertyGapConfigParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    gap_rule_code: types.stringType(),
    gap_lookahead_days: types.numberType(),
});
const GetUnifiedFolioParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    from_date: commonSchemas.DateSchema.nullable(),
    to_date: commonSchemas.DateSchema.nullable(),
    target_type: types.stringType().nullable(),
    doc_type: types.stringType().nullable(),
    fd_type_code: types.stringType().nullable(),
    doc_number: types.stringType().nullable(),
    agent_id: types.stringType().optional().nullable().default(null),
    guest_id: types.stringType().optional().nullable().default(null),
    booking_number: types.stringType().nullable(),
    page_index: types.numberType().int().nonnegative(),
    page_size: types.numberType().int().positive(),
    o_Total_Rows: types.numberType().int().nullable(),
    is_export_to_excel: types.booleanType(),
    Link_excel: types.stringType(),
});
// A unified folio row can be tied either to an agent account or to a guest.
const UnifiedFolioTargetTypeSchema = types.enumType(['AGENT', 'GUEST']);
const UnifiedFolioRecordSchema = types.objectType({
    TARGET_TYPE: UnifiedFolioTargetTypeSchema,
    AGENT_ID: types.numberType().nullable().optional(),
    AGENT_NAME: types.stringType().nullable().optional(),
    GUEST_ID: types.numberType().nullable().optional(),
    GUEST_NAME: types.stringType().nullable().optional(),
    GUEST_EMAIL: types.stringType().nullable().optional(),
    BOOKING_ID: types.numberType().nullable().optional(),
    BOOKING_NUMBER: types.stringType().nullable().optional(),
    DOC_ID: types.numberType().nullable().optional(),
    DOC_NUMBER: types.stringType().nullable().optional(),
    DOC_DATE: types.stringType().nullable().optional(),
    DOC_TYPE: types.stringType().nullable().optional(),
    DOC_HOUR: types.numberType().nullable().optional(),
    DOC_MINUTE: types.numberType().nullable().optional(),
    FD_TYPE_CODE: types.stringType().nullable().optional(),
    CURRENCY_ID: types.numberType().nullable().optional(),
    TOTAL_AMOUNT: types.numberType().nullable().optional(),
    CREDIT: types.numberType().nullable().optional(),
    DEBIT: types.numberType().nullable().optional(),
    NET_AMOUNT: types.numberType().nullable().optional(),
    TAX_AMOUNT: types.numberType().nullable().optional(),
});
types.arrayType(UnifiedFolioRecordSchema);
const PrintGuestFolioDocParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    booking_nbr: commonSchemas.BookingNumberSchema,
    mode: types.stringType(),
    reference: types.stringType(),
    extras: types.stringType().optional(),
});
const GetExposedBookingsByInvoicedStatusParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    booking_nbr: commonSchemas.BookingNumberSchema,
    from_date: commonSchemas.DateSchema,
    to_date: commonSchemas.DateSchema,
    source: types.stringType().optional(),
    is_totally_invoiced: types.booleanType().optional().default(false),
    start_row: types.numberType().default(0),
    end_row: types.numberType(),
});
const GetDayUseBookingsForCalendarParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    from_date: commonSchemas.DateSchema,
    to_date: commonSchemas.DateSchema,
});
const CalculateNetAmountParamsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    amount: types.numberType(),
    taxes_to_include: commonSchemas.TaxTypesSchema,
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
    async getExposedBookingsByInvoicedStatus(params) {
        const payload = GetExposedBookingsByInvoicedStatusParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_Exposed_Bookings_By_Invoiced_Status', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
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
    async getActiveOptimExposedProperties() {
        const { data } = await axios.axios.post('/Get_Active_Optim_Exposed_Properties', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return AllowedPropertiesSchema.parse(data.My_Result);
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
    async getDayUseBookingsForCalendar(params) {
        const payload = GetDayUseBookingsForCalendarParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_Day_Use_Bookings_For_Calendar', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async calculateNetAmount(params) {
        const payload = CalculateNetAmountParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Calculate_Net_Amount', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

exports.ExposedRectifierParamsSchema = ExposedRectifierParamsSchema;
exports.PropertyService = PropertyService;
exports.taxationModes = taxationModes;
