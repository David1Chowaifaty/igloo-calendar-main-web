import { EventEmitter } from '../../../stencil-public-runtime';
import { Moment } from 'moment';
import { CountrySalesFilter } from '../types';
export declare class IrSalesFilters {
    isLoading: boolean;
    baseFilters: CountrySalesFilter;
    filters: CountrySalesFilter;
    collapsed: boolean;
    dates: {
        from: Moment;
        to: Moment;
    };
    applyFilters: EventEmitter<CountrySalesFilter>;
    componentWillLoad(): void;
    private updateFilter;
    private applyFiltersEvt;
    private resetFilters;
    render(): any;
}
