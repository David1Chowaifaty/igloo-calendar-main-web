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
        return (h(Host, { key: '595bc90f2044ad109f2d8f32aa0e95b3375ad040', class: 'p-2' }, h("ir-toast-provider", { key: '2db5c704ddb5d3bd8f00a629b8b876d81cea5a5a' }), h("button", { key: 'ca5c7c37c1371006690853789333dc9803f4a0a5', onClick: () => (this.open = true) }, "open"), h("button", { key: 'e3f456d2dadc67f3fb15e936985ce09178842865', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '1627f8b48a4f13634888803b373c9feaff7549d3', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '4425776d6af51c8ddefc6119813dcccd023d42f4', open: this.open }, h("div", { key: '585985b1f3c087264c63caa90c19ead9c0c59a80', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '50544176fdf5f9c841aa55ff8c7d466af45eac36', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '660082cdd71ce51285c3384c66e58e464b2adbea', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '8c35831e38147d2ef424ab65cb5a3e9a0a3ce55c', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '02bd20c13402a9ddf90269d5b9f1ac7b4e9939aa', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'dd3dbbcf8dae53ecea65373002d29552219400e5', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '709920fece315a2e32db4196b96aedecbe670dbb', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent")))));
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
