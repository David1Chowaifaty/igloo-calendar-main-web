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
        this.resetBooking.emit('partialReset');
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'f2656a8e5e433bb2b5fbb0028142db38b0280feb' }, h("form", { key: '2d9be4b438e928b9765f21c81ddfe6277f23f918', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: 'a3dd16dc042905aefb319436bb521928f8636d3e', class: "title" }, localizedWords.entries.Lcz_HaveAgentorCoporate, " "), h("ir-input", { key: '1ae56222cb4eae8e454baefeeb8d2ecb686a82b4', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_BookingCode, mode: "default" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { key: '69983ebb907b4c390f44c1ac6d8297ed16c2dcc6', class: "text-red-500" }, this.validationMessage.message), h("div", { key: 'ed8eb37e8b8f2ec41ed420ff49785018414874cc', class: "mt-8 flex w-full flex-col items-center gap-4 md:flex-row-reverse" }, h("ir-button", { key: '6ca0a64a9302f27988e40517b92284469ca8406b', type: "submit", size: "md", label: localizedWords.entries.Lcz_Apply, class: "w-full md:w-fit" }), h("ir-button", { key: '41bd0a1a880d2b0ff3098009c870131c497d637e', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", type: "button", label: localizedWords.entries.Lcz_Cancel, class: 'w-full md:w-fit' })))));
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
}
//# sourceMappingURL=ir-booking-code.js.map
