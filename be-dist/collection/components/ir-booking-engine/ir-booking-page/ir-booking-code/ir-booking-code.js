import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import { Host, h } from "@stencil/core";
export class IrBookingCode {
    constructor() {
        this.code = undefined;
        this.validationMessage = undefined;
    }
    handleSubmit(e) {
        var _a;
        e.preventDefault();
        this.validationMessage = null;
        const agent = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.agents.find(a => a.code === this.code.trim());
        if (!agent) {
            return (this.validationMessage = { error: true, message: 'Invalid agent code' });
        }
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { agent: agent.id });
        this.validationMessage = { error: false, message: this.code };
        this.closeDialog.emit(null);
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'f057fda99351207c1958b25306cbbf0a28ef87f3' }, h("form", { key: '00896aaf86886f8d6ef0840c4f495f4147344427', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: '3abaeca0b7e2d47e81ad117590e42867804d77f6', class: "title" }, "Have an agent or corporate code? "), h("ir-input", { key: 'b3cfd8769afe58a594b881ae7519f199925bd036', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", label: "Enter your code" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { class: "text-red-500" }, this.validationMessage.message), h("div", { key: 'de18ff0b2c61d960a1bb6d29a02f0a4da79f01c7', class: "mt-8 flex flex-col-reverse items-center justify-end gap-4 sm:flex-row" }, h("ir-button", { key: '006c06a6c0d4b4e0b6e66ef9eb641600e3559553', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: "Cancel", class: 'w-full sm:w-fit' }), h("ir-button", { key: 'd72dd59de7dd436f256e0b8524fb4279a1ed48fc', size: "md", label: "Apply", class: "w-full sm:w-fit" })))));
    }
    static get is() { return "ir-booking-code"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-code.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-code.css"]
        };
    }
    static get states() {
        return {
            "code": {},
            "validationMessage": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDialog",
                "name": "closeDialog",
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
//# sourceMappingURL=ir-booking-code.js.map
