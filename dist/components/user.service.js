import { K as sleep } from './utils.js';
import { a as axios } from './axios.js';

class UserService {
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
    async getExposedPropertyUsers() {
        const { data } = await axios.post('/Get_Exposed_Property_Users', {});
        return data.My_Result;
    }
}

export { UserService as U };

//# sourceMappingURL=user.service.js.map