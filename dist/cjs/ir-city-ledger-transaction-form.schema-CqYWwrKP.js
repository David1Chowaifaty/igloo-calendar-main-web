'use strict';

var index = require('./index-CLqkDPTC.js');
var booking_store = require('./booking.store-CZr0GkPY.js');
var moment = require('./moment-CdViwxPQ.js');
var enums = require('./enums-CjBOya72.js');

/**
 * Builds a grouped payment types record from raw entries and groups.
 *
 * @param paymentEntries - The flat list of all available payment  entries.
 * @returns A record where each key is a group CODE_NAME and the value is the
 *          ordered array of payment type entries belonging to that group.
 *
 * @example
 * const result = buildPaymentTypes(paymentEntries);
 * // {
 * //   PAYMENTS: [ { CODE_NAME: "001", CODE_VALUE_EN: "Cash", ... }, ... ],
 * //   ADJUSTMENTS: [ ... ],
 * //   ...
 * // }
 */
function buildPaymentTypes(paymentEntries) {
    try {
        const { groups, types } = index.libExports.z
            .object({
            types: booking_store.ZIEntrySchema.array().min(1),
            groups: booking_store.ZIEntrySchema.array().min(1),
            methods: booking_store.ZIEntrySchema.array().min(1),
        })
            .parse(paymentEntries);
        const items = [...types];
        const byCodes = (codes) => codes.map(code => items.find(i => i.CODE_NAME === code)).filter((x) => Boolean(x));
        const extractGroupCodes = (code) => {
            const paymentGroup = groups.find(pt => pt.CODE_NAME === code);
            return paymentGroup ? paymentGroup.CODE_VALUE_EN.split(',') : [];
        };
        let rec = {};
        groups.forEach(group => {
            // if (group.CODE_NAME === 'PAYMENTS') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Payment: ${entry.CODE_VALUE_EN}`,
            //   })) as IEntries[];
            // } else if (group.CODE_NAME === 'REFUND') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Refund: ${entry.CODE_VALUE_EN}`,
            //   })) as IEntries[];
            rec[group.CODE_NAME] = byCodes(extractGroupCodes(group.CODE_NAME));
        });
        return rec;
    }
    catch (error) {
        console.log(error);
        return {};
    }
}

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
const dateSchema = index.libExports.z
    .string()
    .refine(value => moment.hooks(value, DATE_FORMAT, true).isValid(), 'Date must be in YYYY-MM-DD format.')
    .refine(value => {
    const valueDate = moment.hooks(value, DATE_FORMAT, true).startOf('day');
    const minimumAllowedDate = moment.hooks().startOf('day').subtract(12, 'months');
    return !valueDate.isBefore(minimumAllowedDate);
}, 'Date cannot be older than 12 months from today.');
const commonFieldsSchema = index.libExports.z.object({
    date: dateSchema,
    amount: index.libExports.z.coerce.number().gt(0, 'Amount must be greater than 0.'),
    taxId: index.libExports.z.string().min(1, 'Tax selection is required.'),
    reference: index.libExports.z.string().optional(),
    notes: index.libExports.z.string().max(500).optional(),
});
const openingBalanceSchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.OpeningBalance),
    entryType: index.libExports.z.enum(ENTRY_TYPES),
    isCutover: index.libExports.z.boolean(),
});
const paymentTypeSchema = index.libExports.z.object({
    code: index.libExports.z.string().min(3).max(4),
    description: index.libExports.z.string(),
    operation: index.libExports.z.enum(ENTRY_TYPES),
});
const paymentMethodSchema = index.libExports.z.object({
    code: index.libExports.z.string().min(3).max(4),
    description: index.libExports.z.string(),
    operation: index.libExports.z.string().optional().nullable(),
});
const paymentSchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.Payment),
    payment_type: paymentTypeSchema.nullable().optional(),
    payment_method: paymentMethodSchema.nullable().optional(),
    designation: index.libExports.z.string().optional(),
    invoiceId: index.libExports.z.string().optional(),
    onAccount: index.libExports.z.boolean(),
});
const manualChargeSchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.StandardChargeDebit),
    serviceCategoryId: index.libExports.z.string().optional(),
});
const adjustmentSchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.Adjustment),
    entryType: index.libExports.z.enum(ENTRY_TYPES),
    linkType: index.libExports.z.enum(LINK_TYPES),
    linkedId: index.libExports.z.string().optional(),
    reason: index.libExports.z.enum(ADJUSTMENT_REASONS).optional(),
});
const creditNoteSchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.CreditNote),
    creditNoteMode: index.libExports.z.enum(CREDIT_NOTE_MODES),
    invoiceId: index.libExports.z.string().optional(),
    generatesFiscalDocument: index.libExports.z.literal(true),
    amount: index.libExports.z.coerce.number().optional(),
    taxId: index.libExports.z.string().optional(),
});
const debitNoteSchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.DebitNote),
    invoiceId: index.libExports.z.string().min(1, 'Invoice is required for debit note.'),
    generatesFiscalDocument: index.libExports.z.literal(true),
});
const discountSchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.Discount),
});
const cancellationPenaltySchema = commonFieldsSchema.extend({
    transactionType: index.libExports.z.literal(enums.ClTxTypeCode.CancellationPenalty),
});
const cityLedgerTransactionSchema = index.libExports.z
    .discriminatedUnion('transactionType', [
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
            code: index.libExports.z.ZodIssueCode.custom,
            path: ['invoiceId'],
            message: 'Invoice must be empty when payment is marked as on account.',
        });
    }
    if (data.transactionType === enums.ClTxTypeCode.Adjustment && data.linkType === 'NONE' && data.linkedId) {
        ctx.addIssue({
            code: index.libExports.z.ZodIssueCode.custom,
            path: ['linkedId'],
            message: 'linkedId must be empty when link type is NONE.',
        });
    }
    if (data.transactionType === enums.ClTxTypeCode.CreditNote && data.creditNoteMode === 'cancel-invoice' && !data.invoiceId) {
        ctx.addIssue({
            code: index.libExports.z.ZodIssueCode.custom,
            path: ['invoiceId'],
            message: 'Invoice is required when cancelling an invoice.',
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
const transactionTypeFieldSchema = index.libExports.z.enum(Object.values(enums.ClTxTypeCode));
const dateFieldSchema = dateSchema;
const amountFieldSchema = index.libExports.z.coerce.number().gt(0, 'Amount must be greater than 0.');
const taxIdFieldSchema = index.libExports.z.string().min(1, 'Tax selection is required.');
const entryTypeFieldSchema = index.libExports.z.enum(ENTRY_TYPES);
index.libExports.z.string().min(1, 'Payment type is required.');
const paymentMethodCodeFieldSchema = index.libExports.z.string().min(1, 'Payment method is required.');
const invoiceIdRequiredFieldSchema = index.libExports.z.string().min(1, 'Invoice is required.');
index.libExports.z.string().min(1, 'Service category is required.');
index.libExports.z.enum(LINK_TYPES);
index.libExports.z.enum(ADJUSTMENT_REASONS);
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

exports.DATE_INPUT_FORMAT = DATE_INPUT_FORMAT;
exports.TRANSACTION_TYPE_RATES = TRANSACTION_TYPE_RATES;
exports.amountFieldSchema = amountFieldSchema;
exports.buildPaymentTypes = buildPaymentTypes;
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
