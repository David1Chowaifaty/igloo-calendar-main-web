import { s as sleep } from './utils-f1b7543f.js';
import { a as axios } from './axios-aa1335b8.js';

const CONSTANTS = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/,
};

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
        return data.My_Result;
    }
    async getExposedPropertyUsers() {
        const { data } = await axios.post('/Get_Exposed_Property_Users', {});
        return data.My_Result;
    }
}

export { CONSTANTS as C, UserService as U };

//# sourceMappingURL=user.service-7037e1f2.js.map