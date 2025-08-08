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
        return (h(Host, { key: '8ad82c2356d5ee10ee9552c49e8f73d7f29fb9d1', class: "flex-fill" }, h("section", { key: '82bf207804d80ddf90b5437b2937f1034a571c90', class: "mobile-tasks-container flex-fill" }, h("div", { key: '554f92dce9f5bfec0c9a0e06b6c62ed525af4ef2', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '2f46a3012ccd82a4bda2ab858876a97821d12dde' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'b86a7c50dd45fac86ede895b30a45623b69c6c3a', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'd384832edc3a1bf8c1d8d999fe9da7a07e7f5330' })), h("div", { key: 'bf8862a5765095ba0df77e213761c9b90685161e', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '8576f7a9a20bb2af9ceda4690f3d6ee7ad35d6e6' }), h("div", { key: '903dee0464392158716865901b4fe8e398f4231a', class: 'table-responsive mb-auto' }, h("table", { key: '266d7656486f4fac51a66b43998521b9b45b94a9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'cf25f31ca672ebd59ebe8f5e2e1a359fa848b610', class: "table-header" }, h("tr", { key: 'b405aafac536de4ab23efab25fd48d406503e755' }, h("th", { key: '79173d4e9fa10a9a1eb3f8678838eb1dd4454b38', class: 'task-row' }, h("ir-checkbox", { key: '0cb0d2bd1d6cd396ba2b729a753728d225f04728', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '2b3e597830fec4544b8b3c649b4259a04b620186', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '4fe0fb2d7e7c7a01208398391f6b889768e43de2', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '40a3ade6aee16c49113d6fc5ee2b25799c35f1a5', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'f744576aab9f4537411b46e9fd3ca7eab388fe23', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'c3656ea4a63de8206c10115361cde2e16ca8cf26' }, locales.entries.Lcz_Status), h("svg", { key: '64351f43d510db1f4b02060cd97592383c93d7c1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'ad833fe748a8d9b8668c56aebba980e0dfb89849', d: "m21 16-4 4-4-4" }), h("path", { key: '0ab2c3207ca199be7935f5a9a84536da9860510f', d: "M17 20V4" }), h("path", { key: 'a7cc6cfabc03f70de0465a14b1519ee8ad1dc73d', d: "m3 8 4-4 4 4" }), h("path", { key: '2f18f3e84415336527002e6d30104452dac087b2', d: "M7 4v16" })))), h("th", { key: '17659965b327535f3f91d72bfc7fd6fafa1fc6f0', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'b77f9d9ec3eafda0929c4e1359ec001681d27969', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'adeb48cae27edce8ec20a702f537f1e62944f73e', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'c40e7f0af35baab4be96cbe595d1f0ffcae38db9', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'ce528793f33aa401b5b2663f96c9a604c1fcfaf0', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '7cbd0b250e0952d0f7d9aa6c63dfe8908a4ee9ac', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f96be32c67567b2b009a86ef822a9fcf4fa846c2' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '995d794ccf8dc164e110104f5fbe633a97cdecc7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'c66e56755cd18355ab32d13c8aaf5253c0287c94', d: "m21 16-4 4-4-4" }), h("path", { key: '10a11813b8f2af1d61b4be98c62040edf26c2b75', d: "M17 20V4" }), h("path", { key: '7571ae7ca6e8b8ed55ba0a62ed16b4370e86b870', d: "m3 8 4-4 4 4" }), h("path", { key: 'be8cb1cb415e220277898c21c11841f2fa1f78f4', d: "M7 4v16" }))))), h("th", { key: '7f90d1dc9320f1996b1880eb5d46004141d57551' }))), h("tbody", { key: '437642c761753f2b6d1582e5e553153e7125efc5' }, tasks.length === 0 && (h("tr", { key: 'ab86df716f33ee808d517b76da219ce19b14021d', class: "ir-table-row" }, h("td", { key: 'f07e04970d269f99c75fa913a5cb386bb7363cf5', colSpan: 9, class: "text-left" }, h("div", { key: 'd711dba6767dab2abcd6b10a16a148b3263334a1', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '021f2671cf3ff3bedffcec3ad16b8f321f86f036' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '5e2128f8e6454c7b8e029f111d91b69b872543f7', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'ab33362edab5fd74a9d05261c07f1a67968b857a' })))));
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
