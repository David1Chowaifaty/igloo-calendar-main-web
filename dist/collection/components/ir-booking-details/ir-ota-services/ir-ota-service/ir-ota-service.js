import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '1656e8cb7822df0c07cdc99299e600f713bd1748', class: "p-1" }, h("div", { key: '78ae1272d62e787a608d607dbcb0a9d000f1cf17', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '6afb73e474849d1dc0c635fe5684a75837b4ee26', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'a307e57c60071b08cf4cf2623bcbf3f8a9807be2' }, this.service.name), h("span", { key: 'fbce05d93ebec76dbd5e211fa8f7fc8b18567dfd', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '67a40a84640c3162b6e0cedec54c110dfd6b2caf', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '7e5ae550b291086d8fa5af009f8ebe6dd4786a40' }, this.service.total_price)), h("div", { key: '1a0208357455e23f83cdc02d45420be620819301' }, h("ir-label", { key: '801777a9efe0df062b4acbf386fdacb54c248502', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '8ee162790612f8e7ee1c9f8619352338b219aad1', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
