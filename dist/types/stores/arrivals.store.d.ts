import { Booking } from "../models/booking.dto";
interface PaginationRange {
    from: number;
    to: number;
}
export interface ArrivalsPagination {
    currentPage: number;
    pageSize: number;
    total: number;
    totalPages: number;
    showing: PaginationRange;
}
export interface ArrivalsStore {
    bookings: Booking[];
    filteredBookings: Booking[];
    paginatedBookings: Booking[];
    needsCheckInBookings: Booking[];
    inHouseBookings: Booking[];
    futureBookings: Booking[];
    searchTerm: string;
    /** Lists each room on its own row ordered by arrival time, rooms without one first (the dashboard). */
    sortByTime: boolean;
    pagination: ArrivalsPagination;
    today: string;
}
export declare const arrivalsStore: ArrivalsStore, onArrivalsStoreChange: import("@stencil/store/dist/types").OnChangeHandler<ArrivalsStore>;
export declare function initializeArrivalsStore(bookings?: Booking[]): void;
export declare function setArrivalsSearchTerm(term: string): void;
export declare function setArrivalsPage(page: number): void;
export declare function setArrivalsTotal(total: number): void;
export declare function setArrivalsPageSize(pageSize: number): void;
export declare function setArrivalsReferenceDate(date: string): void;
/** Orders the rooms by arrival time, each on its own row (the dashboard), or keeps the API's booking order. */
export declare function setArrivalsSortByTime(enabled: boolean): void;
export {};
