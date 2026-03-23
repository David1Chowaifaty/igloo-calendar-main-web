import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import { buildPaymentTypes } from "../../../../../services/booking-service/utils";
import { CityLedgerService } from "../../../../../services/city-ledger/index";
import calendar_data from "../../../../../stores/calendar-data";
import { DATE_INPUT_FORMAT, LINK_TYPES, amountFieldSchema, createInitialTransactionFormDraft, dateFieldSchema, entryTypeFieldSchema, invoiceIdRequiredFieldSchema, linkTypeFieldSchema, paymentMethodCodeFieldSchema, resetDraftForTransactionType, taxIdFieldSchema, transactionTypeFieldSchema, validateCityLedgerTransaction, TRANSACTION_TYPE_RATES, } from "./ir-city-ledger-transaction-form.schema";
import { getEntryValue } from "../../../../../utils/utils";
export class IrCityLedgerTransactionForm {
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
        const minAllowedDate = moment().subtract(1, 'months').format(DATE_INPUT_FORMAT);
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
    static get is() { return "ir-city-ledger-transaction-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-transaction-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-transaction-form.css"]
        };
    }
    static get properties() {
        return {
            "formId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "form-id",
                "reflect": false,
                "defaultValue": "'city-ledger-transaction-form'"
            },
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "agent-id",
                "reflect": false,
                "defaultValue": "null"
            },
            "initialTransactionType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TransactionType",
                    "resolved": "\"ADJ\" | \"CN\" | \"DB\" | \"DN\" | \"OB\" | \"PAY\"",
                    "references": {
                        "TransactionType": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::TransactionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "initial-transaction-type",
                "reflect": false,
                "defaultValue": "'OB'"
            },
            "taxOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TaxOption[]",
                    "resolved": "TaxOption[]",
                    "references": {
                        "TaxOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::TaxOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "unpaidInvoiceOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "LinkedOption[]",
                    "resolved": "LinkedOption[]",
                    "references": {
                        "LinkedOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkedOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "bookingOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "LinkedOption[]",
                    "resolved": "LinkedOption[]",
                    "references": {
                        "LinkedOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkedOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "serviceCategoryOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ServiceCategoryOption[]",
                    "resolved": "ServiceCategoryOption[]",
                    "references": {
                        "ServiceCategoryOption": {
                            "location": "import",
                            "path": "./ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::ServiceCategoryOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "currency-symbol",
                "reflect": false,
                "defaultValue": "'$'"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "formData": {},
            "paymentEntries": {},
            "paymentTypeGroups": {},
            "isLoading": {},
            "isSubmitting": {}
        };
    }
    static get events() {
        return [{
                "method": "transactionSaved",
                "name": "transactionSaved",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "transactionValidationFailed",
                "name": "transactionValidationFailed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ZodIssue[]",
                    "resolved": "ZodIssue[]",
                    "references": {
                        "ZodIssue": {
                            "location": "import",
                            "path": "zod",
                            "id": "node_modules::ZodIssue"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "initialTransactionType",
                "methodName": "handleInitialTransactionTypeChange"
            }];
    }
}
//# sourceMappingURL=ir-city-ledger-transaction-form.js.map
