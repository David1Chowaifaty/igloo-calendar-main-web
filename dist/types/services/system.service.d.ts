export declare class SystemService {
    validateOTP(params: {
        METHOD_NAME: string;
        OTP: string;
    }): Promise<any>;
    resendOTP(params: {
        METHOD_NAME: string;
    }): Promise<any>;
    checkOTPNecessity(params: {
        METHOD_NAME: string;
    }): Promise<any>;
}
