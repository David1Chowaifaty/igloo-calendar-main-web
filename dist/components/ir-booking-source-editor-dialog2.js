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
        return (h("ir-dialog", { key: 'e8a1afa2d1cd94831b89a57e34b6edecd9c789a6', label: "Change Booking Source", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (h("ir-booking-source-editor-form", { key: 'ee061e53f12639a67c1da013f630cbb86cec10f8', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '855c02be9b31f9324f48e599701c254a95e5ff53', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'c066a72f90f8640df31759f595705bdee7fff0d4', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { key: '70c57bf7b43f5853146816eff0ae9953967accb2', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading }, "Save"))));
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