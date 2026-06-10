import { EventEmitter } from '../../../../stencil-public-runtime';
import type { ClFiscalDocumentFilters } from '../types';
export declare class IrCityLedgerFiscalDocumentsFilters {
    filters: ClFiscalDocumentFilters;
    private docNumber;
    filtersChange: EventEmitter<ClFiscalDocumentFilters>;
    applyFilters: EventEmitter<ClFiscalDocumentFilters>;
    componentWillLoad(): void;
    private typeOptions;
    private updateFilters;
    private emitSearchDebounced;
    render(): any;
}
