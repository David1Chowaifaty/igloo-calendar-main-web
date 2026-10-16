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
    private tokenService;
    private roomService;
    private bookingService;
    private paymentEntries;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    private handleSidebarClose;
    private renderSidebarBody;
    handleOpenSidebar(e: CustomEvent<SidebarOpenEvent>): void;
    private getFinancialAction;
    private initializeApp;
    render(): any;
}
