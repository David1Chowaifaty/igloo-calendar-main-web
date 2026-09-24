import { Booking } from "../models/booking.dto";
import { ExposedBookingsParams, IExposedBookingsCriteria } from "../services/booking-listing/types";
export { ExposedBookingsParamsSchema } from '@/services/booking-listing/types';
export type { ExposedBookingsParams } from '@/services/booking-listing/types';
interface PaginationRange {
    from: number;
    to: number;
}
export interface BookingListingPagination {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    pageSize: number;
    showing: PaginationRange;
}
export interface IBookingListingStore extends IExposedBookingsCriteria {
    ApiClient: string;
    userSelection: ExposedBookingsParams;
    bookings: Booking[];
    download_url: string | null;
    rowCount: number;
    pagination: BookingListingPagination;
}
export declare const booking_listing: IBookingListingStore, onBookingListingChange: import("@stencil/store/dist/types").OnChangeHandler<IBookingListingStore>;
export declare function initializeUserSelection(): void;
export declare function updateUserSelections(params: Partial<ExposedBookingsParams>): void;
export declare function updateUserSelection(key: keyof ExposedBookingsParams, value: any): void;
export declare function updatePaginationFromSelection(selection: ExposedBookingsParams): void;
export declare function setPaginationPage(page: number): {
    startRow: number;
    endRow: number;
};
export declare function setPaginationPageSize(pageSize: number): {
    startRow: number;
    endRow: number;
};
export default booking_listing;
