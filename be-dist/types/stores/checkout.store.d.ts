import { TPickupFormData } from "../models/pickup";
import { TUserFormData } from "../models/user_form";
export interface ICardProcessing {
    code: string;
    cardNumber: string;
    cardHolderName: string;
    expiry_month: string;
    expiry_year: string;
}
export interface ICardProcessingWithoutCVC extends ICardProcessing {
    code: '004';
}
export interface ICardProcessingWithCVC extends ICardProcessing {
    code: '001';
    cvc: string;
}
export type TPayment = ICardProcessingWithoutCVC | ICardProcessingWithCVC;
interface CheckoutStore {
    userFormData: TUserFormData;
    pickup: TPickupFormData;
    modifiedGuestName: boolean;
    payment: TPayment | null;
    agreed_to_services: boolean;
}
export declare const checkout_store: CheckoutStore, onCheckoutDataChange: import("@stencil/store/dist/types").OnChangeHandler<CheckoutStore>;
export declare function updateUserFormData(key: keyof TUserFormData, value: any): void;
export declare function updatePickupFormData(key: keyof TPickupFormData, value: any): void;
export declare function updatePartialPickupFormData(params: Partial<TPickupFormData>): void;
export {};
