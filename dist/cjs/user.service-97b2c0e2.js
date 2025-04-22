'use strict';

const axios = require('./axios-6e678d52.js');

const CONSTANTS = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/,
};

class UserService {
    async checkUserExistence(params) {
        const { data } = await axios.axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
    async handleExposedUser(params) {
        const { data } = await axios.axios.post('/Handle_Exposed_User', params);
        return data.My_Result;
    }
    async getExposedPropertyUsers() {
        const { data } = await axios.axios.post('/Get_Exposed_Property_Users', {});
        return data.My_Result;
    }
}

exports.CONSTANTS = CONSTANTS;
exports.UserService = UserService;

//# sourceMappingURL=user.service-97b2c0e2.js.map