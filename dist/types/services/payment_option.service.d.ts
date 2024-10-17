import Token from "../models/Token";
import { PaymentOption } from "../models/payment-options";
export declare class PaymentOptionService extends Token {
    GetExposedPaymentMethods(): Promise<any>;
    GetPropertyPaymentMethods(property_id: string): Promise<any>;
    GetExposedLanguages(): Promise<any>;
    HandlePaymentMethod(paymentOption: PaymentOption): Promise<any>;
}
