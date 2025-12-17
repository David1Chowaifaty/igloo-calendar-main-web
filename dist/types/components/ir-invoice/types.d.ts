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
    system_id?: number;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
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
    system_id?: number;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
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
    user: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    user?: string;
    system_id?: string;
    date?: string;
    reason?: string;
    nbr?: string;
}, {
    user?: string;
    system_id?: string;
    date?: string;
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
        user: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        user?: string;
        system_id?: string;
        date?: string;
        reason?: string;
        nbr?: string;
    }, {
        user?: string;
        system_id?: string;
        date?: string;
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
        system_id?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
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
        system_id?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
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
    remark: z.ZodString;
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
    user: z.ZodNullable<z.ZodString>;
    total_amount: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    user?: string;
    system_id?: number;
    date?: string;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    status?: {
        code?: string;
        description?: any;
    };
    booking_nbr?: string;
    target?: any;
    nbr?: string;
    remark?: string;
    billed_to_name?: any;
    billed_to_tax?: any;
    items?: {
        key?: number;
        system_id?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
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
        user?: string;
        system_id?: string;
        date?: string;
        reason?: string;
        nbr?: string;
    };
    pdf_url?: any;
    total_amount?: any;
}, {
    user?: string;
    system_id?: number;
    date?: string;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    status?: {
        code?: string;
        description?: any;
    };
    booking_nbr?: string;
    target?: any;
    nbr?: string;
    remark?: string;
    billed_to_name?: any;
    billed_to_tax?: any;
    items?: {
        key?: number;
        system_id?: number;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
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
        user?: string;
        system_id?: string;
        date?: string;
        reason?: string;
        nbr?: string;
    };
    pdf_url?: any;
    total_amount?: any;
}>;
export type Invoice = z.infer<typeof InvoiceSchema>;
/**
 * `"BSA"` = Accommodation
 * `"BSP"` = Pickup
 * `"BSE"` = Extra service
 * `"PAYMENT"` = Cancellation payment
 */
export type InvoiceableItemType = 'BSA' | 'BSP' | 'BSE' | 'PAYMENT';
/**
 * `"001"` = Already invoiced
 * `"002"` = Not Checked-Out yet
 * `"003"` = Due to pickup cancellation policy
 */
export type InvoiceableItemReasonCode = '001' | '002' | '003';
export declare const InvoiceableItemReasonSchema: z.ZodObject<{
    code: z.ZodType<InvoiceableItemReasonCode>;
    description: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code?: InvoiceableItemReasonCode;
    description?: string;
}, {
    code?: InvoiceableItemReasonCode;
    description?: string;
}>;
export declare const InvoiceableItemSchema: z.ZodObject<{
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
    reason: z.ZodNullable<z.ZodObject<{
        code: z.ZodType<InvoiceableItemReasonCode>;
        description: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code?: InvoiceableItemReasonCode;
        description?: string;
    }, {
        code?: InvoiceableItemReasonCode;
        description?: string;
    }>>;
    type: z.ZodType<InvoiceableItemType>;
}, "strip", z.ZodTypeAny, {
    key?: number;
    system_id?: any;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    type?: InvoiceableItemType;
    status?: any;
    booking_nbr?: string;
    invoice_nbr?: string;
    reason?: {
        code?: InvoiceableItemReasonCode;
        description?: string;
    };
    is_invoiceable?: boolean;
}, {
    key?: number;
    system_id?: any;
    amount?: number;
    currency?: {
        symbol?: string;
        id?: number;
        code?: string;
    };
    type?: InvoiceableItemType;
    status?: any;
    booking_nbr?: string;
    invoice_nbr?: string;
    reason?: {
        code?: InvoiceableItemReasonCode;
        description?: string;
    };
    is_invoiceable?: boolean;
}>;
export type InvoiceableItem = z.infer<typeof InvoiceableItemSchema>;
export declare const BookingInvoiceInfoSchema: z.ZodObject<{
    invoiceable_items: z.ZodArray<z.ZodObject<{
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
        reason: z.ZodNullable<z.ZodObject<{
            code: z.ZodType<InvoiceableItemReasonCode>;
            description: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: InvoiceableItemReasonCode;
            description?: string;
        }, {
            code?: InvoiceableItemReasonCode;
            description?: string;
        }>>;
        type: z.ZodType<InvoiceableItemType>;
    }, "strip", z.ZodTypeAny, {
        key?: number;
        system_id?: any;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoiceableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        reason?: {
            code?: InvoiceableItemReasonCode;
            description?: string;
        };
        is_invoiceable?: boolean;
    }, {
        key?: number;
        system_id?: any;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoiceableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        reason?: {
            code?: InvoiceableItemReasonCode;
            description?: string;
        };
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
            user: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user?: string;
            system_id?: string;
            date?: string;
            reason?: string;
            nbr?: string;
        }, {
            user?: string;
            system_id?: string;
            date?: string;
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
            system_id?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
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
            system_id?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
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
        remark: z.ZodString;
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
        user: z.ZodNullable<z.ZodString>;
        total_amount: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        user?: string;
        system_id?: number;
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        remark?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            system_id?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
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
            user?: string;
            system_id?: string;
            date?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        total_amount?: any;
    }, {
        user?: string;
        system_id?: number;
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        remark?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            system_id?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
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
            user?: string;
            system_id?: string;
            date?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        total_amount?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    invoiceable_items?: {
        key?: number;
        system_id?: any;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoiceableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        reason?: {
            code?: InvoiceableItemReasonCode;
            description?: string;
        };
        is_invoiceable?: boolean;
    }[];
    invoices?: {
        user?: string;
        system_id?: number;
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        remark?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            system_id?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
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
            user?: string;
            system_id?: string;
            date?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        total_amount?: any;
    }[];
}, {
    invoiceable_items?: {
        key?: number;
        system_id?: any;
        amount?: number;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        type?: InvoiceableItemType;
        status?: any;
        booking_nbr?: string;
        invoice_nbr?: string;
        reason?: {
            code?: InvoiceableItemReasonCode;
            description?: string;
        };
        is_invoiceable?: boolean;
    }[];
    invoices?: {
        user?: string;
        system_id?: number;
        date?: string;
        currency?: {
            symbol?: string;
            id?: number;
            code?: string;
        };
        status?: {
            code?: string;
            description?: any;
        };
        booking_nbr?: string;
        target?: any;
        nbr?: string;
        remark?: string;
        billed_to_name?: any;
        billed_to_tax?: any;
        items?: {
            key?: number;
            system_id?: number;
            amount?: number;
            currency?: {
                symbol?: string;
                id?: number;
                code?: string;
            };
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
            user?: string;
            system_id?: string;
            date?: string;
            reason?: string;
            nbr?: string;
        };
        pdf_url?: any;
        total_amount?: any;
    }[];
}>;
export type BookingInvoiceInfo = z.infer<typeof BookingInvoiceInfoSchema>;
export type ViewMode = 'invoice' | 'proforma';
