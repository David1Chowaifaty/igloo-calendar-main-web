import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'eb985d147972aa561ebf33d29daf8f6a5a127540', class: "p-1" }, h("div", { key: 'f9fade24f97a0373b023e46a9600b6b138485d3c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b787ff714b0545ba3e054831dbe834f70ece53fd', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'b80c0838313b53be56b9cb6f8b5a5868755504f3' }, this.service.name), h("span", { key: '5073aae73d6b2091519c5f794943cfef07c174a4', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '4130bf70960dfc19a24848032e8200a031f9f395', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '766c9c3003718debb4b76a013fce7bcd3f5539d2' }, this.service.total_price)), h("div", { key: '760d2bca5cb57ddef27956082353dc511abc46b8' }, h("ir-label", { key: '0c380f20f4119dddbc6e426fae4bcd42cd132b00', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'e36e37eea2e4194cf62e72e6ec96b6f391169201', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
