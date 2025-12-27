import { Booking, Guest } from "../models/booking.dto";
import { ICountry, ISetupEntries } from "../models/IBooking";
import { BookingSource, TEventType } from "../models/igl-book-property";
import { BeddingSetup, ISmokingOption, RatePlan, RoomType, Variation } from "../models/property";
import { Moment } from 'moment';
/**
 * Shape of a single rate plan selection for a specific room type.
 */
export interface IRatePlanSelection {
    reserved: number;
    visibleInventory: number;
    selected_variation: Variation | null;
    ratePlan: RatePlan;
    guest: RatePlanGuest[] | null;
    guestName: string[];
    is_bed_configuration_enabled: boolean;
    checkoutVariations: Variation[];
    checkoutBedSelection: string[];
    is_amount_modified?: boolean;
    view_mode: '002' | '001';
    rp_amount: number;
    checkoutSmokingSelection: string[];
    roomtype: {
        id: number;
        name: string;
        physicalrooms: null;
        rateplans: null;
        availabilities: null;
        inventory: number;
        rate: number;
        smoking_option: ISmokingOption;
        bedding_setup: BeddingSetup[];
        is_bed_configuration_enabled: boolean;
    };
}
export interface RatePlanGuest {
    first_name: string;
    last_name: string;
    unit: string | null;
    bed_preference: string | null;
    infant_nbr: number | null;
    roomtype_id?: number;
}
export interface IRoomTypeSelection {
    [ratePlanId: number]: IRatePlanSelection;
}
export interface ISelectedVariation {
    variation: Variation;
    state: 'default' | 'modified';
}
export interface IBookinAvailabilityParams {
    from_date: Date | null;
    to_date: Date | null;
    adult_nbr: number;
    child_nbr: number;
    infant_nbr: number;
    coupon?: string;
    agent?: number;
    loyalty?: boolean;
    agent_code?: string;
}
/**
 * Temporary booking info captured across the booking wizard.
 */
export interface BookingDraft {
    dates: {
        checkIn: Moment;
        checkOut: Moment;
    };
    occupancy: {
        adults: number;
        children: number;
    };
    source: BookingSource;
    guest?: any;
}
/**
 * Lookup datasets used by dropdowns across the booking experience.
 */
export interface BookingSelects {
    sources: BookingSource[];
    ratePricingMode: ISetupEntries['ratePricingMode'];
    arrivalTime: ISetupEntries['arrivalTime'];
    bedPreferences: ISetupEntries['bedPreferenceType'];
    countries: ICountry[];
}
/**
 * Snapshot of the guest that pays for or books the reservation.
 */
export interface BookedByGuest {
    id: number | null;
    email: string;
    firstName: string;
    lastName: string;
    countryId: string;
    phone_prefix: string;
    mobile: string;
    selectedArrivalTime: string;
    emailGuest: boolean;
    note: string;
    cardNumber: string;
    cardHolderName: string;
    expiryMonth: string;
    expiryYear: string;
}
/**
 * Root state shared across the booking experience.
 */
export interface BookingStore {
    tax_statement: {
        message: string;
    } | null;
    checkout_guest: Guest | null;
    selectedPaymentMethod: {
        code: string;
    };
    roomTypes: RoomType[];
    enableBooking: boolean;
    ratePlanSelections: {
        [roomTypeId: number]: IRoomTypeSelection;
    };
    event_type: {
        type: TEventType;
    };
    guest: RatePlanGuest;
    bookingAvailabilityParams: IBookinAvailabilityParams;
    booking: Booking;
    resetBooking: boolean;
    isInFreeCancelationZone: boolean;
    fictus_booking_nbr: {
        nbr: string | null;
    };
    bookingDraft: BookingDraft;
    selects: BookingSelects;
    bookedByGuest: BookedByGuest;
    bookedByGuestManuallyEdited: boolean;
}
export interface ReservedRoomSelection {
    roomTypeId: number;
    ratePlanId: number;
    reservationIndex: number;
    guest: RatePlanGuest | null;
    ratePlanSelection: IRatePlanSelection;
}
export declare const bookedByGuestBaseData: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    countryId: string;
    phone_prefix: string;
    mobile: string;
    selectedArrivalTime: string;
    emailGuest: boolean;
    note: string;
    cardNumber: string;
    cardHolderName: string;
    expiryMonth: string;
    expiryYear: string;
};
export declare let booking_store: BookingStore, onRoomTypeChange: import("@stencil/store/dist/types").OnChangeHandler<BookingStore>, reset: () => void;
/**
 * Clears the booking store. Optionally rehydrates dropdowns and guest info when keeping the modal open.
 */
