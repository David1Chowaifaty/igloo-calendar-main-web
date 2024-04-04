import { Host, h } from "@stencil/core";
export class IrBookingCode {
    render() {
        return (h(Host, { key: 'f944a6132a434c22555d2c56b2b342f00bd32950' }, h("div", { key: '8919f59310820bc2e339dbc52edd1e3b2888fd95', class: "p-4 sm:p-6" }, h("h1", { key: 'bc92858713b516a2c24e4fb43d601cb5197d2f24', class: "title" }, "Enter code"), h("p", { key: '473dd5a951c991fc1a01c5705e6ceaee0dfd44e8', class: "Supporting-text mb-8" }, "If you have a private or corporate booking code available, you can enter it below to unlock special rates:"), h("ir-input", { key: 'be9b2c32f520fd001755cfe02c0ba0e07e491378', autofocus: true, inputId: "booking_code", placeholder: "Enter your booking code" }), h("div", { key: '6b6a10a919c7d223a5f24e56119cfd185912317d', class: "flex flex-col-reverse items-center justify-end mt-8 gap-4 sm:flex-row" }, h("ir-button", { key: 'bbb3d1940bd6fd79c2e66edad948211bdd1e4308', size: "md", onButtonClick: () => this.closeDialog.emit(null), variants: "outline", label: "Cancel", class: 'w-full sm:w-fit' }), h("ir-button", { key: '852b7a4360f9f568ec8b76639e560681ec9270be', size: "md", label: "Apply code", class: "w-full sm:w-fit" })))));
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
