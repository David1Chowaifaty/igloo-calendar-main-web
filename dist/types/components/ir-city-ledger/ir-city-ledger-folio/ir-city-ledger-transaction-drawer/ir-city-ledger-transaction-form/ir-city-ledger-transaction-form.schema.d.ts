import { z } from 'zod';
export declare const TRANSACTION_TYPES: {
    readonly OB: "OPENING_BALANCE";
    readonly PAY: "PAYMENT";
    readonly DB: "MANUAL_CHARGE";
    readonly ADJ: "ADJUSTMENT";
    readonly CN: "CREDIT_NOTE";
    readonly DN: "DEBIT_NOTE";
};
export declare const TRANSACTION_TYPE_RATES: Record<string, 'CR' | 'DB' | 'CR|DB'>;
export type TransactionType = keyof typeof TRANSACTION_TYPES;
export declare const ENTRY_TYPES: readonly ["CR", "DB"];
export type EntryType = (typeof ENTRY_TYPES)[number];
export interface PaymentTypeOption {
    code: string;
    description: string;
    operation: EntryType;
}
export interface PaymentMethodOption {
    code: string;
    description: string;
    operation?: string | null;
}
export declare const LINK_TYPES: readonly ["INVOICE", "BOOKING", "NONE"];
export type LinkType = (typeof LINK_TYPES)[number];
export declare const ADJUSTMENT_REASONS: readonly ["ROUNDING_DIFFERENCE", "GOODWILL_CREDIT", "PRICE_MATCH", "COMMISSION_CORRECTION", "DISCOUNT_CORRECTION"];
export type AdjustmentReason = (typeof ADJUSTMENT_REASONS)[number];
export interface TaxOption {
    id: string;
    label: string;
}
export interface LinkedOption {
    id: string;
    label: string;
}
export interface ServiceCategoryOption {
    id: string;
    label: string;
}
export interface CityLedgerTransactionFormDraft {
    transactionType: TransactionType;
    date: string;
    amount: string;
    taxId: string;
    reference: string;
    notes: string;
    entryType?: EntryType | '';
    isCutover: boolean;
    payment_type?: PaymentTypeOption | null;
    payment_method?: PaymentMethodOption | null;
    designation?: string;
    invoiceId?: string;
    onAccount: boolean;
    serviceCategoryId?: string;
    linkType?: LinkType;
    linkedId?: string;
    reason?: AdjustmentReason | '';
    generatesFiscalDocument?: boolean;
}
export declare const cityLedgerTransactionSchema: z.ZodEffects<z.ZodDiscriminatedUnion<"transactionType", [z.ZodObject<z.objectUtil.extendShape<{
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    amount: z.ZodNumber;
    taxId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodLiteral<"OB">;
    entryType: z.ZodEnum<["CR", "DB"]>;
    isCutover: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "OB";
    entryType?: "CR" | "DB";
    isCutover?: boolean;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "OB";
    entryType?: "CR" | "DB";
    isCutover?: boolean;
}>, z.ZodObject<z.objectUtil.extendShape<{
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    amount: z.ZodNumber;
    taxId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodLiteral<"PAY">;
    payment_type: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        description: z.ZodString;
        operation: z.ZodEnum<["CR", "DB"]>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    }, {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    }>>>;
    payment_method: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        description: z.ZodString;
        operation: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
        operation?: string;
    }, {
        code?: string;
        description?: string;
        operation?: string;
    }>>>;
    designation: z.ZodOptional<z.ZodString>;
    invoiceId: z.ZodOptional<z.ZodString>;
    onAccount: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    designation?: string;
    payment_type?: {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    };
    payment_method?: {
        code?: string;
        description?: string;
        operation?: string;
    };
    taxId?: string;
    transactionType?: "PAY";
    invoiceId?: string;
    onAccount?: boolean;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    designation?: string;
    payment_type?: {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    };
    payment_method?: {
        code?: string;
        description?: string;
        operation?: string;
    };
    taxId?: string;
    transactionType?: "PAY";
    invoiceId?: string;
    onAccount?: boolean;
}>, z.ZodObject<z.objectUtil.extendShape<{
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    amount: z.ZodNumber;
    taxId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodLiteral<"DB">;
    serviceCategoryId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DB";
    serviceCategoryId?: string;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DB";
    serviceCategoryId?: string;
}>, z.ZodObject<z.objectUtil.extendShape<{
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    amount: z.ZodNumber;
    taxId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodLiteral<"ADJ">;
    entryType: z.ZodEnum<["CR", "DB"]>;
    linkType: z.ZodEnum<["INVOICE", "BOOKING", "NONE"]>;
    linkedId: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodEnum<["ROUNDING_DIFFERENCE", "GOODWILL_CREDIT", "PRICE_MATCH", "COMMISSION_CORRECTION", "DISCOUNT_CORRECTION"]>>;
}>, "strip", z.ZodTypeAny, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    reason?: "ROUNDING_DIFFERENCE" | "GOODWILL_CREDIT" | "PRICE_MATCH" | "COMMISSION_CORRECTION" | "DISCOUNT_CORRECTION";
    taxId?: string;
    transactionType?: "ADJ";
    entryType?: "CR" | "DB";
    linkType?: "NONE" | "INVOICE" | "BOOKING";
    linkedId?: string;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    reason?: "ROUNDING_DIFFERENCE" | "GOODWILL_CREDIT" | "PRICE_MATCH" | "COMMISSION_CORRECTION" | "DISCOUNT_CORRECTION";
    taxId?: string;
    transactionType?: "ADJ";
    entryType?: "CR" | "DB";
    linkType?: "NONE" | "INVOICE" | "BOOKING";
    linkedId?: string;
}>, z.ZodObject<z.objectUtil.extendShape<{
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    amount: z.ZodNumber;
    taxId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodLiteral<"CN">;
    invoiceId: z.ZodString;
    generatesFiscalDocument: z.ZodLiteral<true>;
}>, "strip", z.ZodTypeAny, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "CN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "CN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}>, z.ZodObject<z.objectUtil.extendShape<{
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    amount: z.ZodNumber;
    taxId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodLiteral<"DN">;
    invoiceId: z.ZodString;
    generatesFiscalDocument: z.ZodLiteral<true>;
}>, "strip", z.ZodTypeAny, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}>]>, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "OB";
    entryType?: "CR" | "DB";
    isCutover?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    designation?: string;
    payment_type?: {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    };
    payment_method?: {
        code?: string;
        description?: string;
        operation?: string;
    };
    taxId?: string;
    transactionType?: "PAY";
    invoiceId?: string;
    onAccount?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DB";
    serviceCategoryId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    reason?: "ROUNDING_DIFFERENCE" | "GOODWILL_CREDIT" | "PRICE_MATCH" | "COMMISSION_CORRECTION" | "DISCOUNT_CORRECTION";
    taxId?: string;
    transactionType?: "ADJ";
    entryType?: "CR" | "DB";
    linkType?: "NONE" | "INVOICE" | "BOOKING";
    linkedId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "CN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "OB";
    entryType?: "CR" | "DB";
    isCutover?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    designation?: string;
    payment_type?: {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    };
    payment_method?: {
        code?: string;
        description?: string;
        operation?: string;
    };
    taxId?: string;
    transactionType?: "PAY";
    invoiceId?: string;
    onAccount?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DB";
    serviceCategoryId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    reason?: "ROUNDING_DIFFERENCE" | "GOODWILL_CREDIT" | "PRICE_MATCH" | "COMMISSION_CORRECTION" | "DISCOUNT_CORRECTION";
    taxId?: string;
    transactionType?: "ADJ";
    entryType?: "CR" | "DB";
    linkType?: "NONE" | "INVOICE" | "BOOKING";
    linkedId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "CN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}>;
