import moment from "moment";
import { z } from "zod";
export const TRANSACTION_TYPES = { OB: 'OPENING_BALANCE', PAY: 'PAYMENT', DB: 'MANUAL_CHARGE', ADJ: 'ADJUSTMENT', CN: 'CREDIT_NOTE', DN: 'DEBIT_NOTE' };
export const TRANSACTION_TYPE_RATES = {
    OB: 'CR|DB',
    PAY: 'CR',
    DB: 'DB',
    ADJ: 'CR|DB',
    CN: 'CR',
    DN: 'DB',
};
export const ENTRY_TYPES = ['CR', 'DB'];
export const LINK_TYPES = ['INVOICE', 'BOOKING', 'NONE'];
export const ADJUSTMENT_REASONS = ['ROUNDING_DIFFERENCE', 'GOODWILL_CREDIT', 'PRICE_MATCH', 'COMMISSION_CORRECTION', 'DISCOUNT_CORRECTION'];
const DATE_FORMAT = 'YYYY-MM-DD';
const dateSchema = z
    .string()
    .refine(value => moment(value, DATE_FORMAT, true).isValid(), 'Date must be in YYYY-MM-DD format.')
    .refine(value => {
    const valueDate = moment(value, DATE_FORMAT, true).startOf('day');
    const minimumAllowedDate = moment().startOf('day').subtract(12, 'months');
    return !valueDate.isBefore(minimumAllowedDate);
}, 'Date cannot be older than 12 months from today.');
const commonFieldsSchema = z.object({
    date: dateSchema,
    amount: z.coerce.number().gt(0, 'Amount must be greater than 0.'),
    taxId: z.string().min(1, 'Tax selection is required.'),
    reference: z.string().optional(),
    notes: z.string().max(500).optional(),
});
const openingBalanceSchema = commonFieldsSchema.extend({
    transactionType: z.literal('OB'),
    entryType: z.enum(ENTRY_TYPES),
    isCutover: z.boolean(),
});
const paymentTypeSchema = z.object({
    code: z.string().min(3).max(4),
    description: z.string(),
    operation: z.enum(ENTRY_TYPES),
});
const paymentMethodSchema = z.object({
    code: z.string().min(3).max(4),
    description: z.string(),
    operation: z.string().optional().nullable(),
});
const paymentSchema = commonFieldsSchema.extend({
    transactionType: z.literal('PAY'),
    payment_type: paymentTypeSchema.nullable().optional(),
    payment_method: paymentMethodSchema.nullable().optional(),
    designation: z.string().optional(),
    invoiceId: z.string().optional(),
    onAccount: z.boolean(),
});
const manualChargeSchema = commonFieldsSchema.extend({
    transactionType: z.literal('DB'),
    serviceCategoryId: z.string().optional(),
});
const adjustmentSchema = commonFieldsSchema.extend({
    transactionType: z.literal('ADJ'),
    entryType: z.enum(ENTRY_TYPES),
    linkType: z.enum(LINK_TYPES),
    linkedId: z.string().optional(),
    reason: z.enum(ADJUSTMENT_REASONS).optional(),
});
const creditNoteSchema = commonFieldsSchema.extend({
    transactionType: z.literal('CN'),
    invoiceId: z.string().min(1, 'Invoice is required for credit note.'),
    generatesFiscalDocument: z.literal(true),
});
const debitNoteSchema = commonFieldsSchema.extend({
    transactionType: z.literal('DN'),
    invoiceId: z.string().min(1, 'Invoice is required for debit note.'),
    generatesFiscalDocument: z.literal(true),
});
export const cityLedgerTransactionSchema = z
    .discriminatedUnion('transactionType', [openingBalanceSchema, paymentSchema, manualChargeSchema, adjustmentSchema, creditNoteSchema, debitNoteSchema])
    .superRefine((data, ctx) => {
    if (data.transactionType === 'PAY' && data.onAccount && data.invoiceId) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['invoiceId'],
            message: 'Invoice must be empty when payment is marked as on account.',
        });
    }
    if (data.transactionType === 'ADJ' && data.linkType === 'NONE' && data.linkedId) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['linkedId'],
            message: 'linkedId must be empty when link type is NONE.',
        });
    }
});
export const DATE_INPUT_FORMAT = DATE_FORMAT;
const todayDate = () => moment().format(DATE_FORMAT);
const conditionalDefaultsByType = (transactionType) => {
    switch (transactionType) {
        case 'OB':
            return {
                entryType: '',
                isCutover: false,
            };
        case 'PAY':
            return {
                payment_method: null,
                designation: undefined,
                invoiceId: undefined,
                onAccount: false,
            };
        case 'DB':
            return {
                serviceCategoryId: undefined,
            };
        case 'ADJ':
            return {
                entryType: '',
                linkType: 'NONE',
                linkedId: undefined,
            };
        case 'CN':
        case 'DN':
            return {
                invoiceId: undefined,
                generatesFiscalDocument: true,
            };
        default:
            return {};
    }
};
export const createInitialTransactionFormDraft = (transactionType = 'OB') => ({
    transactionType,
    date: todayDate(),
    amount: '',
    taxId: 'N/A',
    reference: '',
    notes: '',
    entryType: '',
    isCutover: false,
    payment_type: null,
    payment_method: null,
    designation: undefined,
    invoiceId: undefined,
    onAccount: false,
    serviceCategoryId: undefined,
    linkType: 'NONE',
    linkedId: undefined,
    reason: '',
    generatesFiscalDocument: transactionType === 'CN' || transactionType === 'DN',
    ...conditionalDefaultsByType(transactionType),
});
export const resetDraftForTransactionType = (nextType, current) => ({
    ...createInitialTransactionFormDraft(nextType),
    transactionType: nextType,
    date: current.date || todayDate(),
    amount: current.amount,
    taxId: current.taxId || 'N/A',
    reference: current.reference || '',
});
export const buildTransactionPayloadInput = (draft) => {
    const basePayload = {
        transactionType: draft.transactionType,
        date: draft.date,
        amount: draft.amount,
        taxId: draft.taxId,
        reference: draft.reference || undefined,
    };
    switch (draft.transactionType) {
        case 'OB':
            return {
                ...basePayload,
                entryType: draft.entryType,
                isCutover: draft.isCutover,
            };
        case 'PAY':
            return {
                ...basePayload,
                payment_method: draft.payment_method,
                designation: draft.designation,
                invoiceId: draft.onAccount ? undefined : draft.invoiceId,
                onAccount: draft.onAccount,
            };
        case 'DB':
            return {
                ...basePayload,
                serviceCategoryId: draft.serviceCategoryId,
            };
        case 'ADJ':
            return {
                ...basePayload,
                entryType: draft.entryType,
                linkType: draft.linkType,
                linkedId: draft.linkType === 'NONE' ? undefined : draft.linkedId,
                reason: draft.reason || undefined,
            };
        case 'CN':
        case 'DN':
            return {
                ...basePayload,
                invoiceId: draft.invoiceId,
                generatesFiscalDocument: true,
            };
        default:
            return basePayload;
    }
};
export const validateCityLedgerTransaction = (draft) => cityLedgerTransactionSchema.safeParse(buildTransactionPayloadInput(draft));
// ── Individual field schemas for ir-validator ────────────────────────────────
export const transactionTypeFieldSchema = z.enum(Object.keys(TRANSACTION_TYPES));
export const dateFieldSchema = dateSchema;
export const amountFieldSchema = z.coerce.number().gt(0, 'Amount must be greater than 0.');
export const taxIdFieldSchema = z.string().min(1, 'Tax selection is required.');
export const entryTypeFieldSchema = z.enum(ENTRY_TYPES);
export const paymentTypeCodeFieldSchema = z.string().min(1, 'Payment type is required.');
export const paymentMethodCodeFieldSchema = z.string().min(1, 'Payment method is required.');
export const invoiceIdRequiredFieldSchema = z.string().min(1, 'Invoice is required.');
export const serviceCategoryFieldSchema = z.string().min(1, 'Service category is required.');
export const linkTypeFieldSchema = z.enum(LINK_TYPES);
export const reasonFieldSchema = z.enum(ADJUSTMENT_REASONS);
export const exampleSubmissionPayload = {
    transactionType: 'PAY',
    date: todayDate(),
    amount: 150.5,
    taxId: 'N/A',
    reference: 'Manual receipt #A-1298',
    payment_type: {
        code: '001',
        description: 'Cash',
        operation: 'CR',
    },
    payment_method: {
        code: '001',
        description: 'Cash',
        operation: 'CR',
    },
    designation: 'Cash',
    onAccount: false,
    invoiceId: 'INV-2026-00048',
};
//# sourceMappingURL=ir-city-ledger-transaction-form.schema.js.map
