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
        return (h(Host, { key: '5d2d3323681457f49e55836bc7040bb7299720ba' }, h("form", { key: '568f239a0c743b175fae625b599b3bee71ae97c2', onSubmit: this.handleSubmit.bind(this), class: "p-4 sm:p-6" }, h("h1", { key: '9855719208b7b872999cf1820cbf2f81b23445a2', class: "title" }, "Have an agent or corporate code? "), h("p", { key: 'ccf7640f964ae05cbdad8e464b4b32ceb8054e39', class: "Supporting-text mb-8" }, "If you have a private or corporate booking code available, you can enter it below to unlock special rates:"), h("ir-input", { key: 'cc90329629b1e55c90caa6b31fa0461ef15fba72', error: (_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.error, onTextChanged: e => (this.code = e.detail), autofocus: true, inputId: "booking_code", label: "Enter your code" }), ((_b = this.validationMessage) === null || _b === void 0 ? void 0 : _b.error) && h("p", { class: "text-red-500" }, this.validationMessage.message), h("div", { key: '83165584141f95d69b808233b8e38bd5db3f8ddd', class: "flex flex-col-reverse items-center justify-end mt-8 gap-4 sm:flex-row" }, h("ir-button", { key: '9fa675eaf481b08a9d2060e51b39b7d68bd42f89', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: "Cancel", class: 'w-full sm:w-fit' }), h("ir-button", { key: '8e825aba12594ace7cade7a7d4264a83d5f3ee12', size: "md", label: "Apply", class: "w-full sm:w-fit" })))));
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
