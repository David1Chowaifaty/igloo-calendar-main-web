import { EventEmitter } from '../../stencil-public-runtime';
import { DailyPaymentFilter, GroupedFolioPayment, RevenueSourceOption, SidebarOpenEvent } from './types';
export declare class IrDailyRevenue {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isPageLoading: boolean;
    property_id: number;
    groupedPayment: GroupedFolioPayment;
    previousDateGroupedPayments: GroupedFolioPayment;
    isLoading: string;
    filters: DailyPaymentFilter;
    sideBarEvent: SidebarOpenEvent | null;
    sources: RevenueSourceOption[];
    private tokenService;
    private roomService;
    private propertyService;
    private bookingService;
    private bookingListingService;
    private paymentEntries;
    preventPageLoad: EventEmitter<null>;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleOpenSidebar(e: CustomEvent<SidebarOpenEvent>): void;
    handleFetchNewReports(e: CustomEvent<DailyPaymentFilter>): void;
    handleResetBooking(e: CustomEvent): Promise<void>;
    private handleSidebarClose;
    private initializeApp;
    /**
     * All direct channels collapse into a single "Direct" option whose value is their comma-separated values;
     * every other channel stays its own option.
     */
    private buildSourceOptions;
    private groupPaymentsByName;
    private getPaymentReports;
    render(): any;
}
