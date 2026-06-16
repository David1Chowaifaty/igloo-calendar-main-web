import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '341752847ca846bffc32683dae12a50f6489a0b5', class: "p-1" }, h("div", { key: 'a4d15471da8d950565bee29148d17c27d992a100', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '4aa316da60f31eba3ba74eacfbc1f9fc6d65d38f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'bf72054de97ce5396c6a59ceb37e4ba9bec1e5be' }, this.service.name), h("span", { key: 'ec77baa3df9b702c8384918bdff7f7309551f679', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '5fd6c2d388709731b38359d17a382eba88a4f6ed', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'b27caa0ec954ea25b77981c55e83515b580cbb6c' }, this.service.total_price)), h("div", { key: 'ce896f4a30ce48e89f59902489067db8119b9894' }, h("ir-label", { key: 'b94ca80286df5ba2cfdbe9b4d94e38f09de507fc', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '5c7d634024902f7eb96fe6b58192735136b4c6b9', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
