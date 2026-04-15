export declare class IrClStatementPreview {
    propertyId: number;
    ticket: string;
    baseurl: string;
    agentId: number;
    agentName: string;
    fromDate: string;
    toDate: string;
    currencyId: number;
    private isLoading;
    private error;
    private property;
    private statement;
    private tokenService;
    private propertyService;
    private cityLedgerService;
    componentWillLoad(): Promise<void>;
    private fetchData;
    render(): any;
}
