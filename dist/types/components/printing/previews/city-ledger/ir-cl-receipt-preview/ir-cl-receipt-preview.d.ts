export declare class IrClReceiptPreview {
    propertyId: number;
    ticket: string;
    baseurl: string;
    agentId: number;
    agentName: string;
    documentNumber: string;
    private isLoading;
    private ClEntry;
    private error;
    private property;
    private paymentMethods;
    private dataService;
    private bookingService;
    componentWillLoad(): Promise<void>;
    private fetchData;
    private getPaymentMethodLabel;
    render(): any;
}
