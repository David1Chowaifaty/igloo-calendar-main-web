import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '764d31e7b7d1e96409af39ea90d69e1aa737a300', class: "p-1" }, h("div", { key: 'd62288ccbc35a159074957bbddb967cf015dbaf6', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '715a18276b8e4ae76dd2daf75542a81261ea0bcd', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '82f925165355e74c7cc75ab3fa04c372f8d1b262' }, this.service.name), h("span", { key: '454f9c1f88200ecf26ed227941738e6f90f12841', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '547d120be801b6398a245e8aa345a8bac383480d', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'b98054a342d286d3ae4c744512c8ae5ff8b5dff9' }, this.service.total_price)), h("div", { key: '9a6ae67a40b0e336839a060252036918fcf05b82' }, h("ir-label", { key: '33d1b35ce22c403ff9da2d4a2602f47ff2b1d8a5', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '22475b141384d2b3ffb3732fc32dbd6e7f0194e4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
