import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { H as HelpDocButton } from './HelpButton-0798ad05.js';

const irPaymentsFolioCss = ".sc-ir-payments-folio-h{display:block}.payment-divider.sc-ir-payments-folio{margin:0;padding:0}";

const IrPaymentsFolio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h("ir-empty-state", null);
    }
    render() {
        return (h("wa-card", { key: '67fbdb5b5c5e43327939fb0713d45444e1713a1b', class: " payments-container" }, h("div", { key: '17297b17414a68043bb09b5c10e447eaaca5868f', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: '7349cdc1a58a12c0f1bd707d665e78bbd336efe2', class: "font-size-large p-0 m-0" }, "Guest Folio"), h(HelpDocButton, { key: '9f9b2f04513d998f933d0b9535bc0a0f2de31683', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), h("wa-tooltip", { key: 'b2e00e807e903a627359fa5256e8f0ee81863d07', for: "create-payment" }, "Add Payment"), h("ir-custom-button", { key: 'a932f2dd3643a2a0fb00a1e78f3583549ed3ca78', slot: "header-actions", id: "create-payment", size: "small", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, h("wa-icon", { key: '1cb8a0468f5d5f902b31c9a324fdd9f8c389b332', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
    }
};
IrPaymentsFolio.style = irPaymentsFolioCss;

export { IrPaymentsFolio as ir_payments_folio };

//# sourceMappingURL=ir-payments-folio.entry.js.map