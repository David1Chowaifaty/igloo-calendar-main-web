import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-checkbox2.js';

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.25rem 0.5rem !important;white-space:nowrap;max-width:max-content !important}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";
const IrTasksTableStyle0 = irTasksTableCss;

const IrTasksTable = /*@__PURE__*/ proxyCustomElement(class IrTasksTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.tasks = [];
        this.selectedIds = [];
        this.showConfirmModal = false;
        this.sortKey = 'date';
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
            const aPrimary = a[key];
            const bPrimary = b[key];
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
        const filteredTasks = this.tasks.filter(t => this.selectedIds.includes(t.id));
        console.log('filteredTasks', filteredTasks);
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
        return (h("div", { key: '8e960c83280ef44f316ea2266c57cf83789d0724', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: 'a1e5c3374ae13b096d3b05410ec6a3f9a717cd96', class: "table " }, h("thead", { key: '04ff4b1844c8f22188b17ec9da6844e07de2f59c' }, h("tr", { key: '40720059f16b72506d2aafd774d60c21fd23a462' }, h("th", { key: 'eefff559321bdc40333af6c9c80b80f429505fdd' }, h("ir-checkbox", { key: 'e2e3e4ed8544c02cfdea6b6886c633f682abd262', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '36e5758b74278fe47b045f2dae941d223df2142c' }, "Period"), h("th", { key: '491472fc763a6b72b70c422b34b94f1cf6ae7dc4' }, h("span", { key: '248311613d573b44713cc368bd2cc8e8150ab668' }, "Unit")), h("th", { key: '0f89dd512f19612419dd0f5ecde899c4cceb2136', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: 'd99c5205a967b7d62f083443543ad4fb7feb98e0', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '65546c6bbd7494138863818d4a2359b8e7cf6ac3' }, "Status"), h("svg", { key: 'be0d8fd134aabde9b5ec41613a85a7b95bc4c8d0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'ab18ecd1be6198756f9f34b6ac7537b2097e3a1c', d: "m21 16-4 4-4-4" }), h("path", { key: '609cdd805ec9995d140591622d46e177bb54c40e', d: "M17 20V4" }), h("path", { key: '16cebdf65594100f382e254f707d2cdd997e5c50', d: "m3 8 4-4 4 4" }), h("path", { key: 'f7f8cac0adf27413b59e8012a79df577d4dceac6', d: "M7 4v16" })))), h("th", { key: '1ecc0154a274f048ef184a2face39853dcf5ab79' }, "Hint"), h("th", { key: '87941183396a06c1b7ed0e1a5fbb91ee560c236d' }, "A"), h("th", { key: 'c0bd367c0d5e2b43b4a76c2f35adcdde3a7edee9' }, "C"), h("th", { key: '16e65b46abe18f2f124d7e709bfbada048499286' }, "I"), h("th", { key: '714e4c0fa4c4e21419317f67165a4cbec63e8974', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'dffbd0a05f488c8d1b5ba70a953c07c777d6282a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'bba733e01abff5b3c5d607fa553e703e008c7e3d' }, "Housekeeper"), h("svg", { key: '6bea508d5608f2f33f2c322c52bef55d05d33db1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '0f056d993f3aee88d8afc240767a4757f1a86a09', d: "m21 16-4 4-4-4" }), h("path", { key: '692732cabf255ff7e767e40b5f150bf4ebb89133', d: "M17 20V4" }), h("path", { key: '6b339ce0f88ddb439372ecfe1091050bb644fc2d', d: "m3 8 4-4 4 4" }), h("path", { key: '9b0d2c7796856b29977860a4a3b7dbb59c5b3e03', d: "M7 4v16" })))))), h("tbody", { key: '676ea6603f33e044a7f204df2071fd60ce207ace' }, this.tasks.map(task => {
            const isSelected = this.selectedIds.includes(task.id);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, task.unit.name), h("td", { class: "task-row" }, task.status), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, task.housekeeper)));
        })))));
    }
    static get style() { return IrTasksTableStyle0; }
}, [2, "ir-tasks-table", {
        "tasks": [1040],
        "selectedIds": [32],
        "showConfirmModal": [32],
        "sortKey": [32],
        "sortDirection": [32]
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