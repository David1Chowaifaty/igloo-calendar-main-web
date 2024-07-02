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
        return (h(Host, { key: '575b213a3351973ff746eadce4b0a642f9c734ac' }, h("form", { key: '377e14999621a8005abae3909c63cc265ad31ca2', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: '8837138fa992d6982a30aaf12bb57bde04fea0d9', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: '10c82893392ba7f5c7e0df3c19ece170ccb830a6', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { key: '3a3b19ca151af10feecfa7d84ff629e5585d00de', class: "text-red-500" }, this.validationMessage.message), h("div", { key: 'd15ad5065c0427bbd5d411e7498b33261a00002b', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '0c5967d184737d2f3a3a54b077ffeff90d73e75c', size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: '1a0352155a8c2abe7c57d8981c0ddbe4f4f219f6', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
