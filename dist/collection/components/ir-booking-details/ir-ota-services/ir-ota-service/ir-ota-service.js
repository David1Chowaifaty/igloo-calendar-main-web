import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '2d7e3f3ebb73f0822037347622f64889ee8b02fc', class: "p-1" }, h("div", { key: 'cb9ce7c214b153561a2ac61215995e47273c2bc9', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '19f8f58dbc80139f6cfe1c318b8b0d8b620ff224', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '204024ee973b2fb8aa12ef4ccaa0cf2241a23ba0' }, this.service.name), h("span", { key: '5a635aa8099672b4381caffe23fe3ad270cfbad1', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '08239277874195a8172052bea6c4f7c9b9748307', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '209d8c601be557fb294f20c44ad30df876c432f4' }, this.service.total_price)), h("div", { key: '1812d4932589427be18c5b1bf743f7d88a524d04' }, h("ir-label", { key: '5f19e8936b8904500eb842fa6c5359c3d55af2a5', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'dd44eda193ffa135c44f722622ba20dc076bbfd6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
