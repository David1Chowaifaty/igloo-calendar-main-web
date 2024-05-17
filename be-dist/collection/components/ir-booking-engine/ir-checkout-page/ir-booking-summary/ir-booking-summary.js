import app_store, { onAppDataChange } from "../../../../stores/app.store";
import booking_store, { calculateTotalCost } from "../../../../stores/booking";
import { checkout_store } from "../../../../stores/checkout.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
import { format } from "date-fns";
import IMask from "imask";
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
    getExpiryMask() {
        const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
        return {
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
                    from: currentYear,
                    to: 99,
                    maxLength: 2,
                    placeholderChar: 'Y',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const { prePaymentAmount, totalAmount } = calculateTotalCost();
        return (h(Host, { key: 'b820cea06cef66ad2b05fd2a65a37322a8287ec0' }, h("div", { key: '79b37cdce7bf4057189b25803743ebce90de8415', class: "w-full rounded-md bg-gray-100  text-sm lg:max-w-sm" }, h("div", { key: '075398bff87dd5d16e2c08f6dcf163044b4840ba', class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { key: 'aa0e0728a3f774332bd13fb10fab0b97b7dfb8d7', class: "h-full w-full rounded-t-md object-cover", src: this.property.space_theme.background_image, alt: "" })), h("section", { key: '7abc68cd9c948484fd31f4740a11ab4478c68200', class: "flex flex-col items-center space-y-4 p-4 lg:p-6" }, h("div", { key: '9a5624a199e971e7758fe121f60af9d2d3af65b8', class: "flex w-full flex-1 items-center " }, h("div", { key: '30589ab107a5133ee297e987b50389f9f62f0413', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '962e9ec2ac0dd0711ae1b651bfeab7fd521a984f' }, "Check-in"), h("p", { key: 'c4c2f50a8f56e3f2f038c39df8dbef3c55b69f30', class: "text-sm font-semibold" }, format(((_c = booking_store.bookingAvailabilityParams) === null || _c === void 0 ? void 0 : _c.from_date) ? new Date((_d = booking_store.bookingAvailabilityParams) === null || _d === void 0 ? void 0 : _d.from_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '7162e5602521ff189d122964821ef641c47edaef' }, "From ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_in_from)), h("div", { key: 'e5cd0e4fc5c42427f11ca21f8e8c73338f9227fa', class: "h-[1px] w-full min-w-[50px] flex-1 bg-gray-300 " }), h("div", { key: 'f8d8f1e1d2c9bf8eec0746a8ad1b2cd7e8bbd7d7', class: "w-56 rounded-md border border-gray-300 bg-white p-2 text-center text-xs" }, h("p", { key: '8aa96f7bae4b0615c963c157d9efc2ac6b5ac10d' }, "Check-out"), h("p", { key: '5d31d6dc581c978f3c672332aaffeef4c9d522a5', class: "text-sm font-semibold" }, format(((_f = booking_store.bookingAvailabilityParams) === null || _f === void 0 ? void 0 : _f.to_date) ? new Date((_g = booking_store.bookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.to_date) : new Date(), 'eee, dd MMM yyyy')), h("p", { key: '684c81b997cb7112d93cdc462348b8e1f2582f18' }, "Before ", (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.time_constraints.check_out_till))), h("ir-button", { key: '20521c26456a148c5774473ed800a5e12808bac6', onButtonClick: () => this.routing.emit('booking'), label: "Change details", variants: "outline-primary", class: "w-full" }), h("div", { key: 'ef08c2d6d879f38f0c12a19ec7ae0e158e34dd59', class: 'mt-4  w-full' }, h("ul", { key: 'c224ff86081b95fd73d8600b28cf7c65b90e2ad4', class: 'w-full space-y-2' }, h("li", { key: '377ae75ce03b80bdab8787a1a7879ebb5ef7468b', class: 'flex w-full items-center justify-between' }, h("span", { key: 'adb96b7169496f6f8d9099727186412589b6acc8' }, total_nights, " ", total_nights > 1 ? 'Nights' : 'Night'), h("span", { key: '6ef2f22539389daa0a5612b51b6f7e10a8e8066b' }, formatAmount(totalAmount, app_store.userPreferences.currency_id))), ((_j = checkout_store.pickup) === null || _j === void 0 ? void 0 : _j.location) && (h("li", { class: 'flex w-full items-center justify-between' }, h("span", null, "Pickup fee"), h("span", null, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("li", { key: '24f8eb09875de1c3b4298dc09f6b382b5db1fde8', class: 'flex w-full items-center justify-between' }, h("span", { key: 'ec30a85fd15deeea28f646a31f2aa8a48658b883' }, "Total"), h("span", { key: 'cc57c03d5b4111e7986a012c50bc025a87c5d760', class: "text-lg font-medium" }, formatAmount(totalAmount + (checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0), app_store.userPreferences.currency_id))), prePaymentAmount > 0 && (h("li", { class: 'flex w-full items-center justify-between pt-1' }, h("span", null, "Pay now"), h("span", { class: "text-base" }, formatAmount(prePaymentAmount, app_store.userPreferences.currency_id)))))), h("div", { key: '87affd74a1bd2b8581e5734c27f44cb8e24a4d37', class: "divide-y rounded-md  border border-solid bg-white" }, (_l = (_k = this.property) === null || _k === void 0 ? void 0 : _k.allowed_payment_methods) === null || _l === void 0 ? void 0 : _l.map(method => {
            var _a;
            if (method.code === '004')
                return (h("div", { class: "flex w-full gap-4 p-4", key: method.code }, h("ir-radio", null), h("div", { class: 'flex-1 space-y-4' }, h("fieldset", null, h("ir-input", { placeholder: "", label: "Name on card", class: "w-full" })), h("ir-credit-card-input", null), h("div", { class: "flex flex-col gap-2.5 sm:flex-row sm:items-center" }, h("fieldset", { class: "w-full" }, h("ir-input", { type: "text", placeholder: "MM/YY", mask: this.getExpiryMask(), label: "Expiration date", class: "w-full", rightIcon: true }, h("svg", { slot: "right-icon", width: "20", height: "16", viewBox: "0 0 20 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V13C20 14.6569 18.6569 16 17 16H3C1.34315 16 0 14.6569 0 13V3Z", fill: "#EAECF0" }), h("path", { d: "M2 8C2 7.44772 2.44772 7 3 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H3C2.44772 9 2 8.55228 2 8Z", fill: "#8B8B8B" }), h("path", { d: "M2 4C2 3.44772 2.44772 3 3 3H5C5.55228 3 6 3.44772 6 4C6 4.55228 5.55228 5 5 5H3C2.44772 5 2 4.55228 2 4Z", fill: "white" }), h("path", { d: "M10 11C10 10.4477 10.4477 10 11 10H15C15.5523 10 16 10.4477 16 11V13C16 13.5523 15.5523 14 15 14H11C10.4477 14 10 13.5523 10 13V11Z", fill: "#FE4F42" }), h("path", { d: "M11 11H15V13H11V11Z", fill: "#EAECF0" })))), h("fieldset", { class: "w-full" }, h("ir-input", { label: "Security code", maxlength: 4, placeholder: "XXXX", class: "w-full", rightIcon: true }, h("svg", { slot: "right-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 7C2 6.20435 2.31607 5.44129 2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H19C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V8H2V7ZM2 10V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V10H2ZM7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12H7Z", fill: "#EAECF0" }), h("rect", { x: "14.5", y: "11.5", width: "6", height: "3", rx: "0.5", stroke: "#FE4F42" }))))))));
            if (method.code === '005') {
                return (h("div", { class: "flex w-full gap-4  p-4" }, h("ir-radio", null), h("div", { class: "flex-1 space-y-1.5" }, h("p", null, method.description), h("p", { class: "text-xs text-gray-700" }, (_a = method.data) === null || _a === void 0 ? void 0 : _a.map(d => h("span", { key: d.key }, d.value))))));
            }
        })), h("div", { key: 'b386eb0ef5687c3862a006a9dcc4b51f993ac371', class: 'w-full' }, h("ir-checkbox", { key: 'd9990ef382c1b3673ddb29b2ac15046c93f18124', label: "I agree to the privacy policy." })), h("ir-button", { key: '2c0c0ef64220fd5d3fb409248cea4973aa9c4768', isLoading: this.isLoading, size: "md", class: "w-full", label: "CONFIRM BOOKING", onButtonClick: this.handleBooking.bind(this) })))));
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
