import { MissingTokenError, Token } from "../../models/Token";
import app_store from "../../stores/app.store";
import booking_store from "../../stores/booking";
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
        return { data: result, amount: this.processAlicablePolicies(result, book_date).amount };
    }
    processAlicablePolicies(policies, book_date) {
        var _a, _b, _c, _d;
        let isInFreeCancelationZone = false;
        const guarenteeAmount = ((_b = (_a = policies.find(po => po.type === 'guarantee')) === null || _a === void 0 ? void 0 : _a.brackets[0]) === null || _b === void 0 ? void 0 : _b.gross_amount) || 0;
        let cancelation = policies.find(po => { var _a; return po.type === 'cancelation' && ((_a = po === null || po === void 0 ? void 0 : po.brackets) === null || _a === void 0 ? void 0 : _a.some(b => isBefore(book_date, new Date(b.due_on)), book_date)); });
        if (cancelation) {
            isInFreeCancelationZone = true;
            const cancelationAmount = (_d = (_c = cancelation.brackets.find(b => isBefore(new Date(b.due_on), book_date))) === null || _c === void 0 ? void 0 : _c.gross_amount) !== null && _d !== void 0 ? _d : null;
            return { amount: cancelationAmount > guarenteeAmount ? cancelationAmount : guarenteeAmount, isInFreeCancelationZone };
        }
        return { amount: guarenteeAmount, isInFreeCancelationZone };
    }
    async fetchCancelationMessage(id, roomTypeId, booking_nbr, showCancelation) {
        var _a, _b;
        if (booking_nbr === void 0) {
            booking_nbr = (_a = booking_store.fictus_booking_nbr) === null || _a === void 0 ? void 0 : _a.nbr;
        }
        if (showCancelation === void 0) {
            showCancelation = true;
        }
        console.log(id, roomTypeId);
        const result = await this.GetExposedApplicablePolicies({
            book_date: new Date(),
            params: {
                booking_nbr,
                currency_id: app_store.currencies.find(c => c.code.toLowerCase() === (app_store.userPreferences.currency_id.toLowerCase() || 'usd')).id,
                language: app_store.userPreferences.language_id,
                property_id: app_store.app_data.property_id,
                rate_plan_id: id,
                room_type_id: roomTypeId,
            },
            token: app_store.app_data.token,
        });
        const message = (_b = result.data.find(t => t.type === 'cancelation')) === null || _b === void 0 ? void 0 : _b.combined_statement;
        return message ? `${showCancelation ? '<b><u>Cancellation: </u></b>' : ''}${message}<br/>` : '<span></span>';
    }
}
//# sourceMappingURL=payment.service.js.map
