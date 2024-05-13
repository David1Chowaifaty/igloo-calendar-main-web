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
        return (h(Host, { key: '45ef188e4f6caf1c447353cb8cb5e6eeeb14e452' }, h("ir-button", { key: '4f75828f8e9a07f1fa865590fa5c2d03afa7efdd', label: this.label, buttonStyles: { padding: '0' }, variants: "link", onButtonClick: () => this.dialogRef.openModal() }), h("ir-dialog", { key: '780218efd158b2d30aa35a0e390fa7639903ee15', ref: el => (this.dialogRef = el) }, h("div", { key: 'e6f32e78c81434874543464c1b31397967c440b7', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-title" }, h("h1", { key: '140215b351fb685f71c4f671cf6207d23f552ac5', class: "mb-4 text-xl font-semibold text-[var(--gray-700,#344054)]" }, "Privacy and policy"), h("div", { key: '0a138d67284ded5e6e7c066aeb8cc72f251216ce', class: "text-sm" }, h("p", { key: 'cf416a1589b3b7b5f7d6cc29e6fe0aac9392e63e', innerHTML: this.replaceStringByObjectValue((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.privacy_policy, {
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
