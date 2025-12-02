import { Booking } from "../models/booking.dto";
export interface ArrivalsPagination {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}
export interface ArrivalsStore {
    bookings: Booking[];
    filteredBookings: Booking[];
    paginatedBookings: Booking[];
    needsCheckInBookings: Booking[];
    inHouseBookings: Booking[];
    searchTerm: string;
    pagination: ArrivalsPagination;
    today: string;
}
export declare const arrivalsStore: ArrivalsStore, onArrivalsStoreChange: import("@stencil/store/dist/types").OnChangeHandler<ArrivalsStore>;
export declare function initializeArrivalsStore(bookings?: Booking[]): void;
export declare function setArrivalsSearchTerm(term: string): void;
export declare function setArrivalsPage(page: number): void;
export declare function setArrivalsPageSize(pageSize: number): void;
export declare function setArrivalsReferenceDate(date: string | Date): void;
