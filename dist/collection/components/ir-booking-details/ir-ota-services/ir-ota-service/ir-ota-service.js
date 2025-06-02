import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '229db86091341256dbb02b5e888d7d8ca97a48f4', class: "p-1" }, h("div", { key: '2ac68634fcb6de82bc861c15b8b6c2d0a589233f', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'd4876743095f45591715da4f9255c4b6eac6c296', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '818fa10bec90311473b8eef448190778ec36fc0b' }, this.service.name), h("span", { key: 'e2a52d5850da8aa349e89607b96a686de2723932', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '2e80ceab7d230986567b7b2ddf0ff4a937a29946', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '8e9f2606f52c9524898971aa7d221c86b27633a4' }, this.service.total_price)), h("div", { key: '6d72c4e545c6b2e9a47b4e849b8d0775d416bbef' }, h("ir-label", { key: 'b9ecd27da90cc51733d90ac6c84d43b5d1cd05b9', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'fc15e84694e1586bce27650b4bf0d4f5452b8f64', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
