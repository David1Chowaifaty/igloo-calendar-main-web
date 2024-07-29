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
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: 'cff20ec25430b694425d732e7fb0395d31e471e2', class: "" }, h("span", { key: '53ec947e8250d16f9188d8e41f104f4ee2bc3665', class: "font-medium" }, this.booking.property.name), h("span", { key: '3a9c8f1d5d346967c745f3dbdc222b318bdd18cb', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: 'f46a8724692413a380bfb4c4aad41102297efc59', class: "flex items-center justify-between text-base" }, h("h3", { key: '4dfcd04e5d4e912fab6bde9d2d136f835a3a9743', class: " font-semibold leading-none tracking-tight" }, "Booking reference: ", this.booking.booking_nbr), h("p", { key: 'd9a7bf20af66effef412c17968d054bb42298d25', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: '5555b5bce01e34c875b47ee74d0f34d3397106d0' }, h("span", { key: 'e675b7ce38a5e68af2a0f909572998890ca0cb8f', class: "font-medium" }, "Booked on: "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: 'd42dd3e2318af0e73c7bba8c9c3ced3a86860c5a' }, h("span", { key: 'cb65e7a0fcc3cba793a7f07c97357066f76c0f81', class: "font-medium" }, "Check-in: "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '2a60a3facefa1c5b91d8aa6e8fc8356b51d84344' }, h("span", { key: '39e1dc23f844aedca8625e879672a80d00e57b45', class: "font-medium" }, "Duration: "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: 'a7674f1319449bb05c9d708923ac68e3ffb1955b', class: "flex items-center" }, h("ir-badge", { key: '800a7d2f20b8c9c4a74507fc29ed0cc70ab4f1ea', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: 'ca293689283e04ce877458ba51dd59e0a4e35762', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '7bfbab43467bbd323aca367d6b9f264c75814f15', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: 'ab9ae5ac0c4698a17b4372b1b8e7f31e1ce16f9e', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: '7a49b647769dfd71fecfb368a520a257a5af5b54', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
