import { Booking, Guest } from "../models/booking.dto";
import { ICountry, ISetupEntries } from "../models/IBooking";
import { BookingSource, TEventType } from "../models/igl-book-property";
import { BeddingSetup, ISmokingOption, RatePlan, RoomType, Variation } from "../models/property";
import { Moment } from 'moment';
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
export interface BookingSelects {
    sources: BookingSource[];
    ratePricingMode: ISetupEntries['ratePricingMode'];
    arrivalTime: ISetupEntries['arrivalTime'];
    bedPreferences: ISetupEntries['bedPreferenceType'];
    countries: ICountry[];
}
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
export declare function resetBookingStore(closeModal: boolean): void;
export declare function resetAvailability(): void;
export declare function setBookingDraft(params: Partial<BookingDraft>): void;
export declare function setBookingSelectOptions(params: Partial<BookingSelects>): void;
export declare function updateBookedByGuest(params: Partial<BookedByGuest>): void;
export declare function updateRoomGuest({ guest, ratePlanId, roomTypeId, ratePlanSelection, }: {
    roomTypeId: number;
    ratePlanId: number;
    guest: IRatePlanSelection['guest'];
    ratePlanSelection: IRatePlanSelection;
}): void;
export declare function updateInventory(roomTypeId: number): void;
export declare function hasAtLeastOneRoomSelected(): boolean;
export declare function updateRoomParams({ ratePlanId, roomTypeId, params }: {
    roomTypeId: number;
    ratePlanId: number;
    params: Partial<IRatePlanSelection>;
}): void;
export declare function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }: {
    roomTypeId: number;
    ratePlanId: number;
    rooms: number;
    guest?: RatePlanGuest[];
}): void;
export declare function getVisibleInventory(roomTypeId: number, ratePlanId: number): IRatePlanSelection;
export declare function modifyBookingStore(key: keyof BookingStore, value: any): void;
export declare function calculateTotalCost(gross?: boolean): {
    totalAmount: number;
    prePaymentAmount: number;
};
export declare function getBookingTotalPrice(): number;
export declare function validateBooking(): boolean;
export declare function calculateTotalRooms(): any;
export declare function resetReserved(): void;
export declare function setBookedByGuestManualEditState(isEdited: boolean): void;
export default booking_store;
export declare function getReservedRooms(): ReservedRoomSelection[];
