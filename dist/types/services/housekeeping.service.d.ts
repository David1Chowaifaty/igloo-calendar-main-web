import { RoomHkStatus } from "../models/booking.dto";
import { ArchivedTask, IExposedHouseKeepingSetup, IInspectionMode, IPropertyHousekeepingAssignment, THKUser, TPendingHkSetupParams } from "../models/housekeeping";
export declare class HouseKeepingService {
    getExposedHKSetup(property_id: number): Promise<IExposedHouseKeepingSetup>;
    getExposedHKStatusCriteria(property_id: number): Promise<IExposedHouseKeepingSetup>;
    getArchivedHKTasks(params: {
        property_id: number;
        from_date: string;
        to_date: string;
        filtered_by_hkm?: number[];
        filtered_by_unit?: number[];
    }): Promise<ArchivedTask[] | null>;
    setExposedInspectionMode(property_id: number, mode: IInspectionMode): Promise<any>;
    manageExposedAssignedUnitToHKM(property_id: number, assignments: IPropertyHousekeepingAssignment[]): Promise<any>;
    editExposedHKM(params: THKUser, is_to_remove?: boolean): Promise<any>;
    getHKPendingActions(params: TPendingHkSetupParams): Promise<any>;
    setExposedUnitHKStatus(params: {
        property_id: number;
        status: {
            code: RoomHkStatus;
        };
        unit: {
            id: number;
        };
    }): Promise<any>;
    getHkTasks(params: {
        property_id: number;
        from_date: string;
        to_date: string;
        housekeepers?: {
            ids: number[];
        };
        cleaning_frequencies?: string;
        dusty_units?: string;
        highlight_window?: string;
    }): Promise<any>;
    executeHKAction(params: {
        actions: {
            unit_id: number;
            hkm_id: number;
            description: string;
        }[];
    }): Promise<void>;
    generateUserName(name: string): Promise<any>;
}
