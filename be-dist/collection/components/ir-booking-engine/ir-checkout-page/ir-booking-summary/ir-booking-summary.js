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
        return (h(Host, { key: 'ec066de0c418c017f3d52092d95ff635e14d86bc' }, h("div", { key: '4e5179de5c404b5afe83263d1816cc064896f83f', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: '8be5b49fba3fcd0933df2afe77ecc0268cc80db5', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: '8b85cbbaf8c3bbfa112e768df1472bb84e07cffe', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '09f3af3f2a1f8d3c0ec38ceb82959e90a09e713d', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: 'f5b79ad558532d481b2fbd94904b61c74d0df7e6', class: "flex w-full flex-1 items-center " }, h("div", { key: '93f5da44cc8f27f49e12e8d364ef6e172e090008', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'ea89aa966667ef70588b05a78974649468d96e9f' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: 'dc9135aec0c6559b84a7a8965ee2783a8d5e3ba4', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '07aadd3fbd0e7ac92e5a15023b261a5b2f217ba3' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '9718caef85df93fdfbb551307c48d4580489b7f7', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '1115a8fdf415d68f077c6543f8157de5240fb883', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '7806380237756fe8da9408d9cb61711aba9aacdb' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: 'e04b8de9086134dce95523440278d87c5fa89bee', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'd45b7ba6d8ab7b0a2b3b026c6728df762cd68a8c' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '1f0c449e6b4115b5711d16109c17e1ce409ed015', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '5ac78b4eb46b95609d83af0d3964da90d340033c', class: 'mt-4  w-full' }, h("ul", { key: 'effbb149c33bf546b19dc40696d45c191361a764', class: 'w-full space-y-2' }, h("li", { key: '9638aba1c1b773b111c4c7ac4b309845c55fef07', class: 'flex w-full items-center justify-between' }, h("span", { key: 'c4cdc775a7a93afc99c1f2e56c7ed38550f6ece0' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '7dc842e3decde4fc7c27d3f1e4246e2745b1154b' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: 'b268639878945fab7c43d0628daef77cf9ab8d95', class: 'flex w-full items-center justify-between' }, h("span", { key: 'e8facf398d8b660f64c5472df2d68ac3688971af' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: '8a0fa74c9e40cb68709da3b69b872b30c8777e52' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'b0396bcdf26a2e2ab28d67d8d1ea0dc929dfd35f', class: 'flex w-full items-center justify-between' }, h("span", { key: '46c42519154ecb0cfdfc27ddf030ed56d31213a6' }, localizedWords.entries.Lcz_Total), h("span", { key: '6f892cf0dd34d9db4767f04608cef89caad5f0e2', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { key: 'fd5957b38e16c5322c9218c4c84bcaa56ff01e43', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: '73dc0534eda26a001dcbfbeefc58925c13b66dcf' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '3a6b6107023b097e3d598415a4eae8b9cc0f6969', class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: 'b25a26d493311695927d9a18c25e6747c07c1369', class: "w-full" }), h("div", { key: '8f85defe21f5108d2e722421777f47184d86df67', class: "w-full space-y-1" }, h("div", { key: '23f592cbc502fe44a3336757b00189b0fbddf41c', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: 'aaa87347b235126e5ac1af46c6829b2c2975b59d', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: '9c97d217939bebf458433d3e0b2d2ea13f880097', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { key: '7505bc70c42ecec31cfdff6ad341329869f6fac6', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy)), h("ir-button", { key: '58e969ec6dc7742721814a39dd25bb3a69f7bc7c', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
                    "resolved": "\"booking\" | \"booking-listing\" | \"checkout\" | \"invoice\"",
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
