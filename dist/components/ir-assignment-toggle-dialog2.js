import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irAssignmentToggleDialogCss = ".sc-ir-assignment-toggle-dialog-h{display:contents}.assignment-toggle-dialog__message.sc-ir-assignment-toggle-dialog{margin:0;font-size:0.9375rem;line-height:1.5;color:var(--wa-color-neutral-700, #3f3f46)}.assignment-toggle-dialog__footer.sc-ir-assignment-toggle-dialog{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrAssignmentToggleDialogStyle0 = irAssignmentToggleDialogCss;

const IrAssignmentToggleDialog = /*@__PURE__*/ proxyCustomElement(class IrAssignmentToggleDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.confirmToggle = createEvent(this, "confirmToggle", 7);
    }
    /** Dialog header title */
    label = 'Are you sure?';
    /** Message shown inside the dialog */
    message;
    /** Confirm button label */
    confirmLabel = 'Confirm';
    /** Cancel button label */
    cancelLabel = 'Cancel';
    /** Controls the loading spinner on the confirm button — set by the parent while the async operation runs */
    loading = false;
    /** Emitted when the user clicks confirm */
    confirmToggle;
    dialogRef;
    async openModal() {
        this.dialogRef?.openModal();
    }
    async closeModal() {
        this.dialogRef?.closeModal();
    }
    render() {
        return (h(Host, { key: '1aa171015c9695cb93f9def9a99e4c750473b8be' }, h("ir-dialog", { key: 'cf48982591e9f0dd7d62fe1daa800b0bcd94eead', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: '47bf49b74220e3158f3cb20c577f55e67fb6351f', class: "assignment-toggle-dialog__message" }, h("slot", { key: '4dde7588779dd11187f710f854f9b044f47d1d86', name: "message" }, this.message)), h("div", { key: 'fffea09a9d9d347ebe845dd61a7b7875d7dce239', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: '5a7d15dee2cb9833182ffe5b9f72b26720b7e5b5', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), h("ir-custom-button", { key: 'b61bb69987641187db168d26d99edda5d2982d73', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
    }
    static get style() { return IrAssignmentToggleDialogStyle0; }
}, [6, "ir-assignment-toggle-dialog", {
        "label": [1],
        "message": [1],
        "confirmLabel": [1, "confirm-label"],
        "cancelLabel": [1, "cancel-label"],
        "loading": [4],
        "openModal": [64],
        "closeModal": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-assignment-toggle-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAssignmentToggleDialog);
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

export { IrAssignmentToggleDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-assignment-toggle-dialog2.js.map