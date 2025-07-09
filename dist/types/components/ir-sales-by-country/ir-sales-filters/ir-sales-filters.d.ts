import { EventEmitter } from '../../../stencil-public-runtime';
import { CountrySalesFilter } from '../types';
export declare class IrSalesFilters {
    isLoading: boolean;
    baseFilters: CountrySalesFilter;
    filters: CountrySalesFilter;
    collapsed: boolean;
    window: string;
    applyFilters: EventEmitter<CountrySalesFilter>;
    componentWillLoad(): void;
    private updateFilter;
    private applyFiltersEvt;
    private resetFilters;
    render(): any;
}
