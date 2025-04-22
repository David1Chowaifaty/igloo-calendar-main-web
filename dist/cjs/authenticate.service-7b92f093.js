'use strict';

const axios = require('./axios-6e678d52.js');

class AuthService {
    async authenticate(params) {
        const { data } = await axios.axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
    async changeUserPwd(params) {
        const { data } = await axios.axios.post('/Change_User_Pwd', params);
        return data.My_Result;
    }
}

exports.AuthService = AuthService;

//# sourceMappingURL=authenticate.service-7b92f093.js.map