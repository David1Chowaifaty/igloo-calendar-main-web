import { Booking, Day, Room } from "../../models/booking.dto";
import { EventEmitter } from '../../stencil-public-runtime';
import { BookingInvoiceInfo } from '../ir-invoice/types';
import { Agent } from "../../services/agents/type";
import { PaymentEntries } from '../ir-booking-details/types';
export type CheckoutDialogCloseEvent = {
    reason: 'cancel' | 'checkout' | 'openInvoice';
};
export declare class IrCheckoutDialog {
    open: boolean;
    booking: Booking;
    identifier: string;
    isLoading: 'checkout' | 'skipCheckout' | 'checkout&invoice' | 'page';
    buttons: Set<'checkout' | 'checkout_without_invoice' | 'invoice_checkout'>;
    invoiceInfo: BookingInvoiceInfo;
    room: Room;
    isEarlyCheckout: boolean;
    remainingDays: Day[];
    penaltyAmount: number;
    agent: Agent;
    paymentEntries: PaymentEntries;
    checkoutDialogClosed: EventEmitter<CheckoutDialogCloseEvent>;
    private bookingService;
    private agentService;
    private cityLedgerService;
    private initialPenaltyStr;
    private transactions;
    private paymentFolioRef;
    private get remainingTotal();
    private get currencySymbol();
    private formatAmount;
    private checkoutRoom;
    handleOpenChange(newValue: boolean, oldValue: boolean): void;
    private get missingClSummary();
    private init;
    private detectEarlyCheckout;
    /**
     * Determines which checkout action buttons to surface.
     *
     * Decision rules (evaluated after `invoiceInfo` is loaded):
     *
     * 1. Filter `invoiceable_items` to items that still need invoicing — exclude
     *    `AlreadyInvoiced` and `PickupCancellationPolicy` reasons.
     * 2. From those, isolate room/accommodation items (`type === 'BSA'`).
     * 3. Button set:
     *    - Nothing outstanding           → `checkout` only
     *    - Any outstanding items         → `invoice_checkout` (check out + invoice guest)
     *    - 2+ outstanding room items     → also add `checkout_without_invoice` (skip invoicing)
     *
     * `checkout_without_invoice` is withheld when only one room is un-invoiced because
     * the "check out & invoice" path already covers that case cleanly.
     */
    private setupButtons;
    private renderEarlyCheckoutContent;
    private get duePayment();
    private renderDueAmountWarning;
    private renderSameDayWarning;
    private renderMissingClWarning;
    render(): any;
}
