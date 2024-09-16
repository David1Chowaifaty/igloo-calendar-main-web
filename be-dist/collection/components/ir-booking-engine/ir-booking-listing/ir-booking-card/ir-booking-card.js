import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount, formatFullLocation } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { differenceInCalendarDays, format } from "date-fns";
import localization_store from "../../../../stores/app.store";
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
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: '36784776db7c0b20b9fc52b34d55ba43ade7fb47', class: "" }, h("span", { key: '36243769b6e01a748f80194334779810db7d333f', class: "font-medium" }, this.booking.property.name), h("span", { key: '9e26bd33600e9e10c8c3ed9321baf79c1632d992', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: 'af451e12779288a6e10e36f6b7b9e06942c4147a', class: "flex items-center justify-between text-base" }, h("h3", { key: '0cdc4402f48bff51c7dfebcc1c22d69108757f97', class: " font-semibold leading-none tracking-tight" }, localizedWords.entries.Lcz_BookingReference, ": ", this.booking.booking_nbr), h("p", { key: '38583312c589ff6440a37763dd4f59f17f0e8603', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'e38020e3672de22b4d833f0bd8c8594434c3456b' }, h("span", { key: '1c35b334bb97d1ba7b6b4d158f0adb69cabc9c26', class: "font-medium" }, localizedWords.entries.Lcz_BookedOn, ": "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy', { locale: localization_store.selectedLocale })), h("p", { key: '31189980fba155d73497bd9a375092113b49ad4a' }, h("span", { key: '5b7a7e19526ebf990d4c020f33d8cb23e8fe73c3', class: "font-medium" }, localizedWords.entries.Lcz_CheckIn, ": "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy', { locale: localization_store.selectedLocale })), h("p", { key: '8d2c70015cea0ebea55155c38662fd49b60cbe0c' }, h("span", { key: '7b361a75e265a60182be4a4c4e0ada473f818a21', class: "font-medium lowercase" }, localizedWords.entries.Lcz_Duration, ": "), this.totalNights, " ", this.totalNights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("p", { key: 'a538c2ea079808b1ef189e4f21b83306fed308bf', class: "flex items-center" }, h("ir-badge", { key: '20a1048ed56fda3ff5d2bc57aba225d313bbe585', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: '73f0ba2c4a49fdb0613b3e1fae3584684860beaf', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '496d7b519341ff334369a12e8187b12820941820', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: 'e676d029ad374a6641e30fbee8a735fb96d8b29d', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: '50bbbea22ea278abddec48ba56d20fa1a29d5829', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
