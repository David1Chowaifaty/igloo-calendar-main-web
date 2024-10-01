'use strict';

const axios = require('./axios-b86c5465.js');
const Token = require('./Token-db8ba99b.js');

class PaymentService extends Token.Token {
    async AddPayment(payment, book_nbr) {
        try {
            const token = this.getToken();
            if (token !== null) {
                const { data } = await axios.axios.post(`/Do_Payment?Ticket=${token}`, { payment: Object.assign(Object.assign({}, payment), { book_nbr }) });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data.My_Result;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async CancelPayment(id) {
        try {
            const token = this.getToken();
            if (token !== null) {
                const { data } = await axios.axios.post(`/Cancel_Payment?Ticket=${token}`, { id });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data.My_Result;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async GetExposedCancelationDueAmount(params) {
        try {
            const token = this.getToken();
            if (token !== null) {
                const { data } = await axios.axios.post(`/Get_Exposed_Cancelation_Due_Amount?Ticket=${token}`, params);
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data.My_Result;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}

exports.PaymentService = PaymentService;

//# sourceMappingURL=payment.service-04d2e691.js.map