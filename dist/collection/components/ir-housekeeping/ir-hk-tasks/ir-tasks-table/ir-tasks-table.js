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
        return (h("div", { key: '79e046c9920ce1aeb711ce004deb60597c051dfb', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '6d284d944fd8f5493e2da6381d87a6a7ff61ecb7', class: "table " }, h("thead", { key: 'b3328f2f394d6f3c076473e79802022564f0dcf5' }, h("tr", { key: '7847418aebd491145e66d0f935f27a22f6f3d109' }, h("th", { key: '44071f11d4cff84dcbc77b0d6ad08eae2250216d' }, h("ir-checkbox", { key: '2538974e104c7eea7b809a8f8b44410d8ae4f58f', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'b0c8ed9e2fa81ba9104b8395b0baa81e9a962019' }, "Period"), h("th", { key: 'e73fa2dc8425334930a65674fcb696bfaab290b2' }, h("span", { key: '65fc5021e7d3f485d3c5eb55a25eca750fe6d393' }, "Unit")), h("th", { key: '7b15770b877e2a52ad54b6517fe7a6438c242233', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: 'df5609bc4a91e32c8c340dd5795e1e9f5a1dff7b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'c1ce0abbbb8e1e26abeeefd36125314e4ae95914' }, "Status"), h("svg", { key: 'c0deb0794b9a785fa32328e67ceed261c3cfc3bf', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '6782bfbfc17bf73b3123009e117ae028eb7c572b', d: "m21 16-4 4-4-4" }), h("path", { key: '2522d7ea838d43ede7a384275c9b0834a04190c4', d: "M17 20V4" }), h("path", { key: 'f9e191e5c0f0feff51e6cea028934992d14e89c3', d: "m3 8 4-4 4 4" }), h("path", { key: '829f059eae8f2f0113160fe798519ece4e26c8e1', d: "M7 4v16" })))), h("th", { key: '7070a3b2d3f689ed2815ce0091d18b12d83c3ea4' }, "Hint"), h("th", { key: '9bb6fa3c6df0d4351b88d30117cabfcc3da425fc' }, "A"), h("th", { key: '381d78abaee03e9e39091cbd8a845bb7bf6ba91d' }, "C"), h("th", { key: '0f855dace3e3118104c9ba63490793a609ef379f' }, "I"), h("th", { key: '7f83ece82ea971169829d72105b6b0e91d58d52f', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '1ce5275be4bf759dd61ac7fb82813b17ef6f329c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '170844e96fd29c63357d2d737795c8c21f7a7344' }, "Housekeeper"), h("svg", { key: '3c0eb85611fa6d74f4147d071f3395cba8f8900a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a0e5c5b47248047a27d0311dbb07cbb84ab9246f', d: "m21 16-4 4-4-4" }), h("path", { key: '02496015617825c3f845f38c9afcbf80a13f14fa', d: "M17 20V4" }), h("path", { key: '045590d6e67dd598aa4165fafabd3a3066c77f34', d: "m3 8 4-4 4 4" }), h("path", { key: 'd35d0904094f955466e6b8600fd8608832bb914c', d: "M7 4v16" })))))), h("tbody", { key: '11306bafe695915398bbe9f4ce983382b7945353' }, this.tasks.map(task => {
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
