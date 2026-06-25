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
        return (h("header", { key: '67ffc9921fb7baf97c611661b29aa53cf6d9319b', class: "tasks-header" }, h("div", { key: 'ac87e14dc32104a8c760368cd449ae9c3807d33d', class: "tasks-header__inner" }, h("div", { key: '68629bf96cc5e1cee39bf134ae636345624bf773', class: "tasks-header__brand" }, h("img", { key: '58a522ca0c201bd46a6040ce271a7bc42935e4d7', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: 'eafdc96ed3e3b14832d0c962537e9271b2493800', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: '89627af151ca436ace43ec163dea10b8d07b5f95', class: "tasks-header__actions" }, h("wa-select", { key: '38c3ec86fbb933ed86d77efaaf8e127a29a7456a', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "s" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: 'e2246215818d98f38499eac045ed743c1373cc77', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: 'a1ddfff3ca9a9aa48c7f23788bb75688a15fec90', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
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
