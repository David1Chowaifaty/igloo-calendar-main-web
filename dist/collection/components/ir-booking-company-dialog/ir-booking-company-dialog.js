import { h } from "@stencil/core";
import { v4 } from "uuid";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { t } from "../../services/locale/t";
export class IrBookingCompanyDialog {
    booking;
    open;
    companyFormClosed;
    resetBookingEvt;
    async openCompanyForm() {
        this.open = true;
    }
    async closeCompanyForm() {
        this.open = false;
        this.companyFormClosed.emit();
    }
    render() {
        const formId = `${this.booking.booking_nbr}-${v4()}`;
        return (h("ir-dialog", { key: '4220e2d314bc5c4e1b57c55ed447f0854954335c', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: t('Lcz_Company', { fallback: 'Company' }), id: "dialog-overview" }, this.open && (h("ir-booking-company-form", { key: 'c422727f0bce260d33a0665a9958d319ee5d8765', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), h("div", { key: 'd82cf4c9aa93f99678e67309e5b3efdab28d344a', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '58aff2b1124f9bb002381ae9efd8eca87e0597c0', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'bf5c786f8c173d8eae37fec553b78e7a989662c6', type: "submit", form: formId, loading: isRequestPending('/DoReservation'), size: "m", variant: "brand" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-booking-company-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-company-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-company-dialog.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "open": {}
        };
    }
    static get events() {
        return [{
                "method": "companyFormClosed",
                "name": "companyFormClosed",
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
            }, {
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "openCompanyForm": {
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
            },
            "closeCompanyForm": {
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
