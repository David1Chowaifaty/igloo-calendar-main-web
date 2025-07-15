'use strict';

const axios = require('./axios-6e678d52.js');

const CONSTANTS = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/,
};

class SystemService {
    async validateOTP(params) {
        const { data } = await axios.axios.post('/Validate_Exposed_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async resendOTP(params) {
        const { data } = await axios.axios.post('/Resend_Exposed_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async checkOTPNecessity(params) {
        const { data } = await axios.axios.post('/Check_OTP_Necessity', params);
        return data;
    }
}

exports.CONSTANTS = CONSTANTS;
exports.SystemService = SystemService;

//# sourceMappingURL=system.service-582208c2.js.map