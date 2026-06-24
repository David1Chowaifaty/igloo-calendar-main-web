import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'fbba56a9260507c1ade151c6204d773c9fc9a4c5', class: "p-1" }, h("div", { key: '069188a8bf40150164bf073b9edb4ed0eb9346c9', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '7ee699180ad76accf52ae5f0e798e34007d94f68', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '0bad710042286c7dda9ac0de49a4464be94fe98d' }, this.service.name), h("span", { key: 'f20bfaffc4a452cc6da4c53fb1c1ac16f4daf3f0', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '83b936af26126016fbf0daf15e1ab25780ce1b2b', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '26d8acd0a42e06ef15507cc321bb6ad7dbf3db97' }, this.service.total_price)), h("div", { key: 'ede791c33eea25cf3a2b721b15694418ebaf6f6b' }, h("ir-label", { key: 'b2da6ace972c5b7b6469d666eeacd7d3d2972465', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'cb5bd733f50c3425edc9bd0bd9522f29eff3727e', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
