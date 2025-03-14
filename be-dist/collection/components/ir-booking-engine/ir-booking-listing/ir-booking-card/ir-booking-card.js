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
        this.totalNights = moment(this.booking.to_date).diff(moment(this.booking.from_date), 'days');
    }
    render() {
        const { cancel, payment, view } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: 'd6eb9b4525f603a70d8608757005a3790b36bda0', class: "" }, h("span", { key: 'c44ae623555456ea7fa985bd97de5a7145893d17', class: "font-medium" }, this.booking.property.name), h("span", { key: 'c1c9e9475984725c91f024c490210ebe4845120f', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: '8dadef3a4981e576bad3d29a3fcaeb06f1313272', class: "flex items-center justify-between text-base" }, h("h3", { key: 'db7c526695b1b87bc7e5af96ae9b93383ac816f6', class: " font-semibold leading-none tracking-tight" }, localizedWords.entries.Lcz_BookingReference, ": ", this.booking.booking_nbr), h("p", { key: '9fb3565becd251765f206e581c2db56bba2a42e4', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'b8a33af6a72356b5c45ab3b47667cf9949442c3c' }, h("span", { key: '1f50450b010373f1781aa2496aaf521cf02fc337', class: "font-medium" }, localizedWords.entries.Lcz_BookedOn, ": "), moment(this.booking.booked_on.date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("p", { key: '3c632274c007732612f19524b27c1d5057fc5044' }, h("span", { key: 'a4a1fca2b5b13a0eba1f47ebd18b2fe94f758d72', class: "font-medium" }, localizedWords.entries.Lcz_CheckIn, ": "), moment(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')), h("p", { key: '35051f20e36a75bd79201453d4125894d68d2c85' }, h("span", { key: '59a76669def18a73fcc830d24cf43825a34098c3', class: "font-medium lowercase" }, localizedWords.entries.Lcz_Duration, ": "), this.totalNights, " ", this.totalNights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("p", { key: '35a3dbd29a32c4c28211a9271a5cc7adae65893d', class: "flex items-center" }, h("ir-badge", { key: '58b2cbc289561c067c12bc34facaf74e8f3c2367', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: 'f529eb7bb8303c39e1c45f8f926b4769aad00997', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '8527e18f8ccaa2b011015ff7e414ab656921e61d', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: '80ced3445b4b99bc592b889ae2e524697035257d', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: '0fbb9e21f688c4b3ae5d7daf9031ae5cc76d13a6', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
