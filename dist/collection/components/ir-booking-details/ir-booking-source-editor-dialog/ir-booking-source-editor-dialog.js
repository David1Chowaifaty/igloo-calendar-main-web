import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrBookingSourceEditorDialog {
    booking;
    resetBookingEvt;
    open = false;
    isLoading = false;
    async openDialog() {
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    render() {
        return (h("ir-dialog", { key: '273ac480cd4f16611980df26898e418e955d4a71', label: t('Lcz_ChangeBookingSource', { fallback: 'Change Booking Source' }), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (h("ir-booking-source-editor-form", { key: 'd618f828b9b072b0ef17ad5d023fdda70760cf65', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '1f8210a98ca2c758d54d45375b46ba9306c05069', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '3427b3d56cb96ff986dfd339f154ad1a53c805e0', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ac109a0d93ad0fb9bdeeea644202fa12b420c32e', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "m", appearance: "accent", variant: "brand", loading: this.isLoading }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-booking-source-editor-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-source-editor-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-source-editor-dialog.css"]
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
            "open": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
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
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openDialog": {
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
            "closeDialog": {
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
