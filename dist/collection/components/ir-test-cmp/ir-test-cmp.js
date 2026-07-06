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
        return (h(Host, { key: '6a59893976dd2f91b9f6dad4d640db4088e38b04', class: 'p-2' }, h("ir-toast-provider", { key: '68380475a15e61d35164d0d42dd2847ad8fabe21' }), h("button", { key: '74b06e3907d2e942cb94e93bb4b586879d66674c', onClick: () => (this.open = true) }, "open"), h("button", { key: 'f1936a62f69127dd8c1984acbcd7a69291a04221', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: 'd9c1694a7eb0109648298cb3f7b485347194f7ca', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '76ea91224b8016c7c818c0bd90017a58be04bdc4', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: 'a0dd74ddaa311f4d094a4e6d6a0db07685959e5b', open: this.open }, h("div", { key: '762be3bfaafa25988bc592d0735686f05b9d6d36', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'a9025265cb550278fa89135eb19ca6d003293af9', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: 'fc953ecf69a5384fc75001c2db4f63d0622014e7', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'a008726c8fe8214f56cce4ada1df067ba80209de', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '5091a1bd08ab4fc44b6996a247c679caa63de68f', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'c1f223307e5d6b6d06f187951f2e206ecf5aa19e', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '5c29e061ff535b4c17143c0322ea3155ccf2368d', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '182a52e6a9a6de5c3669f8822eecbb19eee8d3bf', ref: el => (this.ela = el) })));
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
