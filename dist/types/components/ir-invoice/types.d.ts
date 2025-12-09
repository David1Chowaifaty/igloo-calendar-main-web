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
export declare const StatusSchema: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: any;
}, {
    code?: string;
    description?: any;
}>;
export type Status = z.infer<typeof StatusSchema>;
export declare const ItemSchema: z.ZodObject<{
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
    description: z.ZodAny;
    invoice_nbr: z.ZodString;
    is_invoiceable: z.ZodBoolean;
    key: z.ZodNumber;
    status: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: any;
    }, {
        code?: string;
        description?: any;
    }>;
    system_id: z.ZodNumber;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key?: number;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    system_id?: number;
    type?: string;
    status?: {
        code?: string;
        description?: any;
    };
    description?: any;
    booking_nbr?: string;
    invoice_nbr?: string;
    is_invoiceable?: boolean;
}, {
    key?: number;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    system_id?: number;
    type?: string;
    status?: {
        code?: string;
        description?: any;
    };
    description?: any;
    booking_nbr?: string;
    invoice_nbr?: string;
    is_invoiceable?: boolean;
}>;
export type Item = z.infer<typeof ItemSchema>;
export declare const CreditNoteSchema: z.ZodObject<{
    date: z.ZodString;
    nbr: z.ZodString;
    reason: z.ZodString;
    system_id: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    date?: string;
    system_id?: string;
    reason?: string;
    nbr?: string;
}, {
    date?: string;
    system_id?: string;
    reason?: string;
    nbr?: string;
}>;
export declare const InvoiceSchema: z.ZodObject<{
    billed_to_name: z.ZodAny;
    billed_to_tax: z.ZodAny;
    booking_nbr: z.ZodString;
    credit_note: z.ZodNullable<z.ZodObject<{
        date: z.ZodString;
        nbr: z.ZodString;
        reason: z.ZodString;
        system_id: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        date?: string;
        system_id?: string;
        reason?: string;
        nbr?: string;
    }, {
        date?: string;
        system_id?: string;
        reason?: string;
        nbr?: string;
    }>>;
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
    date: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
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
        description: z.ZodAny;
        invoice_nbr: z.ZodString;
        is_invoiceable: z.ZodBoolean;
        key: z.ZodNumber;
        status: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: any;
        }, {
            code?: string;
            description?: any;
        }>;
        system_id: z.ZodNumber;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        type?: string;
        status?: {
            code?: string;
            description?: any;
        };
        description?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }, {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        type?: string;
        status?: {
            code?: string;
            description?: any;
        };
        description?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }>, "many">;
    nbr: z.ZodString;
    pdf_url: z.ZodAny;
    remnark: z.ZodString;
    status: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: any;
    }, {
        code?: string;
        description?: any;
    }>;
    system_id: z.ZodNumber;
    target: z.ZodAny;
    total_amount: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    date?: string;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    system_id?: number;
    status?: {
        code?: string;
        description?: any;
    };
    booking_nbr?: string;
    target?: any;
    nbr?: string;
    billed_to_name?: any;
    billed_to_tax?: any;
    items?: {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        type?: string;
        status?: {
            code?: string;
            description?: any;
        };
        description?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }[];
    credit_note?: {
        date?: string;
        system_id?: string;
        reason?: string;
        nbr?: string;
    };
    pdf_url?: any;
    remnark?: string;
    total_amount?: any;
}, {
    date?: string;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    system_id?: number;
    status?: {
        code?: string;
        description?: any;
    };
    booking_nbr?: string;
    target?: any;
    nbr?: string;
    billed_to_name?: any;
    billed_to_tax?: any;
    items?: {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        type?: string;
        status?: {
            code?: string;
            description?: any;
        };
        description?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }[];
    credit_note?: {
        date?: string;
        system_id?: string;
        reason?: string;
        nbr?: string;
    };
    pdf_url?: any;
    remnark?: string;
    total_amount?: any;
}>;
export type Invoice = z.infer<typeof InvoiceSchema>;
/**
 * `"BSA"` = Accommodation
 * `"BSP"` = Pickup
 * `"BSE"` = Extra service
 * `"PAYMENT"` = Cancellation payment
 */
