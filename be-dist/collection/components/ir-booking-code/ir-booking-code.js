import app_store from "../../stores/app.store";
import booking_store from "../../stores/booking";
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
        return (h(Host, { key: '7018985eb952a1659216921d0968e081483c1860' }, h("form", { key: 'da87e5123aff2f6121f847e942b3f39dd27a27e5', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: 'f278961dd864c0fe8a9ecdecb08f5a55bd25d8f3', class: "title" }, "Enter code"), h("p", { key: 'b512abb6a142d780e33ea5ae0dc3a31844850ad0', class: "Supporting-text mb-8" }, "If you have a private or corporate booking code available, you can enter it below to unlock special rates:"), h("ir-input", { key: '8c15caaa867ba501b45f8b4ca3e381e5f22325ea', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", label: "Enter your booking code" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { class: "text-red-500" }, this.validationMessage.message), h("div", { key: '5b9791f31480295ce316498254bfb0a41ae9ab19', class: "flex flex-col-reverse items-center justify-end mt-8 gap-4 sm:flex-row" }, h("ir-button", { key: '9bf57836b639c121301e3ee08b5c2289c018c41c', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: "Cancel", class: 'w-full sm:w-fit' }), h("ir-button", { key: '1959267d02df9363382e3f0e6b917041381c40a4', size: "md", label: "Apply code", class: "w-full sm:w-fit" })))));
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
