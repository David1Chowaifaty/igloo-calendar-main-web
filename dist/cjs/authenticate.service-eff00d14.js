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
        var _a, _b;
        const { data } = await axios.axios.post('/Change_User_Pwd', params);
        if ((_a = data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            throw new Error((_b = data.ExceptionMsg) === null || _b === void 0 ? void 0 : _b.trim());
        }
        return data.My_Result;
    }
}

exports.AuthService = AuthService;

//# sourceMappingURL=authenticate.service-eff00d14.js.map