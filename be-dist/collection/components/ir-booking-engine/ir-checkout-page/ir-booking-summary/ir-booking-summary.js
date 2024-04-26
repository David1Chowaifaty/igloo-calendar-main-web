import app_store, { onAppDataChange } from "../../../../stores/app.store";
import booking_store, { calculateTotalCost } from "../../../../stores/booking";
import { checkout_store } from "../../../../stores/checkout.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
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
        const { prePaymentAmount, totalAmount } = calculateTotalCost();
        return (h(Host, { key: '1089bb647a2a6577fb082864ed4765fc692449dc' }, h("div", { key: '690afea177e326f6db53eb77b89d2d0d996e9478', class: "bg-gray-200 rounded-md text-sm pb-4" }, h("div", { key: 'bb20164ee525b476c4a26c82eaf116fdfb122860', class: "image-container" }, h("img", { key: 'abca021ee2032eae0c0131f4cf589a2fdad617b5', class: "object-cover h-full w-full rounded-t-md", src: this.property.space_theme.background_image, alt: "" })), h("section", { key: '43717aba9f466cb740777227d46abd600ddf8199', class: "flex items-center flex-col mt-4 px-4 space-y-4" }, h("h3", { key: '692564720bc99403b7fc3366db4ab16fbc46bdac', class: "text-center font-medium text-lg" }, this.property.name), h("div", { key: '046f31c37bf437509dec27292a2353dffcfa98a2', class: "flex items-center w-full max-w-xs" }, h("div", { key: '043e77c7deaa9279fcb5d1e82992aaac5a354767', class: "rounded-md w-56 border text-xs p-2 border-gray-300 text-center" }, h("p", { key: 'b8d78a665388df076049533ed2aa549e15c4b2c2' }, "Check-in"), h("p", { key: '5bb9705b0ac42296426d0c2706bd674b32914248' }, format(((_c = booking_store.bookingAvailabilityParams) === null || _c === void 0 ? void 0 : _c.from_date) ? new Date((_d = booking_store.bookingAvailabilityParams) === null || _d === void 0 ? void 0 : _d.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '283c3f4063453beeac692893a98ab90941c503df' }, "From ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_in_from)), h("div", { key: '9f33c30b689ca0293c15a371a67ee345bd217275', class: "h-[1px] bg-gray-300 w-full max-w-[30px]" }), h("div", { key: '9c9ebfe8782aa435b97e09eadd7e6b7384e4d1d9', class: "rounded-md w-56 border text-xs p-2 border-gray-300 text-center" }, h("p", { key: '94fe099dd068c266b922c4bd442102fc0534bd7b' }, "Check-out"), h("p", { key: '6cebfe302809a9341b4502f2a5916b10b8aba96a' }, format(((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.to_date) ? new Date((_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '8c4446c2b763028f6f085b273077d3cada143c4a' }, "Before ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_out_till))), h("ir-button", { key: 'fb4bed0bfa4b9ec2365d46caea7b8b1ea761cf64', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: '0bb53fa81b716d7176078b7f9e59dfd28f50aa70', class: 'w-full max-w-[60%] mt-4' }, h("ul", { key: '7187cba1314fd631b0c48202f6f1d7f7e15d6973', class: 'w-full space-y-2' }, h("li", { key: 'cd4ef525088248f2a7e51a2619a6f63295520666', class: 'flex items-center justify-between w-full' }, h("span", { key: '661b5b7313324ba04a7ceabc6d3abfad3324a21a' }, total_nights, " ", total_nights > 1 ? 'Nights' : 'Night'), h("span", { key: '36dadbee31f3e8bd5d6c0aac71abb0f3153ab115' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_j = checkout_store.pickup) === null || _j === void 0 ? void 0 : _j.location) && (h("li", { class: 'flex items-center justify-between w-full' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '7619c8587cd845fe50cee20754e5c7fe8b141eb9', class: 'flex items-center text-base font-medium justify-between w-full' }, h("span", { key: 'e01fec275158a2f6ed1da99fb3e7de05c58969c5' }, "Total"), h("span", { key: '474eeaa6e103bce61b1b35c558d0c76c52220e6e' }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex items-center justify-between w-full' }, h("span", null, "Pay now"), h("span", null, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("div", { key: '0f3df56f496875d45fe39eb70d19cfce72eb1990', class: 'w-full' }, h("ir-checkbox", { key: '259226732c760eda5190175ff9b5b27e8bfce921', label: "I agree to the privacy policy." })), h("ir-button", { key: 'd4cfb3353ef35b6abf21cf073cff640087c3a98c', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
