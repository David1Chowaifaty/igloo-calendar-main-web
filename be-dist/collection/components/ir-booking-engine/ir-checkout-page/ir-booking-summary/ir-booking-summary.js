import app_store from "../../../../stores/app.store";
import booking_store, { calculateTotalCost } from "../../../../stores/booking";
import { checkout_store } from "../../../../stores/checkout.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
import { format } from "date-fns";
export class IrBookingSummary {
    constructor() {
        this.isLoading = false;
        this.error = undefined;
    }
    handleBooking() {
        this.bookingClicked.emit(null);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { prePaymentAmount, totalAmount } = calculateTotalCost();
        return (h(Host, { key: 'b9a3c9c5444f98838f5fc2d002437e83e07fac57' }, h("div", { key: 'feef95b5792e248e9903beee6d8f75de5f3f2dd1', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: 'c297d6a90710cf1878956c51e6586695cd0b97fa', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: 'a4b42bbbd59f2712d21e2a03b46251887582c9b1', class: "flex w-full flex-1 items-center " }, h("div", { key: 'ce231e650458ed901789890d4c21ea371fe4f3fb', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'be570b532feb8fd20cc4de33491a779b4070b3f8' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: '7e9d96043b5846077e97fdf3451cd3ff2bae3f3f', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'd3df5593740b0e9f2d72b166de0ca1c47177eae7' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '10f271021fd5bd0ae4c323c06e2c9381e2f9163e', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '74c4783169edaf9c561502981a98d311b4dfabe2', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '847940af8af2a0648680f8d9382b4986ca287aa5' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '3a2171c60976e667acdfb887b0206786f8db7b7f', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '3ac6f1e688b6aa9e8ee72d87f059a637ca6857aa' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '21e1e053e5b28eeba6c335a1e5db92e974e4f577', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: 'a8f59f58ca36b066ad2e552de4f6e0efef348680', class: 'mt-4  w-full' }, h("ul", { key: 'f60c8e410ca7be301322c3876acfd72a69ccac94', class: 'w-full space-y-2' }, h("li", { key: 'a23af635188afbb66ffbd54b071b44f056ba4113', class: 'flex w-full items-center justify-between' }, h("span", { key: 'a839a0ed8b02e53dbd6b66a8a9500700382c3799' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '89447817629aeb89bfebd470edb0fd55982cac4c' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '29241ac803872d2224ab98dfda704802fccedb30', class: 'flex w-full items-center justify-between' }, h("span", { key: 'ec4312987de2711c7a2d055a70e5261adf79acff' }, "Total"), h("span", { key: '88cac6b2de257204ba0adab602ad6d0aebef7a75', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, "Pay now"), h("span", { class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '26cec060d123d609ee41b6a044037a1bf1e05adb', class: "w-full" }), h("div", { key: 'c8dea88ca278ed39e90304277de3f92e2f499c9a', class: "w-full space-y-1" }, h("div", { key: '77f6dbbc0f7267d79001262b1b8eb5eb44036480', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '1b7321ee80cee14d4820cf0b720a6dc4552742c5', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: 'e40cec1910a1aefd60ceb701b036bb151fa58a60', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { class: "text-sm text-red-500" }, "You must accept the privacy policy first")), h("ir-button", { key: '418f943f4672e039df12f7c492e4d5f1fe58f77f', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
    }
    static get is() { return "ir-booking-summary"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-summary.css"]
        };
    }
    static get properties() {
        return {
            "isLoading": {
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
                "attribute": "is-loading",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
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
                "attribute": "error",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "routing",
                "name": "routing",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "pages",
                    "resolved": "\"booking\" | \"checkout\" | \"invoice\"",
                    "references": {
                        "pages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::pages"
                        }
                    }
                }
            }, {
                "method": "bookingClicked",
                "name": "bookingClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-summary.js.map
