import app_store from "../../stores/app.store";
import { Host, h } from "@stencil/core";
export class IrPrivacyPolicy {
    render() {
        return (h(Host, { key: '76c2be1654eabbca3e71fa889e1cf465fc384a23' }, h("ir-button", { key: '01a05a995b5110efa18e8f222a94a32a77d35a92', label: "privacy policy", variants: "link", onButtonClick: () => this.dialogRef.openModal() }), h("ir-dialog", { key: '53342d07cd70bb9019b41d5019085e5ab997a771', ref: el => (this.dialogRef = el) }, h("h1", { key: 'dd3f61461e3efd11a003f89135c291e7530794ff', slot: "modal-title", class: " px-4 pt-4 md:px-6 md:pt-6 text-xl font-semibold" }, "Privacy and policy"), h("div", { key: '85526e6285f2a24aba98c108cb375f2794b23f9e', class: "max-h-[90vh] p-4 md:p-6 md:pb-6", slot: "modal-body" }, h("p", { key: '6aeefd6e0628d6559b786d71a8ceddc6dfe03083', innerHTML: app_store.property.privacy_policy })))));
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
}
//# sourceMappingURL=ir-privacy-policy.js.map
