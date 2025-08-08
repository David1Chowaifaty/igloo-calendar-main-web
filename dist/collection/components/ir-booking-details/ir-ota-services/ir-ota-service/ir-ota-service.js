import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '6fc4683c184234d420bd08b057f4f8bccdcc2c76', class: "p-1" }, h("div", { key: '008ae14926ab9090eff1b07604ef7510619c9c0c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'e2120921dd1c7e9e2cfc6d44daf726cf2f7d6a35', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '866d7e8239964239337e48cb0edfd8cbb533b3e4' }, this.service.name), h("span", { key: 'a63e76455bbfbdec1629df881f62d40110e95649', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '94ca3246fdd4bdf4d3f401a2814298f4a80bbbce', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'cd33202bac127d54a37ffe6845abab486ab0e8bb' }, this.service.total_price)), h("div", { key: '6555440c6f419657946b94e61b404867e9e95c24' }, h("ir-label", { key: '7d04f55d4a8256e6698b8a8e72deba53d6ff04fa', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '491e0118640c56e638beb51403f8e10c0b310973', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
