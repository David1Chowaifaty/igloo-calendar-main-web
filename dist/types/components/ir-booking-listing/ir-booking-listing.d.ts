import { Booking } from "../../models/booking.dto";
import { PaymentEntries } from '../ir-booking-details/types';
export declare class IrBookingListing {
    el: HTMLElement;
    language: string;
    ticket: string;
    propertyid: number;
    rowCount: number;
    p: string;
    baseUrl: string;
    isLoading: boolean;
    currentPage: number;
    totalPages: number;
    oldStartValue: number;
    editBookingItem: {
        booking: Booking;
        cause: 'edit' | 'payment' | 'delete' | 'guest';
    } | null;
    showCost: boolean;
    paymentEntries: PaymentEntries;
    private bookingListingService;
    private bookingService;
    private roomService;
    private token;
    private listingModal;
    private listingModalTimeout;
    private statusColors;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    initializeApp(): Promise<void>;
    handleSideBarToggle(e: CustomEvent<boolean>): void;
    geSearchFiltersFromParams(): void;
    getPaginationBounds(): {
        startItem: number;
        endItem: number;
        totalCount: number;
    };
    openModal(): void;
    disconnectedCallback(): void;
    handleResetData(e: CustomEvent): Promise<void>;
    handleResetStoreData(e: CustomEvent): Promise<void>;
    handleBookingChanged(e: CustomEvent<Booking>): void;
    renderItemRange(): string;
    updateData(): Promise<void>;
    private calculateTotalPersons;
    render(): any;
}
