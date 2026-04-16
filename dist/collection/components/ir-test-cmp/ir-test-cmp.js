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
        return (h(Host, { key: '964a637058602fef0ada555712e7dd200d83e1f7', class: 'p-2' }, h("ir-toasts-provider", { key: 'b1b6b75bacc7690f1b1d7864602cabca7c94c903' }), h("ir-drawer", { key: '1169fe32fe03cca8763a8f8a3a416c59cbc7fa9b', open: true }, h("div", { key: '5bdc4a3f3bfb7fcfaae17f482155b3fa4cd9a9d7', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '484f0dc66c3fb4cb95eb6a9bd9438cd071882ce0', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'ad2393ecefaf714f456c318b6d1357c88dc7b328', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '51d3cfd734a13fdf104c249783d4d962270fd888', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '6cb297259bd8b0fd543d3bc89774024b7fabc75a', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '3ac87999ac41a761551dc1f3857eef1fe021fd47', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
