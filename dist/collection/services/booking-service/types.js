import * as z from "zod";
const NumberOrStringSchema = z.union([z.number(), z.string().optional()]);
export const CurrencySchema = z.object({
    id: z.number(),
});
export const CurrencyWithCodeSchema = CurrencySchema.extend({
    code: z.string().optional(),
});
export const ItemSchema = z.object({
    amount: z.number(),
    type: z.string().optional(),
    key: z.union([z.number(), z.string().optional()]),
    description: z.string().optional().optional().default(''),
});
export const TargetSchema = z.object({
    code: z.string().optional(),
    description: z.string().optional(),
});
export const UnblockUnitByPeriodPropsSchema = z.object({
    unit_id: z.number(),
    from_date: z.string().optional(),
    to_date: z.string().optional(),
});
export const GetNextValuePropsSchema = z.object({
    starter: z.string().optional(),
});
export const GetExposedApplicablePoliciesPropsSchema = z.object({
    booking_nbr: z.string().optional(),
    currency_id: z.number(),
    language: z.string().optional().optional(),
    rate_plan_id: z.number(),
    room_type_id: z.number(),
    property_id: z.number(),
    is_preserve_history: z.boolean().optional(),
    room_identifier: z.string().optional().optional(),
});
export const HandleExposedRoomInOutPropsSchema = z.object({
    booking_nbr: z.string().optional(),
    room_identifier: z.string().optional(),
    status: z.string().optional(),
});
export const GetPenaltyStatementPropsSchema = z.object({
    booking_nbr: z.string().optional(),
    currency_id: z.number(),
    language: z.string().optional(),
});
const RestrictionSchema = z.object({
    room_type_id: NumberOrStringSchema,
    night: z.string().optional(),
});
export const SetExposedRestrictionPerRoomTypePropsSchema = z.object({
    is_closed: z.boolean(),
    restrictions: z.array(RestrictionSchema),
    operation_type: z.string().optional().optional(),
});
export const ChangeExposedBookingStatusPropsSchema = z.object({
    book_nbr: z.string().optional(),
    status: z.string().optional(),
});
const AdultChildCountSchema = z.object({
    adult: z.number(),
    child: z.number(),
});
export const GetBookingAvailabilityPropsSchema = z.object({
    from_date: z.string().optional(),
    to_date: z.string().optional(),
    propertyid: z.number(),
    adultChildCount: AdultChildCountSchema,
    language: z.string().optional(),
    room_type_ids: z.array(z.number()),
    room_type_ids_to_update: z.array(z.number()).optional(),
    rate_plan_ids: z.array(z.number()).optional(),
    currency: CurrencyWithCodeSchema,
    is_in_agent_mode: z.boolean().optional(),
    agent_id: NumberOrStringSchema.optional(),
});
const AvailabilityBracketSchema = z.object({
    from_date: z.string().optional(),
    to_date: z.string().optional(),
});
export const BlockAvailabilityForBracketsPropsSchema = z.object({
    unit_id: z.number(),
    block_status_code: z.enum(['003', '004', '002']).optional(),
    description: z.string().optional().optional(),
    property_id: z.number(),
    brackets: z.array(AvailabilityBracketSchema),
});
export const SetDepartureTimePropsSchema = z.object({
    property_id: z.number(),
    room_identifier: z.string().optional(),
    code: z.string().optional(),
});
export const DoBookingExtraServicePropsSchema = z.object({
    service: z.custom(),
    booking_nbr: NumberOrStringSchema,
    is_remove: z.boolean(),
});
/*Arrivals */
export const GetRoomsToCheckInPropsSchema = z.object({
    property_id: z.string(),
    check_in_date: z.string(),
    page_index: z.number().default(1),
    page_size: z.number().default(10),
});
/*Departures */
export const GetRoomsToCheckOutPropsSchema = z.object({
    property_id: z.string(),
    check_out_date: z.string(),
    page_index: z.number().default(1),
    page_size: z.number().default(10),
});
/* INVOICE TYPES */
export const GetBookingInvoiceInfoPropsSchema = z.object({
    booking_nbr: z.string().optional(),
});
export const VoidInvoicePropsSchema = z.object({
    invoice_nbr: z.string().optional(),
    reason: z.string().optional(),
    property_id: z.number(),
});
export const InvoiceSchema = z.object({
    booking_nbr: z.string().optional(),
    currency: CurrencySchema,
    target: TargetSchema,
    Date: z.string().optional(),
    nbr: z.string().optional(),
    remark: z.string().optional(),
    billed_to_name: z.string().optional(),
    billed_to_tax: z.string().optional(),
    items: z.array(ItemSchema),
});
export const IssueInvoicePropsSchema = z.object({
    is_proforma: z.boolean().optional().default(false),
    property_id: z.number(),
    invoice: InvoiceSchema,
});
export const PrintInvoicePropsSchema = z.object({
    invoice_nbr: z.string().optional(),
    property_id: z.number(),
    mode: z.enum(['invoice', 'creditnote', 'proforma']),
    invoice: InvoiceSchema.optional(),
});
export const ExposedGuestSchema = z.object({
    address: z.null(),
    alternative_email: z.null(),
    cci: z.null(),
    city: z.null(),
    country: z.null(),
    country_id: z.number(),
    country_phone_prefix: z.string(),
    dob: z.null(),
    email: z.string(),
    first_name: z.string(),
    id: z.number(),
    id_info: z.null(),
    is_main: z.boolean(),
    last_name: z.string(),
    mobile: z.string(),
    mobile_without_prefix: z.string(),
    nbr_confirmed_bookings: z.number(),
    notes: z.null(),
    password: z.null(),
    subscribe_to_news_letter: z.null(),
});
export const ExposedGuestsSchema = z.array(ExposedGuestSchema);
export const CalculateExclusiveTaxPropsSchema = z.object({
    property_id: z.number().min(1),
    amount: z.number(),
});
//# sourceMappingURL=types.js.map
