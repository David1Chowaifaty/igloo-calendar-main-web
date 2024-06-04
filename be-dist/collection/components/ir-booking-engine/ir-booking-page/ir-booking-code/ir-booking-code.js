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
            return (this.validationMessage = { error: true, message: localizedWords.entries.Lcz_InvalidAgentCode });
        }
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { agent: agent.id });
        this.validationMessage = { error: false, message: this.code };
        this.closeDialog.emit(null);
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '48b8e75c9b23f372e20fcd556ffe050744a98b54' }, h("form", { key: '30cc5f03c11c33a22ae2f0fbee291e8b461a15b9', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: '15ed8336d46c8f4eb093756629e50f0a2723638f', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: 'b2f72f86cc3b050f69bf62fb3c7ac20e89fcf987', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { class: "text-red-500" }, this.validationMessage.message), h("div", { key: '98cd84aefb987cc0a593d879891d0ff7529410d7', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '13b84d0662c499f2d4b8bb5436dea065596a2788', size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: '6bb3c1dbeee637ad6c33cdb3dd83c1c86e49c6bb', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
