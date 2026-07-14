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
        return (h(Host, { key: '51ae3eef71f30df7283554a3103876b6e140f90e', class: 'p-2' }, h("ir-toast-provider", { key: '0eab532046884bfcc9cc46ef4e8b108b5ee82899' }), h("button", { key: 'bc8de9ec2baa31af57071006dbd6bf2a60b6f6fc', onClick: () => (this.open = true) }, "open"), h("button", { key: '732af15ae38842d53e26c914babbd3e6b5335e15', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: 'bbb78f52e5f4f9a813acd254df21255aea032cfc', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '8db6f745b46a04f2b2e78fc69599d2a1cdfba6ff', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '3bd25b6a5e2dc6f11ed1cd286b9c06ca1d10bb2c', open: this.open }, h("div", { key: '064903689ed585a60a2b2c5ccbf66dde1e49cd7b', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '51ad06fe8f59f14619613a62fcfca96e3b8d43da', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '5748fef69d65b23559388fe9fcb828ac069690df', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'd5230954a2aacece1c1c9865dd03d9a8d287bfc3', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '39cca351835a16920f668d27322d0c8816b3415e', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '24f72b5b95f67f356766e10c8c9b83c81083d535', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'bb2378d8f1d89b41e19250c1937eedad0e7316b7', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: 'a45bae1dd35549f585326fc9629e1a5b2bb48b37', ref: el => (this.ela = el) })));
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
