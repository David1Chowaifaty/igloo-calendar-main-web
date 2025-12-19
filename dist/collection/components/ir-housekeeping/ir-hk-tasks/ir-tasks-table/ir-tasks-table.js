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
        return (h(Host, { key: '461e735a3135a12ef2694cd851dec16d96d0334c', class: "flex-fill" }, h("section", { key: '43fa5a92cb90d7809389449b69ed8919aae12dfd', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'c7b794fe315af2a0ab3196c5541923fb8373a2ed', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '50f2d971a096e77e2911217c8153490e65096329' })), mobileTasks?.length === 0 && h("p", { key: '5fef91f87c6afc4c167079cf6c47eb74ccc4228a', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '8461a077ef02a283ad3b351be0a88bd20c992105' })), h("div", { key: 'eb355981a90009e36c7d0f46cd9bfd43730389aa', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '2e622ed97d7c5a53f20e3c3ccfd653efbb5234aa' }), h("div", { key: '877a16fa3881079f533aa8380e962b50326ca0fd', class: 'table-responsive mb-auto' }, h("table", { key: '75d6f4031916b3b0916c481fe520b87e609879e6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f41f089d86b2f460f01d6f481d9ea80bd2d58462', class: "table-header" }, h("tr", { key: '6dae5c2b6c1209806fc181135ffe32c5a2d89fab' }, h("th", { key: '9a98a62214afc50832a252322b1522654fa3ae19', class: 'task-row' }, h("ir-checkbox", { key: '852e6b1d3dd7a2f47dab1a40481a7b9676d8629e', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'a5ac9ccc187dffa322b9661b61222b0d1393463c', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '19e477c73a3dced4bd37d573f044b73d517ad605', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'ef876df4ec3aefac32b0c485085ed29c80249319', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '47fafc51e2ac4bc5294b2a341b31d6fa4af6fcb7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'ec5eae8d7701c62eab2675144e68373a301ad896' }, locales.entries.Lcz_Status), h("svg", { key: '48075eba8a89bd33f1d7d789d9811a8b417ee15c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'c016dd88454fbb1aebb9c6c31366f29a3809f638', d: "m21 16-4 4-4-4" }), h("path", { key: '545d84e43d63a1945c79a4bea621196de83b7963', d: "M17 20V4" }), h("path", { key: 'e0be219f87d6e26730ab525b92e42e4d98376eba', d: "m3 8 4-4 4 4" }), h("path", { key: 'd33f08658ba5a2335b2a590ced7f44d71740b79e', d: "M7 4v16" })))), h("th", { key: 'c08ee78b113d403f8dc594d8b2b2799965d68cb9', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '2f31ff6524a2b9d3b2806d3feaeb08594e337cbd', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'a73c5af36791b5983418249c97da88a211127b91', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'c74148b6726c848145418074ef4d61b374e3402a', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7962e21f29edee9ec70347c5c41266921d27945a', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '387b82bb4a41abce2985b78d962bcf55ce3eb2ac', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '42a3847b51e19c22da12b2840df5c7a5e0bf5dbc' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'a4d867551cc778b7b7e4e8ff56a4778da552ddc5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'f56d11c56094458a5608e96757e2bbcd700a696c', d: "m21 16-4 4-4-4" }), h("path", { key: '000d67cdc2e42678196a3ad253fbbd362c9ad931', d: "M17 20V4" }), h("path", { key: '7e0963c63a37f294d2fb743f9240190dd67c3436', d: "m3 8 4-4 4 4" }), h("path", { key: 'b5292e8077d201cf310920cfaadc09774026da98', d: "M7 4v16" }))))), h("th", { key: 'ea92be8b592b7324971ddfd9a3e73d26d49a97a6' }))), h("tbody", { key: '3eeddf4d96142d5d50e375c2fa49f1c35c0e0517' }, tasks.length === 0 && (h("tr", { key: '996987a0728f7827c9321f03abea4bb6fb55a584', class: "ir-table-row" }, h("td", { key: '76cca64456c383ff3b4e662766e99d40c5f7a141', colSpan: 9, class: "text-left" }, h("div", { key: '019441d5d678497ad71e0fa68e1d8f8e77586e4a', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '0ca24e6ea0d1286c7ee1dc3989f4f38e5a640660' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '4c1a7d3675d5c7ffa50f3f5ad5debe6f01b45608', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '0c6beafc9fa2fb8c7a9fe2e0f68285be5e1e2beb' })))));
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
