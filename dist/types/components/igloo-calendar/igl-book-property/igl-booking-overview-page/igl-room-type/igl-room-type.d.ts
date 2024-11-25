import { RoomType } from "../../../../../models/property";
import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IglRoomType {
    roomType: RoomType;
    bookingType: string;
    dateDifference: number;
    ratePricingMode: any[];
    roomInfoId: number | null;
    currency: any;
    initialRoomIds: any;
    isBookDisabled: boolean;
    selectedRooms: number[];
    totalRooms: number;
    roomsDistributions: number[];
    dataUpdateEvent: EventEmitter<{
        [key: string]: any;
    }>;
    private validBookingTypes;
    render(): any;
}
