import { h } from "@stencil/core";
import moment from "moment";
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
        if (!task.hkm_id) {
            return false;
        }
        return moment(task.date, 'YYYY-MM-DD').isSameOrBefore(moment(), 'days');
    }
    render() {
        return (h("div", { key: '5411b152b8ea911b9a54a6867442b4122bf935da', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'b19fa2991af98a4cb11e12334ac3f09fac831186', class: "table" }, h("thead", { key: 'b41cb4f57657adc68d888f7e7c1790f9258b18e3', class: "table-header" }, h("tr", { key: '1e0e02505f2254eaa37c53cfeb8fa15573347948' }, h("th", { key: '2c1bac6183fbf1d8f224d200875e9d77d9d7a4aa' }, h("ir-checkbox", { key: 'fe04eedeef8da7bc5b83c7553b35969f962bd6f9', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '63cfa273064e11eb994721d98b653710f734d6bb' }, "Period"), h("th", { key: 'dcafdbee419ae981bd667efe815c8023d272b97d' }, "Unit"), h("th", { key: 'facbe6f6e49fa1e8130a7c1d1f6ff5273e27b239', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '86958e4eef4a3bc76f4f2192accc0063be965269', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f4e2f3fa929b7f43a63995ac3b7e6ef857b32c88' }, "Status"), h("svg", { key: '1e1d59cd8298a1862052f8a9b2a78900fbf73dc0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e96e3e21948525c30fea660003e78371a6deef60', d: "m21 16-4 4-4-4" }), h("path", { key: '8182583634243b651b71e21876220cdc5b804a58', d: "M17 20V4" }), h("path", { key: '6a1602f0b760f83fc3b2222b93b4005b2f1cce8d', d: "m3 8 4-4 4 4" }), h("path", { key: '9a67444fbe83c6fd123cac58ffeac6ca20e20bce', d: "M7 4v16" })))), h("th", { key: '7fe0c07d914da317b3e9549e23eeb36302f339be' }, "Hint"), h("th", { key: '474c75bc7257e45cd0956541ca088078abeadec8' }, "A"), h("th", { key: '9e31a1ae1c2a399feee2a1d416190d946e4ae8a6' }, "C"), h("th", { key: '2eea3de1349bb3fefda4c5650773e7dabce3dd0a' }, "I"), h("th", { key: 'a023943e7d4e164a6e1852d2b9a66d36c30b01bb', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '834dddcf85e84f91d3fae765e81dc8c3dac05ba3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '87c07e74aa3a5a81506aca352217f5190a865af0' }, "Housekeeper"), h("svg", { key: '5ae0319fd8e8f2ba53e2546aa28e7c41eb0a4f67', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1670c67552d3e1ce57408e48dcf03c7fc8cf3c97', d: "m21 16-4 4-4-4" }), h("path", { key: '21ff5c326ad98c7a0e495d55f1aa33012ec007b2', d: "M17 20V4" }), h("path", { key: 'c634856db31588292156189512083499c4e71c25', d: "m3 8 4-4 4 4" }), h("path", { key: '28c5d49b9fb3bb6b0d40b26ccf544bdb45df02f7', d: "M7 4v16" })))))), h("tbody", { key: 'a6d9a000c30c6224545602ca3de49019a02b4b58' }, this.tasks.length === 0 && (h("tr", { key: 'f2fe8b423be5b7a39f678beda334922b72088762' }, h("td", { key: 'b3e41444cf8978e5f08220f38ba154b80c566666', colSpan: 9, class: "text-center" }, h("div", { key: 'ac5ef302c6a4f1f02970a620dc3e5309ca9de6e4', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '81b406854a85600c3fdf9d7ecb037a2662870c5b' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.formatted_date), h("td", { class: "task-row" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row" }, task.status.description), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
        })))));
    }
    static get is() { return "ir-tasks-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-table.css"]
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
