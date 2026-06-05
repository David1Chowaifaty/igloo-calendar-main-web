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
        return (h(Host, { key: '3f73ae81cf6798fe04e19e5fb530b2da7b5c8fb0', class: 'p-2' }, h("ir-toasts-provider", { key: '5e77a105c91ef659d6c6d7fbfdc86f09f4b20330' }), h("ir-drawer", { key: '1668e3f45c8917debc33cbcf3288367bea379987', open: true }, h("div", { key: '456461d7764916ac0fb568b4394400af85939f1d', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '8762e7713f790a6c319444915d12d4d4217f3fab', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'dd9a708160e7f3c302df3cca15c8211606c7d57b', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'a314e2bec196c4580473a30078a52cd6354b6276', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'd10434d793a29be284dc9ee818926d0c45a87005', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '0afec4de247f2045f398c02282a0bdb0181844d1', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
