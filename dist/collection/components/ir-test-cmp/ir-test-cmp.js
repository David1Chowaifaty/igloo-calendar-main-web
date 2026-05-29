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
        return (h(Host, { key: 'bd67e23f3de192e5c1499729ec76deab2c0d2484', class: 'p-2' }, h("ir-toasts-provider", { key: '424ff334df3894ce2bd809a8ca97e5ecd957d406' }), h("ir-drawer", { key: 'd026ceaed15f77499a589a52ec4bdb0bc03a8377', open: true }, h("div", { key: 'cf80237e4899578704b80e679a05cbe33080c2ea', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '96a0bf42a32d38fb303616cad075fd5885d80e1e', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '0e21579507c9c6ea6b5686e6cb550a81b33ae345', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '34ff409ccccb5a61d8971a135187b8f3a7014c8d', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'a6724ecee2250ca264f1133294271b4d24fdf584', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '1a52e99cf8213fb9778ed13ee66d88d6b4cc00a0', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
