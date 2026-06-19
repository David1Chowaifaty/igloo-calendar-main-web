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
        return (h(Host, { key: '4ba08e68e7078f54853554fd4396e7143c697d0d', class: 'p-2' }, h("ir-toast-provider", { key: 'e723fef7cc319a227e67c294c28503a643c0692c' }), h("button", { key: 'aea493dd5271049b3eb53c9b45ced1ae3d01fbeb', onClick: () => (this.open = true) }, "open"), h("button", { key: '291b7ad5b7b9e1dc5e3abc9b01fc0415a7648d14', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: 'fc83d4acf878ea5c1ce831949df756b516a1d7e0', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '87a8d29d0cb53b359b701bfc94503379cde76d70', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '9a3aa078ca8417c51f197fec10875112058c2378', open: this.open }, h("div", { key: '7aabc9c9c3952e601753ad10c4e4c575b75e9bf1', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'bbe4ccd7fc6030dae6cf4d4accd6bfd06af7b8bc', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '812ab7dc3985334521cfaaf1b2f96e629dc59a07', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'a89785397a1a42d81ba5e1272a549180d5ff4bff', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '7fd6dd5dd9977b4809f03cade9e0a182988a32c1', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '844d7a97317f3d5e188a336c57b217c57fa4eb14', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '77c8c404ec81c7dbccd66886b785ad87ba3aa8e3', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: 'aa25411267d8a08c914de401ce36b6555acc831f', ref: el => (this.ela = el) })));
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
