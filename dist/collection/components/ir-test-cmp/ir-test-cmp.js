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
        return (h(Host, { key: '7dd867a1bec505d23d7b7e0afe010902e2c66de1', class: 'p-2' }, h("ir-toast-provider", { key: '42cdb34b9d3b8639fdb883edda00f3ab4df7db8f' }), h("button", { key: 'baf58024728bcd783ce7f5b7611efddee697c1d7', onClick: () => (this.open = true) }, "open"), h("button", { key: 'b62da605528362b6d5113988288fb2d014f4ed12', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: 'f2d1625a4e9b86688e9c466aa09354365285a206', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '3845484033697d575d55158d261e020bb84aaa38', open: this.open }, h("div", { key: '5c49fb6654aa07f8583d288aa04f0fe1de8b9691', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'cdd3a57bce6dfa68f5ff8cd34dcf747407aa582d', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: 'f176f7564f467251212243361e8dd11e3b057487', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'd60c3e393a5a3411c9adaff1dcefe093e8de3169', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '713dd24606a02b85cf94676d98efd7fb2a17dce5', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '6942e64435e4b899c006428c9d4dd3e96fc90192', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'b1b41ab8cebf769452b1a17a755af60211e1ddbe', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
