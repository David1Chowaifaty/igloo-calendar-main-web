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
        return (h(Host, { key: '033f13256605821f90d8f83eecec3bc87d28c3e5', class: 'p-2' }, h("ir-toasts-provider", { key: 'fb1cbc6bf83d1f34147233a75fcdcd918667a40b' }), h("ir-drawer", { key: '5b2bcfab9376a8c18a8d5e1e3df10700af748a42', open: true }, h("div", { key: '2ada8abb1304c224cdf5ad0e7046f416647fefa7', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'aae8265efbda3e0a8a8beb637ad49543cd5bee17', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '6f5ec7a84c287c19b1a8bcfb3d71d41492215b2a', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'ff4f36bbaf27f06d9b40a81b885af926cc787e73', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '88335ca4a7e9b0231eedaf56e56797a9c4f3a106', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '2d718c37c53d19f523a35795c664e501653c9e12', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
