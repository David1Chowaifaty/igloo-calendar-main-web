import { Host, h } from "@stencil/core";
import { showToast } from "../../utils/utils";
export class IrTestCmp {
    el;
    ela;
    get provider() {
        return this.el.querySelector('ir-toast-provider');
    }
    toast(toast) {
        this.provider.addToast({ duration: 10000, ...toast });
    }
    open;
    render() {
        return (h(Host, { key: '2c46d6ef9b4aac2ceddceac330631b48b47b9751', class: 'p-2' }, h("ir-toast-provider", { key: '577d541eeb06a4a1ddc4de0c6e14b97a7730b651' }), h("button", { key: '0eb44addf0b78be95f73c337ae7fd90c1f7d0ac7', onClick: () => (this.open = true) }, "open"), h("button", { key: '5e0bdd209d9bc2f2abe77961ebd16c778d27a6c7', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: 'f77c1a7a221f73f2e42de3d526a478d20cf19fc4', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '11266e340e2000af9c052169adac544ed8a3b4cf', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '14dc7752c0baa1440e9e2209b5ba6f27586cc17f', open: this.open }, h("div", { key: '056c772131d5e8916324a87271d0e6a84558df13', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '95b88cba17ed6f72c1d74732a9bec0aae6acc706', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '9c59e5112b921a6a788f568e89e9dc6290ca8716', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'e99398c2d8bdae192322ba21ccf360885ca60e34', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: '54caef673e945991e6caa3a19b1ae760cb0594fb', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '21e1b337ae2a7aa180cdf4146d78eb7ded2ba93d', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'ec3ebda980c989ac450b9b9acf096fd1a65c6ac7', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '24c2e04380be2fc539480950df31fdd90f768faf', ref: el => (this.ela = el) })));
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
    static get states() {
        return {
            "open": {}
        };
    }
    static get elementRef() { return "el"; }
}
