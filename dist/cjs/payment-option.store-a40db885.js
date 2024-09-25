'use strict';

const Token = require('./Token-db8ba99b.js');
const axios = require('./axios-b86c5465.js');
const index = require('./index-5e99a1fe.js');

class PaymentOptionService extends Token.Token {
    async GetExposedPaymentMethods() {
        const token = this.getToken();
        if (!token) {
            throw new Token.MissingTokenError();
        }
        const { data } = await axios.axios.post(`/Get_Exposed_Payment_Methods?Ticket=${token}`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetPropertyPaymentMethods(property_id) {
        const token = this.getToken();
        if (!token) {
            throw new Token.MissingTokenError();
        }
        const { data } = await axios.axios.post(`/Get_Property_Payment_Methods?Ticket=${token}`, { property_id, is_return_sensitive_data: true });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetExposedLanguages() {
        const token = this.getToken();
        if (!token) {
            throw new Token.MissingTokenError();
        }
        const { data } = await axios.axios.post(`/Get_Exposed_Languages?Ticket=${token}`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async HandlePaymentMethod(paymentOption) {
        const token = this.getToken();
        if (!token) {
            throw new Token.MissingTokenError();
        }
        const { data } = await axios.axios.post(`/Handle_Payment_Method?Ticket=${token}`, paymentOption);
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

//# sourceMappingURL=payment-option.store-a40db885.js.map