import { Host, h } from "@stencil/core";
import { FdTypes } from "../../../../types/enums";
import { CityLedgerService } from "../../../../services/city-ledger/index";
export class IrClFiscalDocumentPreview {
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
        return (h(Host, { key: 'd4d66f02222c6a28cd5ecc741577cf40ba094e5d' }, h("ir-preview-screen-dialog", { key: '8467d618b8ed09a4f5153db93b4cd59cd0c30eec', open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, this.request?.fdTypeCode === FdTypes.Draft && (h("ir-custom-button", { key: 'bed4fd4f34d4983105546ff49d87fcd2d668cb71', onClickHandler: () => (this.showConvertDialog = true), variant: "brand", appearance: "accent", slot: "header-actions" }, "Convert to invoice")), this.renderPreview()), h("ir-fd-confirm-dialog", { key: '7181ad16f631900155493f21bf4bf74293dc4639', open: this.showConvertDialog, action: "convert-to-invoice", docNumber: this.request?.documentNumber ?? 'this document', isConfirming: this.isConverting, onConfirmed: () => this.handleConvertConfirm(), onCancelled: () => (this.showConvertDialog = false) })));
    }
    static get is() { return "ir-cl-fiscal-document-preview"; }
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
                "attribute": "ticket",
                "reflect": false
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
                "attribute": "property-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "request": {},
            "showConvertDialog": {},
            "isConverting": {}
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
//# sourceMappingURL=ir-cl-fiscal-document-preview.js.map
