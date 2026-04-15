import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { F as FD_TYPES } from './index6.js';
import { d as defineCustomElement$i } from './ir-cl-credit-note-preview2.js';
import { d as defineCustomElement$h } from './ir-cl-debit-note-preview2.js';
import { d as defineCustomElement$g } from './ir-cl-document-header2.js';
import { d as defineCustomElement$f } from './ir-cl-fiscal-document-table2.js';
import { d as defineCustomElement$e } from './ir-cl-invoice-city-tax-amount-cell2.js';
import { d as defineCustomElement$d } from './ir-cl-invoice-city-tax-pct-cell2.js';
import { d as defineCustomElement$c } from './ir-cl-invoice-date-cell2.js';
import { d as defineCustomElement$b } from './ir-cl-invoice-description-cell2.js';
import { d as defineCustomElement$a } from './ir-cl-invoice-net-price-cell2.js';
import { d as defineCustomElement$9 } from './ir-cl-invoice-preview2.js';
import { d as defineCustomElement$8 } from './ir-cl-invoice-total-cell2.js';
import { d as defineCustomElement$7 } from './ir-cl-invoice-vat-amount-cell2.js';
import { d as defineCustomElement$6 } from './ir-cl-invoice-vat-pct-cell2.js';
import { d as defineCustomElement$5 } from './ir-cl-receipt-preview2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const IrClFiscalDocumentPreview = /*@__PURE__*/ proxyCustomElement(class IrClFiscalDocumentPreview extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    ticket;
    propertyId;
    request = null;
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
            case FD_TYPES.Invoice:
            case FD_TYPES.Draft:
                return 'Invoice Preview';
            case FD_TYPES.CreditNote:
                return 'Credit Note Preview';
            case FD_TYPES.DebitNote:
                return 'Debit Note Preview';
            case FD_TYPES.Receipt:
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
    renderPreview() {
        if (!this.request)
            return null;
        const { fdTypeCode, documentNumber, agentId, agentName } = this.request;
        const commonProps = {
            ticket: this.ticket,
            propertyId: this.propertyId,
            agentId,
            agentName,
            documentNumber,
        };
        switch (fdTypeCode) {
            case FD_TYPES.Invoice:
            case FD_TYPES.Draft:
                return h("ir-cl-invoice-preview", { ...commonProps });
            case FD_TYPES.CreditNote:
                return h("ir-cl-credit-note-preview", { ...commonProps });
            case FD_TYPES.DebitNote:
                return h("ir-cl-debit-note-preview", { ...commonProps });
            case FD_TYPES.Receipt:
                return h("ir-cl-receipt-preview", { ...commonProps });
            default:
                return h("ir-cl-invoice-preview", { ...commonProps });
        }
    }
    render() {
        return (h(Host, { key: 'a9a5357b4d1c640577adddc415a65781e216abf6' }, h("ir-preview-screen-dialog", { key: '7d0b5a515c1b0013ff47198f7e23408c3895776f', open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, this.renderPreview())));
    }
}, [0, "ir-cl-fiscal-document-preview", {
        "ticket": [1],
        "propertyId": [2, "property-id"],
        "request": [32]
    }, [[8, "clFiscalDocumentPreview", "handlePreviewRequest"], [0, "clPreviewReady", "handleClPreviewReady"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-fiscal-document-preview", "ir-cl-credit-note-preview", "ir-cl-debit-note-preview", "ir-cl-document-header", "ir-cl-fiscal-document-table", "ir-cl-invoice-city-tax-amount-cell", "ir-cl-invoice-city-tax-pct-cell", "ir-cl-invoice-date-cell", "ir-cl-invoice-description-cell", "ir-cl-invoice-net-price-cell", "ir-cl-invoice-preview", "ir-cl-invoice-total-cell", "ir-cl-invoice-vat-amount-cell", "ir-cl-invoice-vat-pct-cell", "ir-cl-receipt-preview", "ir-custom-button", "ir-dialog", "ir-preview-screen-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClFiscalDocumentPreview);
            }
            break;
        case "ir-cl-credit-note-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-cl-debit-note-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-cl-document-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-cl-fiscal-document-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-cl-invoice-city-tax-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-cl-invoice-city-tax-pct-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-cl-invoice-date-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-cl-invoice-description-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-cl-invoice-net-price-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-cl-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-cl-invoice-total-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-cl-invoice-vat-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-cl-invoice-vat-pct-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-cl-receipt-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
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