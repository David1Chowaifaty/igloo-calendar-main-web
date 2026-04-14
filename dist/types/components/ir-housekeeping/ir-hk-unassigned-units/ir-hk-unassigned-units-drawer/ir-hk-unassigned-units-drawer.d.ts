import { IHouseKeepers } from "../../../../models/housekeeping";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrHkUnassignedUnitsDrawer {
    open: boolean;
    user: IHouseKeepers | null;
    closeSideBar: EventEmitter<null>;
    private readonly formId;
    render(): any;
}
