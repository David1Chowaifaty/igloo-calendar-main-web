import { type ArchivedTask, type HKIssue, type IExposedHouseKeepingSetup, type IInspectionMode, type THKUser, type IPropertyHousekeepingAssignment, type OverrideHKTaskOwnershipParams, type SetHKTaskLabelsParams, type SkipHKTasksParams, type ResolveHKIssueParams, type TPendingHkSetupParams } from "../../models/housekeeping";
import { GetExposedHKSetupParams, type ConnectedHK, type ExecuteHKActionParams, type GetArchivedHKTasksParams, type GetHkIssuesParams, type GetHkTasksParams, type SetExposedUnitHKStatusParams } from './types';
export * from './types';
export declare class HouseKeepingService {
    getExposedHKSetup(params: GetExposedHKSetupParams): Promise<IExposedHouseKeepingSetup>;
    resolveHKIssue(params: ResolveHKIssueParams): Promise<any>;
    overrideHKTaskOwnership(params: OverrideHKTaskOwnershipParams): Promise<any>;
    setHKTaskLabels(params: SetHKTaskLabelsParams): Promise<any>;
    getExposedHKStatusCriteria(property_id: number): Promise<IExposedHouseKeepingSetup>;
    skipHKTasks(params: SkipHKTasksParams): Promise<any>;
    getArchivedHKTasks(params: GetArchivedHKTasksParams): Promise<{
        tasks: ArchivedTask[];
        url: string;
    } | null>;
    setExposedInspectionMode(property_id: number, mode: IInspectionMode): Promise<any>;
    manageExposedAssignedUnitToHKM(property_id: number, assignments: IPropertyHousekeepingAssignment[]): Promise<any>;
    editExposedHKM(params: THKUser, is_to_remove?: boolean): Promise<any>;
    getHKPendingActions(params: TPendingHkSetupParams): Promise<any>;
    setExposedUnitHKStatus(params: SetExposedUnitHKStatusParams): Promise<any>;
    getHkTasks(params: GetHkTasksParams): Promise<{
        url: any;
        tasks: any;
    }>;
    executeHKAction(params: ExecuteHKActionParams): Promise<void>;
    generateUserName(name: string): Promise<any>;
    getHkIssues(params: GetHkIssuesParams): Promise<HKIssue[]>;
    getConnectedHk(): Promise<ConnectedHK>;
}
