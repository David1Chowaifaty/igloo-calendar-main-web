import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '5e826acfd90fad664fc9a87d94799b5423a1f133', class: "p-1" }, h("div", { key: 'e0ebb7efe0d0645df7922500e84595cf90f6ab8e', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b68d34b0eb87498711815d040c09015bfb563f12', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '5569460d702e1313f53c710b69daeb6c7413c763' }, this.service.name), h("span", { key: 'c0abdd5bad9b96f4e48ddc1292c39046d9856d55', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '27c66ca3915cc0ddec14e78cca3bd8156d804ac6', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '793b42b35d035c7828bd097794f6e0e58811e9c6' }, this.service.total_price)), h("div", { key: '4a8467731af34944d02b8ca09ede4772203b1326' }, h("ir-label", { key: '75354d673b4356c143aa2d951e5d24f004c132fd', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '6370a5701f85fbb6710c7aec2ac82f2016f568e5', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
