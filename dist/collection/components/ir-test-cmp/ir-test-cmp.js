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
        return (h(Host, { key: '67277d4c4186a7f87750a82d0137a5e8ff32a377', class: 'p-2' }, h("ir-toast-provider", { key: '66d451a15bb1402a24d464b67f57e58ecfc338a2' }), h("button", { key: '10321d3d6d35ce64970a0938b527142f02e9dd2b', onClick: () => (this.open = true) }, "open"), h("button", { key: 'a970aafb666c01ffda7b3e8e87e74d95371ddac5', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '057ca9eb8f4f862e085e5a24c20101aec6c79b23', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '02d4e5014b149e47da0b6e5b04c4e6d42adf538c', open: this.open }, h("div", { key: '3e546901e250ca6c5ad88f4272a537bac4519436', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'a409770657ba9f8990b24fdc43f8e656392c2704', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: 'efbf1363f93c3cd7616efd11c565d1855b8af240', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '6487b3da2ec925a4ea91008b2bf64cef47275de1', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '93fe7b77c8755cc34c3566c344a590a70e3a03db', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'a5ab4c0bab2ad50d8558db56b21bc1dad38148ea', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '871f2373ebdd57b7130ea74c845fc6d67ee8c537', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
