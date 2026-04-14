import { THKUser } from "../../../../models/housekeeping";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrHkUserDrawer {
    isLoading: boolean;
    open: boolean;
    isEdit: boolean;
    user: THKUser | null;
    closeSideBar: EventEmitter<null>;
    private readonly formId;
    render(): any;
}
