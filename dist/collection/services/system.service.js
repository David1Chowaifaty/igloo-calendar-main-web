import axios from "axios";
export class SystemService {
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
    async getExposedCurrencies() {
        const { data } = await axios.post('https://gateway.igloorooms.com/IRBE/Get_Exposed_Currencies', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}
//# sourceMappingURL=system.service.js.map
