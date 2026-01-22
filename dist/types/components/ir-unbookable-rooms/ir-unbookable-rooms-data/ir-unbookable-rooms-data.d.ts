import { AllowedProperties, FetchUnBookableRoomsResult } from "../../../services/property.service";
type UnbookableRoomsMode = 'default' | 'mpo';
type UnbookableRoomsFilters = {
    period_to_check: number;
    consecutive_period: number;
    country: string;
};
export declare class IrUnbookableRoomsData {
    mode: UnbookableRoomsMode;
    isLoading: boolean;
    errorMessage: string;
    unbookableRooms: FetchUnBookableRoomsResult;
    allowedProperties: AllowedProperties;
    filters: UnbookableRoomsFilters;
    progressFilters: {
        period_to_check: number;
        consecutive_period: number;
    };
    propertyNameFilter: string;
    private todayFormatted;
    private getPropertyName;
    private getPeriodOffset;
    private getEndDateFormatted;
    private filterProperties;
    render(): any;
}
export {};
