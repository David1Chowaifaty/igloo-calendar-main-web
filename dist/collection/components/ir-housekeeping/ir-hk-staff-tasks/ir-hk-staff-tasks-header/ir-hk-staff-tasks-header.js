import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
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
        return (h("header", { key: '2d470d7591704632de6cd3ba7497339ba22bfe1b', class: "tasks-header" }, h("div", { key: '83ab32869225c3fbcc26d8c1fa44bb11301df629', class: "tasks-header__inner" }, h("div", { key: 'c35ae74ecf2e166ddefcef99d0bebc584740e6d4', class: "tasks-header__brand" }, h("img", { key: 'a44c46d23d488f925f56c423a4bcce2711bef052', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_IglooRoomsLogo', { fallback: 'IglooRooms logo' }) }), h("span", { key: 'd3c642d87bcd5a4ff6f1ab103525ac3daecbb159', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: 'c9cdccb2b5fb4f4b143f183181e6c75225dac410', class: "tasks-header__actions" }, h("wa-select", { key: 'ae23db5d5efcc51559bf22279d0811bada315087', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "s" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: 'c40b7a781f5c3e5c30ab1f628450f5d50d1d504c', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: '788a1fa9737eab6c81746e3697d775c18765430e', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
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
                            "path": "@/services/housekeeping",
                            "id": "src/services/housekeeping/index.ts::ConnectedHK",
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
