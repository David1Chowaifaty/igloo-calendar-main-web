'use strict';

const utils = require('./utils-0395cd83.js');
const axios = require('./axios-6e678d52.js');

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
        const { base_user_type_code, property_id } = params, rest = __rest(params, ["base_user_type_code", "property_id"]);
        let body = Object.assign({}, rest);
        if ([1, 4].includes(Number(base_user_type_code))) {
            body = Object.assign(Object.assign({}, body), { property_id });
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

//# sourceMappingURL=user.service-41332ac6.js.map