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
        return (h(Host, { key: 'eef624ab464fd8f6100a4a993d7bb2e1c0db9638', class: 'p-2' }, h("ir-toast-provider", { key: '97c0115fd732e2b44c0979a67c9cebe08a134f3a' }), h("button", { key: '9b635d4f75256a88981f51a403af1a34a684716a', onClick: () => (this.open = true) }, "open"), h("button", { key: 'c0644b2c6cdc9046153446f35e61ebdaec2cee8f', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: '7406adbd71df6d848625246bbb89fdbec1d05de4', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: 'c8b11d5b28a0d33ff1c25cdc1d8374ade547bad5', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '2e48057662d6138e7ddfccb58446878d74f47de0', open: this.open }, h("div", { key: '3bd5474e12058a8007fe4a3cf6c44c69715ba6dd', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '384892d0cc3d07c021603dd7193908c588dd047f', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '1b3a89b6bbdc28bfd2de9342fc2ceb9e71f2cf07', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'f759a6b49786cdf3322e4aff5a7e17acd63095b4', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'c65d0a271b611c21a0c3613568d4f104631cdf7f', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '27deb8b3c4916c6f74832034b83936017a763d67', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'd3d7638717a4a0712eb6a1bb49cf562d605f0bd8', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '5ad4d24ea68d82f787b6e6fae6c2ec07583654af', ref: el => (this.ela = el) })));
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
