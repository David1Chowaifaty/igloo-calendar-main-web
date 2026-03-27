import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { B as BookingService } from './booking.store.js';
import { b as buildPaymentTypes } from './utils2.js';
import { C as CityLedgerService } from './index6.js';
import { c as calendar_data } from './calendar-data.js';
import { z } from './index2.js';
import { w as getEntryValue } from './utils.js';
import { d as defineCustomElement$5 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$4 } from './ir-date-select2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const TRANSACTION_TYPES = { OB: 'OPENING_BALANCE', PAY: 'PAYMENT', DB: 'MANUAL_CHARGE', ADJ: 'ADJUSTMENT', CN: 'CREDIT_NOTE', DN: 'DEBIT_NOTE' };
const TRANSACTION_TYPE_RATES = {
    OB: 'CR|DB',
    PAY: 'CR',
    DB: 'DB',
    ADJ: 'CR|DB',
    CN: 'CR',
    DN: 'DB',
};
const ENTRY_TYPES = ['CR', 'DB'];
const LINK_TYPES = ['INVOICE', 'BOOKING', 'NONE'];
const ADJUSTMENT_REASONS = ['ROUNDING_DIFFERENCE', 'GOODWILL_CREDIT', 'PRICE_MATCH', 'COMMISSION_CORRECTION', 'DISCOUNT_CORRECTION'];
const DATE_FORMAT = 'YYYY-MM-DD';
const dateSchema = z
    .string()
    .refine(value => hooks(value, DATE_FORMAT, true).isValid(), 'Date must be in YYYY-MM-DD format.')
    .refine(value => {
    const valueDate = hooks(value, DATE_FORMAT, true).startOf('day');
    const minimumAllowedDate = hooks().startOf('day').subtract(12, 'months');
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
const cityLedgerTransactionSchema = z
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
const DATE_INPUT_FORMAT = DATE_FORMAT;
const todayDate = () => hooks().format(DATE_FORMAT);
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
const createInitialTransactionFormDraft = (transactionType = 'OB') => ({
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
const validateCityLedgerTransaction = (draft) => cityLedgerTransactionSchema.safeParse(buildTransactionPayloadInput(draft));
// ── Individual field schemas for ir-validator ────────────────────────────────
const transactionTypeFieldSchema = z.enum(Object.keys(TRANSACTION_TYPES));
const dateFieldSchema = dateSchema;
const amountFieldSchema = z.coerce.number().gt(0, 'Amount must be greater than 0.');
const taxIdFieldSchema = z.string().min(1, 'Tax selection is required.');
const entryTypeFieldSchema = z.enum(ENTRY_TYPES);
z.string().min(1, 'Payment type is required.');
const paymentMethodCodeFieldSchema = z.string().min(1, 'Payment method is required.');
const invoiceIdRequiredFieldSchema = z.string().min(1, 'Invoice is required.');
z.string().min(1, 'Service category is required.');
const linkTypeFieldSchema = z.enum(LINK_TYPES);
z.enum(ADJUSTMENT_REASONS);
({
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
});

const irCityLedgerTransactionFormCss = ".sc-ir-city-ledger-transaction-form-h{display:block;height:100%}.transaction-form.sc-ir-city-ledger-transaction-form{display:grid;gap:0.9rem}.transaction-form__field.sc-ir-city-ledger-transaction-form{display:grid;gap:0.35rem}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form,.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.transaction-form__field__entry-type.--credit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.transaction-form__field__entry-type.--debit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}.amount-tax-group.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.35rem}.amount-tax-group__label.sc-ir-city-ledger-transaction-form{font-size:var(--wa-input-label-font-size-small, 0.875rem);font-weight:var(--wa-font-weight-semibold, 500);color:var(--wa-color-text-normal)}.amount-tax-group__required.sc-ir-city-ledger-transaction-form{color:var(--wa-color-danger-fill-loud)}.amount-tax-group__row.sc-ir-city-ledger-transaction-form{display:flex;align-items:stretch}.amount-tax-group__amount.sc-ir-city-ledger-transaction-form{flex:1;min-width:0}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(label){display:none}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(base){border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form{flex-shrink:0;min-width:8.5rem}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}.tx-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;width:100%}.tx-option__badges.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.25rem}.transaction-form__switch.sc-ir-city-ledger-transaction-form{padding:0.15rem 0}.transaction-form__error.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-fill-loud)}.transaction-form__fiscal-note.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.45rem;font-size:0.875rem;color:var(--wa-color-neutral-fill-loud)}.transaction-form__payment-type-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.payment-section.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section__title.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.payment-type-pill.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:var(--wa-color-success-fill-quiet, #f0fdf4);border:1px solid var(--wa-color-success-border-quiet, #bbf7d0);border-radius:0.5rem;font-size:0.8125rem}.payment-type-pill__name.sc-ir-city-ledger-transaction-form{font-weight:500;color:var(--wa-color-text-normal, #111827);flex:1}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.payment-invoice-select.sc-ir-city-ledger-transaction-form{animation:slide-in 0.18s ease}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.transaction-form__hint.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.transaction-form__textarea-label.sc-ir-city-ledger-transaction-form{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.transaction-form__notes.sc-ir-city-ledger-transaction-form{width:100%;box-sizing:border-box;padding:0.5rem 0.75rem;border:1px solid var(--wa-color-neutral-border-quiet, #d1d5db);border-radius:0.375rem;font-size:0.875rem;font-family:inherit;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-surface-default, #fff);resize:vertical;min-height:4.5rem;outline:none;transition:border-color 0.15s ease,\n    box-shadow 0.15s ease}.transaction-form__notes.sc-ir-city-ledger-transaction-form:focus{border-color:var(--wa-color-brand-border-loud, #2563eb);box-shadow:0 0 0 2px var(--wa-color-brand-fill-quiet, #eff6ff)}.transaction-form__notes.sc-ir-city-ledger-transaction-form::placeholder{color:var(--wa-color-text-quiet, #9ca3af)}";
const IrCityLedgerTransactionFormStyle0 = irCityLedgerTransactionFormCss;

const IrCityLedgerTransactionForm = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerTransactionForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.transactionSaved = createEvent(this, "transactionSaved", 7);
        this.transactionValidationFailed = createEvent(this, "transactionValidationFailed", 7);
    }
    formId = 'city-ledger-transaction-form';
    agentId = null;
    initialTransactionType = 'OB';
    taxOptions = [];
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    language = 'en';
    formData = createInitialTransactionFormDraft();
    paymentEntries = {
        types: [],
        groups: [],
        methods: [],
    };
    paymentTypeGroups = {};
    isLoading = true;
    isSubmitting = false;
    transactionSaved;
    transactionValidationFailed;
    bookingService = new BookingService();
    cityLedgerService = new CityLedgerService();
    clTxTypes;
    componentWillLoad() {
        this.formData = createInitialTransactionFormDraft(this.initialTransactionType);
        this.fetchPaymentEntries();
    }
    handleInitialTransactionTypeChange(newType) {
        this.formData = resetDraftForTransactionType(newType, this.formData);
    }
    updateFormData(patch) {
        this.formData = {
            ...this.formData,
            ...patch,
        };
    }
    handleTransactionTypeChange(nextType) {
        this.formData = resetDraftForTransactionType(nextType, this.formData);
    }
    async fetchPaymentEntries() {
        try {
            this.isLoading = true;
            const setupEntries = await this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD', '_CL_TX_TYPE']);
            const { pay_type, pay_type_group, pay_method, cl_tx_type } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                types: pay_type ?? [],
                groups: pay_type_group ?? [],
                methods: pay_method ?? [],
            };
            this.clTxTypes = cl_tx_type;
            this.paymentTypeGroups = buildPaymentTypes(this.paymentEntries);
        }
        catch (error) {
            console.error('Failed to load payment setup entries', error);
            this.paymentEntries = { types: [], groups: [], methods: [] };
            this.paymentTypeGroups = {};
        }
        finally {
            this.isLoading = false;
        }
    }
    stopEventPropagation(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    handlePaymentMethodDropdownChange(value) {
        const paymentMethod = this.paymentEntries?.methods?.find(pm => pm.CODE_NAME === value);
        if (!paymentMethod) {
            this.updateFormData({ payment_method: null });
            return;
        }
        this.updateFormData({
            payment_method: {
                code: paymentMethod.CODE_NAME,
                description: paymentMethod.CODE_VALUE_EN,
                operation: paymentMethod.NOTES,
            },
        });
    }
    buildParams(payload) {
        const amount = payload.amount;
        let credit = 0;
        let debit = 0;
        let payMethodCode = '';
        switch (payload.transactionType) {
            case 'OB':
            case 'ADJ':
                if (payload.entryType === 'CR')
                    credit = amount;
                else
                    debit = amount;
                break;
            case 'PAY':
            case 'CN':
                credit = amount;
                break;
            case 'DB':
            case 'DN':
                debit = amount;
                break;
        }
        if (payload.transactionType === 'PAY') {
            payMethodCode = payload.payment_method?.code ?? '';
        }
        const noTaxTransaction = payload.transactionType === 'OB' || payload.transactionType === 'PAY';
        const hasVat = !noTaxTransaction && payload.taxId !== 'N/A';
        return {
            CL_TX_ID: -1,
            AGENCY_ID: this.agentId,
            SERVICE_DATE: payload.date,
            // CATEGORY: payload.transactionType,
            CL_TX_TYPE_CODE: payload.transactionType,
            DESCRIPTION: payload.reference ?? payload.transactionType,
            DEBIT: debit,
            CREDIT: credit,
            CURRENCY_ID: calendar_data?.property?.currency?.id,
            PAY_METHOD_CODE: payMethodCode,
            EXTERNAL_REF: payload.reference ?? '',
            VAT_INCLUDED_CODE: (noTaxTransaction ? '' : hasVat ? '001' : '002'),
            VAT_PCT: noTaxTransaction ? null : hasVat ? Number(payload.taxId) : 0,
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const validation = validateCityLedgerTransaction(this.formData);
        if (!validation.success) {
            this.transactionValidationFailed.emit(validation.error.issues);
            return;
        }
        try {
            this.isSubmitting = true;
            await this.cityLedgerService.issueManualCLTx(this.buildParams(validation.data));
            this.transactionSaved.emit();
        }
        catch (error) {
            console.error('Failed to save transaction', error);
        }
        finally {
            this.isSubmitting = false;
        }
    };
    get linkedIdOptions() {
        if (this.formData.linkType === 'BOOKING') {
            return this.bookingOptions;
        }
        if (this.formData.linkType === 'INVOICE') {
            return this.unpaidInvoiceOptions;
        }
        return [];
    }
    renderCommonFields(withTaxes = true) {
        const minAllowedDate = hooks().subtract(1, 'months').format(DATE_INPUT_FORMAT);
        return (h(Fragment, null, h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: transactionTypeFieldSchema, value: this.formData.transactionType, valueEvent: "change" }, h("wa-select", { label: "Transaction Type", size: "small", defaultValue: this.formData.transactionType, value: this.formData.transactionType, required: true, onchange: event => {
                const value = event.target.value;
                this.handleTransactionTypeChange(value);
            } }, this.clTxTypes.map(type => {
            const rate = TRANSACTION_TYPE_RATES[type.CODE_NAME];
            const label = type.CODE_VALUE_EN;
            return (h("wa-option", { key: type.CODE_NAME, value: type.CODE_NAME, label: label }, h("div", { class: "tx-option" }, h("span", { class: "tx-option__label" }, label), h("span", { class: "tx-option__badges" }, (rate === 'CR' || rate === 'CR|DB') && h("wa-badge", { variant: "success" }, "Credit"), (rate === 'DB' || rate === 'CR|DB') && h("wa-badge", { variant: "danger" }, "Debit")))));
        })))), h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: dateFieldSchema, value: this.formData.date, valueEvent: "DateChanged" }, h("ir-date-select", { label: "Date", date: this.formData.date, minDate: minAllowedDate, emitEmptyDate: true, onDateChanged: event => {
                this.updateFormData({
                    date: event.detail.start ? event.detail.start.format(DATE_INPUT_FORMAT) : '',
                });
            } }))), withTaxes ? (h("div", { class: "amount-tax-group" }, h("span", { class: "amount-tax-group__label" }, "Amount (including taxes)"), h("div", { class: "amount-tax-group__row" }, h("ir-validator", { class: "amount-tax-group__amount", schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: "Amount (including taxes)", mask: "price", value: this.formData.amount, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, h("span", { slot: "start" }, this.currencySymbol))), h("ir-validator", { schema: taxIdFieldSchema, value: this.formData.taxId, valueEvent: "change" }, h("wa-select", { size: "small", placeholder: "Tax", value: this.formData.taxId, onchange: event => {
                this.updateFormData({ taxId: event.target.value });
            } }, h("wa-option", { value: "N/A", label: "Not Applicable" }, "Not Applicable"), this.taxOptions.map(tax => (h("wa-option", { key: tax.id, label: tax.label, value: tax.id }, tax.label)))))))) : (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: "Amount", mask: "price", value: this.formData.amount, required: true, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, h("span", { slot: "start" }, this.currencySymbol)))))));
    }
    renderEntryTypeField() {
        return (h("div", { class: "transaction-form__field transaction-form__field--full-width" }, h("ir-validator", { schema: entryTypeFieldSchema, value: this.formData.entryType ?? '', valueEvent: "change" }, h("wa-radio-group", { label: "Entry Type", orientation: "horizontal", size: "small", value: this.formData.entryType ?? '', onchange: event => {
                this.updateFormData({ entryType: event.target.value });
            } }, h("wa-radio", { value: "CR", appearance: "button", class: "transaction-form__field__entry-type --credit" }, "Credit"), h("wa-radio", { value: "DB", appearance: "button", class: "transaction-form__field__entry-type --debit" }, "Debit")))));
    }
    renderOpeningBalanceFields() {
        return h(Fragment, null, this.renderEntryTypeField());
    }
    renderPaymentFields() {
        const isOnAccount = this.formData.onAccount;
        return (h(Fragment, null, h("div", { class: "payment-section" }, h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: paymentMethodCodeFieldSchema, value: this.formData.payment_method?.code ?? '', valueEvent: "change" }, h("wa-select", { size: "small", label: "Payment method", placeholder: "Select method\u2026", value: this.formData.payment_method?.code ?? '', "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, h("wa-option", { value: "" }, "Select method\u2026"), this.paymentEntries?.methods?.map(method => (h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, getEntryValue({ entry: method, language: this.language })))))))), h("div", { class: "payment-section" }, h("wa-radio-group", { label: "Apply to", size: "small", orientation: "horizontal", value: isOnAccount ? 'on-account' : 'apply-to-invoice', onchange: e => {
                const val = e.target.value;
                this.updateFormData({ onAccount: val === 'on-account', invoiceId: val === 'on-account' ? undefined : this.formData.invoiceId });
            } }, h("wa-radio", { appearance: "button", value: "on-account" }, "On Account"), h("wa-radio", { appearance: "button", value: "apply-to-invoice" }, "Close Invoices")), !isOnAccount && (h("div", { class: "transaction-form__field payment-invoice-select" }, h("wa-select", { label: "Outstanding Invoice", size: "small", placeholder: "Search invoices\u2026", value: this.formData.invoiceId ?? '', "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), onchange: event => {
                this.stopEventPropagation(event);
                this.updateFormData({ invoiceId: event.target.value || undefined });
            } }, h("wa-option", { value: "" }, "No invoice linked"), this.unpaidInvoiceOptions.length === 0 && (h("wa-option", { value: "", disabled: true }, "No outstanding invoices")), this.unpaidInvoiceOptions.map(invoice => (h("wa-option", { key: invoice.id, value: invoice.id }, invoice.label)))))))));
    }
    renderManualChargeFields() {
        return null;
        // return (
        //   <div class="transaction-form__field">
        //     <ir-validator schema={serviceCategoryFieldSchema} value={this.formData.serviceCategoryId ?? ''} valueEvent="change">
        //       <wa-select
        //         label="Service Category"
        //         size="small"
        //         value={this.formData.serviceCategoryId ?? ''}
        //         required
        //         onchange={event => {
        //           this.updateFormData({ serviceCategoryId: (event.target as HTMLSelectElement).value || undefined });
        //         }}
        //       >
        //         <wa-option value="">Select a service category</wa-option>
        //         {this.serviceCategoryOptions.map(category => (
        //           <wa-option key={category.id} value={category.id}>
        //             {category.label}
        //           </wa-option>
        //         ))}
        //       </wa-select>
        //     </ir-validator>
        //   </div>
        // );
    }
    renderAdjustmentFields() {
        return (h(Fragment, null, this.renderEntryTypeField(), h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: linkTypeFieldSchema, value: this.formData.linkType ?? 'NONE', valueEvent: "change" }, h("wa-select", { label: "Link Type", size: "small", value: this.formData.linkType ?? 'NONE', onchange: event => {
                const linkType = event.target.value;
                this.updateFormData({
                    linkType,
                    linkedId: linkType === 'NONE' ? undefined : this.formData.linkedId,
                });
            } }, LINK_TYPES.map(linkType => (h("wa-option", { key: linkType, value: linkType }, linkType)))))), this.formData.linkType !== 'NONE' && (h("div", { class: "transaction-form__field" }, h("wa-select", { label: "Linked Record", size: "small", value: this.formData.linkedId ?? '', onchange: event => {
                this.updateFormData({ linkedId: event.target.value || undefined });
            } }, h("wa-option", { value: "" }, "No linked record"), this.linkedIdOptions.map(option => (h("wa-option", { key: option.id, value: option.id }, option.label))))))));
    }
    renderFiscalNoteFields() {
        return (h(Fragment, null, h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: invoiceIdRequiredFieldSchema, value: this.formData.invoiceId ?? '', valueEvent: "change" }, h("wa-select", { label: "Invoice", size: "small", required: true, value: this.formData.invoiceId ?? '', onchange: event => {
                this.updateFormData({ invoiceId: event.target.value || undefined });
            } }, h("wa-option", { value: "" }, "Select invoice"), this.unpaidInvoiceOptions.map(invoice => (h("wa-option", { key: invoice.id, value: invoice.id }, invoice.label))))))));
    }
    renderConditionalFields() {
        switch (this.formData.transactionType) {
            case 'OB':
                return this.renderOpeningBalanceFields();
            case 'PAY':
                return this.renderPaymentFields();
            case 'DB':
                return this.renderManualChargeFields();
            case 'ADJ':
                return this.renderAdjustmentFields();
            case 'CN':
            case 'DN':
                return this.renderFiscalNoteFields();
            default:
                return null;
        }
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null)));
        }
        return (h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderCommonFields(!['OB', 'PAY'].includes(this.formData.transactionType)), this.renderConditionalFields(), h("ir-input", { label: "Reference" })));
    }
    static get watchers() { return {
        "initialTransactionType": ["handleInitialTransactionTypeChange"]
    }; }
    static get style() { return IrCityLedgerTransactionFormStyle0; }
}, [2, "ir-city-ledger-transaction-form", {
        "formId": [1, "form-id"],
        "agentId": [2, "agent-id"],
        "initialTransactionType": [1, "initial-transaction-type"],
        "taxOptions": [16],
        "unpaidInvoiceOptions": [16],
        "bookingOptions": [16],
        "serviceCategoryOptions": [16],
        "currencySymbol": [1, "currency-symbol"],
        "language": [1],
        "formData": [32],
        "paymentEntries": [32],
        "paymentTypeGroups": [32],
        "isLoading": [32],
        "isSubmitting": [32]
    }, undefined, {
        "initialTransactionType": ["handleInitialTransactionTypeChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-transaction-form", "ir-custom-date-range", "ir-date-select", "ir-input", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerTransactionForm);
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerTransactionForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-transaction-form2.js.map