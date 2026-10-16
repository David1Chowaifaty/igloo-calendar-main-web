import { ILanguages, PaymentOption } from "../models/payment-options";
export interface IPaymentOptionStore {
    selectedOption: PaymentOption | null;
    token: string;
    languages: ILanguages[];
    mode: 'edit' | 'create';
}
export declare const payment_option_store: IPaymentOptionStore;
export default payment_option_store;
