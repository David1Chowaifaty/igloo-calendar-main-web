import { Host, h } from "@stencil/core";
export class IrTestCmp {
    el;
    get provider() {
        return this.el.querySelector('ir-toasts-provider');
    }
    toast(variant, message, icon) {
        this.provider.create(message, { variant: variant, icon });
    }
    render() {
        return (h(Host, { key: '6b2d93e484c623e6807fb304a860c08423b981e9', class: 'p-2' }, h("ir-toasts-provider", { key: 'a11341e034471cf8441d039f0a139e2bf022d67a' }), h("ir-drawer", { key: '29ead2754cd6581f9cb60457b7df34ea3e85e419', open: true }, h("div", { key: 'bfca9a5ae30fb95e51b92ff278682c87fbfb7321', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '00b4bf0808266f571df94e69014361d6ebe11f5c', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'bc4bb4be578f5af551e58d1e81087c39f560c0da', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'e1b2228e8544c8bb3c85c30a6e998dc9ec10614b', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '77dc648353005fad0da33384bb2e4b23a0b9cd8a', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '0fff702627bd531c2adb49ce67f01bbfac793a71', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-test-cmp.js.map
