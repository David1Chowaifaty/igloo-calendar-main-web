import { EventEmitter } from '../../../stencil-public-runtime';
import { IToast } from "../../ui/ir-toast/toast";
import { User } from "../../../models/Users";
export declare class IrUserManagementTable {
    users: User[];
    isSuperAdmin: boolean;
    userTypes: Map<string | number, string>;
    currentTrigger: any;
    user: User;
    toast: EventEmitter<IToast>;
    private modalRef;
    private userService;
    private handleUserActiveChange;
    render(): any;
    private removeUser;
    private renderCurrentTrigger;
}
