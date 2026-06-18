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
        return (h(Host, { key: 'ec03ed49a4d17056d5d5f1fcf484f37f5c534a1b', class: 'p-2' }, h("ir-toast-provider", { key: '68432601ef01afe6a1a9d919e7b929579db0fa4d' }), h("button", { key: '13bf356df262ef7cfe1720739215faffb36f95be', onClick: () => (this.open = true) }, "open"), h("button", { key: '6362474987bb3c996e2b56d470fe99afec2e131d', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '566d8f6411eebe46e9b7774a516c1779a52fd0f8', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: 'ad677bf393030b47ee3cb01a0a17c4d2e364d707', open: this.open }, h("div", { key: '4983f5dab477b08bbd12beb47a602326e33ac9fc', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '6c487a249323e9531d89f248bbe22fd2bea8bcaa', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '576c3a94799a91399ba1ce49f7d18c67ed558e81', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '0231cdf2f38bd2d5659a441d1034f315561fcca3', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '67d5afa32d6866718d973f4041a357d42af54227', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'f95f33db60cd7568c307510a3723c28bca440ac3', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'b3f6db48c5c0295ea864e8043893bfb5b48bfdc2', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
