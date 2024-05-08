import app_store, { onAppDataChange } from "../../../../stores/app.store";
import booking_store, { calculateTotalCost } from "../../../../stores/booking";
import { checkout_store } from "../../../../stores/checkout.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
import { format } from "date-fns";
import IMask from "imask";
export class IrBookingSummary {
    constructor() {
        this.expiry_mask = {
            mask: 'MM/YY',
            blocks: {
                MM: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2,
                    placeholderChar: 'M',
                },
                YY: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 99,
                    maxLength: 2,
                    placeholderChar: 'Y',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
        this.isLoading = false;
        this.property = undefined;
    }
    componentWillLoad() {
        this.property = Object.assign({}, app_store.property);
        onAppDataChange('property', (newValue) => {
            this.property = Object.assign({}, newValue);
        });
    }
    handleBooking() {
        this.bookingClicked.emit(null);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { prePaymentAmount, totalAmount } = calculateTotalCost();
        return (h(Host, { key: '674725bf4dcc68009929728aef1c09da221673ed' }, h("div", { key: '301bbf49e19bdbb727cf460d86ffb89e0f1a72bd', class: "w-full rounded-md bg-gray-100  text-sm lg:max-w-sm" }, h("div", { key: 'bba6c1d37bd75b0efed9d6e251b478dd859b718f', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: '133b265456f206c21a7923483d4544eab509ecd5', class: "h-full w-full rounded-t-md object-cover", src: this.property.space_theme.background_image, alt: "" })), h("section", { key: '4d1bfbc15c296dbc3375ad6b891b3d70c3c71f89', class: "flex flex-col items-center space-y-4 p-4 lg:px-6 lg:pb-6" }, h("div", { key: '4f5b78935f0a513c5aeaaaf1359cdc29ada2c94c', class: "flex w-full flex-1 items-center " }, h("div", { key: 'cf49adb575e0bd2a2a51b1204cc32db180f51155', class: "w-56 rounded-md border border-gray-300 p-2 text-center text-xs" }, h("p", { key: '8cbb755cb1106ced63e15e1505492d92a2e4b0fe' }, "Check-in"), h("p", { key: '2dce27e8f4ec72dc1974c04fc7d5e1a7aa6e71ea', class: "font-semibold" }, format(((_c = booking_store.bookingAvailabilityParams) === null || _c === void 0 ? void 0 : _c.from_date) ? new Date((_d = booking_store.bookingAvailabilityParams) === null || _d === void 0 ? void 0 : _d.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'ce31609b3191045cd0ffaa8dc94847c85e46f7d4' }, "From ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_in_from)), h("div", { key: '918a74e02d452fe099a4c685268568937986056b', class: "h-[1px] w-full min-w-[50px] flex-1 bg-gray-300 " }), h("div", { key: '64faf719bcb91845958d37ec5af0242fdeed2a37', class: "w-56 rounded-md border border-gray-300 p-2 text-center text-xs" }, h("p", { key: '1e29c6381d51de67d23d0f1ba0b96704c39ae937' }, "Check-out"), h("p", { key: '62416d208e0febee67541acae3d52565e40edd8f', class: "font-semibold" }, format(((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.to_date) ? new Date((_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '46d3aef4bcad65dab3f742d9876b5e8b33e4988f' }, "Before ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_out_till))), h("ir-button", { key: 'e88f56a4289a3270f5b2dc02a2cc03f71755c1ab', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: '14b8db90c4457b5cdecaf2630d9fd3d8d1b09b26', class: 'mt-4  w-full' }, h("ul", { key: '86caee7dc5335fb52d9e722358a8ffede9fdaf06', class: 'w-full space-y-2' }, h("li", { key: 'd58f6070e3bfaddb442feeb3edfbab9357404cfd', class: 'flex w-full items-center justify-between' }, h("span", { key: '7029864f295d515a04ab199202d335af650bd2f1' }, total_nights, " ", total_nights > 1 ? 'Nights' : 'Night'), h("span", { key: '129e446889720a923bee110de09540dbbd10a942' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_j = checkout_store.pickup) === null || _j === void 0 ? void 0 : _j.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'fe0d059676777bfbf5845f51ded8f976fdf666b4', class: 'flex w-full items-center justify-between text-base font-medium' }, h("span", { key: '9c433df963116243b12b2e5b3a82fce92adace27' }, "Total"), h("span", { key: 'dbf7be4712527849920590e4e28c603d403419ac' }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between text-base' }, h("span", null, "Pay now"), h("span", null, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("div", { key: 'c2bbb07638af97c0e06932a2c31a467c7ae1d32f', class: "w-full space-y-2.5" }, h("ir-credit-card-input", { key: '789fa10d73ad511b66de7bfa66993e54dbb17b3d' }), h("fieldset", { key: 'ae7ece1d1bcec48487e7af96dfe59ec27cc9546a' }, h("ir-input", { key: '4ebb5d6d095bd6ebf7abf8f1cbf8ae7755e032ea', placeholder: "", labelBackground: "#f3f4f6", label: "Name on card", class: "w-full" })), h("div", { key: 'c776929252908ccfccb6d350003b973bb02e131f', class: "flex flex-col gap-2.5 sm:flex-row sm:items-center" }, h("fieldset", { key: '40b0e460eff60b52f18266289ff13d09d82d8128', class: "w-full" }, h("ir-input", { key: 'c3f13d6ededc721bded2355e4495d371dbe30a63', type: "text", labelBackground: "#f3f4f6", mask: this.expiry_mask, label: "Expiration date", class: "w-full" })), h("fieldset", { key: 'da99f7c9c7d86a07e392294101915a201d775fa2', class: "w-full" }, h("ir-input", { key: '239f80d3ed4430de9ddd088002521d716d988d7c', label: "CVC", maxlength: 4, labelBackground: "#f3f4f6", placeholder: "", class: "w-full" })))), h("div", { key: '11ceccb7e4dcdf7e00956a3f788ed32cdee8dc26', class: 'w-full' }, h("ir-checkbox", { key: '6c780edb24be24c7c5767cedcbed55e49bda10ab', label: "I agree to the privacy policy." })), h("ir-button", { key: '8e746fd9c9a05776804427c673a81931bac4e5b5', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
    static get states() {
        return {
            "property": {}
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
                    "resolved": "\"booking\" | \"checkout\"",
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
