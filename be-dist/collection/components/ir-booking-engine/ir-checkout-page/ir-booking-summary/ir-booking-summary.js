import app_store from "../../../../stores/app.store";
import booking_store, { calculateTotalCost } from "../../../../stores/booking";
import { checkout_store } from "../../../../stores/checkout.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
import { format } from "date-fns";
export class IrBookingSummary {
    constructor() {
        this.prepaymentAmount = null;
        this.error = undefined;
    }
    handleBooking() {
        this.bookingClicked.emit(null);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { totalAmount } = calculateTotalCost(true);
        console.log(booking_store.ratePlanSelections);
        if (isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI')) {
            return (h("div", null, h("p", null, "Loading")));
        }
        return (h(Host, null, h("div", { class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.images[0].url, alt: (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.images[0].tooltip }))), h("section", { class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { class: "flex w-full flex-1 items-center " }, h("div", { class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", null, localizedWords.entries.Lcz_CheckIn), h("p", { class: "text-sm font-semibold" }, format(((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) ? new Date((_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", null, localizedWords.entries.Lcz_From, " ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_in_from)), h("div", { class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", null, localizedWords.entries.Lcz_CheckOut), h("p", { class: "text-sm font-semibold" }, format(((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) ? new Date((_k = booking_store.bookingAvailabilityParams) === null || _k === void 0 ? void 0 : _k.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", null, localizedWords.entries.Lcz_Before, " ", (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.time_constraints.check_out_till))), h("ir-button", { onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { class: 'mt-4  w-full' }, h("ul", { class: 'w-full space-y-2' }, h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", null, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_m = checkout_store.pickup) === null || _m === void 0 ? void 0 : _m.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, localizedWords.entries.Lcz_PickupFee), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, localizedWords.entries.Lcz_Total), h("span", { class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), this.prepaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, localizedWords.entries.Lcz_PayNow), h("span", { class: "text-base" }, formatAmount(this.prepaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { class: "w-full", errors: this.error && this.error.cause === 'payment' ? this.error.issues : undefined }), h("div", { class: "w-full space-y-1" }, h("div", { class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { label: "privacy policy.", policyTriggerStyle: { color: 'inherit', textDecoration: 'underline' }, id: "checkout-policy" })), ((_o = this.error) === null || _o === void 0 ? void 0 : _o.cause) === 'booking-summary' && !checkout_store.agreed_to_services && (h("p", { class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy, "//you must first"))), h("ir-button", { isLoading: isRequestPending('/DoReservation'), size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
