export declare class IrClReceiptPreview {
    propertyId: number;
    ticket: string;
    baseurl: string;
    agentId: number;
    agentName: string;
    documentNumber: string;
    private isLoading;
    private error;
    private property;
    private dataService;
    componentWillLoad(): Promise<void>;
    private fetchData;
    render(): any;
}
