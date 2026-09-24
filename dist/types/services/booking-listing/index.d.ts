import { Booking } from "../../models/booking.dto";
import { ExposedBookingsParams, GetExposedBookingsCriteriaParams, GetExposedBookingsOptions, IExposedBookingsCriteria, RemoveExposedBookingParams } from './types';
export * from './types';
export declare class BookingListingService {
    getExposedBookingsCriteria(params: GetExposedBookingsCriteriaParams): Promise<IExposedBookingsCriteria>;
    /** Returns the fetched bookings only when `options.skipStore` is set; otherwise writes them to the booking listing store. */
    getExposedBookings(params: ExposedBookingsParams, options?: GetExposedBookingsOptions): Promise<Booking[] | undefined>;
    removeExposedBooking(params: RemoveExposedBookingParams): Promise<void>;
}
