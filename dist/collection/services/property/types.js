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
export const CategorySchema = z.object({
    code: z.string(),
    description: z.string(),
});
export const taxationModes = {
    INCLUSIVE: '001',
    EXCLUSIVE: '000',
    NOT_APPLICABLE: '002',
};
export const TaxCategorySchema = z.object({
    category: CategorySchema,
    taxation_mode: CategorySchema,
    pct: z.number(),
    property_id: z.number().optional(),
});
export const HandleExposedPropertyTaxCategoriesParamsSchema = z.object({
    property_id: z.number(),
    VAT_INCLUDED_CODE: z.string(),
    VAT_PC: z.number(),
    CITY_TAX_INCLUDED_CODE: z.string(),
    CITY_TAX_PCT: z.number(),
    SERVICE_CHARGE_INCLUDED_CODE: z.string(),
    SERVICE_CHARGE_PCT: z.number(),
    tax_categories: z.array(TaxCategorySchema),
    TAXATION_STRATEGY: z.string(),
});
export const SetPropertyGapConfigParamsSchema = z.object({
    property_id: z.number(),
    gap_rule_code: z.string(),
    gap_lookahead_days: z.number(),
});
export const GetUnifiedFolioParamsSchema = z.object({
    property_id: z.number().int(),
    from_date: z.string().date(),
    to_date: z.string().date(),
    target_type: z.string().nullable(),
    doc_type: z.string().nullable(),
    fd_type_code: z.string().nullable(),
    doc_number: z.string().nullable(),
    agent_id: z.string().optional().nullable().default(null),
    guest_id: z.string().optional().nullable().default(null),
    booking_number: z.string().nullable(),
    page_index: z.number().int().nonnegative(),
    page_size: z.number().int().positive(),
    o_Total_Rows: z.number().int().nullable(),
    is_export_to_excel: z.boolean(),
    Link_excel: z.string(),
});
// A unified folio row can be tied either to an agent account or to a guest.
export const UnifiedFolioTargetTypeSchema = z.enum(['AGENT', 'GUEST']);
export const UnifiedFolioRecordSchema = z.object({
    TARGET_TYPE: UnifiedFolioTargetTypeSchema,
    AGENT_ID: z.number().nullable().optional(),
    AGENT_NAME: z.string().nullable().optional(),
    GUEST_ID: z.number().nullable().optional(),
    GUEST_NAME: z.string().nullable().optional(),
    GUEST_EMAIL: z.string().nullable().optional(),
    BOOKING_ID: z.number().nullable().optional(),
    BOOKING_NUMBER: z.string().nullable().optional(),
    DOC_ID: z.number().nullable().optional(),
    DOC_NUMBER: z.string().nullable().optional(),
    DOC_DATE: z.string().nullable().optional(),
    DOC_TYPE: z.string().nullable().optional(),
    FD_TYPE_CODE: z.string().nullable().optional(),
    CURRENCY_ID: z.number().nullable().optional(),
    TOTAL_AMOUNT: z.number().nullable().optional(),
    CREDIT: z.number().nullable().optional(),
    DEBIT: z.number().nullable().optional(),
    NET_AMOUNT: z.number().nullable().optional(),
    TAX_AMOUNT: z.number().nullable().optional(),
});
export const GetUnifiedFolioResultSchema = z.array(UnifiedFolioRecordSchema);
