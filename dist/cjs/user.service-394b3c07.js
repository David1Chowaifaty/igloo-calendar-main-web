'use strict';

const axios = require('./axios-6e678d52.js');

class UserService {
    async checkUserExistence(params) {
        const { data } = await axios.axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
}

exports.UserService = UserService;

//# sourceMappingURL=user.service-394b3c07.js.map