import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { F as FdTypes } from './enums.js';
import { C as CityLedgerService } from './index5.js';
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
        return (h(Host, { key: '4ee10bfb6a4bc0fd111571677e2bafd1c513590f' }, h("ir-preview-screen-dialog", { key: '93f904a4fe693a9129acfc709af8e772547bebc9', hideDefaultAction: true, open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, h("div", { key: '60ccfbc56363e5f9d1d708283d397894f5496007', slot: "header-actions", class: "header-actions" }, this.request?.fdTypeCode === FdTypes.Draft && (h("ir-custom-button", { key: 'ddba9137905c95485ad9de224d2c8f0233df9f90', onClickHandler: () => (this.showConvertDialog = true), variant: "brand", appearance: "accent" }, "Convert to invoice")), this.request?.url && (h("ir-custom-button", { key: '53ea71427d1cc330f7ce45a44da6ec9539213058', size: "medium", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: '8b9befaa1317993aa602ac14077cd06db2cb6d62', name: "download", style: { fontSize: '1.2rem' }, label: "Download PDF" })))), this.renderPreview()), h("ir-fd-confirm-dialog", { key: '88f441f2d97fd693c2b531bf6928b02631512f56', open: this.showConvertDialog, action: "convert-to-invoice", docNumber: this.request?.documentNumber ?? 'this document', isConfirming: this.isConverting, onConfirmed: () => this.handleConvertConfirm(), onCancelled: () => (this.showConvertDialog = false) })));
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