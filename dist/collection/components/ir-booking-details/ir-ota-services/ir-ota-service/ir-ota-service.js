import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '402079981a0632b42189be79f45612ddb4567e7e', class: "p-1" }, h("div", { key: '7b0de78d036c3a76a2d82f7c5df7a8021a30ceaf', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '67389a5d3bab45314c1708bbab60c8e8d1df2856', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '34fe26d4399011ef0ae90c17b84d859709812d93' }, this.service.name), h("span", { key: '7c9ca9a3eb6e569bd62c5b36ca5c54b4ae8c73d4', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '0e848af0231afd24655d0db48c64d68ff78a8ffd', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '6d520c4e2a8cb52ce4eb37ae6c06d4b06376ac4a' }, this.service.total_price)), h("div", { key: '17e4f5a7ae9c17985fda6b0951d861b20bb7113f' }, h("ir-label", { key: 'a0784181fd0a06e87bb70f6e7c4b33eec2440df7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '4f81da6e76fee6d229ff5948349494b58d479fe9', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
                            "id": "src/models/booking.dto.ts::OtaService",
                            "referenceLocation": "OtaService"
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
