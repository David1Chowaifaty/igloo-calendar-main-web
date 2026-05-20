import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '03b2f160adcb86463e3db6472dbf3394b0d40869', class: "p-1" }, h("div", { key: 'f081feda289b4f6bb156f8247eaa68fcf8c2e642', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'f07c86dca2bbc88c7c715d49543b71e6c4ab793b', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e08f9aa14a5ca09faac4bea00af6226068ab4fab' }, this.service.name), h("span", { key: '860c58eae9a46278bbb96a54a9566518287a711e', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '357393a7adc941f7f1bfe17a19584d762ee8b40b', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '624824a90b6d154f4a0b66f505b1070c735b22a5' }, this.service.total_price)), h("div", { key: 'c4a6a5d2f234fcae5edd692d2b54ffa4c8147aea' }, h("ir-label", { key: '3d94467fdc718359d10bc013540f653674217fee', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'e02c16fa283c03ba75563a88557260621b5345e3', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
