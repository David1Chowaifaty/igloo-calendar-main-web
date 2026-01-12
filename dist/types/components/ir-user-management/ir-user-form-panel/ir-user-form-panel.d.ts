import { EventEmitter } from '../../../stencil-public-runtime';
import { User } from "../../../models/Users";
import { AllowedUser } from '../types';
export declare class IrUserFormPanel {
    formId: string;
    user: User;
    userTypes: {
        new (entries?: readonly (readonly [string | number, string])[]): Map<string | number, string>;
        new (iterable?: Iterable<readonly [string | number, string]>): Map<string | number, string>;
        readonly prototype: Map<any, any>;
        readonly [Symbol.species]: MapConstructor;
    };
    isEdit: boolean;
    language: string;
    property_id: number;
    haveAdminPrivileges: boolean;
    superAdminId: string;
    userTypeCode: string | number;
    allowedUsersTypes: AllowedUser[];
    baseUserTypeCode: string | number;
    isLoading: boolean;
    autoValidate: boolean;
    showFullHistory: boolean;
    userInfo: User;
    errors: {
        [P in keyof User]?: any;
    } | null;
    showPasswordValidation: boolean;
    isUsernameTaken: boolean;
    isOpen: boolean;
    emailErrorMessage: string;
    resetData: EventEmitter<null>;
    closeSideBar: EventEmitter<null>;
    private userService;
    private disableFields;
    private isPropertyAdmin;
    private token;
    private mobileMask;
    private userSchema;
    componentWillLoad(): Promise<void>;
    private updateUserField;
    private createOrUpdateUser;
    render(): any;
}
