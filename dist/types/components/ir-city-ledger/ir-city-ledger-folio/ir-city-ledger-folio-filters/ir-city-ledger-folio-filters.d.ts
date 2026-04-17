import { EventEmitter } from '../../../../stencil-public-runtime';
import { Moment } from 'moment';
import type { FolioFilters } from '../types';
export declare class IrCityLedgerFolioFilters {
    isExporting: boolean;
    dates: {
        from: Moment | null;
        to: Moment | null;
    };
    statusFilter: string;
    searchQuery: string;
    filtersChange: EventEmitter<FolioFilters>;
    addEntry: EventEmitter<void>;
    applyFilters: EventEmitter<FolioFilters>;
    exportFolio: EventEmitter<void>;
    componentDidLoad(): void;
    private statuses;
    private emitFilters;
    private emitFiltersDebounced;
    render(): any;
}
