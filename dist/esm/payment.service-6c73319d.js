import { a as axios } from './axios-ab377903.js';
import { T as Token } from './Token-39881880.js';

class PaymentService extends Token {
    async AddPayment(payment, book_nbr) {
        try {
            const { data } = await axios.post(`/Do_Payment`, { payment: Object.assign(Object.assign({}, payment), { book_nbr }) });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async CancelPayment(id) {
        try {
            const { data } = await axios.post(`/Cancel_Payment`, { id });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async GetExposedCancelationDueAmount(params) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Cancelation_Due_Amount`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}

export { PaymentService as P };

//# sourceMappingURL=payment.service-6c73319d.js.map