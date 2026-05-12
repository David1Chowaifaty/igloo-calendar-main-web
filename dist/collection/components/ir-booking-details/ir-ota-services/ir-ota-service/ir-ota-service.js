import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '802241217d4609955528c3afcad98c37a7ed50f7', class: "p-1" }, h("div", { key: '27353e9cf19536a61b5d46458ee9cdfbc5f65156', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '218ea163ad610cecc5322ebe309ab7787e89b568', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e5d1127bdbc9912887df803ef7004d1137bb3764' }, this.service.name), h("span", { key: 'c0f4a19dc3b6465ec8ac9d422fd290b46b281f3a', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f6a78cfffc8a964b35689a26e8158350e5eb5afd', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '8337961f09ff913772d9b810353edc8f3c677673' }, this.service.total_price)), h("div", { key: '5196c349047cbde3fb6ca0ab9df74ef2eb68c085' }, h("ir-label", { key: '4db3d664123a4b10044c2553b307e2fa718f6679', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '80c0a39d6fb8e05196dd41a649de4d7adb2cc4e4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
    static get is() { return "ir-ota-service"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-ota-service.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-ota-service.css"]
        };
    }
    static get properties() {
        return {
            "service": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "OtaService",
                    "resolved": "OtaService",
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
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=ir-ota-service.js.map
