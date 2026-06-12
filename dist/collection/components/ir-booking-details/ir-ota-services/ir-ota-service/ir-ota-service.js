import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'ba0c94d98e9b15cc0bc35637a5312883aaf2c5ff', class: "p-1" }, h("div", { key: '2f5f7d5e35784aa1c02c01f0c989cf407cf95170', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'a7425f272766f4ac8e5420e73b484dd43cc681f0', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'f59a586d69fcce093852efa13b9e503f39a9f14e' }, this.service.name), h("span", { key: '399ae6d338941fa6c6a96b88ee55bd366be540c4', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '32ab94358b880525e2bccf3afc77e4450288ad6c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '5cda1758f66e9457ce9b2a18c11947af12b552cb' }, this.service.total_price)), h("div", { key: 'aa4a56086744b63be06324a5010f34210d548fd4' }, h("ir-label", { key: '4650b930f55af1f5000dff82a25f1375d41cb6a3', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '2c9040822f3c0bae948cc4499e726b3ab98db005', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
