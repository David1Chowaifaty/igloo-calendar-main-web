import { l as libExports } from './index-DeW5X45W.js';
import { c as calendar_data } from './calendar-data-CmdqrXAh.js';
import { k as downloadFile } from './utils-CJFvKroT.js';
import { a as axios } from './axios-B50ozOIF.js';
import { h as hooks } from './moment-Mki5YqAR.js';

// src/components/ir-sales-by-channel/types.ts
/* ---------- Report (input) ---------- */
libExports.z.object({
    code: libExports.z.string(),
    id: libExports.z.number(),
    symbol: libExports.z.string(),
});
const ChannelReportBaseSchema = libExports.z.object({
    NIGHTS: libExports.z.number(),
    PCT: libExports.z.number(),
    REVENUE: libExports.z.number(),
    SOURCE: libExports.z.string(),
    PROPERTY_ID: libExports.z.number(),
    PROPERTY_NAME: libExports.z.string(),
    currency: libExports.z.string(),
});
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
const ExtendedChanelReportBaseSchema = ChannelReportBaseSchema.extend({
    last_year: ChannelReportBaseSchema.optional(),
});
const ChannelReportResultSchema = libExports.z.array(ExtendedChanelReportBaseSchema).nullable();
/* ---------- Params ---------- */
const ChannelSalesParamsSchema = libExports.z.object({
    AC_ID: libExports.z.string().optional(),
    BOOK_CASE: libExports.z.string().min(1),
    FROM_DATE: libExports.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    TO_DATE: libExports.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
    WINDOW: libExports.z.coerce.number().int().nonnegative(),
    // Accepts true/false, "true"/"false", 1/0; defaults to false
    is_export_to_excel: libExports.z.coerce.boolean().optional().default(false),
    LIST_AC_ID: libExports.z.array(libExports.z.number()).nullable(),
});
/* ---------- Filters ---------- */
ChannelSalesParamsSchema.extend({
    include_previous_year: libExports.z.boolean(),
});
const parseChannelReportResult = (data) => ChannelReportResultSchema.parse(data);
const parseChannelSalesParams = (data) => ChannelSalesParamsSchema.parse(data);

const SetPropertyCalendarExtraParamsSchema = libExports.z.object({
    property_id: libExports.z.number(),
    value: libExports.z.string(),
});
const AllowedPropertiesSchema = libExports.z.array(libExports.z.object({ id: libExports.z.number(), name: libExports.z.string() })).nullable();
const SetRoomCalendarExtraParamsSchema = libExports.z.object({
    property_id: libExports.z.number(),
    room_identifier: libExports.z.string(),
    value: libExports.z.string(),
});
const FetchNotificationsParamsSchema = libExports.z.object({
    property_id: libExports.z.coerce.number(),
});
const FetchNotificationsResultSchema = libExports.z.array(libExports.z.object({ message: libExports.z.string(), type: libExports.z.enum(['financial', 'availability_alert']) }));
const ExposedRectifierParamsSchema = libExports.z.object({
    property_id: libExports.z.coerce.number(),
    room_type_ids: libExports.z.array(libExports.z.number()).min(1),
    from: libExports.z.string().refine(date => {
        const _date = hooks(date, 'YYYY-MM-DD');
        if (!hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
    to: libExports.z.string().refine(date => {
        const _date = hooks(date, 'YYYY-MM-DD');
        if (!hooks.isMoment(_date)) {
            return false;
        }
        return true;
    }),
});
const FetchUnBookableRoomsSchema = libExports.z.object({
    property_ids: libExports.z.array(libExports.z.number()),
    period_to_check: libExports.z.coerce.number(),
    consecutive_period: libExports.z.coerce.number(),
});
const CategorySchema = libExports.z.object({
    code: libExports.z.string(),
    description: libExports.z.string(),
});
const taxationModes = {
    NOT_APPLICABLE: '002',
};
const TaxCategorySchema = libExports.z.object({
    category: CategorySchema,
    taxation_mode: CategorySchema,
    pct: libExports.z.number(),
    property_id: libExports.z.number().optional(),
});
const HandleExposedPropertyTaxCategoriesParamsSchema = libExports.z.object({
    property_id: libExports.z.number(),
    VAT_INCLUDED_CODE: libExports.z.string(),
    VAT_PC: libExports.z.number(),
    CITY_TAX_INCLUDED_CODE: libExports.z.string(),
    CITY_TAX_PCT: libExports.z.number(),
    SERVICE_CHARGE_INCLUDED_CODE: libExports.z.string(),
    SERVICE_CHARGE_PCT: libExports.z.number(),
    tax_categories: libExports.z.array(TaxCategorySchema),
    TAXATION_STRATEGY: libExports.z.string(),
});
class PropertyService {
    async handleExposedPropertyTaxCategories(params) {
        const payload = HandleExposedPropertyTaxCategoriesParamsSchema.parse(params);
        const { data } = await axios.post('/Handle_Exposed_Property_Tax_Categories', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
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

export { ExposedRectifierParamsSchema as E, PropertyService as P, taxationModes as t };
