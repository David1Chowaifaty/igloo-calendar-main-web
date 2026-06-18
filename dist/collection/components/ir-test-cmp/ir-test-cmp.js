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
        return (h(Host, { key: '66b578a464a100589d941df7378ea14a0df3730a', class: 'p-2' }, h("ir-toast-provider", { key: '6bdf857a81cd0ee3f891c03beca23fc27e09b63f' }), h("button", { key: 'a9e43e82e2c8286aea6cc2071f6f0867409d475d', onClick: () => (this.open = true) }, "open"), h("button", { key: 'cb3fddf0f718c1c08b2f63736f302ac1b63bba83', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: 'ae2eaf23b14cc61aa85bd8bf80989baabd42795b', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '4e660a6aa71a07751d80c3a0bf69794f96599b50', open: this.open }, h("div", { key: '0b57783fc9cd4cd3e6c2180910873261bf86bb56', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '4dbb91334bb26ae1b11295b4b31d90a01ec21b1b', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '2833a7661ea52e24d6f8197357a2a312c2e9f05e', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '24ba96d37527c90747416dbda678892f95a8f04c', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'ab3d3d71bfa717ce057a47cbe70dc837f2618ec0', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'bff293a183ce290823b7dce2e75018eabd33ac0e', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'a302f0a1ae006a06e599f07060fd164cf97bd7ed', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
