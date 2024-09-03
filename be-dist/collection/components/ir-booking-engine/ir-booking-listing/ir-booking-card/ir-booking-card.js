import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import localizedWords from "../../../../stores/localization.store";
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
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, this.aff && (h("div", { key: '137cfb225adfc9916a72d299ebee59a7fa9f2a96', class: "" }, h("span", { key: '7358121cb0ebf9ec91a74253e566598ba8dabe9e', class: "font-medium" }, this.booking.property.name), h("span", { key: '9583cc12fb9524d6e79f53ea39588275d2e1e9e3', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: '5af47f1f1bbd8e29acb3f17dfc73f1bea52ef01d', class: "flex items-center justify-between text-base" }, h("h3", { key: '7a459c5c4df8a22d17a1165529c08bf99e042309', class: " font-semibold leading-none tracking-tight" }, localizedWords.entries.Lcz_BookingReference, ": ", this.booking.booking_nbr), h("p", { key: '9db027caa548e1f50ae5356ac32b0b3ab5cb0f87', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'fc1832c48d77ac86f7b865c902e8e8cf7e6f0845' }, h("span", { key: 'bf2d318059ce816b444b4e24ada1db4c4e6ef211', class: "font-medium" }, localizedWords.entries.Lcz_BookedOn, ": "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: 'cb63259f2da7f575646e127e5aff3727d9c3d245' }, h("span", { key: '1da254d0a037a7eb2e4e73171961b116ae230b6a', class: "font-medium" }, localizedWords.entries.Lcz_CheckIn, ": "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '23aa7d58bf36a0843a7af63211d5501aef1223fc' }, h("span", { key: 'ee781f3ee4805338c2b2e0837361c30e79eaa2d7', class: "font-medium" }, localizedWords.entries.Lcz_Duration, ": "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: '0af86c87736d96e1bca148667cc36fdccada5781', class: "flex items-center" }, h("ir-badge", { key: '971840337ea80fed9ab13b507afdec43f80d48fe', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: 'a652739a523d141aa992ba5557a7a26bc6434b1a', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: '44d88283b1e62e1fd5ae9aacc874653ccfa79a7b', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: '554205ba05da52c02a0f35a9a0d4fb57e9129b41', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: 'e4cbf3cd440e8a2928fff5523a5eb476a8fb1393', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
