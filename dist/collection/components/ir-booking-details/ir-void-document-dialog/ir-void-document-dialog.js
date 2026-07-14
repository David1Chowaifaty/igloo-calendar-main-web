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
        return (h(Host, { key: '57a8af58d2ee45aa7a7c78888c3f004c34a15bf9' }, h("ir-dialog", { key: '03c111ab4119606b50d2ba6880e5b67deaab8797', label: "Alert", open: this.isOpen, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
                this.request = null;
            } }, h("p", { key: 'b8e828fba4d1ab09f693f9b64bf4d57183dd4bce', class: "void-document-dialog__message" }, "Void ", documentLabel, " ", this.request?.documentNumber, " by generating a ", creditDocumentLabel, "?"), h("div", { key: '91ead70a92be49d5bc39d2188005ac49fad4f271', slot: "footer", class: "void-document-dialog__footer" }, h("ir-custom-button", { key: 'b652032e1ac12ec9c3ff6d71e76b43977da7cd0b', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: '1f067244c16164018262cdde4637d9bf54915b09', loading: this.isLoading, onClickHandler: () => this.handleConfirm(), size: "m", variant: "danger" }, "Confirm")))));
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
