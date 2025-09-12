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
        return (h("div", { key: '4a3f5682943b46e6bfcea1c8960d428057f91c7c', class: "mt-1" }, h("div", { key: 'c3d1b40d1faff294083d5fe8b383242c1c97c60f', class: "d-flex flex-column rounded payment-container" }, h("div", { key: 'b37776e93537628c7e2f9a664cdd39d0767d17f6', class: "d-flex align-items-center justify-content-between" }, h("p", { key: '00c8a0ff769864dc9665e0ef50f81e0bdefbc943', class: "font-size-large p-0 m-0" }, "Guest Folio"), h("ir-button", { key: '7d8ff18d170035365d31ad3538959736754ebd89', id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: this.handleAddPayment })), h("div", { key: 'cd46ecbfa1945649859008331e576e347d431d9c', class: "mt-1 card p-1 payments-container" }, this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()))));
    }
    static get style() { return IrPaymentsFolioStyle0; }
}, [2, "ir-payments-folio", {
        "payments": [16]
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