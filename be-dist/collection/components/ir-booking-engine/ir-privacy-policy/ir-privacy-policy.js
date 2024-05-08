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
        return (h(Host, { key: '9153c6bab45d5952bdc1c9d537648da8e1680453' }, h("ir-button", { key: '157258bb6ab230fd44e36556ad568370bfd7cac5', label: this.label, buttonStyles: { padding: '0' }, variants: "link", onButtonClick: () => this.dialogRef.openModal() }), h("ir-dialog", { key: '552a07ec0d068968b7e56a0dfdebb22c19d4ea79', ref: el => (this.dialogRef = el) }, h("div", { key: 'c4838f4de43a8a2bc9c9bfaee303fd97da78ecf2', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-title" }, h("h1", { key: 'd46ff50d0726981c031baaef8bb1f73645d941f8', class: "mb-4 text-xl font-semibold text-[var(--gray-700,#344054)]" }, "Privacy and policy"), h("div", { key: 'dc46411021cbd7f20dc5f8d0d2d7fbb8c9a9b2a6', class: "text-sm" }, h("p", { key: '881a9784005b524701a93ddecb89f02ed67ffda2', innerHTML: this.replaceStringByObjectValue((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.privacy_policy, {
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
