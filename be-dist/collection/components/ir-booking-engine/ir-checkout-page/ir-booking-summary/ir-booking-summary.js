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
        return (h(Host, { key: '07eaed5ed70859943118951a772f8be78d9095a3' }, h("div", { key: 'aa4dbef4b66c1857e1872b5e7d3b43b0ca158f91', class: "w-full rounded-md bg-gray-100  text-sm md:max-w-sm" }, ((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.background_image) && (h("div", { key: '337187af56a7bb024f0490a4469362419983476c', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: 'b8caa756fbc90323760ddebb8da18671f578da62', class: "h-full w-full rounded-t-md object-cover", src: (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.background_image, alt: "" }))), h("section", { key: '89639fd3f74f31baf9cdacf0f14df9d350d9c6bf', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '97699ec31fb5614f88e02e864c10ff36894c830b', class: "flex w-full flex-1 items-center " }, h("div", { key: 'c9b87da63e362c982997e582689915c8059c4d46', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '18bbf0401c1ced40b39c1b517cba2884a0611cf1' }, localizedWords.entries.Lcz_CheckIn), h("p", { key: '98ea26b4a4bcd7a614657d742a731344586d18ac', class: "text-sm font-semibold" }, format(((_e = booking_store.bookingAvailabilityParams) === null || _e === void 0 ? void 0 : _e.from_date) ? new Date((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '15cdd80392c4b2ffa5104be0449e154bc54dd53c' }, localizedWords.entries.Lcz_From, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_in_from)), h("div", { key: '10761a8814eb7b7af5a060014e5a0006fdc7bb2e', class: "h-[1px] w-full min-w-[1rem] flex-1 bg-gray-300 " }), h("div", { key: 'd60489fbe557083a88748dede06ce46943da8d50', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'f87299aecc053ca79b6b97b335e6f9ba897e323e' }, localizedWords.entries.Lcz_CheckOut), h("p", { key: '21feec8a3e5b49345cb612421f30ae4b17336071', class: "text-sm font-semibold" }, format(((_h = booking_store.bookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date((_j = booking_store.bookingAvailabilityParams) === null || _j === void 0 ? void 0 : _j.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '8e22e6311346aa9849d577dd0a85cb301a4553b4' }, localizedWords.entries.Lcz_Before, " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.time_constraints.check_out_till))), h("ir-button", { key: '7d43a46775812ca4b171a8d280861b4a6cc8eefc', onButtonClick: () => this.routing.emit('booking'), label: localizedWords.entries.Lcz_ChangeDetails, variants: "outline", class: "w-full" }), h("div", { key: '3314d7c09457c36fc892b6517bb2ca9abf8fc272', class: 'mt-4  w-full' }, h("ul", { key: 'c1915848085b789a44bd0dc87856b1adc9c58c16', class: 'w-full space-y-2' }, h("li", { key: '9e482d7c36690125f73d09a82582cfa5d1c7e7bc', class: 'flex w-full items-center justify-between' }, h("span", { key: 'd82a89f02ac881cf4367722b5565c5134cf5f533' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night), h("span", { key: '3fa6642ca3d74819f9063ac85331debe43c2fa36' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_l = checkout_store.pickup) === null || _l === void 0 ? void 0 : _l.location) && (h("li", { key: '9ddcaca00fadbaf6fc060f6e9f1da29ed1693cbd', class: 'flex w-full items-center justify-between' }, h("span", { key: '3ee4e406cdf292517c0da42de300b20f3c09b282' }, localizedWords.entries.Lcz_PickupFee), h("span", { key: '4d1022147c025b684ad269493165bfbb08fff6de' }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '757a15fc5a491092e2808d96cc39f56d6dece52d', class: 'flex w-full items-center justify-between' }, h("span", { key: '0e7e4b128e44a682352e7abb2e4bb2b1ec06cd95' }, localizedWords.entries.Lcz_Total), h("span", { key: 'c3c5bd20590f2b8b6c2c9e76a28ba7cd63a2f7b2', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { key: '4b739875b88de628800c0f5e6da0c315d988bd73', class: 'flex w-full items-center justify-between pt-1' }, h("span", { key: '3a5288bb9ae558daa481db2bb4a5fd53c237040e' }, localizedWords.entries.Lcz_PayNow), h("span", { key: '73f996f72a03575d9f7ac770d1a91461bd08f13e', class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("ir-payment-view", { key: '0a7317aa31c4316bebefaded7121460e5f8235fa', class: "w-full" }), h("div", { key: 'bf88c352287c8f4a2e60c9def4adcfab83a438b3', class: "w-full space-y-1" }, h("div", { key: 'ea606c25432a0d3eaeb1436a00def8298617b4fa', class: 'flex w-full items-center gap-1' }, h("ir-checkbox", { key: 'c64d1cb8267ebc113dffcfd1c9f57bce750ebc1e', label: "I agree to the", checked: checkout_store.agreed_to_services, onCheckChange: e => (checkout_store.agreed_to_services = e.detail) }), h("ir-privacy-policy", { key: '6687b60717d2250b017c4f7df9a0913747fadb4c', label: "privacy policy.", policyTriggerStyle: { color: 'inherit' }, id: "checkout-policy" })), this.error && !checkout_store.agreed_to_services && h("p", { key: '20f08738fd58e7418852bee5fbe77c1f3d6fa449', class: "text-sm text-red-500" }, localizedWords.entries.Lcz_YouMustAcceptPrivacyPolicy)), h("ir-button", { key: 'd19c20ac90c04dcd9ab83971f1311b36b294ff17', isLoading: this.isLoading, size: "md", class: "w-full", label: localizedWords.entries.Lcz_ConfirmBooking, onButtonClick: this.handleBooking.bind(this) })))));
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
