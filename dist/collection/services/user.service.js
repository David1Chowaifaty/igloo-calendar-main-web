import axios from "axios";
export class UserService {
    async checkUserExistence(params) {
        const { data } = await axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
}
//# sourceMappingURL=user.service.js.map
