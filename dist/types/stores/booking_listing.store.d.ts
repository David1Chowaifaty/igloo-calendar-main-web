import { IExposedBookingsCriteria } from "../models/IrBookingListing";
import { Booking } from "../models/booking.dto";
export interface IBookingListingStore extends IExposedBookingsCriteria {
    token: string;
    userSelection: IUserListingSelection;
    bookings: Booking[];
    download_url: string | null;
    rowCount: number;
    balance_filter: {
        name: string;
        value: string;
    }[];
}
export interface IUserListingSelection {
    channel: string;
    property_id: number;
    balance_filter: string;
    filter_type: number | string;
    from: string;
    to: string;
    name: string;
    book_nbr: string;
    booking_status: string;
    affiliate_id: 0;
    is_mpo_managed: false;
    is_mpo_used: false;
    is_for_mobile: false;
    is_combined_view: false;
    start_row: number;
    end_row: number;
    total_count: number;
    is_to_export: boolean;
}
export declare const booking_listing: IBookingListingStore, onBookingListingChange: import("@stencil/store/dist/types").OnChangeHandler<IBookingListingStore>;
export declare function initializeUserSelection(): void;
export declare function updateUserSelections(params: Partial<IUserListingSelection>): void;
export declare function updateUserSelection(key: keyof IUserListingSelection, value: any): void;
export default booking_listing;
