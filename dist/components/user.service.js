import { a as axios } from './axios.js';

class UserService {
    async checkUserExistence(params) {
        const { data } = await axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
}

export { UserService as U };

//# sourceMappingURL=user.service.js.map