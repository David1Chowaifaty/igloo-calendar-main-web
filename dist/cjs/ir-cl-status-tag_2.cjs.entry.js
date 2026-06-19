'use strict';

var index = require('./index-CJ0kc5p1.js');
var enums = require('./enums-CYGRnqOf.js');

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
        index.registerInstance(this, hostRef);
    }
    transaction;
    size = 'extra-small';
    render() {
        if (!this.transaction)
            return null;
        const { label, variant, showLock } = resolveStatus(this.transaction);
        return (index.h(index.Host, null, index.h("wa-tag", { size: 's', className: `${this.size === 'default' ? '' : 'cl-status-tag__xs'}`, variant: variant }, label, showLock && index.h("wa-icon", { name: "lock" }))));
    }
};
IrClStatusTag.style = irClStatusTagCss();

const irFdConfirmDialogCss = () => `.confirm-dialog__message.sc-ir-fd-confirm-dialog{margin:0;font-size:0.9375rem;color:var(--wa-color-text-normal, #111827);line-height:1.5}.confirm-dialog__footer.sc-ir-fd-confirm-dialog{display:flex;justify-content:flex-end;gap:0.5rem}.void-options.sc-ir-fd-confirm-dialog{display:flex;flex-direction:column;gap:0.75rem;margin-top:0.75rem}.goodwill-amount.sc-ir-fd-confirm-dialog{display:flex;flex-direction:column;gap:0.25rem}.goodwill-amount__label.sc-ir-fd-confirm-dialog{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.goodwill-amount__input.sc-ir-fd-confirm-dialog{width:100%;padding:0.4375rem 0.75rem;font-size:0.9375rem;border:1px solid var(--wa-color-border-normal, #d1d5db);border-radius:var(--wa-border-radius-m, 0.375rem);outline:none;box-sizing:border-box}.goodwill-amount__input.sc-ir-fd-confirm-dialog:focus{border-color:var(--wa-color-brand-500, #6366f1);box-shadow:0 0 0 2px var(--wa-color-brand-100, #e0e7ff)}.confirm-dialog__radio-title.sc-ir-fd-confirm-dialog,.confirm-dialog__radio-hint.sc-ir-fd-confirm-dialog{padding:0;margin:0}.confirm-dialog__radio-hint.sc-ir-fd-confirm-dialog{display:block;color:var(--wa-form-control-hint-color);font-weight:var(--wa-form-control-hint-font-weight);line-height:var(--wa-form-control-hint-line-height);margin-block-start:0.5em;font-size:var(--wa-font-size-smaller)}`;

const CONFIGS = {
    'void': (doc, fdType) => ({
        title: fdType === enums.FdTypes.Invoice ? 'Credit Note' : 'Void Document',
        message: `Are you sure you want to void ${doc}? This will issue a credit ${fdType === enums.FdTypes.Invoice ? 'note' : 'receipt'} and cannot be undone.`,
        confirmLabel: 'Confirm',
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
        index.registerInstance(this, hostRef);
        this.confirmed = index.createEvent(this, "confirmed");
        this.cancelled = index.createEvent(this, "cancelled");
    }
    open = false;
    action = null;
    docNumber = 'this document';
    isConfirming = false;
    amount;
    fdType;
    voidType = 'credit-note';
    goodwillAmount = '';
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber, this.fdType) : null;
        // const showVoidOptions = this.action === 'void' && this.fdType !== FdTypes.Receipt;
        return (index.h("ir-dialog", { key: '9dae602224a1323d8618bb95f07b18b5d15bcb5e', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = 'credit-note';
                this.goodwillAmount = null;
            } }, index.h("p", { key: '164b1bde497ccc98a495c4f8d3878bec72a198b2', class: "confirm-dialog__message" }, config?.message ?? ''), index.h("div", { key: '66365a9989d2bac45c40d697e9b6bc4e4d904319', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'ec4039be2562967168db344ec135d1fb8071800f', size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), index.h("ir-custom-button", { key: 'df894a53cf94f028ec0155cea7355cfd36e9bc56', size: "m", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
                amount: Number(this.goodwillAmount),
                voidType: this.voidType,
            }), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
    }
};
IrFdConfirmDialog.style = irFdConfirmDialogCss();

exports.ir_cl_status_tag = IrClStatusTag;
exports.ir_fd_confirm_dialog = IrFdConfirmDialog;
