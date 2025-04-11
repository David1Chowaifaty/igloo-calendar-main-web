import { a as axios } from './axios-aa1335b8.js';

class UserService {
    async checkUserExistence(params) {
        const { data } = await axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
}

export { UserService as U };

//# sourceMappingURL=user.service-39ab9b0c.js.map