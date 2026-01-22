import { AllowedProperties, FetchUnBookableRoomsResult } from "../../services/property.service";
type UnbookableRoomsMode = 'default' | 'mpo';
type UnbookableRoomsFilters = {
    period_to_check: number;
    consecutive_period: number;
    country: string;
};
export declare class IrUnbookableRooms {
    ticket: string;
    propertyid: number;
    mode: UnbookableRoomsMode;
    period_to_check: number;
    consecutive_period: number;
    isLoading: boolean;
    errorMessage: string;
    unbookableRooms: FetchUnBookableRoomsResult;
    allowedProperties: AllowedProperties;
    filters: UnbookableRoomsFilters;
    progressFilters: {
        period_to_check: number;
        consecutive_period: number;
    };
    lastUpdatedLabel: string;
    isPageLoading: boolean;
    private tokenService;
    private propertyService;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    modeChanged(newValue: UnbookableRoomsMode, oldValue: UnbookableRoomsMode): void;
    propertyIdChanged(newValue: number, oldValue: number): void;
    periodToCheckChanged(newValue: number): void;
    consecutivePeriodChanged(newValue: number): void;
    private normalizePositiveNumber;
    private resolveMode;
    private initializeApp;
    private fetchUnbookableRooms;
    private getPropertyIds;
    private handleFiltersChange;
    private handleRefresh;
    private handleFiltersReset;
    render(): any;
}
export {};
