import app_store, { onAppDataChange } from "../../../stores/app.store";
import booking_store, { calculateTotalCost } from "../../../stores/booking";
import { checkout_store } from "../../../stores/checkout.store";
import { formatAmount, getDateDifference } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import { format } from "date-fns";
export class IrBookingSummary {
    constructor() {
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
        return (h(Host, { key: '7ffca42a61f18a207378f8e4205c30541f7535ff' }, h("div", { key: '000579c3aa84b33330d5b16e215d7a1df4cff2a9', class: "bg-gray-200 rounded-md text-sm pb-4" }, h("div", { key: '7ffd4b537b63159c54bf88800c8f013d1fd6a6dd', class: "image-container" }, h("img", { key: '53d05e40fd85b46e69935a972919dd87c51840e5', class: "object-cover h-full w-full rounded-t-md", src: this.property.space_theme.background_image, alt: "" })), h("section", { key: '0aaeeb8f0abd4045dfa08d1d78f98d54c1c364a2', class: "flex items-center flex-col mt-4 px-4 space-y-4" }, h("h3", { key: '5ea8b7763805730b9a82e468018d75f789e0fc75', class: "text-center font-medium text-lg" }, this.property.name), h("div", { key: 'ec7280edccf9cc4b3af0022060eb6d1e768c6600', class: "flex items-center w-full max-w-xs" }, h("div", { key: '2bc05cca5a568d1c4f020ef54db32625313078b7', class: "rounded-md w-56 border text-xs p-2 border-gray-300 text-center" }, h("p", { key: '8ac24391ff0dbdf2d864ae1c24105d03df22f579' }, "Check-in"), h("p", { key: '3535707bb6e9841596d2a1669f0732df5824e94d' }, format(((_c = booking_store.bookingAvailabilityParams) === null || _c === void 0 ? void 0 : _c.from_date) ? new Date((_d = booking_store.bookingAvailabilityParams) === null || _d === void 0 ? void 0 : _d.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '474948acdaca4ac6936340ec6b566cf2cf60fe69' }, "From ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_in_from)), h("div", { key: '9cc5ccfb807592a5d4f176519c31980265871fd8', class: "h-[1px] bg-gray-300 w-full max-w-[30px]" }), h("div", { key: 'bc6f3ee0cfa50f2228e1a68b50b4750de8da18a7', class: "rounded-md w-56 border text-xs p-2 border-gray-300 text-center" }, h("p", { key: 'fba0925f9a8709e76066296605ce1ea527fd49f9' }, "Check-out"), h("p", { key: '5c4bf819c4aff5242646ff4504e8af1bc1d5f7d1' }, format(((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.to_date) ? new Date((_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '20de001382c1cb762642b88faaabae3c64c4abc2' }, "Before ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_out_till))), h("ir-button", { key: '6536bf8c57bc64ea2ea9d325686279a2b6fb2af8', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: '81b09b2f44a9cfc812c2c45fb484cf18f94e6335', class: 'w-full max-w-[60%] mt-4' }, h("ul", { key: '6d1221c1bbde6278b5a477f2346dcf07fd1f5178', class: 'w-full space-y-2' }, h("li", { key: '1837e02f1eb6fc3709231ae26c7df83524c07822', class: 'flex items-center justify-between w-full' }, h("span", { key: '0106e89812fa01ccfecbea48178f770fd73c9f85' }, total_nights, " ", total_nights > 1 ? 'Nights' : 'Night'), h("span", { key: 'cdec677c89e6bbe4dd606cac83fc47927bee85cd' }, formatAmount(calculateTotalCost(), app_store.userPreferences.currency_id))), ((_j = checkout_store.pickup) === null || _j === void 0 ? void 0 : _j.location) && (h("li", { class: 'flex items-center justify-between w-full' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: 'ead6b8a3c075b0f5d01764be8a86f6399a1c6bba', class: 'flex items-center text-base font-medium justify-between w-full' }, h("span", { key: 'd8628aafe0ef58d66de357d756ec0093a1bae01c' }, "Total"), h("span", { key: '223afaa05d754b3c3a0de9f53a7489e19bcc6904' }, formatAmount(calculateTotalCost() + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))))), h("div", { key: '1e4b17c3322243b7e9c8af0017cbd176441350bd', class: 'w-full' }, h("ir-checkbox", { key: '7907b1eb033de87d3ed2caacfebc63b0b907bb7b', label: "I agree to the privacy policy." })), h("ir-button", { key: 'e1f79ad32059c4150ba680412d3923e9c8d8676e', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
