'use strict';

const axios = require('./axios-b86c5465.js');
const index = require('./index-5e99a1fe.js');

class PaymentOptionService {
    async GetExposedPaymentMethods() {
        const { data } = await axios.axios.post(`/Get_Exposed_Payment_Methods`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetPropertyPaymentMethods(property_id) {
        const { data } = await axios.axios.post(`/Get_Property_Payment_Methods`, { property_id, is_return_sensitive_data: true });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetExposedLanguages() {
        const { data } = await axios.axios.post(`/Get_Exposed_Languages`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async HandlePaymentMethod(paymentOption) {
        const { data } = await axios.axios.post(`/Handle_Payment_Method`, paymentOption);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
}

const initialState = {
    selectedOption: null,
    token: null,
    mode: 'create',
    languages: null,
};
const { state: payment_option_store } = index.createStore(initialState);

exports.PaymentOptionService = PaymentOptionService;
exports.payment_option_store = payment_option_store;

//# sourceMappingURL=payment-option.store-98e527da.js.map