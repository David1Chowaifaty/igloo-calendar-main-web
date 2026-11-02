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
        return (h("header", { key: '94da1befdd9b611b5795ac14a5dd91030f835883', class: "tasks-header" }, h("div", { key: 'e705629282d326f9aef23de0b1765a89ecc039d1', class: "tasks-header__inner" }, h("div", { key: '60294e2b296162cb82d1c4c021c1eafd7693a616', class: "tasks-header__brand" }, h("img", { key: '31d94ceb53f4877fd02a125e547a031517e4a330', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_IglooRoomsLogo', { fallback: 'IglooRooms logo' }) }), h("span", { key: '98136ab54777e394a6519912db069ead8628c465', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: '5ccab755dc0e720a8a4660c1f0ee01690626c471', class: "tasks-header__actions" }, h("wa-select", { key: 'c49ea6d0576c69e5b170a0cdfbfc6dcce9cee038', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "s" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: '09fecf0318fb47503521f7c408767fce63ea2a2e', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: '8597d3ca6ce66cc80990f2fee4cbaf86b49c54d4', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
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
