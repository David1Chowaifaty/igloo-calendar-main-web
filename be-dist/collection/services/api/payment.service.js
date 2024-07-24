import { MissingTokenError, Token } from "../../models/Token";
import app_store from "../../stores/app.store";
import axios from "axios";
import { isBefore } from "date-fns";
export class PaymentService extends Token {
    processBookingPayment() { }
    async GeneratePaymentCaller({ token, params, onRedirect, onScriptRun, }) {
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Generate_Payment_Caller?Ticket=${token}`, Object.assign(Object.assign({}, params), { callback_url: `https://${app_store.property.perma_link}.bookingmystay.com/invoice` }));
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
    async GetExposedApplicablePolicies({ token, params, book_date, }) {
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Applicable_Policies?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const result = data['My_Result'];
        return { data: result, amount: this.processAlicablePolicies(result, book_date) };
    }
    processAlicablePolicies(policies, book_date) {
        var _a, _b, _c, _d;
        const guarenteeAmount = ((_b = (_a = policies.find(po => po.type === 'guarantee')) === null || _a === void 0 ? void 0 : _a.brackets[0]) === null || _b === void 0 ? void 0 : _b.gross_amount) || 0;
        let cancelation = policies.find(po => po.type === 'cancelation' && po.brackets.some(b => isBefore(new Date(b.due_on), book_date)));
        console.log('cancelation', cancelation);
        if (cancelation) {
            const cancelationAmount = (_d = (_c = cancelation.brackets.find(b => isBefore(new Date(b.due_on), book_date))) === null || _c === void 0 ? void 0 : _c.gross_amount) !== null && _d !== void 0 ? _d : null;
            return cancelationAmount > guarenteeAmount ? cancelationAmount : guarenteeAmount;
        }
        return guarenteeAmount;
    }
}
//# sourceMappingURL=payment.service.js.map
