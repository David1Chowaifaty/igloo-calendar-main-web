import { Host, h } from "@stencil/core";
import { ClFiscalDocumentService } from "../cl-fiscal-document.service";
import { formatAmount } from "../../../../../utils/utils";
import { CityLedgerService } from "../../../../../services/city-ledger/index";
import { BookingService } from "../../../../../services/booking-service/booking.service";
export class IrClReceiptPreview {
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    ClEntry;
    error = null;
    property = null;
    paymentMethods = [];
    document = null;
    clPreviewReady;
    hasEmitted = false;
    dataService = new ClFiscalDocumentService();
    bookingService = new BookingService();
    cityLedgerService = new CityLedgerService();
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const [{ property, transactions }, paymentMethods, documents] = await Promise.all([
                this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber),
                this.bookingService.getSetupEntriesByTableName('_PAY_METHOD'),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    DOC_NUMBER: this.documentNumber,
                }),
            ]);
            this.document = documents[0];
            this.property = property;
            this.ClEntry = transactions[0];
            this.paymentMethods = paymentMethods;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load receipt data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    getPaymentMethodLabel(code) {
        if (!code)
            return '—';
        const entry = this.paymentMethods.find(e => e.CODE_NAME === code);
        return entry?.CODE_VALUE_EN ?? code;
    }
    render() {
        if (!this.ticket) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "document-state" }, h("ir-spinner", null))));
        }
        if (this.error) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, this.error)));
        }
        const tx = this.ClEntry;
        if (!tx) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "No receipt data found.")));
        }
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? formatAmount(currency, v) : '—');
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "receipt" }), h("div", { class: "receipt-body" }, h("section", { class: "receipt-section" }, h("h4", { class: "receipt-section__title" }, "Payment Details"), h("div", { class: "receipt-rows" }, h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Amount Received"), h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Payment Method"), h("span", { class: "receipt-row__value" }, this.getPaymentMethodLabel(tx.PAY_METHOD_CODE))), tx.DESCRIPTION && (h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Reference"), h("span", { class: "receipt-row__value" }, tx.DESCRIPTION))))), h("section", { class: "receipt-section" }, h("h4", { class: "receipt-section__title" }, "Balance Summary (Account)"), h("div", { class: "receipt-rows" }, h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Balance Before Payment"), h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_BEFORE_TX))), h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Payment Received"), h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Balance After Payment"), h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_AFTER_TX)))))))));
    }
    static get is() { return "ir-cl-receipt-preview"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-receipt-preview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-receipt-preview.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
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
                "reflect": false,
                "attribute": "property-id"
            },
            "ticket": {
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
                "reflect": false,
                "attribute": "ticket"
            },
            "baseurl": {
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
                "reflect": false,
                "attribute": "baseurl"
            },
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
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
                "reflect": false,
                "attribute": "agent-id"
            },
            "agentName": {
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
                "reflect": false,
                "attribute": "agent-name"
            },
            "documentNumber": {
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
                "reflect": false,
                "attribute": "document-number"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "ClEntry": {},
            "error": {},
            "property": {},
            "paymentMethods": {},
            "document": {}
        };
    }
    static get events() {
        return [{
                "method": "clPreviewReady",
                "name": "clPreviewReady",
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
            }];
    }
}
