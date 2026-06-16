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
        return (h(Host, { key: 'e38746332bdaaff59c8e478914c06e25502380be', class: 'p-2' }, h("ir-toast-provider", { key: '634d87748f4cce7d0351df018ae8852e0f7bdf85' }), h("button", { key: 'a4e8ad6f5d66808981088be9130483680666c661', onClick: () => (this.open = true) }, "open"), h("button", { key: 'e52f138c4c92c39b725c9430684762865b8590d8', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '608ef81f70bfb8aa2694b4ba182b7654f18a4708', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: 'e98ae001db64c807a270e932fba122cfd4be88f9', open: this.open }, h("div", { key: 'aaabd519f748f4b56c743e4d1ea97b4aec57fbb5', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '687a766a0b60102c96812cc03da2c2c9a938461f', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '65a08a9b9be68aea96ed2f8f65b6a62d984c5fd8', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '9afe68af553f0f2e00e33e9936ab1a55f3ee2c0e', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '75c2e68f4bc0d38e09cb93fa5878298983b5e3ce', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '8e266f74772072ca8e836fc45c2d0e51e539f82e', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'f5b6018f157d734ab41612fef7819b9866940868', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
