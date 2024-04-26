import app_store from "../../../stores/app.store";
import { Host, h } from "@stencil/core";
export class IrPrivacyPolicy {
    render() {
        var _a;
        return (h(Host, { key: 'fba11db732fa07171a0a09e4941486fa8e3f5267' }, h("ir-button", { key: '759f0d305f8829a980be4ddb473d105e0b3f50ef', label: "privacy policy", buttonStyles: { padding: '0' }, variants: "link", onButtonClick: () => this.dialogRef.openModal() }), h("ir-dialog", { key: '5b416437026dc3ba5b3034d633cd711b1434b95e', ref: el => (this.dialogRef = el) }, h("div", { key: '5f02e4e82e259c575a255f1469351816a817ff7f', class: "p-4 max-h-[83vh] text-[var(--gray-600,#475467)]  overflow-y-auto md:p-6", slot: "modal-title" }, h("h1", { key: '0379bdb39c898662c8e5875e1d0436ad83c1741a', class: "mb-4 text-xl text-[var(--gray-700,#344054)] font-semibold" }, "Privacy and policy"), h("div", { key: 'afa7a344ba4e59adfac699c6c1f3e4b50859c810', class: "text-sm" }, h("p", { key: '95e175b6e17a277d59caf79504d11ad162277aa3', innerHTML: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.privacy_policy }))))));
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
