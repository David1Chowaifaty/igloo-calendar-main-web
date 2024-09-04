import { T as Token, M as MissingTokenError } from './Token-be23fd51.js';
import { a as axios } from './axios-ab377903.js';
import { c as createStore } from './index-1d7b1ff2.js';

class PaymentOptionService extends Token {
    async GetExposedPaymentMethods() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Payment_Methods?Ticket=${token}`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetPropertyPaymentMethods(property_id) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Property_Payment_Methods?Ticket=${token}`, { property_id, is_return_sensitive_data: true });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetExposedLanguages() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Languages?Ticket=${token}`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async HandlePaymentMethod(paymentOption) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Handle_Payment_Method?Ticket=${token}`, paymentOption);
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
const { state: payment_option_store } = createStore(initialState);

export { PaymentOptionService as P, payment_option_store as p };

//# sourceMappingURL=payment-option.store-d231a8e7.js.map