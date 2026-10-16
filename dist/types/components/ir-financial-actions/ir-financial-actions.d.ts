import { SidebarOpenEvent } from './types';
export declare class IrFinancialActions {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isLoading: string;
    isPageLoading: boolean;
    property_id: number;
    sideBarEvent: SidebarOpenEvent | null;
    private apiClientService;
    private roomService;
    private setupService;
    private paymentEntries;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    ticketChanged(newValue: string, oldValue: string): void;
    private handleSidebarClose;
    private renderSidebarBody;
    handleOpenSidebar(e: CustomEvent<SidebarOpenEvent>): void;
    private getFinancialAction;
    private initializeApp;
    render(): any;
}
