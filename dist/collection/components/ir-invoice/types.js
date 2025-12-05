import * as z from "zod";
export const CurrencySchema = z.object({
    code: z.string(),
    id: z.number(),
    symbol: z.string(),
});
export const InvoicableItemSchema = z.object({
    amount: z.number(),
    booking_nbr: z.string(),
    currency: CurrencySchema,
    invoice_nbr: z.null(),
    is_invoiceable: z.boolean(),
    key: z.null(),
    status: z.null(),
    system_id: z.null(),
    type: z.enum(['BSA', 'BSP', 'BSE']),
});
export const BookingInvoiceInfoSchema = z.object({
    invoicable_items: z.array(InvoicableItemSchema),
    invoices: z.array(z.any()),
});
//# sourceMappingURL=types.js.map
