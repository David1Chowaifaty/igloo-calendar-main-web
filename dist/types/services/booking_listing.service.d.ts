import { IUserListingSelection } from "../stores/booking_listing.store";
export declare class BookingListingService {
    getExposedBookingsCriteria(property_id: number): Promise<void>;
    getExposedBookings(params: IUserListingSelection): Promise<void>;
    removeExposedBooking(booking_nbr: string, is_to_revover: boolean): Promise<void>;
}
