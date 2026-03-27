import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '9625aeba8b180e1f4fdad5eb242ec2c857f4c09a', class: "p-1" }, h("div", { key: '9f1df8ca749aaab8f847fc894cb2b011eaa38e6a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '770be3809fff93e8b6abbe751b29f6ffca3b03ec', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '26cde1a9c4b368cd676148bbaa0a7e4792c0c7ff' }, this.service.name), h("span", { key: '5bd22662014764b6cbf79a4425487f40e34a1b2d', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f1f0000126b01d0318e9ea29208c069668c8f50a', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'f340dfbdd64ee5f2649683dbb829221d31a79777' }, this.service.total_price)), h("div", { key: 'ab6af8c47c17ea65a4bbd9c16e7ffcf1b51baf41' }, h("ir-label", { key: '150cc10fbac5ab7e76a5fd6f43c1a3d48dfc1aeb', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'c5401a1f3284639eb9155f3141067f97c7c30c38', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
