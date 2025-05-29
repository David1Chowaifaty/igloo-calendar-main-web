import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '38a50c0659612ade39751b5f8d6dc48d702262d4', class: "p-1" }, h("div", { key: '59f26b9a81c2878805736ae3a2318fb45d1dcd95', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'f0883e9e1b07caa8d80396732bee894ca23368fe', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'add0136b5405b4c41f26b58cf8879304406d58a8' }, this.service.name), h("span", { key: '7621ed5006bcf5f2b8bc3a7a844bd3804d2a5502', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'fbf51293abf4fd8841a3efed0624854ffae8c161', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'c5fe3d72f8e43233bee4658656562f366be9f393' }, this.service.total_price)), h("div", { key: '2971e1b6f048ded516919f7b36225f074df84169' }, h("ir-label", { key: '4b754c78680e16bdd43392ff4ec9d9dbc720a4d3', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '7c8fb42ee57979c62c8fd63027cd2e8a28deefa7', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
