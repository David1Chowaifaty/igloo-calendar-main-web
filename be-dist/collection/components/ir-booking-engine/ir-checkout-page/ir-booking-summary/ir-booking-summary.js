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
        return (h(Host, { key: '72f274ca6dc09e41724810fe50d3e43b8378eb8a' }, h("div", { key: '5961730ef93610ad900ec48856c9c89459e8ccf4', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '5124726c9005c4e588bed319a58aca121e382c35', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: 'd18dd5a29b5fabacac088777c1d0424d1f477fe7', class: "flex w-full flex-1 items-center " }, h("div", { key: 'da5078bcd9e6d0dce0ee95e073cdc8ca3e18c423', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '2004fb5625ee65ef7ffd9d34c186fb9b27c68b4e' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: '62cc1bb5a97d3ce60c3a06bfb436499574c7b74d', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '268ebfa429b2cffc388807b642f0be4b054f9979' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: 'bd1585df8aba84aa048c25abd94b2357d1eb6bac', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '7c7a01227e0d240231a3fc8edf5aa4933ab37d6a', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'b1cc920aa72ec5a74cba029c3a6872af939dca0a' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: 'b8929cf490c7a777ff587c54665ca9cf7a63d48e', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '5dc9f0dac2ff783333b11a225b488efa7d729024' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '6ea7b2377cddc37f72d39265ddfd24da5140bd05', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: 'c2d40e932b4c612bb3a5b6fdb2b1111df8e9a9c2', class: 'mt-4  w-full' }, h("ul", { key: '3eeb1b0fc31a07a432d1de27751edba605439bf7', class: 'w-full space-y-2' }, h("li", { key: 'd760f4c751c40fa2e585963fd8a76dc9baa9f930', class: 'flex w-full items-center justify-between' }, h("span", { key: '413475a2caa4d47f1ba0395658e9403d44350d28' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '6f862b73c50cc10bb01b8ff0210f55d5b4a8d4f2' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, localizedWords.entries.Lcz_PickupFee), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'a6c935e75afa7f6d7cfbb8524e95d0777d6c7cc9', class: 'flex w-full items-center justify-between' }, h("span", { key: '25b9635ee16fc34a3378440669f180a9436a9ea5' }, localizedWords.entries.Lcz_Total), h("span", { key: '64f47c38f31ed6e8c4e4c921e08554766c8cb09a', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, localizedWords.entries.Lcz_PayNow), h("span", { class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '903edeeb210fea7da25eb93629db2fa10b1bced7', class: "w-full" }), h("div", { key: '624cd656b90216326ee13a441fbfa929cb1a884e', class: "w-full space-y-1" }, h("div", { key: '594d192f5ab0700b81c278cd598cae6b71916bbf', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: 'b6625f30cf2e5d00cdd169389d8d2922b6c660b0', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: 'b1dbb8677ecc3cb0b994b8c6ea3af92264b576da', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy)), h("ir-button", { key: 'be61cf005e275d9b15b00970e88dddf0d07c7311', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