export type InvoicableItemType = 'BSA' | 'BSP' | 'BSE' | 'PAYMENT';
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
    invoice_nbr: z.ZodNullable<z.ZodString>;
    is_invoiceable: z.ZodBoolean;
    key: z.ZodNumber;
    status: z.ZodAny;
    system_id: z.ZodAny;
    type: z.ZodType<InvoicableItemType>;
}, "strip", z.ZodTypeAny, {
    key?: number;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    system_id?: any;
    type?: InvoicableItemType;
    status?: any;
    booking_nbr?: string;
    invoice_nbr?: string;
    is_invoiceable?: boolean;
}, {
    key?: number;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    system_id?: any;
    type?: InvoicableItemType;
    status?: any;
    booking_nbr?: string;
    invoice_nbr?: string;
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
        invoice_nbr: z.ZodNullable<z.ZodString>;
        is_invoiceable: z.ZodBoolean;
        key: z.ZodNumber;
        status: z.ZodAny;
        system_id: z.ZodAny;
        type: z.ZodType<InvoicableItemType>;
    }, "strip", z.ZodTypeAny, {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: any;
        type?: InvoicableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }, {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: any;
        type?: InvoicableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }>, "many">;
    invoices: z.ZodNullable<z.ZodArray<z.ZodObject<{
        billed_to_name: z.ZodAny;
        billed_to_tax: z.ZodAny;
        booking_nbr: z.ZodString;
        credit_note: z.ZodNullable<z.ZodObject<{
            date: z.ZodString;
            nbr: z.ZodString;
            reason: z.ZodString;
            system_id: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            date?: string;
            system_id?: string;
            reason?: string;
            nbr?: string;
        }, {
            date?: string;
            system_id?: string;
            reason?: string;
            nbr?: string;
        }>>;
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
        date: z.ZodString;
        items: z.ZodArray<z.ZodObject<{
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
            description: z.ZodAny;
            invoice_nbr: z.ZodString;
            is_invoiceable: z.ZodBoolean;
            key: z.ZodNumber;
            status: z.ZodObject<{
                code: z.ZodString;
                description: z.ZodAny;
            }, "strip", z.ZodTypeAny, {
                code?: string;
                description?: any;
            }, {
                code?: string;
                description?: any;
            }>;
            system_id: z.ZodNumber;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            key?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
            system_id?: number;
            type?: string;
            status?: {
                code?: string;
                description?: any;
            };
            description?: any;
            booking_nbr?: string;
            invoice_nbr?: string;
            is_invoiceable?: boolean;
        }, {
            key?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
            system_id?: number;
            type?: string;
            status?: {
                code?: string;
                description?: any;
            };
            description?: any;
            booking_nbr?: string;
            invoice_nbr?: string;
            is_invoiceable?: boolean;
        }>, "many">;
        nbr: z.ZodString;
        pdf_url: z.ZodAny;
        remnark: z.ZodString;
        status: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: any;
        }, {
            code?: string;
            description?: any;
        }>;
        system_id: z.ZodNumber;
        target: z.ZodAny;
        total_amount: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
            system_id?: number;
            type?: string;
            status?: {
                code?: string;
                description?: any;
            };
            description?: any;
            booking_nbr?: string;
            invoice_nbr?: string;
            is_invoiceable?: boolean;
        }[];
        credit_note?: {
            date?: string;
            system_id?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        remnark?: string;
        total_amount?: any;
    }, {
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
            system_id?: number;
            type?: string;
            status?: {
                code?: string;
                description?: any;
            };
            description?: any;
            booking_nbr?: string;
            invoice_nbr?: string;
            is_invoiceable?: boolean;
        }[];
        credit_note?: {
            date?: string;
            system_id?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        remnark?: string;
        total_amount?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    invoicable_items?: {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: any;
        type?: InvoicableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }[];
    invoices?: {
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
            system_id?: number;
            type?: string;
            status?: {
                code?: string;
                description?: any;
            };
            description?: any;
            booking_nbr?: string;
            invoice_nbr?: string;
            is_invoiceable?: boolean;
        }[];
        credit_note?: {
            date?: string;
            system_id?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        remnark?: string;
        total_amount?: any;
    }[];
}, {
    invoicable_items?: {
        key?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: any;
        type?: InvoicableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        is_invoiceable?: boolean;
    }[];
    invoices?: {
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        system_id?: number;
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
            system_id?: number;
            type?: string;
            status?: {
                code?: string;
                description?: any;
            };
            description?: any;
            booking_nbr?: string;
            invoice_nbr?: string;
            is_invoiceable?: boolean;
        }[];
        credit_note?: {
            date?: string;
            system_id?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        remnark?: string;
        total_amount?: any;
    }[];
}>;
export type BookingInvoiceInfo = z.infer<typeof BookingInvoiceInfoSchema>;
