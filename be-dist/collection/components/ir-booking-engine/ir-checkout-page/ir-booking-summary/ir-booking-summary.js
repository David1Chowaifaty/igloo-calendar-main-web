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
        return (h(Host, { key: 'e6beb037d6ea406601013459cb0738f05245a76f' }, h("div", { key: '576718538913495778ba273709d0d2c281f6490a', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: '3141338023b11820991ad222ba07b7fc89739628', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: '0c2dd0146b46f2923c78096cbd50dc8657ef5026', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: 'a12ef58ab198be1925e19886d1fba4ae21db0d7b', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: 'ce965545ed9f117b5d5b8656b1ab73dc3177897f', class: "flex w-full flex-1 items-center " }, h("div", { key: '9f64c0e8c006e5b993ec1a70eedd464afd7bb7f5', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '6391674644ecac10f2a1d120ad46c1737dda2264' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: '8dbb6821db59594666ea6a5c7cd0b77598e93dd8', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '1f15b395e40f0f2dc02979dfaca8cc2fe5ff1af3' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '1808658b33c2bb9719878ac87e8d77b9046dbeb3', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: '3a5fb095d021e9b3909c255504de77758e42896c', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'a3dd61328b88cb29655aba81b90c772882857c37' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '52237b89ebef4f0e3b0c659dc427152b256b3fd5', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '4707ed91a54a18592cc28397e6f1ccba5426c73b' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: 'bb4b51db7d6fcd835b114ac28cf81f269bb41915', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '89a95fdb0668877d587aa540b73b86b798c2d04a', class: 'mt-4  w-full' }, h("ul", { key: 'b47feac73019353c043445e9402da4e0d4a97a3e', class: 'w-full space-y-2' }, h("li", { key: '7216de3a1a414f64d257d30be1bfcd7cb876ebe7', class: 'flex w-full items-center justify-between' }, h("span", { key: 'c2650e5d68549290e8972309698181dedc47241d' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '60d44286290cf2a16f1184672dab9702f04096bd' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: 'b51c34c3d3d5e38a3a89c69f548eed6a80238e81', class: 'flex w-full items-center justify-between' }, h("span", { key: '99ca42a3b7e99319954b64a2fd517286dd847abe' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: '416b34cbe261759c0201351d62ae018f6357e389' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'a63e106f82e8f5f1fa168f13ea7760d67b9a9f9e', class: 'flex w-full items-center justify-between' }, h("span", { key: 'd3f5e3cff3a0c6df3a43747cda7a1827afedcc9f' }, localizedWords.entries.Lcz_Total), h("span", { key: '5490c86b293d58c2fd082faf5d9fe36a2f90d4ef', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { key: '28a6b02df6afd27f3c9e4d42bf7d3ac1b4063670', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: '4c0586a2a10e6f4d64d0018f55ec555fd7ac5a5f' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '1ca00fafad98342b7632d752a0e2fe037ad36ce1', class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '5ef22355a5976cda406fa5ae5b59a8e642a50426', class: "w-full" }), h("div", { key: 'f1ca9156a80792a03273c92637606cf7c79d07ec', class: "w-full space-y-1" }, h("div", { key: '0b5120972a9e99200ed5836a964f7ca6d2545f93', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '22b5ea448e2bbcc87dc794e1c60e17f14923a3c5', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: 'c33792346e2a887e354e9b48602559717151adaa', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { key: '0e2ed336fe7e76defa486058af3dcf05673e118b', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy)), h("ir-button", { key: '1e7b4677e3b25adaff3bf89e87e2771ac0fd12ca', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
