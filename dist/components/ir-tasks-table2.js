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
        return (h("div", { key: '0b128b2f1202a097431884ca9aee5a358e6d8e18', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '4bf89fce83a06f9df596fc96c692b1add7a6f6b3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '39ada41550cca50115048c2bbbca5346585837b0', class: "table-header" }, h("tr", { key: '8d4bfc701063051011944573dcfe60fd455e2b64' }, h("th", { key: '1c028173ced1869fa1aba132fea7491b2c38e0ee', class: 'task-row' }, h("ir-checkbox", { key: 'd22c2eca1e777f36edcfd538b77b728d83c85ea1', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'cbd714be2728ac24678235b8036a87eb8e8c58bd', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '4935a552df76d33ab7760219983db7846cc8695e', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '5ebdfda2172f85eb2b82fc06cd9f88db75839351', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '176c2daca3e294d77f3ba53c45abb22729d1d819', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b785be6405505d01e4344ec428da5a8a55c58c8e' }, locales.entries.Lcz_Status), h("svg", { key: '5f6b38f858e6cefe19ac3b606a4a7cf48520e906', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b198b92b88991a4f8baaee4af782ed83b353b0f6', d: "m21 16-4 4-4-4" }), h("path", { key: 'd50d11e19e967e454154b9154ba6fdcf44fc076e', d: "M17 20V4" }), h("path", { key: '697b52e3a65e3958384a2c51d3b20769f022f65d', d: "m3 8 4-4 4 4" }), h("path", { key: 'ccb9508475a0ee337cc6bf50c25002826ea5e27a', d: "M7 4v16" })))), h("th", { key: '51d8b37298e717a905d90a17887296f95ffdfe39', class: "extra-padding" }, locales.entries.Lcz_Hint), h("th", { key: '932ea38e70b7a95fd9203d9cea247125381ceb87', class: "text-left" }, locales.entries.Lcz_A), h("th", { key: '2764fd15f72b086633d66d497ba751efa3e0a8bd', class: "text-left" }, locales.entries.Lcz_C), h("th", { key: '86e850d79cfe042aa9083c2436489cdef251bc5e', class: "text-left" }, locales.entries.Lcz_I), haveManyHousekeepers && (h("th", { key: '677ca217bd0bf6f52917c765858c243ebcb28a6a', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'd0107556e03573b85b5d4699e38a81eb910210fb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e69d730d7989fac49e9aeafdca77f1c7556256a6' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'f690ab8c9962207d86020bec5fd18fd56439b4e1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e59e27b0b6b86b238201000b177918a995028e8e', d: "m21 16-4 4-4-4" }), h("path", { key: '1b9b0c430680d81651ff3afc3d2483e86e0d5ed0', d: "M17 20V4" }), h("path", { key: 'b845420db4bec8fbb0214a7b76cedb63efd964d0', d: "m3 8 4-4 4 4" }), h("path", { key: 'f0d699296ab541801a523cd7984ec3ca50aadcf0', d: "M7 4v16" }))))))), h("tbody", { key: '4ced80901ca968b44149e707be133c141fbf4e34' }, this.tasks.length === 0 && (h("tr", { key: '4ed10f98608cf80220350dacba23157b33f81bf5', class: "ir-table-row" }, h("td", { key: '84423a81d19e1f668fb136fac410fb5fd9afa0c7', colSpan: 9, class: "text-center" }, h("div", { key: '79bef0b2625a7f3125b8e37bd58a014fe692bec5', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'cbb7e55eae27639a7613cb5a6a0ca9cf1b5e5300' }, " ", locales.entries.Lcz_NoTasksFound))))), this.tasks.map(task => {
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