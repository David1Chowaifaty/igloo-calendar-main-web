import { IPendingActions, Task } from "../../../models/housekeeping";
export declare class IrHkTasks {
    el: HTMLElement;
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isLoading: boolean;
    selectedDuration: string;
    selectedHouseKeeper: string;
    selectedRoom: IPendingActions | null;
    archiveOpened: boolean;
    property_id: number;
    tasks: Task[];
    selectedTasks: Task[];
    private roomService;
    private houseKeepingService;
    private token;
    modal: HTMLIrModalElement;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    private init;
    private handleHeaderButtonPress;
    private handleModalConfirmation;
    render(): any;
}
