import { EventEmitter } from '../../../../stencil-public-runtime';
import { Task } from "../../../../models/housekeeping";
export declare class IrTasksTable {
    tasks: Task[];
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
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {Task} task - The task to check.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    private isCheckable;
    render(): any;
}
