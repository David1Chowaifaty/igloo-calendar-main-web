import { o as objectType, s as stringType, n as numberType, a as arrayType, c as coerce, b as booleanType, e as enumType, u as unionType, l as literalType } from './types-BG9uwIsj.js';
import { c as calendar_data } from './calendar-data-BZeaTRgj.js';
import { j as downloadFile } from './utils-BtgW0txG.js';
import { a as axios } from './axios-B50ozOIF.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { P as PropertyIdSchema, D as DateSchema, B as BookingNumberSchema, T as TaxTypesSchema } from './commonSchemas-DZl_Ygcg.js';

// src/components/ir-sales-by-channel/types.ts
/* ---------- Report (input) ---------- */
objectType({
    code: stringType(),
    id: numberType(),
    symbol: stringType(),
});
const ChannelReportBaseSchema = objectType({
    NIGHTS: numberType(),
    PCT: numberType(),
    REVENUE: numberType(),
    SOURCE: stringType(),
    PROPERTY_ID: numberType(),
    PROPERTY_NAME: stringType(),
    currency: stringType(),
    SOURCE_ICON: stringType(),
});
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
const ExtendedChanelReportBaseSchema = ChannelReportBaseSchema.extend({
    last_year: ChannelReportBaseSchema.optional(),
});
const ChannelReportResultSchema = arrayType(ExtendedChanelReportBaseSchema).nullable();
/* ---------- Params ---------- */
const ChannelSalesParamsSchema = objectType({
    AC_ID: stringType().optional(),
    BOOK_CASE: stringType().min(1),
    FROM_DATE: stringType().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    TO_DATE: stringType().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    WINDOW: coerce.number().int().nonnegative(),
    // Accepts true/false, "true"/"false", 1/0; defaults to false
    is_export_to_excel: coerce.boolean().optional().default(false),
    LIST_AC_ID: arrayType(numberType()).nullable(),
});
/* ---------- Filters ---------- */
ChannelSalesParamsSchema.extend({
    include_previous_year: booleanType(),
});
const parseChannelReportResult = (data) => ChannelReportResultSchema.parse(data);
const parseChannelSalesParams = (data) => ChannelSalesParamsSchema.parse(data);

