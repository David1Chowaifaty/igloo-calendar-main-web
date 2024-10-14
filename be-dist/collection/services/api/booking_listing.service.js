import { Token } from "../../models/Token";
import axios from "axios";
export class BookingListingService extends Token {
    async getExposedGuestBookings(params) {
        const { data } = await axios.post(`/Get_Exposed_Guest_Bookings`, Object.assign(Object.assign({}, params), { extras: [
                {
                    key: 'payment_code',
                    value: '',
                },
                {
                    key: 'prepayment_amount',
                    value: '',
                },
            ] }));
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        return { bookings: data['My_Result'], total_count: data['My_Params_Get_Exposed_Guest_Bookings'].total_count };
    }
}
//# sourceMappingURL=booking_listing.service.js.map
