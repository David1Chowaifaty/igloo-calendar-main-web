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
        return (h(Host, { key: '2f9bab16ec494789f0d6380736adc7eb6715fc44', class: 'p-2' }, h("ir-toasts-provider", { key: '4fa918a9e53e7a40bb9ef0b026e4775e75ec80e8' }), h("ir-drawer", { key: '55997a1873b4338792f4b18e9840d731f9f3fcfa', open: true }, h("div", { key: 'dea1b9765565ad4032079423d3c9fff16e1328c6', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '64e63771d3938e010980c0a2a369eb79217930e7', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'bd829cc222833b2c87cf3eeb3e985046d5b230cf', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '5878f9c8be9ea589d116c69a13fc18567dd2c7af', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: '4aa0506ce13477e37a94e0df15ae9cedbb1581f9', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '63120b6abe65638a2f731ff8ea75537adb87f058', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
