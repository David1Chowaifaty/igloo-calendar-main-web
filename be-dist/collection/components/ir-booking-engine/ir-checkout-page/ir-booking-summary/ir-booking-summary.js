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
        return (h(Host, { key: '78226846aed31bce30ed9796531f806d57abcaa6' }, h("div", { key: '911837a71c89b4995150e2a1cfe1365df98a5899', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: '3c4f2a4002e0aeeaaa08928682e3f514cd4d338b', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: 'e1763b011d3c75cebe1d0eed465f834fc097d1de', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '5b5c0b20b643c7a1d2ddc968dce422d5e5c39e00', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: 'f7e905b645be59ef9cfa2f30c9f951315ccf7d48', class: "flex w-full flex-1 items-center " }, h("div", { key: 'f011d91dfe7cd4ff5e91c96e211268f2e828fba2', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '4170d0e997c99c021affebb074fd1c0914ef0efe' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: '945428b9efa27ce6acf3e6909443c9f4b50e19e9', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'ea0da1087b9bda88e246475a80359a57bd6939a0' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '427dce8064e3d5a950d75d72de9e005564a28e7e', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: 'c833a57006a6721e17505d3b9e99efae9395a7bc', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'aea12fec2b178f171f8350b10f8e0a47ca95c234' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: 'cd58d0b5c852d23cefa941570687985e3ba068dd', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '48f772fd3cfd713e327320347db53f9471f48625' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '6c1acd07ece3bce3beb08b9a0469748902bee79f', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '1b6a545a7643ec208b870179f0026a20b10f5a46', class: 'mt-4  w-full' }, h("ul", { key: '84e8aeee6d60439b9cef92481281363b0f3d2e3c', class: 'w-full space-y-2' }, h("li", { key: '611f804d3f8bc153e752c180924937cd2808b4e1', class: 'flex w-full items-center justify-between' }, h("span", { key: 'c9e41c48d36855ccd8f28b860bcde15471352b67' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: 'ce0fd1eb7671ed5b53abca78d9b222a7e25ab377' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: '52e5d03fadd4bb4f6d3741301f16d133548a68d5', class: 'flex w-full items-center justify-between' }, h("span", { key: 'f5bf23e8c4f139f3eafd207f2f4c86908c9c81f0' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: '7f2f070f6469060f79cac0526bf3f22aae2a0d7b' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '7053b6042ef0d059b8412cfb6745a4c8d8d33736', class: 'flex w-full items-center justify-between' }, h("span", { key: '30d73d2f57d5d8e2fe0cc22cd011c1defde17510' }, localizedWords.entries.Lcz_Total), h("span", { key: '274a00eba1d85acf820741407ba672dc654209ce', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { key: '53ad31c450eb9a150d7c213461e8928d01df4e8b', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: '7a4300f1d57485b8b8eb2ac70f26b02c84d52766' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '46f6b50d9aa053591fb362418ac28c2cedc83264', class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '3290a862cf95b99dccc7939badb7e0b369120906', class: "w-full" }), h("div", { key: '130618cf7e1982e668bd14b8094ef42e32b02abe', class: "w-full space-y-1" }, h("div", { key: 'c88dd25ce50d8242181f3537a1b56458bb49231c', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: '98fc7616e6f44cf62f8b52abafe10626038e02df', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: '26d2841c3528fa878168ab44e79a43a8125f68f2', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { key: '4ec4cc7cf4b5e6d4d7c9c58ee87e83053beb27b1', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy)), h("ir-button", { key: 'a993bb59f1cefc8d80c89927b225892b3c3e51bf', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
