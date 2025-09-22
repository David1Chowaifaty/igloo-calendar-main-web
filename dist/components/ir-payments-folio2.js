import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { H as HelpDocButton } from './HelpButton.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-payment-item2.js';
import { d as defineCustomElement$1 } from './ir-popover2.js';

const irPaymentsFolioCss = ".sc-ir-payments-folio-h{display:block}";
const IrPaymentsFolioStyle0 = irPaymentsFolioCss;

const IrPaymentsFolio = /*@__PURE__*/ proxyCustomElement(class IrPaymentsFolio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.addPayment = createEvent(this, "addPayment", 7);
        this.editPayment = createEvent(this, "editPayment", 7);
        this.deletePayment = createEvent(this, "deletePayment", 7);
        this.payments = [];
        this.handleAddPayment = () => {
            this.addPayment.emit();
        };
        this.handleEditPayment = (payment) => {
            this.editPayment.emit(payment);
        };
        this.handleDeletePayment = (payment) => {
            this.deletePayment.emit(payment);
        };
    }
    hasPayments() {
        return this.payments && this.payments.length > 0;
    }
    renderPaymentItem(payment, index) {
        return [
            h("ir-payment-item", { key: payment.id, payment: payment, onDeletePayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDeletePayment(e.detail);
                }, onEditPayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleEditPayment(e.detail);
                } }),
            index < this.payments.length - 1 && h("hr", { class: "p-0 m-0" }),
        ];
    }
    renderEmptyState() {
        return (h("div", { class: "text-center p-3" }, h("p", { class: "text-muted" }, "No payments recorded yet")));
    }
    render() {
        return (h("div", { key: 'e6a01e56988032972a6d864168cf4395ac655ab3', class: "mt-1" }, h("div", { key: '6f4875f689e1b92d2956df65087907b1ff150e02', class: "d-flex flex-column rounded payment-container" }, h("div", { key: '09444cdc1154ac579b6793198d5a88ff111d78a9', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '47f5d0aaca4421bc0a7d64acf35c08d1884159a2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: 'e46b8605bd3177f6fcf84772c952c5f5d263b694', class: "font-size-large p-0 m-0" }, "Guest Folio"), h(HelpDocButton, { key: 'e28cd63ef6473dccb0e75750494edcc790d123e5', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), h("ir-button", { key: '1fb522402dd1516afd7a6dd426bae45ced2374a0', id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: this.handleAddPayment })), h("div", { key: '9747909d9fbbabb4daf54371ead3b8cde0d4338b', class: "mt-1 card p-1 payments-container" }, this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()))));
    }
    static get style() { return IrPaymentsFolioStyle0; }
}, [2, "ir-payments-folio", {
        "payments": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payments-folio", "ir-button", "ir-icons", "ir-payment-item", "ir-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentsFolio);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentsFolio as I, defineCustomElement as d };

//# sourceMappingURL=ir-payments-folio2.js.map