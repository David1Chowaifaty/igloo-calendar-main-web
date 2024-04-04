import { MissingTokenError, Token } from "../../models/Token";
import booking_store from "../../stores/booking";
import axios from "axios";
export class PropertyService extends Token {
    async getExposedProperty(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Property?Ticket=${token}`, params);
        const result = data.My_Result;
        booking_store.roomTypes = [...result.roomtypes];
        return result;
    }
    async getExposedBookingAvailability(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Booking_Availability?Ticket=${token}`, params);
        const result = data.My_Result;
        booking_store.roomTypes = [...result.roomtypes];
        booking_store.enableBooking = true;
        return result;
    }
}
//# sourceMappingURL=property.service.js.map
