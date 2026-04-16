import { EventEmitter } from '../../../../stencil-public-runtime';
import type { FiscalDocumentFilters } from '../types';
export declare class IrCityLedgerFiscalDocumentsFilters {
    filters: FiscalDocumentFilters;
    private docNumber;
    filtersChange: EventEmitter<FiscalDocumentFilters>;
    applyFilters: EventEmitter<FiscalDocumentFilters>;
    private typeOptions;
    private updateFilters;
    private emitSearchDebounced;
    render(): any;
}
