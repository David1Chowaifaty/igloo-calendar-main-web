import { PaginationRange } from "../components/ir-pagination/ir-pagination";
import { Booking } from "../models/booking.dto";
export interface DeparturesPagination {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    currentPage: number;
    showing: PaginationRange;
}
export interface DeparturesStore {
    bookings: Booking[];
    filteredBookings: Booking[];
    paginatedBookings: Booking[];
    needsCheckOutBookings: Booking[];
    futureRooms: Booking[];
    outBookings: Booking[];
    searchTerm: string;
    /** Lists each room on its own row ordered by departure time, rooms without one first (the dashboard). */
    sortByTime: boolean;
    pagination: DeparturesPagination;
    today: string;
}
export declare const departuresStore: DeparturesStore, onDeparturesStoreChange: import("@stencil/store/dist/types").OnChangeHandler<DeparturesStore>;
export declare function initializeDeparturesStore(bookings?: Booking[]): void;
export declare function setDepartureTotal(total: number): void;
export declare function setDeparturesSearchTerm(term: string): void;
export declare function setDeparturesPage(page: number): void;
export declare function setDeparturesPageSize(pageSize: number): void;
export declare function setDeparturesReferenceDate(date: string | Date): void;
/** Orders the rooms by departure time, each on its own row (the dashboard), or keeps the API's booking order. */
export declare function setDeparturesSortByTime(enabled: boolean): void;
