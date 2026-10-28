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
        return (h("ir-dialog", { key: 'bcf957b93a184b9b26124a0d705640c9d27d2906', label: t('Lcz_PrivateNote', { fallback: 'Private Note' }), open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-textarea", { key: '2cfba251b3781572428f1d0956168e311b15c763', size: "s", placeholder: t('Lcz_PrivateNote_MaxChar'), defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), h("div", { key: 'c9a436ba6bf88374f28433d625f1e850a992311e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '51a8a5858cab3ffceee546c0c0067e9d107fcbd9', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '3b76f40fb5cfba52969c88ff65abbb862d697588', size: "m", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, t('Lcz_Save', { fallback: 'Save' })))));
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
