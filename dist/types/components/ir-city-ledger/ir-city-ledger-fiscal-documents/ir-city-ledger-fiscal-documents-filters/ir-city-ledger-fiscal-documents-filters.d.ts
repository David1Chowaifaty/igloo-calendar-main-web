import { EventEmitter } from '../../../../stencil-public-runtime';
import type { FiscalDocumentFilters } from '../types';
export declare class IrCityLedgerFiscalDocumentsFilters {
    filters: FiscalDocumentFilters;
    filtersChange: EventEmitter<FiscalDocumentFilters>;
    private typeOptions;
    private updateFilters;
    render(): any;
}
