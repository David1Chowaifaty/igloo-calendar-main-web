import { DpReportRow } from "../components/ir-dp-report/types";
import { DpReportSummary } from "../services/dp-report/types";
export interface DpReportFilters {
    from: string;
    to: string;
}
export interface DpReportTablePagination {
    currentPage: number;
    pageSize: number;
}
export interface IDpReportStore {
    filters: DpReportFilters;
    rows: DpReportRow[];
    summary: DpReportSummary;
    isLoading: boolean;
    tablePagination: DpReportTablePagination;
}
export declare const dp_report: IDpReportStore, onDpReportChange: import("@stencil/store/dist/types").OnChangeHandler<IDpReportStore>;
export declare function updateDpReportFilters(filters: Partial<DpReportFilters>): void;
export declare function setDpReportTablePage(page: number): void;
export declare function setDpReportTablePageSize(pageSize: number): void;
export default dp_report;
