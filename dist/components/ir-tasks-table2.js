import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-checkbox2.js';

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.25rem 0.5rem !important;white-space:nowrap;max-width:max-content !important}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";
const IrTasksTableStyle0 = irTasksTableCss;

const IrTasksTable = /*@__PURE__*/ proxyCustomElement(class IrTasksTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
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
    }
    componentWillLoad() {
        this.sortTasks('date', 'ASC');
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
        return this.tasks.length > 0 && this.selectedIds.length === this.tasks.length;
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            this.selectedIds = [];
        }
        else {
            this.selectedIds = this.tasks.map(task => task.id);
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
        console.log('here');
    }
    render() {
        return (h("div", { key: '1a586a1d9d47ffdc51affedbba70c9e6fd1d2e68', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '28126ab8a36df396fdade658c99a759696ad4fcb', class: "table " }, h("thead", { key: '52506d9115d4ed6d8dfcaa73a1cda31b630a1f8e', class: "table-header" }, h("tr", { key: 'c3e7fda3fce272e856b0b9b0ef25739fc5809d44' }, h("th", { key: '7683ea62c4295398054fc9a9c45b20f807c24a86' }, h("ir-checkbox", { key: 'c5ffff2c65095d8449878e37072907a4374015c6', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '087426a46b36db154aec10ec5e2113be6c84d301' }, "Period"), h("th", { key: '50b1be0e6ac55f98378e26888a83fba9115d8121' }, h("span", { key: '89e06c8cc70e1bf3900748c5a1e6447559e579e1' }, "Unit")), h("th", { key: '47701b22e5b7b6da29b0681ea9c2697331bf8f81', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '7cd9edec66c2925a4ca9abe393c93a1d4637d38e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '2896db7757e64c30e850235458bdc5dd52ff1082' }, "Status"), h("svg", { key: '7a9c53c2b1e59a1337b3777f6f23ce5250e87bba', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '5d12fe45f115f810259e3ad2d4d407ad9e32c5cd', d: "m21 16-4 4-4-4" }), h("path", { key: '31f82e680f5297807641f5973731c75153236a75', d: "M17 20V4" }), h("path", { key: 'abf651a5163e73fdef9f2d118f8497f284b9dd40', d: "m3 8 4-4 4 4" }), h("path", { key: 'ae05922fedf1ac01ceffaf5eea1e30ebbc62bdd4', d: "M7 4v16" })))), h("th", { key: '35a15d118a2e73bfd6133b3d85545c553f3ce918' }, "Hint"), h("th", { key: '11dbd0d22539ec11f87e45743f261f5e7e4745ff' }, "A"), h("th", { key: 'ec66a71ef73ff5d15e7c49a8220f6673ae70309a' }, "C"), h("th", { key: 'e4a27c61edbd791219555e5be3c513a89a381e2c' }, "I"), h("th", { key: '8a3c46959283a28cbd08d55407fba4ce1de1bd07', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '03216eb80bc6453cf3239672187bd6231df85730', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b17a6163f8b90f21a1dd31bb14155cee5822f638' }, "Housekeeper"), h("svg", { key: 'c2c75cda75cb7837670e7ec92b49ad5de5e8fbd2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e33589ac7774e16146c6f6490c1ec8f8c4a8a77e', d: "m21 16-4 4-4-4" }), h("path", { key: '6eff2d21a70efbdd556357c600681364503fdd9a', d: "M17 20V4" }), h("path", { key: '63f4aa0dc15d61a03cbf817f85178cdf4b6f6699', d: "m3 8 4-4 4 4" }), h("path", { key: 'bd2bab18e56ad7fbad909c13b645d4fc5b3e303e', d: "M7 4v16" })))))), h("tbody", { key: '4f45032a8c40f94de0034c66143513e7fe0a1a5c' }, this.tasks.length === 0 && (h("tr", { key: '36008f08402de73d819e7da1ecf1df0e2d3fbf84' }, h("td", { key: '925912c3bfbcee837d109aa61993c4c4e88491fa', colSpan: 9, class: "text-center" }, h("div", { key: '7966f3c1920c912d5e6a1eb07120387097aa76e2', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '33450af4a8fc6faf97f58baae421cf7402e988f5' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, task.unit.name), h("td", { class: "task-row" }, task.status.description), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
        })))));
    }
    static get style() { return IrTasksTableStyle0; }
}, [2, "ir-tasks-table", {
        "tasks": [1040],
        "selectedIds": [32],
        "showConfirmModal": [32],
        "sortKey": [32],
        "sortDirection": [32]
    }, [[16, "clearSelectedHkTasks", "handleClearSelectedHkTasks"]]]);
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