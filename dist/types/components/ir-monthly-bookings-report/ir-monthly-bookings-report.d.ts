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
    private apiClientService;
    private roomService;
    private propertyService;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handleApplyFiltersChange(e: CustomEvent<DailyReportFilter>): void;
    private init;
    private getReports;
    render(): any;
}
