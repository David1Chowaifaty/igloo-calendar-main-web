export type SecureScreens = 'hk' | 'tasks' | 'front' | 'users';
export declare class IrSecureTasks {
    propertyid: number;
    p: string;
    bookingNumber: string;
    isAuthenticated: boolean;
    currentPage: SecureScreens;
    inputValue: string;
    private token;
    private dates;
    componentWillLoad(): void;
    handlePChange(): void;
    private generateDates;
    private routes;
    private handleAuthFinish;
    render(): any;
    private logout;
    renderPage(): any;
}
