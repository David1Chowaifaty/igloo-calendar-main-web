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
        return (h(Host, { key: '518f1cd7591e31bdf4b8707760a32d511c5edf5d' }, h("div", { key: '0790901c4af08b10def42f28d264ac20f5777236', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: '54dccfa3b6389c0bcca8f8714e17c99eab60915d', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: '5290f5203d63ebe76b7014269b0003f131d843b7', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '4f36213d08951b117db9d43d57526e8635094d60', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '979edd0acfe4a356716f2e10940582f71f9d64d5', class: "flex w-full flex-1 items-center " }, h("div", { key: 'e23430efaf8a9b20fffb6d8d767db63bf744d0d6', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'a1313780df9b50dbf72d64f05f3bb93dac0a893d' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: 'bc035e2f1e0b0da6754f35dd5f8fd3932e82d01d', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '17a6c37a2782934d5f892b0613b5a0fb0384052c' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: 'cda0950b0f724b8c3b961a19a50764d3aa23ad24', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '5a41aeec7e680c15fc9beea3c7a9c577b5b0246f', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '995d8ff585577f99f0382074c9814f6720f67a07' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '53298e4c5cb8805674b53cacf690e34e560e602b', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '399d9fd290336cd83f4b3576bb11ea5bb3b520a5' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: 'fdd199b6549a6b9187a21f899757776b79102799', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '0219b8d7474a5b2fa551bc5d5a67bfe5c2c8b38d', class: 'mt-4  w-full' }, h("ul", { key: '130f195d4b8305d3bc44ea5dc58cfb836e137da7', class: 'w-full space-y-2' }, h("li", { key: '784457a3edcc6a1e754cd4692d988f6046940cfa', class: 'flex w-full items-center justify-between' }, h("span", { key: '6576f07c583369828185fe9a4b1bbff0d4458c57' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '1bfd2f566fc55f6e3f37daf75aacef9cffa2aa4f' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: 'c35b7a6898bea485ede45a999f63b9f73f16c83a', class: 'flex w-full items-center justify-between' }, h("span", { key: '856662e0dfe5d77d6aafe2f02f57cc718057ed32' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: '6c1d306b68dc61b1a3de7511b2a2d83e14669379' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'cf75cc50c1ad07ced0869ece68e0bbddbeb07de0', class: 'flex w-full items-center justify-between' }, h("span", { key: 'b849fe8468119306b83f8da43471c017b5f77c23' }, localizedWords.entries.Lcz_Total), h("span", { key: '2780f100989f9fed71788edb8a6377f2aa1d785d', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { key: 'b272eabd312b03e6e2390f31555a93abdff71abd', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: 'd35038ea459de7d8373eed0a95b9c56b02c5d4c1' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '956d52f57289220b356fb6eee68493129e0f4d00', class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '1fdb903931cd73a801975eabd12d7ad43cefcb97', class: "w-full" }), h("div", { key: '10ffb76cfdc2c8320868d0682de331959e639d41', class: "w-full space-y-1" }, h("div", { key: '0040a07afe92a10f882df55d20a478e660d503aa', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: 'a92e98e26668e5f69c48ed701c01ae1bc0151397', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: '59a76fc8bdb8bb73bf9d2a61e02616a971f82c53', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { key: '8aa04d447ad138dec63316797cb6db7fb7602785', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy)), h("ir-button", { key: '44b4b831bcfcfa587d5b892daae284acef74a345', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
