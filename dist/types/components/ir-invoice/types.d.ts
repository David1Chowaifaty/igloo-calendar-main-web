import * as z from 'zod';
export declare const CurrencySchema: z.ZodObject<{
    code: z.ZodString;
    id: z.ZodNumber;
    symbol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol?: string;
    id?: number;
    code?: string;
}, {
    symbol?: string;
    id?: number;
    code?: string;
}>;
export type Currency = z.infer<typeof CurrencySchema>;
/**
 * `"BSA"` = Accommodation
 * `"BSP"` = Pickup
 * `"BSE"` = Extra service
 */
export type InvoicableItemType = 'BSA' | 'BSP' | 'BSE';
export declare const InvoicableItemSchema: z.ZodObject<{
    amount: z.ZodNumber;
    booking_nbr: z.ZodString;
    currency: z.ZodObject<{
        code: z.ZodString;
        id: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        id?: number;
        code?: string;
    }, {
        symbol?: string;
        id?: number;
        code?: string;
    }>;
    invoice_nbr: z.ZodNull;
    is_invoiceable: z.ZodBoolean;
    key: z.ZodNull;
    status: z.ZodNull;
    system_id: z.ZodNull;
    type: z.ZodType<InvoicableItemType>;
}, "strip", z.ZodTypeAny, {
    key?: null;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    type?: InvoicableItemType;
    status?: null;
    system_id?: null;
    booking_nbr?: string;
    invoice_nbr?: null;
    is_invoiceable?: boolean;
}, {
    key?: null;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    type?: InvoicableItemType;
    status?: null;
    system_id?: null;
    booking_nbr?: string;
    invoice_nbr?: null;
    is_invoiceable?: boolean;
}>;
export type InvoicableItem = z.infer<typeof InvoicableItemSchema>;
export declare const BookingInvoiceInfoSchema: z.ZodObject<{
    invoicable_items: z.ZodArray<z.ZodObject<{
        amount: z.ZodNumber;
        booking_nbr: z.ZodString;
        currency: z.ZodObject<{
            code: z.ZodString;
            id: z.ZodNumber;
            symbol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            symbol?: string;
            id?: number;
            code?: string;
        }, {
            symbol?: string;
            id?: number;
            code?: string;
        }>;
        invoice_nbr: z.ZodNull;
        is_invoiceable: z.ZodBoolean;
        key: z.ZodNull;
        status: z.ZodNull;
        system_id: z.ZodNull;
        type: z.ZodType<InvoicableItemType>;
    }, "strip", z.ZodTypeAny, {
        key?: null;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoicableItemType;
        status?: null;
        system_id?: null;
        booking_nbr?: string;
        invoice_nbr?: null;
        is_invoiceable?: boolean;
    }, {
        key?: null;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoicableItemType;
        status?: null;
        system_id?: null;
        booking_nbr?: string;
        invoice_nbr?: null;
        is_invoiceable?: boolean;
    }>, "many">;
    invoices: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    invoicable_items?: {
        key?: null;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoicableItemType;
        status?: null;
        system_id?: null;
        booking_nbr?: string;
        invoice_nbr?: null;
        is_invoiceable?: boolean;
    }[];
    invoices?: any[];
}, {
    invoicable_items?: {
        key?: null;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoicableItemType;
        status?: null;
        system_id?: null;
        booking_nbr?: string;
        invoice_nbr?: null;
        is_invoiceable?: boolean;
    }[];
    invoices?: any[];
}>;
export type BookingInvoiceInfo = z.infer<typeof BookingInvoiceInfoSchema>;
