import { MissingTokenError, Token } from "../models/Token";
import axios from "axios";
export class PaymentOptionService extends Token {
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
//# sourceMappingURL=payment_option.service.js.map
