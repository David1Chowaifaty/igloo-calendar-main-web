import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '9aaf6aa607dab05c7696f1cfa818158dc9972be6', class: "p-1" }, h("div", { key: '3375dadfdf5ba80adb1b8d25b95561704a4aaec9', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '000c4ead7506ac57156454fd9d7dcf5050d8a4d1', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '173eab33dcaa985628f4128ae6bff5ae7b90d7a8' }, this.service.name), h("span", { key: '78f8ae2c1ba804d001a1cca89c8d64134fd3c99c', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '4e8eef100ce3e4c5e3c1eb4583b8c123b7b761b2', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '468e84da11a5e5337d7dc11ca343b4ebd61023c7' }, this.service.total_price)), h("div", { key: '56be2abad28827cd74d0073ff3ee329fae43f88d' }, h("ir-label", { key: '6474f7d6d9122cd105b6de27f7f51df2cb074481', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '97708c0be1277e0ba750176a26fa6ce8b224e48c', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
