import { Booking } from "../../models/booking.dto";
import { Payment, PaymentEntries, RoomGuestsPayload } from '../ir-booking-details/types';
import { ICountry } from "../../models/IBooking";
export declare class IrArrivals {
    /**
     * Authentication token issued by the PMS backend.
     * Required for initializing the component and making API calls.
     */
    ticket: string;
    /**
     * ID of the property (hotel) for which arrivals should be displayed.
     * Used in API calls related to rooms, bookings, and check-ins.
     */
    propertyid: number;
    /**
     * Two-letter language code (ISO) used for translations and API locale.
     * Defaults to `'en'`.
     */
    language: string;
    /**
     * Property alias or short identifier used by backend endpoints (aname).
     * Passed to `getExposedProperty` when initializing the component.
     */
    p: string;
    /**
     * Number of arrivals to load per page in the arrivals table.
     * Used to configure pagination via Arrivals Store.
     * Defaults to `20`.
     */
    pageSize: number;
    bookingNumber: number;
    booking: Booking;
    paymentEntries: PaymentEntries;
    isPageLoading: boolean;
    payment: Payment;
    roomGuestState: RoomGuestsPayload;
    countries: ICountry[];
    private tokenService;
    private roomService;
    private bookingService;
    private paymentFolioRef;
    componentWillLoad(): void;
    handlePageSizeChange(newValue: number, oldValue: number): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handleBookingPayment(e: CustomEvent): void;
    handleOpen(e: CustomEvent): void;
    handleResetExposedCancellationDueAmount(e: CustomEvent): Promise<void>;
    private init;
    private getBookings;
    private handlePaginationChange;
    private handlePaginationPageSizeChange;
    private handleCheckingRoom;
    render(): any;
}
