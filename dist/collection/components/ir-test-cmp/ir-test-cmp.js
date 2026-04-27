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
        return (h(Host, { key: 'eaf62917d678f97cb96aaa6ad44dea2479161757', class: 'p-2' }, h("ir-toasts-provider", { key: '8ab1c9b43fac71679f1012a67239331e599c014f' }), h("ir-drawer", { key: 'fcdca3132b71a27001f130a72cdd59f99d7de4e5', open: true }, h("div", { key: '4648d6477673dfdb0bb9d6b7ce81ba0d247b25a2', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'df6dfd238280f67107a11b30dbcc70883cf83fe9', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '4c59ec30d48edada461a0fdbbfec16c7ac7f729d', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '23ccfba654140d3419c30018ec21209266a28e9e', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'c8f73df6461ce582f1def809548ab9391b383e68', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '964ade6b8af45dde9bf800edcc0498d971f3d195', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
