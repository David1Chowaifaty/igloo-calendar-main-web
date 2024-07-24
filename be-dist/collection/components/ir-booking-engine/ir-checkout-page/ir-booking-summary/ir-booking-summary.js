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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { prePaymentAmount, totalAmount } = calculateTotalCost();
        return (h(Host, { key: 'b71ca7cb6bba045e5d349a14c2831896887f3436' }, h("div", { key: 'a03846326227bcdf621f8c4de9610d5e42985a15', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: '6a70241dacf00630ef5cefc029d27df5f7b2d888', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: '6b5079181fa8f56ad8df446148d24c729fb6fb9a', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: 'e88c6291822257ae446e1dcf49426cbf1be95041', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '6934275730960df6dc06347e8284e01003a31c04', class: "flex w-full flex-1 items-center " }, h("div", { key: '2547244c75a460047dc0d7385568333bcb0bb59e', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'e910c44fb5fa4ccc8a723a0251d5361e78417b65' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: 'd7c3953528cd3daff7b86c4cfd85031541c8971d', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'ed5c4f95edde7e3a6a165343d8569bdf5c257352' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '40ff521fc5e234ac096314087f431bb1c28deb0a', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '4ef5d88fda6ed3b7c5572bfa1b9e22c8972ae451', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '5b11fb16bc74e4492e6c2f7a7ff1421de96e2572' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '9ae12b446eb3d31e6ed80ab261600777fff8cad4', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '93f62f274c5156ec35e7f37f6548d6e609203a59' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: 'ba683170cc344741b271349143040dbca2e104c2', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '8df75437d5a0de3f1cd20abf29cca35c2e4a50ad', class: 'mt-4  w-full' }, h("ul", { key: '6f986fa1d2f2c22dead9cb55ba7ff4f498d05647', class: 'w-full space-y-2' }, h("li", { key: '0c55b64857ee9f4954b8324e9a99f166cea898bb', class: 'flex w-full items-center justify-between' }, h("span", { key: '9bc0fa2d037c90d5701aa495135d22bffa06148a' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '59c2a6e438f8f41c64684e453afc9d99f52f9722' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: '61cbe4ef98b91021459b7653bbaa8d87f0ce35ba', class: 'flex w-full items-center justify-between' }, h("span", { key: '1272e323261bd0208e7dc91e7e700dde637307c2' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: 'a13381ca695f5bbec419ae4ba577467128d264d0' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '0cd5bca2427b0a87359e8f2f5b45790d08ae3415', class: 'flex w-full items-center justify-between' }, h("span", { key: 'ba6e25043d1a394b51b55c486c035bcc0d1a9e5f' }, localizedWords.entries.Lcz_Total), h("span", { key: 'b052ef3bd83b700df66582bd7d355baa38e17258', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { key: '88c89450b867b81388578dd3cdf96169b01bc477', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: '67b79b18ec06c03fb6f4b5361e82645d27d166ff' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '5c02243f0390281d24c5a462a699584551991968', class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: 'eef0779d44f4be4899594e7b744ceecefd9be529', class: "w-full", errors: this.error && this.error.cause === 'payment' ? this.error.issues : undefined }), h("div", { key: '43b3df293302fcaefe4d0bff96caf8c72d4fdb25', class: "w-full space-y-1" }, h("div", { key: 'cb90cb584fc27d76c0ea67698784a94ad5310fc6', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '3cb1ab473cad4ee9cac7e96a5b186b238aa1a329', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: '6d7c84af25494bb8046277ad7376b6e99f41484d', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), ((_m = this.error) === null || _m === void 0 ? void 0 : _m.cause) === 'booking-summary' && !checkout_store.agreed_to_services && (h("p", { key: '943c7de55754bb2efab5207d8b904fc7d6c878d0', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy))), h("ir-button", { key: '839f1dd7ff73373807160ab9e5186728b584f64b', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CheckoutErrors",
                    "resolved": "{ cause: \"booking-details\" | \"booking-summary\"; issues: string; } | { cause: \"user\" | \"pickup\" | \"payment\"; issues: Record<string, ZodIssue>; }",
                    "references": {
                        "CheckoutErrors": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::CheckoutErrors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
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
                    "resolved": "\"booking\" | \"booking-listing\" | \"checkout\" | \"invoice\" | \"user-profile\"",
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
