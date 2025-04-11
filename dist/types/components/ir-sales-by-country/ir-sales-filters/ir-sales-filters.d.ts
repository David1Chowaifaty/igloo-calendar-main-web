import { EventEmitter } from '../../../stencil-public-runtime';
import { SalesFilters } from './types';
export type ModifiedSalesFilters = Omit<SalesFilters, 'housekeepers'>;
export declare class IrSalesFilters {
    isLoading: boolean;
    filters: ModifiedSalesFilters;
    collapsed: boolean;
    applyFilters: EventEmitter<SalesFilters>;
    private baseFilters;
    componentWillLoad(): void;
    private applyFiltersEvt;
    private resetFilters;
    render(): any;
}