const SetPropertyCalendarExtraParamsSchema = objectType({
    property_id: PropertyIdSchema,
    value: stringType(),
});
const AllowedPropertiesSchema = arrayType(objectType({ id: numberType(), name: stringType() })).nullable();
const SetRoomCalendarExtraParamsSchema = objectType({
    property_id: PropertyIdSchema,
    room_identifier: stringType(),
    value: stringType(),
});
const FetchNotificationsParamsSchema = objectType({
    property_id: coerce.number(),
});
const FetchNotificationsResultSchema = arrayType(objectType({ message: stringType(), type: enumType(['financial', 'availability_alert']) }));
const ExposedRectifierParamsSchema = objectType({
    property_id: PropertyIdSchema,
    room_type_ids: arrayType(numberType()).min(1),
    from: stringType().refine(date => {
        const _date = hooks(date, 'YYYY-MM-DD');
        if (!hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
    to: stringType().refine(date => {
        const _date = hooks(date, 'YYYY-MM-DD');
        if (!hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
});
const FetchUnBookableRoomsSchema = objectType({
    property_ids: arrayType(PropertyIdSchema),
    period_to_check: coerce.number(),
    consecutive_period: coerce.number(),
});
const CategorySchema = objectType({
    code: stringType(),
    description: stringType(),
});
const taxationModes = {
    INCLUSIVE: '001',
    NOT_APPLICABLE: '002',
};
const TaxCategorySchema = objectType({
    category: CategorySchema,
    taxation_mode: CategorySchema,
    pct: numberType(),
    default_price: numberType().nullable().optional(),
    property_id: numberType().optional(),
});
const HandleExposedPropertyTaxCategoriesParamsSchema = objectType({
    property_id: PropertyIdSchema,
    VAT_INCLUDED_CODE: stringType(),
    VAT_PC: numberType(),
    CITY_TAX_INCLUDED_CODE: stringType(),
    CITY_TAX_PCT: numberType(),
    SERVICE_CHARGE_INCLUDED_CODE: stringType().optional(),
    BABY_COT_PRICING_MODEL: stringType().optional(),
    SERVICE_CHARGE_PCT: numberType().optional(),
    tax_categories: arrayType(TaxCategorySchema),
    TAXATION_STRATEGY: stringType(),
    DAY_USE_BLOCK: unionType([literalType('0'), literalType('1')])
        .nullable()
        .optional()
        .default(null),
});
const SetPropertyGapConfigParamsSchema = objectType({
    property_id: PropertyIdSchema,
    gap_rule_code: stringType(),
    gap_lookahead_days: numberType(),
});
const GetUnifiedFolioParamsSchema = objectType({
    property_id: PropertyIdSchema,
    from_date: DateSchema.nullable(),
    to_date: DateSchema.nullable(),
    target_type: stringType().nullable(),
    doc_type: stringType().nullable(),
    fd_type_code: stringType().nullable(),
    doc_number: stringType().nullable(),
    agent_id: stringType().optional().nullable().default(null),
    guest_id: stringType().optional().nullable().default(null),
    booking_number: stringType().nullable(),
    page_index: numberType().int().nonnegative(),
    page_size: numberType().int().positive(),
    o_Total_Rows: numberType().int().nullable(),
    is_export_to_excel: booleanType(),
    Link_excel: stringType(),
});
// A unified folio row can be tied either to an agent account or to a guest.
const UnifiedFolioTargetTypeSchema = enumType(['AGENT', 'GUEST']);
const UnifiedFolioRecordSchema = objectType({
    TARGET_TYPE: UnifiedFolioTargetTypeSchema,
    AGENT_ID: numberType().nullable().optional(),
    AGENT_NAME: stringType().nullable().optional(),
    GUEST_ID: numberType().nullable().optional(),
    GUEST_NAME: stringType().nullable().optional(),
    GUEST_EMAIL: stringType().nullable().optional(),
    BOOKING_ID: numberType().nullable().optional(),
    BOOKING_NUMBER: stringType().nullable().optional(),
    DOC_ID: numberType().nullable().optional(),
    DOC_NUMBER: stringType().nullable().optional(),
    DOC_DATE: stringType().nullable().optional(),
    DOC_TYPE: stringType().nullable().optional(),
    DOC_HOUR: numberType().nullable().optional(),
    DOC_MINUTE: numberType().nullable().optional(),
    FD_TYPE_CODE: stringType().nullable().optional(),
    CURRENCY_ID: numberType().nullable().optional(),
    TOTAL_AMOUNT: numberType().nullable().optional(),
    CREDIT: numberType().nullable().optional(),
    DEBIT: numberType().nullable().optional(),
    NET_AMOUNT: numberType().nullable().optional(),
    TAX_AMOUNT: numberType().nullable().optional(),
});
arrayType(UnifiedFolioRecordSchema);
const PrintGuestFolioDocParamsSchema = objectType({
    property_id: PropertyIdSchema,
    booking_nbr: BookingNumberSchema,
    mode: stringType(),
    reference: stringType(),
    extras: stringType().optional(),
});
const GetExposedBookingsByInvoicedStatusParamsSchema = objectType({
    property_id: PropertyIdSchema,
    booking_nbr: BookingNumberSchema,
    from_date: DateSchema,
    to_date: DateSchema,
    source: stringType().optional(),
    is_totally_invoiced: booleanType().optional().default(false),
    start_row: numberType().default(0),
    end_row: numberType(),
});
const GetDayUseBookingsForCalendarParamsSchema = objectType({
    property_id: PropertyIdSchema,
    from_date: DateSchema,
    to_date: DateSchema,
});
const CalculateNetAmountParamsSchema = objectType({
    property_id: PropertyIdSchema,
    amount: numberType(),
    taxes_to_include: TaxTypesSchema,
});

class PropertyService {
    async printGuestFolioDoc(params) {
        const payload = PrintGuestFolioDocParamsSchema.parse(params);
        const { data } = await axios.post('/Print_Guest_Folio_Doc', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async handleExposedPropertyTaxCategories(params) {
        const payload = HandleExposedPropertyTaxCategoriesParamsSchema.parse(params);
        const { data } = await axios.post('/Handle_Exposed_Property_Tax_Categories', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async setPropertyGapConfig(params) {
        const payload = SetPropertyGapConfigParamsSchema.parse(params);
        const { data } = await axios.post('/Set_Property_Gap_Config', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getExposedBookingsByInvoicedStatus(params) {
        const payload = GetExposedBookingsByInvoicedStatusParamsSchema.parse(params);
        const { data } = await axios.post('/Get_Exposed_Bookings_By_Invoiced_Status', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
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
    async getActiveOptimExposedProperties() {
        const { data } = await axios.post('/Get_Active_Optim_Exposed_Properties', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return AllowedPropertiesSchema.parse(data.My_Result);
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
    async getUnifiedFolio(params) {
        const payload = GetUnifiedFolioParamsSchema.parse(params);
        const { data } = await axios.post('/Get_Unified_Folio', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const params_echo = data.My_Params_Get_Unified_Folio;
        if (payload.is_export_to_excel && params_echo?.Link_excel) {
            downloadFile(params_echo.Link_excel);
        }
        const rows = data.My_Result ?? [];
        const total = params_echo?.o_Total_Rows ?? rows.length;
        return { rows, total };
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
    async setExposedGapNightsPolicy(params) {
        const { data } = await axios.post('/Set_Exposed_Gap_Nights_Policy', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getDayUseBookingsForCalendar(params) {
        const payload = GetDayUseBookingsForCalendarParamsSchema.parse(params);
        const { data } = await axios.post('/Get_Day_Use_Bookings_For_Calendar', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async calculateNetAmount(params) {
        const payload = CalculateNetAmountParamsSchema.parse(params);
        const { data } = await axios.post('/Calculate_Net_Amount', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

export { ExposedRectifierParamsSchema as E, PropertyService as P, taxationModes as t };
