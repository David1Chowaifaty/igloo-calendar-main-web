import { EventEmitter } from '../../../../stencil-public-runtime';
import { BlockedDatePayload, BookingEditorMode, BookingStep } from '../types';
import { Booking, ExtraService } from "../../../../models/booking.dto";
export declare class IrBookingEditorDrawer {
    /** Controls drawer visibility (reflected to DOM). */
    open: boolean;
    /** Auth ApiClient used for API requests. */
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
    /** Pre-enables the day-use toggle (e.g. double-click-on-room-title entry point). */
    dayUse: boolean;
    /** The day-use extra service being edited (`mode="EDIT_DAY_USE"`) — carries its current unit/price for prefill and is updated in place via `doBookingExtraService` on submission. */
    extraService: ExtraService;
    step: BookingStep;
    isLoading: string;
    /** Emitted when the booking editor drawer is closed. */
    bookingEditorClosed: EventEmitter<void>;
    private ApiClient;
    private bookingService;
    private bookingEditorService;
    private wasBlockedUnit;
    private didAdjustBlockedUnit;
    private originalBlockPayload?;
    componentWillLoad(): void;
    /**
     * BAR_BOOKING day-use bookings start "now" — seed the day-use arrival hour to one hour
     * from the current time so the front-desk agent isn't picking it from scratch. Only fills
     * an empty value, so it never clobbers a manual edit or an existing booking's hours.
     */
    private seedBarBookingDayUseFromHour;
    handleTicketChange(): void;
    handleBlockedUnitChange(newValue?: BlockedDatePayload): void;
    handleCheckInChange(): void;
    handleCheckOutChange(): void;
    handleUnitChange(): void;
    handleModeChange(): void;
    handleDayUseChange(): void;
    private initializeBlockedUnitState;
    handleBookingStepChange(e: CustomEvent): void;
    private get drawerLabel();
    private handleDayUseToggle;
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
