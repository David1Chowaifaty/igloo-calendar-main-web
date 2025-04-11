import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'd81ca02514ce2e030852ba6aa848bb820eab39f0', class: "p-1" }, h("div", { key: '57c4d6e45080407c6e4b7cbb35c85660f5dc9d16', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b2a56c53a9ceec5eb8bedcea40d1c17e967561cd', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'a5cb8d792045ddb110566780cf64c01ae01b7837' }, this.service.name), h("span", { key: '1e2205dedfe9da27cb999445fcc72b6fb885af39', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd2279d57aa43664ba038c2b95f9953bcb71a58a3', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'e0be66fe588cf35a30646e0da8cae71f53005249' }, this.service.total_price)), h("div", { key: '1e29f44a4e1098cdc3ff799815cd9cd5629020cd' }, h("ir-label", { key: '7d5c1bb218bcdc876be732c27af89731397b4f58', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '96ba6b4a933ab152cfd133650481a956f05b0267', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
