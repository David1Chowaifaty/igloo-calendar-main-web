import { MissingTokenError, Token } from "../../models/Token";
import axios from "axios";
export class BookingListingService extends Token {
    async getExposedGuestToken(property_id) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Guest_Bookings?Ticket=${token}`, {
            property_id,
        });
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        return data['My_Result'];
    }
}
//# sourceMappingURL=booking_listing.service.js.map
