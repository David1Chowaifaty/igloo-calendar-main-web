import { Booking, Day, Room } from "../../models/booking.dto";
import { EventEmitter } from '../../stencil-public-runtime';
import { BookingInvoiceInfo } from '../ir-invoice/types';
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
    checkoutDialogClosed: EventEmitter<CheckoutDialogCloseEvent>;
    private bookingService;
    private initialPenaltyStr;
    private get remainingTotal();
    private get currencySymbol();
    private formatAmount;
    private checkoutRoom;
    handleOpenChange(newValue: boolean, oldValue: boolean): void;
    private init;
    private detectEarlyCheckout;
    private setupButtons;
    private renderEarlyCheckoutContent;
    render(): any;
}
