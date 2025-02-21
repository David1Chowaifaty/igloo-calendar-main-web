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
            if (this.isCheckable(task.date)) {
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
    isCheckable(date) {
        return moment(date, 'YYYY-MM-DD').isSameOrBefore(moment(), 'days');
    }
    render() {
        return (h("div", { key: 'fc9dda23977fffdd04f8655f9f82062548212ffe', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'cb4aead87deefb12d9dd52adaa511873e58889fc', class: "table" }, h("thead", { key: 'bcaa1ab8556487f05d4195bd54514ad5be9208a5', class: "table-header" }, h("tr", { key: '9e7c6b9acd79878e4b3a4b9eec5cfd05f7e8d220' }, h("th", { key: '1853b1e03e7a7a27c1fea2b1f3e3258649e82b47' }, h("ir-checkbox", { key: '6def043b67399a40a5373692f127cafdec51dd83', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '1ece345cf42459cc7ad2dc8483ea1c4dd472e2de' }, "Period"), h("th", { key: '163930a2a555f88eefad7fe3f0ce037a2518b1ac' }, "Unit"), h("th", { key: 'c7dc41891519d09fe3aa312425253927d90da7d6', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '15a928a88154758c418fb100a7da99ab506f144f', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '28cec0d19ad35f900ce4c6af875465e2bf5c77dd' }, "Status"), h("svg", { key: '58828376506766b4d1ff81dab70a0e8ed71ea565', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '84ffa522abbb4ae26f65136a3b7ada912d9e920a', d: "m21 16-4 4-4-4" }), h("path", { key: 'dd0265a6784574b7727f0d176542804ee21473a3', d: "M17 20V4" }), h("path", { key: 'ea591f02b71f890c2d14cc0f29cd7011c9b4b180', d: "m3 8 4-4 4 4" }), h("path", { key: '4e39a2b96b1f703d10f021673264ae288cf97930', d: "M7 4v16" })))), h("th", { key: '886923603db1d592d0f2f6b6cd1cccfa6902580e' }, "Hint"), h("th", { key: '82a192f393b16f5850bd645153d134c96f9dd17e' }, "A"), h("th", { key: '9c55d5ccd5d99c3a2b3ca020d9472cbae35fa225' }, "C"), h("th", { key: '8923090e83da67911c43f3742d749a58d166f9f8' }, "I"), h("th", { key: '92466709679c26d9ff90e11e358422a973221e75', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '558328722d52215ee55edb5a8e90143545dfc4d8', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '40affa35fb0fe3cd03d3ceff139d6880e36c6429' }, "Housekeeper"), h("svg", { key: '7b086189ac415a6f18e67dec5899d3e194db86d6', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '7494bd2c04d5744f7efce948eaaca143e7204956', d: "m21 16-4 4-4-4" }), h("path", { key: '84288f8d12fc26c2b9a7fc412f5abbf7eae9d5c0', d: "M17 20V4" }), h("path", { key: 'f5a319533123e96bd059f13ff6c0a73ac628b0de', d: "m3 8 4-4 4 4" }), h("path", { key: '65e6e3b566d2d189b4c7eee080e50b880e3786a8', d: "M7 4v16" })))))), h("tbody", { key: 'd6815b8d2aa586e21717a5142d8307886c0f3dcd' }, this.tasks.length === 0 && (h("tr", { key: 'da2c02d59e26c9b2ccb71a2c15d52e5f1f333218' }, h("td", { key: '857b9f6c09f177740f6681f2839ed959090d07f9', colSpan: 9, class: "text-center" }, h("div", { key: '15ee8f767b2a0f6184cb9a71b47a745a28c7a9e0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'd2aaefeea5c731470b6423cbec24900ec0e354ff' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, this.isCheckable(task.date) && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.formatted_date), h("td", { class: "task-row" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row" }, task.status.description), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
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
