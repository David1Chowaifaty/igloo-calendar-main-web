import { h } from "@stencil/core";
export class IrOtaService {
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'cc8f39184ee4b5045441285bce59da6df3970adb', class: "p-1" }, h("div", { key: 'aeb296aba503e589f588f3a0660423be8939be29', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '616ec92cd4f2fb334030181ce734e624bb7662c7', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '6d6269e2e55ddc72bef40ea1356b1b0ac5d33b31' }, this.service.name), h("span", { key: '170bc76f039619cf2d90932c2e9de4913b72f275', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '4cb87d2d1dd47cae5f28871297f06d5e4a8c24b5', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'f874929372716b3d225f1be66567442f19b5a08a' }, this.service.total_price)), h("div", { key: '652da4819a4ca236c32fff288f297db8656e9371' }, h("ir-label", { key: '39964867147fc426cc2a2c898f89fab1e47f88c8', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'cced503834ea35d3c0f687185c899b1402b8b7e8', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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
