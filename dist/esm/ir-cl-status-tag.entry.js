import { r as registerInstance, h, H as Host } from './index-D8DCR0yx.js';

const irClStatusTagCss = () => `.sc-ir-cl-status-tag-h{display:inline-flex}.cl-status-tag__xs.sc-ir-cl-status-tag{height:1.5rem}.cl-status-tag__xs.sc-ir-cl-status-tag::part(content),.cl-status-tag__xs.sc-ir-cl-status-tag [part~="content"]{padding:0;height:fit-content}`;

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
const IrClStatusTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    transaction;
    size = 'extra-small';
    render() {
        if (!this.transaction)
            return null;
        const { label, variant, showLock } = resolveStatus(this.transaction);
        return (h(Host, null, h("wa-tag", { size: 's', className: `${this.size === 'default' ? '' : 'cl-status-tag__xs'}`, variant: variant }, label, showLock && h("wa-icon", { name: "lock" }))));
    }
};
IrClStatusTag.style = irClStatusTagCss();

export { IrClStatusTag as ir_cl_status_tag };
