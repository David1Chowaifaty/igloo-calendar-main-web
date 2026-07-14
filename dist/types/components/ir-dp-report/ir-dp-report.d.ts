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
    private token;
    private roomService;
    private dpReportService;
    private propertyId;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleDpFiltersChange(e: CustomEvent<{
        from: string;
        to: string;
    }>): Promise<void>;
    handleOpenBookingDetails(e: CustomEvent<string>): void;
    handleGuestSelected(e: CustomEvent<string>): void;
    private initializeApp;
    private fetchDpReport;
    private handleTabShow;
    private findRow;
    render(): any;
}
