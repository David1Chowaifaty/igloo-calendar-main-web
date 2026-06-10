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
        return (h(Host, { key: '014c9ca98b6d528c9f1820c780abdcdd5fb34402', class: 'p-2' }, h("ir-toasts-provider", { key: 'afcbffe500a8a399ac8ae54f4a321d70f8f3029d' }), h("ir-drawer", { key: 'e4f826775cdfa803c2adb75774976810a3acb3f2', open: true }, h("div", { key: 'a95e81b03b4be95a82096b71b08c7930850255d9', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'b532b8a6f281448296fe8fce9494cf827ba78981', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'd312c5d486baf0a884f8a6f496c5de3e49e2b4bd', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '5c6b784a79e9448783c58c6630d66c9b7ee1a0f9', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '737eda437175f2aed481f97e3efb018cc559a434', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '9744d5846513727751611b53ea70191f289e3f66', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
