import { h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import { getPrivateNote } from "../../../utils/booking";
import { t } from "../../../services/locale/t";
export class IrBookingExtraNote {
    open;
    booking;
    isLoading = false;
    note = '';
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        if (this.booking.extras) {
            this.setNote(getPrivateNote(this.booking.extras));
        }
    }
    setNote(value) {
        this.note = value;
    }
    async savePrivateNote() {
        try {
            this.isLoading = true;
            let prevExtras = this.booking.extras || [];
            const newExtraObj = { key: 'private_note', value: this.note };
            if (prevExtras.length === 0) {
                prevExtras.push(newExtraObj);
            }
            else {
                const oldPrivateNoteIndex = prevExtras.findIndex(e => e.key === 'private_note');
                if (oldPrivateNoteIndex === -1) {
                    prevExtras.push(newExtraObj);
                }
                else {
                    prevExtras[oldPrivateNoteIndex] = newExtraObj;
                }
            }
            const res = await this.bookingService.doReservation({
                assign_units: true,
                is_pms: true,
                agent: this.booking.agent,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                booking: this.booking,
                Is_Non_Technical_Change: true,
                extras: prevExtras,
            });
            this.resetBookingEvt.emit(res);
            this.closeDialog();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async openDialog() {
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    render() {
        return (h("ir-dialog", { key: 'c557b82c84709e8390324dac2179ef08d7dddc74', label: t('Lcz_PrivateNote', { fallback: 'Private Note' }), open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-textarea", { key: 'e399072b2ac7dcb2a53be600749a0a9fe8399e28', size: "s", placeholder: t('Lcz_PrivateNote_MaxChar'), defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), h("div", { key: 'f90aea3aaf82820b0679ee71de669468e8b173ff', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'efebc91a570ea1f96ae8dc9a0b777ec22cf569b1', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '6ac37777e68eb96259c2f988a02a902faa464981', size: "m", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-booking-extra-note"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-extra-note.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-extra-note.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "attribute": "open"
            },
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
            "isLoading": {},
            "note": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
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
                    "original": "Booking | null",
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
