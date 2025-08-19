import { J as sleep } from './utils-4f97ee3e.js';
import { a as axios } from './axios-aa1335b8.js';

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
        await sleep(400);
    }
    async checkUserExistence(params) {
        const { data } = await axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
    async handleExposedUser(params) {
        const { base_user_type_code, property_id } = params, rest = __rest(params, ["base_user_type_code", "property_id"]);
        let body = Object.assign({}, rest);
        if ([1, 4].includes(Number(base_user_type_code))) {
            body = Object.assign(Object.assign({}, body), { property_id });
        }
        const { data } = await axios.post('/Handle_Exposed_User', body);
        console.warn('data<==>', data);
        return data.My_Result;
    }
    async getExposedPropertyUsers({ property_id }) {
        const { data } = await axios.post('/Get_Exposed_Property_Users', { property_id });
        return data.My_Result;
    }
}

export { UserService as U };

//# sourceMappingURL=user.service-69f1926d.js.map