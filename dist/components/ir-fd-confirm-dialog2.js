import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { F as FdTypes } from './enums.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

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
        return (h("ir-dialog", { key: '032522a9700e80c9967cd3510d015d7d46b2c1e4', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = 'credit-note';
                this.goodwillAmount = null;
            } }, h("p", { key: '45f1ce167a8d14e033c754cc4d42468871ee3c63', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: '6d286f6a73233ed2a7fd016c385cd76b8f468d19', class: "void-options" }, h("wa-radio-group", { key: '7d046955381e1037b66b56ac0aca3856fc721630', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: 'c257bb35af7b9aa5ce167c00bfb2d89d4e9fa786', value: "credit-note" }, "Credit Note"), h("wa-radio", { key: 'a704c900790dad1856209572047f5424e827d34c', value: "goodwill" }, "Goodwill Credit")), this.voidType === 'goodwill' && (h("ir-input", { key: '899b9797e79fc6fd078aa35b517a8c750fc223d4', max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, onInput: (e) => (this.goodwillAmount = e.target.value) }, h("span", { key: '07f4339c774c2803f4b3547347eb0420ad2106ca', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: '5a9a6f383da39006a5b93322414239a403470c0b', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '6b59abdd0f0b8ea1dd44e0b821250c4b98026c31', size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), h("ir-custom-button", { key: 'ffbf422dc23c48030f7ecfcf100a28559785f345', size: "medium", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
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