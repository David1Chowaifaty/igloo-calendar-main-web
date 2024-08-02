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
        console.log(booking_store.ratePlanSelections);
        return (h(Host, { key: 'e2bc26baab47a2779ecc791c1d3285a63b14f275' }, h("div", { key: 'cafc484348c8c26b710c2a8e8fc120531ce53557', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: 'c1c92850027d4046cbe77dc42f957100898a43bd', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: '474f30fbe74985eaf7450eb841159e4e7f85ba22', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '208814a37958374fcbeb06989daf9ece86f59c8b', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: 'a8825debdf085fba1c0344992eb1f7f61aa842d9', class: "flex w-full flex-1 items-center " }, h("div", { key: '5fb20a5b2ef124fb31f1cdb2938413eca839c640', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'be0ea600a7c50d9155cd347dcd4834b0d5ee6786' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: 'c5ec03502e25c67bcf6179152cc41659413016b7', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'a458d013050ed676145dcfc422b8bc49c71c9e30' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '49e9d056f3f27d25b1c0a0ec3e3c59d2ac9098b1', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '48c9b5cfa541578ad3e6370a1b9da0f92c5ba89a', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '1966b388849963bf24d0b242f8acccc9c2b9b252' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '6072ea3c7d80069ff7fc2684dbb264c8c5db8012', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '1eaf7cc6b34858e6b44467c0f342bcf48b8e52ec' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '2dbec6efe11d1198bb6e4649602a21dc31492979', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '7a837de52c6e6293da828cb69e2c095372c1c38e', class: 'mt-4  w-full' }, h("ul", { key: 'f6bfb56e2909775359410eff36a8b184768fe397', class: 'w-full space-y-2' }, h("li", { key: 'fffb126225065b07b40418537d1c5e69eb58fd7a', class: 'flex w-full items-center justify-between' }, h("span", { key: '08b74627064c2d5f93165255ea314655620f6525' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '5b49d3ddd98ccebf8c374708d08b3ce33449630a' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: 'b0bc7cb0bc30653045ff4e310075f98705a4888e', class: 'flex w-full items-center justify-between' }, h("span", { key: '7686423b4c01003649767e206e1fdd9e2afbec6f' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: '052816d7701da500d3d575e1d70eedeca466a564' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'c5b9dbb50f2e54aba83a6b662c45596ee7b3f921', class: 'flex w-full items-center justify-between' }, h("span", { key: 'cbae036717610bdb46212d5c6509087fe568e415' }, localizedWords.entries.Lcz_Total), h("span", { key: '46c742a94415f7e2a463e144ea0cf72b4849762c', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { key: '440c3904dad4c5ca28a2986e16b6890f23d6ad8f', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: '6bdc5053bca35d2f889aa2107ecfd64a3d1ad375' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '965fc6d2daca6d249ebe2559a22c36a887e858b7', class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '1531e2068988d790e519738897f58fd0aaf73dc2', class: "w-full", errors: this.error && this.error.cause === 'payment' ? this.error.issues : undefined }), h("div", { key: '43f0ed12f16bff746bbd305c3bf337aeb9bb234a', class: "w-full space-y-1" }, h("div", { key: '504566005770ae89d3d50d1134fc55a3fe448e88', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '1c434809599989940a4f6b2f2b67ad86785899e5', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: 'b0faee8a7f7cb1af51938666ff2bf0b225f0dc61', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), ((_m = this.error) === null || _m === void 0 ? void 0 : _m.cause) === 'booking-summary' && !checkout_store.agreed_to_services && (h("p", { key: '342d778d3c95cd27a1d482e9824d7194e671d024', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy))), h("ir-button", { key: 'e1ff7b5221a3d4878d2edfaab0158314f4bc0fe2', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
