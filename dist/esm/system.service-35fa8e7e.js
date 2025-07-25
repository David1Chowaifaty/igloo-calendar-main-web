import { a as axios } from './axios-aa1335b8.js';

class SystemService {
    async validateOTP(params) {
        const { data } = await axios.post('/Validate_Exposed_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async resendOTP(params) {
        const { data } = await axios.post('/Resend_Exposed_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async checkOTPNecessity(params) {
        const { data } = await axios.post('/Check_OTP_Necessity', params);
        return data;
    }
}

export { SystemService as S };

//# sourceMappingURL=system.service-35fa8e7e.js.map