'use strict';

const debounce = require('./debounce-1b63fe86.js');
const utils = require('./utils-2cdf6642.js');
const axios = require('./axios-6e678d52.js');

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
__decorate([
    debounce.Debounce(300)
], UserService.prototype, "checkUserExistence", null);

exports.UserService = UserService;

//# sourceMappingURL=user.service-c84dd18b.js.map