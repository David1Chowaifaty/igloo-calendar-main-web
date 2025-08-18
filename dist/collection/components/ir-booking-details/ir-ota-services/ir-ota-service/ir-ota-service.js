import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '92695c6b8b7cf86f09fa6e6b564bcb830da768f2', class: "p-1" }, h("div", { key: 'c80acba810e83e3841456b9c773d4140b48ba1b2', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '5d2277d63843c3ab708efc4c14af392e6f5eb27e', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '4f55b51ee2df58ad73bd5645076267a0a918a7ca' }, this.service.name), h("span", { key: '027a0d73ec8f0935f2fd2d91def54dabdf77dd40', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f56738beada23a87c941ea563b773ac23ad7479b', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '50ce07ce8e9f0313a21ec03dde645519fce696d2' }, this.service.total_price)), h("div", { key: '4e832de4fd93a108005de87a6fc5451bc2554f06' }, h("ir-label", { key: '05337d65cd814cc25552dc9da3550100d67babda', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '8d1901f64f2cb158b64ba43caea61f1834e684ca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
