export type SecureScreens = 'hk' | 'tasks' | 'daily-revenue' | 'front' | 'users' | 'email-logs' | 'country-sales' | 'daily-occupancy' | 'booking-listing';
export declare class IrSecureTasks {
    propertyid: number;
    p: string;
    bookingNumber: string;
    ticket: string;
    isAuthenticated: boolean;
    currentPage: SecureScreens;
    inputValue: string;
    private token;
    private dates;
    componentWillLoad(): void;
    handlePChange(): void;
    handleTicketChange(newValue: any, oldValue: any): void;
    private generateDates;
    private routes;
    private handleAuthFinish;
    render(): any;
    private logout;
    renderPage(): any;
}
