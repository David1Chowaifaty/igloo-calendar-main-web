'use strict';

const utils = require('./utils-2cdf6642.js');
const axios = require('./axios-6e678d52.js');

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
        const { base_user_type_code, property_id, ...rest } = params;
        let body = { ...rest };
        if ([1, 4].includes(Number(base_user_type_code))) {
            body = { ...body, property_id };
        }
        const { data } = await axios.axios.post('/Handle_Exposed_User', body);
        console.warn('data<==>', data);
        return data.My_Result;
    }
    async getExposedPropertyUsers({ property_id }) {
        const { data } = await axios.axios.post('/Get_Exposed_Property_Users', { property_id });
        return data.My_Result;
    }
}

exports.UserService = UserService;

//# sourceMappingURL=user.service-f2eb317a.js.map