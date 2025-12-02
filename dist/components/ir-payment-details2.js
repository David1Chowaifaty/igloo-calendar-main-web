import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { P as PaymentService } from './payment.service.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$a } from './ir-applicable-policies2.js';
import { d as defineCustomElement$9 } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-icons2.js';
import { d as defineCustomElement$5 } from './ir-label2.js';
import { d as defineCustomElement$4 } from './ir-modal2.js';
import { d as defineCustomElement$3 } from './ir-payment-item2.js';
import { d as defineCustomElement$2 } from './ir-payment-summary2.js';
import { d as defineCustomElement$1 } from './ir-payments-folio2.js';

const irPaymentDetailsCss = ".sc-ir-payment-details-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-details-h *.sc-ir-payment-details{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}";
const IrPaymentDetailsStyle0 = irPaymentDetailsCss;

const IrPaymentDetails = /*@__PURE__*/ proxyCustomElement(class IrPaymentDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancellationDueAmount = createEvent(this, "resetExposedCancellationDueAmount", 7);
        this.toast = createEvent(this, "toast", 7);
        this.openSidebar = createEvent(this, "openSidebar", 7);
        this.openPrintScreen = createEvent(this, "openPrintScreen", 7);
    }
    booking;
    paymentActions;
    propertyId;
    paymentEntries;
    confirmModal = false;
    toBeDeletedItem = null;
    modalMode = null;
    resetBookingEvt;
    resetExposedCancellationDueAmount;
    toast;
    openSidebar;
    openPrintScreen;
    paymentService = new PaymentService();
    bookingService = new BookingService();
    handlePaymentGeneration(e) {
        const value = e.detail;
        const paymentType = this.paymentEntries?.types?.find(p => p.CODE_NAME === (this.booking.status.code === '003' ? value.pay_type_code : '001'));
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: {
                payment: {
                    ...value,
                    date: hooks().format('YYYY-MM-DD'),
                    id: -1,
                    amount: value.amount,
                    payment_type: paymentType
                        ? {
                            code: paymentType.CODE_NAME,
                            description: paymentType.CODE_VALUE_EN,
                            operation: paymentType.NOTES,
                        }
                        : null,
                    designation: paymentType?.CODE_VALUE_EN ?? null,
                },
                mode: 'payment-action',
            },
        });
    }
    handleAddPayment = (props) => {
        let payment = {
            id: -1,
            date: hooks().format('YYYY-MM-DD'),
            amount: null,
            currency: calendar_data.currency,
            designation: null,
            reference: null,
        };
        if (props) {
            const { amount, type } = props;
            const cashMethod = this.paymentEntries.methods.find(pt => pt.CODE_NAME === '001');
            const payment_method = {
                code: cashMethod.CODE_NAME,
                description: cashMethod.CODE_VALUE_EN,
                operation: cashMethod.NOTES,
            };
            const paymentType = this.paymentEntries.types.find(pt => pt.CODE_NAME === (type === 'cancellation-penalty' ? '001' : '010'));
            payment = {
                ...payment,
                amount: amount,
                designation: paymentType.CODE_VALUE_EN,
                payment_type: {
                    code: paymentType.CODE_NAME,
                    description: paymentType.CODE_VALUE_EN,
                    operation: paymentType.NOTES,
                },
                payment_method: type === 'refund' ? undefined : payment_method,
            };
            this.openSidebar.emit({
                type: 'payment-folio',
                payload: {
                    payment,
                    mode: 'payment-action',
                },
            });
            return;
        }
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: {
                payment,
                mode: 'new',
            },
        });
    };
    handleEditPayment = (payment) => {
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: { payment, mode: 'edit' },
        });
    };
    handleDeletePayment = (payment) => {
        this.modalMode = 'delete';
        this.toBeDeletedItem = payment;
        this.openModal();
    };
    async handleIssueReceipt(detail) {
        if (detail.receipt_nbr) {
            this.openPrintScreen.emit({
                mode: 'receipt',
                payload: {
                    pid: detail.id.toString(),
                    rnb: detail.receipt_nbr,
                },
            });
            return;
        }
        const _number = await this.bookingService.getNextValue({ starter: 'RC' });
        this.openPrintScreen.emit({
            mode: 'receipt',
            payload: {
                pid: detail.id.toString(),
                rnb: `RC-${_number.My_Result}`,
            },
        });
    }
    async cancelPayment() {
        try {
            await this.paymentService.CancelPayment(this.toBeDeletedItem.id);
            const newPaymentArray = this.booking.financial.payments.filter((item) => item.id !== this.toBeDeletedItem.id);
            this.booking = {
                ...this.booking,
                financial: { ...this.booking.financial, payments: newPaymentArray },
            };
            this.confirmModal = false;
            this.resetBookingEvt.emit(null);
            this.resetExposedCancellationDueAmount.emit(null);
            this.toBeDeletedItem = null;
            this.modalMode = null;
        }
        catch (error) {
            console.error('Error canceling payment:', error);
            this.toast.emit({
                type: 'error',
                title: 'Error',
                description: 'Failed to cancel payment. Please try again.',
                position: 'top-right',
            });
        }
    }
    handleConfirmModal = async (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.modalMode === 'delete') {
            await this.cancelPayment();
        }
    };
    handleCancelModal = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalMode = null;
        this.toBeDeletedItem = null;
    };
    openModal() {
        const modal = document.querySelector('.delete-record-modal');
        modal?.openModal();
    }
    hasValidFinancialData() {
        return Boolean(this.booking?.financial);
    }
    // private shouldShowPaymentActions(): boolean {
    //   return Boolean(this.paymentActions?.filter(pa => pa.amount !== 0).length > 0 && this.booking.is_direct);
    // }
    shouldShowRefundButton() {
        if (!this.booking.is_direct) {
            return false;
        }
        if (this.booking.financial.due_amount === 0) {
            return false;
        }
        if (this.booking.financial.cancelation_penality_as_if_today === 0) {
            return false;
        }
        if (this.booking.is_requested_to_cancel || ['003', '004'].includes(this.booking.status.code)) {
            return this.booking.financial.cancelation_penality_as_if_today < 0;
        }
        return false;
    }
    shouldCancellationButton() {
        if (!this.booking.is_direct) {
            return false;
        }
        if (this.booking.financial.due_amount === 0) {
            return false;
        }
        if (this.booking.financial.cancelation_penality_as_if_today === 0) {
            return false;
        }
        if (['003', '004'].includes(this.booking.status.code) && this.booking.financial.cancelation_penality_as_if_today > 0) {
            return true;
        }
        return false;
    }
    render() {
        if (!this.hasValidFinancialData()) {
            return null;
        }
        const { financial, currency } = this.booking;
        return [
            h("wa-card", null, h("ir-payment-summary", { isBookingCancelled: ['003', '004'].includes(this.booking.status.code), totalCost: financial.gross_cost, balance: financial.due_amount, collected: this.booking.financial.collected + this.booking.financial.refunds, currency: currency }), h("ir-booking-guarantee", { booking: this.booking, bookingService: this.bookingService }), !['003', '004'].includes(this.booking.status.code) && this.booking.is_direct && (h("ir-applicable-policies", { propertyId: this.propertyId, booking: this.booking })), this.shouldShowRefundButton() && (h("div", { class: "d-flex mt-1" }, h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'refund', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, `Refund ${formatAmount(currency.symbol, Math.abs(this.booking.financial.cancelation_penality_as_if_today))}`))), this.shouldCancellationButton() && (h("div", { class: "d-flex mt-1" }, h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'cancellation-penalty', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, `Charge cancellation penalty ${formatAmount(currency.symbol, this.booking.financial.cancelation_penality_as_if_today)}`)))),
            h("ir-payments-folio", { payments: financial.payments || [], onAddPayment: () => this.handleAddPayment(), onEditPayment: e => this.handleEditPayment(e.detail), onDeletePayment: e => this.handleDeletePayment(e.detail), onIssueReceipt: e => this.handleIssueReceipt(e.detail) }),
            h("ir-modal", { item: this.toBeDeletedItem, class: "delete-record-modal", modalTitle: locales.entries.Lcz_Confirmation, modalBody: this.modalMode === 'delete' ? locales.entries.Lcz_IfDeletedPermantlyLost : locales.entries.Lcz_EnteringAmountGreaterThanDue, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: this.modalMode === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modalMode === 'delete' ? 'danger' : 'primary', onConfirmModal: this.handleConfirmModal, onCancelModal: this.handleCancelModal }),
        ];
    }
    static get style() { return IrPaymentDetailsStyle0; }
}, [2, "ir-payment-details", {
        "booking": [1040],
        "paymentActions": [16],
        "propertyId": [2, "property-id"],
        "paymentEntries": [16],
        "confirmModal": [32],
        "toBeDeletedItem": [32],
        "modalMode": [32]
    }, [[0, "generatePayment", "handlePaymentGeneration"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-details", "ir-applicable-policies", "ir-booking-guarantee", "ir-button", "ir-custom-button", "ir-icons", "ir-label", "ir-modal", "ir-payment-item", "ir-payment-summary", "ir-payments-folio"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentDetails);
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentDetails as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-details2.js.map