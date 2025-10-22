import locales from "../../../stores/locales.store";
import { h } from "@stencil/core";
import { BookingService } from "../../../services/booking.service";
import { getPrivateNote } from "../../../utils/booking";
export class IrBookingExtraNote {
    constructor() {
        this.isLoading = false;
        this.note = '';
        this.bookingService = new BookingService();
    }
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
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                booking: this.booking,
                Is_Non_Technical_Change: true,
                extras: prevExtras,
            });
            this.resetBookingEvt.emit(res);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h("form", { key: '88e88f18639d2a532218a899ac1055d3e019f8ef', class: 'sheet-container h-100', onSubmit: e => {
                e.preventDefault();
                this.savePrivateNote();
            } }, h("ir-title", { key: 'bfacc690e8b9f158e503eee0d8516e67a5cf9190', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_PrivateNote, displayContext: "sidebar" }), h("div", { key: '567cd6f6353e8d704c47cd0cc11c8ef1cf6e59bf', class: "sheet-body px-1" }, h("ir-textarea", { key: '518df81b98f4e42fddb45b0d7f4ad196026f0f0f', placeholder: locales.entries.Lcz_PrivateNote_MaxChar, label: "", value: this.note, maxLength: 150, onTextChange: e => this.setNote(e.detail) })), h("div", { key: 'bc1f8ce6a24528ff2ce35b1412323c5fe97b94a0', class: 'sheet-footer' }, h("ir-button", { key: 'ecf9c73ddc4978ba060388cdc83605a5973ee070', onClickHandler: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  mr-sm-1'}`, text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '02fe6aeaf2679c99f7dbd89e7fc3c10b792dd2d2', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center ml-sm-1', isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" }))));
    }
    static get is() { return "ir-booking-extra-note"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-extra-note.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-extra-note.css", "../../../common/sheet.css"]
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
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-extra-note.js.map
