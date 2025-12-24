import { RoomType } from "../../../../../models/property";
export declare class IglRoomType {
    roomType: RoomType;
    bookingType: string;
    ratePricingMode: any[];
    roomTypeId: number | null;
    currency: any;
    isBookDisabled: boolean;
    private validBookingTypes;
    render(): any;
}
