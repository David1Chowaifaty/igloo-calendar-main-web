import { Booking, Guest } from "../models/booking.dto";
import { TEventType } from "../models/igl-book-property";
import { BeddingSetup, ISmokingOption, RatePlan, RoomType, Variation } from "../models/property";
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
export interface BookingStore {
    tax_statement: {
        message: string;
    } | null;
    checkout_guest: Guest | null;
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
}
export declare let booking_store: BookingStore, onRoomTypeChange: import("@stencil/store/dist/types").OnChangeHandler<BookingStore>, reset: () => void;
export declare function resetBookingStore(): void;
export declare function updateInventory(roomTypeId: number): void;
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
export declare function validateBooking(): boolean;
export declare function calculateTotalRooms(): any;
export default booking_store;
