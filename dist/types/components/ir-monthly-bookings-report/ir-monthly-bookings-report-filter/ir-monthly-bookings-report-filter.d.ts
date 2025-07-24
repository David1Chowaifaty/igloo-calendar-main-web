import { EventEmitter } from '../../../stencil-public-runtime';
import { DailyReportFilter } from '../types';
export declare class IrMonthlyBookingsReportFilter {
    isLoading: boolean;
    baseFilters: DailyReportFilter;
    filters: DailyReportFilter;
    collapsed: boolean;
    window: string;
    applyFilters: EventEmitter<DailyReportFilter>;
    private dates;
    componentWillLoad(): void;
    private updateFilter;
    private applyFiltersEvt;
    private resetFilters;
    private generateMonths;
    render(): any;
}
