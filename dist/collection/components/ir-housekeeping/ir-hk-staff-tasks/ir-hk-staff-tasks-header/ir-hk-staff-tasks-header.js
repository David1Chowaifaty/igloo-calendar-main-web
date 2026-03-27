import { h } from "@stencil/core";
export class IrHkStaffTasksHeader {
    connectedHK;
    render() {
        return (h("header", { key: '4eae48d5f279b6f439c06c682df7df8061cb0775', class: "tasks-header" }, h("div", { key: '42234194ebfd760eb28babe877c53b09d2dca093', class: "tasks-header__inner" }, h("div", { key: '591a1b0db09b7f1abf2f2018c255959e5959af5e', class: "tasks-header__brand" }, h("img", { key: '815cb2e0c9e7b0428681eea6579a3f33cbe88577', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: '21c0196364f3afd64d4785cbf50f94a2226f1381', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: 'f143f220cb698fe5db6d6d2c11b4e976d3c03283', class: "tasks-header__actions" }, h("wa-select", { key: '21b28afe252ef16a71a9165c652657a5bd760e57', size: "small", defaultValue: 'en' }, h("wa-option", { key: 'c192258623daefe3ad139f23fabaff0c92dcc666', value: "en" }, "En"), h("wa-option", { key: '86302416d76bde930a15fc9e36c0af90910df841', value: "ar" }, "Ar"), h("wa-option", { key: '6c2fa72fabd886e5347517fb353b5e2deadc0fe5', value: "el" }, "El")), h("ir-custom-button", { key: 'cf2cf6112e0db0e5bdea5d1e700ea43b11b973cc', variant: "danger", appearance: "plain" }, h("wa-icon", { key: 'a1821eeca9a79180087f309acf46b0b625232341', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
    static get is() { return "ir-hk-staff-tasks-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-staff-tasks-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-staff-tasks-header.css"]
        };
    }
    static get properties() {
        return {
            "connectedHK": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ConnectedHK",
                    "resolved": "ConnectedHK",
                    "references": {
                        "ConnectedHK": {
                            "location": "import",
                            "path": "@/services/housekeeping.service",
                            "id": "src/services/housekeeping.service.ts::ConnectedHK"
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
//# sourceMappingURL=ir-hk-staff-tasks-header.js.map
