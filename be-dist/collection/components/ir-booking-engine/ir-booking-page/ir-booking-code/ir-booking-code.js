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
        this.validationMessage = null;
        if (!validateAgentCode(this.code)) {
            return (this.validationMessage = { error: true, message: localizedWords.entries.Lcz_InvalidAgentCode });
        }
        this.validationMessage = { error: false, message: this.code };
        this.closeDialog.emit(null);
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'b9fbcdd6dafa07520b230f0b8ea7a5c5bfa8878f' }, h("form", { key: '2cd1475bd8ab6833b95959fed5710e448011f866', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: '55ff0d1a580631395f7c989c801b7abf7afe4b51', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: '89567c415867e0126f7c57795788b93e038b30e6', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { key: '9890b125744132f6fb9aed0125d79982177816e0', class: "text-red-500" }, this.validationMessage.message), h("div", { key: '0f6dbb45471ff9ee6e5f43a9f47161f253c20dbb', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '71b341af83723584cf1e6ecc44878eca53047292', size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: '3fb39bc29b300ffe036345d1bcd5ae3dba268571', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
