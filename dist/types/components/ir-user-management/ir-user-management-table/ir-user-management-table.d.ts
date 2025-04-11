import { EventEmitter } from '../../../stencil-public-runtime';
import { User } from '../types';
import { IToast } from "../../ui/ir-toast/toast";
export declare class IrUserManagementTable {
    users: User[];
    isSuperAdmin: boolean;
    currentTrigger: any;
    user: User;
    toast: EventEmitter<IToast>;
    private modalRef;
    private handleUserActiveChange;
    render(): any;
    private removeUser;
    private renderCurrentTrigger;
}
