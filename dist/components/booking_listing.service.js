import { b as booking_listing, i as initializeUserSelection } from './booking_listing.store.js';
import { e as extras, G as isPrivilegedUser } from './utils.js';
import { a as axios } from './axios.js';

class BookingListingService {
    async getExposedBookingsCriteria(property_id) {
        const { data } = await axios.post(`/Get_Exposed_Bookings_Criteria`, {
            property_id,
        });
        const result = data.My_Result;
        booking_listing.channels = result.channels;
        booking_listing.settlement_methods = result.settlement_methods;
        booking_listing.statuses = result.statuses;
        booking_listing.types = result.types;
        booking_listing.balance_filter = result.balance_filter;
        initializeUserSelection();
    }
    async getExposedBookings(params, options) {
        const { property_id, userTypeCode, channel, property_ids, ...rest } = params;
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
            booking_listing.bookings = [...booking_listing.bookings, ...result];
        }
        else {
            booking_listing.bookings = [...result];
        }
        booking_listing.userSelection = {
            ...booking_listing.userSelection,
            total_count: header.total_count,
        };
        booking_listing.download_url = header.exported_data_url;
    }
    async removeExposedBooking(booking_nbr, is_to_revover) {
        await axios.post(`/Remove_Exposed_Booking`, {
            booking_nbr,
            is_to_revover,
        });
    }
}

export { BookingListingService as B };

//# sourceMappingURL=booking_listing.service.js.map