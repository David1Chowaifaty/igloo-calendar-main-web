import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'f8cd268332a8d467209cbc7b68ecdebd10eea83a', class: "p-1" }, h("div", { key: '28a07b7abfb5f68efc1d6a52182b762963bce363', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'e3d31bfc95889d2941b5b6046a867547a03c9b93', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'bea65152e433da2abf9f08730cf35249d1b120e9' }, this.service.name), h("span", { key: '952b75ed29bff3e6a512a770ac2f353e5ca5fb7f', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '186b2f589e857d46993bb7dac4a609dc25c749ca', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '2ed5e9658efb6d1da7804e8deda1be22303258a7' }, this.service.total_price)), h("div", { key: '48b88bde8e1b27f6685a046cafb4ed9e884d6091' }, h("ir-label", { key: '9bf1c1ffabf107e6fb4212430796f9b48c45e226', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '6a61b060c8b3122608c408b4849593e0dbdabbca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
