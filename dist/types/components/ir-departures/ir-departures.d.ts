import { Booking } from "../../models/booking.dto";
import { Payment, PaymentEntries } from '../ir-booking-details/types';
import { CheckoutRoomEvent } from "../../components";
export declare class IrDepartures {
    ticket: string;
    propertyid: number;
    language: string;
    p: string;
    bookingNumber: number;
    booking: Booking;
    paymentEntries: PaymentEntries;
    isPageLoading: boolean;
    payment: Payment;
    checkoutState: CheckoutRoomEvent;
    invoiceState: CheckoutRoomEvent;
    /** Room identifier whose check-out dialog should auto-open inside the booking-details drawer (early check-out redirect). */
    checkoutRoomIdentifier: string;
    private apiClientService;
    private roomService;
    private bookingService;
    private setupService;
    private paymentFolioRef;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handleOpen(e: CustomEvent): void;
    handleBookingPayment(e: CustomEvent): void;
    handleResetExposedCancellationDueAmount(e: CustomEvent): Promise<void>;
    private init;
    private getBookings;
    private handleCheckoutRoom;
    private handlePaginationChange;
    private handleCheckoutDialogClosed;
    private handlePaginationPageSizeChange;
    private handleInvoiceClose;
    render(): any;
}
