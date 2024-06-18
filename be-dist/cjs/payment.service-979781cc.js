'use strict';

const index = require('./index-08156e03.js');
const property_service = require('./property.service-4f0e9203.js');

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

class PaymentService extends property_service.Token {
    async GeneratePaymentCaller(token, params) {
        if (!token) {
            throw new property_service.MissingTokenError();
        }
        const { data } = await property_service.axios.post(`/Generate_Payment_Caller?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async RequestBookingCancelation(booking_nbr) {
        const token = this.getToken();
        if (!token) {
            throw new property_service.MissingTokenError();
        }
        const { data } = await property_service.axios.post(`/Request_Booking_Cancelation?Ticket=${token}`, { booking_nbr });
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}

exports.PaymentService = PaymentService;
exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=payment.service-979781cc.js.map