import { c as createStore } from './index-a8bcd484.js';
import { T as Token, M as MissingTokenError, a as axios } from './property.service-d2a7e6e4.js';

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

class PaymentService extends Token {
    async GeneratePaymentCaller(token, params) {
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Generate_Payment_Caller?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async RequestBookingCancelation(booking_nbr) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Request_Booking_Cancelation?Ticket=${token}`, { booking_nbr });
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}

export { PaymentService as P, isRequestPending as a, interceptor_requests as i };

//# sourceMappingURL=payment.service-db951b7e.js.map