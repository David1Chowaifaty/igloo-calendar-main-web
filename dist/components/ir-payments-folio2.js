import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-payment-item2.js';

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
        return (h("div", { key: '5de39847ba10b5f6f71c3c878422a753e27e7bc6', class: "mt-1" }, h("div", { key: 'cead0e15b39c3fdcb70cc5f340b3a56a227b087f', class: "d-flex flex-column rounded payment-container" }, h("div", { key: 'dd8582187346cb63f7081406c8a9f859ded1fbb0', class: "d-flex align-items-center justify-content-between" }, h("p", { key: '06aa5207487feeea895b23a7adddaa5397fae06e', class: "font-size-large p-0 m-0" }, "Guest Folio"), h("ir-button", { key: '09c0edb8b81ab526461ebd8254775e91a342659c', id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: this.handleAddPayment })), h("div", { key: 'd264f7bb0d68be53a551b3554cd60122ae458349', class: "mt-1 card p-1 payments-container" }, this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()))));
    }
    static get style() { return IrPaymentsFolioStyle0; }
}, [2, "ir-payments-folio", {
        "payments": [16],
        "paymentTypes": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payments-folio", "ir-button", "ir-icons", "ir-payment-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentsFolio);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentsFolio as I, defineCustomElement as d };

//# sourceMappingURL=ir-payments-folio2.js.map