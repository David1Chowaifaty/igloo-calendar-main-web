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
        return (h(Host, { key: 'efd6f8bc419702228e4a0ef07ec01414ddbd70a7' }, h("ir-dialog", { key: '761b595127c5f466f686ed22b269255fda9da7c4', label: t('Lcz_Alert', { fallback: 'Alert' }), open: this.isOpen, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
                this.request = null;
            } }, h("p", { key: 'e52444a09372b8bb70b2e9556d63be6ced34c031', class: "void-document-dialog__message" }, t('Lcz_VoidDocumentConfirm', { fallback: 'Void %1 %2 by generating a %3?', params: [documentLabel, this.request?.documentNumber ?? '', creditDocumentLabel] })), h("div", { key: 'a9319f054fa939a8547f684a766bcc557b7acbf3', slot: "footer", class: "void-document-dialog__footer" }, h("ir-custom-button", { key: '27e47cb14c1fc00d1b1b39ba7022a929eddb8c40', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral", disabled: this.isLoading }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'd3f2d3d264fde0e75c95dd97576832d64356cfe5', loading: this.isLoading, onClickHandler: () => this.handleConfirm(), size: "m", variant: "danger" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
