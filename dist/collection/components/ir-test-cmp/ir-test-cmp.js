import { Host, h } from "@stencil/core";
export class IrTestCmp {
    el;
    get provider() {
        return this.el.querySelector('ir-toasts-provider');
    }
    toast(variant, message, icon) {
        this.provider.create(message, { variant: variant, icon });
    }
    render() {
        return (h(Host, { key: 'd35bf0fc65423fda1e6628049fd7a26f236bd722', class: 'p-2' }, h("ir-toasts-provider", { key: '79d95773adcdce98029e945361bb78490a3cc751' }), h("ir-drawer", { key: '4b648822cf3bb0ff92aa09344c9d40a25bb5b4d7', open: true }, h("div", { key: '0571a93691367325aca45b660f598516b7f0bb16', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '3d068a283170d3bc7779b811f8cbf5e60b865329', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '88f2fc2eadcf7d6ed2a3481fe50a1f0bdf174835', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'fda9b6d29add5dddcdeca6fe9a8c3d97a57a746e', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'cb7978b0b92d63efb1d5cf4e21ac57bd6f4bab04', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'a6381b1249b84f64ef5a56119bfac4791ed44888', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
    }
    static get is() { return "ir-test-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-test-cmp.js.map
