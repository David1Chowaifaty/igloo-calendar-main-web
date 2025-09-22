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
        return (h(Host, { key: '204c3345d73c653d219fea0141b9d7ddec5028be', class: "flex-fill" }, h("section", { key: 'a35cfa594741ad8b4ae9bbd5f0b16e64f342329f', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6504e9155d50387148f4a0f1d9d0282615dc9857', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'e57231f987df8de3e95dbf2b39eeb51efc69facf' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'ad101bf24995e1295a91abfb1edc47df474c4c0f', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '2fd11b6b3f9ad26817573198cb853fc96521e2bc' })), h("div", { key: '09e9416db241f333eafeb0b65daa0840d4fd3011', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '78b881ef1e85e0f0978a379d6a558f61999ae541' }), h("div", { key: 'f9b625ebaffed81f0e19a4cc73a14b8833aad8a9', class: 'table-responsive mb-auto' }, h("table", { key: 'd6c5f47b880e9bb0b3bbfb3a90bcf039b69322f6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd66279b45f240cd98aa2914698b44176e7d1d89f', class: "table-header" }, h("tr", { key: 'd3cc6745b6e3a5eacf1d935b682b133c97ec67cc' }, h("th", { key: 'c65440753cb22ff47cb4e9f662f0287c3328d719', class: 'task-row' }, h("ir-checkbox", { key: '58e352eb4fe98cbe8dccc24197ef07ed996d95b7', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'c503ebb28b0f75e572ceffa77dbf283fd02c327f', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '38285439d73cdf6d5a9cc3295888f171db314f89', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '621d47d6efdb510d4b91b125ff6da7e088390729', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'd3eb259b2f8c1ce1a5604d5b2ce8224b8bf6edee', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '92849592fc8f5ae9a17e3064807caa03cd87115a' }, locales.entries.Lcz_Status), h("svg", { key: '1b2120ef4df5d0697712f344f716d0e6d7b81b42', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '63933fd5d187b8985c73538e0d830daeaa3c4365', d: "m21 16-4 4-4-4" }), h("path", { key: 'd0c0ffb1961cac07a5e5ce5dead1e52e49125a9f', d: "M17 20V4" }), h("path", { key: '60b582d49c4bc59948a348a79fd65eef3dbcc2f7', d: "m3 8 4-4 4 4" }), h("path", { key: 'de43c2b294c21fb6cc968c6139019d919527d7bd', d: "M7 4v16" })))), h("th", { key: '6dedfd5bc27c632b6975d8ba6744fd0dd99830c0', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '3b952a87842706d9abef8e91e3ebf2283633df50', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '01cff2759994a785beb207deea5b9f61b3ea8fb1', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '08aaa2495ff6b7209b54f3c99afb26916a71e5b6', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '4fe6d4c09e52034a97f1ab39b12c0642d25a0f6b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'c9944ac6a60b296451c1e3624a5353f025c47253', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b58b452f288dc5ec051b3df7e1921b07ad8359fe' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'e61801e8c8cb55f8aae176f3c0b4ebc8c59bd1fc', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '93797caba46a4e2c74756e2587380f62b63c3719', d: "m21 16-4 4-4-4" }), h("path", { key: '881ac7567155ce2d3d069191d7367904e2595c84', d: "M17 20V4" }), h("path", { key: 'c030a66ab7c13d0a2386287b432f2f5d9d0c1dd1', d: "m3 8 4-4 4 4" }), h("path", { key: '3011978d64680975b090f01aab751195ad19abe4', d: "M7 4v16" }))))), h("th", { key: 'b1ea8466566837b6ae1484e9fb7727e03bf20b4a' }))), h("tbody", { key: '5f5c011922591ac5666bcd12ad9618ff0dff5e04' }, tasks.length === 0 && (h("tr", { key: '1641259ef90f3a5c448709658d646ad18270a889', class: "ir-table-row" }, h("td", { key: '1cd8e6daf36b49c434e708b327aade5a4ab30b08', colSpan: 9, class: "text-left" }, h("div", { key: '3a2ae0acbc0dc37209b6ed87793636c25553fe3f', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'c7bc8a0c44152b5c2d5a24d1e65119602f33c424' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '5ed6783da878add3bb9e97ca1e5b83d359ab16fb', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'be916810031afa58a955c4d3507992e9a28c8c43' })))));
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
