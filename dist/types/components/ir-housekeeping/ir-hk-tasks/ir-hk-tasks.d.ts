import { IPendingActions } from "../../../models/housekeeping";
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
    private modalOpenTimeOut;
    private roomService;
    private houseKeepingService;
    componentWillLoad(): void;
    handleResetData(e: CustomEvent): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): Promise<void>;
    handleCheckChange(e: CustomEvent, action: IPendingActions): void;
    handleCloseSidebar(e: CustomEvent): void;
    disconnectedCallback(): void;
    getPendingActions(): Promise<void>;
    initializeApp(): Promise<void>;
    handleConfirm(e: CustomEvent): Promise<void>;
    render(): any;
}
