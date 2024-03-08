import { Token } from "../models/Token";
import { IExposedHouseKeepingSetup, IInspectionMode, IPropertyHousekeepingAssignment, THKUser } from "../models/housekeeping";
export declare class HouseKeepingService extends Token {
    getExposedHKSetup(property_id: number): Promise<IExposedHouseKeepingSetup>;
    setExposedInspectionMode(property_id: number, mode: IInspectionMode): Promise<any>;
    manageExposedAssignedUnitToHKM(property_id: number, assignments: IPropertyHousekeepingAssignment[]): Promise<any>;
    editExposedHKM(params: THKUser, is_to_remove?: boolean): Promise<any>;
}
