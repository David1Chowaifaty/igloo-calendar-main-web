import { BookingService } from "../../../../services/booking-service/booking.service";
import locales from "../../../../stores/locales.store";
import { h } from "@stencil/core";
export class IrArrivalTimeDialog {
    booking;
    arrivalTime = [];
    isLoading = false;
    open = false;
    selectedArrivalTime = '';
    resetBookingEvt;
    bookingService = new BookingService();
    async openDialog() {
        this.selectedArrivalTime = this.booking?.arrival?.code || '';
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    updateArrivalTime(value) {
        this.selectedArrivalTime = value;
    }
    getArrivalDescription(code) {
        const entry = this.arrivalTime.find(time => time.CODE_NAME === code);
        return entry?.CODE_VALUE_EN || this.booking?.arrival?.description || '';
    }
    async saveArrivalTime() {
        if (!this.selectedArrivalTime || this.selectedArrivalTime === this.booking?.arrival?.code) {
            this.closeDialog();
            return;
        }
        try {
            this.isLoading = true;
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                booking: {
                    ...this.booking,
                    arrival: {
                        code: this.selectedArrivalTime,
                        description: this.getArrivalDescription(this.selectedArrivalTime),
                    },
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms: this.booking.rooms,
                    currency: this.booking.currency,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            const res = await this.bookingService.doReservation(booking);
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
    render() {
        return (h("ir-dialog", { key: '29f249a956445157aa5b5c5896dad1e2da6d8eba', label: "Edit Arrival Time", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-select", { key: 'c78774909940f02554416e7f10c3449cb275c707', size: "small", value: this.selectedArrivalTime, defaultValue: this.selectedArrivalTime, onchange: e => this.updateArrivalTime(e.target.value) }, this.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: time.CODE_NAME === this.selectedArrivalTime }, time.CODE_VALUE_EN)))), h("div", { key: 'c8da575d5c7083190f4be129ca4fab5b2670e5f8', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'ebdee03c775458e1e2ec53432d4874536969eae5', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog() }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '726d0b7546c5f5404f56589824c0c3b18b55e51e', size: "medium", variant: "brand", onClickHandler: () => this.saveArrivalTime(), loading: this.isLoading }, locales.entries.Lcz_Save))));
    }
    static get is() { return "ir-arrival-time-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-arrival-time-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-arrival-time-dialog.css"]
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
            },
            "arrivalTime": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries",
                            "referenceLocation": "IEntries"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "open": {},
            "selectedArrivalTime": {}
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
