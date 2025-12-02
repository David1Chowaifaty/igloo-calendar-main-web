import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import { hkTasksStore, toggleTaskSelection, selectAllTasks, clearSelectedTasks, getCheckableTasks, isAllTasksSelected, updateSorting, getPaginatedTasks, getMobileTasks, } from "../../../../stores/hk-tasks.store";
export class IrTasksTable {
    tasks = [];
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
    componentWillLoad() {
        if (this.tasks && this.tasks.length > 0) {
            updateSorting('date', 'ASC');
        }
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = hkTasksStore.sorting.direction;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (hkTasksStore.sorting.field === key) {
            newDirection = hkTasksStore.sorting.direction === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        updateSorting(key, newDirection);
        this.sortingChanged.emit({ field: key, direction: newDirection });
    }
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        clearSelectedTasks();
    }
    handleTasksChange(newTasks) {
        if (newTasks?.length) {
            clearSelectedTasks();
        }
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(task) {
        toggleTaskSelection(task);
        this.animateCleanedButton.emit(null);
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        this.rowSelectChange.emit(hkTasksStore.selectedTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return isAllTasksSelected();
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            clearSelectedTasks();
        }
        else {
            selectAllTasks(getCheckableTasks());
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    /**
     * Determines if a task is checkable.
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {Task} task - The task to check.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    isCheckable(task) {
        return moment(task.date, 'YYYY-MM-DD').isSameOrBefore(moment(), 'days');
    }
    /**
     * Determines if a task is skippable.
     *
     * A task is considered skippable if its date is today and should be In house.
     *
     * @param {Task} task - The task to skip.
     * @returns {boolean} - Returns `true` if the task's date is today and in house, otherwise `false`.
     */
    isSkippable(task) {
        const isTodayTask = moment().isSame(moment(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    render() {
        const haveManyHousekeepers = housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '340d57e36084caa62064cd066bd2950ed3b42f54', class: "flex-fill" }, h("section", { key: '041bddc4a0c9b910a9b08e9dbcf6ac44f42e855c', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'bad787b5f8ca44d8c6a5da22e86b851cd59dd943', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '9650529da8578004d61fe344234ff94e3f567ecb' })), mobileTasks?.length === 0 && h("p", { key: '6b6a8c8194ad1c1475466893c073ee6de437d2fc', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '90a5d407502a72a69d562c6dfee582e2d1c9b47c' })), h("div", { key: '84427ac197bbd16728db852dfd5aae128db7e228', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '3c47b4a503b2afa3f276aa2f6796ef256a96dfa4' }), h("div", { key: '4afa141e2bd76edcdd666d601173506ff9c52bf9', class: 'table-responsive mb-auto' }, h("table", { key: '3cb44c1974b36b43199bf7864d0998e2c8a6c032', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6c5ac41fe2ed3f026695ea84756db373e001d050', class: "table-header" }, h("tr", { key: '26d6cc40ec177c394d3fb5395810fce53490ca0d' }, h("th", { key: '8e3ec83837329d85e8a647214205a7b7b0b880eb', class: 'task-row' }, h("ir-checkbox", { key: 'a374603f10a0d75b28ee74cf8357c9ff27836811', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '551d2f7e17812f69d305de6241439ddac64af683', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '24ec1d1e468682453116b86f2cee908578c38db1', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '83076d7ff098f888910c68e4793b9ffd149e3da1', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '25dfe528c6276e35b71b2bc785ed1a7381982fc2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b4f6c47892cc2f376c1eada6c5c602aa733f8ac5' }, locales.entries.Lcz_Status), h("svg", { key: 'c817651151764bb4a3328253f581f7e400901404', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b9c779734cc94668cba4ec4a8a5c952e0b6787bd', d: "m21 16-4 4-4-4" }), h("path", { key: 'f5754a945798417c7894614e15ddfee8727f278b', d: "M17 20V4" }), h("path", { key: '0413a9af75bf3ba134f5b73793216eb38ea6df61', d: "m3 8 4-4 4 4" }), h("path", { key: 'cfd016e05d15c269bc2bd417c1f27e38c904562e', d: "M7 4v16" })))), h("th", { key: '4f7a7b86101a467cad3056c87415f2552e18acfe', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6b81bf40e83ba239f4f42b161b6d30298f4eed98', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '50a143eada4d593997495d3c5a34e0446c02515d', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '8fa7683c56aad87fd035e7589fceb231b518f2a9', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'c6abc705f91e3c497150597476a3591e56d06255', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '78f6f1dc95667dd7c2ae8e74caf3de0e8b3726fe', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '1a0f65d47cd97b9d48d7a1ce2dfe7d4b77887bf7' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '15b53f171a06d9d982c0fd17dc162e334c74ccd1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '61f4c5fa6af3ccffe9f266bee032d0aa8593cb40', d: "m21 16-4 4-4-4" }), h("path", { key: '04e78f61a19912d73ffef98c54daa03cd8b71001', d: "M17 20V4" }), h("path", { key: 'a281615f269ea1f44b66cf067cabc0e5ed365780', d: "m3 8 4-4 4 4" }), h("path", { key: '5a584220d152fe92ab8dc1951fcba38dcf5c4b92', d: "M7 4v16" }))))), h("th", { key: '02ce3189c0f8e387ff46c191a2a2e0a85ed2e246' }))), h("tbody", { key: '77f41e46fa68d8bbc9e23fb9626b5a38ccb260a5' }, tasks.length === 0 && (h("tr", { key: 'bff3d9a9f24b1fd22b43b9bd1973018333e30e4a', class: "ir-table-row" }, h("td", { key: 'd899fc848d3ea0edfbfe2d993072b9daa3888b9b', colSpan: 9, class: "text-left" }, h("div", { key: '5b40200afc51b93ba4963c438fb23f8203b30a91', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '7402d1b2410e595e6150ff65253405762185c794' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, task.housekeeper ?? locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } })))));
        })))), h("div", { key: 'c71da534dddfff2a7dc331078ecd5fc4e8d093ae', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'eaac08899f845f7d7e78e609fbcdd58b1ac0fc18' })))));
    }
    static get is() { return "ir-tasks-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-table.css", "../../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-table.css", "../../../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "tasks": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Task[]",
                    "resolved": "Task[]",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "animateCleanedButton",
                "name": "animateCleanedButton",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "rowSelectChange",
                "name": "rowSelectChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Task[]",
                    "resolved": "Task[]",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                }
            }, {
                "method": "sortingChanged",
                "name": "sortingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ field: string; direction: 'ASC' | 'DESC' }",
                    "resolved": "{ field: string; direction: \"ASC\" | \"DESC\"; }",
                    "references": {}
                }
            }, {
                "method": "skipSelectedTask",
                "name": "skipSelectedTask",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "tasks",
                "methodName": "handleTasksChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "clearSelectedHkTasks",
                "method": "handleClearSelectedHkTasks",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-tasks-table.js.map
