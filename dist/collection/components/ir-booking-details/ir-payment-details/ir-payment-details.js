import { h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import { PaymentService } from "../../../services/payment.service";
import locales from "../../../stores/locales.store";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrPaymentDetails {
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
    dialogRef;
    handlePaymentGeneration(e) {
        const value = e.detail;
        const paymentType = this.paymentEntries?.types?.find(p => p.CODE_NAME === (this.booking.status.code === '003' ? value.pay_type_code : '001'));
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: {
                payment: {
                    ...value,
                    date: moment().format('YYYY-MM-DD'),
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
            date: moment().format('YYYY-MM-DD'),
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
        this.dialogRef.openModal();
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
            h("ir-dialog", { onIrDialogHide: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, onIrDialogAfterHide: e => {
                    this.handleCancelModal(e);
                }, ref: el => (this.dialogRef = el), label: "Alert", lightDismiss: this.modalMode !== 'delete' }, h("p", null, this.modalMode === 'delete' ? locales.entries.Lcz_IfDeletedPermantlyLost : locales.entries.Lcz_EnteringAmountGreaterThanDue), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { size: "medium", "data-dialog": "close", variant: "neutral", appearance: "filled" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { size: "medium", onClickHandler: e => this.handleConfirmModal(e), variant: this.modalMode === 'delete' ? 'danger' : 'brand' }, this.modalMode === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm))),
        ];
    }
    static get is() { return "ir-payment-details"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-details.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-details.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "paymentActions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPaymentAction[]",
                    "resolved": "IPaymentAction[]",
                    "references": {
                        "IPaymentAction": {
                            "location": "import",
                            "path": "@/services/payment.service",
                            "id": "src/services/payment.service.ts::IPaymentAction"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "property-id",
                "reflect": false
            },
            "paymentEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PaymentEntries",
                    "resolved": "{ types: IEntries[]; groups: IEntries[]; methods: IEntries[]; }",
                    "references": {
                        "PaymentEntries": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::PaymentEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "confirmModal": {},
            "toBeDeletedItem": {},
            "modalMode": {}
        };
    }
    static get events() {
        return [{
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "resetExposedCancellationDueAmount",
                "name": "resetExposedCancellationDueAmount",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@/components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }, {
                "method": "openSidebar",
                "name": "openSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "PaymentSidebarEvent",
                    "resolved": "{ type: \"payment-folio\"; payload: { payment: Payment; mode: FolioEntryMode; }; }",
                    "references": {
                        "PaymentSidebarEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::PaymentSidebarEvent"
                        }
                    }
                }
            }, {
                "method": "openPrintScreen",
                "name": "openPrintScreen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "PrintScreenOptions",
                    "resolved": "{ mode: \"invoice\" | \"printing\" | \"proforma\" | \"creditnote\"; } | { mode: \"receipt\"; payload: { pid: string; rnb: string; }; }",
                    "references": {
                        "PrintScreenOptions": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::PrintScreenOptions"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "generatePayment",
                "method": "handlePaymentGeneration",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-payment-details.js.map
