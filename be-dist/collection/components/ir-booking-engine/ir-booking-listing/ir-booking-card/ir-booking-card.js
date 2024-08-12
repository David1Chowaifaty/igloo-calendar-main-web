import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import { formatAmount, formatFullLocation } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { differenceInCalendarDays, format } from "date-fns";
export class IrBookingCard {
    constructor() {
        this.bookingListingAppService = new BookingListingAppService();
        this.booking = undefined;
        this.aff = false;
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
        const { cancel, payment, view } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: '8efeb10480cce9c71520a08e0dc89e599e34e10a', class: "" }, h("span", { key: '1846041d649f4a7f3493ccc5d5e114d675625c75', class: "font-medium" }, this.booking.property.name), h("span", { key: 'c6a99705f9a5c74cf056376c59c0c8850fadad96', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: '9e16719b8fa367d090e3d352f27185ee8a348c10', class: "flex items-center justify-between text-base" }, h("h3", { key: '4650d7cacf68183660235cf09e6d6175daa9a755', class: " font-semibold leading-none tracking-tight" }, "Booking reference: ", this.booking.booking_nbr), h("p", { key: '12a5fb9fc04ad9f5c380d75a97af4129c7cea8b4', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'e59731416a0fd41389da03e059df8bc2dcbf51dc' }, h("span", { key: '38e688bc37be2819a6b891c417c7c0c5a23d7467', class: "font-medium" }, "Booked on: "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: '97b7585543714dcab2cae7ea358c27b0be2f4bed' }, h("span", { key: 'ce947e19bb58556d39e2bb37fe847d43f1d4e644', class: "font-medium" }, "Check-in: "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '7b1c2a8cd5c4460c2694b5ef33c6eee2d6f5e785' }, h("span", { key: 'ce4971c76782bc34faef1b1cdb1f2b727a31dede', class: "font-medium" }, "Duration: "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: 'a8c29e56b21204b3d8d041942463870c0a00ac80', class: "flex items-center" }, h("ir-badge", { key: '0f37ea8c5a7b3c5b998a1db1403f765f03bb4d6f', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: 'e4feda42883bbaac7a779e7c782fd87bd46030f8', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: 'cea1f2e56ce387b622e4c77b563adf878f8ebda1', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: '9e8d2f24c1eb0b3188cf3b87d216484abb7d88e9', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: 'dead16d128355d2f41b2d48297859bb89880b5c2', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
            },
            "aff": {
                "type": "boolean",
                "mutable": false,
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
                "attribute": "aff",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "optionClicked",
                "name": "optionClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ tag: string; id: number }",
                    "resolved": "{ tag: string; id: number; }",
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
