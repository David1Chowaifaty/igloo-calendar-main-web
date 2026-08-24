import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'abb7b6228eb4297259b7b54ce78d5134d804ddee', class: "p-1" }, h("div", { key: '3095d7ad97d385322996b5ad613855cffef4e84c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '826fddaf16f5015dad6ae4e16357cad1405254f6', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'a4ee016c38ba2b4933ab8fb88b2114bc720e6fe0' }, this.service.name), h("span", { key: 'a6e8ddb4c6afd58b378089ddb9dca3f87f16c4b8', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'b5c7307c24bc9f7f75259223b650d440ffd24606', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'd106601ff8569788385328bde50fd0e83d614bb2' }, this.service.total_price)), h("div", { key: '241d842953948f301e500d9c333ed371cbb9ba97' }, h("ir-label", { key: '9aec718b3c73596ec0378036e17fd8c5aae374c0', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'b3b302308294146b472fb9c615aaf02643205dda', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
