import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { F as FdTypes } from './enums.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

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
    static get style() { return IrFdConfirmDialogStyle0; }
}, [2, "ir-fd-confirm-dialog", {
        "open": [4],
        "action": [1],
        "docNumber": [1, "doc-number"],
        "isConfirming": [4, "is-confirming"],
        "fdType": [1, "fd-type"],
        "voidType": [32],
        "goodwillAmount": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-fd-confirm-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFdConfirmDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrFdConfirmDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-fd-confirm-dialog2.js.map