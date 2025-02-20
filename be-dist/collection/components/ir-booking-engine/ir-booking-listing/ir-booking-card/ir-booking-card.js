import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount, formatFullLocation } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { differenceInCalendarDays, format } from "date-fns";
import localization_store from "../../../../stores/app.store";
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
        this.totalNights = differenceInCalendarDays(new Date(this.booking.to_date), new Date(this.booking.from_date));
    }
    render() {
        const { cancel, payment, view } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: '12c1fe78970dd83396ec01dbcc9953e67bd152d4', class: "" }, h("span", { key: '652709b0f5bc643149a73b01d93d6821aa61f513', class: "font-medium" }, this.booking.property.name), h("span", { key: '29a4e2cba5cae0780b3cacbb03b2d6469556cff3', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: 'e91c5691342f3b10021adb99a138e8e906eee28e', class: "flex items-center justify-between text-base" }, h("h3", { key: '200704f2b0374f8a5dbab968835c50d8badab2c5', class: " font-semibold leading-none tracking-tight" }, localizedWords.entries.Lcz_BookingReference, ": ", this.booking.booking_nbr), h("p", { key: '6e261fec693540eaacf2e5b89c643cbeec636183', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'feb07ab29da2b89413b5f66c50d7c9a115ae1d65' }, h("span", { key: '25c7f17cd41f517db38395bca1fab55bff870f62', class: "font-medium" }, localizedWords.entries.Lcz_BookedOn, ": "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy', { locale: localization_store.selectedLocale })), h("p", { key: '64ac5e449acfca8a2a164a6a0b61e0c79b8041fc' }, h("span", { key: '7b2c84402b54720485b1cedad8132709b27fbe59', class: "font-medium" }, localizedWords.entries.Lcz_CheckIn, ": "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy', { locale: localization_store.selectedLocale })), h("p", { key: 'c8ce6529da4857cabc7b09cfb2b98a3f817a8cc0' }, h("span", { key: '8843b18c6aded93500e2ad02f6d27bccdfb4eaa9', class: "font-medium lowercase" }, localizedWords.entries.Lcz_Duration, ": "), this.totalNights, " ", this.totalNights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("p", { key: 'cc2dad231c20f32ef00e4a58e8ed58d037368225', class: "flex items-center" }, h("ir-badge", { key: '9a08ff76c3463dbff6d97820c56ba859ac4d1358', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: '3fb7946e526a6fc167f3515cf0d6fd66b421342f', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '84455385b17a6edd153dea4e3a5ba7a00f4100ca', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: '9178d6a34fe32efd3cad4d970d954d3656454dce', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: '153f95adff16a5fe7662743664798bc3dc0083d4', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
