import { TGuest } from "../../models/user_form";
export declare class IrUserProfile {
    user_data: TGuest;
    user: TGuest;
    componentWillLoad(): void;
    updateUserData(key: keyof TGuest, value: unknown): void;
    handleSubmit(e: Event): void;
    render(): any;
}
