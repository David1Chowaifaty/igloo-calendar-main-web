import { sleep } from "../utils/utils";
import axios from "axios";
export class UserService {
    async sendVerificationEmail() {
        // throw new Error('Method not implemented.');
        await sleep(400);
    }
    async checkUserExistence(params) {
        const { data } = await axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
    async handleExposedUser(params) {
        const { data } = await axios.post('/Handle_Exposed_User', params);
        console.warn('data<==>', data);
        return data.My_Result;
    }
    async getExposedPropertyUsers({ property_id }) {
        const { data } = await axios.post('/Get_Exposed_Property_Users', { property_id });
        return data.My_Result;
    }
}
//# sourceMappingURL=user.service.js.map
