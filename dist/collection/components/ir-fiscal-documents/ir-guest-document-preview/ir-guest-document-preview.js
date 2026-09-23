import { Host, h } from "@stencil/core";
import { FdTypes } from "../../../types/enums";
import { PropertyService } from "../../../services/property/index";
import { t } from "../../../services/locale/t";
/**
 * Guest Fiscal Document Preview
 *
 * Self-contained, window-event-driven preview for guest documents — the guest
 * counterpart to `ir-cl-fiscal-document-preview`. It listens for
 * `guestDocumentPreview`, fetches the invoice / credit-note PDF via
 * `BookingService.printInvoice`, and renders it in a preview dialog
 * (same flow as `ir-guest-billing`).
 */
export class IrGuestDocumentPreview {
    ticket;
    propertyId;
    pdfUrl = null;
    isLoading = false;
    request;
    modes = {
        [FdTypes.Invoice]: 'invoice',
        [FdTypes.Receipt]: 'receipt',
        [FdTypes.CreditNote]: 'creditnote',
        [FdTypes.CreditReceipt]: 'creditreceipt',
        [FdTypes.Refund]: 'refund',
        [FdTypes.Proforma]: 'proforma',
    };
    propertyService = new PropertyService();
    async handlePreviewRequest(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.request = event.detail ?? {};
        const { documentNumber, fdTypeCode, bookingNumber, autoDownload, extras } = this.request;
        if (!documentNumber)
            return;
        this.isLoading = true;
        try {
            const url = await this.propertyService.printGuestFolioDoc({
                property_id: this.propertyId,
                booking_nbr: bookingNumber,
                reference: documentNumber,
                mode: this.modes[fdTypeCode],
                extras,
            });
            if (url) {
                this.pdfUrl = url;
                if (autoDownload) {
                    this.handleDownload();
                }
            }
        }
        catch (err) {
            console.error('[ir-guest-document-preview] printInvoice error:', err);
        }
        finally {
            this.isLoading = false;
        }
    }
    resetPreview() {
        this.pdfUrl = null;
    }
    renderBody() {
        if (this.pdfUrl) {
            return h("ir-pdf-viewer", { class: "guest-document-preview__pdf-viewer", src: this.pdfUrl });
        }
        return (h("div", { class: "guest-document-preview__pdf-loader" }, h("ir-spinner", null)));
    }
    getDialogLabel() {
        if (!this.request)
            return t('Lcz_Preview', { fallback: 'Preview' });
        const typeLabel = this.getTypeLabel(this.request.fdTypeCode);
        return this.request.documentNumber ? `${typeLabel} #${this.request.creditNoteDocNumber ?? this.request.documentNumber}` : typeLabel;
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
            case FdTypes.Refund:
                return t('Lcz_Refund', { fallback: 'Refund' });
            case FdTypes.Proforma:
                return t('Lcz_ProformaInvoice', { fallback: 'Proforma Invoice' });
            default:
                return t('Lcz_Document', { fallback: 'Document' });
        }
    }
    async handleDownload() {
        if (!this.pdfUrl)
            return;
        const blob = await fetch(this.pdfUrl).then(r => r.blob());
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = `${this.request.documentNumber}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
    }
    render() {
        const isOpen = this.pdfUrl !== null || this.isLoading;
        return (h(Host, { key: 'cd64301201490fddf27ce7652cc8636e2ef43b5c' }, h("ir-preview-screen-dialog", { key: '72b72f0929083c620d3afad9710f37082d71c0aa', open: isOpen, label: this.getDialogLabel(), action: "print", hideDefaultAction: true, onOpenChanged: e => {
                if (!e.detail) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.resetPreview();
                }
            } }, this.pdfUrl && (h("ir-custom-button", { key: '455902f33d4e6553fb5ab94f5750c93e36fdd1ab', slot: "header-actions", size: "m", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: '5f039b9c16ff771351b8f005515d35232b93768e', name: "download", style: { fontSize: '1.2rem' }, label: t('Lcz_DownloadPdfTooltip', { fallback: 'Download PDF' }) }))), this.renderBody())));
    }
    static get is() { return "ir-guest-document-preview"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-guest-document-preview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-guest-document-preview.css"]
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
            "pdfUrl": {},
            "isLoading": {},
            "request": {}
        };
    }
    static get listeners() {
        return [{
                "name": "guestDocumentPreview",
                "method": "handlePreviewRequest",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
