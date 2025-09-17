import { EventEmitter } from '../../../stencil-public-runtime';
import { DailyFinancialActionsFilter } from '../types';
export declare class IrFinancialFilters {
    isLoading: boolean;
    collapsed: boolean;
    filters: DailyFinancialActionsFilter;
    private baseFilters;
    fetchNewReports: EventEmitter<DailyFinancialActionsFilter>;
    componentWillLoad(): void;
    private applyFiltersEvt;
    private resetFilters;
    private updateFilter;
    render(): any;
}
