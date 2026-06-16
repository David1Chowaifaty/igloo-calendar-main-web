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
        return (h(Host, { key: '41e781eeddaa39125e5154cf6d3169d97b4a7218', class: 'p-2' }, h("ir-toast-provider", { key: '4a883147fc2ca301feea95b59bf34a3c778321ab' }), h("button", { key: 'c041b72601919a11a9e1bccdcf48b41d410a3129', onClick: () => (this.open = true) }, "open"), h("button", { key: '9742dc60ecfaafc9525526e4783bbaf9e25ca67d', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '4914172a1f7da194f19196420cd5eb08e01ed3df', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: 'a354efaed23b9e1b1afe06479c24b7d6ba5194f6', open: this.open }, h("div", { key: '891b7c27d0b8ad17610c2a7f90c103b3b8ce073a', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '556cc59d057fd0fecb1d20c1a1fb882d7c61d62c', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: 'c64670d228544f59c5c81ce417378213e6c19189', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '740a7ec7fe06820f3e06a3a9cd86445ab10432a5', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '1d50ac5ff9b5d5342ec79f69cf13c135bd28f4fa', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '957d82dc1ac5dcef5ba635db85f9be529ff374ef', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'a11110607d1167275dc975683cd1a4d92ee4ee8d', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
//# sourceMappingURL=ir-test-cmp.js.map
