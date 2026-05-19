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
        return (h(Host, { key: 'aebc9af258567bf08626e24a504fe45e8cc0ed77', class: 'p-2' }, h("ir-toasts-provider", { key: '505d0af336eaf3f56242fe8c243063b05f1f7d03' }), h("ir-drawer", { key: 'a9e1e6d229fd9e21f7a3dd1ceff26d5680d0442e', open: true }, h("div", { key: '92657120e09b11802d7d395a03c762724fffb496', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '4a2950d85244698d77d48d47898cdbae570d439e', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'a5964283168ecaa0e5e92434727e338f8b4c933c', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '36d497be4d6aa44574e2852e6b303689f7655907', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '71caf33b46487539b12f093b15fcad0e98cfd5bf', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'bb7bf1d767d58773b51c6500935bda18d09a1945', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
