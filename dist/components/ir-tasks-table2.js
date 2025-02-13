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
        return (h("div", { key: '2a231f69e97dc0b7b0723ac9777ab9065ee98170', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: 'e0a02ae37aad96af22a8303bd28759744da1fcae', class: "table " }, h("thead", { key: '14312487c9dbc6f1ae2ef0673dbbf56271427b23' }, h("tr", { key: '4dc14dd5fff2975303de5dfa806be2a591f9178f' }, h("th", { key: '062345bbbf6dbf0d295b36aeddff640bc3f1d16b' }, h("ir-checkbox", { key: 'cf6de3ae06aa0097536885f234fdc934e7200add', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'b6fb6914b16d723f53e381843bd89b2c6eb5c5cd' }, "Period"), h("th", { key: '20b23d77de58dff595f1046dc5e262e3bde23a36' }, h("span", { key: '843a80d332754d3bf6d4f3061ee18a267f330776' }, "Unit")), h("th", { key: '1fa6f6218735d4d08b96f54508892db1480a50bc', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '785c2ff7b4cf51698c5654393cf3a747f605b65a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e0c88c11c8a2abdd455d35f894cd26a462a3d338' }, "Status"), h("svg", { key: 'aa8aa5b273a9f75379c4d835344d1f416470a5ff', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '72aa8ded827f3ce53743b934b24b0205c62f9aab', d: "m21 16-4 4-4-4" }), h("path", { key: 'd430489b8aa05ae923115a584f8319842343347c', d: "M17 20V4" }), h("path", { key: '8ae29f0eddce87d19e00ab75e63a4a9a4fa5a45b', d: "m3 8 4-4 4 4" }), h("path", { key: '0eb17f676c746460c691b27ae10b5db360e4d1c9', d: "M7 4v16" })))), h("th", { key: 'e49ef87e98f53244429101449882c8c586c2415d' }, "Hint"), h("th", { key: 'fb4130cc06a9306b7f5f94d27f76ade9b01acbf1' }, "A"), h("th", { key: '698b4bd3111191cc7da0fde0b69c981554b33519' }, "C"), h("th", { key: '98927531b4077dc20f3679f84728944adcaa0c1c' }, "I"), h("th", { key: '92432c55e059f273512b86b413ab4949ee25388a', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '0aa2f3c7fae99ce686e01adea494ca16249d82bb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '9b2b7eb5782222a234d6222bb2607a4fc1b5834d' }, "Housekeeper"), h("svg", { key: '55fa7b1d0792e6a4432587de3bf136d098b4830f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '7fa6675293a100cbbdc3fda064cf19348e8a40aa', d: "m21 16-4 4-4-4" }), h("path", { key: '572b5d5cd21f4171364f8b9176f58ed10b8e6a94', d: "M17 20V4" }), h("path", { key: '86e2ca9647f3eba3b531d41817c33c8e502443f5', d: "m3 8 4-4 4 4" }), h("path", { key: '9cbabed9adf005963a4ed34ba5b2712ac423154e', d: "M7 4v16" })))))), h("tbody", { key: '243eded43e9fc2a37563b25bbf90489fbcfa8e65' }, this.tasks.map(task => {
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