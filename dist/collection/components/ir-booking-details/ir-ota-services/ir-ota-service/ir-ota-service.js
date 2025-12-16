import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'e6e8563dec0ed71b68642e2a731daa0962c0f774', class: "p-1" }, h("div", { key: '75b0e18e3c9417298b1237be82c79190898b8ae8', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '31bf7df0c1a7ad225747882f77a866770c75e081', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '86d902d23ae943c3422666a38a14b33b016d878d' }, this.service.name), h("span", { key: '814ab94dd3f8cf0be9cc2548d1d67c08e35d829f', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'ca876eccd4e00390e6dc93cf57d1c803c8cb2954', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '20881fabee3d67d3d52e1be35f5a7c102ceffe3d' }, this.service.total_price)), h("div", { key: 'a3db1ef67b38f464ed2ac28eca0a03b312a5596c' }, h("ir-label", { key: 'e704fc71e256390e3ad5327845f101abc003b587', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'f636ea4d54813af6a166b0cd58cddce7175ac0ca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
