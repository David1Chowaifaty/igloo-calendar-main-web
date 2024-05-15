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
        return (h(Host, { key: '2b796c403e645bcdfaa1b8e07a27c484fd5b3f41' }, h("ir-button", { key: '590a68a103534060a06c48d2ad18f67b310f6591', label: this.label, buttonStyles: { padding: '0' }, variants: "link", onButtonClick: () => this.dialogRef.openModal() }), h("ir-dialog", { key: 'ab747fbdbce2fb4e1672a57bab295d695a1a7ae7', ref: el => (this.dialogRef = el) }, h("div", { key: '14d50cb21eaec39fc849c791aeac93345502fc23', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-title" }, h("h1", { key: 'f5ec3185d8110f9d93f6ab1359d74e40acfb89b4', class: "mb-4 text-xl font-semibold text-[var(--gray-700,#344054)]" }, "Privacy and policy"), h("div", { key: '508570bd73bf63fa7e87df416d556b33084b05c6', class: "text-sm" }, h("p", { key: '716baa9cef39ad01b7fab98dcf81ba68228502c8', innerHTML: this.replaceStringByObjectValue((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.privacy_policy, {
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
