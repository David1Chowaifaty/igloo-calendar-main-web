import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { F as FdTypes } from './enums.js';
import { C as CityLedgerService } from './index6.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-dialog2.js';
import { d as defineCustomElement$4 } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$3 } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$2 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irClFiscalDocumentPreviewCss = ".preview-loading{display:flex;align-items:center;justify-content:center;padding:3rem}.preview-body{display:flex;justify-content:center;padding:1.5rem;min-height:100%}.header-actions{display:flex;align-items:center;gap:0.5rem;padding-inline-end:0.5rem}";
const IrClFiscalDocumentPreviewStyle0 = irClFiscalDocumentPreviewCss;

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
    isFetching = false;
    documentConverted;
    cityLedgerService = new CityLedgerService();
    async handlePreviewRequest(event) {
        if (event.detail.url) {
            this.request = { ...event.detail, url: event.detail.url };
            return;
        }
        this.request = { ...event.detail, url: null };
        this.isFetching = true;
        try {
            let url;
            if (event.detail.fdTypeCode === FdTypes.Proforma) {
                url = await this.cityLedgerService.getClProformaLink({
                    FD_ID: this.request.fdId,
                });
            }
            else {
                url = await this.cityLedgerService.printClFiscalDocument({
                    doc_number: this.request.documentNumber,
                });
            }
            this.request = { ...this.request, url };
        }
        finally {
            this.isFetching = false;
        }
        // if (event.detail.autoPrint) {
        //   window.print();
        // }
    }
    getDialogLabel() {
        if (!this.request)
            return 'Preview';
        const typeLabel = this.getTypeLabel(this.request.fdTypeCode);
        return this.request.documentNumber ? `${typeLabel} #${this.request.documentNumber}` : typeLabel;
    }
    getTypeLabel(fdTypeCode) {
        switch (fdTypeCode) {
            case FdTypes.Invoice:
                return 'Invoice';
            case FdTypes.Draft:
                return 'Draft Invoice';
            case FdTypes.CreditNote:
                return 'Credit Note';
            case FdTypes.DebitNote:
                return 'Debit Note';
            case FdTypes.Receipt:
                return 'Receipt';
            case FdTypes.Proforma:
                return 'Pro Forma Invoice';
            default:
                return 'Document';
        }
    }
    handleClPreviewReady(event) {
        event.stopPropagation();
        if (this.request?.autoPrint) {
            window.print();
        }
    }
    async handleDownload() {
        if (!this.request?.url)
            return;
        const blob = await fetch(this.request.url).then(r => r.blob());
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = `${this.request.documentNumber}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
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
        // const { fdTypeCode, documentNumber, agentId, agentName, externalRef } = this.request;
        // const commonProps = {
        //   ticket: this.ticket,
        //   propertyId: this.propertyId,
        //   agentId,
        //   agentName,
        //   documentNumber,
        //   externalRef,
        // };
        // switch (fdTypeCode) {
        //   case FdTypes.Invoice:
        //   case FdTypes.Draft:
        //     return <ir-cl-invoice-preview {...commonProps}></ir-cl-invoice-preview>;
        //   case FdTypes.CreditNote:
        //     return <ir-cl-credit-note-preview {...commonProps}></ir-cl-credit-note-preview>;
        //   case FdTypes.DebitNote:
        //     return <ir-cl-debit-note-preview {...commonProps}></ir-cl-debit-note-preview>;
        //   case FdTypes.Receipt:
        //     return <ir-cl-receipt-preview {...commonProps}></ir-cl-receipt-preview>;
        //   default:
        //     return <ir-cl-invoice-preview {...commonProps}></ir-cl-invoice-preview>;
        // }
        if (this.isFetching) {
            return (h("div", { class: "preview-loading" }, h("ir-spinner", null)));
        }
        return (h("div", { class: "preview-body" }, h("ir-pdf-viewer", { src: this.request?.url })));
    }
    render() {
        return (h(Host, { key: 'bb302c21a3353a06464bb38175ed5fff57cfd2ec' }, h("ir-preview-screen-dialog", { key: 'ccf9f06852f7a4cd7448ad20c28a4b5f79e50d3e', hideDefaultAction: true, open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, h("div", { key: 'd5d71b1106adf92013949bcc72348f0615894e8c', slot: "header-actions", class: "header-actions" }, this.request?.fdTypeCode === FdTypes.Draft && (h("ir-custom-button", { key: '9676fe58ac5040ab1a1868d6bf8c60302d96daa5', onClickHandler: () => (this.showConvertDialog = true), variant: "brand", appearance: "accent" }, "Convert to invoice")), this.request?.url && (h("ir-custom-button", { key: 'e0fa563bcca8a1aa8f2d394f90394dfa87f5e274', size: "medium", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: 'f09c136e8f908fb6a4e4c3dfb8b7c5f79b3e2b86', name: "download", style: { fontSize: '1.2rem' }, label: "Download PDF" })))), this.renderPreview()), h("ir-fd-confirm-dialog", { key: '1c6eb2ee351a90abae1feac1d1f48cbee5da841f', open: this.showConvertDialog, action: "convert-to-invoice", docNumber: this.request?.documentNumber ?? 'this document', isConfirming: this.isConverting, onConfirmed: () => this.handleConvertConfirm(), onCancelled: () => (this.showConvertDialog = false) })));
    }
    static get style() { return IrClFiscalDocumentPreviewStyle0; }
}, [0, "ir-cl-fiscal-document-preview", {
        "ticket": [1],
        "propertyId": [2, "property-id"],
        "request": [32],
        "showConvertDialog": [32],
        "isConverting": [32],
        "isFetching": [32]
    }, [[8, "clFiscalDocumentPreview", "handlePreviewRequest"], [0, "clPreviewReady", "handleClPreviewReady"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-fiscal-document-preview", "ir-custom-button", "ir-dialog", "ir-fd-confirm-dialog", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClFiscalDocumentPreview);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-pdf-viewer":
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