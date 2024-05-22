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
        return (h(Host, { key: 'cce6cb0e8349dbd5bfd9df310268f4cfd98bcdec' }, h("div", { key: 'df5473252351faa0c83c3d110740f006a8413d34', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: 'c840b472a8eef3aaacb53309fef12269c131441f', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '8c1a0045b9fef1e8a70420908efff8dbf67facd3', class: "flex w-full flex-1 items-center " }, h("div", { key: '45ac2e2800331195499419b652d152e4c9e95eb8', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '634f1f0ff1da32b49ec06b7845fe36945a4c507c' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: '2531f6964f5e905f894b73d6d6ae6c37ba898d74', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '7b7ec2997276ebd7e4f1f08009ad9843ac813eda' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: 'b7bdf4d685ac6d0ce0a229d5056d6cb54d11afa4', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: 'b314a264c210499d35b5f36f4805f6ebbcb50822', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'f874a856881c4052fbd906d837b1b533331da8cb' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '728796b5721170033b9cedd7c1df363912751917', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '4a8dbfa76a8ebc8c718577b536d8b4878cf5549e' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: 'f24563490c6dcc38adafde9e86ebf19b66578e7f', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: '107aa7411aa40b1ba816a272ad5161b27b23dcd0', class: 'mt-4  w-full' }, h("ul", { key: '9cd73fb452bf6810dfe7ad05dc1151bd8e0f0593', class: 'w-full space-y-2' }, h("li", { key: '0358afdc799f37553ce0dcc9ee08b00a790180df', class: 'flex w-full items-center justify-between' }, h("span", { key: 'f31f0d32a03d82f05a4c6caa232f80dabf7c3e4b' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: 'de2fed72f503cee21fc5d517e34edbd644c23007' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '0bff4368ad7a3774b1557e3b8e984e377b6b0f4a', class: 'flex w-full items-center justify-between' }, h("span", { key: '1c1075c901b74561c1c15742a82f86e957d4267e' }, "Total"), h("span", { key: 'a15ee5af84a05b806810a8b455934e9ff15b92c6', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, "Pay now"), h("span", { class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: 'f5a82f2fa375b3c8e6bb1c646e5e3a42878bea40', class: "w-full" }), h("div", { key: 'dcbc51412556bb8d566893f652bec4a3150ebfca', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '2a0394e4b2f418b49c09b1cb1e783b0f7317ce8f', label: "I agree to the" }), h("ir-privacy-policy", { key: 'd0ab43b1a71388a267eed88eee2d2b69aa1f3653', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), h("ir-button", { key: '85818a05d6b0c51e016562e317ba88edc529e068', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
