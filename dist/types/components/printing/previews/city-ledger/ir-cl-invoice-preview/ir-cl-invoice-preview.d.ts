export declare class IrClInvoicePreview {
    propertyId: number;
    ticket: string;
    baseurl: string;
    agentId: number;
    agentName: string;
    documentNumber: string;
    private isLoading;
    private error;
    private property;
    private transactions;
    private dataService;
    componentWillLoad(): Promise<void>;
    private fetchData;
    render(): any;
}
