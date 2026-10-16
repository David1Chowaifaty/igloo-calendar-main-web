import { AllowedProperties } from "../../services/property/types";
export type DPReportPageTabs = 'chart' | 'bookings';
export declare class IrDpReport {
    el: HTMLElement;
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    baseUrl: string;
    userType: number;
    isPageLoading: boolean;
    activeTab: DPReportPageTabs;
    activeBookingNbr: string | null;
    activeGuestBookingNbr: string | null;
    propertyId: number;
    allowedProperties: AllowedProperties;
    minAllowedDate: string | undefined;
    private token;
    private roomService;
    private propertyService;
    private dpReportService;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleDpFiltersChange(e: CustomEvent<{
        from: string;
        to: string;
    }>): Promise<void>;
    handleOpenBookingDetails(e: CustomEvent<string>): void;
    handleGuestSelected(e: CustomEvent<string>): void;
    private initializeApp;
    /**
     * Loads the default 2-month lookback window, then checks whether the property's data
     * actually goes back that far. If the earliest returned booking is more recent than the
     * requested from-date, the property has less history than the default window — pin the
     * from-date and the date picker's minimum to that earliest date. Otherwise we can't tell
     * where the real history boundary is, so leave the picker unrestricted.
     */
    private fetchInitialDpReport;
    private fetchDpReport;
    private handlePropertyChange;
    private handleTabShow;
    private findRow;
    render(): any;
}
