import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '1d96c4e42a07bf2e2592f7a2270642b49ddc016a', class: "p-1" }, h("div", { key: '3681618ae396770e824c4ef7c85754b311b4e861', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '5b0328b671b539940680a4ba541285295317f9fb', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e356b745cf9b4216124d507a5b65a2c511a442bf' }, this.service.name), h("span", { key: 'fb931c47116d8ea6d76475bba0b6bb0594073ba1', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '605690e92aa1c5bb9a23ffc0f4fc8e044269c85d', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'e74975d52c0b6d7e33d777d552946f5c0afdb96f' }, this.service.total_price)), h("div", { key: '9bb73bc0cab02f8d4b11f8cb8c9d64f160a6fe2b' }, h("ir-label", { key: '79444a89f63753b9553e8a72f4a0e896b83ec85f', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '034a75f316848ef5c6c04bd1b3662643375adfc8', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
