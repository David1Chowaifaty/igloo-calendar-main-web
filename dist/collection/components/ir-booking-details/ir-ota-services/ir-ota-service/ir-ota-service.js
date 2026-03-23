import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '5bf8205a1c6a34d5783ea80c0745da363e506156', class: "p-1" }, h("div", { key: 'b868f9677d74c1d6c6b3154ef1e37068b718a82e', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'e6959584391a969f300c0d0f7733cd0bc0c35fee', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'edd86ada73b47b5c58877cecb2cdc3bed4203c6a' }, this.service.name), h("span", { key: 'ad40c3e5ba2ca8f1706e39588d523832061fee71', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'edba1cf941c094cf42f2f5e74dd1cc1cb0f7d58b', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '6fb18a96546408a09aa01eaa302c040a93b58d48' }, this.service.total_price)), h("div", { key: 'a632d98645abd6e76720ac39528a3210c8c5a281' }, h("ir-label", { key: '4df180f3c68f1871e46d4e64892fef6737d79a37', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '248432460951a2638ef7b89b1f2b362d7859e96a', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
