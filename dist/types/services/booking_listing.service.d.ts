import { IExposedBookingsCriteria } from "../models/IrBookingListing";
import { ExposedBookingsParams } from "../stores/booking_listing.store";
export declare class BookingListingService {
    /**
     * Fetches the bookings criteria without touching the booking listing store.
     */
    fetchExposedBookingsCriteria(property_id: number): Promise<IExposedBookingsCriteria>;
    getExposedBookingsCriteria(property_id: number): Promise<IExposedBookingsCriteria>;
    getExposedBookings(params: ExposedBookingsParams, options?: {
        append?: boolean;
        skipStore?: boolean;
    }): Promise<any>;
    removeExposedBooking(booking_nbr: string, is_to_revover: boolean): Promise<void>;
}
