import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '7d6526c3bb954e80efd3f006123983ac89f65b24', class: "p-1" }, h("div", { key: '9f2d72b2fd441dc3a32b3e2b03685202090753a1', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '7fd934bcf90ef36245ee7a0717e480d45457a8b5', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '2c43c380eecaad816a334e048e0def7841ac9c53' }, this.service.name), h("span", { key: 'd76073116e70567d57fda7af57fa444be101918a', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '1b1a70801aa8885f1f0beeec8ed15b5e3482fd7b', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '1073336be523611d332130eb8a948db3009cd693' }, this.service.total_price)), h("div", { key: '1cbc641719caf808b237c7f742009fa612e21db4' }, h("ir-label", { key: 'd4de46d9566a37b42526d8b00bd2f2ba49538b37', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'dd9af6c823f2331e565095aee051d58da6c91291', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
