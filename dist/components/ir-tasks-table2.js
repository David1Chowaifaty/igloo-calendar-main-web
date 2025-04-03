import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-checkbox2.js';

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{white-space:nowrap;max-width:max-content !important;border:0}.task-row.sc-ir-tasks-table{padding:0.25rem 0.5rem !important}.extra-padding.sc-ir-tasks-table{padding:0.25rem 1rem !important}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.table-container.sc-ir-tasks-table{max-height:80vh}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";
const IrTasksTableStyle0 = irTasksTableCss;

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
        return (h("div", { key: '2d6888e0864b1169a22bb5e26c8047bb301bd841', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'bbe5fde07d767840b69cef6140bfc0f0c1671364', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '94931488dde441130873e38f3abb90d762fd5d51', class: "table-header" }, h("tr", { key: '40903838ca91f57f6709003c7599bcd966d36fcf' }, h("th", { key: '58814820a5611188a368b4f93fb760c14a939614', class: 'task-row' }, h("ir-checkbox", { key: '9dbf45a92ddc15e9438524af3c5e12324a6d2526', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'd269a889095f5588c3e3a7392067ef329c3f3bb7', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'f30690b7f38f9c4a7a11aad95b57485cc0faca8e', class: "extra-padding" }, locales.entries.Lcz_Unit), h("th", { key: '1944003f08f40a21030773b41f8444fe9501791e', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'b588083e4139ae9c8f4c1ceb63b384a4b564b8e1', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '18a02509d9a34550cc117fb640d847f5dc8784b7' }, locales.entries.Lcz_Status), h("svg", { key: '7852d207cde736357ba9fe7f3ad8053176fe834d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b8cd7593fab3bd23b96fe2aed0560ba3a31352af', d: "m21 16-4 4-4-4" }), h("path", { key: '723ac9d9ca9a0b30720bbad7e25b30eeec994733', d: "M17 20V4" }), h("path", { key: 'ba5c9b93a5855a178d0e37433af5a2ba5f64d756', d: "m3 8 4-4 4 4" }), h("path", { key: '1efdc5d3619f25e1ed9ab47ebe8b3ccca7967bf4', d: "M7 4v16" })))), h("th", { key: 'a316d7f2c1a57ec2f008d6a4efe8075291fbda52', class: "extra-padding" }, locales.entries.Lcz_Hint), h("th", { key: 'e4df7ecf823251afb0f101dc0644e0edc9a2589b' }, locales.entries.Lcz_A), h("th", { key: '2977a7b45edb67ab9e46ca3a194213716da45f24' }, locales.entries.Lcz_C), h("th", { key: '5f18db4074c90267a2163fa09c3d63f18f5d8992' }, locales.entries.Lcz_I), haveManyHousekeepers && (h("th", { key: 'e4b2700ea617ae278855e0f2a4fe873b9a5e1160', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'cd3c797d36ab956e8759085b3b98883199ca0b4c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '754540140876c44128bf84f03d159bb13850dd15' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '76b7c9ad67ae9627a0a08e497836cf35b3c7c3c0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'efe444d97b975e1d4caa4f6ec445736c1bd6e299', d: "m21 16-4 4-4-4" }), h("path", { key: 'cbe6fed8cc63ca6c53d238abd3106047351e3cb1', d: "M17 20V4" }), h("path", { key: 'f889122c7d7a8c293810af272fde86563b4bec90', d: "m3 8 4-4 4 4" }), h("path", { key: 'fe6aa2e55c3ec65285b5cd100bcbe5834386f969', d: "M7 4v16" }))))))), h("tbody", { key: '5abae023ea0fc27aea3dceb925cb770016945b0c' }, this.tasks.length === 0 && (h("tr", { key: '15576a2da55e62104218ff42aebd43a9af80a5fa' }, h("td", { key: 'b0131239b02c7def814804688f73887aaed3f118', colSpan: 9, class: "text-center" }, h("div", { key: '1a8adfcfaacadbbffb8d8ea0af984515c92f3a61', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '9931e61aaa767cd7f48fb2163bb05e622707eb1f' }, " ", locales.entries.Lcz_NoTasksFound))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding" }, task.status.description), h("td", { class: "task-row extra-padding" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), haveManyHousekeepers && (h("td", { class: "w-50 task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
        })))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
    static get style() { return IrTasksTableStyle0; }
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