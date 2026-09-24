import booking_listing, { initializeUserSelection } from "../../stores/booking_listing.store";
import { extras, isPrivilegedUser } from "../../utils/utils";
import axios from "axios";
import { ExposedBookingsParamsSchema, GetExposedBookingsCriteriaParamsSchema, RemoveExposedBookingParamsSchema, } from "./types";
export * from './types';
export class BookingListingService {
    async getExposedBookingsCriteria(params) {
        const payload = GetExposedBookingsCriteriaParamsSchema.parse(params);
        const { data } = await axios.post(`/Get_Exposed_Bookings_Criteria`, payload);
        const result = data.My_Result;
        booking_listing.channels = result.channels;
        booking_listing.settlement_methods = result.settlement_methods;
        booking_listing.statuses = result.statuses;
        booking_listing.types = result.types;
        booking_listing.balance_filter = result.balance_filter;
        initializeUserSelection();
        return result;
    }
    /** Returns the fetched bookings only when `options.skipStore` is set; otherwise writes them to the booking listing store. */
    async getExposedBookings(params, options) {
        const { property_id, userTypeCode, channel, property_ids, ...rest } = ExposedBookingsParamsSchema.parse(params);
        const havePrivilege = isPrivilegedUser(userTypeCode);
        const { data } = await axios.post(`/Get_Exposed_Bookings`, {
            ...rest,
            extras,
            property_id: havePrivilege ? undefined : property_id,
            property_ids: havePrivilege ? property_ids : null,
            channel: havePrivilege ? '' : channel,
        });
        const result = data.My_Result;
        const header = data.My_Params_Get_Exposed_Bookings;
        if (options?.skipStore) {
            return result;
        }
        if (options?.append) {
            booking_listing.bookings = [...booking_listing.bookings, ...result].map(b => ({ ...b, rooms: b.rooms ?? [] }));
        }
        else {
            booking_listing.bookings = [...result].map(b => ({ ...b, rooms: b.rooms ?? [] }));
        }
        booking_listing.userSelection = {
            ...booking_listing.userSelection,
            total_count: header.total_count,
        };
        booking_listing.download_url = header.exported_data_url;
    }
    async removeExposedBooking(params) {
        const payload = RemoveExposedBookingParamsSchema.parse(params);
        await axios.post(`/Remove_Exposed_Booking`, payload);
    }
}
