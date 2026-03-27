import { EventEmitter } from '../../../../stencil-public-runtime';
import { Moment } from 'moment';
import type { FolioFilters } from '../types';
export declare class IrCityLedgerFolioFilters {
    dates: {
        from: Moment;
        to: Moment;
    };
    statusFilter: string;
    searchQuery: string;
    filtersChange: EventEmitter<FolioFilters>;
    addEntry: EventEmitter<void>;
    componentDidLoad(): void;
    private statuses;
    toDateSelectRef: HTMLIrDateSelectElement;
    fromDateSelectRef: HTMLIrDateSelectElement;
    private emitFilters;
    private emitFiltersDebounced;
    render(): any;
}
