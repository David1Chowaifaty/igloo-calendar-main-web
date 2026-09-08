import { SetupEntries } from "../../../models/IBooking";
export declare class IrHkOperationsCard {
    frequencies: SetupEntries[];
    hkTasks: Array<{
        name: string;
        frequency: string;
    }>;
    selectedCleaningFrequency: string;
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
