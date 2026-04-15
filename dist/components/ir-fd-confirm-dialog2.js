import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irFdConfirmDialogCss = ".confirm-dialog__message.sc-ir-fd-confirm-dialog{margin:0;font-size:0.9375rem;color:var(--wa-color-text-normal, #111827);line-height:1.5}.confirm-dialog__footer.sc-ir-fd-confirm-dialog{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrFdConfirmDialogStyle0 = irFdConfirmDialogCss;

const CONFIGS = {
    'void': doc => ({
        title: 'Void Document',
        message: `Are you sure you want to void ${doc}? This will issue a credit note and cannot be undone.`,
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
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber) : null;
        return (h("ir-dialog", { key: '35509b0c95ef10221536283115f6ec6b39674b1c', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => this.cancelled.emit() }, h("p", { key: 'dfff8d2be95706b6ae62a5116b212fe89ee1574b', class: "confirm-dialog__message" }, config?.message ?? ''), h("div", { key: 'b71140fcfcf85821fa8e6a95816aabedd6aa3db5', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'df5d21ba6eea5ce2ab173ac0a4cc5b933cb35948', size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), h("ir-custom-button", { key: '2497294feb8dd9d3db21ea3b2fd26626732dbbcc', size: "medium", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit(), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
    }
    static get style() { return IrFdConfirmDialogStyle0; }
}, [2, "ir-fd-confirm-dialog", {
        "open": [4],
        "action": [1],
        "docNumber": [1, "doc-number"],
        "isConfirming": [4, "is-confirming"]
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