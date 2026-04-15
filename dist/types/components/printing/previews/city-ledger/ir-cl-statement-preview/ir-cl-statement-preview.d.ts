import { EventEmitter } from '../../../../../stencil-public-runtime';
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
    private fiscalDocuments;
    clPreviewReady: EventEmitter<void>;
    private tokenService;
    private propertyService;
    private cityLedgerService;
    private hasEmitted;
    componentWillLoad(): Promise<void>;
    componentDidRender(): void;
    private fetchData;
    render(): any;
}
