import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '4593ca74800eaaa4486809c81b14ebeb75e1708c', class: "p-1" }, h("div", { key: '1b4dbc49663d5b0928c078ecf5b49c1a83864fe2', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'fef6c8405a4c12099c3b6ff65b6d2108e4883e5c', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '3a4a733481de6db4eb24dc1adb8a5adb10087279' }, this.service.name), h("span", { key: '3ab6125ef4f994ddf543beca754263a7ef43b0f4', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '0e6380e06081cc7a0b8a8e52e3d3e65cc88de364', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '3b2d876f44c80940fdcef7b8091a102d3d4df5b0' }, this.service.total_price)), h("div", { key: '5c131f4fec32b45f957531502f015a1410cbae8c' }, h("ir-label", { key: 'ea22c747b6ab5e44cde903d8416dc546408358ab', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '32157d4d8df9c7c4eb5c42e116d40ca217fde6a2', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
