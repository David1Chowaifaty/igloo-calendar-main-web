import { EventEmitter } from '../../../../stencil-public-runtime';
import { Task } from "../../../../models/housekeeping";
import { IToast } from "../../../ui/ir-toast/toast";
export declare class IrTasksTable {
    el: HTMLIrTasksTableElement;
    tasks: Task[];
    pendingChange: {
        task: Task;
        hkmId: number;
    } | null;
    selectRevertKey: number;
    animateCleanedButton: EventEmitter<null>;
    rowSelectChange: EventEmitter<Task[]>;
    sortingChanged: EventEmitter<{
        field: string;
        direction: 'ASC' | 'DESC';
    }>;
    skipSelectedTask: EventEmitter<Task>;
    toast: EventEmitter<IToast>;
    private houseKeepingService;
    private dialog;
    componentWillLoad(): void;
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    private handleSort;
    handleClearSelectedHkTasks(e: CustomEvent): void;
    handleTasksChange(newTasks: Task[]): void;
    /**
     * Helper to toggle selection for a single row.
     */
    private toggleSelection;
    private emitSelectedTasks;
    /**
     * Checks if every row is selected.
     */
    private get allSelected();
    /**
     * Toggles selection on all visible tasks at once.
     */
    private toggleSelectAll;
    /**
     * Determines if a task is checkable.
     */
    private isCheckable;
    /**
     * Determines if a task is skippable.
     */
    private isSkippable;
    private taskBadges;
    private getHousekeeperName;
    private confirmOwnershipChange;
    render(): any;
}
