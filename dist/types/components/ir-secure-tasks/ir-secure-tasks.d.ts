export declare class IrSecureTasks {
    propertyid: number;
    p: string;
    bookingNumber: string;
    isAuthenticated: boolean;
    currentPage: string;
    inputValue: string;
    private token;
    private dates;
    componentWillLoad(): void;
    handlePChange(): void;
    private generateDates;
    private handleAuthFinish;
    render(): any;
    private logout;
    renderPage(): any;
}
