import { TGuest } from "../../../../models/user_form";
export declare class IrUserProfile {
    user_data: TGuest;
    be: boolean;
    user: TGuest;
    isLoading: boolean;
    isPageLoading: boolean;
    private propertyService;
    private commonService;
    componentWillLoad(): Promise<void>;
    fetchData(): Promise<void>;
    updateUserData(key: keyof TGuest, value: unknown): void;
    handleSubmit(e: Event): Promise<void>;
    render(): any;
}
