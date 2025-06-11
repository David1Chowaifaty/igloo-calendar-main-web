import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'b53a9753dc24f4e2e8ed429eb4efca138a7c99b4', class: "p-1" }, h("div", { key: '155d6210b4f6c0566429097d218ec84e8c15ff5c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'a92a41c7d2b8df073da21f5a31611057c13bd2d2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '9766127bcc5b48be66cced839ce71813d29d18cf' }, this.service.name), h("span", { key: 'e04e923a46b8e1fc54b1a79db9626e6103b89ed1', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'ce93628f7b62a9724966819a7e507c756bb6973d', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '24d213c08dc2eae9688b1be118918747fa27001e' }, this.service.total_price)), h("div", { key: '07107403ee69842de4c21828fabfa14291402a2a' }, h("ir-label", { key: '0f3f431938c2c624f22cc5eeafa01d2ee9f536be', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'aa00eac1f0195e2fdd14b111eb9d9a36d82802fe', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
