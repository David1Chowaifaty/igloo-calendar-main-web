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
        return (h(Host, { key: '84b9e5ef89ea1b3f3658606a56e065bd8c747558' }, h("ir-preview-screen-dialog", { key: '9a43fbc2dbfd0eba7bc382ddb309ad7ad013b925', hideDefaultAction: true, open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, h("div", { key: '4f8d2f2a7f6c39babe85a0b41fb44e24783945a7', slot: "header-actions", class: "header-actions" }, this.request?.fdTypeCode === FdTypes.Draft && (h("ir-custom-button", { key: '552509894e4e30965bcd258d779414aed852ee5f', onClickHandler: () => (this.showConvertDialog = true), variant: "brand", appearance: "accent" }, t('Lcz_ConvertToInvoice', { fallback: 'Convert to Invoice' }))), this.request?.url && (h("ir-custom-button", { key: 'a0f6a55c1d8092a246498187d6a6887d034afd08', size: "m", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: '1fd6657a8709ba2c6c893790ad63a72681a96054', name: "download", style: { fontSize: '1.2rem' }, label: t('Lcz_DownloadPdfTooltip', { fallback: 'Download PDF' }) })))), this.renderPreview()), h("ir-fd-confirm-dialog", { key: 'ba6a0e299b0db38a9a730e135cdf0b853560a8c6', open: this.showConvertDialog, action: "convert-to-invoice", docNumber: this.request?.documentNumber ?? t('Lcz_ThisDocumentFallback', { fallback: 'this document' }), isConfirming: this.isConverting, onConfirmed: () => this.handleConvertConfirm(), onCancelled: () => (this.showConvertDialog = false) })));
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
