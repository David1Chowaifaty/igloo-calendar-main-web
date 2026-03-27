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
        return (h(Host, { key: 'bd7aef6b7681f0fa150d27a00b1bdd22f37d7d0e', class: 'p-2' }, h("ir-toasts-provider", { key: 'faa6896c8aa4cc714ced74a68bacc8928e92a074' }), h("ir-drawer", { key: '8dc0983a9beb2c4b945495dd8b720b61ac12cf0f', open: true }, h("div", { key: '4feb5c9aef8847ab29e6dcb03ecc84fe86d31a23', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'd0423cb1dd891e9a61e1b98ff1cfb0772c33fa88', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '8724c07e467161005233747270047aa7df740860', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'ae3c2b48d01dc04614645c420689c7ceb7d707aa', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '64aa05a98a439e746d773f070baf61ae6ec90cbe', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '9839a792323761371dde5a363b8ce1dd7d7e4907', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
