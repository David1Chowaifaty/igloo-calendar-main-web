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
        return (h(Host, { key: '30a41b3e98b2310ce6867935e51970fce107857f', class: 'p-2' }, h("ir-toasts-provider", { key: '51ac1a2af83a04d59f17f570831fbeff873fc32a' }), h("ir-drawer", { key: 'e087ff7978c99f0ef3098d9e49a62919582f2a8c', open: true }, h("div", { key: 'ba457ce52acb92712b9ccf37bb36b957cbea1c2f', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'e859117ecbea331b48cd8f7b6c41ea038e854d34', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '07781611345cfd53d37f71f9a368222e16dbe488', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '31126c8cc5fc5449670fa3c46ff83e989ff62c45', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '8a3a1f24f7644c20d5db8d311270206faec3ea7e', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'eb0dc779fc4568f2abc706a0404d45ed635159a6', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
