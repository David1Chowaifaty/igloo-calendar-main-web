import { T as Token, M as MissingTokenError } from './Token.js';
import { a as axios } from './axios.js';

class PaymentService extends Token {
    async GeneratePaymentCaller({ token, params, onRedirect, onScriptRun, }) {
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Generate_Payment_Caller?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data['My_Result'];
        if (res.type === 1) {
            onRedirect(res.caller);
        }
        else {
            onScriptRun(res.caller);
        }
        return res;
    }
    async RequestBookingCancelation(booking_nbr) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Request_Booking_Cancelation?Ticket=${token}`, { BOOK_NBR: booking_nbr });
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}

export { PaymentService as P };

//# sourceMappingURL=payment.service.js.map