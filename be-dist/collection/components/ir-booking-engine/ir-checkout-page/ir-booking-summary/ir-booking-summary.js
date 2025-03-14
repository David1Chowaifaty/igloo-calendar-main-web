import app_store from "../../../../stores/app.store";
import booking_store, { calculateTotalCost, clearCheckoutRooms } from "../../../../stores/booking";
import { checkout_store } from "../../../../stores/checkout.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import localizedWords from "../../../../stores/localization.store";
import localization_store from "../../../../stores/app.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrBookingSummary {
    constructor() {
        this.prepaymentAmount = null;
        this.isBookingConfirmed = false;
    }
    handleBooking() {
        this.bookingClicked.emit(null);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const total_nights = getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date);
        const { totalAmount } = calculateTotalCost({
            gross: true,
            infants: true,
        });
        if (isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI')) {
            return h("div", null);
        }
        return (h(Host, null, h("div", { class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { loading: "lazy", class: "h-full w-full rounded-t-md object-cover", src: ((_b = app_store.property) === null || _b === void 0 ? void 0 : _b.images.length) === 0 ? app_store.property.space_theme.background_image : (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.images[0].url, alt: ((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.images.length) === 0 ? app_store.property.name : app_store.property.images[0].tooltip }))), h("section", { class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { class: "flex w-full flex-1 items-center " }, h("div", { class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", null, localizedWords.entries.Lcz_CheckIn), h("p", { class: "text-sm font-semibold" }, (_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date.locale(localization_store.selectedLocale).format('ddd, DD MMM YYYY')), h("p", null, localizedWords.entries.Lcz_From, " ", (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.time_constraints.check_in_from)), h("div", { class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", null, localizedWords.entries.Lcz_CheckOut), h("p", { class: "text-sm font-semibold" }, (_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.to_date.locale(localization_store.selectedLocale).format('ddd, DD MMM YYYY')), h("p", null, localizedWords.entries.Lcz_Before, " ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_out_till))), h("ir-button", { onButtonClick: () => {
                this.routing.emit('booking');
                clearCheckoutRooms();
            }, label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline-primary", class: "w-full" }), h("div", { class: 'mt-4  w-full' }, h("ul", { class: 'w-full space-y-2' }, h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", null, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_j = checkout_store.pickup) === null || _j === void 0 ? void 0 : _j.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, localizedWords.entries.Lcz_PickupFee), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, localizedWords.entries.Lcz_Total), h("span", { class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), booking_store.bookingAvailabilityParams.agent && booking_store.bookingAvailabilityParams.agent.payment_mode.code === '001' ? null : (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, localizedWords.entries.Lcz_PayNow), h("span", { class: "text-base" }, formatAmount(this.prepaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { class: "w-full", prepaymentAmount: this.prepaymentAmount, errors: this.error && this.error.cause === 'payment' ? this.error.issues : undefined }), h("div", { class: "w-full space-y-1" }, h("div", { class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { label: localizedWords.entries.Lcz_IAgreeToThe, checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("span", { class: 'flex-1 cursor-pointer underline', onClick: () => this.openPrivacyPolicy.emit(null) }, localizedWords.entries.Lcz_PrivacyPolicy)), ((_k = this.error) === null || _k === void 0 ? void 0 : _k.cause) === 'booking-summary' && !checkout_store.agreed_to_services && (h("p", { class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy))), h("ir-button", { disabled: isRequestPending('/DoReservation') || this.isBookingConfirmed, isLoading: isRequestPending('/DoReservation') || this.isBookingConfirmed, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
                "getter": false,
                "setter": false,
                "attribute": "prepayment-amount",
                "reflect": false,
                "defaultValue": "null"
            },
            "isBookingConfirmed": {
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
                "getter": false,
                "setter": false,
                "attribute": "is-booking-confirmed",
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
                },
                "getter": false,
                "setter": false
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
            }, {
                "method": "openPrivacyPolicy",
                "name": "openPrivacyPolicy",
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
