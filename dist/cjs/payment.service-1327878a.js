'use strict';

const axios = require('./axios-bc0bd15c.js');

class PaymentService {
    async AddPayment(payment, book_nbr) {
        try {
            const { data } = await axios.axios.post(`/Do_Payment`, { payment: Object.assign(Object.assign({}, payment), { book_nbr }) });
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
            const { data } = await axios.axios.post(`/Cancel_Payment`, { id });
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
    async GetExposedCancellationDueAmount(params) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Cancelation_Due_Amount`, params);
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

exports.PaymentService = PaymentService;

//# sourceMappingURL=payment.service-1327878a.js.map