export declare class IrSecureTasks {
    propertyid: number;
    p: string;
    bookingNumber: string;
    isAuthenticated: boolean;
    currentPage: string;
    private token;
    private dates;
    componentWillLoad(): void;
    private generateDates;
    private handleAuthFinish;
    render(): any;
    renderPage(): any;
}
