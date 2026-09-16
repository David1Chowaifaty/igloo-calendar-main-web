import { t } from './t-Bk78Wumj.js';
import { a as arrayType, o as objectType, b as booleanType, s as stringType, d as ZodIssueCode, c as coerce, e as enumType, l as literalType, h as discriminatedUnionType } from './types-BG9uwIsj.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { C as ClTxTypeCode } from './enums-CcLtXwvz.js';

const RoomsGuestsSchema = arrayType(objectType({
    first_name: stringType().nonempty(),
    last_name: stringType().nonempty(),
    bed_preference: stringType().optional().nullable(),
    requires_bed_preference: booleanType().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: t('Lcz_BedPreferenceRequired', { fallback: 'Bed preference is required' }),
            code: ZodIssueCode.custom,
        });
    }
}));
const BookedByGuestSchema = objectType({
    firstName: stringType().nonempty(),
    lastName: stringType().nonempty(),
});
// Lazy message: this schema is built at module load, before any locale is fetched.
const dayUseTimeSchema = stringType()
    .trim()
    .refine(value => /^([01]\d|2[0-3]):[0-5]\d$/.test(value), () => ({ message: t('Lcz_EnterAValidTime', { fallback: 'Enter a valid time' }) }));
const DayUseHoursSchema = objectType({
    from: dayUseTimeSchema,
    to: dayUseTimeSchema,
});

/**
 * Every schema here is built once at module load, before any locale is fetched, so
 * messages must be resolved when the issue is raised, not when the schema is built.
 * zod v3 only takes a fixed string on `.min()` / `.gt()`; an `errorMap` on the base
 * type is the lazy equivalent (it then covers every issue on that field).
 */
