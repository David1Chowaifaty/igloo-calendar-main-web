import { Booking } from "../../models/booking.dto";
import { AssignUnitParams, GetAggregatedUnAssignedRoomsByDateRangeParams, GetAggregatedUnAssignedRoomsByDateRangeResult } from './types';
export declare class UnassignedUnitsService {
    assignUnit(props: AssignUnitParams): Promise<Booking>;
    getAggregatedUnAssignedRoomsByDateRange(params: GetAggregatedUnAssignedRoomsByDateRangeParams): Promise<GetAggregatedUnAssignedRoomsByDateRangeResult>;
}
