import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { B as BookingService } from './booking.store.js';
import { b as buildPaymentTypes } from './utils2.js';
import { C as CityLedgerService } from './index6.js';
import { c as calendar_data } from './calendar-data.js';
import { c as createInitialTransactionFormDraft, r as resetDraftForTransactionType, v as validateCityLedgerTransaction, t as transactionTypeFieldSchema, D as DATE_INPUT_FORMAT, d as dateFieldSchema, a as amountFieldSchema, b as taxIdFieldSchema, T as TRANSACTION_TYPE_RATES } from './ir-city-ledger-transaction-form.schema.js';
import { C as ClTxTypeCode, V as VatIncludedCodes, F as FdStatus, a as FdTypes } from './enums.js';
import { d as defineCustomElement$a } from './ir-air-date-picker2.js';
import { d as defineCustomElement$9 } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$8 } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$7 } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$6 } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$5 } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$4 } from './ir-date-select2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irCityLedgerTransactionFormCss = ".sc-ir-city-ledger-transaction-form-h{display:block;height:100%}.transaction-form.sc-ir-city-ledger-transaction-form{display:grid;gap:0.9rem}.transaction-form__field.sc-ir-city-ledger-transaction-form{display:grid;gap:0.35rem}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form,.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.transaction-form__field__entry-type.--credit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.transaction-form__field__entry-type.--debit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}.amount-tax-group.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.35rem}.amount-tax-group__label.sc-ir-city-ledger-transaction-form{font-size:var(--wa-input-label-font-size-small, 0.875rem);font-weight:var(--wa-font-weight-semibold, 500);color:var(--wa-color-text-normal)}.amount-tax-group__required.sc-ir-city-ledger-transaction-form{color:var(--wa-color-danger-fill-loud)}.amount-tax-group__row.sc-ir-city-ledger-transaction-form{display:flex;align-items:stretch}.amount-tax-group__amount.sc-ir-city-ledger-transaction-form{flex:1;min-width:0}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(label){display:none}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(base){border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form{flex-shrink:0;min-width:8.5rem}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}.tx-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;width:100%}.tx-option__badges.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.25rem}.transaction-form__switch.sc-ir-city-ledger-transaction-form{padding:0.15rem 0}.transaction-form__error.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-fill-loud)}.transaction-form__fiscal-note.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.45rem;font-size:0.875rem;color:var(--wa-color-neutral-fill-loud)}.transaction-form__payment-type-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.payment-section.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section__title.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.payment-type-pill.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:var(--wa-color-success-fill-quiet, #f0fdf4);border:1px solid var(--wa-color-success-border-quiet, #bbf7d0);border-radius:0.5rem;font-size:0.8125rem}.payment-type-pill__name.sc-ir-city-ledger-transaction-form{font-weight:500;color:var(--wa-color-text-normal, #111827);flex:1}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.payment-invoice-select.sc-ir-city-ledger-transaction-form{animation:slide-in 0.18s ease}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.transaction-form__hint.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.transaction-form__textarea-label.sc-ir-city-ledger-transaction-form{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.transaction-form__notes.sc-ir-city-ledger-transaction-form{width:100%;box-sizing:border-box;padding:0.5rem 0.75rem;border:1px solid var(--wa-color-neutral-border-quiet, #d1d5db);border-radius:0.375rem;font-size:0.875rem;font-family:inherit;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-surface-default, #fff);resize:vertical;min-height:4.5rem;outline:none;transition:border-color 0.15s ease,\n    box-shadow 0.15s ease}.transaction-form__notes.sc-ir-city-ledger-transaction-form:focus{border-color:var(--wa-color-brand-border-loud, #2563eb);box-shadow:0 0 0 2px var(--wa-color-brand-fill-quiet, #eff6ff)}.transaction-form__notes.sc-ir-city-ledger-transaction-form::placeholder{color:var(--wa-color-text-quiet, #9ca3af)}";
const IrCityLedgerTransactionFormStyle0 = irCityLedgerTransactionFormCss;

