import app_store from "../../../stores/app.store";
import { Host, h } from "@stencil/core";
export class IrPrivacyPolicy {
    constructor() {
        this.label = 'privacy policy';
    }
    replaceStringByObjectValue(input, replacements) {
        if (!input) {
            return '';
        }
        for (const [key, value] of Object.entries(replacements)) {
            const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            input = input.replace(new RegExp(escapedKey, 'g'), value);
        }
        return input;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h(Host, { key: '0d7c6396e697654de6a0011188d7d7ce2339ebe7' }, h("ir-button", { key: 'e3d4228cc7ab7b38ea18b2d35bc8363e4185727e', label: this.label, buttonStyles: { padding: '0' }, variants: "link", onButtonClick: () => this.dialogRef.openModal() }), h("ir-dialog", { key: 'c2050a09fc9cc669d7d75d91a8e528e18b4a2abd', ref: el => (this.dialogRef = el) }, h("div", { key: '25c02794954ff4ad4170e06bc6d72159cc25c470', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-title" }, h("h1", { key: '4d7b80e3edaeb8430528c497556901ff131a175b', class: "mb-4 text-xl font-semibold text-[var(--gray-700,#344054)]" }, "Privacy and policy"), h("div", { key: '3fbbb6c55745932b53260d0e06a2471ee3402f28', class: "text-sm" }, h("p", { key: '2923d3d39ca6943b486fa4d96311adfe9179e457', innerHTML: this.replaceStringByObjectValue((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.privacy_policy, {
                '[AC_NAME]': (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name,
                '[URL]': (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.space_theme.website,
                '[ADDRESS]': (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.address,
                '[AREA]': (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area,
                '[LEVEL2]': (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.city.name,
                '[COUNTRY]': (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.country.name,
            }) }))))));
    }
    static get is() { return "ir-privacy-policy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-privacy-policy.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-privacy-policy.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'privacy policy'"
            }
        };
    }
}
//# sourceMappingURL=ir-privacy-policy.js.map
