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
        return (h(Host, { key: 'c457dc0ea4bca16c631e9495b4459914605c6901', class: 'p-2' }, h("ir-toasts-provider", { key: '25aacafc1ab456d7b3ed950bbc8424ed0333f6d4' }), h("ir-drawer", { key: '27ac8595ccc729bede91fcd1c5124fa78676176b', open: true }, h("div", { key: 'eb3dd36a940dfe298a4ec407283b5558c60b117e', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '081aacbb038b71f0909aa3a313c797d59c0af142', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '2243d416ef88ff4ac1d0ac1140600ac5cbba3b81', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'f75e18dce24976e8c6f8ca79141f7901b3f76554', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '535950ecb5eebddba44951aa687c4b8cf8511d4e', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '00905b9e76bae5c480aa4ee84d1604b5840d7874', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
