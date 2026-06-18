import { Host, h } from "@stencil/core";
import { showToast } from "../../utils/utils";
export class IrTestCmp {
    el;
    get provider() {
        return this.el.querySelector('ir-toast-provider');
    }
    toast(toast) {
        this.provider.addToast({ duration: 10000, ...toast });
    }
    open;
    render() {
        return (h(Host, { key: '934d4310a5daff4d8bf75a67d0edd909129c346d', class: 'p-2' }, h("ir-toast-provider", { key: 'e8e40b0dd5a3f5533d734ad609f52d4e82108d3b' }), h("button", { key: '7941373654c597db507e0c7879fa23f7ef5d1ec8', onClick: () => (this.open = true) }, "open"), h("button", { key: '9fd77f490b20622d2ffba721a47f8d5ccb04b05f', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '97e24f6c8a72f5f7148aea60ddb3b998e6ac185f', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: 'b4bf3487df19458b1ca9c8b257ad36f1d533f418', open: this.open }, h("div", { key: 'c36b6b0cbd803ed0bf357353aa9d760416c52f41', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '73924943c1b9e6736d5a3ca607ff88a2a2f28e39', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '116e741b836ff92c494a7656e63e70173246158d', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '9d3fcb60672812de9a28c4d44693b0705fc53c00', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '24c27d2c10e904f845c073f3ed0713b91e6e45fb', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '54d12200d6e778a8aff8a79aad189f2f061ec336', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'ff0c1dc4af9177dff041cdf9662ff883254da459', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
    static get states() {
        return {
            "open": {}
        };
    }
    static get elementRef() { return "el"; }
}
