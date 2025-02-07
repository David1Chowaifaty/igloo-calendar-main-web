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
        return (h("div", { key: 'afeb991986b1902f34678a881fdad8ebb7d4f5b5', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '40deb9958061a52b75b359715078d1b23edec44f', class: "table " }, h("thead", { key: '1e6697907c09215763b42246e6e5d4fb3c56eaa9' }, h("tr", { key: '4c926c1b7c91306128a0b263c24c9339d7b6a9a8' }, h("th", { key: 'e2868e6c3d3078abe7b1c6dd24ccf9c815db515b' }, h("ir-checkbox", { key: '4a91baec0afe02f3b52ad86511d23025c0f96be3', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '209dcde29bb36bea3326ddb3f21abdacefbb337a' }, "Period"), h("th", { key: '648621d43be3896b17ec53757797621b51e9acb0' }, h("span", { key: '4c0e395bf53e1787b66cb6bc99b90192dae487df' }, "Unit")), h("th", { key: 'e0b2c52feff151c0f465113c5b572928a911629e', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '13229562e6210ffaf8524d5e7abff79d1a8ff4cc', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd2093ec9de352e5a1e04520d46d7dd5600eea35a' }, "Status"), h("svg", { key: 'aca2c260f901e99c8bc4e9a9f90eacfb5a2b4fdd', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '5992842c80299db6e0a638223780127712fcb9f5', d: "m21 16-4 4-4-4" }), h("path", { key: '553e00da64d38e499901245eb5b3bd1041711035', d: "M17 20V4" }), h("path", { key: 'c169c79986ce44e0d1494bfea3b18ab07524d0d3', d: "m3 8 4-4 4 4" }), h("path", { key: '3d383dfc4ac42b7f1e5ecc37d8ddbcfbd0174eb0', d: "M7 4v16" })))), h("th", { key: 'e3360c7697f677e602314dd6371d3d3cf1613aaa' }, "Hint"), h("th", { key: '6331fd5c6b245665231d2b7573ed1b554bdc9e06' }, "A"), h("th", { key: '5a9ddfbc27e445598fa0a0d82172adb85e8849b5' }, "C"), h("th", { key: '9981dbc8ed1ac9a0cf32173c3f61d3f516fcd4d7' }, "I"), h("th", { key: '1b3267d0bd8c6bec34e3d4b0f425b64f92864f39', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'd5186486e3c69490b589f4635dbfdc8583bf9cb9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '925499096a167127cf4304e87895ea04e1b19b91' }, "Housekeeper"), h("svg", { key: '009435c6bc4fec33e492352b6214ec8a8709ca58', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1ace8f3f8c708433cef9f555e3c9a41954594b1b', d: "m21 16-4 4-4-4" }), h("path", { key: '78185f3441312b7d67a9c4f3d8897ffb32b5501b', d: "M17 20V4" }), h("path", { key: 'f7a0e30c3dffd3a4cd13e4d1f63ad7cf7bc5ab1b', d: "m3 8 4-4 4 4" }), h("path", { key: '90b884a9d52f9b1a7b4d7d63a163df444e6aa364', d: "M7 4v16" })))))), h("tbody", { key: 'ab31a0adaee304826de4b4cebd491cb89a8ff8b3' }, this.tasks.map(task => {
            const isSelected = this.selectedIds.includes(task.id);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, task.unit.name), h("td", { class: "task-row" }, task.status), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, task.housekeeper)));
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
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
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
            }, {
                "method": "rowSelectChange",
                "name": "rowSelectChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Task[]",
                    "resolved": "Task[]",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "clearSelectedHkTasks",
                "method": "handleClearSelectedHkTasks",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-tasks-table.js.map
