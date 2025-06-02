import { h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
export class IrTasksTable {
    constructor() {
        this.tasks = [];
        /**
         * Tracks which task IDs are currently selected via checkboxes.
         */
        this.selectedIds = [];
        /**
         * Controls whether the "Confirm Clean" modal is shown.
         */
        this.showConfirmModal = false;
        /**
         * The key we are sorting by (e.g., "date", "unit", "status", "housekeeper").
         */
        this.sortKey = 'date';
        /**
         * The sort direction: ASC or DESC.
         */
        this.sortDirection = 'ASC';
        this.checkableTasks = [];
    }
    componentWillLoad() {
        this.sortTasks('date', 'ASC');
        if (this.tasks) {
            this.assignCheckableTasks();
        }
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = this.sortDirection;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (this.sortKey === key) {
            newDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        this.sortingChanged.emit({ field: key, direction: newDirection });
        this.sortTasks(key, newDirection);
    }
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedIds = [];
    }
    handleTasksChange(newTasks) {
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
            this.selectedIds = [];
            this.assignCheckableTasks();
        }
    }
    /**
     * Helper to sort tasks array in state.
     */
    /**
     * Sorts the tasks by the given key in ASC or DESC order.
     * If values for `key` are duplicates, it sorts by `date` ascending.
     * If `date` is also the same, it finally sorts by `unit.name` ascending.
     */
    sortTasks(key, direction) {
        const sorted = [...this.tasks].sort((a, b) => {
            var _a, _b, _c, _d;
            // Primary comparison: a[key] vs b[key]
            let aPrimary = a[key];
            let bPrimary = b[key];
            if (key === 'status') {
                aPrimary = a[key].description;
                bPrimary = b[key].description;
            }
            if (aPrimary < bPrimary) {
                return direction === 'ASC' ? -1 : 1;
            }
            if (aPrimary > bPrimary) {
                return direction === 'ASC' ? 1 : -1;
            }
            // First tiebreaker: compare by date (always ascending)
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            // Second tiebreaker: compare by unit.name (always ascending)
            if (((_a = a.unit) === null || _a === void 0 ? void 0 : _a.name) < ((_b = b.unit) === null || _b === void 0 ? void 0 : _b.name))
                return -1;
            if (((_c = a.unit) === null || _c === void 0 ? void 0 : _c.name) > ((_d = b.unit) === null || _d === void 0 ? void 0 : _d.name))
                return 1;
            return 0;
        });
        // Update component state
        this.tasks = sorted;
        this.sortKey = key;
        this.sortDirection = direction;
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(id) {
        if (this.selectedIds.includes(id)) {
            this.selectedIds = this.selectedIds.filter(item => item !== id);
        }
        else {
            this.selectedIds = [...this.selectedIds, id];
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        if (this.tasks.length === 0) {
            return;
        }
        const filteredTasks = this.tasks.filter(t => this.selectedIds.includes(t.id));
        this.rowSelectChange.emit(filteredTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return this.checkableTasks.length > 0 && this.selectedIds.length === this.checkableTasks.length;
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            this.selectedIds = [];
        }
        else {
            this.selectedIds = this.checkableTasks.map(t => t.id);
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    /**
     * Assigns checkable tasks based on predefined criteria.
     *
     * This method filters tasks and determines which ones are eligible
     * to be selected using checkboxes. A task is considered "checkable"
     * if its date is today or earlier.
     *
     * The filtered tasks are stored in `this.checkableTasks`, ensuring
     * only relevant tasks can be interacted with by users.
     */
    assignCheckableTasks() {
        const tasks = [];
        this.tasks.forEach(task => {
            if (this.isCheckable(task)) {
                tasks.push(task);
            }
        });
        this.checkableTasks = [...tasks];
    }
    /**
     * Determines if a task is checkable.
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {string} date - The task's date in 'YYYY-MM-DD' format.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    isCheckable(task) {
        // if (!task.hkm_id) {
        //   return false;
        // }
        return moment(task.date, 'YYYY-MM-DD').isSameOrBefore(moment(), 'days');
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        return (h("div", { key: 'facc3c5f784195e68b5f08fecd06ddba21a7b4f2', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '4f3a353835afb5d93493686464db263fcda02d5b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7f49b8c4c2736bc285be605c1633a16b3f30ea5a', class: "table-header" }, h("tr", { key: '1424557698c51e316c56a5aa35561ed7238b1445' }, h("th", { key: '9c31093d2bd69fb8c944ecdd4488cdbe3f605ddc', class: 'task-row' }, h("ir-checkbox", { key: 'ef25c3e326720ca3501f2c8462f2323c3794c635', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f14b1782c1e4f059f79a345f0ef0ac06de74880c', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '423aa07dd0c2193f1ef521ffd44ed090529e4d92', class: "extra-padding" }, locales.entries.Lcz_Unit), h("th", { key: 'a2de083e4716d67c0b1ed900d62ac3d56073fff3', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '0c389ba8efaf779fd8ba6ce0073e22c0ab1f4a38', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3e75df09fbd77258ba9e033dae62386f0adc1310' }, locales.entries.Lcz_Status), h("svg", { key: '848ef13bf0990600e4b10eea22968f6d2b7c22ba', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd9cf53e01d06892fb46e389b1405f6c85fb46e35', d: "m21 16-4 4-4-4" }), h("path", { key: 'f4f4916d215b37273c3d4bac7f3d2c849ce8f6ec', d: "M17 20V4" }), h("path", { key: 'b2dbeac638d880171d5b47097a5b72387295839c', d: "m3 8 4-4 4 4" }), h("path", { key: '94081b6503f5df0032dc88d8d8e86ce2aa1fb744', d: "M7 4v16" })))), h("th", { key: 'e1a3f9de98399fb22be85a72727701871db816a5', class: "extra-padding" }, locales.entries.Lcz_Hint), h("th", { key: '160c7d66f41339363af3d77a33f834bf8566054f', class: "text-left" }, locales.entries.Lcz_A), h("th", { key: 'dcc2eb450ac31b254d69bb64c4f746bf4adf25c2', class: "text-left" }, locales.entries.Lcz_C), h("th", { key: '9b49836492f80952385ce29520982f50f080db16', class: "text-left" }, locales.entries.Lcz_I), haveManyHousekeepers && (h("th", { key: '8362c1763f8db876c6362246db565a5684118fce', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'd83bcc6d7109c44135af7dfedd42b0380ba392e8', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '6d807044747659cf9a35c0451c4520691b9ab4cb' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '69b4d10001a3be9b0b732606b989daf2bbd0e1cd', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd244a46185fc04df06ebec966ae0f7719e488d73', d: "m21 16-4 4-4-4" }), h("path", { key: '008bb9280de291a3378cace511b1a73dcc544ebd', d: "M17 20V4" }), h("path", { key: 'b758af7ab2ee28e4862b01419b1de902ebfcf56e', d: "m3 8 4-4 4 4" }), h("path", { key: 'c14bdc625ca1d5514969735bff9e1b4439b9370d', d: "M7 4v16" }))))))), h("tbody", { key: '4afe24b61e4ee1486df33370275ed3c4f634755d' }, this.tasks.length === 0 && (h("tr", { key: 'c233c95f11182d8aac6e8e36b326537f23963804', class: "ir-table-row" }, h("td", { key: '887bddd29c7f1678b501e19f74b0af2c9531c53b', colSpan: 9, class: "text-center" }, h("div", { key: '5ecfacd9e61dece4fc35a73a379d5b282268ca70', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'bf1c64a8f94689f2a6b19c05c01e3ad0594b2344' }, " ", locales.entries.Lcz_NoTasksFound))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding" }, task.status.description), h("td", { class: "task-row extra-padding" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: "w-50 task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
        })))));
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
    static get states() {
        return {
            "selectedIds": {},
            "showConfirmModal": {},
            "sortKey": {},
            "sortDirection": {},
            "checkableTasks": {}
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
