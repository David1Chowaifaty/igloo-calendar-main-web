import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'b960951455aa05c7215f3431992bee66b14d42ac', class: "p-1" }, h("div", { key: '7210e1c571ead9ad2a98e5293da143d1affdb424', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '93a9ad67f1fc8a13922c90571102d7cc3a3805a8', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'a43080e888d43e439b2c6cbdb82f729aa9e2b941' }, this.service.name), h("span", { key: 'f5715b6ca805da1c9bfc70f71d63ccfd34201971', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'afae31396b07bc8aee0d38a1ed8aa90c429efcc3', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '9a02519759fda2aea438203e0aff56bb42e86adf' }, this.service.total_price)), h("div", { key: 'ddc03e4b8a515386b9a561165a01dee141a8f3dd' }, h("ir-label", { key: '515432b46630d9e48c4e84b438613d119b1858ff', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'cbbbb7f58afebb65833f7753170fc375760ee237', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
