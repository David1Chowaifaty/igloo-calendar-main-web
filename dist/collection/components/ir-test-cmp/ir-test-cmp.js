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
        return (h(Host, { key: 'e97a9e7d47bad6d10ca29554c0f9174cda46eccd', class: 'p-2' }, h("ir-toasts-provider", { key: 'c98f7a3399b0c852b0e1aa05e6a831e3da9b55ce' }), h("ir-drawer", { key: 'e53bea2c2e1f949eb1a44eae8e41139d1c7a54b0', open: true }, h("div", { key: 'a0e560036384b4ac6e541e0597b846198c44fa37', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '5b0446cec735f954fd51346c1a85871f0d90aa27', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '49d049b1f6d04b29382868905daac6938d62e8d3', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '569992d241db346158540e5d68ae615f604ba537', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '9a6e440099daaeb13e80cc7b375dbfc3403a0c37', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '7cdbc9d6436db43780e62668d9c88cbf1f461d2d', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
