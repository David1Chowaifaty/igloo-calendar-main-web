import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '129479d1d192fef53cdd5f7d0a79a7b875e64ddd', class: "p-1" }, h("div", { key: '1777da3d31975a6189da892602cdb1f4272f1b87', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '2497d0dce87f16b7218ff7fc52162c168c944c88', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'eaf54ae113afeecd690e34af47eabda396fc683a' }, this.service.name), h("span", { key: '32246bacbbf7cf831c3c37c1d99b0920eae10397', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '0fb0c8b9c12ba1109406926cd4753490371a3560', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '38f912944fd767616ce881aba0de39ed2d8f6f53' }, this.service.total_price)), h("div", { key: '3033df9315db83e4ca5ce52d46c2971c217e89b8' }, h("ir-label", { key: '0ee458e5f4176c12b34334f35df5beb879196ca8', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '3603c372681e9537fa722765d49397c15d6bf6c6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
