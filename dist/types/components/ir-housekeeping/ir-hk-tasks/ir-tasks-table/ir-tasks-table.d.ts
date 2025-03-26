import { EventEmitter } from '../../../../stencil-public-runtime';
import { Task } from "../../../../models/housekeeping";
export declare class IrTasksTable {
    tasks: Task[];
    /**
     * Tracks which task IDs are currently selected via checkboxes.
     */
    selectedIds: Task['id'][];
    /**
     * Controls whether the "Confirm Clean" modal is shown.
     */
    showConfirmModal: boolean;
    /**
     * The key we are sorting by (e.g., "date", "unit", "status", "housekeeper").
     */
    sortKey: string;
    /**
     * The sort direction: ASC or DESC.
     */
    sortDirection: 'ASC' | 'DESC';
    checkableTasks: Task[];
    animateCleanedButton: EventEmitter<null>;
    rowSelectChange: EventEmitter<Task[]>;
    sortingChanged: EventEmitter<{
        field: string;
        direction: 'ASC' | 'DESC';
    }>;
    componentWillLoad(): void;
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    private handleSort;
    handleClearSelectedHkTasks(e: CustomEvent): void;
    handleTasksChange(newTasks: Task[]): void;
    /**
     * Helper to sort tasks array in state.
     */
    /**
     * Sorts the tasks by the given key in ASC or DESC order.
     * If values for `key` are duplicates, it sorts by `date` ascending.
     * If `date` is also the same, it finally sorts by `unit.name` ascending.
     */
    private sortTasks;
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
     * Assigns checkable tasks based on predefined criteria.
     *
     * This method filters tasks and determines which ones are eligible
     * to be selected using checkboxes. A task is considered "checkable"
     * if its date is today or earlier.
     *
     * The filtered tasks are stored in `this.checkableTasks`, ensuring
     * only relevant tasks can be interacted with by users.
     */
    private assignCheckableTasks;
    /**
     * Determines if a task is checkable.
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {string} date - The task's date in 'YYYY-MM-DD' format.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    private isCheckable;
    render(): any;
}
