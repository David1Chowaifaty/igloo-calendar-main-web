import { EventEmitter } from '../../../stencil-public-runtime';
import { IToast } from "../../ui/ir-toast/toast";
import { IEntries } from "../../../models/IBooking";
export declare class IrHkOperationsCard {
    frequencies: IEntries[];
    hkTasks: Array<{
        name: string;
        frequency: string;
    }>;
    selectedCleaningFrequency: string;
    toast: EventEmitter<IToast>;
    private roomService;
    private propertyService;
    private houseKeepingService;
    private dialog;
    componentWillLoad(): void;
    private saveAutomaticCheckInCheckout;
    private saveCleaningFrequency;
    private saveHkTasks;
    render(): any;
}
