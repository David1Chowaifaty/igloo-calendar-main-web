import { r as registerInstance, h, H as Host, c as createEvent } from './index-7e96440e.js';
import { a as FdTypes } from './enums-1dbd2724.js';

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
        return (h(Host, null, h("wa-tag", { size: 'small', className: `${this.size === 'default' ? '' : 'cl-status-tag__xs'}`, variant: variant }, label, showLock && h("wa-icon", { name: "lock" }))));
    }
};
IrClStatusTag.style = IrClStatusTagStyle0;

const irFdConfirmDialogCss = ".confirm-dialog__message.sc-ir-fd-confirm-dialog{margin:0;font-size:0.9375rem;color:var(--wa-color-text-normal, #111827);line-height:1.5}.confirm-dialog__footer.sc-ir-fd-confirm-dialog{display:flex;justify-content:flex-end;gap:0.5rem}.void-options.sc-ir-fd-confirm-dialog{display:flex;flex-direction:column;gap:0.75rem;margin-top:0.75rem}.goodwill-amount.sc-ir-fd-confirm-dialog{display:flex;flex-direction:column;gap:0.25rem}.goodwill-amount__label.sc-ir-fd-confirm-dialog{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.goodwill-amount__input.sc-ir-fd-confirm-dialog{width:100%;padding:0.4375rem 0.75rem;font-size:0.9375rem;border:1px solid var(--wa-color-border-normal, #d1d5db);border-radius:var(--wa-border-radius-m, 0.375rem);outline:none;box-sizing:border-box}.goodwill-amount__input.sc-ir-fd-confirm-dialog:focus{border-color:var(--wa-color-brand-500, #6366f1);box-shadow:0 0 0 2px var(--wa-color-brand-100, #e0e7ff)}";
const IrFdConfirmDialogStyle0 = irFdConfirmDialogCss;

const CONFIGS = {
    'void': (doc, fdType) => ({
        title: fdType === FdTypes.Invoice ? 'Credit Note' : 'Void Document',
        message: `Are you sure you want to void ${doc}? This will issue a credit ${fdType === FdTypes.Invoice ? 'note' : 'receipt'} and cannot be undone.`,
        confirmLabel: 'Void',
        confirmVariant: 'danger',
    }),
    'delete-draft': doc => ({
        title: 'Delete Draft',
        message: `Are you sure you want to permanently delete draft ${doc}? This action cannot be undone.`,
        confirmLabel: 'Delete',
        confirmVariant: 'danger',
    }),
    'convert-to-invoice': doc => ({
        title: 'Convert to Invoice',
        message: `Are you sure you want to convert ${doc} to an invoice? This action cannot be undone.`,
        confirmLabel: 'Convert',
        confirmVariant: 'brand',
    }),
};
const IrFdConfirmDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.confirmed = createEvent(this, "confirmed", 7);
        this.cancelled = createEvent(this, "cancelled", 7);
    }
    open = false;
    action = null;
    docNumber = 'this document';
    isConfirming = false;
    fdType;
    voidType = 'credit-note';
    goodwillAmount = '';
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber, this.fdType) : null;
        // const showVoidOptions = this.action === 'void' && this.fdType !== FdTypes.Receipt;
        return (h("ir-dialog", { key: '16d0ec301373052e965efdf376db446d5a4d4f1e', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => this.cancelled.emit() }, h("p", { key: 'dd46ed9de8cce7ba46aa74abd9a4c7ea2888a111', class: "confirm-dialog__message" }, config?.message ?? ''), h("div", { key: 'e6c511c6ee8b509bcf84745146f9c1e56d79c1dc', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'fdd85d1d4e51fb8497a9ce023fd3d7b02229f9c8', size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), h("ir-custom-button", { key: '05fc779e3d9ef91ef222e257d5c425c552dfe5be', size: "medium", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit(), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
    }
};
IrFdConfirmDialog.style = IrFdConfirmDialogStyle0;

export { IrClStatusTag as ir_cl_status_tag, IrFdConfirmDialog as ir_fd_confirm_dialog };

//# sourceMappingURL=ir-cl-status-tag_2.entry.js.map