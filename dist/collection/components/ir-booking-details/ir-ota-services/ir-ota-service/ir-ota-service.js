import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '1c0ad2e75f227b91511516a991b0f8e791355761', class: "p-1" }, h("div", { key: '52e6acd3a5e1b3d6825101525705ee2fa7872f18', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b16a5435fc48448f913ea1e3543b7e953f095b6a', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '31cbd5b78e245d3e4f434acb7a62d7bcd5395739' }, this.service.name), h("span", { key: '3fc4b1e19a6985addb7d251a7f8516c2b3a7ef3b', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd0d0464cbad7ae1d114d9015f5eda6b9ab60885c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '5c8181ffd178ffdda196d47bcfd810d88ca05835' }, this.service.total_price)), h("div", { key: '5e00102a66138a189b8ec2a484a1fa1538e7bac6' }, h("ir-label", { key: '3b12d3f85dec0e93f2213e51102d96ce131c9c9b', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '16b05600bae2eac2d39653f3d9564194f5cf0f5d', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
