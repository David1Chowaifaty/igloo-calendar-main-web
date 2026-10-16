import { EventEmitter } from '../../../../../stencil-public-runtime';
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
    private document;
    clPreviewReady: EventEmitter<void>;
    private hasEmitted;
    private dataService;
    private bookingService;
    private cityLedgerService;
    componentWillLoad(): Promise<void>;
    private fetchData;
    componentDidRender(): void;
    private getPaymentMethodLabel;
    render(): any;
}
