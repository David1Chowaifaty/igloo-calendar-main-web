import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { BlockedDatePayload, BookingEditorMode, BookingStep } from './types';
import { RoomType } from "../../../models/property";
import { ExtraService } from "../../../models/booking.dto";
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
    /** The day-use extra service being edited (`mode="EDIT_DAY_USE"`) — its unit is excluded from the "already booked" filter, highlighted in the unit list, and updated in place via `doBookingExtraService` on submission. */
    extraService: ExtraService;
    isLoading: boolean;
    isFetchingAvailability: boolean;
    hasCheckedAvailability: boolean;
    unavailableRatePlanIds: Set<number>;
    dayUseBookedUnitIds: Set<number>;
    dayUseRoomTypes: RoomType[];
    resolvingDayUseUnitId: number | null;
    /** Net (tax-exclusive) version of `dayUsePrice`, resolved once via `calculateNetAmount` — shown as the default value in the price input so an untouched default reads the same way a typed custom (net) amount does. */
    dayUseNetPrice: number | null;
    resetBookingEvt: EventEmitter<Booking | null>;
    loadingChanged: EventEmitter<{
        cause: string | null;
    }>;
    adjustBlockedUnit: EventEmitter<any>;
    bookingStepChange: EventEmitter<{
        direction: 'next' | 'prev';
    }>;
    preventPageLoad: EventEmitter<string>;
    private roomService;
    private bookingService;
    private propertyService;
    private bookingEditorService;
    private room;
    private get dayUsePrice();
    /**
     * Resolves the gross day-use price for the selected unit and advances to step 2.
     *
     * - Hotel default price (untouched): the input shows the default price converted to its **net**
     *   value (`dayUseNetPrice`, resolved once by `resolveDayUseNetPrice`) so an untouched default
     *   reads the same way a typed custom amount does. Since it wasn't actually customized, we discard
     *   that net display value here and show/save the original **gross** default instead.
     * - Custom price (front-desk typed a value): that value is the **net** amount, mirroring how a
     *   manually-modified rate-plan rate is treated (`getRatePlanDisplayAmount` in booking.store.ts) —
     *   `calculateExclusiveTax` derives the tax off the net amount and gross = net + tax.
     *
     * Resolved once here so step 2's summary and the final `doDayUse` submission always agree.
     */
    private handleDayUseUnitSelected;
    /** Resolves `dayUsePrice` (gross) to its net equivalent once, up front, so it's ready before the day-use unit list renders. */
    private resolveDayUseNetPrice;
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
    private checkBookingAvailability;
    /**
     * Day-use branch of availability checking: skips `Check_Availability` entirely and derives
     * per-unit availability from `Get_Exposed_Calendar` (`getCalendarData`) for the single target date.
     */
    private checkDayUseAvailability;
    /**
     * Units already booked for day use on the target date don't reduce a room type's normal
     * `inventory`/availability, so they must be filtered out separately from the units list.
     *
     * When editing an existing day-use extra service (`EDIT_DAY_USE`), its own unit is excluded from
     * this "already booked" set — it's the booking being edited, not a conflict — and its hours seed
     * `dayUseHours` so step 2 shows the time window that's actually in effect.
     */
    private fetchDayUseBookedUnits;
    private compareResults;
    private doReservation;
    private doDayUseReservation;
    private assignCountryCode;
    private fetchSetupEntriesAndInitialize;
    private setOtherProperties;
    private resolveSourceOption;
    private setSourceOptions;
    private getFilteredSourceOptions;
    private fetchSetupEntries;
    render(): any;
}
