import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '3d2c9408cb714e0edd5f880a543b3060a1d44732', class: "p-1" }, h("div", { key: 'ce7d3372c5642c10d60aa2c5d7206dc9ba037371', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'cbc1f46f9f66870be2ae695c05dc662d1800292d', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'f221acbf452d9865b19ed7448833606431004c71' }, this.service.name), h("span", { key: 'a80739c1e340386854c2b1e6c40603bac4915684', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'a38013fa716685c07963c413291d3f743f64ad1f', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '2b25b40f8e7eee5cdb46e404d53b8dd8f7791f12' }, this.service.total_price)), h("div", { key: '7f7da7db6a92d12b85085eaf8721c6297e9e5d96' }, h("ir-label", { key: '9964e61059996cafe428c0242452d0340747c1e3', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'cef6244ccd65ae336a18bf21486f3b31316b5ef3', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
