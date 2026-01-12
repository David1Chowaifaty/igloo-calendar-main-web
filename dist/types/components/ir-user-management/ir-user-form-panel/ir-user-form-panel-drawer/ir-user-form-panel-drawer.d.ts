import { User } from "../../../../models/Users";
import { EventEmitter } from '../../../../stencil-public-runtime';
import { AllowedUser } from '../../types';
export declare class IrUserFormPanelDrawer {
    open: boolean;
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
    closeSideBar: EventEmitter<void>;
    render(): any;
}
