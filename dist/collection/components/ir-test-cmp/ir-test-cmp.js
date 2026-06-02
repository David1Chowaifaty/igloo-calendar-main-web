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
        return (h(Host, { key: '4f76a37dbeb019158ad0e2e685fcc46dc2ab777c', class: 'p-2' }, h("ir-toasts-provider", { key: '9c3119c3468565a66911b816bb1dd5adcbca15c1' }), h("ir-drawer", { key: '12604039b9d8c052b9b209c4abf73489f52d12e3', open: true }, h("div", { key: '1c0ef89476f331817ba773a25b4d35cbbc5f1534', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'a551c1bb0fc13fda383c245a79f6e255ffa93494', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '373c449bd1beced608435429cca466c90443dda5', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'ec4106b0fbacff554ba68d4e70b3e76fe39e7d89', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'b42a6d8c3fe93560f41a519c020b78a722ade68c', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'a975b0218eaa72b52ef31e2689aca9763d70214f', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
