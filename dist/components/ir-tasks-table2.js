import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-checkbox2.js';

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{max-height:80vh}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table:last-child{width:100%}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = /*@__PURE__*/ proxyCustomElement(class IrTasksTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = createEvent(this, "sortingChanged", 7);
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
        return hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(hooks(), 'days');
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        return (h("div", { key: '2c8ecce948453e1ab41468a53c21cc09722fbd95', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '4393031cbfa5510f8472f7e41d5511b8c48788a4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '34f687d14730d5274599fa480773991455d82d90', class: "table-header" }, h("tr", { key: '1a1983ade5f5e3be358c99ffd83df5c5b46d6ec4' }, h("th", { key: 'aa39b5d59309b2ef68c137f7a65b68cdbdcf362c', class: 'task-row' }, h("ir-checkbox", { key: '94f45b5649503433ded3bb311dcc86173c2cd75d', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '7e28db1cb5e411147c07c372a9d72ad4a36ae601', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'b65f55ea720fe1ef6c2c465af6658481fb1b72bc', class: "extra-padding" }, locales.entries.Lcz_Unit), h("th", { key: 'a945ba2801926de36a1d14b2c3a802100cfa57fc', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '5f0d68468ae09396e5974cc83ccc67b65af0675e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e4c14df3aeca1a8ccd47413a83d8af59e9ca7a3e' }, locales.entries.Lcz_Status), h("svg", { key: '2ec684ae418e1346b623a3c0dbed999b3e5d1410', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '5f4bbc5c1973037c6edd2c9e2114bc715167dbcc', d: "m21 16-4 4-4-4" }), h("path", { key: '3dba8116586813bd8e13de30a6172a2da61ad3bc', d: "M17 20V4" }), h("path", { key: 'e3851d2511d6de93746bc98b5a89f8714128d508', d: "m3 8 4-4 4 4" }), h("path", { key: '25825394e58be087be5dc5385c60d88ef74b3037', d: "M7 4v16" })))), h("th", { key: '9deeb4826799ef10d882a086f4af8a22d293bcdd', class: "extra-padding" }, locales.entries.Lcz_Hint), h("th", { key: '78efd68cef42bcac051288ed089d07a1c06047dc', class: "text-left" }, locales.entries.Lcz_A), h("th", { key: '77ac34f581ac461bbda443c3b623b21eeaa5d31d', class: "text-left" }, locales.entries.Lcz_C), h("th", { key: '156708392099449570d8d8fa53eeff5e1b81cb5c', class: "text-left" }, locales.entries.Lcz_I), haveManyHousekeepers && (h("th", { key: 'c595c165bfa5a461b91f85b1b645a9f657e73f8f', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'dede8070d324b5c09288bca90bf58d6b9a40d19c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '82869c6dc82ee6bcb559dadfbf2a328863915104' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '57af43f297654bc0baac5aedf218eeb599ff2fa1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'f15d4ce27aeeebb3ba36093c4b3e1ac0755f4955', d: "m21 16-4 4-4-4" }), h("path", { key: '085ca8d6807bb53b9c2d317b540d244c4491ce32', d: "M17 20V4" }), h("path", { key: '4fece8197315642d17baa1bbed4307440b9e85bd', d: "m3 8 4-4 4 4" }), h("path", { key: 'd3ad890eb76818c86ed526a2cdbf881d9757a590', d: "M7 4v16" }))))))), h("tbody", { key: '4e02a8baf8031e182f1744d2174e1201d6ee0c9d' }, this.tasks.length === 0 && (h("tr", { key: '76e8d45eebe30a38e3e4974c10d7d935a646e3f4', class: "ir-table-row" }, h("td", { key: '4b0c63dbec7ff79ef83cb55a9293b43a9bfa6a48', colSpan: 9, class: "text-center" }, h("div", { key: '9af6399868ddaba0e57348ad8c4b3caf80614033', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5642b74d7f42a3f87cdc74261ed71908b95780ae' }, " ", locales.entries.Lcz_NoTasksFound))))), this.tasks.map(task => {
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
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
    static get style() { return IrTasksTableStyle0 + IrTasksTableStyle1; }
}, [2, "ir-tasks-table", {
        "tasks": [1040],
        "selectedIds": [32],
        "showConfirmModal": [32],
        "sortKey": [32],
        "sortDirection": [32],
        "checkableTasks": [32]
    }, [[16, "clearSelectedHkTasks", "handleClearSelectedHkTasks"]], {
        "tasks": ["handleTasksChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-table", "ir-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksTable);
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-table2.js.map