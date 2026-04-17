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
        return (h(Host, { key: '13e2517869ba92270399a053b7a48e982f448971', class: 'p-2' }, h("ir-toasts-provider", { key: 'ddb6502f00097eb01428813db7ef3c89bf8e4730' }), h("ir-drawer", { key: 'a2786c81ed348c2a0624ff117bc84ad4c0cfa134', open: true }, h("div", { key: '03abb34b0d9ca9493432e80b7f93faaeb1f093ed', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '791b4bfc74d569c54ef9c916dcaac986ebfb16f9', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'c138d2f18611612b1c6b69043e6ccdac6020eb7f', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'ba02b274821d1fa892324899ac9e10ed37b50ddc', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '5febf09875d21a86908f94d9cd20e0d6a2fd73a4', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'af00b3e044f7328d57db036ac4d98d62b2100f24', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
