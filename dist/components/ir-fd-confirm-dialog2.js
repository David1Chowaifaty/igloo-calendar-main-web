import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { F as FdTypes } from './enums.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irFdConfirmDialogCss = ".confirm-dialog__message.sc-ir-fd-confirm-dialog{margin:0;font-size:0.9375rem;color:var(--wa-color-text-normal, #111827);line-height:1.5}.confirm-dialog__footer.sc-ir-fd-confirm-dialog{display:flex;justify-content:flex-end;gap:0.5rem}.void-options.sc-ir-fd-confirm-dialog{display:flex;flex-direction:column;gap:0.75rem;margin-top:0.75rem}.goodwill-amount.sc-ir-fd-confirm-dialog{display:flex;flex-direction:column;gap:0.25rem}.goodwill-amount__label.sc-ir-fd-confirm-dialog{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.goodwill-amount__input.sc-ir-fd-confirm-dialog{width:100%;padding:0.4375rem 0.75rem;font-size:0.9375rem;border:1px solid var(--wa-color-border-normal, #d1d5db);border-radius:var(--wa-border-radius-m, 0.375rem);outline:none;box-sizing:border-box}.goodwill-amount__input.sc-ir-fd-confirm-dialog:focus{border-color:var(--wa-color-brand-500, #6366f1);box-shadow:0 0 0 2px var(--wa-color-brand-100, #e0e7ff)}.confirm-dialog__radio-title.sc-ir-fd-confirm-dialog,.confirm-dialog__radio-hint.sc-ir-fd-confirm-dialog{padding:0;margin:0}.confirm-dialog__radio-hint.sc-ir-fd-confirm-dialog{display:block;color:var(--wa-form-control-hint-color);font-weight:var(--wa-form-control-hint-font-weight);line-height:var(--wa-form-control-hint-line-height);margin-block-start:0.5em;font-size:var(--wa-font-size-smaller)}";
const IrFdConfirmDialogStyle0 = irFdConfirmDialogCss;

const CONFIGS = {
    'void': (doc, fdType) => ({
        title: fdType === FdTypes.Invoice ? 'Credit Note' : 'Void Document',
        message: `Are you sure you want to void ${doc}? This will issue a credit ${fdType === FdTypes.Invoice ? 'note' : 'receipt'} and cannot be undone.`,
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
const IrFdConfirmDialog = /*@__PURE__*/ proxyCustomElement(class IrFdConfirmDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.confirmed = createEvent(this, "confirmed", 7);
        this.cancelled = createEvent(this, "cancelled", 7);
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
        const showVoidOptions = this.action === 'void' && this.fdType !== FdTypes.Receipt;
        return (h("ir-dialog", { key: 'dddeb155816e53b4d789aa8df5e17291bd0bea67', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = 'credit-note';
                this.goodwillAmount = null;
            } }, !showVoidOptions && h("p", { key: '6c1fa7b37b999374af55e5b230d1fc990832e7f1', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: '8b5feb3ee8486a0f8dd7b9f90f779d34f76816e8', class: "void-options" }, h("wa-radio-group", { key: 'd42ebfe653b5e1a3e95a798e25b17c3a6847f146', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: '120dcb872cf816303899b46d0b0ed7bebb2dc696', value: "credit-note" }, h("p", { key: '265828c7ce4afd8dd90143d8a80c49e3e0728999', class: "confirm-dialog__radio-title" }, "Credit Note to reverse Invoice ", h("b", { key: '4291962e4ac9b299ae7145dbf19ab3d393d8e166' }, this.docNumber)), h("p", { key: 'f6613e4122da47f4a96bbb6f8947941bbefb7002', class: "confirm-dialog__radio-hint" }, "Issue a Credit Note to reverse the invoice and unlock all invoiced entries for future invoicing.")), h("wa-radio", { key: 'bb47cb411eaaf9d6eea927759be00784f6a02a31', value: "goodwill" }, h("p", { key: 'd58eea997ea0452eecd71e64244c6436e8e83065', class: "confirm-dialog__radio-title" }, "Adjustment Credit"), h("p", { key: 'dd06f93c0624ceaef04788877c633540bc15d3b4', class: "confirm-dialog__radio-hint" }, "Add a folio credit adjustment to create a fiscal credit note document related to ", h("b", { key: '03da7d7da6f4356c6a1ce1284534d61ec378948c' }, this.docNumber)))), this.voidType === 'goodwill' && (h("ir-input", { key: '73f062b88db2df39e110c9065dffe848781c8219', style: { marginLeft: '1.5rem' }, max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, defaultValue: this.goodwillAmount, "onText-change": e => (this.goodwillAmount = e.detail) }, h("span", { key: 'd410769ac0f71e52dd155beebde6491436afe17a', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: '2cea736fa3ff516c829e39cecdbcaab07a5f0dfb', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '0fa4bbd4abca338ba0c693acbb3c049ab09dfc8a', size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), h("ir-custom-button", { key: 'c43cb92305c158aef6c668dba1c85f922b713441', size: "medium", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
                amount: Number(this.goodwillAmount),
                voidType: this.voidType,
            }), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
    }
    static get style() { return IrFdConfirmDialogStyle0; }
}, [2, "ir-fd-confirm-dialog", {
        "open": [4],
        "action": [1],
        "docNumber": [1, "doc-number"],
        "isConfirming": [4, "is-confirming"],
        "amount": [2],
        "fdType": [1, "fd-type"],
        "voidType": [32],
        "goodwillAmount": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-fd-confirm-dialog", "ir-custom-button", "ir-dialog", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFdConfirmDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrFdConfirmDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-fd-confirm-dialog2.js.map