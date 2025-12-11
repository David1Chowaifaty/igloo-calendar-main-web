import { IExposedBookingsCriteria } from "../models/IrBookingListing";
import { Booking } from "../models/booking.dto";
import { z } from 'zod';
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
    token: string;
    userSelection: ExposedBookingsParams;
    bookings: Booking[];
    download_url: string | null;
    rowCount: number;
    balance_filter: {
        name: string;
        value: string;
    }[];
    pagination: BookingListingPagination;
}
export declare const ExposedBookingsParamsSchema: z.ZodObject<{
    channel: z.ZodString;
    property_id: z.ZodNullable<z.ZodNumber>;
    balance_filter: z.ZodNullable<z.ZodString>;
    filter_type: z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    from: z.ZodString;
    to: z.ZodString;
    name: z.ZodString;
    book_nbr: z.ZodString;
    booking_status: z.ZodString;
    userTypeCode: z.ZodOptional<z.ZodNumber>;
    affiliate_id: z.ZodDefault<z.ZodNumber>;
    is_mpo_managed: z.ZodDefault<z.ZodBoolean>;
    is_mpo_used: z.ZodDefault<z.ZodBoolean>;
    is_for_mobile: z.ZodDefault<z.ZodBoolean>;
    is_combined_view: z.ZodDefault<z.ZodBoolean>;
    start_row: z.ZodNumber;
    end_row: z.ZodNumber;
    total_count: z.ZodNumber;
    is_to_export: z.ZodBoolean;
    property_ids: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    book_nbr?: string;
    property_id?: number;
    total_count?: number;
    from?: string;
    to?: string;
    channel?: string;
    balance_filter?: string;
    filter_type?: string | number;
    booking_status?: string;
    userTypeCode?: number;
    affiliate_id?: number;
    is_mpo_managed?: boolean;
    is_mpo_used?: boolean;
    is_for_mobile?: boolean;
    is_combined_view?: boolean;
    start_row?: number;
    end_row?: number;
    is_to_export?: boolean;
    property_ids?: number[];
}, {
    name?: string;
    book_nbr?: string;
    property_id?: number;
    total_count?: number;
    from?: string;
    to?: string;
    channel?: string;
    balance_filter?: string;
    filter_type?: string | number;
    booking_status?: string;
    userTypeCode?: number;
    affiliate_id?: number;
    is_mpo_managed?: boolean;
    is_mpo_used?: boolean;
    is_for_mobile?: boolean;
    is_combined_view?: boolean;
    start_row?: number;
    end_row?: number;
    is_to_export?: boolean;
    property_ids?: number[];
}>;
export type ExposedBookingsParams = z.infer<typeof ExposedBookingsParamsSchema>;
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
