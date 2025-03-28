import { a as axios } from './axios-Bpmk_xoW.js';
import { c as createStore } from './index-C7eXIDl2.js';

class PaymentOptionService {
    async GetExposedPaymentMethods() {
        const { data } = await axios.post(`/Get_Exposed_Payment_Methods`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetPropertyPaymentMethods(property_id) {
        const { data } = await axios.post(`/Get_Property_Payment_Methods`, { property_id, is_return_sensitive_data: true });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetExposedLanguages() {
        const { data } = await axios.post(`/Get_Exposed_Languages`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async HandlePaymentMethod(paymentOption) {
        const { data } = await axios.post(`/Handle_Payment_Method`, paymentOption);
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
//# sourceMappingURL=payment-option.store-CJPwLa0I.js.map

//# sourceMappingURL=payment-option.store-CJPwLa0I.js.map