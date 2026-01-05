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
        return (h(Host, { key: '45d5aa21dd53b0cc65f656c0a7e8e04160e2bc25', class: "flex-fill" }, h("section", { key: '421896d3c3501ec84a79b6c3045cdc6f80b38e58', class: "mobile-tasks-container flex-fill" }, h("div", { key: '4facaee11c3302e5579744ddcc2f0d18c08230da', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '5ab297e453ac3b1261cbaa0a0eeca920db71f56c' })), mobileTasks?.length === 0 && h("p", { key: '23b9a6166e3efddea71df224b8cd23a3ac65d9e4', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'c0db0ea585f9f069036b3a370031a6fa4f9a1338' })), h("div", { key: '9c8938a28c63c408f07a7b21f1318f2025142cee', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'a30813c0ab81c52280747caeb47b06a3f25b72c5' }), h("div", { key: '22c845407dfa09765cadde604f7aa56b2a878e60', class: 'table-responsive mb-auto' }, h("table", { key: '8aa0406f5105d192cd6ad287496582eb797ad3ad', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f3685e83a23017c2ca0ab095d0dadeb216fa0e20', class: "table-header" }, h("tr", { key: 'c7e08fe8d5022d21bc89d85e128a48f35d5a0750' }, h("th", { key: '75ac16bcf5d040956702f09e52bda9359ba1d532', class: 'task-row' }, h("ir-checkbox", { key: 'bf87c42a01fdf862c955b551a85c16ca1b071266', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'ffe88a009dc1069411faf4da96d83d109e909d4d', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '08ad6e27d8cd4a5801e775c4d6d5fbf3be46c2ae', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'b5b05045a5ee6efa8b88ce2a85a29bd045dd5dcc', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'fede4109d2075870f89bd6157a2f92edcdc5de8d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '322f95e624ceee4e2f5ca3826cf8378a5d260cf8' }, locales.entries.Lcz_Status), h("svg", { key: '62b8d588a3ba247da03c0b241f141d963851b0bb', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '119d908dd3b548bdec6e14a0c2811661c41e2707', d: "m21 16-4 4-4-4" }), h("path", { key: '75c7f070d5d9030551698b2bbe2b6c6e9afa25ce', d: "M17 20V4" }), h("path", { key: '89235b4b602258e39d33be11d0c614c74f486ce4', d: "m3 8 4-4 4 4" }), h("path", { key: '11e301a9a4189111b50785100633352c538d925d', d: "M7 4v16" })))), h("th", { key: '0822c77084d02202e8919eba006b024dee357b2d', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'd9a0482238d7dddc89711b2770da18e5c0efbe45', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'e8bd7975bef0943b8355a3aaebbc40e66f5f4ac9', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'dd72ba1a3f84acfda9909ce1199ca65f26e1ec75', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '77ca2efa3b5b0d862bf4d28d5c48245583feb0cf', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'a4b769ff614e3e98719c32914a40786f56fcc81e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7d24b17848d7c55c67dc9c3349e02f6f1d23cd59' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'd5969093d852ed0839fe3e075abc5d3cedf8b596', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '69284a8edc96b66124f9842c043c4358ff0aae50', d: "m21 16-4 4-4-4" }), h("path", { key: 'd60ccb4d46ba8f813111e6593d1a06a5c789e702', d: "M17 20V4" }), h("path", { key: '8651e178706179aa8913291854b16febca301f9d', d: "m3 8 4-4 4 4" }), h("path", { key: '07f46f311ee849b4cfe4aa907801c2675d2a81d8', d: "M7 4v16" }))))), h("th", { key: 'e3df5e0d1a1e9acc102390f905d807f658017fb2' }))), h("tbody", { key: '4e58bbc75d84195e79d49c2ea0eee1d6f45eacd1' }, tasks.length === 0 && (h("tr", { key: 'ab21f460a61a970ae6e6d0a4e84f7f05ca48fad2', class: "ir-table-row" }, h("td", { key: '88c2e55be3b21045425720b52e923e4ab5f90407', colSpan: 9, class: "text-left" }, h("div", { key: 'aa767a22042d8af008e5548e190175216020a606', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '4d62adf7be41731091226c251e726f066ea492ca' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'b9ac96e3724a2865b2e7ea346cfaae02dadfec18', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '4266e16e62001bca36651b346c7a9c22be96bd2c' })))));
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
