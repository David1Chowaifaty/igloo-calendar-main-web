import { Fragment, Host, h } from "@stencil/core";
export class IrOtaServices {
    services = [];
    render() {
        if (!this.services || this.services?.length === 0) {
            return null;
        }
        return (h(Host, null, h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, h("p", { class: 'font-size-large p-0 m-0 ' }, "Channel Services")), h("div", { class: "card" }, this.services?.map((service, idx) => (h(Fragment, null, h("ir-ota-service", { service: service }), idx !== this.services.length - 1 && h("hr", { class: "mr-2 ml-2 my-0 p-0" })))))));
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
