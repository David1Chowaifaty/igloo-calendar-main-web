import { Host, h } from "@stencil/core";
import { showToast } from "../../utils/utils";
export class IrTestCmp {
    el;
    ela;
    get provider() {
        return this.el.querySelector('ir-toast-provider');
    }
    toast(toast) {
        this.provider.addToast({ duration: 10000, ...toast });
    }
    open;
    render() {
        return (h(Host, { key: '57e9fc2c1a54db6b28b8c4a4dcf0e545f40d9434', class: 'p-2' }, h("ir-toast-provider", { key: 'a158a4b3b4702d4439cef410663f2c8b15b31a77' }), h("button", { key: '138814f7aa9d075f4aa55177a412c7d8b608f94f', onClick: () => (this.open = true) }, "open"), h("button", { key: '9521f829ffa9f45223a6ae5c78d4b2611f168231', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: '1aa9f20cec46657e7cfd7a6bc89150bd5cece983', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '4575aae853c71849ea6be14b21c27040cc061069', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '42fe4feedfc383a17cd88dff522be8b21365a95e', open: this.open }, h("div", { key: 'd2f6e8f3c01e7897dd0d482ee304ce5e82d8ccf1', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'eea7172a05ad18037bb1e294035ba0db36f55444', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '946fbc34e67502c91f2cc9bb133f9dcce0b9355d', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'dd89287a5211778441ede314f4a9c267c5085c02', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '3c6c15f83c6d3a519f182be0738764a11d73d72a', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'ca24f31da92ef54c3601e9cba1480525b941fb7b', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'e9fe2b0723efd31360beb510da6fdfd5f0f09a55', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '52c0225ce2eaabd9cfaafcbd53d82ba5e74ae58e', ref: el => (this.ela = el) })));
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
