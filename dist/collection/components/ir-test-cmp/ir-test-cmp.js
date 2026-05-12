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
        return (h(Host, { key: '2212930b5f0329a48f87bcac050396d1bcfffe80', class: 'p-2' }, h("ir-toasts-provider", { key: '1ef0838d26c20890ccea4ad8e32c0f1075e608a4' }), h("ir-drawer", { key: '169c6f124b009912600542ca3959046a64a6b8f4', open: true }, h("div", { key: '1b4f8fe7975ec9ac3e9872e905dd6ed4e499fc7c', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '7fc871c0e949ba2c0806ceb3540b649c497415fb', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '7467ba72178cc742cc59d47748037e8725b75e84', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '9c8dafd1ce3135285851351280f4362f6b6e45f0', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'c87a88241896bff6b28f3740bb8fe2f9678c9b59', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '4b817cbe3d14401334070450ede0dfaa2dca581b', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
