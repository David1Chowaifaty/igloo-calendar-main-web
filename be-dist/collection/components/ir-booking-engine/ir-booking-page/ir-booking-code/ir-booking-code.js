import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
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
        return (h(Host, { key: '94fb121219ac383ded35b9956e310fa60d178ee3' }, h("form", { key: 'db3f208bbc6e06e211ebf71613259e45481c9f4a', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: 'd41f1b704cd41d73b4f2f4eab545a998615f1ea5', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: '34160ae551fb749df3c0251ff1ac8edc45b0f42b', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { class: "text-red-500" }, this.validationMessage.message), h("div", { key: '8386323e97ca81bdc7ace7b785617a062015f067', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '9e60ffa371b20db930a519226a6a5d1cee3b0f2f', size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: 'ab414fc103d6e094e11eda06adda7b75ee041d34', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
