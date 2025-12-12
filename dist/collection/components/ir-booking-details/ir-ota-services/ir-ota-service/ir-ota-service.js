import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '2dcbede52e597441453dc77d98670086ddafa2ee', class: "p-1" }, h("div", { key: 'c50ab0e452389e4afc45e03db5bb35bb58edf8f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '06c7d45b46dfcb74cfd1d6b91f94e83b80e0960a', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'fc1330294eb581e01f8563a0d3d5de3f2ca51669' }, this.service.name), h("span", { key: 'e5f6a472295aa6727c4f0bf20bf4379724a74117', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'c187169930c933e5f28beea9c93b29d3c11bb566', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '986bab3ca8dc5e0cf8f35e4c49cab5479337d07a' }, this.service.total_price)), h("div", { key: 'c945e5ce915f36f21a8ee795d83d6766d44ed122' }, h("ir-label", { key: 'c11717c11c82ad766220bc0c79b873138f281836', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'abdbbf3607e3f88609a46b167742f7fdaed406ca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
