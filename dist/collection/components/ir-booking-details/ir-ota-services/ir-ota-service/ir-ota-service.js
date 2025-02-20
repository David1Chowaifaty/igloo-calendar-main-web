import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'e439bb73e89913623df8bcf56d924233ac3f7fb2', class: "p-1" }, h("div", { key: 'c6c3b22df0f51180434aaa0a0733df5651135ea9', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'dbff9e07ed26830233d2301c0eaa4b25f24b03bb', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '1f4a88da9b74676a03c8b16f748d6ae36f18054c' }, this.service.name), h("span", { key: '101c8512a41a43ec5232ba6f7e50fa00b9b2bfe1', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '1c5660588718fa5b2a898f2b3a348d89237a271d', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '7d5f6ca73726c648c97be7cc7e3c8e93a22947c3' }, this.service.total_price)), h("div", { key: '49f8087dc64b36ba587c8314315c19b58030f63d' }, h("ir-label", { key: '3175715d04e655d954367f5d93836e12a0a389d7', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'b4a031eea9ed8a777055f48ddad7b7edf4389d9e', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
