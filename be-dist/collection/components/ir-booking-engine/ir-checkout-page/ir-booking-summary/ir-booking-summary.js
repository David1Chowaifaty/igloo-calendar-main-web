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
        this.prepaymentAmount = null;
        this.error = undefined;
    }
    handleBooking() {
        this.bookingClicked.emit(null);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { totalAmount } = calculateTotalCost(true);
        console.log(booking_store.ratePlanSelections);
        return (h(Host, { key: 'c3db1fcc659d03be9cf7518deee45c8e5eae3b17' }, h("div", { key: '4e49566f181dbd0deb4862d36ddb8c55ec343866', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: '8a479901faa4e9dfc400a787712d8b2864e03706', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: 'a364541a53b9e9625fbbe73d689f7bd1a0fe77d3', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '1aa1637cef1a18b9e96276e4f038e32a045005c2', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '5d22d7674e453f5e7acfe3debfcea7a8b1a33142', class: "flex w-full flex-1 items-center " }, h("div", { key: '5aac78ba78e577921855ce64ff7c3890ff146cd6', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'bba40bd62cbc16e85347639440a6f0333cfd4c11' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: '8ffcc17e72f6e2935bccccc1aaa62b4fdfaf518c', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'e7e3c14bae8c4aa8cfe5aac2d1c0eb67a010c99c' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: 'be8d8725eab8164a28182895ef9b7c9197c46a77', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '17004bd2bc3eab831a4df481c179f9c4d2752963', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '4767e6b16e0368d352bcff1f85a342ea462c5a9e' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '365250deb87bcd0cf55f2ccb13c3fa54497f467b', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '979171cdc67b46e73900d8b4abde80570f6da843' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '35191201dca18053fad794d5670ed794739eb296', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '2b9044591c0aaa0493aafa236c83cffbf27d7180', class: 'mt-4  w-full' }, h("ul", { key: '2ed58c5d642da11e3986f54f627f517c2ccb965c', class: 'w-full space-y-2' }, h("li", { key: '4e2bd3c5bbe0c118a078e4727617efb70994d59b', class: 'flex w-full items-center justify-between' }, h("span", { key: '2a079420b2f8ffcd9044f870deb5347f5a4fea0e' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '79fe9ec543543c43b526ae03a012b45800b57c6e' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: 'f1ed3103553cd2baae6b125a9bab7615a864879d', class: 'flex w-full items-center justify-between' }, h("span", { key: '6327ffe1ba5ce1d900cf0b427c0be2cb464d5ffb' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: 'b2e7c4e44f7bdd160a3fae1c6540e2ec17e7bab2' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '1586422e6257b5be10aaa4341cff6fcc8b6deeed', class: 'flex w-full items-center justify-between' }, h("span", { key: '0bf064e17e008b12caf74e1a981651edff4ff145' }, localizedWords.entries.Lcz_Total), h("span", { key: '659101a41421ba5771d7928b8b90f5351c0ab3d3', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), this.prepaymentAmount > 0 && (h("li", { key: 'd9101a142a4a288760a71330e2e3abe09a99ffc9', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: 'd6da4c5e8b01b6a6122c5c4f8b2c561468e0b30e' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '3e9b26d20c5299d8f655980071872e4527b789b3', class: "text-base" }, formatAmount(this.prepaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '2b4cfb429bf2b4751bd33ef1931277ce68a91931', class: "w-full", errors: this.error && this.error.cause === 'payment' ? this.error.issues : undefined }), h("div", { key: '1042dd265fb773ab28367382301d5fbc9caafb46', class: "w-full space-y-1" }, h("div", { key: '9db398ea67b6027161b19f9a97c20cd3da80d697', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: 'f62e6e7f9f2fb190ed83faf09e3f5c3a3139fe2e', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: '898a06a15e10d80e278c97a0509d23ee7b02f3ff', label: "privacy policy.", policyTriggerStyle: { color: 'inherit', textDecoration: 'underline' }, id: "checkout-policy" })), ((_m = this.error) === null || _m === void 0 ? void 0 : _m.cause) === 'booking-summary' && !checkout_store.agreed_to_services && (h("p", { key: 'ee6ebd6e28fd202ac48a9a52b8e806be5f0c3fe9', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy, "//you must first"))), h("ir-button", { key: 'b0bd6833a03bb32ca343ea422c9ebe055a0b2c5b', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
            "prepaymentAmount": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "prepayment-amount",
                "reflect": false,
                "defaultValue": "null"
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
                            "path": "@/models/commun",
                            "id": "src/models/commun.ts::CheckoutErrors"
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
                            "path": "@/models/commun",
                            "id": "src/models/commun.ts::pages"
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
