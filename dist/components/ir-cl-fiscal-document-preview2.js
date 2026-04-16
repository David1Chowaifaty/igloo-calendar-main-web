import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as FdTypes } from './enums.js';
import { C as CityLedgerService } from './index6.js';
import { d as defineCustomElement$j } from './ir-cl-credit-note-preview2.js';
import { d as defineCustomElement$i } from './ir-cl-debit-note-preview2.js';
import { d as defineCustomElement$h } from './ir-cl-document-header2.js';
import { d as defineCustomElement$g } from './ir-cl-fiscal-document-table2.js';
import { d as defineCustomElement$f } from './ir-cl-invoice-city-tax-amount-cell2.js';
import { d as defineCustomElement$e } from './ir-cl-invoice-city-tax-pct-cell2.js';
import { d as defineCustomElement$d } from './ir-cl-invoice-date-cell2.js';
import { d as defineCustomElement$c } from './ir-cl-invoice-description-cell2.js';
import { d as defineCustomElement$b } from './ir-cl-invoice-net-price-cell2.js';
import { d as defineCustomElement$a } from './ir-cl-invoice-preview2.js';
import { d as defineCustomElement$9 } from './ir-cl-invoice-total-cell2.js';
import { d as defineCustomElement$8 } from './ir-cl-invoice-vat-amount-cell2.js';
import { d as defineCustomElement$7 } from './ir-cl-invoice-vat-pct-cell2.js';
import { d as defineCustomElement$6 } from './ir-cl-receipt-preview2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$2 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const IrClFiscalDocumentPreview = /*@__PURE__*/ proxyCustomElement(class IrClFiscalDocumentPreview extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.documentConverted = createEvent(this, "documentConverted", 7);
    }
    ticket;
    propertyId;
    request = null;
    showConvertDialog = false;
    isConverting = false;
    documentConverted;
    cityLedgerService = new CityLedgerService();
    handlePreviewRequest(event) {
        this.request = { ...event.detail };
        // if (event.detail.autoPrint) {
        //   window.print();
        // }
    }
    getDialogLabel() {
        if (!this.request)
            return 'Preview';
        return `${this.getTypeLabel(this.request.fdTypeCode)} — ${this.request.documentNumber}`;
    }
    getTypeLabel(fdTypeCode) {
        switch (fdTypeCode) {
            case FdTypes.Invoice:
            case FdTypes.Draft:
                return 'Invoice Preview';
            case FdTypes.CreditNote:
                return 'Credit Note Preview';
            case FdTypes.DebitNote:
                return 'Debit Note Preview';
            case FdTypes.Receipt:
                return 'Receipt Preview';
            default:
                return 'Document Preview';
        }
    }
    handleClPreviewReady(event) {
        event.stopPropagation();
        if (this.request?.autoPrint) {
            window.print();
        }
    }
    async handleConvertConfirm() {
        if (!this.request)
            return;
        this.isConverting = true;
        try {
            await this.cityLedgerService.issueInvoiceFromDraft({ FD_ID: this.request.fdId });
            this.documentConverted.emit();
            this.showConvertDialog = false;
            this.request = null;
        }
        finally {
            this.isConverting = false;
        }
    }
    renderPreview() {
        if (!this.request)
            return null;
        const { fdTypeCode, documentNumber, agentId, agentName, externalRef } = this.request;
        const commonProps = {
            ticket: this.ticket,
            propertyId: this.propertyId,
            agentId,
            agentName,
            documentNumber,
            externalRef,
        };
        switch (fdTypeCode) {
            case FdTypes.Invoice:
            case FdTypes.Draft:
                return h("ir-cl-invoice-preview", { ...commonProps });
            case FdTypes.CreditNote:
                return h("ir-cl-credit-note-preview", { ...commonProps });
            case FdTypes.DebitNote:
                return h("ir-cl-debit-note-preview", { ...commonProps });
            case FdTypes.Receipt:
                return h("ir-cl-receipt-preview", { ...commonProps });
            default:
                return h("ir-cl-invoice-preview", { ...commonProps });
        }
    }
    render() {
        return (h(Host, { key: '374e00366e8cf22e5690894f80c2b493cdbcfe5a' }, h("ir-preview-screen-dialog", { key: '53c083e404f9f90ebef89fe1c3392796038bbdbc', open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, this.request?.fdTypeCode === FdTypes.Draft && (h("ir-custom-button", { key: '0e916e9e9d80a8f9b2c4d8c14c2c3e301e178835', onClickHandler: () => (this.showConvertDialog = true), variant: "brand", appearance: "accent", slot: "header-actions" }, "Convert to invoice")), this.renderPreview()), h("ir-fd-confirm-dialog", { key: '15b21762b3f9bdf92eedb1c4bda94cf69733efce', open: this.showConvertDialog, action: "convert-to-invoice", docNumber: this.request?.documentNumber ?? 'this document', isConfirming: this.isConverting, onConfirmed: () => this.handleConvertConfirm(), onCancelled: () => (this.showConvertDialog = false) })));
    }
}, [0, "ir-cl-fiscal-document-preview", {
        "ticket": [1],
        "propertyId": [2, "property-id"],
        "request": [32],
        "showConvertDialog": [32],
        "isConverting": [32]
    }, [[8, "clFiscalDocumentPreview", "handlePreviewRequest"], [0, "clPreviewReady", "handleClPreviewReady"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-fiscal-document-preview", "ir-cl-credit-note-preview", "ir-cl-debit-note-preview", "ir-cl-document-header", "ir-cl-fiscal-document-table", "ir-cl-invoice-city-tax-amount-cell", "ir-cl-invoice-city-tax-pct-cell", "ir-cl-invoice-date-cell", "ir-cl-invoice-description-cell", "ir-cl-invoice-net-price-cell", "ir-cl-invoice-preview", "ir-cl-invoice-total-cell", "ir-cl-invoice-vat-amount-cell", "ir-cl-invoice-vat-pct-cell", "ir-cl-receipt-preview", "ir-custom-button", "ir-dialog", "ir-fd-confirm-dialog", "ir-preview-screen-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClFiscalDocumentPreview);
            }
            break;
        case "ir-cl-credit-note-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-cl-debit-note-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-cl-document-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-cl-fiscal-document-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-cl-invoice-city-tax-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-cl-invoice-city-tax-pct-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-cl-invoice-date-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-cl-invoice-description-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-cl-invoice-net-price-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-cl-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-cl-invoice-total-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-cl-invoice-vat-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-cl-invoice-vat-pct-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-cl-receipt-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClFiscalDocumentPreview as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-fiscal-document-preview2.js.map