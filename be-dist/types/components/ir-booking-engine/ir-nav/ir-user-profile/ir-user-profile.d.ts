import { TGuest } from "../../../../models/user_form";
export declare class IrUserProfile {
    user_data: TGuest;
    user: TGuest;
    private propertyService;
    componentWillLoad(): void;
    updateUserData(key: keyof TGuest, value: unknown): void;
    handleSubmit(e: Event): Promise<void>;
    render(): any;
}
