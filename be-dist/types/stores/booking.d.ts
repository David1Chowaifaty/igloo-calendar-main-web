import { BeddingSetup, ISmokingOption, RatePlan, RoomType, Variation } from "../models/property";
export interface IRatePlanSelection {
    reserved: number;
    visibleInventory: number;
    selected_variation: Variation;
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
        pre_payment_amount: number;
    };
}
export interface IRoomTypeSelection {
    [ratePlanId: number]: IRatePlanSelection;
}
export interface IBookinAvailabilityParams {
    from_date: Date | null;
    to_date: Date | null;
    adult_nbr: number;
    child_nbr: number;
    coupon?: string;
    agent?: number;
    loyalty?: boolean;
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
export declare function calculateTotalCost(): {
    totalAmount: number;
    prePaymentAmount: number;
};
export default booking_store;
