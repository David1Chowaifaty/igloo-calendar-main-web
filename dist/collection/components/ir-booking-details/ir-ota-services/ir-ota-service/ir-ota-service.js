import { h } from "@stencil/core";
export class IrOtaService {
    constructor() {
        this.service = undefined;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '1741f2dfb779c09c9936676b44ac3976dc29e578', class: "p-1" }, h("div", { key: '3dc758711e779642be432bef70d49027d8acc419', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '15423dcc139dbbe025fa1799e4caff12d8d3043b', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '6d0733e8d76b94c96ef1c13efe46a4b7dc23fa96' }, this.service.name), h("span", { key: 'b92a12ca5ed7e305e4db7ee91da6219048d8673a', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '9eb1c13c07c40ecf67007cbcc3dd29e50b0c62f6', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '9fc070e5fb808171bb9fc1e86016eaf18b14bca0' }, this.service.total_price)), h("div", { key: '94569b9633814da458c5b88a53d1c83cec3f640c' }, h("ir-label", { key: '3f4f0c26016b23a517d69f62cd9e5d556d77686b', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'ed096e7c31c3cff96dbf0613f5f48beba534e8aa', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
                }
            }
        };
    }
}
//# sourceMappingURL=ir-ota-service.js.map
