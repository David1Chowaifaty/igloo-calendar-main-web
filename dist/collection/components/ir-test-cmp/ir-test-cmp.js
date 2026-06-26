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
        return (h(Host, { key: 'f09783c3248706a6ee4130098e1403d341383c3c', class: 'p-2' }, h("ir-toast-provider", { key: '4e30681af999f6ef34a560c6641b8cc7dcb892cd' }), h("button", { key: 'c3e9d5a9f6fce9caa6070880a9c2d4d250e133e6', onClick: () => (this.open = true) }, "open"), h("button", { key: 'e761aa21220e4a43fd86d9a26305be2375dbeddb', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: 'e844ce299ed68bda9c21316f2864272bf6f9f1cb', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '0cfde822fb0cd8943fa233ae7ce0cc628f94934f', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '6fa58883f3ebb669e5a749fdede497a52103c5c1', open: this.open }, h("div", { key: '4aabe5a7d688b1534fdee260a246d134d878d61f', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '99b83e8982a1f0ee24ee597809d8854826aaa1f2', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '791c54e610a8187d184ee7518dd6608d636deff0', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'b8a02928da45becdb54e37b155b483937bdaa3da', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'a1ab6d6374f0ea4c2e5dc78253024633fa87f413', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '8f850691a117d0c0989fcd0ccac62678d8668003', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'e4ce58cdd917b40ceba98e1fcf176a77f446ece0', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '68a9c273436941dd49d492f34d967aa83bc62006', ref: el => (this.ela = el) })));
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
