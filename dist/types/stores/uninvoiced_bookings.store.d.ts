import { ICriteriaChannel, ICriteriaStatuses, ICriteriaTypes } from "../models/IrBookingListing";
import { UninvoicedBookingRow } from "../components/ir-uninvoiced-bookings/types";
export interface UninvoicedBookingsFilters {
    from: string;
    to: string;
    source: string;
}
export interface UninvoicedBookingsTablePagination {
    currentPage: number;
    pageSize: number;
}
export interface UninvoicedBookingsStore {
    filters: UninvoicedBookingsFilters;
    rows: UninvoicedBookingRow[];
    totalCount: number;
    channels: ICriteriaChannel[];
    statuses: ICriteriaStatuses[];
    types: ICriteriaTypes[];
    isLoading: boolean;
    tablePagination: UninvoicedBookingsTablePagination;
}
export declare const uninvoiced_bookings: UninvoicedBookingsStore, onUninvoicedBookingsChange: import("@stencil/store/dist/types").OnChangeHandler<UninvoicedBookingsStore>;
export declare function updateUninvoicedBookingsFilters(filters: Partial<UninvoicedBookingsFilters>): void;
export declare function setUninvoicedBookingsCriteria(criteria: {
    channels: ICriteriaChannel[];
    statuses: ICriteriaStatuses[];
    types: ICriteriaTypes[];
}): void;
export declare function setUninvoicedBookingsTablePage(page: number): void;
export declare function setUninvoicedBookingsTablePageSize(pageSize: number): void;
export default uninvoiced_bookings;
