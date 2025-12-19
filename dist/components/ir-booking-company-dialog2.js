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
    async closeCompanyForm() {
        this.open = false;
        this.companyFormClosed.emit();
    }
    render() {
        const formId = `${this.booking.booking_nbr}-${v4()}`;
        return (h("ir-dialog", { key: '42d375f0a34b53878befbb1d11437bea565ffcb5', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: "Company", id: "dialog-overview" }, this.open && (h("ir-booking-company-form", { key: 'b5b51f9fe13de80b7244fb8d9fc161c3853bc3fc', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), h("div", { key: 'd5338729455ee81770b16fb8a2b6dba90f52a3d0', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '03075d6a62ef691b437d787b2dbb1b3d2dd671e5', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'e1cbc84b459e693d0fa2542033c34589f691e010', type: "submit", form: formId, loading: isRequestPending('/DoReservation'), size: "medium", variant: "brand" }, "Save"))));
    }
    static get style() { return IrBookingCompanyDialogStyle0; }
}, [2, "ir-booking-company-dialog", {
        "booking": [16],
        "open": [32],
        "openCompanyForm": [64],
        "closeCompanyForm": [64]
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