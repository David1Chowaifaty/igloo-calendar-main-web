import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { H as HelpDocButton } from './HelpButton.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
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
        return (h("div", { class: "text-center p-1" }, h("p", { class: "text-muted" }, "No payments recorded yet")));
    }
    render() {
        return (h("wa-card", { key: '5ab1ef331d3627818c89811afe9749204ff508dc', class: " payments-container" }, h("div", { key: 'fb173d5f54c0149199fc127d37354171a266d68e', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: 'c03924f019303fc0aa9f273061fdc1b50a91abaa', class: "font-size-large p-0 m-0" }, "Guest Folio"), h(HelpDocButton, { key: '6298ac2302e95e4496c46729472e0af37b031e8b', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), h("wa-tooltip", { key: 'e5123b24394854235a3dddcbb398378fb5ffbb12', for: "create-payment" }, "Add Payment"), h("ir-custom-button", { key: '1c6908c5894c7f13320014892f73d8825d4b4068', slot: "header-actions", id: "create-payment", size: "small", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, h("wa-icon", { key: '94921b687a3fc1b9b0bed1426f392a33268f1544', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
    }
    static get style() { return IrPaymentsFolioStyle0; }
}, [2, "ir-payments-folio", {
        "payments": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payments-folio", "ir-custom-button", "ir-payment-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentsFolio);
            }
            break;
        case "ir-custom-button":
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