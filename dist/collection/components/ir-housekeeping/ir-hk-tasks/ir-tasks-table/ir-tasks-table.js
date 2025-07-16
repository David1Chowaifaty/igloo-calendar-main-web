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
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '2374d80f19ece5fb1afcf031c7f63b4b0459ff51', class: "flex-fill" }, h("section", { key: '0f438fdaa0632b60422f67e2ed42ce108e5c1724', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'e8a00106f33f1a076114870272db191c32e57137', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'f8a631b27f9827141f2ef2b926289be413911665' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '5f5b92dc9c16248fcb4d8b9b35572fa73bc773bd', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '06447c9bfb2df6627614650eb8a9c97c176c9d28' })), h("div", { key: 'e64e0439e4fa6cf1659f25b49252e81dce520b78', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'a434b9b4694b6ee075655e9eb9868404392a19e6' }), h("div", { key: 'f9ef43558b6ee1b1e5a82496c64d93dbd7b7cf10', class: 'table-responsive mb-auto' }, h("table", { key: '12261765dab0649bcab49383bc77b89efd5306a4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '57585b1f8268e61f2c7dd5834ad70c47f9ecb976', class: "table-header" }, h("tr", { key: '8a9c56347e5aa57c16d7e4ca7aa47d4aabf6ac74' }, h("th", { key: '6b0504ceb1167dd576e92b689faf049c1f14f233', class: 'task-row' }, h("ir-checkbox", { key: '74f51201a09beff7c371a49585821db9dee7405b', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '85fe0301e01e5db25730c1a8be40ddfadf22a7f3', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '71e0c93ea30ab89b25d2ffdbbb02e4bf48a910d2', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '041a1f0cb70905c7aa5714a838e5db7e2678be2b', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '390a7075c19f5573f2a1133f63c8b3ea301bd14d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b8636b5b621dd0494a01e65214a324b3b0e1a670' }, locales.entries.Lcz_Status), h("svg", { key: '5eae6909971e6586f92d6afe9a7a021b421150d2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '7a9482eae1524ac57c0476c2fe3e31d286f4e9a8', d: "m21 16-4 4-4-4" }), h("path", { key: 'c49fa2efdfe0ef2a38fcf5837da4332a2a36b5a2', d: "M17 20V4" }), h("path", { key: 'd22bb2b596b5934571b32a22d7198157d3bc2b45', d: "m3 8 4-4 4 4" }), h("path", { key: '67b403eede2931e655cf102f9593ea1c68f4cfca', d: "M7 4v16" })))), h("th", { key: 'c715bd61c961526d094cf0d11742af877dbc3446', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '994cf8002574f84ee4c2112509165419dc2c27ca', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '825b585acca8d982be7e1ceb75db4cbbec2ab9ca', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '470db596b71f0e86ab0cedd631e08ad8a1ac2f41', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '2c5a4071c4829e11d0b60d55f83db3761ecb892d', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '99ff5d1a31cd05b8fc073344ed4c3adf185c2fa2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'cb6432b0cc3824f3eac77223879b048f3e3bed17' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'd5b1bc84d0258e7c470127f54244951cc91bd427', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b59c615fa074ddd46db0115597b10ac7e409e5dc', d: "m21 16-4 4-4-4" }), h("path", { key: '99eab8ee9a8de8cbcfa56c69f0440acfb3ff7d70', d: "M17 20V4" }), h("path", { key: 'fa19b65ce85c7f66976167bb14ed1615ebea0076', d: "m3 8 4-4 4 4" }), h("path", { key: 'a9650b46ae01d35827ab3044e1d6ae694bf5fa46', d: "M7 4v16" }))))))), h("tbody", { key: 'e7f99e03b64c959bb1056c14f0b73e954e63cf5a' }, tasks.length === 0 && (h("tr", { key: '2966b806b655c510f0574bb382cdb9b658ddf3fb', class: "ir-table-row" }, h("td", { key: '72aefa441a6f62571e026fca5ea0ebee5ac07968', colSpan: 9, class: "text-left" }, h("div", { key: '67df14ae89b97d203fd91097e8ee6ff4bf7dfbc0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '89229fbf996314c790dee9fed8d261af22c1ba30' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
            })))), h("div", { key: 'f80bcefb02653b038bbd6f721408dc20c94dbbc9', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '382e23fb2f522ef17a8ea38c8187939850b0051d' })))));
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
