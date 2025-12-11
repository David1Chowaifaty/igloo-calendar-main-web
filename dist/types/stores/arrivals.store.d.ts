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
export {};
