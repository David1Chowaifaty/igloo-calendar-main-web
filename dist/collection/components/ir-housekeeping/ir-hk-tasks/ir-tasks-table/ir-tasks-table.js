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
        return (h(Host, { key: 'b38d1bda2991f9adba303e1d3a6a931673184961', class: "flex-fill" }, h("section", { key: '208e74f3e9f2b197efff8cf43e2425bf390945ea', class: "mobile-tasks-container flex-fill" }, h("div", { key: '99aaafb886eb85f7272b0ea1264f07f79b234a74', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'f37e013045e641d8b17e174e4696b85eeee58231' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '7e93947025e282dd92a6aade7c19a635b8c79d9c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'eebe3406f334ca4fca38e7f4bdeeb10917e5aabb' })), h("div", { key: 'ed254964eca647765665aaf9dcb7078f142d2294', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '96bbbb2497fef84c87f34c0f48211cb45d3fefcd' }), h("div", { key: 'a2250744a41b9eedf2c18ff5a78a6f3423335aa9', class: 'table-responsive mb-auto' }, h("table", { key: '10f2f444bbc80b3d042bd3da7079f728534883a1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '09b910aaf87781ac80e7bcab02e5fff43ff83b23', class: "table-header" }, h("tr", { key: '8399fb1e170d2df20ef2d3dbc2b56011ecc33d79' }, h("th", { key: '2f57c65b823d38d8d61e5365344ff8a0ce55d2ba', class: 'task-row' }, h("ir-checkbox", { key: 'ad52d8c22faa81c55aa3268f68595289b4eb1f21', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'dd211d866f41c3c69f43b1922c96e4e98e0b92df', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '72bb6616b6b9a0d10bc4a74d0e8b60fa0bf41820', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '4da6dc75983415c6d00209e3aa1d71d8bd223341', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'b4c49754a6c1fa77b997f017c34ac95f8c7b4867', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b88d69a22c283c6c72dcf42c09832f6f4617063e' }, locales.entries.Lcz_Status), h("svg", { key: 'c83fdc94d9e872840d0be0f8b4e0901e4c3d7379', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '74b336fd16d4cd8550a2b12dc311d28272d6092b', d: "m21 16-4 4-4-4" }), h("path", { key: 'c2ff4a90e216be3027e263ec97ce4c139fb6a9bd', d: "M17 20V4" }), h("path", { key: '14014236cbd6b3a9d8e5eff595872e958787d709', d: "m3 8 4-4 4 4" }), h("path", { key: '05e0cd5e0652200e93995789900e342811adbe3b', d: "M7 4v16" })))), h("th", { key: '7390929580e95593bbb5a9cc48bc5b01e9c04e3d', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'c8fc3c6b01a76dcea59a2875e0a7ee0cdcc5f210', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'bca0c8c07b624ffe0535a7947e8dfb02ba27fc9a', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'ff82dc032740841d8a65c05e2e1ce65f2ebea833', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'fa0f92c30a2bf206e8d9e68abec35aa7cf23ff56', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '5b6a7d58a4a5579af6c3cba1df2e6770ac557391', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '29c38acce663f6ff1fb8428d08ff7a1568e71d4d' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '5838fc49f0fb223b5478d4e90ac9d5017469c0cd', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'fa3186fd5bbaba552c241b9456fd72e9a807782b', d: "m21 16-4 4-4-4" }), h("path", { key: '9f47cc2c1a01013fcfdc2bd2ca5787c66bb3260d', d: "M17 20V4" }), h("path", { key: '8e2a6a2d79fb560c926f2e88e64030244cd0d081', d: "m3 8 4-4 4 4" }), h("path", { key: '1c10ff45c0cddce11267786fca194b731441c201', d: "M7 4v16" }))))), h("th", { key: '260db661132b71e9f88eefcd2e54dbfd10053cb1' }))), h("tbody", { key: '3dbff487a8f48d56fc3a02162c9870a183158687' }, tasks.length === 0 && (h("tr", { key: '45d83d583927db19c605ff5f6da87681c73b9dd9', class: "ir-table-row" }, h("td", { key: '85d54ccc0f36844349cd9d90f7424aeb05207ba5', colSpan: 9, class: "text-left" }, h("div", { key: 'a94df2013adf9c253d64b76cccde8c764fcb5f42', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '6b4500b0fbb793b00263b8df260dee035a5bfcfe' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'ac9b10d098c14dfcc1523712a9a271cbd92d5fa1', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '0a4f71a7e2b57680f80dd0329a8c2599fddde882' })))));
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
