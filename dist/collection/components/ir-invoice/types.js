import * as z from "zod";
export const CurrencySchema = z.object({
    code: z.string(),
    id: z.number(),
    symbol: z.string(),
});
export const StatusSchema = z.object({
    code: z.string(),
    description: z.any(),
});
export const ItemSchema = z.object({
    amount: z.number(),
    booking_nbr: z.string(),
    currency: CurrencySchema,
    description: z.any(),
    invoice_nbr: z.string(),
    is_invoiceable: z.boolean(),
    key: z.number(),
    status: StatusSchema,
    system_id: z.number(),
    type: z.string(),
});
export const CreditNoteSchema = z.object({
    date: z.string(),
    nbr: z.string(),
    reason: z.string(),
    system_id: z.string().nullable(),
    user: z.string().nullable(),
});
export const InvoiceSchema = z.object({
    billed_to_name: z.any(),
    billed_to_tax: z.any(),
    booking_nbr: z.string(),
    credit_note: CreditNoteSchema.nullable(),
    currency: CurrencySchema,
    date: z.string(),
    items: z.array(ItemSchema),
    nbr: z.string(),
    pdf_url: z.any(),
    remark: z.string(),
    status: StatusSchema,
    system_id: z.number(),
    target: z.any(),
    user: z.string().nullable(),
    total_amount: z.any(),
});
export const InvoiceableItemReasonSchema = z.object({
    code: z.enum(['001', '002', '003']),
    description: z.string().nullable(),
});
export const InvoiceableItemSchema = z.object({
    amount: z.number(),
    booking_nbr: z.string(),
    currency: CurrencySchema,
    invoice_nbr: z.string().nullable(),
    is_invoiceable: z.boolean(),
    key: z.number(),
    status: z.any(),
    system_id: z.any(),
    reason: InvoiceableItemReasonSchema.nullable(),
    type: z.enum(['BSA', 'BSP', 'BSE', 'PAYMENT']),
});
export const BookingInvoiceInfoSchema = z.object({
    invoiceable_items: z.array(InvoiceableItemSchema),
    invoices: z.array(InvoiceSchema).nullable(),
});
//# sourceMappingURL=types.js.map
