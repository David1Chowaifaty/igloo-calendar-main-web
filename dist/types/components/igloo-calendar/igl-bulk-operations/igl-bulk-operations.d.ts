import { Tab } from "../../ui/ir-tabs/ir-tabs";
import { IrToast } from "../../ui/ir-toast/ir-toast";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglBulkOperations {
    maxDatesLength: number;
    property_id: number;
    closeModal: EventEmitter<null>;
    toast: EventEmitter<IrToast>;
    selectedTab: Tab;
    private tabs;
    private tabsEl;
    private titleEl;
    componentDidLoad(): void;
    render(): any;
}
