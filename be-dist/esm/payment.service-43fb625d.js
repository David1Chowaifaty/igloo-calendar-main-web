import { b as app_store, a as localizedWords } from './localization.store-7da5fafc.js';
import { r as generateCheckoutUrl, b as booking_store } from './utils-69d31b53.js';
import { a as axios } from './axios-2aba0cfc.js';
import { d as dateFns } from './index-2217e605.js';

class PaymentService {
    async getExposedCancelationDueAmount(params) {
        const { data } = await axios.post(`/Get_Exposed_Cancelation_Due_Amount`, Object.assign({}, params));
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data['My_Result'];
        return res;
    }
    async GeneratePaymentCaller({ token, params, onRedirect, onScriptRun, }) {
        // const resp = await fetch(`https://gateway.igloorooms.com/IRBE/Generate_Payment_Caller`, {
        //   method: 'POST',
        //   headers: {
        //     'Authorization': token,
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ ...params, callback_url: `https://${app_store.property.perma_link}.bookingmystay.com/invoice` }),
        // });
        // const data = await resp.json();
        const { data } = await axios.post('/Generate_Payment_Caller', Object.assign(Object.assign({}, params), { callback_url: generateCheckoutUrl(app_store.property.perma_link) }), { headers: { Authorization: token } });
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
    async RequestBookingCancellation(booking_nbr) {
        const { data } = await axios.post(`/Request_Booking_Cancelation`, { BOOK_NBR: booking_nbr });
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async GetExposedApplicablePolicies({ params, book_date, }) {
        const { data } = await axios.post(`/Get_Exposed_Applicable_Policies`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const result = data['My_Result'];
        return { data: result, amount: this.processAlicablePolicies(result, book_date).amount, room_type_id: params.room_type_id, rate_plan_id: params.rate_plan_id };
    }
    processAlicablePolicies(policies, book_date) {
        var _a, _b, _c, _d;
        const guarenteeAmount = ((_b = (_a = policies.find(po => po.type === 'guarantee')) === null || _a === void 0 ? void 0 : _a.brackets[0]) === null || _b === void 0 ? void 0 : _b.gross_amount) || 0;
        let cancelation = policies.find(po => { var _a; return po.type === 'cancelation' && ((_a = po === null || po === void 0 ? void 0 : po.brackets) === null || _a === void 0 ? void 0 : _a.some(b => dateFns.isBefore(new Date(b.due_on), book_date) || dateFns.isSameDay(new Date(b.due_on), book_date))); });
        if (cancelation) {
            const cancelationAmount = (_d = (_c = cancelation.brackets.find(b => dateFns.isBefore(new Date(b.due_on), book_date) || dateFns.isSameDay(new Date(b.due_on), book_date))) === null || _c === void 0 ? void 0 : _c.gross_amount) !== null && _d !== void 0 ? _d : null;
            return { amount: cancelationAmount > guarenteeAmount ? cancelationAmount : guarenteeAmount };
        }
        return { amount: guarenteeAmount };
    }
    checkFreeCancelationZone(policies) {
        const now = new Date();
        let isInFreeCancelationZone = false;
        let cancelation = policies === null || policies === void 0 ? void 0 : policies.find(po => { var _a; return po.type === 'cancelation' && ((_a = po === null || po === void 0 ? void 0 : po.brackets) === null || _a === void 0 ? void 0 : _a.some(b => dateFns.isBefore(new Date(b.due_on), now) || dateFns.isSameDay(new Date(b.due_on), now))); });
        if (!cancelation) {
            isInFreeCancelationZone = true;
        }
        return isInFreeCancelationZone;
    }
    getCancelationMessage(applicablePolicies, showCancelation = false, includeGuarentee = true) {
        var _a, _b;
        const cancelationMessage = (_a = applicablePolicies.find(t => t.type === 'cancelation')) === null || _a === void 0 ? void 0 : _a.combined_statement;
        let message = cancelationMessage ? `${showCancelation ? `<b><u>${localizedWords.entries.Lcz_Cancelation}: </u></b>` : ''}${cancelationMessage}<br/>` : '<span></span>';
        if (includeGuarentee) {
            const guarenteeMessage = (_b = applicablePolicies.find(t => t.type === 'guarantee')) === null || _b === void 0 ? void 0 : _b.combined_statement;
            if (guarenteeMessage) {
                message += `${showCancelation ? `<b><u>${localizedWords.entries.Lcz_Guarantee}: </u></b>` : ''}${guarenteeMessage}<br/>`;
            }
        }
        return {
            message,
            data: applicablePolicies,
        };
    }
    async fetchCancelationMessage(params) {
        var _a, _b;
        let applicablePolicies;
        if ('data' in params && params.data) {
            applicablePolicies = params.data;
        }
        else {
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
            });
            applicablePolicies = result.data;
        }
        const message = (_b = applicablePolicies.find(t => t.type === 'cancelation')) === null || _b === void 0 ? void 0 : _b.combined_statement;
        return { message: message ? `${params.showCancelation ? '<b><u>Cancellation: </u></b>' : ''}${message}<br/>` : '<span></span>', data: applicablePolicies };
    }
    async getBookingPrepaymentAmount(booking) {
        var _a, _b;
        const list = this.setUpBooking(booking);
        let requests = await Promise.all(list.map(l => this.GetExposedApplicablePolicies({
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
            const currentDueDate = dateFns.parseISO(item.due_on);
            if (!closestDateObj || dateFns.isBefore(currentDueDate, dateFns.parseISO(closestDateObj.due_on))) {
                closestDateObj = item;
            }
        }
        return closestDateObj;
    }
}

export { PaymentService as P };

//# sourceMappingURL=payment.service-43fb625d.js.map