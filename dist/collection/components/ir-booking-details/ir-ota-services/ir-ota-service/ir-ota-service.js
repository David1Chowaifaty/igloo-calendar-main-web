import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '969f891ddfe0b9abb9d133b1e4efabdc414723f6', class: "p-1" }, h("div", { key: '5e863f1fcac9595a3b59b306d3216424de6a5bad', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'db56de7236a90ed63162b44d722dd921d25f9a3b', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'd92f2cf62959b6d46efe510fe3e06e7409772e64' }, this.service.name), h("span", { key: '86c5656a577bb5431e8bdfcd7b9030bdb587fb9d', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'a7fc2bdc3c142d150d58aa43606bcb689306c822', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'e367f390ba63ed373ec77eec8302b8150a90f9cb' }, this.service.total_price)), h("div", { key: 'a383d2688012db06a0502f58e0000f601a90e9b3' }, h("ir-label", { key: '036fb632bea4af69fc69391b8c5c535442d95bfe', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '435f384f26cd79fb6c7af7a5a86b557b7106b49f', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
