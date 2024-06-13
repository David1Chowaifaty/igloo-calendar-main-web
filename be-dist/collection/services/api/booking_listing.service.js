import { MissingTokenError, Token } from "../../models/Token";
import axios from "axios";
export class BookingListingService extends Token {
    async getExposedGuestBookings(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Guest_Bookings?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        return { bookings: data['My_Result'], total_count: data['My_Params_Get_Exposed_Guest_Bookings'].total_count };
    }
}
//# sourceMappingURL=booking_listing.service.js.map
