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
        return (h(Host, { key: 'ea4a31e7a237e16e1387c7ba7c8fb92a76d8fdba', class: 'p-2' }, h("ir-toasts-provider", { key: '2645c78aa52c2e707a1027e511a558e708ad99cb' }), h("ir-drawer", { key: '2b56dcd2093ee44ba31ed162321c332eab1d726e', open: true }, h("div", { key: '63e74912c53f9e2f0aa850fd83c39f73a8181e69', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'c8f5d4792054c6c6df632b6dafcab0ed4000fd8e', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '752913d81248407881760d753c7dce9f6b7a6078', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '720ce59f58f852d263bbbe9cc83db3bfd33073e8', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '370e759ca85b8e94f41cdd762e69c932500b6be0', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '93ddad7e3cf505027a118f97029bbf65b1504890', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
