import { h } from "@stencil/core";
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
        return (h("ir-dialog", { key: '56bb284908a2191b4f5120af0507fca4cba0b1ca', label: "Change Booking Source", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (h("ir-booking-source-editor-form", { key: 'afc3c482318631660851b68c926fc6d1425cf46c', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '28e87d3e950c05606856cae2db202de2b3fc558f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '80e4dd769458e2249bb1eb5a52cc02f04ccce0b6', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { key: '7d82498510acb3ff37ac2aba3bd7d193f024d736', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading }, "Save"))));
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
                            "id": "src/models/booking.dto.ts::Booking"
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
//# sourceMappingURL=ir-booking-source-editor-dialog.js.map
