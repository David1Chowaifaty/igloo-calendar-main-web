import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '66f0911342eca8895ca3d0661b21edc60bc4f9e2', class: "p-1" }, h("div", { key: '265a0aa403f66e17efa759b2d1ba020305b38f33', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'e5de54642d9b0bebfc984646361e4cf3107a22c2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'eacc0be438fda7475355d285c2bbad6eae5397f1' }, this.service.name), h("span", { key: '462147816b6cece35e9e9e616d9c4ee723ce9863', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'ae36faa11ceff713653449162f3345663776ec38', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '9dcb04f0e66bba3d9c3985d3a87449ca53682a79' }, this.service.total_price)), h("div", { key: '5ceb5019934943eb64049ece812db0ce2898d331' }, h("ir-label", { key: '2e5945c5a0b4c0e7e82f9705e2543eb0235d2edf', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '72e0257a50ff53d04901d9151693c10acef7f738', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
