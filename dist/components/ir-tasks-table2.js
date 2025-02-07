import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as housekeeping_store } from './housekeeping.store.js';
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
    sortTasks(key, direction) {
        const sorted = [...this.tasks].sort((a, b) => {
            if (a[key] < b[key])
                return direction === 'ASC' ? -1 : 1;
            if (a[key] > b[key])
                return direction === 'ASC' ? 1 : -1;
            return 0;
        });
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
        return (h("div", { key: 'a4bd4ff00ee9458ca4951ac7c3eb740c0b7c0e84', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '3d5bf21baa66a2c7a26c9151730d230c3ed5de0a', class: "table " }, h("thead", { key: 'a8cb2bdc12feb14a32162a3f202b5b1ca89c9f41' }, h("tr", { key: 'cff7a25b46501a626b902988d5311683de255686' }, h("th", { key: 'ed3f3d1ef33053827b7dea3b7c191837527b5cfb' }, h("ir-checkbox", { key: '3da0ccf89d2e5bd357f5646986370dc0b7b77e3d', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '611ac560e4f6971877f2162ceec5a33d9f5ea9e2' }, "Period"), h("th", { key: '1555688926c6915ac4717930af3f48bee1b7eb06' }, h("span", { key: '22422ac055418ee1714b3b86325100821617686c' }, "Unit")), h("th", { key: 'bd3af6a26ddb6857a6c2f6525696a363515dcbe4', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: 'dd6325611aa9f00dc29eff9f67889fbe7082da5c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '6d4b8e8b615708d7c6f4cfac4d3e95a454924089' }, "Status"), h("svg", { key: '01b8c606142cb0469dbc5f97c1f6e0da68c2fa8e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'ee07e20145e1a831545ede71e1afc90be28cda9e', d: "m21 16-4 4-4-4" }), h("path", { key: '990f10ab1f0e4485585ff5879d53a90494fe58c0', d: "M17 20V4" }), h("path", { key: 'afe9a0c4c7a6b5f70d52f46cc307ac58c876a3f5', d: "m3 8 4-4 4 4" }), h("path", { key: 'a6f68a29a540b8cf55c6352df38bce489c3c852e', d: "M7 4v16" })))), h("th", { key: '4881772878c32210fda6f8e4701410ed798f9674' }, "Hint"), h("th", { key: '20567d382a6b213cae5652542aa8404cf8b9d92e' }, "A"), h("th", { key: '13038bb00f2d3ec176b73d7912673ca75f411880' }, "C"), h("th", { key: '116d9ba5de4272e2e59ad68643989204814a6d09' }, "I"), h("th", { key: 'f5d4bf052510f6774e34ecb2cc2bad7d7038b349', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '0eda7e97c8ff4aa175901d25762d6f5e50b57e95', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f2bbac3a877717d6b76429a1d42b9a2826075aa0' }, "Housekeeper"), h("svg", { key: 'c2bef19cc3d3e2660178a50ce7ddc331b89d6423', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1f47aab68b38a174fd064300cc038d93b2c97b89', d: "m21 16-4 4-4-4" }), h("path", { key: '1a986ee5af72774926e87127c60aa8e16724ec7d', d: "M17 20V4" }), h("path", { key: '3613341a06d7ed7d7550bf2a58698960e2b2585a', d: "m3 8 4-4 4 4" }), h("path", { key: 'fb4f62342894a4115b615c879835bdf0517c2c2f', d: "M7 4v16" })))))), h("tbody", { key: '6193e9a53d0feb9087d4665070aa92ab48ef44a5' }, this.tasks.map(task => {
            var _a, _b, _c;
            const isSelected = this.selectedIds.includes(task.id);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, task.unit.name), h("td", { class: "task-row" }, task.status), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_c = (_b = (_a = housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.find(hk => hk.id === task.hkm_id)) === null || _c === void 0 ? void 0 : _c.name)));
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