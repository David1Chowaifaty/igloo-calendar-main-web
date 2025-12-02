import axios from "axios";
export class AuthService {
    async authenticate(params) {
        const { data } = await axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
    async changeUserPwd(params) {
        const { data } = await axios.post('/Change_User_Pwd', params);
        if (data.ExceptionMsg?.trim()) {
            throw new Error(data.ExceptionMsg?.trim());
        }
        return data.My_Result;
    }
}
//# sourceMappingURL=authenticate.service.js.map
