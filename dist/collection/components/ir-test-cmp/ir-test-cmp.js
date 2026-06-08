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
        return (h(Host, { key: 'b30224cbd13f5df8840af570d70199b5af411f5e', class: 'p-2' }, h("ir-toasts-provider", { key: '68f06c5e5169f15304ad31032959978c66b0e929' }), h("ir-drawer", { key: '01e8bee00045706ec7da630d574c275f389d8e28', open: true }, h("div", { key: 'ff064210b87dd5abfb8720a027a6235f34113cd8', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '405c3f95eb138b68fd7d3418fe90910fe014d70c', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '42aef69260b4f9c753ef3abda5091a42f047dac2', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'a727eed1f97f3767aa44bac10b0d7a5556ab8cd4', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '45dd6307873228506aefd20d29b15a923deecf02', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: 'afad88000e1e216551bf71303232e9414eb2c103', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
