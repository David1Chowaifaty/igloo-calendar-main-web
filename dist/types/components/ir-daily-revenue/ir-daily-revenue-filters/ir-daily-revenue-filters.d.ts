import { EventEmitter } from '../../../stencil-public-runtime';
import { DailyPaymentFilter, GroupedFolioPayment, RevenueSourceOption } from '../types';
export declare class IrDailyRevenueFilters {
    payments: GroupedFolioPayment;
    isLoading: boolean;
    sources: RevenueSourceOption[];
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
    private getLast30Days;
    render(): any;
}
