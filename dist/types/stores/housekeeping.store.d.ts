import { IExposedHouseKeepingSetup } from "../models/housekeeping";
export interface IHouseKeepingStore {
    hk_criteria: IExposedHouseKeepingSetup;
    default_properties: {
        token: string;
        property_id: number;
        language: string;
    };
}
export declare const housekeeping_store: IHouseKeepingStore;
export declare function updateHKStore(key: keyof IHouseKeepingStore, value: any): void;
export declare function getDefaultProperties(): {
    token: string;
    property_id: number;
    language: string;
};
export default housekeeping_store;
