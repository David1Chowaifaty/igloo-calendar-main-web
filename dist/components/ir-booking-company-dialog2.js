import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$4 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';
import { v as v4 } from './v4.js';

const irBookingCompanyDialogCss = ".sc-ir-booking-company-dialog-h{display:block}";
const IrBookingCompanyDialogStyle0 = irBookingCompanyDialogCss;

const IrBookingCompanyDialog = /*@__PURE__*/ proxyCustomElement(class IrBookingCompanyDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.companyFormClosed = createEvent(this, "companyFormClosed", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    open;
    companyFormClosed;
    resetBookingEvt;
    async openCompanyForm() {
        this.open = true;
    }
    render() {
        const formId = `${this.booking.booking_nbr}-${v4()}`;
        return (h("ir-dialog", { key: '5e47f2e5fccaef7d7b9def6c8994f2220f102a3f', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.open = false;
                this.companyFormClosed.emit();
            }, label: "Company", id: "dialog-overview" }, this.open && (h("ir-booking-company-form", { key: '2c70e96610e6b9d772a2519f14d2235e55ae0e2b', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
            }, formId: formId, booking: this.booking })), h("div", { key: 'e452e75c6a6dc906e6c0d381f886cdbf36fa939b', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '99b6a7db5b59047b1a272a7c2bb666599645671c', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: '3b4f6e5d270d16f42cd57518d17334809c9820fe', type: "submit", form: formId, loading: isRequestPending('/Do_Reservation'), size: "medium", variant: "brand" }, "Save"))));
    }
    static get style() { return IrBookingCompanyDialogStyle0; }
}, [2, "ir-booking-company-dialog", {
        "booking": [16],
        "open": [32],
        "openCompanyForm": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-company-dialog", "ir-booking-company-form", "ir-custom-button", "ir-dialog", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingCompanyDialog);
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
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

export { IrBookingCompanyDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-company-dialog2.js.map