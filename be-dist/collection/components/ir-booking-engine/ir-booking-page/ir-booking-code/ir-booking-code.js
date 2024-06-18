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
        return (h(Host, { key: 'c48989dc4e614a8fe75de6492b65ae7e574feb7e' }, h("form", { key: 'a36a34c58ef314861dba8f50f2de105e38ea0014', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: '5895218e735e7be35347f3340669fd2d7d933ac5', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: '3717dfa702d766bd409def592a012d2cb4a5b731', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { class: "text-red-500" }, this.validationMessage.message), h("div", { key: '3f1f4fe3b11784bcf612bc0d73d7d24b1c28f8ce', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '78836a3757af9c84394e613ea36a2167db314e1d', size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: '074938dd90093260fe1b277aaf54d6a0876fcf3e', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
