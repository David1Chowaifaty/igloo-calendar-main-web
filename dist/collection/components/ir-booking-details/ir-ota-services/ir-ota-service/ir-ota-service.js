import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '47823386465ac7015c0b7cb968c035e680b6419c', class: "p-1" }, h("div", { key: '827ea8697c925b3fc783bfe146d61f94c33f063a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'bc2f75bab958d9bbf1bf44cf6dcd355bb62c1023', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'a9b0708d0206f46ec7ac241d6dfe3ee09a9c43f1' }, this.service.name), h("span", { key: '34c27d504cf24fde9e4f4ee876f81fb81c1977fb', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'e5ae90a8b1c7b3c57ae879056e63a53de79fed4a', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '22e1d3c867239cb3b4af25f3bc0095d464b12ecc' }, this.service.total_price)), h("div", { key: 'fce185fcd3485c1c15f27e3616b259cb03b3f88e' }, h("ir-label", { key: 'fc774da22d327ee22cb4cf9990182242135135db', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '18d0a6a3d325859119970b60bace9735adb65ec5', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
