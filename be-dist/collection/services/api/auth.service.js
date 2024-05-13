import { MissingTokenError, Token } from "../../models/Token";
import app_store from "../../stores/app.store";
import axios from "axios";
export class AuthService extends Token {
    async login(params, booking_nbr = '') {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Exposed_Guest_SignIn?Ticket=${token}`, Object.assign(Object.assign({}, params), { booking_nbr }));
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        localStorage.setItem('ir-token', data['My_Result']);
        app_store.app_data.token = data['My_Result'];
        return data['My_Result'];
    }
    async signUp(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Exposed_Guest_SignUp?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        localStorage.setItem('ir-token', data['My_Result']);
        app_store.app_data.token = data['My_Result'];
    }
}
//# sourceMappingURL=auth.service.js.map
