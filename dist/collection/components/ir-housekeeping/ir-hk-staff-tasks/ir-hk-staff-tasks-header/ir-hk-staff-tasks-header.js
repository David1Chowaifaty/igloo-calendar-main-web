import { h } from "@stencil/core";
const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'EN' },
    { value: 'ar', label: 'AR' },
    { value: 'el', label: 'EL' },
];
export class IrHkStaffTasksHeader {
    connectedHK;
    language = 'en';
    languageChanged;
    handleWaChange = (e) => {
        const lang = e.target.value;
        this.languageChanged.emit(lang);
    };
    render() {
        return (h("header", { key: 'f0c73ccefde0b893607e84fde504a8897d22344f', class: "tasks-header" }, h("div", { key: '0149cb22affa3efbb944c1892da5b8bf3d01766e', class: "tasks-header__inner" }, h("div", { key: '62dd67f9c3d45d21e33a865310f222d9ec78b308', class: "tasks-header__brand" }, h("img", { key: '5575d31d3a6f5b0074c880d70d8f7fae5dcbfe70', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: '5d854004b4026dc040e7d2341f47f82d94db8900', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: '046e9c112f3c5f30f72b1386ee48a7c10ec0adc4', class: "tasks-header__actions" }, h("wa-select", { key: 'f8a0f2da83e65f59972a6df9535b4a33ce15462d', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "small" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: 'e36f1e2e59293afc030c05f6b629c7985fd6498b', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: 'd5908dbc2497c6378093eaf336639fe133e1373e', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
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
                            "id": "src/services/housekeeping.service.ts::ConnectedHK",
                            "referenceLocation": "ConnectedHK"
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
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            }
        };
    }
    static get events() {
        return [{
                "method": "languageChanged",
                "name": "languageChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
