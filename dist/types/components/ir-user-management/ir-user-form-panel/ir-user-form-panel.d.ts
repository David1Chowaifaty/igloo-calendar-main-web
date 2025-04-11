import { EventEmitter } from '../../../stencil-public-runtime';
import { User } from '../types';
export declare class IrUserFormPanel {
    user: User;
    isEdit: boolean;
    language: string;
    property_id: number;
    isSuperAdmin: boolean;
    isLoading: boolean;
    autoValidate: boolean;
    userInfo: User;
    errors: {
        [P in keyof User]?: any;
    } | null;
    showPasswordValidation: boolean;
    isUsernameTaken: boolean;
    resetData: EventEmitter<null>;
    closeSideBar: EventEmitter<null>;
    private housekeepingService;
    private disableFields;
    private mobileMask;
    private userSchema;
    componentWillLoad(): Promise<void>;
    private updateUserField;
    private addUser;
    private handleBlur;
    render(): any;
}
