import axios from "axios";
export class SystemService {
    async validateOTP(params) {
        const { data } = await axios.post('/Validate_OTP', params);
        return data;
    }
}
//# sourceMappingURL=system.service.js.map
