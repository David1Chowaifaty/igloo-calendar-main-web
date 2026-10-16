import { Host, h } from "@stencil/core";
import { FdTypes } from "../../../../types/enums";
import { CityLedgerService } from "../../../../services/city-ledger/index";
import { t } from "../../../../services/locale/t";
export class IrClFiscalDocumentPreview {
    ticket;
    propertyId;
    request = null;
    showConvertDialog = false;
    isConverting = false;
    isFetching = false;
    documentConverted;
    cityLedgerService = new CityLedgerService();
    async handlePreviewRequest(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
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
            return t('Lcz_Preview', { fallback: 'Preview' });
        const typeLabel = this.getTypeLabel(this.request.fdTypeCode);
        return this.request.documentNumber ? `${typeLabel} #${this.request.documentNumber}` : typeLabel;
    }
    getTypeLabel(fdTypeCode) {
        switch (fdTypeCode) {
            case FdTypes.Invoice:
                return t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' });
            case FdTypes.Draft:
                return t('Lcz_DraftInvoice', { fallback: 'Draft Invoice' });
            case FdTypes.CreditNote:
                return t('Lcz_DocumentTypeCreditNote', { fallback: 'Credit Note' });
            case FdTypes.DebitNote:
                return t('Lcz_DocumentTypeDebitNote', { fallback: 'Debit Note' });
            case FdTypes.Receipt:
                return t('Lcz_DocumentTypeReceipt', { fallback: 'Receipt' });
            case FdTypes.Proforma:
                return t('Lcz_ProformaInvoice', { fallback: 'Proforma Invoice' });
            default:
                return t('Lcz_Document', { fallback: 'Document' });
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
        return (h(Host, { key: '5db64fe6113be4e00be554d67c0804598a54e2b7' }, h("ir-preview-screen-dialog", { key: '5d8f99fe0370a6d225d34e2d624fdee1e099e00f', hideDefaultAction: true, open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, h("div", { key: 'db6fbbd3d97135f9093350b17b9051b2f7b3ea17', slot: "header-actions", class: "header-actions" }, this.request?.fdTypeCode === FdTypes.Draft && (h("ir-custom-button", { key: '6b26a69711589be9456ba43b313f527340bd96da', onClickHandler: () => (this.showConvertDialog = true), variant: "brand", appearance: "accent" }, t('Lcz_ConvertToInvoice', { fallback: 'Convert to Invoice' }))), this.request?.url && (h("ir-custom-button", { key: '8243ab270bb85e036922afd15f7b571e48d6401c', size: "m", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: 'd084c90b6b0a2de88204a3dcb02e09db8d7ab391', name: "download", style: { fontSize: '1.2rem' }, label: t('Lcz_DownloadPdfTooltip', { fallback: 'Download PDF' }) })))), this.renderPreview()), h("ir-fd-confirm-dialog", { key: '376bf0209b5ba95cb9bdc5032aad62a018404fcb', open: this.showConvertDialog, action: "convert-to-invoice", docNumber: this.request?.documentNumber ?? t('Lcz_ThisDocumentFallback', { fallback: 'this document' }), isConfirming: this.isConverting, onConfirmed: () => this.handleConvertConfirm(), onCancelled: () => (this.showConvertDialog = false) })));
    }
    static get is() { return "ir-cl-fiscal-document-preview"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-fiscal-document-preview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-fiscal-document-preview.css"]
        };
    }
    static get properties() {
        return {
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
            }
        };
    }
    static get states() {
        return {
            "request": {},
            "showConvertDialog": {},
            "isConverting": {},
            "isFetching": {}
        };
    }
    static get events() {
        return [{
                "method": "documentConverted",
                "name": "documentConverted",
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
    static get listeners() {
        return [{
                "name": "clFiscalDocumentPreview",
                "method": "handlePreviewRequest",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "clPreviewReady",
                "method": "handleClPreviewReady",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
