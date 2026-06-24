import { Host, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import { FdTypes } from "../../../types/enums";
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
    bookingService = new BookingService();
    async handlePreviewRequest(event) {
        const { documentNumber, fdTypeCode } = event.detail ?? {};
        if (!documentNumber)
            return;
        this.isLoading = true;
        try {
            const { My_Result } = await this.bookingService.printInvoice({
                property_id: this.propertyId,
                invoice_nbr: documentNumber,
                mode: this.printModeFromFdType(fdTypeCode),
            });
            if (My_Result) {
                this.pdfUrl = My_Result;
            }
        }
        catch (err) {
            console.error('[ir-guest-document-preview] printInvoice error:', err);
        }
        finally {
            this.isLoading = false;
        }
    }
    /** Maps a document's fiscal type to the guest-billing print mode. */
    printModeFromFdType(fdTypeCode) {
        if (fdTypeCode === FdTypes.CreditNote || fdTypeCode === FdTypes.CreditReceipt)
            return 'creditnote';
        if (fdTypeCode === FdTypes.Proforma)
            return 'proforma';
        return 'invoice';
    }
    render() {
        return (h(Host, { key: '215a32e1022c162711bd57e4ffc0785fab80b78d' }, h("ir-preview-screen-dialog", { key: '014b95cc97f9a9f33bf07629ca26c2535f4e9e16', open: this.pdfUrl !== null || this.isLoading, label: "Document", action: "print", hideDefaultAction: this.pdfUrl === null, onOpenChanged: e => {
                if (!e.detail) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.pdfUrl = null;
                }
            } }, this.pdfUrl ? (h("ir-pdf-viewer", { class: "guest-document-preview__pdf-viewer", src: this.pdfUrl })) : (h("div", { class: "guest-document-preview__pdf-loader" }, h("ir-spinner", null))))));
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
            "isLoading": {}
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
