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
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: '58bb4e691400b85d53eacfe33190d6a272a0cfad', class: "" }, h("span", { key: 'bbdcf2425f58e6b93037d0bad4abf907ea6e8d6a', class: "font-medium" }, this.booking.property.name), h("span", { key: 'b0c9a1ba21fa92b9ba0e28c5e538d81e8e4efc05', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: 'cb51f6e704b28834c3c1e10d07aee3b86491f056', class: "flex items-center justify-between text-base" }, h("h3", { key: '9251e88cb52533dc89dff48dd2be31048035d538', class: " font-semibold leading-none tracking-tight" }, localizedWords.entries.Lcz_BookingReference, ": ", this.booking.booking_nbr), h("p", { key: 'e944bb4792876ea3ee1f74829fc5648105982a68', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: '0d22123ae928f6aafc61678a62d2dc1f037f4891' }, h("span", { key: '9d3ea38eeffaa6074fdc5fcc1b42615a6508b6e0', class: "font-medium" }, localizedWords.entries.Lcz_BookedOn, ": "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy', { locale: localization_store.selectedLocale })), h("p", { key: '92533832fcd9a13655d4631d94969820544cb366' }, h("span", { key: '7d433e11bfae6f73f4f22a34bf54198abcaa926d', class: "font-medium" }, localizedWords.entries.Lcz_CheckIn, ": "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy', { locale: localization_store.selectedLocale })), h("p", { key: '122f7bb02c7228eb6bafe8eb69b22052ef408125' }, h("span", { key: '712261d19a253587816205a591a7b476ebfd4927', class: "font-medium lowercase" }, localizedWords.entries.Lcz_Duration, ": "), this.totalNights, " ", this.totalNights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("p", { key: '00e327de00aa99adbc12c305522c01e86de6dfed', class: "flex items-center" }, h("ir-badge", { key: 'ccfa133a72a770e5fec814cb36723565fba2a6fe', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: '51f1934fe7678996dfa31fdb69d5aa75279838eb', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '8b3990fdd0e63856f24e707e9cd41a10b1e84642', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: '9d1504a9c4b49c0478dc8bd216a15fa5ec10c26c', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: '1dd2b9b709dbbb8d6056424513e818e52e93a112', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
