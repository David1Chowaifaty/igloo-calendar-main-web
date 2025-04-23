import { EventEmitter } from '../../../stencil-public-runtime';
import { IToast } from "../../ui/ir-toast/toast";
import { User } from "../../../models/Users";
export declare class IrUserManagementTable {
    users: User[];
    isSuperAdmin: boolean;
    userTypes: Map<string | number, string>;
    userTypeCode: string | number;
    haveAdminPrivileges: boolean;
    currentTrigger: any;
    user: User;
    canDelete: boolean;
    canEdit: boolean;
    canCreate: boolean;
    toast: EventEmitter<IToast>;
    resetData: EventEmitter<null>;
    private modalRef;
    private userService;
    componentWillLoad(): void;
    handleChange(n: boolean, o: boolean): void;
    private assignPermissions;
    private handleUserActiveChange;
    private removeUser;
    private renderCurrentTrigger;
    render(): any;
}
