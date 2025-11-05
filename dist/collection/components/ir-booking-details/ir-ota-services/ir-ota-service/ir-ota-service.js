import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '481268452d694af9d9f4921122a9a18238129e63', class: "p-1" }, h("div", { key: 'c9d92d91627f0ea72277ce3ecc9fdce84364989a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '23fa54939f00975117791adb4d8ade516e030126', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '3da79815d4c085d8cba0e8e7f22a1e63961e359f' }, this.service.name), h("span", { key: '7524fb67380a063ad276dbe72b768f38046f0f73', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '248970a6f9a209d011493c6eca336da169b848c2', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'cadd92af110479d3d3e9e2dbfbe64d84341e9c3d' }, this.service.total_price)), h("div", { key: '7478744fd5d0b95047b4ec4d76d03b3e65b68df5' }, h("ir-label", { key: '73f99c4c910c64e50c807ad76ada2932db50c58f', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '7a222e6b903b3081e4d375b34c9467e06be4b5e8', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
