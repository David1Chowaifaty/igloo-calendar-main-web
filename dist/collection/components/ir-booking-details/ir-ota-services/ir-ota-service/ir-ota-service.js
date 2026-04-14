import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'f0a5c402e07f377ce47ab0219620e5913575cc55', class: "p-1" }, h("div", { key: '4548293e57702ec7eea49a694b4e9474021796f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '12f4039081c9c523efacf243d19ea5d6a56bb643', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '085843020482bbbcbe787dd42bf72c7325c2ac22' }, this.service.name), h("span", { key: 'b92b8a7b34b7adab6e18780f5b703df773421665', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f9b63bd5b932a342df45de3bd47cc9bd28540fd5', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '87a1b2d64f2f871973b9861b69139e3a1b7d930d' }, this.service.total_price)), h("div", { key: '36a6f701cdbf3300aec3b027e8d674b078d0aa27' }, h("ir-label", { key: 'f1024a19a797aa964c5c78ad3ba5556d1bd00c43', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '7b2d66ad11d83389a53220243c7aed39c5f8b3a6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
