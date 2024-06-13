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
        return (h(Host, { key: '034a43c1447cee0aa7d6dbcf7177fbf5769ff42e' }, h("div", { key: 'fa363d0c4920d15a03b3b8b2ddaa89008e4f4328', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '0d00f7813a901fbd9d2dfb91711a675368802647', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '13219f5a601b1e8b88ba184ad8f256fb2d66f9a0', class: "flex w-full flex-1 items-center " }, h("div", { key: 'ce9d1f507eaf9b8c535fefbe5a3da43e19ad1af7', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'fe500dbd17307ef8df2a2502b95e1b6066f339df' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: 'ee4118069f75fe23f118eda68ff90172674a3aca', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'aaa22ecb0ed87c9541d3c2576a41ed2c61293ffd' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '5cdf896f53b995711ff4e2af84deacc2c8ccfb5f', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: 'c9e122d0a0921eb792c092bb80d97eacfa3cbce8', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '3fe89ce75843dcc88ae4ccac524467b19ed23a02' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '0371e7286ceddd2061c36c5e5df29c046491fd98', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'd72dcd3142ebadff729a5816a7a0ac034eab3aa4' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: 'b1921bd8914799650c3422cd37b3b63b8c388646', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '9a290ad7f6f67c308296f3f9f164b3f23d7ef54c', class: 'mt-4  w-full' }, h("ul", { key: 'a9f900d6240810e3a9796a75d3e4a09be09a5525', class: 'w-full space-y-2' }, h("li", { key: '0f3438dd41e6563badfa453484134c57bacaaaa1', class: 'flex w-full items-center justify-between' }, h("span", { key: '2128f4b612bcd63c7d45fe9a9644c1a5c6d977be' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: 'ee2f6bff93402904879f8b21d89d5fc8a8ef4fee' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, localizedWords.entries.Lcz_PickupFee), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '7d8c2a17d3946a3e82b8684248e59a6f4299b99f', class: 'flex w-full items-center justify-between' }, h("span", { key: '4048888e8472c4d733deb962770aae3026fd1643' }, localizedWords.entries.Lcz_Total), h("span", { key: '2dd7fa5125759d59c1d9ef20f5deb09d2bfc59be', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, localizedWords.entries.Lcz_PayNow), h("span", { class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: 'c62ba0a178995bbcf3b6121baa439ac7f955cc7c', class: "w-full" }), h("div", { key: 'c5d8ada79ae43316315949fcb45ca4a0e276faf2', class: "w-full space-y-1" }, h("div", { key: '05a7283a47118308de7d51b6218774a65e7a4f7c', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '0e9e586b9de5675d13d0559134b33e5c98ffe0d6', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: '9a2435cd79b21dac311682483e82708cef15af5b', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy)), h("ir-button", { key: '60e1d0f5f77c8c15b72f284b226ab8411701a6dd', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
