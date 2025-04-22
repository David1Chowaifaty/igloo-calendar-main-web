import { EventEmitter } from '../../../stencil-public-runtime';
import { User } from "../../../models/Users";
export declare class IrUserFormPanel {
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
    isSuperAdmin: boolean;
    isLoading: boolean;
    autoValidate: boolean;
    userInfo: User;
    errors: {
        [P in keyof User]?: any;
    } | null;
    showPasswordValidation: boolean;
    isUsernameTaken: boolean;
    isOpen: boolean;
    resetData: EventEmitter<null>;
    closeSideBar: EventEmitter<null>;
    private housekeepingService;
    private userService;
    private bookingService;
    private disableFields;
    private mobileMask;
    private userSchema;
    componentWillLoad(): Promise<void>;
    private updateUserField;
    private createOrUpdateUser;
    private handleBlur;
    render(): any;
}
