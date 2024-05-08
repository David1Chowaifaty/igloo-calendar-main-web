import { TPickupFormData } from "../models/pickup";
import { TUserFormData } from "../models/user_form";
interface CheckoutStore {
    userFormData: TUserFormData;
    pickup: TPickupFormData;
    modifiedGuestName: boolean;
}
export declare const checkout_store: CheckoutStore, onCheckoutDataChange: import("@stencil/store/dist/types").OnChangeHandler<CheckoutStore>;
export declare function updateUserFormData(key: keyof TUserFormData, value: any): void;
export declare function updatePickupFormData(key: keyof TPickupFormData, value: any): void;
export declare function updatePartialPickupFormData(params: Partial<TPickupFormData>): void;
export {};
