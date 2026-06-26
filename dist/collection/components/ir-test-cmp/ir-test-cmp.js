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
        return (h(Host, { key: 'd5bc2085cd879c097d0f2016129deeeea295aa8c', class: 'p-2' }, h("ir-toast-provider", { key: '46200876d9255e336f6ca58b101d4fdbaad030d4' }), h("button", { key: '2649244090807ee8117658d1d4ffe6deac6325e0', onClick: () => (this.open = true) }, "open"), h("button", { key: '0628d8b5fb1fc279d7a597ed3331f52130533072', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: '459e087f05fbf7423e815bc42bd323be13e9f453', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: 'f97a7ef25630f8599cd40786180fabcdb3390414', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '4cbfa707f8c91b1a18717661a026b0d6b4b8db52', open: this.open }, h("div", { key: 'd873e85d9a9dca02f00723abf2e238a5bffbc4ad', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '9f511108bf6501746873a212d511a4d8cae26647', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: '16882c831f596e656f1876c942547e32b89c63c5', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: '598428b203c22046dee08d4213cd849c0a4f94b3', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'd21ba29121f3d1e4eab7d4ccd6beac9a101bf1b8', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'f53da98fe71dce20794b32c1545748a9f66875c2', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '3331371ffbe4e6f2ae9882e5f55c16eb5e238961', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '3fa5f8da29f2761a1356f3f2c749b42f3594bf05', ref: el => (this.ela = el) })));
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
