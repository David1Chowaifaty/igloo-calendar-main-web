'use strict';

const utils = require('./utils-e03e37bd.js');
const axios = require('./axios-6e678d52.js');

const CONSTANTS = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/,
};

class UserService {
    async sendVerificationEmail() {
        // throw new Error('Method not implemented.');
        await utils.sleep(400);
    }
    async checkUserExistence(params) {
        const { data } = await axios.axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
    async handleExposedUser(params) {
        const { data } = await axios.axios.post('/Handle_Exposed_User', params);
        console.warn('data<==>', data);
        return data.My_Result;
    }
    async getExposedPropertyUsers({ property_id }) {
        const { data } = await axios.axios.post('/Get_Exposed_Property_Users', { property_id });
        return data.My_Result;
    }
}

exports.CONSTANTS = CONSTANTS;
exports.UserService = UserService;

//# sourceMappingURL=user.service-cafac5f1.js.map