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
        return (h(Host, { key: '1e19a52040640f70f8593f242ddc20d9c0b586a6', class: 'p-2' }, h("ir-toasts-provider", { key: 'fb1c1f33b22eb8e07410994fd975a08ebe0f4b77' }), h("ir-drawer", { key: '838c003e97d9fc2999367500bcf59d4960f0f051', open: true }, h("div", { key: 'bbac4207335b694f4beddecbbcd793318c1e51c1', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'a08a45f17d209e3bededa01c47dfffea42968486', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '1f4bc9865d0d996cc7e3b5a24a92cf2f1d93cd6b', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '8f5178eb3043b4bb6482cd86cc69ea5ab5dd7a9d', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '989c47f8035b6019158415de752cd46a7ded70cd', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '71d6ca5c97cd2e57fd91cdc2ef938f7060b43691', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