export declare function resetBookingStore(closeModal: boolean): void;
/**
 * Convenience helper that resets shared state while keeping the modal visible.
 */
export declare function resetAvailability(): void;
/**
 * Updates booking draft pieces (dates, occupancy, source) while keeping unrelated keys intact.
 */
export declare function setBookingDraft(params: Partial<BookingDraft>): void;
/**
 * Updates dropdown lookup datasets (sources, bed preferences, etc.).
 */
export declare function setBookingSelectOptions(params: Partial<BookingSelects>): void;
/**
 * Partially updates the booked-by guest snapshot, preserving other properties.
 */
export declare function updateBookedByGuest(params: Partial<BookedByGuest>): void;
/**
 * Updates the guest list assigned to a specific rate plan selection.
 */
export declare function updateRoomGuest({ guest, ratePlanId, roomTypeId, ratePlanSelection, }: {
    roomTypeId: number;
    ratePlanId: number;
    guest: IRatePlanSelection['guest'];
    ratePlanSelection: IRatePlanSelection;
}): void;
/**
 * Recomputes remaining visible inventory for a room type whenever selections change.
 */
export declare function updateInventory(roomTypeId: number): void;
/**
 * Returns true when any room type currently has at least one reservation selected.
 */
export declare function hasAtLeastOneRoomSelected(): boolean;
/**
 * Applies a patch of values to the given room type & rate plan combination.
 */
export declare function updateRoomParams({ ratePlanId, roomTypeId, params }: {
    roomTypeId: number;
    ratePlanId: number;
    params: Partial<IRatePlanSelection>;
}): void;
/**
 * Reserves a number of rooms for a rate plan and bootstraps its selection entry if needed.
 */
export declare function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }: {
    roomTypeId: number;
    ratePlanId: number;
    rooms: number;
    guest?: RatePlanGuest[];
}): void;
/**
 * Safely retrieves the selection payload for a specific room type/rate plan pair.
 */
export declare function getVisibleInventory(roomTypeId: number, ratePlanId: number): IRatePlanSelection;
/**
 * Generic setter for store keys when more specific helpers are unnecessary.
 */
export declare function modifyBookingStore(key: keyof BookingStore, value: any): void;
/**
 * Computes total and prepayment amounts with an option to force gross calculation.
 */
export declare function calculateTotalCost(gross?: boolean): {
    totalAmount: number;
    prePaymentAmount: number;
};
/**
 * Aggregates the total booking price combining all selected rate plans.
 */
export declare function getBookingTotalPrice(): number;
/**
 * Validates that every reserved guest entry contains a non-empty name.
 */
export declare function validateBooking(): boolean;
/**
 * Counts the number of reserved rooms across all rate plans.
 */
export declare function calculateTotalRooms(): any;
/**
 * Clears all reserved rooms and resets per-rate-plan metadata.
 */
export declare function resetReserved(): void;
/**
 * Flags whether the booked-by guest fields were manually edited (for UX hints elsewhere).
 */
export declare function setBookedByGuestManualEditState(isEdited: boolean): void;
/**
 * Returns a flat array of each reserved room along with its guest/context.
 */
export declare function getReservedRooms(): ReservedRoomSelection[];
export default booking_store;
