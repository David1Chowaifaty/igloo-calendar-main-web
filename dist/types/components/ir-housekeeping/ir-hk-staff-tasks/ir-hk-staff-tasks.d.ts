import { Task } from "../../../models/housekeeping";
import { ConnectedHK } from "../../../services/housekeeping.service";
type TaskDateGroup = {
    date: string;
    formattedDate: string;
    isFuture: boolean;
    tasks: Task[];
};
export declare class IrHkStaffTasks {
    el: HTMLElement;
    ticket: string;
    baseurl: string;
    language: string;
    private tokenService;
    private houseKeepingService;
    private fromDate;
    private toDate;
    private confirmDialog;
    private socket;
    private hkOverrideTimer;
    /** Resolved language: localStorage → language prop → 'en'. @State so render updates on change. */
    activeLanguage: string;
    selectedTask: Task | null;
    connectedHk: ConnectedHK;
    isLoading: boolean;
    isConfirmLoading: boolean;
    tasksByDate: TaskDateGroup[];
    anythingToReportString: any;
    componentWillLoad(): void;
    handleLanguageChange(newLang: string): void;
    private applyLanguage;
    handleTicketChange(newValue: string, oldValue: string): Promise<void>;
    private groupTasks;
    private groupByDate;
    /** Fetches HK data and populates tasksByDate. Does NOT touch isLoading. */
    private loadTasks;
    private connectSocket;
    disconnectedCallback(): void;
    private scheduleTaskRefresh;
    private handleConfirm;
    private refreshTasks;
    render(): any;
}
export {};
