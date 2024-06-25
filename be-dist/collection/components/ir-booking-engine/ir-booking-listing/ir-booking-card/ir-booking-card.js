import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { differenceInCalendarDays, format } from "date-fns";
export class IrBookingCard {
    constructor() {
        this.bookingListingAppService = new BookingListingAppService();
        this.booking = undefined;
    }
    componentWillLoad() {
        if (!this.booking) {
            return;
        }
        this.init();
    }
    handleBookingChange(newValue) {
        if (newValue) {
            this.init();
        }
    }
    getBadgeVariant(code) {
        if (code === '001') {
            return 'pending';
        }
        else if (code === '002') {
            return 'success';
        }
        return 'error';
    }
    init() {
        this.totalNights = differenceInCalendarDays(new Date(this.booking.to_date), new Date(this.booking.from_date));
    }
    render() {
        const { cancel, payment } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, h("div", { key: '647b27ccca3e9c189a4e2eb18029d02eaedf2ef6', class: "flex items-center justify-between text-base" }, h("h3", { key: '4b437b519e3aa77706e16248b37963eeecbb63a8', class: " font-semibold leading-none tracking-tight" }, "Booking: #", this.booking.booking_nbr), h("p", { key: 'af478f5a0133ba4622b3e359c972ed7f2961b970' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'a1b71eef2c894344976839f54af9c3efdd64c8a3' }, h("span", { key: '3333d40b12433650af8ee2823e43b97f081b6d19', class: "font-medium" }, "Booked on: "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: '266a42bf3371ee9d38bee818fb2f0a90eb5ef5ca' }, h("span", { key: 'e5b5224efc9ed7934f152b11a8a205a377fdf137', class: "font-medium" }, "Check-in: "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '4bbaf1d37de735da4a2ae7adb7dbd0b7bab1f109' }, h("span", { key: '3cc3a30eba3522bd0aef06208f5f9331343042dc', class: "font-medium" }, "Duration: "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: 'fcb30d911f394c39c2c5b112b6cb4ff12916e1b6', class: "flex items-center" }, h("span", { key: '4cf9a7b92cdbc96a8a6b723e8b2e4ad6559c787b', class: "font-medium" }, "Status: "), h("ir-badge", { key: 'b4883808240f649775fe70475d4e19e4e043c7d0', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (cancel || payment) && (h("div", { key: '62bf751128b0a5cdd22bae759edd6d1e06793d87', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment && h("ir-button", { key: '907d4134d69a6958fb1d0db3d4d1e82ed655d8a6', class: 'w-full', label: `Pay ${formatAmount(this.booking.financial.due_amount || 0, this.booking.currency.code)} to guarentee` }), cancel && h("ir-button", { key: '586578393977866735f1b3100adfb038c1818926', class: "w-full", variants: "outline", label: "Cancel this.Booking" })))));
    }
    static get is() { return "ir-booking-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-card.css"]
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
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-booking-card.js.map
