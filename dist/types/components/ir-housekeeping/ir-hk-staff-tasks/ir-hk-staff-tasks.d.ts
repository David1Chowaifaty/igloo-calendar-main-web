import { ConnectedHK } from "../../../services/housekeeping.service";
export declare class IrHkStaffTasks {
    ticket: string;
    private tasks;
    private tokenService;
    private houseKeepingService;
    connectedHk: ConnectedHK;
    isLoading: boolean;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private init;
    render(): any;
}
