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
        return (h(Host, { key: 'a54540e139ef23c80c6aae8ef212df14d8721fd4', class: 'p-2' }, h("ir-toast-provider", { key: 'bdc46c8be47fdcb7f11a4123047f043739f8d56b' }), h("button", { key: '1077c3bd8e0637727052fd27eb75d966617aad6f', onClick: () => (this.open = true) }, "open"), h("button", { key: '4aaf44fc21113f4bca487d2c3fdcde6f9a907ea1', onClick: () => this.ela.openModal() }, "Ela"), h("button", { key: 'c848a304ceef33325d5c5cf5d2425d8e1effb4b5', onClick: () => showToast({
                title: 'Something went wrong',
            }) }, "emit toast"), h("button", { key: '90c8eaa85b4ed195d0c76e8d93ee60d1dd084465', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("ir-drawer", { key: '0b40c59fb936062cac4b271b5cfb9375999fc7ee', open: this.open }, h("div", { key: '0579eaa864d5f1bea915da080fd7e3f36550092a', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '1035d891506c1257bd98780796a3c67bbd479852', onClick: () => this.toast({ title: 'Heads up', description: 'This is an info message.', type: 'info' }) }, "Info"), h("button", { key: 'e8f1c2995da7cdbbef00137477d9a6669d81b77b', onClick: () => this.toast({ title: 'Saved', description: 'Operation completed successfully!', type: 'success' }) }, "Success"), h("button", { key: 'e2e376e2d90edaeb346cf493bd1ebf98b12d8dfe', onClick: () => this.toast({ title: 'Failed', description: 'Something went wrong. Please try again.', type: 'error' }) }, "Danger"), h("button", { key: 'bdbfb74dc7d020c4632ee8c0d6a1a82a1b44acc0', onClick: () => this.toast({ title: 'Careful', description: 'Proceed with caution.', type: 'warning' }) }, "Warning"), h("button", { key: '8a029ef26055d4eeb0faf3dec2176eb32f377972', onClick: () => this.toast({ title: 'Item archived', actionLabel: 'Undo', type: 'info' }) }, "With action"), h("button", { key: 'a052642d47dcae2a6ddf69c771b699fbb750d15e', onClick: () => this.toast({ title: 'Persistent', description: 'Stays until closed.', type: 'info', duration: 0 }) }, "Persistent"))), h("ir-otp-modal", { key: '952075d520eb66210acc6c811e79d17a355660d9', ref: el => (this.ela = el) })));
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
