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
    animateCleanedButton: EventEmitter<null>;
    rowSelectChange: EventEmitter<Task[]>;
    componentWillLoad(): void;
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    private handleSort;
    /**
     * Helper to sort tasks array in state.
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
    render(): any;
}
