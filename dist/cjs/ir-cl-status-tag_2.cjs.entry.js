'use strict';

var index = require('./index-DYQrLNin.js');
var calendarData = require('./calendar-data-R3j-WBLW.js');
var enums = require('./enums-DYuUF9pP.js');
require('./index-C59pxKl1.js');

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
    voidType = enums.FdTypes.CreditNote;
    goodwillAmount = '';
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber, this.fdType) : null;
        const showVoidOptions = this.action === 'void' && this.fdType !== enums.FdTypes.Receipt;
        return (index.h("ir-dialog", { key: '8cc9d6bd61ca920bf2b6ef8f8357d31b41683c76', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = enums.FdTypes.CreditNote;
                this.goodwillAmount = null;
            } }, !showVoidOptions && index.h("p", { key: '7a8556e97b46729bdac0aafa2a1b3301ca11db8a', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (index.h("div", { key: 'b619c2182738ff57401f1ac4de65082ad7bf9438', class: "void-options" }, index.h("wa-radio-group", { key: '07d19f076b175259defd5ef8224df672726288f6', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, index.h("wa-radio", { key: 'a597c4ccb0a6d9c546dcc1eeecdfb7dd9033b34e', value: enums.FdTypes.CreditNote }, index.h("p", { key: '7a6c30536e81e13abaf5afe702086bcb762cf5b2', class: "confirm-dialog__radio-title" }, "Credit Note to reverse Invoice ", index.h("b", { key: '211329324a36b755d90a053fba63bf4e2b4f964f' }, this.docNumber)), index.h("p", { key: 'ba5acc458984b05757d1c50c94830e06fae432f2', class: "confirm-dialog__radio-hint" }, "Issue a Credit Note to reverse the invoice and unlock all invoiced entries for future invoicing.")), index.h("wa-radio", { key: 'd010a3eb582ce97404099d0297ce49e4e1808b93', value: enums.FdTypes.AdjustmentCredit }, index.h("p", { key: '612adffdb3692e52b39dc5bec1c802446b110ca4', class: "confirm-dialog__radio-title" }, "Adjustment Credit"), index.h("p", { key: '98115e1a74784e47d3100ddb26f1b7f33c69507b', class: "confirm-dialog__radio-hint" }, "Add a folio credit adjustment to create a fiscal credit note document related to ", index.h("b", { key: '6bdbbf5d813e507eb819a426b4270a03faab6a8c' }, this.docNumber)))), this.voidType === enums.FdTypes.AdjustmentCredit && (index.h("ir-input", { key: '5b513523eeb36bdde4c9bd1360382634c59cbdb8', style: { marginLeft: '1.5rem' }, max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, defaultValue: this.goodwillAmount, "onText-change": e => (this.goodwillAmount = e.detail) }, index.h("span", { key: 'debb2f5f1ec8b559b6a73f717a637778c5b25c97', slot: "start" }, calendarData.calendar_data.property.currency.symbol))))), index.h("div", { key: '222038b6fd202114ba25dd5fc26a931b5c69f03c', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '22f598fa5c11a515bd434cf891f687903841e480', size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), index.h("ir-custom-button", { key: 'ed57cbf478994aaa6db4241fb1e09bd77afdce0b', size: "m", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
                amount: Number(this.goodwillAmount),
                voidType: this.voidType,
            }), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
    }
};
IrFdConfirmDialog.style = irFdConfirmDialogCss();

exports.ir_cl_status_tag = IrClStatusTag;
exports.ir_fd_confirm_dialog = IrFdConfirmDialog;
