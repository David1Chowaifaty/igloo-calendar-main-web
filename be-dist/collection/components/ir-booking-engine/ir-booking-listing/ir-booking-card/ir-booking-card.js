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
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, h("div", { key: '7a4c5fee7d95963a97be01c8382f9e36fab399fc', class: "flex items-center justify-between text-base" }, h("h3", { key: 'c8cec598b2d06fd1261b8fdb0383f9bcaca22afd', class: " font-semibold leading-none tracking-tight" }, "Booking: #", this.booking.booking_nbr), h("p", { key: '33a0b14fc1ed4182eea66fc1d61df10423b65cf9' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'c230df27c1875ea1a88f6b9705d2b33976f18ab3' }, h("span", { key: '2561fdd13ebc5f636cece00c2f9e944c9f919241', class: "font-medium" }, "Booked on: "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: 'ec5fee49a1d18f612c6797973292fcbddec7f748' }, h("span", { key: 'f2178514b3c5131769637bfb44581beee1893e45', class: "font-medium" }, "Check-in: "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '3c5dcc22f070adebde87ade6cf6cbac9f85c6819' }, h("span", { key: 'a0c63da27d63af5432350e963c86323bcc7dc972', class: "font-medium" }, "Duration: "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: 'a0d3ed1362733f9ba3f88a0fe924c851d9de82dc', class: "flex items-center" }, h("span", { key: '2b8fe4b73b4c72a3dc4bf85944ebbce3f4c2639f', class: "font-medium" }, "Status: "), h("ir-badge", { key: 'a1081fce72e4820c588bc078a26e61a5a24b808d', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), h("div", { key: 'badb22663d8694f9dfc64af34ef7599301546c1e', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment && (h("ir-button", { key: '0850b7872b02f6c79fae4f319c7dc35fc7ba9a3d', class: 'w-full', label: `Pay ${formatAmount(this.booking.financial.due_amount || 0, this.booking.currency.code)} to guarentee`, onButtonClick: () => this.cardOptionClicked.emit('pay') })), cancel && h("ir-button", { key: 'd2c1a20727ed7a6ab313d83e4185ce3f7f2ed785', class: "w-full", variants: "outline", label: "Cancel", onButtonClick: () => this.cardOptionClicked.emit('cancel') }), h("ir-button", { key: '832a87f15fd84224d90b9966c72dcc3aadc2b504', class: "w-full", variants: "outline", label: "View details", onButtonClick: () => this.cardOptionClicked.emit('view') }))));
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
    static get events() {
        return [{
                "method": "cardOptionClicked",
                "name": "cardOptionClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "'cancel' | 'view' | 'pay'",
                    "resolved": "\"cancel\" | \"pay\" | \"view\"",
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
//# sourceMappingURL=ir-booking-card.js.map
