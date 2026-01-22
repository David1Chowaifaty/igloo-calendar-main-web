import { IrToast } from "../../../ui/ir-toast/ir-toast";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglBulkOperationsDrawer {
    open: boolean;
    maxDatesLength: number;
    property_id: number;
    closeDrawer: EventEmitter<null>;
    toast: EventEmitter<IrToast>;
    selectedTab: string;
    isLoading: boolean;
    private formId;
    private tabs;
    handleLoadingChange(e: CustomEvent<boolean>): void;
    private handleDrawerClose;
    render(): any;
}
