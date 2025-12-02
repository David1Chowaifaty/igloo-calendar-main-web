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
        this.initialValue = this.booking?.guest?.id?.toString();
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
    render() {
        return (h(Host, { key: '84cf679ea6ff8fcc71c4ab2f60d4325b6614a1df' }, h("wa-radio-group", { key: '8f212a4d087e7e3087f4b86dc8fd5a924c4aae51', defaultValue: this.initialValue, onchange: e => this.handleRecipientChange(e.target.value), label: "Bill to", orientation: "vertical", name: `${this.booking?.booking_nbr}-bill-to`, value: this.selectedRecipient }, h("wa-radio", { key: 'beb22ca58a8880a4a2b39cd29e651c6ba7202ed0', appearance: "button", value: this.booking?.guest?.id?.toString() }, this.booking?.guest.first_name, " ", this.booking.guest.last_name), this.rooms.map((r, idx) => (h("wa-radio", { appearance: "button", class: "billing-recipient__room", value: r.guest.id?.toString() ?? `guest_${idx}`, key: r.guest?.id ?? `guest_${idx}` }, h("span", { class: "billing-recipient__guest-name" }, r.guest.first_name, " ", r.guest.last_name)))), h("wa-radio", { key: '8e92b38a18cc5c77fb3723877be356984287319c', appearance: "button", value: "company" }, this.booking.company_name ? this.booking.company_name : 'Company')), h("ir-booking-company-form", { key: 'a2d98ddc5384f3534e01fc9f52b2ba80818f3069', onCompanyFormClosed: () => {
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
            "$": ["ir-booking-billing-recipient.css", "../../global/app.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-billing-recipient.css", "../../global/app.css"]
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
}
//# sourceMappingURL=ir-booking-billing-recipient.js.map
