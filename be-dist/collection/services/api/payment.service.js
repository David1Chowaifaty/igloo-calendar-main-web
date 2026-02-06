import app_store from "../../stores/app.store";
import booking_store from "../../stores/booking";
import localizedWords from "../../stores/localization.store";
import { generateCheckoutUrl } from "../../utils/utils";
import axios from "axios";
import { isBefore, isSameDay, parseISO } from "date-fns";
import moment from "moment";
export class PaymentService {
    async getExposedCancellationDueAmount(params) {
        const { data } = await axios.post(`/Get_Exposed_Cancelation_Due_Amount`, Object.assign({}, params));
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data['My_Result'];
        return res;
    }
    async GeneratePaymentCaller({ token, params, onRedirect, onScriptRun, }) {
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
    async requestBookingCancellation(booking_nbr) {
        // const { data } = await axios.post(`/Request_Booking_Cancelation`, { BOOK_NBR: booking_nbr });
        // if (data['ExceptionMsg'] !== '') {
        //   throw new Error(data.ExceptionMsg);
        // }
        // return data['My_Result'];
        const { data } = await axios.post(`/Change_Exposed_Booking_Status`, {
            book_nbr: booking_nbr,
            status: 'CANC_RA',
        });
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
        return { data: result, amount: this.processApplicablePolicies(result, book_date).amount, room_type_id: params.room_type_id, rate_plan_id: params.rate_plan_id };
    }
    processApplicablePolicies(policies, book_date) {
        var _a, _b, _c, _d;
        const guaranteeAmount = ((_b = (_a = policies.find(po => po.type === 'guarantee')) === null || _a === void 0 ? void 0 : _a.brackets[0]) === null || _b === void 0 ? void 0 : _b.gross_amount) || 0;
        let cancellation = policies.find(po => { var _a; return po.type === 'cancelation' && ((_a = po === null || po === void 0 ? void 0 : po.brackets) === null || _a === void 0 ? void 0 : _a.some(b => isBefore(new Date(b.due_on), book_date) || isSameDay(new Date(b.due_on), book_date))); });
        if (cancellation) {
            const cancellationAmount = (_d = (_c = cancellation.brackets.find(b => isBefore(new Date(b.due_on), book_date) || isSameDay(new Date(b.due_on), book_date))) === null || _c === void 0 ? void 0 : _c.gross_amount) !== null && _d !== void 0 ? _d : null;
            return { amount: cancellationAmount > guaranteeAmount ? cancellationAmount : guaranteeAmount };
        }
        return { amount: guaranteeAmount };
    }
    /**
     * Determines whether the current time falls within a "free cancellation" bracket.
     *
     * The method identifies which cancellation bracket (based on `due_on` date)
     * the current time is within. A bracket is defined by a start date (`due_on`)
     * and ends at the start of the next bracket (or continues indefinitely if it's the last one).
     *
     * If the current bracket has an `amount` or `gross_amount` equal to `0`,
     * the booking is considered to be in the free cancellation period.
     *
     * @param {IExposedApplicablePolicies[]} policies - List of applicable policies containing cancellation brackets.
     * @returns {boolean} Returns `true` if currently in a free cancellation bracket (amount = 0), otherwise `false`.
     *
     * @example
     * const isFree = paymentService.checkFreeCancellationZone(policies);
     * if (isFree) {
     *   console.log('You are within the free cancellation period.');
     * }
     */
    checkFreeCancellationZone(policies) {
        var _a;
        const cancellationPolicies = policies === null || policies === void 0 ? void 0 : policies.find(p => p.type === 'cancelation');
        if (!cancellationPolicies || !Array.isArray(cancellationPolicies.brackets) || cancellationPolicies.brackets.length === 0) {
            return false;
        }
        const now = moment();
        // Ensure brackets are in ascending order by start date
        const brackets = [...cancellationPolicies.brackets].sort((a, b) => moment(a.due_on, 'YYYY-MM-DD').valueOf() - moment(b.due_on, 'YYYY-MM-DD').valueOf());
        // Find the bracket where: start <= now < nextStart (or open-ended if last)
        let currentBracket = null;
        for (let i = 0; i < brackets.length; i++) {
            const start = moment(brackets[i].due_on, 'YYYY-MM-DD');
            const nextStart = i < brackets.length - 1 ? moment(brackets[i + 1].due_on, 'YYYY-MM-DD') : null;
            if (now.isSameOrAfter(start) && (nextStart === null || now.isBefore(nextStart))) {
                currentBracket = brackets[i];
                break;
            }
        }
        if (!currentBracket) {
            // now is before the first bracket's start; by definition we're not inside any bracket
            return true;
        }
        const amt = (_a = currentBracket.gross_amount) !== null && _a !== void 0 ? _a : 0;
        return Number(amt) === 0;
    }
    getCancellationMessage(applicablePolicies, showCancellation = false, includeGuarantee = true) {
        var _a, _b;
        const cancellationMessage = (_a = applicablePolicies.find(t => t.type === 'cancelation')) === null || _a === void 0 ? void 0 : _a.combined_statement;
        let message = cancellationMessage ? `${showCancellation ? `<b><u>${localizedWords.entries.Lcz_Cancelation}: </u></b>` : ''}${cancellationMessage}<br/>` : '<span></span>';
        if (includeGuarantee) {
            const guaranteeMessage = (_b = applicablePolicies.find(t => t.type === 'guarantee')) === null || _b === void 0 ? void 0 : _b.combined_statement;
            if (guaranteeMessage) {
                message += `${showCancellation ? `<b><u>${localizedWords.entries.Lcz_Guarantee}: </u></b>` : ''}${guaranteeMessage}<br/>`;
            }
        }
        return {
            message,
            data: applicablePolicies,
        };
    }
    async fetchCancellationMessage(params) {
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
            const currentDueDate = parseISO(item.due_on);
            if (!closestDateObj || isBefore(currentDueDate, parseISO(closestDateObj.due_on))) {
                closestDateObj = item;
            }
        }
        return closestDateObj;
    }
}
//# sourceMappingURL=payment.service.js.map
