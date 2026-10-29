import type { AllowedProperties, FetchUnBookableRoomsResult } from "../../services/property/types";
type UnbookableRoomsMode = 'default' | 'mpo';
type UnbookableRoomsFilters = {
    period_to_check: number;
    consecutive_period: number;
    country: string;
};
export declare class IrUnbookableRooms {
    language: string;
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
    isPageLoading: boolean;
    private apiClientService;
    private propertyService;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
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