export type CityLedgerTransactionPayload = z.infer<typeof cityLedgerTransactionSchema>;
export declare const DATE_INPUT_FORMAT = "YYYY-MM-DD";
export declare const createInitialTransactionFormDraft: (transactionType?: TransactionType) => CityLedgerTransactionFormDraft;
export declare const resetDraftForTransactionType: (nextType: TransactionType, current: CityLedgerTransactionFormDraft) => CityLedgerTransactionFormDraft;
export declare const buildTransactionPayloadInput: (draft: CityLedgerTransactionFormDraft) => Record<string, unknown>;
export declare const validateCityLedgerTransaction: (draft: CityLedgerTransactionFormDraft) => z.SafeParseReturnType<{
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "OB";
    entryType?: "CR" | "DB";
    isCutover?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    designation?: string;
    payment_type?: {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    };
    payment_method?: {
        code?: string;
        description?: string;
        operation?: string;
    };
    taxId?: string;
    transactionType?: "PAY";
    invoiceId?: string;
    onAccount?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DB";
    serviceCategoryId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    reason?: "ROUNDING_DIFFERENCE" | "GOODWILL_CREDIT" | "PRICE_MATCH" | "COMMISSION_CORRECTION" | "DISCOUNT_CORRECTION";
    taxId?: string;
    transactionType?: "ADJ";
    entryType?: "CR" | "DB";
    linkType?: "NONE" | "INVOICE" | "BOOKING";
    linkedId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "CN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}, {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "OB";
    entryType?: "CR" | "DB";
    isCutover?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    designation?: string;
    payment_type?: {
        code?: string;
        description?: string;
        operation?: "CR" | "DB";
    };
    payment_method?: {
        code?: string;
        description?: string;
        operation?: string;
    };
    taxId?: string;
    transactionType?: "PAY";
    invoiceId?: string;
    onAccount?: boolean;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DB";
    serviceCategoryId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    reason?: "ROUNDING_DIFFERENCE" | "GOODWILL_CREDIT" | "PRICE_MATCH" | "COMMISSION_CORRECTION" | "DISCOUNT_CORRECTION";
    taxId?: string;
    transactionType?: "ADJ";
    entryType?: "CR" | "DB";
    linkType?: "NONE" | "INVOICE" | "BOOKING";
    linkedId?: string;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "CN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
} | {
    date?: string;
    notes?: string;
    reference?: string;
    amount?: number;
    taxId?: string;
    transactionType?: "DN";
    invoiceId?: string;
    generatesFiscalDocument?: true;
}>;
export declare const transactionTypeFieldSchema: z.ZodEnum<[string, ...string[]]>;
export declare const dateFieldSchema: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
export declare const amountFieldSchema: z.ZodNumber;
export declare const taxIdFieldSchema: z.ZodString;
export declare const entryTypeFieldSchema: z.ZodEnum<["CR", "DB"]>;
export declare const paymentTypeCodeFieldSchema: z.ZodString;
export declare const paymentMethodCodeFieldSchema: z.ZodString;
export declare const invoiceIdRequiredFieldSchema: z.ZodString;
export declare const serviceCategoryFieldSchema: z.ZodString;
export declare const linkTypeFieldSchema: z.ZodEnum<["INVOICE", "BOOKING", "NONE"]>;
export declare const reasonFieldSchema: z.ZodEnum<["ROUNDING_DIFFERENCE", "GOODWILL_CREDIT", "PRICE_MATCH", "COMMISSION_CORRECTION", "DISCOUNT_CORRECTION"]>;
export declare const exampleSubmissionPayload: CityLedgerTransactionPayload;
