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
        return (h(Host, { key: '9722a439edaf66a0fb2974321fd78f36437091e9', class: 'p-2' }, h("ir-toasts-provider", { key: 'cf2e9d074f707861acd2e30ebfe10e95d6be4037' }), h("ir-drawer", { key: 'f4512adb793d64bb4f01f3c6c796527e58c2347e', open: true }, h("div", { key: '8f4e7ddf4d37bb46adcdbcf76c27d1a7d7e3fbb2', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '3327c5ed1a88bea53f8ecc9ccc80cd4ec49ed7c9', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'ee72d3985978243fce0552af5d58d8e86cb34175', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '385b174221169cc7c2a7059d30d778c331b20acc', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'f5402fbb01a92a1ed86cbb9b6316e8820c22aee6', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'a6d862a81dc303afc198ac78d0ebb1df40559931', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
