import { THKUser } from "../../../models/housekeeping";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrHkUser {
    user: THKUser | null;
    isEdit: boolean;
    isLoading: boolean;
    autoValidate: boolean;
    userInfo: THKUser;
    errors: {
        [P in keyof THKUser]?: any;
    } | null;
    showPasswordValidation: boolean;
    isUsernameTaken: boolean;
    resetData: EventEmitter<null>;
    closeSideBar: EventEmitter<null>;
    private housekeepingService;
    private default_properties;
    private housekeeperSchema;
    componentWillLoad(): Promise<void>;
    private updateUserField;
    private addUser;
    private handleBlur;
    render(): any;
}
