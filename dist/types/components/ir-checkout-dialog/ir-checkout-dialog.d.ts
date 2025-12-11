import { Booking } from "../../models/booking.dto";
import { EventEmitter } from '../../stencil-public-runtime';
import { BookingInvoiceInfo } from '../ir-invoice/types';
export type CheckoutDialogCloseEvent = {
    reason: 'cancel' | 'checkout' | 'openInvoice';
};
export declare class IrCheckoutDialog {
    open: boolean;
    /**
     * Booking data for the current room checkout action.
     */
    booking: Booking;
    /**
     * Unique identifier of the room being checked out.
     */
    identifier: string;
    isLoading: 'checkout' | 'skipCheckout' | 'checkout&invoice' | 'page';
    buttons: Set<'checkout' | 'checkout_without_invoice' | 'invoice_checkout'>;
    invoiceInfo: BookingInvoiceInfo;
    checkoutDialogClosed: EventEmitter<CheckoutDialogCloseEvent>;
    private bookingService;
    private checkoutRoom;
    handleOpenChange(newValue: boolean, oldValue: boolean): void;
    private init;
    private setupButtons;
    render(): any;
}
