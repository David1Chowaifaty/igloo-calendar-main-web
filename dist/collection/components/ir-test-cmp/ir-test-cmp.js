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
        return (h(Host, { key: 'a822e647217ee458888aa0937ff05cd789a9c3ad', class: 'p-2' }, h("ir-toast-provider", { key: '1d6180b07363a197b99ab40a18ea9316d998e278' }), h("button", { key: 'ab28bb81d1d763ec76db622d7ff77a485d12d439', onClick: () => (this.open = true) }, "open"), h("button", { key: '4f45fb76ff6134bf9ef8c66c030d96b3b0a2df32', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: '402a7a219bd4ea453b4390fa9f2b9c5764cac7ca', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: 'b7b188b841c1b674ce7cac4f43734ae889d2c92c', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '41ba804df65dff30d08c1067a311bbcd72357873', open: this.open }, h("div", { key: '0dcba76eb5f117d4c4f251a73dfdf3d3b0dce6b0', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: 'b09df6cda407ced32659b5cdf9310aa75bfea98e', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: 'c5f06524d3abbb482359ea292a6df622f8774d00', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'd3c41fa500323547c6bc1ab6bf6bad70e2e33c71', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'b0e7c8a3945ff808bab3497a731650b9b82eeb14', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: 'e64435fe74ab9183cbe6e959c6abc0bf3e5277e0', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: '9857679265116eaf2ac7cb385d3e24d881cc8165', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: 'adc4d85df11cc0a61a30e9412c8b5efd930cf94c', ref: el => (this.ela = el) })));
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
