'use strict';

var t = require('./t-CyRK1btk.js');
var types = require('./types-BVJQZ50e.js');
var moment = require('./moment-CdViwxPQ.js');
var enums = require('./enums-BSCnMYlE.js');

const RoomsGuestsSchema = types.arrayType(types.objectType({
    first_name: types.stringType().nonempty(),
    last_name: types.stringType().nonempty(),
    bed_preference: types.stringType().optional().nullable(),
    requires_bed_preference: types.booleanType().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: t.t('Lcz_BedPreferenceRequired', { fallback: 'Bed preference is required' }),
            code: types.ZodIssueCode.custom,
        });
    }
}));
const BookedByGuestSchema = types.objectType({
    firstName: types.stringType().nonempty(),
    lastName: types.stringType().nonempty(),
});
// Lazy message: this schema is built at module load, before any locale is fetched.
const dayUseTimeSchema = types.stringType()
    .trim()
    .refine(value => /^([01]\d|2[0-3]):[0-5]\d$/.test(value), () => ({ message: t.t('Lcz_EnterAValidTime', { fallback: 'Enter a valid time' }) }));
const DayUseHoursSchema = types.objectType({
    from: dayUseTimeSchema,
    to: dayUseTimeSchema,
});

/**
 * Every schema here is built once at module load, before any locale is fetched, so
 * messages must be resolved when the issue is raised, not when the schema is built.
 * zod v3 only takes a fixed string on `.min()` / `.gt()`; an `errorMap` on the base
 * type is the lazy equivalent (it then covers every issue on that field).
 */
