import { Host, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { FdTypes } from "../../../types/enums";
export class IrVoidDocumentDialog {
    isOpen = false;
    isLoading = false;
    request = null;
    /**
     * Emitted once a document has actually been voided server-side.
     * Consumers listen for this to refresh whatever data they own — e.g. ir-guest-billing
     * refetches its own rows, ir-payment-details forwards it into resetBookingEvt.
     */
    documentVoided;
    toast;
    bookingService = new BookingService();
    async open(request) {
        this.request = request;
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    get isInvoice() {
        return this.request?.documentType === FdTypes.Invoice;
    }
    async voidInvoice(documentNumber) {
        await this.bookingService.voidInvoice({
            invoice_nbr: documentNumber,
            property_id: calendar_data.property.id,
            reason: '',
        });
    }
    async voidReceipt(_documentNumber) {
        await this.bookingService.voidPayment({
            receipt_nbr: _documentNumber,
            booking_nbr: this.request?.bookingNumber,
        });
    }
    async handleConfirm() {
        if (!this.request) {
            return;
        }
        this.isLoading = true;
        try {
            if (this.isInvoice) {
                await this.voidInvoice(this.request.documentNumber);
            }
            else {
                await this.voidReceipt(this.request.documentNumber);
            }
            this.documentVoided.emit(this.request);
            this.isOpen = false;
        }
        catch (error) {
            console.error(error);
            this.toast.emit({
                type: 'error',
                title: 'Error',
                description: 'Failed to void document. Please try again.',
                position: 'top-right',
            });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const documentLabel = this.isInvoice ? 'invoice' : 'receipt';
        const creditDocumentLabel = this.isInvoice ? 'credit note' : 'credit receipt';
        return (h(Host, { key: '3ff2809f213acad0037cb3bfb0a5b7fbbc9c96c4' }, h("ir-dialog", { key: 'd176245598ef5e23847e28df748e602b491f954f', label: "Alert", open: this.isOpen, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
                this.request = null;
            } }, h("p", { key: 'de01c6f95a034e1a822fff874ad11c0e2453ae2e', class: "void-document-dialog__message" }, "Void ", documentLabel, " ", this.request?.documentNumber, " by generating a ", creditDocumentLabel, "?"), h("div", { key: '1da7188784ee96c2f57a868339d80f2b6f7f08e6', slot: "footer", class: "void-document-dialog__footer" }, h("ir-custom-button", { key: '927523f22ca90c21fc55b0279f85584bbd13ba17', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: 'bbc01fd732e2c89f55b402b175fcaa9d951142d9', loading: this.isLoading, onClickHandler: () => this.handleConfirm(), size: "m", variant: "danger" }, "Confirm")))));
    }
    static get is() { return "ir-void-document-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-void-document-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-void-document-dialog.css"]
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "isLoading": {},
            "request": {}
        };
    }
    static get events() {
        return [{
                "method": "documentVoided",
                "name": "documentVoided",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted once a document has actually been voided server-side.\nConsumers listen for this to refresh whatever data they own \u2014 e.g. ir-guest-billing\nrefetches its own rows, ir-payment-details forwards it into resetBookingEvt."
                },
                "complexType": {
                    "original": "VoidDocumentRequest",
                    "resolved": "VoidDocumentRequest",
                    "references": {
                        "VoidDocumentRequest": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-booking-details/ir-void-document-dialog/ir-void-document-dialog.tsx",
                            "id": "src/components/ir-booking-details/ir-void-document-dialog/ir-void-document-dialog.tsx::VoidDocumentRequest"
                        }
                    }
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@/components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast",
                            "referenceLocation": "IToast"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "open": {
                "complexType": {
                    "signature": "(request: VoidDocumentRequest) => Promise<void>",
                    "parameters": [{
                            "name": "request",
                            "type": "VoidDocumentRequest",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "VoidDocumentRequest": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-booking-details/ir-void-document-dialog/ir-void-document-dialog.tsx",
                            "id": "src/components/ir-booking-details/ir-void-document-dialog/ir-void-document-dialog.tsx::VoidDocumentRequest"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "close": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
