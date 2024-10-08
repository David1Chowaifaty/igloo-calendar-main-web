import { MissingTokenError, Token } from "../../models/Token";
import app_store from "../../stores/app.store";
import booking_store from "../../stores/booking";
import axios from "axios";
import { isBefore, parseISO } from "date-fns";
export class PaymentService extends Token {
    async getExposedCancelationDueAmount(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Cancelation_Due_Amount?Ticket=${token}`, Object.assign({}, params));
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data['My_Result'];
        return res;
    }
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
        return { data: result, amount: this.processAlicablePolicies(result, book_date).amount, room_type_id: params.room_type_id, rate_plan_id: params.rate_plan_id };
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
    async fetchCancelationMessage(params) {
        var _a, _b;
        let applicablePolicies;
        if ('data' in params && params.data) {
            applicablePolicies = params.data;
        }
        else {
            console.log('fetching cancelation message');
            const { id, roomTypeId, bookingNbr = (_a = booking_store.fictus_booking_nbr) === null || _a === void 0 ? void 0 : _a.nbr } = params;
            const result = await this.GetExposedApplicablePolicies({
                book_date: new Date(),
                params: {
                    booking_nbr: bookingNbr,
                    currency_id: app_store.currencies.find(c => c.code.toLowerCase() === (app_store.userPreferences.currency_id.toLowerCase() || 'usd')).id,
                    language: app_store.userPreferences.language_id,
                    property_id: app_store.app_data.property_id,
                    rate_plan_id: id,
                    room_type_id: roomTypeId,
                },
                token: app_store.app_data.token,
            });
            applicablePolicies = result.data;
        }
        const message = (_b = applicablePolicies.find(t => t.type === 'cancelation')) === null || _b === void 0 ? void 0 : _b.combined_statement;
        return { message: message ? `${params.showCancelation ? '<b><u>Cancellation: </u></b>' : ''}${message}<br/>` : '<span></span>', data: applicablePolicies };
    }
    async getBookingPrepaymentAmount(booking) {
        var _a, _b;
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const list = this.setUpBooking(booking);
        let requests = await Promise.all(list.map(l => this.GetExposedApplicablePolicies({
            token,
            book_date: new Date(booking.booked_on.date),
            params: {
                booking_nbr: l.booking_nbr,
                currency_id: booking.currency.id,
                language: app_store.userPreferences.language_id,
                rate_plan_id: l.ratePlanId,
                room_type_id: l.roomTypeId,
                property_id: app_store.property.id,
            },
        })));
        const cancelation_message = (_a = requests[0].data.find(t => t.type === 'cancelation')) === null || _a === void 0 ? void 0 : _a.combined_statement;
        const guarantee_message = (_b = requests[0].data.find(t => t.type === 'guarantee')) === null || _b === void 0 ? void 0 : _b.combined_statement;
        const cancelation_policies = requests
            .map((r, idx) => {
            const c_data = r.data.find(f => f.type === 'cancelation');
            const { rp_name, rt_name } = list[idx];
            if (c_data) {
                return { statement: c_data.combined_statement, rp_name, rt_name };
            }
            return null;
        })
            .filter(f => f !== null);
        return { amount: requests.reduce((prev, curr) => prev + curr.amount, 0), cancelation_message, guarantee_message, cancelation_policies };
    }
    setUpBooking(booking) {
        let list = [];
        booking.rooms.map(r => list.push({ booking_nbr: booking.booking_nbr, ratePlanId: r.rateplan.id, roomTypeId: r.roomtype.id, rp_name: r.rateplan.name, rt_name: r.roomtype.name }));
        return list;
    }
    findClosestDate(data) {
        let closestDateObj = null;
        for (const item of data) {
            const currentDueDate = parseISO(item.due_on);
            if (!closestDateObj || isBefore(currentDueDate, parseISO(closestDateObj.due_on))) {
                closestDateObj = item;
            }
        }
        return closestDateObj;
    }
}
//# sourceMappingURL=payment.service.js.map
