import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import { hkTasksStore, toggleTaskSelection, selectAllTasks, clearSelectedTasks, getCheckableTasks, isAllTasksSelected, updateSorting, getPaginatedTasks, getMobileTasks, } from "../../../../stores/hk-tasks.store";
export class IrTasksTable {
    constructor() {
        this.tasks = [];
    }
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
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
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
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '11954b54cdfb6316227dc36a1d36270c4a31067e', class: "flex-fill" }, h("section", { key: 'b581f02cfec51729922c130027aae2a1afe25ba6', class: "mobile-tasks-container flex-fill" }, h("div", { key: '9c5e91125e72bc609311aacdc3f25434a2172ddb', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '733abc9d4c5b8dff3f3fa12625a5cd99a0d5ab08' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'f43f81a206dd0996bfbc85d859f36ec9030c5abb', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '6232796f74168b7c6daa2488647306c253ecd963' })), h("div", { key: '1de167ca8012bec4203d41c1a7e69c983f12eb78', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '0119e2fc166aab7ca6d7118ac9f9a5c65fbd31c3' }), h("div", { key: 'ca995d67a757de9de07f318f2235a0ffd9c83917', class: 'table-responsive mb-auto' }, h("table", { key: '7d5a0e1f002c2325deab844f48d073d5373bc405', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3e230d2ee2e3ab9c41a8e9d1fc612957447a29d7', class: "table-header" }, h("tr", { key: '09c6825719160713e192c8c7754656dc88cb51d4' }, h("th", { key: 'f6e7e21fc1732d1ec3ed775dc0a84ab602e08075', class: 'task-row' }, h("ir-checkbox", { key: '5e467aee83a39062225fd31772c82d5446661f0f', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '51140d8d3faaa14d59db387b717e80e545025d78', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'cc958113d61a3ff39696e8bbb2c20e87e228b5c6', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'b72a6ef91fffdc8a8c5258d10e1445fc1f0f39c3', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'db3cb0227417a958c9f9425750e3a1f9bf2bda74', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd0650267bb93e2e2fa3d3f0fb424c11628a22564' }, locales.entries.Lcz_Status), h("svg", { key: 'f5a5e645e5d23039c2ac8ca3dbdf5b23ec160a15', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd7ca80b1fd4e16c322bd814c234e1fd22d143a1d', d: "m21 16-4 4-4-4" }), h("path", { key: '21bb0e3f20c8ddf938cc92302208172e8ef675ba', d: "M17 20V4" }), h("path", { key: '77d3a28d87f1bde246e3fa69d1f33bffd5e68ee2', d: "m3 8 4-4 4 4" }), h("path", { key: 'cb6a692e087face0d69969a75874d1347aa98d98', d: "M7 4v16" })))), h("th", { key: '3ece47285ec825ebefe9ba80a0701d332198c11c', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '5733e965b4ceca404725ce48680d3d2bbbefb5a4', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'cb23786618e6b8f726275276afa83e9993d2c95f', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'd41b36fca3aeedb5fc40e7d90e23dedb155c5c9a', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '8c5a6ff028c70ba8b1dbbb6990b9e7ad0287d19b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '214ba02a47f190d7dd249ab19562433a32a0eca4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'fc49575167efd9991ad11829d415c4744614f8e6' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '256f3cfbdbceedb74063eae946823d44f9757ee5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd8da045ff57d07e3c15c72c2d2c56a475841db3a', d: "m21 16-4 4-4-4" }), h("path", { key: '1993783b2d2fc851257e97afa0672456d1240e8f', d: "M17 20V4" }), h("path", { key: '93f6fe78b7bf74ec1f2f0fbfbf27f4f593c0827a', d: "m3 8 4-4 4 4" }), h("path", { key: '07af0a5b5715ceb69e989f607144c1676ec9e446', d: "M7 4v16" }))))), h("th", { key: 'd674243af4c656f9f2426b5817e2950ef70e5578' }))), h("tbody", { key: '16ca7d11c4496123fb96a77683a430a5e7d10aec' }, tasks.length === 0 && (h("tr", { key: 'f22cd1ae1bfec2f8be22a0a69d8b3078cf499f02', class: "ir-table-row" }, h("td", { key: '7bb79cc2e8c6cce70496548d2df6976c76ba19a3', colSpan: 9, class: "text-left" }, h("div", { key: '1a754895b645276ce972b7ac9d73dbc699fd6225', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'd6447252d86e03fbb2332f61ba09b9bec86bfc56' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                        this.skipSelectedTask.emit(task);
                    } })))));
            })))), h("div", { key: 'fee8d3079d2a3ed814a5e9f8fa192f752ca73388', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '39f60b69042ef42691f5be732e5aca9a2458a0ba' })))));
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
