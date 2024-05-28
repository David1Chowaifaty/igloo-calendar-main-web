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
    }
    handleBooking() {
        this.bookingClicked.emit(null);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { prePaymentAmount, totalAmount } = calculateTotalCost();
        return (h(Host, { key: '947b88e084439f1f01e8369573776b742915205f' }, h("div", { key: '676c21b6924e441fe437d63e6d59ee65494eb674', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: 'fe63cbd3ae50ccb152b019e4a3362e26a5e6eae1', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '4b99a4ce5546d8478bde3ee01e469969dbc28178', class: "flex w-full flex-1 items-center " }, h("div", { key: '8022d589843bdf662e09ccca63e4a52e2279c3af', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'e8cb66ace145020bf41c2d5d21a22405335c09b9' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: 'a727191d621e6c1b6dbf242847d471c598add240', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'fca04d102c598ab5dbc298a00c0719654f5ed81e' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '8b3b17ce1a445ea21f491fbabf25505b113cb04d', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '8034e316f0380bc4ef44f8ea2e6032f5dc3bda30', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '0ce649c130fc78b1e6d0e708f4b69e16b2ac07b5' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: 'c54a0d755c67ed5d61ee417cb135905336e2a39e', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'e106b3e05c5e3e3a0f6e53602a808b1e8a9e56c3' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '200c2fc6ffc90ac29fc8e6682736ec0f0d09365c', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: 'a9d443b6f49421301d1416514388476315c6f126', class: 'mt-4  w-full' }, h("ul", { key: '9aebf2f4f3b54d4d9000de467e4ed43d17103d37', class: 'w-full space-y-2' }, h("li", { key: '61a31754065b047af6d0d27be5220c07757d84ca', class: 'flex w-full items-center justify-between' }, h("span", { key: '21a79d203b44fceb0d630dd959f09f84b62aba62' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '72b34cdbd328b881daeff51eb28256fab419367d' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'ebfaeb6f85c364e5f6627c95669bdee140228581', class: 'flex w-full items-center justify-between' }, h("span", { key: 'bf3e0e8fff9f2c61b323d881b12ca973b96dd3c0' }, "Total"), h("span", { key: '81a3eaac052fb32fde8ea5b35a9287532e9d35bb', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, "Pay now"), h("span", { class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '6ffd3270ea5468cdbaa7b267d94ccd4795dd380b', class: "w-full" }), h("div", { key: 'f933b89eca5fbca7b6fa992ace888377d68b9c07', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '53a47cbbccb1374510cfac82e688b996e1cd3033', label: "I agree to the" }), h("ir-privacy-policy", { key: 'b8f5dbd4ed8bb10115f88869a937bccf033c5591', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), h("ir-button", { key: 'a394fb516235c15955116f4313367350fd6ae93d', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
