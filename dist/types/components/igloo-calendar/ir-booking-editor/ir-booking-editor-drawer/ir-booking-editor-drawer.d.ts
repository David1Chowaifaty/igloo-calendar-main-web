import { EventEmitter } from '../../../../stencil-public-runtime';
import { BlockedDatePayload, BookingEditorMode, BookingStep } from '../types';
import { Booking } from "../../../../models/booking.dto";
export declare class IrBookingEditorDrawer {
    /** Controls drawer visibility (reflected to DOM). */
    open: boolean;
    /** Auth token used for API requests. */
    ticket: string;
    /** Property identifier. */
    propertyid: string;
    /** UI language code (default: `en`). */
    language: string;
    /** Booking being created or edited. */
    booking: Booking;
    /** Current booking editor mode. */
    mode: BookingEditorMode;
    /** Optional drawer title override. */
    label: string;
    /** Check-in date (ISO string). */
    checkIn: string;
    /** Check-out date (ISO string). */
    checkOut: string;
    /** Selected unit identifier. */
    unitId: string;
    /** Payload for blocked unit dates. */
    blockedUnit: BlockedDatePayload;
    /** Allowed room type identifiers. */
    roomTypeIds: (string | number)[];
    /** Room identifier used by the editor. */
    roomIdentifier: string;
    step: BookingStep;
    isLoading: string;
    /** Emitted when the booking editor drawer is closed. */
    bookingEditorClosed: EventEmitter<void>;
    private token;
    private bookingService;
    private wasBlockedUnit;
    private didAdjustBlockedUnit;
    private originalBlockPayload?;
    componentWillLoad(): void;
    handleTicketChange(): void;
    handleBlockedUnitChange(newValue?: BlockedDatePayload): void;
    handleCheckInChange(): void;
    handleCheckOutChange(): void;
    handleUnitChange(): void;
    private initializeBlockedUnitState;
    handleBookingStepChange(e: CustomEvent): void;
    private get drawerLabel();
    private goToConfirm;
    private goToDetails;
    private renderFooter;
    private renderConfirmActions;
    private renderDetailsActions;
    private closeDrawer;
    private getBlockUnitPayload;
    private handleBlockDate;
    private handleAdjustBlockedUnitEvent;
    private adjustBlockedDatesAfterReservation;
    private checkAndBlockDate;
    render(): any;
}
