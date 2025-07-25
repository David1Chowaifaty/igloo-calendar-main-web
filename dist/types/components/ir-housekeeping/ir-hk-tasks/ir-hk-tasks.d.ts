import { IPendingActions, Task } from "../../../models/housekeeping";
import { EventEmitter } from '../../../stencil-public-runtime';
import { TaskFilters } from './types';
export declare class IrHkTasks {
    el: HTMLElement;
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    baseUrl: string;
    isLoading: boolean;
    selectedDuration: string;
    selectedHouseKeeper: string;
    selectedRoom: IPendingActions | null;
    archiveOpened: boolean;
    property_id: number;
    isSidebarOpen: boolean;
    isApplyFiltersLoading: boolean;
    filters: TaskFilters;
    selectedTask: Task;
    clearSelectedHkTasks: EventEmitter<void>;
    private hkNameCache;
    private roomService;
    private houseKeepingService;
    private token;
    private table_sorting;
    private modal;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleCloseSidebar(e: CustomEvent): void;
    handleSortingChanged(e: CustomEvent): void;
    private init;
    private buildHousekeeperNameCache;
    private updateTasks;
    handleHeaderButtonPress(e: CustomEvent): Promise<void>;
    handleSelectedTaskCleaningEvent(e: CustomEvent<Task>): void;
    private handleModalConfirmation;
    private applyFilters;
    private fetchTasksWithFilters;
    render(): any;
}
