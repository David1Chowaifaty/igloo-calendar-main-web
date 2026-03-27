import { RoomHkStatus } from "../models/booking.dto";
import { ArchivedTask, IExposedHouseKeepingSetup, IInspectionMode, IPropertyHousekeepingAssignment, OverrideHKTaskOwnershipParams, SetHKTaskLabelsParams, SkipHKTasksParams, THKUser, TPendingHkSetupParams } from "../models/housekeeping";
export type HKSkipParams = {
    HK_SKIP_ID: number;
    BOOK_NBR: string;
    PR_ID: number;
    DATE: string;
    HK_SKIP_REASON_CODE: '001';
    COMMENT: string;
};
export interface ConnectedHK {
    AC_ID: number;
    ENTRY_DATE: string;
    ENTRY_USER_ID: number;
    HKM_ID: number;
    IS_ACTIVE: boolean;
    IS_SOFT_DELETED: boolean;
    MOBILE: string;
    My_Ac: null;
    My_User: null;
    NAME: string;
    NOTES: string;
    OWNER_ID: number;
    PHONE_PREFIX: string;
    USER_ID: number;
}
export declare class HouseKeepingService {
    getExposedHKSetup(property_id: number): Promise<IExposedHouseKeepingSetup>;
    overrideHKTaskOwnership(params: OverrideHKTaskOwnershipParams): Promise<any>;
    setHKTaskLabels(params: SetHKTaskLabelsParams): Promise<any>;
    getExposedHKStatusCriteria(property_id: number): Promise<IExposedHouseKeepingSetup>;
    skipHKTasks(params: SkipHKTasksParams): Promise<any>;
    getArchivedHKTasks(params: {
        property_id: number;
        from_date: string;
        to_date: string;
        filtered_by_hkm?: number[];
        filtered_by_unit?: number[];
        is_export_to_excel?: boolean;
    }): Promise<{
        tasks: ArchivedTask[];
        url: string;
    } | null>;
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
            id: number;
        }[];
        cleaning_frequency?: string;
        dusty_window?: string;
        highlight_window?: string;
        is_export_to_excel?: boolean;
    }): Promise<{
        url: any;
        tasks: any;
    }>;
    executeHKAction(params: {
        actions: {
            unit_id: number;
            hkm_id: number;
            description: string;
            booking_nbr?: string | number;
            status: '001' | '004';
            hk_task_type_code: string;
        }[];
    }): Promise<void>;
    generateUserName(name: string): Promise<any>;
    getConnectedHk(): Promise<ConnectedHK>;
}
