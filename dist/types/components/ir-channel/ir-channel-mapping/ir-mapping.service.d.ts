import type { RatePlanDetail, RoomDetail } from "../../../models/IBooking";
export declare class IrMappingService {
    removedMapping(ir_id: string, isRoomType: boolean): void;
    checkMappingExists(id: string, isRoomType: boolean, roomTypeId?: string): {
        hide: boolean;
        occupancy: number;
        result: RoomDetail;
    } | {
        hide: boolean;
        occupancy: number;
        result: RatePlanDetail;
    };
    private resolveRatePlanContext;
    getAppropriateRooms(isRoomType: boolean, roomTypeId?: string): {
        id: string;
        name: string;
        occupancy: number;
    }[];
}
