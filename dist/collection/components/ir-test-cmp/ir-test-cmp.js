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
        return (h(Host, { key: '3320378dd472f570a8b58c44d6ef9a35e98951e3', class: 'p-2' }, h("ir-toasts-provider", { key: 'b8cb8db4bf28d889573f3de1e2e2755d1dd0a21b' }), h("ir-drawer", { key: '82c444cd1e3756fd9276e0cba9831549e0181078', open: true }, h("div", { key: 'f6b4a8cab55ea2f835f608b232306ea1a93abb0b', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'c996c68a2a150ad404f12f93a5f3458562243dab', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '91dfcf0879679b40d9024f94347e0c51e412a4f0', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '85b86f165e93ee1e601cf83dd502c20cb368e0ba', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '2011b2b929e60f6d865d4c8dde016a63fe3f0c3e', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '82b576fdc80eea1f01121030aae43ba3ce6d0005', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
