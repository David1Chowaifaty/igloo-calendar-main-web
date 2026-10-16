import { IExposedHouseKeepingSetup, IHKTasks, IPendingActions } from "../models/housekeeping";
export interface IHouseKeepingStore {
    hk_criteria: IExposedHouseKeepingSetup;
    default_properties: {
        ApiClient: string;
        property_id: number;
        language: string;
    };
    hk_tasks: IHKTasks;
    pending_housekeepers: {
        original: IPendingActions;
        selected?: boolean;
    }[];
}
export declare const housekeeping_store: IHouseKeepingStore;
export declare function updateHKStore(key: keyof IHouseKeepingStore, value: any): void;
export declare function getDefaultProperties(): {
    ApiClient: string;
    property_id: number;
    language: string;
};
export default housekeeping_store;
