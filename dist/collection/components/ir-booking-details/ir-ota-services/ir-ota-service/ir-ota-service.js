import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'b5ec77880b95532dc8389e558dd0b04efc36a975', class: "p-1" }, h("div", { key: '9bb0f8e99da1819519a37b6b869a557c9d33950c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '7389c2fdc5f6ae2c861f97a5de3a5c9bbb45f52a', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '1d628a5d5ea70967e7414382b60755024afcd97b' }, this.service.name), h("span", { key: 'cc1dfb8933386312214651dad639a70346a91286', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '3b79075b2cbbeb3e1a29b4d77fe235093e3cb33c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '84ce6918b942909c297b8c364a607d8927e05c9e' }, this.service.total_price)), h("div", { key: 'c162e49df6b86a1cd7a52414f01812a3b9edae5a' }, h("ir-label", { key: '62765ecb8ffb1c44b842f4272fca9d7819693cf7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '7a31e5ed02aaea974143977894d44a20890b1067', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
