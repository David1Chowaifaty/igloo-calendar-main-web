import { a as axios } from './axios-aa1335b8.js';

class AuthService {
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
        return data.My_Result;
    }
}

export { AuthService as A };

//# sourceMappingURL=authenticate.service-d0305ba4.js.map