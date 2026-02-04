import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'dcadf8a0c953c4522f38b6cd7545aa2a770aafc1', class: "p-1" }, h("div", { key: 'e845a87cf1cca8b3a5731a3820086e98b853c12b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '71da46d45b57b6dd890fb4ddf6d5a6a6e9f9c9b2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c922a7a61e40e72270900ad787342afa10cf9cc2' }, this.service.name), h("span", { key: 'f0704850230762c458b4c34b12248f1dedc47365', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '4d1ae6ec3273dfa6f71a7bbe2a34378129c98882', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'becf4f9b8415d28830e0ec9d41ceb637707b33aa' }, this.service.total_price)), h("div", { key: '8df20586351dcb2e0e89a225f560c4fc1c8d9c11' }, h("ir-label", { key: 'd7027559700b8f38bb52c6e692258d3762ba7c68', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '6e3569f86f62ba0dbe55391ddf92705b9e1d39a3', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
