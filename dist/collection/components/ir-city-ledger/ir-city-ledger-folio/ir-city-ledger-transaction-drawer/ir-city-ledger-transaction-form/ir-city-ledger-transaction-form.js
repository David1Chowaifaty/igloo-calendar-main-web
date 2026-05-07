import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import { buildPaymentTypes } from "../../../../../services/booking-service/utils";
import { CityLedgerService } from "../../../../../services/city-ledger/index";
import calendar_data from "../../../../../stores/calendar-data";
import { DATE_INPUT_FORMAT, TRANSACTION_TYPE_RATES, amountFieldSchema, createInitialTransactionFormDraft, dateFieldSchema, hydrateFormDraftFromTx, resetDraftForTransactionType, taxIdFieldSchema, transactionTypeFieldSchema, validateCityLedgerTransaction, } from "./ir-city-ledger-transaction-form.schema";
import { ClTxTypeCode, FdStatus, FdTypes, VatIncludedCodes } from "../../../../../types/enums";
export class IrCityLedgerTransactionForm {
    formId = 'city-ledger-transaction-form';
    agent = null;
    initialTransactionType = 'OB';
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    language = 'en';
    booking = null;
    transaction = null;
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
        this.formData = this.transaction ? hydrateFormDraftFromTx(this.transaction) : createInitialTransactionFormDraft(this.resolvedInitialType);
        this.fetchPaymentEntries();
        this.getUniqueTaxValues();
    }
    handleTransactionChange(newTx) {
        this.formData = newTx ? hydrateFormDraftFromTx(newTx) : createInitialTransactionFormDraft(this.resolvedInitialType);
    }
    handleInitialTransactionTypeChange(_newType) {
        if (!this.transaction) {
            this.formData = resetDraftForTransactionType(this.resolvedInitialType, this.formData);
        }
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
        const typeLabel = this.clTxTypes.find(c => c.CODE_NAME === payload.transactionType)?.CODE_VALUE_EN ?? payload.transactionType;
        return {
            CL_TX_ID: this.transaction?.CL_TX_ID ?? -1,
            AGENCY_ID: this.agent.id,
            SERVICE_DATE: payload.date,
            CL_TX_TYPE_CODE: payload.transactionType,
            DESCRIPTION: payload.reference ? `${typeLabel}: ${payload.reference}` : typeLabel,
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
        return (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: transactionTypeFieldSchema, value: this.formData.transactionType, valueEvent: "change" }, h("wa-select", { label: "Transaction Type", size: "small", defaultValue: this.formData.transactionType, value: this.formData.transactionType, required: true, disabled: this.transaction !== null, onchange: event => {
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
        const minAllowedDate = moment().subtract(12, 'months').format(DATE_INPUT_FORMAT);
        return (h(Fragment, null, this.renderTransactionTypeField(), h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: dateFieldSchema, value: this.formData.date, valueEvent: "DateChanged" }, h("ir-date-select", { label: "Date", date: this.formData.date, minDate: minAllowedDate, maxDate: moment().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: event => {
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
        return (h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderCommonFields(this.formData.transactionType !== ClTxTypeCode.OpeningBalance &&
            ![ClTxTypeCode.Payment, ClTxTypeCode.Discount, ClTxTypeCode.CancellationPenalty].includes(this.formData.transactionType)), this.renderTypeFields(), h("ir-input", { label: "Reference", value: this.formData.reference, "onText-change": (event) => {
                this.updateFormData({ reference: event.detail ?? '' });
            } })));
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
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent | null",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
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
                "defaultValue": "null"
            },
            "initialTransactionType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TransactionType",
                    "resolved": "\"ADJ\" | \"CN\" | \"CPN\" | \"DB\" | \"DN\" | \"DSC\" | \"OB\" | \"PAY\"",
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
            },
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking | null",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
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
                "defaultValue": "null"
            },
            "transaction": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClTx | null",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; CURRENCY_ID?: number; CREDIT?: number; DEBIT?: number; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; TOTAL_AMOUNT?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }",
                    "references": {
                        "ClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::ClTx"
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
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "formData": {},
            "paymentEntries": {},
            "paymentTypeGroups": {},
            "isLoading": {},
            "isSubmitting": {},
            "fiscalDocuments": {}
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
            }, {
                "method": "submitDisabledChange",
                "name": "submitDisabledChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "clFiscalDocumentPreview",
                "name": "clFiscalDocumentPreview",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ClFiscalDocumentPreviewRequest",
                    "resolved": "ClFiscalDocumentPreviewRequest",
                    "references": {
                        "ClFiscalDocumentPreviewRequest": {
                            "location": "import",
                            "path": "../../../ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types.ts::ClFiscalDocumentPreviewRequest"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "transaction",
                "methodName": "handleTransactionChange"
            }, {
                "propName": "initialTransactionType",
                "methodName": "handleInitialTransactionTypeChange"
            }];
    }
}
//# sourceMappingURL=ir-city-ledger-transaction-form.js.map
