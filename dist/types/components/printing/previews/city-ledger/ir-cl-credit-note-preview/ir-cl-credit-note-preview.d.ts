import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrClCreditNotePreview {
    propertyId: number;
    ticket: string;
    baseurl: string;
    agentId: number;
    agentName: string;
    documentNumber: string;
    externalRef: string;
    private isLoading;
    private error;
    private property;
    private transactions;
    clPreviewReady: EventEmitter<void>;
    private dataService;
    private hasEmitted;
    componentWillLoad(): Promise<void>;
    componentDidRender(): void;
    private fetchData;
    render(): any;
}
