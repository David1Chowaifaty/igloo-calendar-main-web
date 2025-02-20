import { h } from "@stencil/core";
export class IrTasksTable {
    constructor() {
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
        return (h("div", { key: 'efce2880f3eb4efc93508e5f29681203ddccf03f', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: 'ef777af10ef1a8a3de79925e06657c2b3bc17402', class: "table" }, h("thead", { key: '6aa1600f9d6410bd3a787d917b00a47250f154e4', class: "table-header" }, h("tr", { key: 'fa6fae8180807a5f01b6071da33020b84ca6f76f' }, h("th", { key: '4e0e0122ab9a5d8b668a37cb803334ad1dd0807c' }, h("ir-checkbox", { key: 'd7c3221702ed2a7cf14388d877641f0297d8b80a', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '5747791a6934bb4c6874207c4dfff284262a6bcc' }, "Period"), h("th", { key: '44bc830ab976da7f3b32dce5a217f671b5a363a9' }, h("span", { key: '36f805d7f9285824f2808f81370f57ebcb6fa267' }, "Unit")), h("th", { key: 'eadcc79eefa1e88813c3cd01287fc1e7033b31c1', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '0546ffbb627ef3a2cb2b73881aafea9b85000cd4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd90c2b8155fa208a4c1fe69c2264285a5e825dad' }, "Status"), h("svg", { key: '39d808bab5b0759feefdd0a88f496b2bbdd048ef', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '221edfbaaac0c405ea4bf0d398d48d5dec5f61c6', d: "m21 16-4 4-4-4" }), h("path", { key: 'd75236b106045a0c775ab0eaf3fa196125d7988f', d: "M17 20V4" }), h("path", { key: 'ea091683a5e2d74be80f418037c7dc170bc6d1a9', d: "m3 8 4-4 4 4" }), h("path", { key: 'ba5ef2c8bb16d330ea70ecf12671e4569075c00e', d: "M7 4v16" })))), h("th", { key: '7d1a031260882acf95b1a11ec2b7f8f6bef46cee' }, "Hint"), h("th", { key: '08338436a75911c85f253e6be3ebdf75cd84a89f' }, "A"), h("th", { key: '1723e7f30fb8690faad8917a8f4d78bfd1f2053e' }, "C"), h("th", { key: '644c6b85e1214636343361248ddae88330d2357f' }, "I"), h("th", { key: 'e0b9f6ec148ccc7f81b7a500f5ec0d97645298fa', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'dc78248c54cdf52c5ffc00dc20cea0fc25781674', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '0f59d0a39e12bc1f58685f87a21ae1bfeee1b339' }, "Housekeeper"), h("svg", { key: 'ada559e023b26690acea53ddcea31d89ed34ad6d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'ac5b4af7515b2b2a843607c99b7022ce65f7c0ee', d: "m21 16-4 4-4-4" }), h("path", { key: 'f04f39eb8b7160d6a36a0e00b205ca5f54b42e8c', d: "M17 20V4" }), h("path", { key: 'ec3b53a2755d37dd262559c4f3db82461edf4e8c', d: "m3 8 4-4 4 4" }), h("path", { key: '0dcf830210fbb93ef712761352aba59f2808f7c6', d: "M7 4v16" })))))), h("tbody", { key: '6b4e1c497ccb63c6d4c36bd7ec10c4e207e08841' }, this.tasks.length === 0 && (h("tr", { key: '381e634e05da7219c882c900800b51d45531fbdf' }, h("td", { key: 'aaee2df2a919bcfdbe29ff748091c9d1fadaec73', colSpan: 9, class: "text-center" }, h("div", { key: '63e5b66e9adfcaa959701809cd03de8e7f027212', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '94c856f16ac159d89072cd033e36f9d59a2e83e3' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row" }, task.status.description), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
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
                "getter": false,
                "setter": false,
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
