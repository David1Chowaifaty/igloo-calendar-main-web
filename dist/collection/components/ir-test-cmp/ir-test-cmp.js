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
        return (h(Host, { key: 'db9101da7f52fd90aefbece1331d0d3fa139de46', class: 'p-2' }, h("ir-toasts-provider", { key: 'f265c0e31de0e96b7d51c12f7b8f575370b9f516' }), h("ir-drawer", { key: 'ccf992ab413efc17d4962696b3ad6c01c83f109b', open: true }, h("div", { key: '1f510d95567d877b2fdda6beffee4ce89ec1b727', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '06d9a084ecf0ed54be905367e3d7ec3c042b5776', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: '9dc38be02d4c709bee8dc692a220a1bf079011ab', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: '87729a156d5b9363876cb1d6f50460959307f615', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'b29273228c220461fd4338b1380fb279f8752617', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '72f8dfc592e3f76dc293ecfb2cee808606048516', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
