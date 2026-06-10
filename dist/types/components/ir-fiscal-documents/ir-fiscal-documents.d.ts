import { FiscalDocumentFilters } from './types';
export declare class IrFiscalDocuments {
    ticket: string;
    baseurl: string;
    language: string;
    propertyid: number;
    filters: FiscalDocumentFilters;
    private rows;
    private isLoading;
    private hasFetched;
    private tokenService;
    private cityLedgerService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private fetchFiscalDocuments;
    render(): any;
}
