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
        return (h(Host, { key: '448e4d5093b4d89f0ae56188e7e44d0f12a54c9f', class: 'p-2' }, h("ir-toasts-provider", { key: '8b7cc7d4aefce7d8457893a62b00b5f7a872988f' }), h("ir-drawer", { key: '98783e2093ff4b55f34bb5c1ae5047b65cc09e67', open: true }, h("div", { key: 'dea78c3c8624b7f422e95e9fa63240a05f9edd86', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '6d3e0b492d74cec8ed260b8053349666fd3d5a35', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '4e798fb79b224dc71c6556a089ccbe89c51e44e0', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'd5174286f152bb0e3b36c3e5d182b9ba927a5e4f', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '605d13ca8092b170ef74ea30c0f11ba35df6382c', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'c1f3ff1ffd48ea3d9c43450fdd533df6e82c2389', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
