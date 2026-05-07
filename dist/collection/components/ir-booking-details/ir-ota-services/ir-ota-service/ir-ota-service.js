import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'f88f935775506c609ce26971220180e442ce0501', class: "p-1" }, h("div", { key: 'bd1dd733dc675c3d78f8d7314a8d7d690ee982d5', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '8989a953c4ad139b5584db927b9b742e8ae90239', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '23ff99c49452ee55b54496df41012c0d9a079f8e' }, this.service.name), h("span", { key: '6cab4ce3f8100798e9302de4480de46f6bf3f4d3', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'bc79905c5e2ab99e0b5ec94c14818ebd4d44248e', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'a749e6d551c2a41d047ca6adc1ded5bf6b680164' }, this.service.total_price)), h("div", { key: 'f6e85c2abe26c69dcdbfa427618732491404c328' }, h("ir-label", { key: 'c768818c5aafca39aaf5fcdccc30715eda6f4da7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '98430c9d80acb020181f438786fd1474976031a3', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
