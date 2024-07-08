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
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, !this.aff && (h("div", { key: '2fa399d157859e216f2f48b0c65daba5343b186a', class: "" }, h("span", { key: '7c778b42c2edc0c87558e5ba3e06e9fdee6707d8', class: "font-medium" }, this.booking.property.name), h("span", { key: '92834df5dd294107774f66d8680c3139fc5a8f9c', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: 'aeb050420e491d790989f201bfffe5edd8825c29', class: "flex items-center justify-between text-base" }, h("h3", { key: '95249a2a06bf206da3f743685e73469e0b8ee39b', class: " font-semibold leading-none tracking-tight" }, "Booking reference: ", this.booking.booking_nbr), h("p", { key: '1269e0f0169a9d47cf8f461a2cd85ff14ced12e2', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: '9f76bd58b141a908e9829a39caac301d62804a88' }, h("span", { key: 'b2dc8a992d6824107ae8621b54dc697da2251770', class: "font-medium" }, "Booked on: "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: 'a3bb43b7bcc92379c8a8ad06af3abeb26f33ae35' }, h("span", { key: '144fc1618cdb865eb25f18289462b4e8b527ea91', class: "font-medium" }, "Check-in: "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '81e6f103eecf0adb3a7e6d081f29b2b52987902a' }, h("span", { key: '900d385e2b5087b2b0a4809370998bac381efe7f', class: "font-medium" }, "Duration: "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: 'e04e693e882513f6e3ed335ad57683475fefb3b5', class: "flex items-center" }, h("ir-badge", { key: '01a8bedf65c01b1235135d7c5be0275cb921d706', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: 'a9a5788003f1d93793b7c14e79b595763d626c1a', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '4781faadaea2a21e031b00e8cab535a3c2c657d9', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: 'eb7f03254898058113fd2b75645b0b3a2cbab175', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: 'ac8bdbbf545fb68b35aa7b3480570b1ea009fb09', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
