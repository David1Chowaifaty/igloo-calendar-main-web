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
        return (h(Host, { key: '9c035944be2bfca68ce415fe18ca366d665f6e80', class: 'p-2' }, h("ir-toasts-provider", { key: '3e92154670f46f8be748cd7cbb4dfdf258a01ce2' }), h("ir-drawer", { key: 'f232485d07979c8c5256f1bcee0bbc3bdef0bd09', open: true }, h("div", { key: '378695fa9c4c41b203eb607360a49a8c0805cdcc', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '4728f7f0929f8e2c50c250c01e7303fb9b4a032f', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '3b8afcf1e2936cea805e3a5025229d781ddaf737', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '7337d92eafc6704e0915665b784fed43c248eb99', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'eaeb06d24614d4569126a0b9d3ce04b1586483b0', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'db99e6dab23631ef181582700fa908f2336eec00', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
