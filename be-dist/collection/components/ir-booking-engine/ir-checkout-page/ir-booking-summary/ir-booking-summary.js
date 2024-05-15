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
        return (h(Host, { key: '0aa9a3067d6cf52237b1928887f1de2984271fa3' }, h("div", { key: '3129ddfb8ce335a64ff32c7e0a49068a317311a4', class: "w-full rounded-md bg-gray-100  text-sm lg:max-w-sm" }, h("div", { key: 'e42ffa42d5bd2c8c708ea0b4413a9a761987c394', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: '12c86ab7ed92de3644ffb9df3cfbf273cdc83c9c', class: "h-full w-full rounded-t-md object-cover", src: this.property.space_theme.background_image, alt: "" })), h("section", { key: '26b142d89e845f863673753318c22a98054a3cf9', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '197415d3e0385c8772156866eb8611b5a5d346a9', class: "flex w-full flex-1 items-center " }, h("div", { key: '99ea171d71227b54e705c4c30951e261ea487f98', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: 'd401477f853b5c0fe11556aa6f51432aed4f583a' }, "Check-in"), h("p", { key: 'b1eb3703daf120de56eb4209dc603ef9bf42df1d', class: "text-sm font-semibold" }, format(((_c = booking_store.bookingAvailabilityParams) === null || _c === void 0 ? void 0 : _c.from_date) ? new Date((_d = booking_store.bookingAvailabilityParams) === null || _d === void 0 ? void 0 : _d.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'c559c376cfcbcbf5d4b8eba1b01a6f658a6c7abf' }, "From ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_in_from)), h("div", { key: '1a72c8521b72547a1acdad5b9022ab010157b65b', class: "h-[1px] w-full min-w-[50px] flex-1 bg-gray-300 " }), h("div", { key: 'd4178c30e3505160c7868b326791f9b6b6dbd544', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '7c9cedf5eb78f66b38aac66532d6f5f42cad5548' }, "Check-out"), h("p", { key: '7ac9169c50b5f985d9cbee94cdd6c7680e3130f4', class: "text-sm font-semibold" }, format(((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.to_date) ? new Date((_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: 'bde0c88ac8f65b124bb5408704139cc0fbb31ab2' }, "Before ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_out_till))), h("ir-button", { key: '2f6f4cd7b753dff81f199e67f8ce67ffae0bf4bf', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: 'dd1a7225c17bd57ffea7b839d782eaffa02fca5c', class: 'mt-4  w-full' }, h("ul", { key: 'dbc9595a312dbe2d94eac5986c9c8cfb4bfc3e69', class: 'w-full space-y-2' }, h("li", { key: '069f0abc1e2b7c723f512448dd3ccd452439bf51', class: 'flex w-full items-center justify-between' }, h("span", { key: '10cbf85d3b0c8a750eb1d63f4da4765d44291943' }, total_nights, " ", total_nights > 1 ? 'Nights' : 'Night'), h("span", { key: 'e117011cc53d94c7f9d4de65645e3841678bbcb4' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_j = checkout_store.pickup) === null || _j === void 0 ? void 0 : _j.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '6fca6875eddd1898674a793cd2663bbb12715b0c', class: 'flex w-full items-center justify-between' }, h("span", { key: 'c0db6a130dd56aaa3619a87240de130c50d1396a' }, "Total"), h("span", { key: 'cbf1ed6ea8bf0bacb1170443cd8e214bbd20afa3', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, "Pay now"), h("span", { class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("div", { key: 'f8fa0f8339f65f9482a6a4324a0a912e5ef3ea28', class: "divide-y rounded-md  border border-solid bg-white" }, (_l = (_k = this.property) === null || _k === void 0 ? void 0 : _k.allowed_payment_methods) === null || _l === void 0 ? void 0 : _l.map(method => {
            var _a;
            if (method.code === '004')
                return (h("div", { class: "flex w-full gap-4 p-4", key: method.code }, h("ir-radio", null), h("div", { class: 'flex-1 space-y-4' }, h("fieldset", null, h("ir-input", { placeholder: "", label: "Name on card", class: "w-full" })), h("ir-credit-card-input", null), h("div", { class: "flex flex-col gap-2.5 sm:flex-row sm:items-center" }, h("fieldset", { class: "w-full" }, h("ir-input", { type: "text", placeholder: "MM/YY", mask: this.expiry_mask, label: "Expiration date", class: "w-full", rightIcon: true }, h("svg", { slot: "right-icon", width: "20", height: "16", viewBox: "0 0 20 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V13C20 14.6569 18.6569 16 17 16H3C1.34315 16 0 14.6569 0 13V3Z", fill: "#EAECF0" }), h("path", { d: "M2 8C2 7.44772 2.44772 7 3 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H3C2.44772 9 2 8.55228 2 8Z", fill: "#8B8B8B" }), h("path", { d: "M2 4C2 3.44772 2.44772 3 3 3H5C5.55228 3 6 3.44772 6 4C6 4.55228 5.55228 5 5 5H3C2.44772 5 2 4.55228 2 4Z", fill: "white" }), h("path", { d: "M10 11C10 10.4477 10.4477 10 11 10H15C15.5523 10 16 10.4477 16 11V13C16 13.5523 15.5523 14 15 14H11C10.4477 14 10 13.5523 10 13V11Z", fill: "#FE4F42" }), h("path", { d: "M11 11H15V13H11V11Z", fill: "#EAECF0" })))), h("fieldset", { class: "w-full" }, h("ir-input", { label: "Security code", maxlength: 4, placeholder: "", class: "w-full", rightIcon: true }, h("svg", { slot: "right-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 7C2 6.20435 2.31607 5.44129 2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H19C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V8H2V7ZM2 10V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V10H2ZM7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12H7Z", fill: "#EAECF0" }), h("rect", { x: "14.5", y: "11.5", width: "6", height: "3", rx: "0.5", stroke: "#FE4F42" }))))))));
            if (method.code === '005') {
                return (h("div", { class: "flex w-full gap-4  p-4" }, h("ir-radio", null), h("div", { class: "flex-1 space-y-1.5" }, h("p", null, method.description), h("p", { class: "text-xs text-gray-700" }, (_a = method.data) === null || _a === void 0 ? void 0 : _a.map(d => h("span", { key: d.key }, d.value))))));
            }
        })), h("div", { key: 'aff72f7b1df31489f2cfe4442bf4b399a9c98858', class: 'w-full' }, h("ir-checkbox", { key: '9afef5e8c6165a7b26f1758c1b00498bd517083a', label: "I agree to the privacy policy." })), h("ir-button", { key: '37938fa7f046f2f07f2fd08345015417142fedbf', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
