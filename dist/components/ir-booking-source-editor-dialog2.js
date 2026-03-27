import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$5 } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-view2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irBookingSourceEditorDialogCss = ".sc-ir-booking-source-editor-dialog-h{display:block}";
const IrBookingSourceEditorDialogStyle0 = irBookingSourceEditorDialogCss;

const IrBookingSourceEditorDialog = /*@__PURE__*/ proxyCustomElement(class IrBookingSourceEditorDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    resetBookingEvt;
    open = false;
    isLoading = false;
    async openDialog() {
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    render() {
        return (h("ir-dialog", { key: '7ee849c75951ba59e20b86b96f03f64efd0676fd', label: "Change Booking Source", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (h("ir-booking-source-editor-form", { key: '56724f41e28225c3cb1b7269d6250c14c1cb608e', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: 'dbecf435d6d621c2911db5a3292eaf9d8c452cf7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '5bb7e9b35ba637fe5419f9768fa00a38b6d5fc7a', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { key: '7bfd7039193b130bd78312b522810587b585f395', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading }, "Save"))));
    }
    static get style() { return IrBookingSourceEditorDialogStyle0; }
}, [2, "ir-booking-source-editor-dialog", {
        "booking": [16],
        "open": [32],
        "isLoading": [32],
        "openDialog": [64],
        "closeDialog": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-source-editor-dialog", "ir-booking-assign-items", "ir-booking-source-editor-form", "ir-custom-button", "ir-date-view", "ir-dialog", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingSourceEditorDialog);
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingSourceEditorDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-source-editor-dialog2.js.map