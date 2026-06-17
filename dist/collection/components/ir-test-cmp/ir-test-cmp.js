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
        return (h(Host, { key: 'd678f7598a50ff7ddaab7a686c69f39695a27a54', class: 'p-2' }, h("ir-toast-provider", { key: '80fd4f36b45d18a2dcb7a2fcca75dcb4e61662df' }), h("button", { key: '4eebff93efa846fbcf1e6ab73358bfa396e1100a', onClick: () => (this.open = true) }, "open"), h("button", { key: '141208213b63929641bce812583c9365380c72c3', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '5750ceb87851b2e1c2a1d0a1b23446a3791adee1', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: 'b698d2a2ac0b6bb3e1883bb0e19a411eff6bae0f', open: this.open }, h("div", { key: 'f1ee2e72fe0da36c204cb3477810972666b852a5', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '20184c0b06b840cef0319937523d903239e1a55b', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '8e8885f1aab411ab67269d31aa4f38b22c674c99', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'f095663dd9c2a00cd51e24c6a74f87b37cf796b9', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'b3290307a0f93604f687b702b5f5b330cc2b1a6e', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '281471f7914ad88f546eb1d3b7767a0e87d278a5', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '9156fde28da900cb8da916f18872247db96985a7', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
