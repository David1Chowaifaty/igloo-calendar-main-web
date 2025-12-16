import { T as sleep } from './utils-d28797b2.js';
import { a as axios } from './axios-aa1335b8.js';

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
        const { base_user_type_code, property_id, ...rest } = params;
        let body = { ...rest };
        if ([1, 4].includes(Number(base_user_type_code))) {
            body = { ...body, property_id };
        }
        const { data } = await axios.post('/Handle_Exposed_User', body);
        console.warn('data<==>', data);
        return data.My_Result;
    }
    async getExposedPropertyUsers({ property_id }) {
        const { data } = await axios.post('/Get_Exposed_Property_Users', { property_id });
        return data.My_Result;
    }
}

export { UserService as U };

//# sourceMappingURL=user.service-01a0752a.js.map