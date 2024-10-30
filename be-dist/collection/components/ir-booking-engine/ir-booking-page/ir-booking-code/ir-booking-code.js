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
        return (h(Host, { key: '58f80e1797c18d1cb058a77e74e7416619da7f0d' }, h("form", { key: 'e9986f28702ee32ea7852448c2682899ab3d4a09', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: 'eee8389fc6dd31e5814d63b4024c8edd739decdc', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: 'd04920ce57921a0105d52982cf4a4094ef7c7e5b', value: this.code, error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { key: 'aad409f0f79c5f1da71abe264a7843ae13721ec1', class: "text-red-500" }, this.validationMessage.message), h("div", { key: '27e37d2f10140fd43554ee3aa6bb764588985616', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '65501c33fa83de6f51d015a1c885b81bde2e2ee1', type: "submit", size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: '2056b4be98039d81a0784e5a4dc40abf3d0557eb', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", type: "button", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
