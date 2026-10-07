import { Host, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { FdTypes } from "../../../types/enums";
import { t } from "../../../services/locale/t";
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
                title: t('Lcz_Error', { fallback: 'Error' }),
                description: t('Lcz_FailedToVoidDocument', { fallback: 'Failed to void document. Please try again.' }),
                position: 'top-right',
            });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const documentLabel = this.isInvoice ? t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }) : t('Lcz_DocumentTypeReceipt', { fallback: 'Receipt' });
        const creditDocumentLabel = this.isInvoice ? t('Lcz_DocumentTypeCreditNote', { fallback: 'Credit Note' }) : t('Lcz_CreditReceipt', { fallback: 'Credit Receipt' });
        return (h(Host, { key: '604c4a650342412b5e2b82decb543dee5fb4a7c5' }, h("ir-dialog", { key: '24e50051f73482e94dc3fedbc56f27f88ed65963', label: t('Lcz_Alert', { fallback: 'Alert' }), open: this.isOpen, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
                this.request = null;
            } }, h("p", { key: '524301d1ee0fc2c46303e8ab50fbc6f8e9e311b5', class: "void-document-dialog__message" }, t('Lcz_VoidDocumentConfirm', { fallback: 'Void %1 %2 by generating a %3?', params: [documentLabel, this.request?.documentNumber ?? '', creditDocumentLabel] })), h("div", { key: '069179555ffc877e9c21a8c27094e80f5e7ea822', slot: "footer", class: "void-document-dialog__footer" }, h("ir-custom-button", { key: '1d55e06c96a1b01d801f1d7156ac05a79e2ccbf2', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral", disabled: this.isLoading }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ad3c73300c78d65af457f6ecb3789f739938c1f0', loading: this.isLoading, onClickHandler: () => this.handleConfirm(), size: "m", variant: "danger" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
