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
        return (h(Host, { key: '2abb36fd83eea7dee4ac1c81bb78190e75dec068', class: 'p-2' }, h("ir-toasts-provider", { key: '0de457665db58d9d0aba36047d128d66c9f571f0' }), h("ir-drawer", { key: 'fae7ce0a59662877f80b3b124341a95c54f62c25', open: true }, h("div", { key: '0872bc5e72c0cdf3ca91dfd7f250f3dc2a58a4c2', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'bf6a0ad65bb15effb27264de0569783daba0233c', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '8f7ad1f33461066654b2e94baba5b6525cde46b4', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'aad02c792233f49eced101759c9b2323d55683e5', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '33eb8ca624a64555576e090bf0baaf1a2e745bb9', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '17ed17fd4feeacd7d434cb6f971b386f0983414e', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
