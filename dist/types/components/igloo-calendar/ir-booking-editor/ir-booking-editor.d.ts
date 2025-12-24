import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { BlockedDatePayload, BookingEditorMode, BookingStep } from './types';
export declare class IrBookingEditor {
    propertyId: string | number;
    language: string;
    roomTypeIds: (string | number)[];
    identifier: string;
    booking: Booking;
    mode: BookingEditorMode;
    checkIn: string;
    checkOut: string;
    step: BookingStep;
    blockedUnit: BlockedDatePayload;
    unitId: string;
    isLoading: boolean;
    resetBookingEvt: EventEmitter<void>;
    loadingChanged: EventEmitter<{
        cause: string | null;
    }>;
    adjustBlockedUnit: EventEmitter<any>;
    private roomService;
    private bookingService;
    private bookingEditorService;
    private room;
    private get adjustedCheckout();
    componentWillLoad(): void;
    handleModeChange(newMode: BookingEditorMode, oldMode: BookingEditorMode): void;
    handleGuestSelected(e: CustomEvent): void;
    private initializeApp;
    disconnectedCallback(): void;
    handleCheckAvailability(e: CustomEvent): void;
    /**
     * Initializes booking draft and guest data
     * based on the current editor mode.
     *
     * Throws if required booking data is missing.
     */
    private initializeDraftFromBooking;
    private updateBooking;
    private checkBookingAvailability;
    private doReservation;
    private assignCountryCode;
    private fetchSetupEntriesAndInitialize;
    private setOtherProperties;
    private setSourceOptions;
    private getFilteredSourceOptions;
    private fetchSetupEntries;
    render(): any;
}
