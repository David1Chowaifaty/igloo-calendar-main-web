import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '4fecb34a60bbbff92ed6c50d2992843901d2fe3c', class: "p-1" }, h("div", { key: '45e5660d971941e79de651d0ac175f815d1b94f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b6b1334cee69b160ec66c644c693aaa945e20c25', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '9410ff43f6b4f72c232588cd1a60e5397f5d292d' }, this.service.name), h("span", { key: '039da441143e53c5b7e57db7bb1372a877fa5b1c', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd0b443bf5032edb7e1a44c8f5cfcd5229892281c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '14e62a13be326c77b3d839736ba4b0e819c5b609' }, this.service.total_price)), h("div", { key: 'e6b35d31f31c238c320058876e5a0784efb87625' }, h("ir-label", { key: '59337a595df93c90a9585d1cec2a3a3bbdcbf90b', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '5da21e858d1aef4e5075d123048411eb2c18b0ea', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
