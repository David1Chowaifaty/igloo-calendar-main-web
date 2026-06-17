import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'f05c426cf7d8c52f75af010d4dbb593d7d976bee', class: "p-1" }, h("div", { key: 'd864b65eba53d98060e4ab7568478f1ec27cece7', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'd56fab0233772be940633100b068b6debdbbf129', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '9c536cecd0a8c37eb048182df5dd60833e7d7e7f' }, this.service.name), h("span", { key: 'cac1ad411bbc7b74a69dc7a88a7c16cb54d8dc82', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd24e646ccfc40f890a3291f6c759810f4d229e94', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'd8ebefbb7ee7e0dc17c6b21aa0823b74de98f93c' }, this.service.total_price)), h("div", { key: '7609c36c57b2de49c231b2a62e6059150eb5bd4e' }, h("ir-label", { key: '92acce82f260b546b1211a1db2d760b079cf2aa5', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '869205cfa30377416c6ef44e3080bc05c2540da2', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
