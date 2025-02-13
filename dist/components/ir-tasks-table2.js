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
        return (h("div", { key: '25b5fc05dc0c5e2cff953d01af66a4ef23a84f43', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '17a3aa8029bf6be0ddc85a8f7178a1de7374b7e7', class: "table " }, h("thead", { key: '2fb5e070c435c73cf00f85e18e6204fe634198d0' }, h("tr", { key: '16119ace4803b6c425a7e5ede7b047e4ed39cbbb' }, h("th", { key: '7444dae4b7c5a64548065725258eb5ed603ee87c' }, h("ir-checkbox", { key: 'dc11a4475d5ca9e3fc6647c3d70ab06fa120aab1', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '448c382938f8917289ca5515d51539c89858a232' }, "Period"), h("th", { key: '608badd4300c47ffc7407560441f09166de9240e' }, h("span", { key: '3ffd1d49ac0d11bc72ab9e10a0825e74e3a3564e' }, "Unit")), h("th", { key: '490cd64b8af1a9584cce1764085b79468b8d50ae', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: 'cb7677c9ea55bec473905d6a91d90316610ace0c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '01bc91ab3a261a27fd6768203174412c7fb46f10' }, "Status"), h("svg", { key: '9c84e5fc83cb7150ef208a077b51d542fbc09889', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e697de954bd6d396c6961bcf5fbaa75167ecfcfe', d: "m21 16-4 4-4-4" }), h("path", { key: '5903184d8bd083bfb062aac62b761f91855313ea', d: "M17 20V4" }), h("path", { key: '17377542bd88c50d7fea70fe9ef2dbd6c378a63e', d: "m3 8 4-4 4 4" }), h("path", { key: 'ac741050967b1ef3f1b0d9f7c5f943d5a8e81399', d: "M7 4v16" })))), h("th", { key: 'd117a5c23facc9957e787f38583a6697f4458611' }, "Hint"), h("th", { key: '81e974891cd2052cbac859f57122e5e0b9de5f4c' }, "A"), h("th", { key: '749632a916d4928644b4cc7037bc3ca1b0950af3' }, "C"), h("th", { key: '22cf3d18391a28deaa13fff7e2b09d3662067a05' }, "I"), h("th", { key: '38e1310c6e5e83a16a2a6e6bd700d1d9ae194934', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'adeff533a7a9bb7d02426dd6b2889205187a6cbe', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '336c3531f0831d9e2629b7fa5d2b3de422aa98ba' }, "Housekeeper"), h("svg", { key: 'e4952802e16194f7b2a025ab27824eccd74bd095', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e37a799ae2485625a5e6d8a9fc016045ec0a5a93', d: "m21 16-4 4-4-4" }), h("path", { key: '5717e7dabe2cd8369536becf0595d257ebface09', d: "M17 20V4" }), h("path", { key: 'aab161d8180675ba9573d053627564d55a5d2a32', d: "m3 8 4-4 4 4" }), h("path", { key: '69302cb54d716c1bdbb0a8c858ebb232d8c6a9f7', d: "M7 4v16" })))))), h("tbody", { key: 'ef50dead269bd21d5bd030e3febe39a2bdd47778' }, this.tasks.map(task => {
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