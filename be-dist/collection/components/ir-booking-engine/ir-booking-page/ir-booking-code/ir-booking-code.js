import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
import { validateAgentCode } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrBookingCode {
    constructor() {
        this.code = undefined;
        this.validationMessage = undefined;
    }
    handleSubmit(e) {
        e.preventDefault();
        if (app_store.app_data.isAgentMode) {
            return this.clearAgent();
        }
        this.validationMessage = null;
        if (!validateAgentCode(this.code)) {
            return (this.validationMessage = { error: true, message: localizedWords.entries.Lcz_InvalidAgentCode });
        }
        this.validationMessage = { error: false, message: this.code };
        this.code = '';
        this.closeDialog.emit(null);
        this.resetBooking.emit('partialReset');
    }
    async clearAgent() {
        if (!app_store.app_data.isAgentMode) {
            return;
        }
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { isAgentMode: false });
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { agent: null, agent_code: null });
        this.closeDialog.emit(null);
        this.resetBooking.emit('partialReset');
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'd428abb449f337a60ced5819493db4cb3c9ff5f4' }, h("form", { key: '3aec4ef215e4f639dbff0d65cc6b8f99fce17619', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: 'c48887085851cda3582545be534cdab7fbd1712d', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: '7fd5f8344d0a999cabd0ee737b9d2db7aaf12ecf', value: this.code, error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { key: 'dfbaedc02382ff160a90b9dde69117ea7a7426a3', class: "text-red-500" }, this.validationMessage.message), h("div", { key: 'a32caf00838dc20e2742d8039bb07f7008ec1b29', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '3374730631a56c3d58129875cccca72dbd86f2d6', type: "submit", size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: '3f8ed8a4c72613afe3c21060d57aeb58d2fb37bb', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", type: "button", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
            }, {
                "method": "resetBooking",
                "name": "resetBooking",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "clearAgent": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=ir-booking-code.js.map
