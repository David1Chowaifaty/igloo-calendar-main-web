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
        return (h("div", { key: 'd3af61722aee26b7482ff5b1bf3037b4879f525a', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '58d6445764115ac20d8e6ef89b97b7623edc2097', class: "table " }, h("thead", { key: '5518c59a9630884795bc6ad7f78334d873716d1f' }, h("tr", { key: 'f5e77bd24c59718cea5504eb1e1a09901382959a' }, h("th", { key: '5dcc5d071de50e7117c23a211a3b494103c3c50a' }, h("ir-checkbox", { key: 'ea08bad773e187a83ab61fa3c576a27c9be95ada', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '3612c6edc032ed732b39458ef4a981b03f249667' }, "Period"), h("th", { key: 'b34098fff04987fc33d4ed23c32a9b8b5e8cfdf3', style: { cursor: 'pointer' }, onClick: () => this.handleSort('unit') }, "Unit"), h("th", { key: '147e1a4ac89448d4f10ca7f489bc7877fafcfdee', style: { cursor: 'pointer' }, onClick: () => this.handleSort('status') }, "Status"), h("th", { key: '04af4d698eb121562b4397db1b2d146f92d86fc4' }, "Hint"), h("th", { key: '2b29d91ebd3c7bebdc561fd56211fb4cc403bb87' }, "A"), h("th", { key: '3aebfad32457dd15b39d5fda4ea6158383c26ac8' }, "C"), h("th", { key: '4a4f311ff29e4069e24cbe2cc0706100cd0f955d' }, "I"), h("th", { key: 'f41875afcb1fd7b7067df743df883889392ac2aa', style: { cursor: 'pointer', textAlign: 'start' }, onClick: () => this.handleSort('housekeeper') }, "Housekeeper"))), h("tbody", { key: '7be5c2eb73626061cae26433820bda5dc1119ca6' }, this.tasks.map(task => {
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
