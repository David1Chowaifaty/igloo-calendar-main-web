import axios from "axios";
import { MissingTokenError, Token } from "../../models/Token";
export class CommonService extends Token {
    async getCurrencies() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Currencies?Ticket=${token}`);
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Languages?Ticket=${token}`);
        return data['My_Result'];
    }
}
//# sourceMappingURL=common.service.js.map
