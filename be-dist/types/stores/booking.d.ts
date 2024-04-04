import { RoomType } from "../models/property";
export interface IRatePlanSelection {
    reserved: number;
    visibleInventory: number;
}
export interface IRoomTypeSelection {
    [ratePlanId: number]: IRatePlanSelection;
}
export interface IBookinAvailabilityParams {
    from_date: Date | null;
    to_date: Date | null;
    adult_nbr: number;
    child_nbr: number;
}
interface BookingStore {
    roomTypes: RoomType[];
    enableBooking: boolean;
    ratePlanSelections: {
        [roomTypeId: number]: IRoomTypeSelection;
    };
    bookingAvailabilityParams: IBookinAvailabilityParams;
}
export declare const booking_store: BookingStore, onRoomTypeChange: import("@stencil/store/dist/types").OnChangeHandler<BookingStore>;
export declare function updateInventory(roomTypeId: number): void;
export declare function reserveRooms(roomTypeId: number, ratePlanId: number, rooms: number): void;
export declare function getVisibleInventory(roomTypeId: number, ratePlanId: number): IRatePlanSelection;
export declare function modifyBookingStore(key: keyof BookingStore, value: any): void;
export default booking_store;
