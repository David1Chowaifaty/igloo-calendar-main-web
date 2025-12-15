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
        const normalize = (value) => value?.toLocaleLowerCase().trim() || '';
        const rooms = [];
        const seenNames = new Set();
        const mainGuest = this.booking?.guest;
        if (mainGuest) {
            const mainKey = `${normalize(mainGuest.first_name)}|${normalize(mainGuest.last_name)}`;
            seenNames.add(mainKey);
        }
        for (const room of this.booking.rooms || []) {
            const guest = room?.guest;
            if (!guest)
                continue;
            const key = `${normalize(guest.first_name)}|${normalize(guest.last_name)}`;
            // Skip exact duplicate first + last names
            if (seenNames.has(key))
                continue;
            seenNames.add(key);
            rooms.push(room);
        }
        this.rooms = rooms;
    }
    render() {
        return (h(Host, { key: '22e22a653e668b371fa7d18921f386bb4be5fb53' }, h("wa-radio-group", { key: '8b96afd0d6c791e211603050cb70bc7c520f6479', defaultValue: this.initialValue, onchange: e => this.handleRecipientChange(e.target.value), label: "Bill to", orientation: "vertical", name: `${this.booking?.booking_nbr}-bill-to`, value: this.selectedRecipient, size: "small" }, h("wa-radio", { key: 'ec307fb7f1df06568efeb028427d172a2cea8173', appearance: "button", value: 'guest' }, this.booking?.guest.first_name, " ", this.booking.guest.last_name), this.rooms.map((r, idx) => (h("wa-radio", { appearance: "button", class: "billing-recipient__room", value: `room__${r.guest.first_name} ${r.guest.last_name}`, key: r.guest?.id ?? `guest_${idx}` }, h("span", { class: "billing-recipient__guest-name" }, r.guest.first_name, " ", r.guest.last_name)))), h("wa-radio", { key: '111e2f9358bc975b68a1f61a5582686689bdc3b5', appearance: "button", value: "company" }, this.booking.company_name ? this.booking.company_name : 'Use company name')), h("ir-booking-company-dialog", { key: '181abe6d5d93e34ac7e41527174880699cc86e2e', onCompanyFormClosed: () => {
                if (this.selectedRecipient === 'company' && !this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
                }
            }, onResetBookingEvt: e => {
                this.booking = { ...e.detail };
                if (!this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
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
}
//# sourceMappingURL=ir-booking-billing-recipient.js.map