const lazyMessage = (key, fallback) => ({ errorMap: () => ({ message: t.t(key, { fallback }) }) });
const TRANSACTION_TYPE_RATES = {
    [enums.ClTxTypeCode.OpeningBalance]: 'CR|DB',
    [enums.ClTxTypeCode.Payment]: 'CR',
    [enums.ClTxTypeCode.StandardChargeDebit]: 'DB',
    [enums.ClTxTypeCode.Adjustment]: 'CR|DB',
    [enums.ClTxTypeCode.CreditNote]: 'CR',
    [enums.ClTxTypeCode.DebitNote]: 'DB',
    [enums.ClTxTypeCode.AdjustmentCredit]: 'CR',
    [enums.ClTxTypeCode.Discount]: 'CR',
    [enums.ClTxTypeCode.CancellationPenalty]: 'DB',
};
const ENTRY_TYPES = ['CR', 'DB'];
const LINK_TYPES = ['INVOICE', 'BOOKING', 'NONE'];
const ADJUSTMENT_REASONS = ['ROUNDING_DIFFERENCE', 'GOODWILL_CREDIT', 'PRICE_MATCH', 'COMMISSION_CORRECTION', 'DISCOUNT_CORRECTION'];
const CREDIT_NOTE_MODES = ['cancel-invoice', 'goodwill'];
const DATE_FORMAT = 'YYYY-MM-DD';
const dateSchema = types.stringType()
    .refine(value => moment.hooks(value, DATE_FORMAT, true).isValid(), () => ({ message: t.t('Lcz_DateMustBeYmdFormat', { fallback: 'Date must be in YYYY-MM-DD format.' }) }))
    .refine(value => {
    const valueDate = moment.hooks(value, DATE_FORMAT, true).startOf('day');
    const minimumAllowedDate = moment.hooks().startOf('day').subtract(12, 'months');
    return !valueDate.isBefore(minimumAllowedDate);
}, () => ({ message: t.t('Lcz_DateNotOlderThan12Months', { fallback: 'Date cannot be older than 12 months from today.' }) }));
const commonFieldsSchema = types.objectType({
    date: dateSchema,
    amount: types.coerce.number(lazyMessage('Lcz_AmountMustBeGreaterThanZero', 'Amount must be greater than 0.')).gt(0),
    taxId: types.stringType(lazyMessage('Lcz_TaxSelectionRequired', 'Tax selection is required.')).min(1),
    reference: types.stringType().optional(),
    notes: types.stringType().max(500).optional(),
});
const openingBalanceSchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.OpeningBalance),
    entryType: types.enumType(ENTRY_TYPES),
    isCutover: types.booleanType(),
});
const paymentTypeSchema = types.objectType({
    code: types.stringType().min(3).max(4),
    description: types.stringType(),
    operation: types.enumType(ENTRY_TYPES),
});
const paymentMethodSchema = types.objectType({
    code: types.stringType().min(3).max(4),
    description: types.stringType(),
    operation: types.stringType().optional().nullable(),
});
const paymentSchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.Payment),
    payment_type: paymentTypeSchema.nullable().optional(),
    payment_method: paymentMethodSchema.nullable().optional(),
    designation: types.stringType().optional(),
    invoiceId: types.stringType().optional(),
    onAccount: types.booleanType(),
});
const manualChargeSchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.StandardChargeDebit),
    serviceCategoryId: types.stringType().optional(),
});
const adjustmentSchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.Adjustment),
    entryType: types.enumType(ENTRY_TYPES),
    linkType: types.enumType(LINK_TYPES),
    linkedId: types.stringType().optional(),
    reason: types.enumType(ADJUSTMENT_REASONS).optional(),
});
const creditNoteSchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.CreditNote),
    creditNoteMode: types.enumType(CREDIT_NOTE_MODES),
    invoiceId: types.stringType().optional(),
    generatesFiscalDocument: types.literalType(true),
    amount: types.coerce.number().optional(),
    taxId: types.stringType().optional(),
});
const debitNoteSchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.DebitNote),
    invoiceId: types.stringType(lazyMessage('Lcz_InvoiceRequiredForDebitNote', 'Invoice is required for debit note.')).min(1),
    generatesFiscalDocument: types.literalType(true),
});
const discountSchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.Discount),
});
const cancellationPenaltySchema = commonFieldsSchema.extend({
    transactionType: types.literalType(enums.ClTxTypeCode.CancellationPenalty),
});
const cityLedgerTransactionSchema = types.discriminatedUnionType('transactionType', [
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
    if (data.transactionType === enums.ClTxTypeCode.Payment && data.onAccount && data.invoiceId) {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            path: ['invoiceId'],
            message: t.t('Lcz_InvoiceMustBeEmptyForOnAccountPayment', { fallback: 'Invoice must be empty when payment is marked as on account.' }),
        });
    }
    if (data.transactionType === enums.ClTxTypeCode.Adjustment && data.linkType === 'NONE' && data.linkedId) {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            path: ['linkedId'],
            message: t.t('Lcz_LinkedRecordMustBeEmptyForNoneLinkType', { fallback: 'linkedId must be empty when link type is NONE.' }),
        });
    }
    if (data.transactionType === enums.ClTxTypeCode.CreditNote && data.creditNoteMode === 'cancel-invoice' && !data.invoiceId) {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            path: ['invoiceId'],
            message: t.t('Lcz_InvoiceRequiredWhenCancellingInvoice', { fallback: 'Invoice is required when cancelling an invoice.' }),
        });
    }
});
const DATE_INPUT_FORMAT = DATE_FORMAT;
const todayDate = () => moment.hooks().format(DATE_FORMAT);
const conditionalDefaultsByType = (transactionType) => {
    switch (transactionType) {
        case enums.ClTxTypeCode.OpeningBalance:
            return {
                entryType: '',
                isCutover: false,
            };
        case enums.ClTxTypeCode.Payment:
            return {
                payment_method: null,
                designation: undefined,
                invoiceId: undefined,
                onAccount: true,
            };
        case enums.ClTxTypeCode.StandardChargeDebit:
            return {
                serviceCategoryId: undefined,
            };
        case enums.ClTxTypeCode.Adjustment:
            return {
                entryType: '',
                linkType: 'NONE',
                linkedId: undefined,
            };
        case enums.ClTxTypeCode.CreditNote:
            return {
                invoiceId: undefined,
                generatesFiscalDocument: true,
                creditNoteMode: 'cancel-invoice',
            };
        case enums.ClTxTypeCode.DebitNote:
            return {
                invoiceId: undefined,
                generatesFiscalDocument: true,
            };
        default:
            return {};
    }
};
const createInitialTransactionFormDraft = (transactionType = enums.ClTxTypeCode.Payment) => ({
    transactionType,
    date: moment.hooks().format(DATE_FORMAT),
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
    generatesFiscalDocument: transactionType === enums.ClTxTypeCode.CreditNote || transactionType === enums.ClTxTypeCode.DebitNote,
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
        case enums.ClTxTypeCode.OpeningBalance:
            return {
                ...basePayload,
                entryType: draft.entryType,
                isCutover: draft.isCutover,
            };
        case enums.ClTxTypeCode.Payment:
            return {
                ...basePayload,
                payment_method: draft.payment_method,
                designation: draft.designation,
                invoiceId: draft.onAccount ? undefined : draft.invoiceId,
                onAccount: draft.onAccount,
            };
        case enums.ClTxTypeCode.StandardChargeDebit:
            return {
                ...basePayload,
                serviceCategoryId: draft.serviceCategoryId,
            };
        case enums.ClTxTypeCode.Adjustment:
            return {
                ...basePayload,
                entryType: draft.entryType,
                linkType: draft.linkType,
                linkedId: draft.linkType === 'NONE' ? undefined : draft.linkedId,
                reason: draft.reason || undefined,
            };
        case enums.ClTxTypeCode.CreditNote:
            return {
                ...basePayload,
                creditNoteMode: draft.creditNoteMode ?? 'cancel-invoice',
                invoiceId: draft.creditNoteMode === 'goodwill' ? undefined : draft.invoiceId,
                generatesFiscalDocument: true,
            };
        case enums.ClTxTypeCode.DebitNote:
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
const transactionTypeFieldSchema = types.enumType(Object.values(enums.ClTxTypeCode));
const dateFieldSchema = dateSchema;
const amountFieldSchema = types.coerce.number(lazyMessage('Lcz_AmountMustBeGreaterThanZero', 'Amount must be greater than 0.')).gt(0);
const taxIdFieldSchema = types.stringType(lazyMessage('Lcz_TaxSelectionRequired', 'Tax selection is required.')).min(1);
const entryTypeFieldSchema = types.enumType(ENTRY_TYPES);
types.stringType(lazyMessage('Lcz_PaymentTypeRequired', 'Payment type is required.')).min(1);
const paymentMethodCodeFieldSchema = types.stringType(lazyMessage('Lcz_PaymentMethodIsRequired', 'Payment method is required.')).min(1);
const invoiceIdRequiredFieldSchema = types.stringType(lazyMessage('Lcz_InvoiceRequired', 'Invoice is required.')).min(1);
types.stringType(lazyMessage('Lcz_ServiceCategoryRequired', 'Service category is required.')).min(1);
types.enumType(LINK_TYPES);
types.enumType(ADJUSTMENT_REASONS);
// ── Hydrate form draft from an existing ClTx row (edit mode) ─────────────────
function hydrateFormDraftFromTx(tx) {
    const transactionType = (tx.CL_TX_TYPE_CODE ?? enums.ClTxTypeCode.StandardChargeDebit);
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
        case enums.ClTxTypeCode.Payment:
            return {
                ...base,
                payment_method: tx.PAY_METHOD_CODE ? { code: tx.PAY_METHOD_CODE, description: tx.PAY_METHOD_CODE } : null,
                invoiceId: tx.FD_ID ? String(tx.FD_ID) : undefined,
                onAccount: !tx.FD_ID,
            };
        case enums.ClTxTypeCode.StandardChargeDebit:
            return {
                ...base,
                serviceCategoryId: tx.CATEGORY ?? undefined,
            };
        case enums.ClTxTypeCode.Adjustment:
            return {
                ...base,
                entryType,
                linkType: tx.FD_ID ? 'INVOICE' : tx.BH_ID ? 'BOOKING' : 'NONE',
                linkedId: tx.FD_ID ? String(tx.FD_ID) : tx.BH_ID ? String(tx.BH_ID) : undefined,
            };
        case enums.ClTxTypeCode.CreditNote:
            return {
                ...base,
                invoiceId: tx.FD_ID ? String(tx.FD_ID) : undefined,
                creditNoteMode: tx.FD_ID ? 'cancel-invoice' : 'goodwill',
                generatesFiscalDocument: true,
            };
        case enums.ClTxTypeCode.DebitNote:
            return {
                ...base,
                invoiceId: tx.FD_ID ? String(tx.FD_ID) : undefined,
                generatesFiscalDocument: true,
            };
        default:
            return base;
    }
}

exports.BookedByGuestSchema = BookedByGuestSchema;
exports.DATE_INPUT_FORMAT = DATE_INPUT_FORMAT;
exports.DayUseHoursSchema = DayUseHoursSchema;
exports.RoomsGuestsSchema = RoomsGuestsSchema;
exports.TRANSACTION_TYPE_RATES = TRANSACTION_TYPE_RATES;
exports.amountFieldSchema = amountFieldSchema;
exports.createInitialTransactionFormDraft = createInitialTransactionFormDraft;
exports.dateFieldSchema = dateFieldSchema;
exports.entryTypeFieldSchema = entryTypeFieldSchema;
exports.hydrateFormDraftFromTx = hydrateFormDraftFromTx;
exports.invoiceIdRequiredFieldSchema = invoiceIdRequiredFieldSchema;
exports.paymentMethodCodeFieldSchema = paymentMethodCodeFieldSchema;
exports.resetDraftForTransactionType = resetDraftForTransactionType;
exports.taxIdFieldSchema = taxIdFieldSchema;
exports.transactionTypeFieldSchema = transactionTypeFieldSchema;
exports.validateCityLedgerTransaction = validateCityLedgerTransaction;
