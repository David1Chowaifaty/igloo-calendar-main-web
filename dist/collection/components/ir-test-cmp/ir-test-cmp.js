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
        return (h(Host, { key: '0abe123b148e38ec0dd3609302314de2cec347ec', class: 'p-2' }, h("ir-toasts-provider", { key: 'd82dffa0f252dfd2cd62cc48fa35ac1b76e8502b' }), h("ir-drawer", { key: '55191ad56923b8bd5a2ca15e8795c7f554bef843', open: true }, h("div", { key: '51f4da56c2ec6b73571df73c96e3a8a5880dcffb', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '8be760910acf8aee853fd8facbe2d75ad6bb20be', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'ef5bac05346159354c6fff8626f6715efff3b591', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '6271b7f905dec9090f5eb3844fed138d433dd9f7', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'd5b291fa986890e28196abc7ddae21baf05dda91', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'c1559104395623d4e4fb8220219d78fe7eaf74dd', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
