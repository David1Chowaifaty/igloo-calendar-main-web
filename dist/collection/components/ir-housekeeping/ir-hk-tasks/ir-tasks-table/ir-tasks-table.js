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
        return (h("div", { key: '5411b152b8ea911b9a54a6867442b4122bf935da', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '0986ac7516f5dd6f90ba35b982e681e9ca1227cb', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f208b77958878d42bcfd37378e77e9320ef14b09', class: "table-header" }, h("tr", { key: '37a5e24dba89b081aaef9bf9eff1d9f20e094d20' }, h("th", { key: '896b19a45b2251baf6c5dd4fac3ef33c2f154904', class: 'task-row' }, h("ir-checkbox", { key: '4416c8bd4aba5a9b90eadf70aa5927bd8d36c35d', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '4761d0969d9f2abefb229d15da5b399769b1a63a', class: "extra-padding" }, "Period"), h("th", { key: 'eaccb2000410b6ce4827cb5448034d70644f0e0d', class: "extra-padding" }, "Unit"), h("th", { key: '2f4293b9a1ce5b9cad5fa592a1e5a603c3dfb20a', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '44bacb4595a5159d38fefdf03f3cb1e753ea2d42', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '424ae6aa425e38d67946bd9d59eab230f53891f8' }, "Status"), h("svg", { key: '75f1ac0a7c892e94f75851af5f7c5faaaf777318', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '7db24c9012d1a1fd1633c92774084925beccc335', d: "m21 16-4 4-4-4" }), h("path", { key: 'baae222534b912159c7d38a55da839ec33cd60d1', d: "M17 20V4" }), h("path", { key: '162360828a622c21e7b45d7d150a50ac2abbc308', d: "m3 8 4-4 4 4" }), h("path", { key: 'c0cf5b7bbd54d64c7d74930b65e76d5d4f35b68c', d: "M7 4v16" })))), h("th", { key: '9301a93f6cb97ffad21c22440b2d8938ecdd3e78', class: "extra-padding" }, "Hint"), h("th", { key: '60a3734c1dec0f27d9b1cabf670f8fa011304b13' }, "A"), h("th", { key: 'd9db25b2a8d108dfbfb953ec2770ea3be408853a' }, "C"), h("th", { key: 'bf03c25e0e62ccc20d3c4baa4931b416d76cfd0c' }, "I"), h("th", { key: 'ec7956cb31efdbfcadf2dfadcdb042fa4fd79815', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'ced024ecf24870a2db96970b147c864fe8e6840e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7a8b4e3d0c620d6bbdf7e21e03c0bdba4e7de191' }, "Housekeeper"), h("svg", { key: '01602e4165623ac4522422dcf89265561fbc2fc2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a472489cfd3a8f22e8aff026ae0828cc0f2e4831', d: "m21 16-4 4-4-4" }), h("path", { key: '0f0a874a19b6c3bc1332dc3ff672267a5370374e', d: "M17 20V4" }), h("path", { key: '615180cd835085cda3ce69a95998b5d682dc8520', d: "m3 8 4-4 4 4" }), h("path", { key: 'c61f6775aa0eb1c9127f4aa1fe82f8952f5c37fb', d: "M7 4v16" })))))), h("tbody", { key: 'e609ad448bf798a54bd4e78c882abe9f6919a2ae' }, this.tasks.length === 0 && (h("tr", { key: '583674545a59a2482bf719927776c9ec50400bab' }, h("td", { key: 'd11aa56bf964d98ed3d01b026750eac2e7806db6', colSpan: 9, class: "text-center" }, h("div", { key: 'd61536234db6ef44e4b690490c59631c72e41d05', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '614824652d1b0479cbca0a9b33e3a44f39d1260f' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding" }, task.status.description), h("td", { class: "task-row extra-padding" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
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
