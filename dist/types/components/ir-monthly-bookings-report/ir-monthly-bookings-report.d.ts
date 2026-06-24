import { DailyReport, DailyReportFilter } from './types';
import type { MonthlyStatsResults } from "../../services/property/types";
export declare class IrMonthlyBookingsReport {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isPageLoading: boolean;
    isLoading: 'export' | 'filter' | null;
    reports: DailyReport[];
    filters: DailyReportFilter;
    property_id: number;
    stats: Omit<MonthlyStatsResults, 'DailyStats'>;
    private baseFilters;
    private tokenService;
    private roomService;
    private propertyService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handleApplyFiltersChange(e: CustomEvent<DailyReportFilter>): void;
    private init;
    private getReports;
    render(): any;
}
