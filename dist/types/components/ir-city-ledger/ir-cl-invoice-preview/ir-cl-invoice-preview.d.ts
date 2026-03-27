export declare class IrClInvoicePreview {
    propertyId: number;
    ticket: string;
    baseurl: string;
    fromDate: string;
    toDate: string;
    agentId: number;
    agentName: string;
    documentNumber: string;
    private isLoading;
    private error;
    private property;
    private transactions;
    private tokenService;
    private propertyService;
    private cityLedgerService;
    componentWillLoad(): Promise<void>;
    private fetchData;
    private get totals();
    private get currencySymbol();
    private get primaryContact();
    private renderMoney;
    private renderHeader;
    private renderBillTo;
    private renderLineItems;
    private renderTotals;
    render(): any;
}
