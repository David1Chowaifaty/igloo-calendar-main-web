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
        return (h(Host, { key: 'defab566d434309931e10365e985acdbfd12ee59' }, h("ir-dialog", { key: '1af0491ab49a51f81557b37d8568464fa787777b', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: '372927ee7beab834f04dd09d8854e051bb5f48b1', class: "assignment-toggle-dialog__message" }, h("slot", { key: '93523191a5bfb57cf07437a0baf2075391370397', name: "message" }, this.message)), h("div", { key: '8450ae58bdd5df410b669646c690c65784677fe4', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: '07957afe2aa6123098d410a77c58ce070959f1c5', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), h("ir-custom-button", { key: '652dc35b199e088eca671fd4314398c4171b17e1', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
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