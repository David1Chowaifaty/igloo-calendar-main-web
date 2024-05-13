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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { prePaymentAmount, totalAmount } = calculateTotalCost();
        return (h(Host, { key: '01493a1f15b71d1df1083fabcf5db5cbe02e6bb3' }, h("div", { key: '606a798d4220bdcc4d9acf3e5e1733daeb0f45d8', class: "w-full rounded-md bg-gray-100  text-sm lg:max-w-sm" }, h("div", { key: 'ddae4ae34bac05f920a6c5101a3161a6fc606c3c', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: 'd304ec4ee6e9b71a4f95e6bf86303d680a376492', class: "h-full w-full rounded-t-md object-cover", src: this.property.space_theme.background_image, alt: "" })), h("section", { key: '329f228650065247be198b0e7ed7a43ee8367673', class: "flex flex-col items-center space-y-4 p-4 lg:px-6 lg:pb-6" }, h("div", { key: 'f188ee9a53ca305ec596630051212eafb7d7ce2c', class: "flex w-full flex-1 items-center " }, h("div", { key: '2044d55e187cfdb59ddc5ad98ab14a36657dab32', class: "w-56 rounded-md border border-gray-300 p-2 text-center text-xs" }, h("p", { key: '2393f5466920c05e3e7dc3b051498cbb58f040d9' }, "Check-in"), h("p", { key: '046be27b04dee683ad6fc169ea51625313a3062c', class: "font-semibold" }, format(((_c = booking_store.bookingAvailabilityParams) === null || _c === void 0 ? void 0 : _c.from_date) ? new Date((_d = booking_store.bookingAvailabilityParams) === null || _d === void 0 ? void 0 : _d.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '3e6c9b53f9f2f6ced9309db1314d2e2d63f08617' }, "From ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_in_from)), h("div", { key: '819d817d83a413e825af9550d5c842cdfd4b6a1a', class: "h-[1px] w-full min-w-[50px] flex-1 bg-gray-300 " }), h("div", { key: '16f015c4243a9a306930a1e40bca5b5389250a35', class: "w-56 rounded-md border border-gray-300 p-2 text-center text-xs" }, h("p", { key: '637e35850d260a7e2f481abbd2b713c150195fb7' }, "Check-out"), h("p", { key: 'ba1d4a1172b76a8fcec9d15961d04ebf216646c2', class: "font-semibold" }, format(((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.to_date) ? new Date((_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '568fd47c6b3b00faa8e815910ebc12a3136ab73b' }, "Before ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_out_till))), h("ir-button", { key: 'c0a391e51dd4a2dce0499895b6b5f41a728892e1', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: '841b3b765a236cd03b82b385f6aadb9e917960a1', class: 'mt-4  w-full' }, h("ul", { key: '69165c0bc4529040a4d19f5ab7d09778e0701511', class: 'w-full space-y-2' }, h("li", { key: 'db4ac38953d6a8c1147cef651612e2bd411f3c21', class: 'flex w-full items-center justify-between' }, h("span", { key: '11f6baebf654503d2b92d0225526a15d03aff4a8' }, total_nights, " ", total_nights > 1 ? 'Nights' : 'Night'), h("span", { key: 'aa633ad87d12e3a9703b4d81445d6670a61f1ba0' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_j = checkout_store.pickup) === null || _j === void 0 ? void 0 : _j.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'b0cab35f4e442e3bdcde083778cca4225353a5f4', class: 'flex w-full items-center justify-between text-base font-medium' }, h("span", { key: 'dc22f210d2b68a0559688300e1adae4ad891bd4e' }, "Total"), h("span", { key: '98e2dbc79c6e6d5751a26b7121a9be4a46caab82' }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between text-base' }, h("span", null, "Pay now"), h("span", null, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("div", { key: 'c3ea35b1fae186bf410588a26ba63b24ceea04e7', class: "divide-y rounded-md  border border-solid bg-white" }, (_l = (_k = this.property) === null || _k === void 0 ? void 0 : _k.allowed_payment_methods) === null || _l === void 0 ? void 0 : _l.map(method => {
            var _a;
            if (method.code === '004')
                return (h("div", { class: "flex w-full gap-4 p-4", key: method.code }, h("ir-radio", null), h("div", { class: 'flex-1 space-y-2.5' }, h("ir-credit-card-input", null), h("fieldset", null, h("ir-input", { placeholder: "", label: "Name on card", class: "w-full" })), h("div", { class: "flex flex-col gap-2.5 sm:flex-row sm:items-center" }, h("fieldset", { class: "w-full" }, h("ir-input", { type: "text", mask: this.expiry_mask, label: "Expiration date", class: "w-full" })), h("fieldset", { class: "w-full" }, h("ir-input", { label: "CVC", maxlength: 4, placeholder: "", class: "w-full" }))))));
            if (method.code === '005') {
                return (h("div", { class: "flex w-full gap-4  p-4" }, h("ir-radio", null), h("div", { class: "flex-1 space-y-1.5" }, h("p", null, method.description), h("p", { class: "text-xs text-gray-700" }, (_a = method.data) === null || _a === void 0 ? void 0 : _a.map(d => h("span", { key: d.key }, d.value))))));
            }
        })), h("div", { key: '83a3fabee075055f5197f737fffcea9f3607cd2f', class: 'w-full' }, h("ir-checkbox", { key: '26d3d207955192f85952c869ec47833f49796a40', label: "I agree to the privacy policy." })), h("ir-button", { key: '4efa34a9cfa2577c9545f77591dd9b057073a389', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
