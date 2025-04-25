import axios from "axios";
export class UserService {
    async sendVerificationEmail() {
        throw new Error('Method not implemented.');
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
//# sourceMappingURL=user.service.js.map
