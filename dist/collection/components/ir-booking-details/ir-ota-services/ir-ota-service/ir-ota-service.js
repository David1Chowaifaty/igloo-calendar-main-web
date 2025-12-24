import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'e86ae3f113f31b374c26c7857d4aa240d299bf68', class: "p-1" }, h("div", { key: '738ba91431f703c87c568f1f472d59c5b95b9193', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '4e5556935c6bbf56cd9f44750400332a7c93b83e', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '30b3aeb93c43095f341143347d45c0663404003f' }, this.service.name), h("span", { key: 'e1834844c17ff3b69cb1d09efbdc58b866d1ba42', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '00a4fba66bac44ed5f770f9675262bc0380a079f', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'e9d150a7a3be0625451512725a727585300c8064' }, this.service.total_price)), h("div", { key: '2241a5753c62282a4012320acf3f2e4e436b8648' }, h("ir-label", { key: '92602451e2d07045205265c4ec17346852eb89eb', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'ad852db6bddb88c617ac633c4a5c80c988ab5f17', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
