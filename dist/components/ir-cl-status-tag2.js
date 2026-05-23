import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irClStatusTagCss = ".sc-ir-cl-status-tag-h{display:inline-flex}.cl-status-tag__xs.sc-ir-cl-status-tag{height:1.5rem}.cl-status-tag__xs.sc-ir-cl-status-tag::part(content){padding:0;height:fit-content}";
const IrClStatusTagStyle0 = irClStatusTagCss;

const FD_VARIANT_MAP = {
    PAID: 'success',
    ISSUED: 'brand',
    SENT: 'brand',
    DRAFT: 'neutral',
    PARTIAL: 'warning',
    VOID: 'danger',
};
function isFolioRow(tx) {
    return 'status' in tx && tx.status != null && typeof tx.status === 'object';
}
function resolveStatus(tx) {
    if (isFolioRow(tx)) {
        return {
            label: tx.status.label,
            variant: tx.status.variant,
            showLock: tx.status.id === 'billed',
        };
    }
    return {
        label: tx.FD_STATUS_NAME ?? tx.FD_STATUS_CODE ?? '',
        variant: FD_VARIANT_MAP[tx.FD_STATUS_CODE?.toUpperCase() ?? ''] ?? 'neutral',
        showLock: false,
    };
}
const IrClStatusTag = /*@__PURE__*/ proxyCustomElement(class IrClStatusTag extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    transaction;
    size = 'default';
    render() {
        if (!this.transaction)
            return null;
        const { label, variant, showLock } = resolveStatus(this.transaction);
        return (h(Host, null, h("wa-tag", { size: 'small', className: `${this.size === 'default' ? '' : 'cl-status-tag__xs'}`, variant: variant }, label, showLock && h("wa-icon", { name: "lock" }))));
    }
    static get style() { return IrClStatusTagStyle0; }
}, [2, "ir-cl-status-tag", {
        "transaction": [16],
        "size": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-status-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClStatusTag);
            }
            break;
    } });
}

export { IrClStatusTag as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-status-tag2.js.map