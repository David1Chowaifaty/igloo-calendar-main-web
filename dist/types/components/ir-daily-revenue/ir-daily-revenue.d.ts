import { EventEmitter } from '../../stencil-public-runtime';
import { DailyPaymentFilter, GroupedFolioPayment, SidebarOpenEvent } from './types';
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
    private apiClientService;
    private roomService;
    private propertyService;
    private setupService;
    private paymentEntries;
    preventPageLoad: EventEmitter<null>;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleOpenSidebar(e: CustomEvent<SidebarOpenEvent>): void;
    handleFetchNewReports(e: CustomEvent<DailyPaymentFilter>): void;
    handleResetBooking(e: CustomEvent): Promise<void>;
    private handleSidebarClose;
    private initializeApp;
    private groupPaymentsByName;
    private getPaymentReports;
    render(): any;
}
