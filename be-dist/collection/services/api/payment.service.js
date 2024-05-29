import { MissingTokenError, Token } from "../../models/Token";
import axios from "axios";
export class PaymentService extends Token {
    async GeneratePaymentCaller(token, params) {
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Generate_Payment_Caller?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}
//# sourceMappingURL=payment.service.js.map
