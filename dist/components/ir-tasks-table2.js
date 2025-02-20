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
        return (h("div", { key: '2ebfd1fc4dd35501a3afb245a7cfd5f45a998342', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '48d16b58ad5b31110265c9145a88da26b8bed5f9', class: "table " }, h("thead", { key: 'e9f27524b631f9a81120965dc85b174a6c5c2c6e', class: "table-header" }, h("tr", { key: '05ab0bb301a5b3c616114a5025a1d7462a1512f9' }, h("th", { key: '35e220d1dcb83d2997b661d28c5e6d59b99c5cf4' }, h("ir-checkbox", { key: '393f59a742cb5a606aa3c41a9218f1bde0cbacdb', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'ad4637d5cfc397ccc5e029c08caf60fcdd2934ac' }, "Period"), h("th", { key: '7ea5ff34a2a37b0df88ffe0554313c8d86e522fb' }, h("span", { key: '760bbed939e1d43d90bfed22fdf4856f875595a2' }, "Unit")), h("th", { key: '7432040778099ac247cb2df88cfbbd7bd78f7846', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '160dc414f5e865facce1c9c716ec90b9fbd5fc27', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '978280c56768b40ead09601a6e5bfe2ba534a87f' }, "Status"), h("svg", { key: 'a1663a39a0afa58ceb322d763409068c32dce072', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '58b2abc865c65347be0e8e732a28719963a96d5d', d: "m21 16-4 4-4-4" }), h("path", { key: 'd6a3e3195d66008edec68b1c217d9cb8681b0e8f', d: "M17 20V4" }), h("path", { key: 'fcdec9cadf8f9e66d4c4f567a9e06e9034fc894b', d: "m3 8 4-4 4 4" }), h("path", { key: '6d9777dda591ef38383b4e2f44a8f075a5b94c1c', d: "M7 4v16" })))), h("th", { key: 'd5a3cc35c9a0ec2bb5c66cf20308b12734549a58' }, "Hint"), h("th", { key: '22c76486783d4867f59764ccf7291b362a1bcf8c' }, "A"), h("th", { key: '833189c4e05483cc26c4fb8d5b6fcb574b4ac2b0' }, "C"), h("th", { key: '7fdb45cdde7a85a9c68f738183d203abc2ebb5b5' }, "I"), h("th", { key: '00703d4a32aded475d3427c894807fe5b1fa1998', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'af659426742561599fe60658618b5065f75bd898', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'ceb13eeec7d723df45bd41320aae48e9b7224811' }, "Housekeeper"), h("svg", { key: 'a39da7e8d4b609bf91b7ada23643c7c354046ea1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'dc68d45f2b5db536af0691ac8cc776595ca49783', d: "m21 16-4 4-4-4" }), h("path", { key: '344803d6de72c0a4ea21240edcdc14666c09a88b', d: "M17 20V4" }), h("path", { key: '9b607e515c6a80a0c2cc1ec13462b7bc3bfa9870', d: "m3 8 4-4 4 4" }), h("path", { key: '7684ce6b3c08455e9b32ce7d4615f5c62a998224', d: "M7 4v16" })))))), h("tbody", { key: '8fb17875f9f57e19522bbc05de18bf0ef71641df' }, this.tasks.length === 0 && (h("tr", { key: 'ffe58a52565b5d16448111f5b033d471ab105a53' }, h("td", { key: '83afca000a7d7de937aa5bb10c92f9e3db14139e', colSpan: 9, class: "text-center" }, h("div", { key: 'e02d2bb3ea5770f8fe68586bbd979b02b23defc5', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '113fff3d56acb4f9a4419ea423887a25ee4447df' }, " No Tasks Found"))))), this.tasks.map(task => {
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