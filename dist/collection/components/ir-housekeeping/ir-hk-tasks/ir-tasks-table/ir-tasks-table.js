import { h } from "@stencil/core";
export class IrTasksTable {
    constructor() {
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
        }
        console.log('here');
        this.animateCleanedButton.emit(null);
    }
    render() {
        return (h("div", { key: '945b114a2ebc7a7c7820cd601dac115861be97b2', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: 'abfa8cc06ed8983d9cc67b8d97b55a61550567bf', class: "table " }, h("thead", { key: '093000b25ea111ac80453e2a990ee65f54f534e5' }, h("tr", { key: '2b27b7261e1bc63f81e0861399dfcfbdeb1effde' }, h("th", { key: '298fe720fbd074492c425eae36c5d97cffbb6e35' }, h("ir-checkbox", { key: '652336fdd11da7e539cc800a769d159625e18519', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '28299004cc0f57f9175c9e2f579656ce1f762dad' }, "Period"), h("th", { key: 'a1295c525dc9fba0114cfce9dd6032c53bfb1336', style: { cursor: 'pointer' }, onClick: () => this.handleSort('unit') }, "Unit"), h("th", { key: '55391c151e7f47cea1c34f6618224aa519f20a9e', style: { cursor: 'pointer' }, onClick: () => this.handleSort('status') }, "Status"), h("th", { key: '573f54c870d00a5dca189d7b78e0a3c42d4a1986' }, "Hint"), h("th", { key: 'e5f7ff551429e835a6b54232132a84413b644ce3' }, "A"), h("th", { key: 'abba8a0529079a3d62fc204f1199e7ea0c70f073' }, "C"), h("th", { key: '0494efbd76e93fd9dcd8f66f9ef5a84781e8754a' }, "I"), h("th", { key: '265df50810321146fbeb3536499518f859ebc586', style: { cursor: 'pointer', textAlign: 'start' }, onClick: () => this.handleSort('housekeeper') }, "Housekeeper"))), h("tbody", { key: '22cb826bb0567da5fd0edc1d3c4e733f1db33c2d' }, this.tasks.map(task => {
            const isSelected = this.selectedIds.includes(task.id);
            console.log(isSelected);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, task.unit), h("td", { class: "task-row" }, task.status), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.a), h("td", { class: "task-row" }, task.c), h("td", { class: "task-row" }, task.i), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, task.housekeeper)));
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
                            "path": "../ir-hk-tasks",
                            "id": "src/components/ir-housekeeping/ir-hk-tasks/ir-hk-tasks.tsx::Task"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "selectedIds": {},
            "showConfirmModal": {},
            "sortKey": {},
            "sortDirection": {}
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
            }];
    }
}
//# sourceMappingURL=ir-tasks-table.js.map
