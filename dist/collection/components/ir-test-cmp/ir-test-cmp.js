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
        return (h(Host, { key: 'fd043136fd83160c0579979b045bf4a77f559736', class: 'p-2' }, h("ir-toasts-provider", { key: 'cf5e4c45d9a27171ffd6445efc3f308f23d9c270' }), h("ir-drawer", { key: '1947aae76018e7e45a06bb5ab1088b2508868aa5', open: true }, h("div", { key: 'f4f343fc1968eb315b4dac3eed7aacbae8ed3f74', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '784e5bdb9c3ee328e3812de78eac2802d00d769d', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'f9a7da2d7c2ceaf04d1ee0848171233c382ff89b', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '6525a06e48cbe55aa3b263c7533e889775b95134', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '53953f7585f8e7600c71a6e371d6895b9332e9ea', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '5fc635101a26c430904cf930b5a0fba7cf1dc9c5', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
