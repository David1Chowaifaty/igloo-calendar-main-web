import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '6ea635ad49ab8b2c6f2f0987b3a2834d2bc62b47', class: "p-1" }, h("div", { key: '1e9ef2e8f82e159412ec74525a88a86b3f34b47e', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'e2fbda36fffdab88007d32e67080167989044dee', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c4ae8bd6ede6a8e264d301fec048ecab5133606e' }, this.service.name), h("span", { key: 'b3be35915b2e2cc3028525eda17d684bf0349ee0', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'a537364ced298cba5e37ade7fe50d1b82a187dc8', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '7e62b65ddf5e6d1140914f423c67b79fe2cdd6ff' }, this.service.total_price)), h("div", { key: 'fcec0aa77aeb2a24654c366ebd8440c543ec59fa' }, h("ir-label", { key: '1d55645b3d645aaf147608728b8900403585bf19', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'f272ba4d2e037d801ef06f16aacadfb8409814cd', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
