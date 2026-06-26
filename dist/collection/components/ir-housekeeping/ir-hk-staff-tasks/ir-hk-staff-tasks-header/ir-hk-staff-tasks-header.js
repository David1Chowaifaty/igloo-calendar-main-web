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
        return (h("header", { key: 'f0c6729b470ada06a4e2f2e9589d816fd57f06ed', class: "tasks-header" }, h("div", { key: '669f1f2fd813d480a9722df9990735e205145f27', class: "tasks-header__inner" }, h("div", { key: '33a01244c83596861ca33dcdeda8aaef09260d71', class: "tasks-header__brand" }, h("img", { key: '9d2cc83d0f914625121251acdca4737aeb19f6e9', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: 'fe875a89cd6cff350397ecc0d218ebb27f89c18b', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: 'a70913f0dfa7799f3b8c0c4301f478d23f6ee94e', class: "tasks-header__actions" }, h("wa-select", { key: 'db8657636f7ba58b33f76bc9860846bb6860a52c', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "s" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: '0aa7afd9ac38b37a7c78e24443982a02263250c5', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: '4481cf028bda065ff5d6c41f4efa7f2f20b09b7a', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
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
