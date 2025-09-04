import { EventEmitter } from '../../../stencil-public-runtime';
import { DailyPaymentFilter, GroupedFolioPayment } from '../types';
export declare class IrDailyRevenueFilters {
    payments: GroupedFolioPayment;
    isLoading: boolean;
    collapsed: boolean;
    users: Set<string>;
    filters: DailyPaymentFilter;
    private baseFilters;
    fetchNewReports: EventEmitter<DailyPaymentFilter>;
    componentWillLoad(): void;
    handlePaymentChange(): void;
    private updateGuests;
    private applyFiltersEvt;
    private resetFilters;
    private updateFilter;
    render(): any;
}
