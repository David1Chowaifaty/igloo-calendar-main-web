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
        return (h(Host, { key: '1788de8c57d01ddddd4d06844e5d294c40dcd6a8' }, h("ir-dialog", { key: 'fd7ea1806bcab7ae8f530456e47f6bfebfffd5cb', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: 'ea7c3277a986d7227398f43010e68481bbe93134', class: "assignment-toggle-dialog__message" }, h("slot", { key: '65acb49e308b101973bc3bb26e9a0a4ad3f9f365', name: "message" }, this.message)), h("div", { key: '115d53e0117c3f918292418cd1196b78fd058f6b', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: '9847e6441cdb8557e9225b5781d125e0722cfce8', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), h("ir-custom-button", { key: '46b5a422c7657121d18bedcc4d96ec478fa51d07', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
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