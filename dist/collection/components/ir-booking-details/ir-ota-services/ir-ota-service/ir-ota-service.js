import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '1b42a0f527f6207ab79cac8d91b04e0d368a7e3e', class: "p-1" }, h("div", { key: 'dd2dac7518456600c17fb25e122a0357f6e4f086', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '9953cc4c37d08091586c170c11f10e00ca4c13a8', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c793967e683f5c79f3a29576ce695ec8589d306e' }, this.service.name), h("span", { key: 'fb63b1217c37f1e807367c47c500025712938fd6', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '7966b657e3d6a80cd1c1ce5df42da2e462b2e461', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '1f33b56228d13950728989dde0e75dcbf7a1b02a' }, this.service.total_price)), h("div", { key: 'e42d4f7c3df5de9e9d824dff1dc0d1186ebe66c7' }, h("ir-label", { key: 'fc26087b9aa9086773946aa1233dcb5fbfbc3281', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'c8847df5a5f0cc843a8eb9a292a532edcd20e48d', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
