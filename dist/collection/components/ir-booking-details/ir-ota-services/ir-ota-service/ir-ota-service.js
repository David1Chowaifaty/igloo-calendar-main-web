import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '18f510f7b3fad9e7f6aecd7d14fcb6a6b0b80e07', class: "p-1" }, h("div", { key: '64490cfcc5dc07753330339e90ecf298f2b053cc', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '50d01f8dda0110a998645ebd502ec3689cfe7926', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '2a7693edfa8d42b1a9441bb4cda265ea87e11f65' }, this.service.name), h("span", { key: 'dc1217628415422e311ed3ae56ff1aa3c8464f53', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '05d3e45bb098b531681d99c7589f2f82c14b67ab', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '8340166f97e271e5e38b59d9ce533ce8f306aee1' }, this.service.total_price)), h("div", { key: 'c888e78117ef0c35853a0142bcf91c143515995e' }, h("ir-label", { key: 'c2fe021c48fbe6a1ecae72534b81d6ed545c7185', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '2e6b4e5868766382daab1fb84bc159000d578ede', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
