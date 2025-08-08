import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '809d78afe66aab5aaabdc05f94d9460e3c897b72', class: "p-1" }, h("div", { key: '13cffd3a1c0f97472536078eb384993e8015c6db', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b71dbfefb88ada0d69ef00e8dd1d4127c554e3e5', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '058b471c13dabceba2a391d717213b6666948d56' }, this.service.name), h("span", { key: '2b33b6dfafb700ef26f69bb775025aae3791007b', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'a6795a07d8040bd23ce1a2215f13c9222c8d1a94', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '16147aa948c75e4756dec7d2c91fa886b7fd0156' }, this.service.total_price)), h("div", { key: '42ac3920e67635420db96be452399d183f8e797e' }, h("ir-label", { key: '45c2cf261472eb43aecfb24f3fa2133e088d8af1', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'b4eee408895d7f6f8135a7f3b67411d30cf30127', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
