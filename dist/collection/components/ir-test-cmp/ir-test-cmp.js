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
        return (h(Host, { key: '01ef24ca6cd21dd7ca433985f996f4c86c39ae98', class: 'p-2' }, h("ir-toasts-provider", { key: 'e03699ef8626974f2356bef49d31177aa569de07' }), h("ir-drawer", { key: 'cc36412d6e0a61e85e6258ac4a0f2afc2c7d3000', open: true }, h("div", { key: '1aa9e7e8c02c053886726462fa96ae4c95e2c3d0', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'd8ca0ed729cf7c0aa82669fd7f6787a99fc89bcb', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'bd8f72ca1c82d50a71c978e43270e5138aa195d6', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '9a74701f6abab0015ad7b32c3810913fc39ed803', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'db08683247e15f976eae7873b4443387098d72fc', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '64237984f35e170764dc1330da5976c2a3b0da0c', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
