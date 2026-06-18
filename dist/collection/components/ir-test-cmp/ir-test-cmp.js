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
        return (h(Host, { key: '63b922ffa8914bf4402eca40c090126c738af893', class: 'p-2' }, h("ir-toast-provider", { key: 'c3d946382b1255b1c4dba2d6dfd5a456e3787125' }), h("button", { key: 'f67b5b6c2333b9f702c49045d27eec2e1f9352f8', onClick: () => (this.open = true) }, "open"), h("button", { key: '3098fe0a1f7aca8b3e21fba9c3698362e0e74dbc', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: 'cba8ca8a4753080451a2d4c9c4f3f33626c0e93f', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: 'fc195e3d3556dc5319c30b2f210ff7589e487744', open: this.open }, h("div", { key: 'ba9b9674d120f9df5c8b70387cd0013dac252d2b', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '8e7721132dd617c6622a96e46c2be500dfddccf1', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '5594f569b26a45d7a1ca8ea8c213bf1f4e7c080b', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'c673f00a106806ea04d0a0afde613d790bc6ffc0', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '0022c402dda4f59d7500dedece9be5180746d99a', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '3f07c8195b40efce91e672a62b2f61593ff8b13b', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '6c6410c2f81b571c4501d9faf39c7ebb8c8792f0', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
