import { Host, h } from "@stencil/core";
export class IrBookingBillingRecipient {
    booking;
    selectedRecipient;
    rooms = [];
    recipientChange;
    initialValue;
    bookingCompanyFormRef;
    componentWillLoad() {
        this.initializeDefaultValue();
    }
    handleBookingChange() {
        this.initializeDefaultValue();
    }
    initializeDefaultValue() {
        this.initialValue = 'guest';
        this.selectedRecipient = this.initialValue;
        this.filterRoomGuests();
    }
    handleRecipientChange(value) {
        this.selectedRecipient = value;
        switch (value) {
            case 'company':
                if (!this.booking.company_name) {
                    this.bookingCompanyFormRef.openCompanyForm();
                    return;
                }
                break;
            default:
                break;
        }
        this.recipientChange.emit(this.selectedRecipient);
    }
    filterRoomGuests() {
        const normalize = (str) => {
            return str?.toLocaleLowerCase()?.trim();
        };
        const { guest: mainGuest } = this.booking;
        let _rooms = [];
        const guests = new Set();
        const main_guest = `${normalize(mainGuest.first_name)}_${normalize(mainGuest.last_name)}`;
        guests.add(main_guest);
        for (const room of this.booking.rooms) {
            const _g = `${normalize(room.guest.first_name)}_${normalize(room.guest.last_name)}`;
            if (guests.has(_g)) {
                continue;
            }
            guests.add(_g);
            _rooms.push(room);
        }
        this.rooms = [..._rooms];
    }
    handleBookingRecipient() {
        this.bookingCompanyFormRef?.closeCompanyForm();
    }
    render() {
        return (h(Host, { key: '1f42773342c290a553fdde6d984cc723e03453f4' }, h("wa-radio-group", { key: '1661f0206768b2d7308030f37bb0621bccef3c21', defaultValue: this.initialValue, onchange: e => this.handleRecipientChange(e.target.value), label: "Bill to", orientation: "vertical", name: `${this.booking?.booking_nbr}-bill-to`, value: this.selectedRecipient, size: "small" }, h("wa-radio", { key: 'a73d5bc881cc322d8297745f86769abacc3cfc90', appearance: "button", value: 'guest' }, this.booking?.guest.first_name, " ", this.booking.guest.last_name), this.rooms.map((r, idx) => (h("wa-radio", { appearance: "button", class: "billing-recipient__room", value: `room__${r.guest.first_name} ${r.guest.last_name}`, key: r.guest?.id ?? `guest_${idx}` }, h("span", { class: "billing-recipient__guest-name" }, r.guest.first_name, " ", r.guest.last_name)))), h("wa-radio", { key: '89e455141e6bc7e0884d3d5f61109fef8c63d469', appearance: "button", value: "company" }, this.booking.company_name ? this.booking.company_name : 'Company')), h("ir-booking-company-dialog", { key: '57c9f3c81d7095f17a9c5ef81d9352965d5a3e28', onCompanyFormClosed: () => {
                if (this.selectedRecipient === 'company' && !this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
            }, onResetBookingEvt: e => {
                this.booking = { ...e.detail };
                if (!this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
            }, booking: this.booking, ref: el => (this.bookingCompanyFormRef = el) })));
    }
    static get is() { return "ir-booking-billing-recipient"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-billing-recipient.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-billing-recipient.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": true,
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
            "selectedRecipient": {},
            "rooms": {}
        };
    }
    static get events() {
        return [{
                "method": "recipientChange",
                "name": "recipientChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "resetBookingEvt",
                "method": "handleBookingRecipient",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-billing-recipient.js.map