const lazyMessage = (key, fallback) => ({ errorMap: () => ({ message: t(key, { fallback }) }) });
const TRANSACTION_TYPE_RATES = {
    [ClTxTypeCode.OpeningBalance]: 'CR|DB',
    [ClTxTypeCode.Payment]: 'CR',
    [ClTxTypeCode.StandardChargeDebit]: 'DB',
    [ClTxTypeCode.Adjustment]: 'CR|DB',
    [ClTxTypeCode.CreditNote]: 'CR',
    [ClTxTypeCode.DebitNote]: 'DB',
    [ClTxTypeCode.AdjustmentCredit]: 'CR',
    [ClTxTypeCode.Discount]: 'CR',
    [ClTxTypeCode.CancellationPenalty]: 'DB',
};
const ENTRY_TYPES = ['CR', 'DB'];
const LINK_TYPES = ['INVOICE', 'BOOKING', 'NONE'];
const ADJUSTMENT_REASONS = ['ROUNDING_DIFFERENCE', 'GOODWILL_CREDIT', 'PRICE_MATCH', 'COMMISSION_CORRECTION', 'DISCOUNT_CORRECTION'];
const CREDIT_NOTE_MODES = ['cancel-invoice', 'goodwill'];
const DATE_FORMAT = 'YYYY-MM-DD';
const dateSchema = stringType()
    .refine(value => hooks(value, DATE_FORMAT, true).isValid(), () => ({ message: t('Lcz_DateMustBeYmdFormat', { fallback: 'Date must be in YYYY-MM-DD format.' }) }))
    .refine(value => {
    const valueDate = hooks(value, DATE_FORMAT, true).startOf('day');
    const minimumAllowedDate = hooks().startOf('day').subtract(12, 'months');
    return !valueDate.isBefore(minimumAllowedDate);
}, () => ({ message: t('Lcz_DateNotOlderThan12Months', { fallback: 'Date cannot be older than 12 months from today.' }) }));
const commonFieldsSchema = objectType({
    date: dateSchema,
    amount: coerce.number(lazyMessage('Lcz_AmountMustBeGreaterThanZero', 'Amount must be greater than 0.')).gt(0),
    taxId: stringType(lazyMessage('Lcz_TaxSelectionRequired', 'Tax selection is required.')).min(1),
    reference: stringType().optional(),
    notes: stringType().max(500).optional(),
});
const openingBalanceSchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.OpeningBalance),
    entryType: enumType(ENTRY_TYPES),
    isCutover: booleanType(),
});
const paymentTypeSchema = objectType({
    code: stringType().min(3).max(4),
    description: stringType(),
    operation: enumType(ENTRY_TYPES),
});
const paymentMethodSchema = objectType({
    code: stringType().min(3).max(4),
    description: stringType(),
    operation: stringType().optional().nullable(),
});
const paymentSchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.Payment),
    payment_type: paymentTypeSchema.nullable().optional(),
    payment_method: paymentMethodSchema.nullable().optional(),
    designation: stringType().optional(),
    invoiceId: stringType().optional(),
    onAccount: booleanType(),
});
const manualChargeSchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.StandardChargeDebit),
    serviceCategoryId: stringType().optional(),
});
const adjustmentSchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.Adjustment),
    entryType: enumType(ENTRY_TYPES),
    linkType: enumType(LINK_TYPES),
    linkedId: stringType().optional(),
    reason: enumType(ADJUSTMENT_REASONS).optional(),
});
const creditNoteSchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.CreditNote),
    creditNoteMode: enumType(CREDIT_NOTE_MODES),
    invoiceId: stringType().optional(),
    generatesFiscalDocument: literalType(true),
    amount: coerce.number().optional(),
    taxId: stringType().optional(),
});
const debitNoteSchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.DebitNote),
    invoiceId: stringType(lazyMessage('Lcz_InvoiceRequiredForDebitNote', 'Invoice is required for debit note.')).min(1),
    generatesFiscalDocument: literalType(true),
});
const discountSchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.Discount),
});
const cancellationPenaltySchema = commonFieldsSchema.extend({
    transactionType: literalType(ClTxTypeCode.CancellationPenalty),
});
const cityLedgerTransactionSchema = discriminatedUnionType('transactionType', [
    openingBalanceSchema,
    paymentSchema,
    manualChargeSchema,
    adjustmentSchema,
    creditNoteSchema,
    debitNoteSchema,
    discountSchema,
    cancellationPenaltySchema,
])
    .superRefine((data, ctx) => {
    if (data.transactionType === ClTxTypeCode.Payment && data.onAccount && data.invoiceId) {
        ctx.addIssue({
            code: ZodIssueCode.custom,
            path: ['invoiceId'],
            message: t('Lcz_InvoiceMustBeEmptyForOnAccountPayment', { fallback: 'Invoice must be empty when payment is marked as on account.' }),
        });
    }
    if (data.transactionType === ClTxTypeCode.Adjustment && data.linkType === 'NONE' && data.linkedId) {
        ctx.addIssue({
            code: ZodIssueCode.custom,
            path: ['linkedId'],
            message: t('Lcz_LinkedRecordMustBeEmptyForNoneLinkType', { fallback: 'linkedId must be empty when link type is NONE.' }),
        });
    }
    if (data.transactionType === ClTxTypeCode.CreditNote && data.creditNoteMode === 'cancel-invoice' && !data.invoiceId) {
        ctx.addIssue({
            code: ZodIssueCode.custom,
            path: ['invoiceId'],
            message: t('Lcz_InvoiceRequiredWhenCancellingInvoice', { fallback: 'Invoice is required when cancelling an invoice.' }),
        });
    }
});
const DATE_INPUT_FORMAT = DATE_FORMAT;
const todayDate = () => hooks().format(DATE_FORMAT);
const conditionalDefaultsByType = (transactionType) => {
    switch (transactionType) {
        case ClTxTypeCode.OpeningBalance:
            return {
                entryType: '',
                isCutover: false,
            };
        case ClTxTypeCode.Payment:
            return {
                payment_method: null,
                designation: undefined,
                invoiceId: undefined,
                onAccount: true,
            };
        case ClTxTypeCode.StandardChargeDebit:
            return {
                serviceCategoryId: undefined,
            };
        case ClTxTypeCode.Adjustment:
            return {
                entryType: '',
                linkType: 'NONE',
                linkedId: undefined,
            };
        case ClTxTypeCode.CreditNote:
            return {
                invoiceId: undefined,
                generatesFiscalDocument: true,
                creditNoteMode: 'cancel-invoice',
            };
        case ClTxTypeCode.DebitNote:
            return {
                invoiceId: undefined,
                generatesFiscalDocument: true,
            };
        default:
            return {};
    }
};
const createInitialTransactionFormDraft = (transactionType = ClTxTypeCode.Payment) => ({
    transactionType,
    date: hooks().format(DATE_FORMAT),
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
    generatesFiscalDocument: transactionType === ClTxTypeCode.CreditNote || transactionType === ClTxTypeCode.DebitNote,
    ...conditionalDefaultsByType(transactionType),
});
const resetDraftForTransactionType = (nextType, current) => ({
    ...createInitialTransactionFormDraft(nextType),
    transactionType: nextType,
    date: current.date || todayDate(),
    amount: current.amount,
    taxId: current.taxId || 'N/A',
    reference: current.reference || '',
});
const buildTransactionPayloadInput = (draft) => {
    const basePayload = {
        transactionType: draft.transactionType,
        date: draft.date,
        amount: draft.amount,
        taxId: draft.taxId,
        reference: draft.reference || undefined,
    };
    switch (draft.transactionType) {
        case ClTxTypeCode.OpeningBalance:
            return {
                ...basePayload,
                entryType: draft.entryType,
                isCutover: draft.isCutover,
            };
        case ClTxTypeCode.Payment:
            return {
                ...basePayload,
                payment_method: draft.payment_method,
                designation: draft.designation,
                invoiceId: draft.onAccount ? undefined : draft.invoiceId,
                onAccount: draft.onAccount,
            };
        case ClTxTypeCode.StandardChargeDebit:
            return {
                ...basePayload,
                serviceCategoryId: draft.serviceCategoryId,
            };
        case ClTxTypeCode.Adjustment:
            return {
                ...basePayload,
                entryType: draft.entryType,
                linkType: draft.linkType,
                linkedId: draft.linkType === 'NONE' ? undefined : draft.linkedId,
                reason: draft.reason || undefined,
            };
        case ClTxTypeCode.CreditNote:
            return {
                ...basePayload,
                creditNoteMode: draft.creditNoteMode ?? 'cancel-invoice',
                invoiceId: draft.creditNoteMode === 'goodwill' ? undefined : draft.invoiceId,
                generatesFiscalDocument: true,
            };
        case ClTxTypeCode.DebitNote:
            return {
                ...basePayload,
                invoiceId: draft.invoiceId,
                generatesFiscalDocument: true,
            };
        default:
            return basePayload;
    }
};
const validateCityLedgerTransaction = (draft) => cityLedgerTransactionSchema.safeParse(buildTransactionPayloadInput(draft));
// ── Individual field schemas for ir-validator ────────────────────────────────
const transactionTypeFieldSchema = enumType(Object.values(ClTxTypeCode));
const dateFieldSchema = dateSchema;
const amountFieldSchema = coerce.number(lazyMessage('Lcz_AmountMustBeGreaterThanZero', 'Amount must be greater than 0.')).gt(0);
const taxIdFieldSchema = stringType(lazyMessage('Lcz_TaxSelectionRequired', 'Tax selection is required.')).min(1);
const entryTypeFieldSchema = enumType(ENTRY_TYPES);
stringType(lazyMessage('Lcz_PaymentTypeRequired', 'Payment type is required.')).min(1);
const paymentMethodCodeFieldSchema = stringType(lazyMessage('Lcz_PaymentMethodIsRequired', 'Payment method is required.')).min(1);
const invoiceIdRequiredFieldSchema = stringType(lazyMessage('Lcz_InvoiceRequired', 'Invoice is required.')).min(1);
stringType(lazyMessage('Lcz_ServiceCategoryRequired', 'Service category is required.')).min(1);
enumType(LINK_TYPES);
enumType(ADJUSTMENT_REASONS);
// ── Hydrate form draft from an existing ClTx row (edit mode) ─────────────────
function hydrateFormDraftFromTx(tx) {
    const transactionType = (tx.CL_TX_TYPE_CODE ?? ClTxTypeCode.StandardChargeDebit);
    const amount = tx.DEBIT > 0 ? tx.DEBIT : tx.CREDIT;
    const entryType = tx.CREDIT > 0 && tx.DEBIT === 0 ? 'CR' : tx.DEBIT > 0 && tx.CREDIT === 0 ? 'DB' : '';
    const taxId = tx.VAT_PERCENT > 0 ? String(tx.VAT_PERCENT) : 'N/A';
    const base = {
        ...createInitialTransactionFormDraft(transactionType),
        transactionType,
        date: tx.SERVICE_DATE ?? '',
        amount: amount > 0 ? String(amount) : '',
        taxId,
        reference: tx.EXTERNAL_REF ?? '',
        notes: '',
        entryType,
    };
    switch (transactionType) {
        case ClTxTypeCode.Payment:
            return {
                ...base,
                payment_method: tx.PAY_METHOD_CODE ? { code: tx.PAY_METHOD_CODE, description: tx.PAY_METHOD_CODE } : null,
                invoiceId: tx.FD_ID ? String(tx.FD_ID) : undefined,
                onAccount: !tx.FD_ID,
            };
        case ClTxTypeCode.StandardChargeDebit:
            return {
                ...base,
                serviceCategoryId: tx.CATEGORY ?? undefined,
            };
        case ClTxTypeCode.Adjustment:
            return {
                ...base,
                entryType,
                linkType: tx.FD_ID ? 'INVOICE' : tx.BH_ID ? 'BOOKING' : 'NONE',
                linkedId: tx.FD_ID ? String(tx.FD_ID) : tx.BH_ID ? String(tx.BH_ID) : undefined,
            };
        case ClTxTypeCode.CreditNote:
            return {
                ...base,
                invoiceId: tx.FD_ID ? String(tx.FD_ID) : undefined,
                creditNoteMode: tx.FD_ID ? 'cancel-invoice' : 'goodwill',
                generatesFiscalDocument: true,
            };
        case ClTxTypeCode.DebitNote:
            return {
                ...base,
                invoiceId: tx.FD_ID ? String(tx.FD_ID) : undefined,
                generatesFiscalDocument: true,
            };
        default:
            return base;
    }
}

export { BookedByGuestSchema as B, DayUseHoursSchema as D, RoomsGuestsSchema as R, TRANSACTION_TYPE_RATES as T, DATE_INPUT_FORMAT as a, amountFieldSchema as b, createInitialTransactionFormDraft as c, taxIdFieldSchema as d, dateFieldSchema as e, entryTypeFieldSchema as f, hydrateFormDraftFromTx as h, invoiceIdRequiredFieldSchema as i, paymentMethodCodeFieldSchema as p, resetDraftForTransactionType as r, transactionTypeFieldSchema as t, validateCityLedgerTransaction as v };
