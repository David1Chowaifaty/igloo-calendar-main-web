import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '30fa1224626d1d136df6120a130f0e9eef0ddfd9', class: "p-1" }, h("div", { key: '72105d69d56017833f911f9adc04d5d03f13cdca', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '79a2180a42a792ef2842e66f19512489a002c939', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'd777d0f2ed084d4d91c66b0122fa919e4d88ed3c' }, this.service.name), h("span", { key: '307e88c72ced0ecaa21d9cfdd16b53818125506d', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'e61beea860cb8a86b29fde7a707ea10a1ff05f71', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'fcedd75441ab98ad69a1e1fe2ee9264795fb69b1' }, this.service.total_price)), h("div", { key: 'c74236035161508c2a20ce724c0739d84c55e1cf' }, h("ir-label", { key: '6dc939f46efb833bc8fda8882635eaa52f3af18a', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'c53606b8f1d08313e44dcd8321500fe589a92cec', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
