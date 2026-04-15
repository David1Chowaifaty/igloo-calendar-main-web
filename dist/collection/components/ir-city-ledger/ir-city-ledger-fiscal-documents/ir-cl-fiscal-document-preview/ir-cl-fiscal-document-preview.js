import { Host, h } from "@stencil/core";
import { FD_TYPES } from "../../../../services/city-ledger";
export class IrClFiscalDocumentPreview {
    ticket;
    propertyId;
    request = null;
    handlePreviewRequest(event) {
        this.request = { ...event.detail };
        if (event.detail.autoPrint) {
            window.print();
        }
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
        return (h(Host, { key: '6cec4e3747f3086d86fea7e9f97a5fdfbbb144c3' }, h("ir-preview-screen-dialog", { key: '42bcfd54b496893da7fe274fbdac6766c8020e7d', open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, this.renderPreview())));
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
            "request": {}
        };
    }
    static get listeners() {
        return [{
                "name": "clFiscalDocumentPreview",
                "method": "handlePreviewRequest",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-cl-fiscal-document-preview.js.map