const IrCityLedgerTransactionForm = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerTransactionForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.transactionSaved = createEvent(this, "transactionSaved", 7);
        this.transactionValidationFailed = createEvent(this, "transactionValidationFailed", 7);
        this.submitDisabledChange = createEvent(this, "submitDisabledChange", 7);
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview", 7);
    }
    formId = 'city-ledger-transaction-form';
    agent = null;
    initialTransactionType = 'OB';
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    language = 'en';
    booking = null;
    formData = createInitialTransactionFormDraft();
    paymentEntries = {
        types: [],
        groups: [],
        methods: [],
    };
    paymentTypeGroups = {};
    isLoading = true;
    isSubmitting = false;
    fiscalDocuments = [];
    transactionSaved;
    transactionValidationFailed;
    submitDisabledChange;
    clFiscalDocumentPreview;
    taxOptions = [];
    bookingService = new BookingService();
    cityLedgerService = new CityLedgerService();
    clTxTypes;
    get resolvedInitialType() {
        const obHidden = this.agent?.has_opening_balance || this.booking !== null;
        if (this.initialTransactionType === ClTxTypeCode.OpeningBalance && obHidden) {
            return ClTxTypeCode.StandardChargeDebit;
        }
        return this.initialTransactionType;
    }
    getUniqueTaxValues() {
        let taxes = new Set();
        calendar_data?.property.tax_categories?.forEach(t => {
            if (t.taxation_mode.code === VatIncludedCodes.Inclusive)
                taxes.add(t.pct);
        });
        this.taxOptions = Array.from(taxes).map(t => ({ id: t.toString(), label: `${t}%` }));
    }
    componentWillLoad() {
        this.formData = createInitialTransactionFormDraft(this.resolvedInitialType);
        this.fetchPaymentEntries();
        this.getUniqueTaxValues();
    }
    handleInitialTransactionTypeChange(_newType) {
        this.formData = resetDraftForTransactionType(this.resolvedInitialType, this.formData);
    }
    updateFormData(patch) {
        this.formData = { ...this.formData, ...patch };
    }
    get isSubmitDisabled() {
        return this.formData.transactionType === ClTxTypeCode.DebitNote && !this.isLoading && this.fiscalDocuments.length === 0;
    }
    handleTransactionTypeChange(nextType) {
        this.formData = resetDraftForTransactionType(nextType, this.formData);
        if (nextType === ClTxTypeCode.Payment || nextType === ClTxTypeCode.CreditNote || nextType === ClTxTypeCode.DebitNote) {
            this.fetchFiscalDocumentsForType(nextType);
        }
        else {
            this.submitDisabledChange.emit(false);
        }
    }
    async fetchFiscalDocumentsForType(type) {
        try {
            this.isLoading = true;
            const LIST_FD_TYPE_CODE = [FdTypes.Invoice];
            if (type === ClTxTypeCode.Payment) {
                LIST_FD_TYPE_CODE.push(FdTypes.DebitNote);
            }
            this.fiscalDocuments = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agent?.id,
                START_DATE: null,
                END_DATE: null,
                LIST_FD_TYPE_CODE,
                FD_STATUS_CODE: type === ClTxTypeCode.Payment ? [FdStatus.Sent, FdStatus.Issued] : [FdStatus.Paid, FdStatus.Issued],
            });
            if (type === ClTxTypeCode.CreditNote && this.fiscalDocuments.length === 0 && this.formData.creditNoteMode === 'cancel-invoice') {
                this.updateFormData({ creditNoteMode: 'goodwill', invoiceId: undefined });
            }
            if (type === ClTxTypeCode.Payment && this.fiscalDocuments.length === 0) {
                this.updateFormData({ onAccount: true, invoiceId: undefined });
            }
        }
        catch (error) {
            console.error('Failed to fetch fiscal documents', error);
            this.fiscalDocuments = [];
        }
        finally {
            this.isLoading = false;
            this.submitDisabledChange.emit(this.isSubmitDisabled);
        }
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
    buildParams(payload) {
        const amount = payload.amount;
        let credit = 0;
        let debit = 0;
        let payMethodCode = '';
        switch (payload.transactionType) {
            case ClTxTypeCode.OpeningBalance:
            case ClTxTypeCode.Adjustment:
                if (payload.entryType === 'CR')
                    credit = amount;
                else
                    debit = amount;
                break;
            case ClTxTypeCode.Payment:
            case ClTxTypeCode.CreditNote:
            case ClTxTypeCode.Discount:
                credit = amount;
                break;
            case ClTxTypeCode.StandardChargeDebit:
            case ClTxTypeCode.DebitNote:
            case ClTxTypeCode.CancellationPenalty:
                debit = amount;
                break;
        }
        if (payload.transactionType === ClTxTypeCode.Payment) {
            payMethodCode = payload.payment_method?.code ?? '';
        }
        const noTaxTransaction = payload.transactionType === ClTxTypeCode.OpeningBalance || payload.transactionType === ClTxTypeCode.Payment;
        const hasVat = !noTaxTransaction && payload.taxId !== 'N/A';
        return {
            CL_TX_ID: -1,
            AGENCY_ID: this.agent.id,
            SERVICE_DATE: payload.date,
            CL_TX_TYPE_CODE: payload.transactionType,
            DESCRIPTION: payload.reference ?? payload.transactionType,
            DEBIT: debit,
            CREDIT: credit,
            CURRENCY_ID: calendar_data?.property?.currency?.id,
            PAY_METHOD_CODE: payMethodCode,
            EXTERNAL_REF: payload.reference ?? '',
            BH_ID: this.booking?.system_id ?? null,
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
            const result = await this.cityLedgerService.issueManualCLTx(this.buildParams(validation.data));
            if (result?.My_Fd?.FD_TYPE_CODE && result.My_Fd.DOC_NUMBER) {
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: result.My_Fd.FD_TYPE_CODE,
                    documentNumber: result.My_Fd.DOC_NUMBER,
                    agentId: this.agent.id,
                    agentName: result.My_Fd.AGENCY_NAME ?? '',
                    externalRef: result.My_Fd.EXTERNAL_REF,
                });
            }
            this.transactionSaved.emit();
        }
        catch (error) {
            console.error('Failed to save transaction', error);
        }
        finally {
            this.isSubmitting = false;
        }
    };
    renderTransactionTypeField() {
        return (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: transactionTypeFieldSchema, value: this.formData.transactionType, valueEvent: "change" }, h("wa-select", { label: "Transaction Type", size: "small", defaultValue: this.formData.transactionType, value: this.formData.transactionType, required: true, onchange: event => {
                const value = event.target.value;
                this.handleTransactionTypeChange(value);
            } }, this.clTxTypes.map(type => {
            const rate = TRANSACTION_TYPE_RATES[type.CODE_NAME];
            const label = type.CODE_VALUE_EN;
            if (type.CODE_NAME === ClTxTypeCode.OpeningBalance && (this.agent.has_opening_balance || this.booking !== null)) {
                return null;
            }
            if ([ClTxTypeCode.Discount, ClTxTypeCode.CancellationPenalty].includes(type.CODE_NAME) && !this.booking) {
                return null;
            }
            return (h("wa-option", { key: type.CODE_NAME, value: type.CODE_NAME, label: label }, h("div", { class: "tx-option" }, h("span", { class: "tx-option__label" }, label), h("span", { class: "tx-option__badges" }, (rate === 'CR' || rate === 'CR|DB') && h("wa-badge", { variant: "success" }, "Credit"), (rate === 'DB' || rate === 'CR|DB') && h("wa-badge", { variant: "danger" }, "Debit")))));
        })))));
    }
    renderCommonFields(withTaxes = true) {
        const minAllowedDate = hooks().subtract(12, 'months').format(DATE_INPUT_FORMAT);
        return (h(Fragment, null, this.renderTransactionTypeField(), h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: dateFieldSchema, value: this.formData.date, valueEvent: "DateChanged" }, h("ir-date-select", { label: "Date", date: this.formData.date, minDate: minAllowedDate, maxDate: hooks().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: event => {
                this.updateFormData({
                    date: event.detail.start ? event.detail.start.format(DATE_INPUT_FORMAT) : '',
                });
            } }))), withTaxes ? (h("div", { class: "amount-tax-group" }, h("span", { class: "amount-tax-group__label" }, "Amount (including taxes)"), h("div", { class: "amount-tax-group__row" }, h("ir-validator", { class: "amount-tax-group__amount", schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: "Amount (including taxes)", mask: "price", value: this.formData.amount, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, h("span", { slot: "start" }, calendar_data.property?.currency?.symbol))), h("ir-validator", { schema: taxIdFieldSchema, value: this.formData.taxId, valueEvent: "change" }, h("wa-select", { size: "small", placeholder: "Tax", value: this.formData.taxId, onchange: event => {
                this.updateFormData({ taxId: event.target.value });
            } }, h("wa-option", { value: "N/A", label: "Not Applicable" }, "Not Applicable"), this.taxOptions.map(tax => (h("wa-option", { key: tax.id, label: tax.label, value: tax.id }, tax.label)))))))) : (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: "Amount", mask: "price", value: this.formData.amount, required: true, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, h("span", { slot: "start" }, calendar_data.property?.currency?.symbol)))))));
    }
    renderTypeFields() {
        const onFieldChange = (e) => this.updateFormData(e.detail);
        switch (this.formData.transactionType) {
            case ClTxTypeCode.OpeningBalance:
                return h("ir-cl-opening-balance-fields", { entryType: this.formData.entryType, onFieldChange: onFieldChange });
            case ClTxTypeCode.Payment:
                return (h("ir-cl-payment-fields", { paymentMethodCode: this.formData.payment_method?.code ?? '', isOnAccount: this.formData.onAccount, invoiceId: this.formData.invoiceId, paymentMethods: this.paymentEntries?.methods ?? [], unpaidInvoiceOptions: this.unpaidInvoiceOptions, noInvoices: this.fiscalDocuments.length === 0, language: this.language, onFieldChange: onFieldChange }));
            case ClTxTypeCode.Adjustment:
                return (h("ir-cl-adjustment-fields", { entryType: this.formData.entryType, linkType: this.formData.linkType, linkedId: this.formData.linkedId, bookingOptions: this.bookingOptions, unpaidInvoiceOptions: this.unpaidInvoiceOptions, onFieldChange: onFieldChange }));
            case ClTxTypeCode.CreditNote:
                return (h("ir-cl-credit-note-fields", { creditNoteMode: this.formData.creditNoteMode, invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, isFetchingFiscalDocs: this.isLoading, onFieldChange: onFieldChange }));
            case ClTxTypeCode.DebitNote:
                return h("ir-cl-debit-note-fields", { invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, onFieldChange: onFieldChange });
            default:
                return null;
        }
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null)));
        }
        if (this.isSubmitDisabled) {
            return (h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderTransactionTypeField(), this.renderTypeFields()));
        }
        return (h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderCommonFields(this.formData.transactionType !== ClTxTypeCode.OpeningBalance && this.formData.transactionType !== ClTxTypeCode.Payment), this.renderTypeFields(), h("ir-input", { label: "Reference", value: this.formData.reference, "onText-change": (event) => {
                this.updateFormData({ reference: event.detail ?? '' });
            } })));
    }
    static get watchers() { return {
        "initialTransactionType": ["handleInitialTransactionTypeChange"]
    }; }
    static get style() { return IrCityLedgerTransactionFormStyle0; }
}, [2, "ir-city-ledger-transaction-form", {
        "formId": [1, "form-id"],
        "agent": [16],
        "initialTransactionType": [1, "initial-transaction-type"],
        "unpaidInvoiceOptions": [16],
        "bookingOptions": [16],
        "serviceCategoryOptions": [16],
        "language": [1],
        "booking": [16],
        "formData": [32],
        "paymentEntries": [32],
        "paymentTypeGroups": [32],
        "isLoading": [32],
        "isSubmitting": [32],
        "fiscalDocuments": [32]
    }, undefined, {
        "initialTransactionType": ["handleInitialTransactionTypeChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-transaction-form", "ir-air-date-picker", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-date-select", "ir-input", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerTransactionForm);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-cl-payment-fields":
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