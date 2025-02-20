import { Fragment, Host, h } from "@stencil/core";
export class IrOtaServices {
    constructor() {
        this.services = [];
    }
    render() {
        var _a, _b;
        if (!this.services || ((_a = this.services) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return null;
        }
        return (h(Host, null, h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, h("p", { class: 'font-size-large p-0 m-0 ' }, "Channel Services")), h("div", { class: "card" }, (_b = this.services) === null || _b === void 0 ? void 0 : _b.map((service, idx) => (h(Fragment, null, h("ir-ota-service", { service: service }), idx !== this.services.length - 1 && h("hr", { class: "mr-2 ml-2 my-0 p-0" })))))));
    }
    static get is() { return "ir-ota-services"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-ota-services.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-ota-services.css"]
        };
    }
    static get properties() {
        return {
            "services": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "OtaService[]",
                    "resolved": "OtaService[]",
                    "references": {
                        "OtaService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::OtaService"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
}
//# sourceMappingURL=ir-ota-services.js.map
