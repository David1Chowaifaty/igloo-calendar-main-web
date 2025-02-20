import { Booking } from "../models/booking.dto";
import { Agent, BeddingSetup, ISmokingOption, RatePlan, RoomType, Variation } from "../models/property";
export interface IRatePlanSelection {
    reserved: number;
    visibleInventory: number;
    infant_nbr: number[];
    selected_variation: Variation | null;
    ratePlan: RatePlan;
    guestName: string[];
    is_bed_configuration_enabled: boolean;
    checkoutVariations: Variation[];
    checkoutBedSelection: string[];
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
    };
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
    coupon?: string;
    agent?: Agent;
    loyalty?: boolean;
    agent_code?: string;
}
interface BookingStore {
    tax_statement: {
        message: string;
    } | null;
    roomTypes: RoomType[];
    enableBooking: boolean;
    ratePlanSelections: {
        [roomTypeId: number]: IRoomTypeSelection;
    };
    bookingAvailabilityParams: IBookinAvailabilityParams;
    booking: Booking;
    resetBooking: boolean;
    isInFreeCancelationZone: boolean;
    fictus_booking_nbr: {
        nbr: string | null;
    };
    childrenAges: string[];
}
export declare const booking_store: BookingStore, onRoomTypeChange: import("@stencil/store/dist/types").OnChangeHandler<BookingStore>;
export declare function updateInventory(roomTypeId: number): void;
export declare function updateRoomParams({ ratePlanId, roomTypeId, params }: {
    roomTypeId: number;
    ratePlanId: number;
    params: Partial<IRatePlanSelection>;
}): void;
export declare function reserveRooms(roomTypeId: number, ratePlanId: number, rooms: number): void;
export declare function getVisibleInventory(roomTypeId: number, ratePlanId: number): IRatePlanSelection | {
    reserved: number;
    visibleInventory: number;
    selected_variation: any;
};
export declare function modifyBookingStore(key: keyof BookingStore, value: any): void;
type CostCalculationConfig = {
    gross: boolean;
    infants: boolean;
};
export declare function calculateTotalCost(config?: CostCalculationConfig): {
    totalAmount: number;
};
export declare function validateBooking(): boolean;
export declare function calculateTotalRooms(): any;
export declare function clearCheckoutRooms(): void;
export default booking_store;
