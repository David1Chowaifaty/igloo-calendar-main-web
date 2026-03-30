import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'bf79c3f6292ac50da4ce32f39d389bf428261871', class: "p-1" }, h("div", { key: '0429e56fff27f4a6772c7d13be1436dc9c15ba67', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'ad8b7de7ab8a9573929eefccc5d25ae9a4f468ab', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e233badcd2e34ca80a31b09c99feebcdb09317e2' }, this.service.name), h("span", { key: '7b07525c485c0fb7735c024370ee8e58487ebcd9', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '88d2aa58cd8f4161ef24698caa076546c517c5d9', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '45c0de7dfde53b806ee4273e1173ed9d7e356cb5' }, this.service.total_price)), h("div", { key: 'b9b650b17b501f8ee88f7ac1e51c06a1e57784ae' }, h("ir-label", { key: 'ecb0696822bd5d1d8bc008a9bd2a634e2f6e2f2f', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'a55875b2547f15324cdd6095851ee4edea812b4c', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
