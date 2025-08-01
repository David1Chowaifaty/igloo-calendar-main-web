import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '29cd5f8f4e534667b6199033f25020a12ecf307b', class: "p-1" }, h("div", { key: 'de7cdc07182ef431c7d81a65a85de8fbd23319c6', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'cff9f5770b1ca110736a939db77f802524ce870f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'bf578a9d271904855f3173d077e1b0e76919e297' }, this.service.name), h("span", { key: '16188dd9ba0b79424e8666973d09fd35f30df4d2', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '7f11f53834c21beff3e3d1f3db25ccd736549442', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'd8cd4e6effdafeb15e1c6a4a0aaedb50ecbeac46' }, this.service.total_price)), h("div", { key: '7a85bdf3bcba8061dda78fe6551941228a404f69' }, h("ir-label", { key: 'f7773b80987df6a359075a3c71c0e58812c2e38a', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'ee4d9e74e77f68e4a06a7eff0f9516cf8bbb9650', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
