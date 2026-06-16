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
        return (h(Host, { key: '9e80758c2050502ab4f84c18b5ed8ef6ec0656d5' }, h("ir-dialog", { key: '89be66165cfbdd9e4e56de8a8c92f532ba594b61', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: '22845247f4e2c057e544fbe428383d846e02b560', class: "assignment-toggle-dialog__message" }, h("slot", { key: 'abe8fc08284e004ad5887a938a031f9d1c4d8706', name: "message" }, this.message)), h("div", { key: 'e19d62bfc37f051a4164053584a857173c3ceffc', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: 'c27aea0785e027c8ed60b05474b6e70de8013f63', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), h("ir-custom-button", { key: '2ed49e48cca2acfc755b0aed3f460d1b8af44349', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
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