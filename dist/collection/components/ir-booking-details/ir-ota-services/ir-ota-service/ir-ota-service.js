import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '0aee747776603ac37c67c35c3a461d688ff8c282', class: "p-1" }, h("div", { key: 'd89561a6146dd093a3b3004a8b2e1b5abeee5051', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '05ddb14cd5cac21e321d0118fecf02ac61d1d75e', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '66c55cca5a1b01a0e2b20845c32298003af2d874' }, this.service.name), h("span", { key: 'e04bd571444389b62e378a280acb5296bb522b80', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd597c006efc34780b986f7d556b6cb87ef2f2021', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '38e22c22c43e71981620ae0ad25334b4d833ac91' }, this.service.total_price)), h("div", { key: '4e857d75b7d706226511a521ee03c4ba2b8f25cf' }, h("ir-label", { key: 'cb1521f126a02e4d145004394ae6b765274d582d', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'ec55326acb45431f058a89457b0c58ff85e41d0b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
