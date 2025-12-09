import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'be3892df14092a60cdfc377235445ef846db54f0', class: "p-1" }, h("div", { key: '8d95b5d8078d7232d0b51afdd103549fa94f6100', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'fd8b68da7a782406fd388179eebde215f681f403', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e1316bcacf0dd9c364273b09a8c1c021d93b7b4f' }, this.service.name), h("span", { key: 'f61226b5f4a87d0c48c7983de2aa2dfb11b24e8c', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'b132fba53a5681d992054e109eec7eda96fcbd26', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '64ce65fddb8e16ea1af322d9aa331d459726d09e' }, this.service.total_price)), h("div", { key: 'c17290e741bb4da7a9e1ff9acbd8ce6d2e4bf798' }, h("ir-label", { key: '6b0503bd1c7ddd7c93142ae10ced3e9f4a6446ca', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'a71b00b299aeefc122b9bb04dc0e7321f36900f1', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
