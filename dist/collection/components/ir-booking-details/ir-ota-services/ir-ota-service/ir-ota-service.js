import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'd9f6a532dfb8ac3cb2bd0ccab801504f1f4e2b6e', class: "p-1" }, h("div", { key: '00b07e9abba1a5a94a82c610fa45df2517aa08bd', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '63101fb00e348a0032ef84823518785a1a059976', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '87adc62de581228c600625eea61ff8f885a741a3' }, this.service.name), h("span", { key: 'a83976c42f7861b849b6b808c42e3e537dc565f5', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'b0333c8d82daaaf0878e5a60e5eaf06cdbd1145f', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '5e34e248d7c9d95137c6528b23cf130cb07d633c' }, this.service.total_price)), h("div", { key: '1a123d95d862b58cf79d641344e20d978babbc08' }, h("ir-label", { key: '2c018055a41b24108d6e3b09b13a623c443a41dc', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '8ab555c2089cdfc02e2eb3d8f34e262b432ec46e', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
