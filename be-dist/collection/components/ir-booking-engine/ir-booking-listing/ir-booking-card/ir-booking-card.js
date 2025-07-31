import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount, formatFullLocation } from "../../../../utils/utils";
import { h } from "@stencil/core";
import moment from "moment/min/moment-with-locales";
export class IrBookingCard {
    constructor() {
        this.aff = false;
        this.bookingListingAppService = new BookingListingAppService();
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
    getBadgeVariant(booking) {
        const { code } = booking.status;
        if (booking.is_requested_to_cancel || code === '003') {
            return 'error';
        }
        if (code === '001') {
            return 'pending';
        }
        else if (code === '002') {
            return 'success';
        }
        return 'error';
    }
    init() {
        this.totalNights = moment(this.booking.to_date).diff(moment(this.booking.from_date), 'days');
    }
    render() {
        var _a;
        const { cancel, payment, view } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: 'b2c6336bca37acbcc79892972d58027f406295e7', class: "" }, h("span", { key: 'a5c41aab6d7d53fb44d5c909b6ff4cfc1b669155', class: "font-medium" }, this.booking.property.name), h("span", { key: '7faca6160dd46f2670ff00383dc6221451767e04', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: '03de65a46e6e3b0e5c399e0764d41a851f864626', class: "flex items-center justify-between text-base" }, h("h3", { key: '545fc24794d5bb7f8acf21e5f97eae1fdc01ad2f', class: " font-semibold leading-none tracking-tight" }, localizedWords.entries.Lcz_BookingReference, ": ", this.booking.booking_nbr), h("p", { key: '43eb18e05c1ee910e2a2ae7cef353bde578c0e8f', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: '5c194e19689503f07936cd96edcef03907190b3f' }, h("span", { key: '2c884c855c362edce4b61f7459df577114607715', class: "font-medium" }, localizedWords.entries.Lcz_BookedOn, ": "), moment(this.booking.booked_on.date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("p", { key: '59d7e6e677abecdf45b01a8e535811a9f7aecfbb' }, h("span", { key: '47a2dea9f74d7950e867a53cef08dcc48295b72e', class: "font-medium" }, localizedWords.entries.Lcz_CheckIn, ": "), moment(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')), h("p", { key: 'c2809c4575f7d00235fd211995df494488cec917' }, h("span", { key: '3ff5af7d101a0611f770ff094b995e2774ea6699', class: "font-medium lowercase" }, localizedWords.entries.Lcz_Duration, ": "), this.totalNights, " ", this.totalNights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("p", { key: '3ee0ba91b9e7551981e9c199b6333e7efcc87c3b', class: "flex items-center" }, h("ir-badge", { key: '0e76ba624097a71a56e924fa87f1716b7914d42d', backgroundShown: false, label: ((_a = this.booking) === null || _a === void 0 ? void 0 : _a.is_requested_to_cancel) ? localizedWords.entries.Lcz_Cancellation_Requested : this.booking.status.description, variant: this.getBadgeVariant(this.booking) })), (view.show || payment.show || cancel.show) && (h("div", { key: '8f55dfe63452cad6d5e4a8f7a65a87ba91614088', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '189ae75f4eb82053a9e74b1c860ed426b65aceef', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: 'cd2b7245e8110ae93e54e9477a5b7cdd886e3b94', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: 'e20ce6d9b9589bf9cc400570953bcae25716cf5a', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
                },
                "getter": false,
                "setter": false
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
                "getter": false,
                "setter": false,
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
