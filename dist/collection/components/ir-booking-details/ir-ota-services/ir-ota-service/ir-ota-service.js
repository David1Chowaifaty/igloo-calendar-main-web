import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '519b62f71a37ee3765cea5fe732f4d0eb1edde38', class: "p-1" }, h("div", { key: '6200c8a649f6fa02748cb0cc935c5e5ef770720a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'eee326564eb36b8fff6f8e01ac1b40ffbb49acea', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'd8d7b8fb5f6d690ce46b171e84ac68cf36f04dff' }, this.service.name), h("span", { key: '05ff5b237da48c7e36f643191f165e828732dd28', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '262d053acae947dd782f5ae2708065817df86f6d', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'ca4c2050a6e3a030581450fc645fa8c7fcb4a10b' }, this.service.total_price)), h("div", { key: '203c8ac9802555fa3881c8a5232f7bc0334c7bea' }, h("ir-label", { key: '944a8907e9a66236a61d2ae7fcafec64c66e569d', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '1163559ff925c7c78255a376c53edf00b174c9ca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
                            "id": "src/models/booking.dto.ts::OtaService",
                            "referenceLocation": "OtaService"
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
