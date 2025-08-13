import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'e296b1bb726baf011f333c569084fc03fb96406a', class: "p-1" }, h("div", { key: '1a40e84431829d39cb5cab548ff24207a7118faa', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'd784e1216882196ceaa4d6289a759bce876d7467', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '267b1a6bc120db7a260657dc333d6d7c63dfd49c' }, this.service.name), h("span", { key: '9e5882e6ba37611e1cf06dca7e952daff4ed1d30', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd96ca5193b5ce865acaafa720315afde8660c469', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '2e04ba1a7d0166df0e36928bd85f0c4984ab8144' }, this.service.total_price)), h("div", { key: '9c21e8fac4d7037e3746950a7f7cc4b45a60ac63' }, h("ir-label", { key: '5fc4e0b4f695acadb7d5db07408ce2b62d14867f', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '94d15f72d25e1d5409bc7110a58503acfe0f7539', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
