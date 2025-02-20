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
        return (h("div", { key: 'efce2880f3eb4efc93508e5f29681203ddccf03f', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '82e6e26c6e491aad39b48da63f9520e54f7f4a42', class: "table " }, h("thead", { key: 'd1cb6da04b3c8b618c2160b6dbfdb7c36de9bacb', class: "table-header" }, h("tr", { key: '550b1f7bd0adb1edbabf61494ed6aa907586abe4' }, h("th", { key: 'c4895e9579129ebbc3adf11861cd8b2eec596ebf' }, h("ir-checkbox", { key: '698ac48358fb4e57d49c95e5d10f3cb1039ab924', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '32ebc44d3905986db5ba8547e46aee2d6a9f38c9' }, "Period"), h("th", { key: 'a9ee1f0e5b900ec53585b5de87772db14a3aaaac' }, h("span", { key: 'c81666ae9a91e825dc31a9bc42fa710545a659f9' }, "Unit")), h("th", { key: '0b1d1f79c6c513ac22a42784c917456d9be0f62f', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '6460b4fd3cb554a05ed03686b22789d5e14649b7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '0858907df328a3fe3ca5fe2a251097aa43eed668' }, "Status"), h("svg", { key: 'ef03ad0b04aa48685ccbbe84b61795c2f27a91bf', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '2be59f02868b3ec0ccfbc19dc89e8358efa08345', d: "m21 16-4 4-4-4" }), h("path", { key: '7f775b5b99f8236f269862f92078ef123f1f6f18', d: "M17 20V4" }), h("path", { key: 'd0e2e20fefbd826143158a074fe6f2d5d49b6aa7', d: "m3 8 4-4 4 4" }), h("path", { key: '8072d6c0bcc9ec2ea3578a3b2ee584ed2947aa0f', d: "M7 4v16" })))), h("th", { key: '19a00bc94d339dbd1b59abd9c97d30f3e2faccbd' }, "Hint"), h("th", { key: '5de05fa8ec5300e8ed18d8ec7b2a7215462920a0' }, "A"), h("th", { key: '0be5aac4036dc4ce46d0a88186eed7312d9c972b' }, "C"), h("th", { key: 'df7b9e797ddd42e18339e1f3889232148c528683' }, "I"), h("th", { key: '7a03836052804dd70cb677feae7f7885b2367896', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '435073a90ad7e8c967da3e0c84e521570239be3d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '61aaaa3017ef39b00714171b576b8ee476e6fcee' }, "Housekeeper"), h("svg", { key: 'ce7fb7d428039fed5d223eba1a34fb2a5b481ffc', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '63066203c099a2df3c21b0b3e04f18757b370c8b', d: "m21 16-4 4-4-4" }), h("path", { key: '13f9891952ba5ca728f5d9c4e952adf68398e504', d: "M17 20V4" }), h("path", { key: '76cb3fd9f3a397955e191e21882e17d21e6385d1', d: "m3 8 4-4 4 4" }), h("path", { key: 'a0a5bb37459c7023a6bd92479a0713a44385ead4', d: "M7 4v16" })))))), h("tbody", { key: '051e21b3bf5c890185e4c5714c759c04f711b2ec' }, this.tasks.length === 0 && (h("tr", { key: 'ff2b8ecb326b6765d92975cee5439fc1aeb8a04a' }, h("td", { key: 'ea31ae72fcd81dbddf17a73ab4fe2ba092c9b323', colSpan: 9, class: "text-center" }, h("div", { key: 'd503518589b1fa33268cfe5a1e8affd23eff0139', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '24f9a34e6ac9acde07822facc9c5b2d890e6369e' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, task.unit.name), h("td", { class: "task-row" }, task.status.description), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
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
