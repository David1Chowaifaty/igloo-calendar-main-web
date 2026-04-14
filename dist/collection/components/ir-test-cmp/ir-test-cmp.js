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
        return (h(Host, { key: '48553ce7c387bb39a19a5f6a00c4aeaf0e016191', class: 'p-2' }, h("ir-toasts-provider", { key: '3091dc011f08e0527da67acbde045440b890b947' }), h("ir-drawer", { key: 'fbc9a4f6cc577a4045c8386efac14f900b2b89cc', open: true }, h("div", { key: '0a7f10f995d66907a699e0ba7dd0f853e0036296', style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } }, h("button", { key: '08efd2ec2cec795c082637f3670ba2b98d217b12', onClick: () => this.toast('neutral', 'This is a neutral message.', 'info') }, "Neutral"), h("button", { key: 'dbce14b81422a40b706931986292428c52205b46', onClick: () => this.toast('brand', 'A brand notification just arrived.', 'bell') }, "Brand"), h("button", { key: 'bb20160388ff3e59f4db61d314b9badc1359e99c', onClick: () => this.toast('success', 'Operation completed successfully!', 'circle-check') }, "Success"), h("button", { key: 'f061a010cd6d8f4b99b2b55c5a434fa86dd349a8', onClick: () => this.toast('danger', 'Something went wrong. Please try again.', 'circle-xmark') }, "Danger"), h("button", { key: '96c005f4da1dd7f1bdafb0a4dcade00fdfc211a1', onClick: () => this.toast('warning', 'Proceed with caution.', 'triangle-exclamation') }, "Warning")))));
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
