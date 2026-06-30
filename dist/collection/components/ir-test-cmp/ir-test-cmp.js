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
        return (h(Host, { key: '4547da7b2eaf188c2685abfda75d7d5d600006a4', class: 'p-2' }, h("ir-toast-provider", { key: '9560b33ed3bb70d72f4ab05f9aebb55f4f527056' }), h("button", { key: '4458bddf6bff66cffe8313ee071335d823e31c08', onClick: () => (this.open = true) }, "open"), h("button", { key: '577d74af0dce46bdae6ca89a56b5177d50d53fc3', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: '3444c3554e0bb348c658dee69bdababe4e4a3e58', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '9b3fe3d7d7cdb31115cfa26ed3c36424a2d0cd62', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '672fa3c92933fb478af5f074480b162f45401b06', open: this.open }, h("div", { key: '4d4d686b4c880dcb6028e9e04fd9a042e8bc9f18', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '768000965893ba73478c4e2ac6abb84306d45e79', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: 'c0b4d2ac76689384f01ea8bbb8676d0d3d1f6201', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '64099b97c9bb67e69ab9a2acfb7a1e6c2b2fdbbe', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'd58134df28b0c47eb4b3e3590cf6c0c0b3333e4e', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'c0c1438b381fe0134a27fa3bfb84230308a6b9ab', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '4b6bbc0bb04e6cf38d3767d9e37b048185c089e3', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '352aed00083698678ea8c1265a745cb88f3601ec', ref: el => (this.ela = el) })));
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
