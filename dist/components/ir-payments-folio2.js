import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { H as HelpDocButton } from './HelpButton.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-empty-state2.js';
import { d as defineCustomElement$1 } from './ir-payment-item2.js';

const irPaymentsFolioCss = ".sc-ir-payments-folio-h{display:block}.payment-divider.sc-ir-payments-folio{margin:0;padding:0}";
const IrPaymentsFolioStyle0 = irPaymentsFolioCss;

const IrPaymentsFolio = /*@__PURE__*/ proxyCustomElement(class IrPaymentsFolio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.addPayment = createEvent(this, "addPayment", 7);
        this.editPayment = createEvent(this, "editPayment", 7);
        this.deletePayment = createEvent(this, "deletePayment", 7);
        this.issueReceipt = createEvent(this, "issueReceipt", 7);
    }
    payments = [];
    booking;
    isAddPaymentDisabled = false;
    addPayment;
    editPayment;
    deletePayment;
    issueReceipt;
    handleAddPayment = () => {
        this.addPayment.emit();
    };
    handleEditPayment = (payment) => {
        this.editPayment.emit(payment);
    };
    handleDeletePayment = (payment) => {
        this.deletePayment.emit(payment);
    };
    handleIssueReceipt(payment) {
        this.issueReceipt.emit(payment);
    }
    hasPayments() {
        return this.payments && this.payments.length > 0;
    }
    renderPaymentItem(payment, index) {
        if (payment.is_city_ledger) {
            return null;
        }
        return [
            h("ir-payment-item", { key: payment.id, payment: payment, onDeletePayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDeletePayment(e.detail);
                }, onEditPayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleEditPayment(e.detail);
                }, onIssueReceipt: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleIssueReceipt(e.detail);
                } }),
            index < this.payments.length - 1 && h("wa-divider", { class: "payment-divider" }),
        ];
    }
    renderEmptyState() {
        return h("ir-empty-state", null);
    }
    render() {
        return (h("wa-card", { key: '865ce5eafe8525e7159b47048d426e883e23308c', class: " payments-container" }, h("div", { key: 'ae25eeccc4166a94bdfa7efdc0bcb6de684b628a', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: 'a5eb2a36b23329bedb7efdf7b82e3de27170f5ad', class: "font-size-large p-0 m-0" }, "Guest Folio"), h(HelpDocButton, { key: '18ca432460bf5b743ca44fab9f827d4a87a4dda5', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), !this.isAddPaymentDisabled && h("wa-tooltip", { key: '0411cc193093efe7f790988d460dd977c37ec825', for: "create-payment" }, "Add folio entry"), h("ir-custom-button", { key: 'fecad944e6f97026efa8ec90e1fd6a52358c567d', disabled: this.isAddPaymentDisabled, slot: "header-actions", id: "create-payment", size: "small", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, h("wa-icon", { key: '35ac5713862d41693fd45d9c1731e2e2a99fc191', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
    }
    static get style() { return IrPaymentsFolioStyle0; }
}, [2, "ir-payments-folio", {
        "payments": [16],
        "booking": [16],
        "isAddPaymentDisabled": [4, "is-add-payment-disabled"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payments-folio", "ir-custom-button", "ir-empty-state", "ir-payment-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentsFolio);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-empty-state":
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