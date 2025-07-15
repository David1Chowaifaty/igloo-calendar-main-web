import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import { hkTasksStore, toggleTaskSelection, selectAllTasks, clearSelectedTasks, getCheckableTasks, isAllTasksSelected, updateSorting, getPaginatedTasks, getMobileTasks, } from "../../../../stores/hk-tasks.store";
export class IrTasksTable {
    constructor() {
        this.tasks = [];
    }
    componentWillLoad() {
        if (this.tasks && this.tasks.length > 0) {
            updateSorting('date', 'ASC');
        }
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = hkTasksStore.sorting.direction;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (hkTasksStore.sorting.field === key) {
            newDirection = hkTasksStore.sorting.direction === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        updateSorting(key, newDirection);
        this.sortingChanged.emit({ field: key, direction: newDirection });
    }
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        clearSelectedTasks();
    }
    handleTasksChange(newTasks) {
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
            clearSelectedTasks();
        }
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(task) {
        toggleTaskSelection(task);
        this.animateCleanedButton.emit(null);
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        this.rowSelectChange.emit(hkTasksStore.selectedTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return isAllTasksSelected();
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            clearSelectedTasks();
        }
        else {
            selectAllTasks(getCheckableTasks());
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    /**
     * Determines if a task is checkable.
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {Task} task - The task to check.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    isCheckable(task) {
        return moment(task.date, 'YYYY-MM-DD').isSameOrBefore(moment(), 'days');
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '2374d80f19ece5fb1afcf031c7f63b4b0459ff51', class: "flex-fill" }, h("section", { key: '0f438fdaa0632b60422f67e2ed42ce108e5c1724', class: "mobile-tasks-container flex-fill" }, mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        })), h("div", { key: 'd8d291d9654b42d736f098c0342a871ae2ee5137', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '77cdf1f91dde0a4c0937f2cef07a4ff82d0b6458' }), h("div", { key: '2142b55d7606044095e1a301d6cbb9bafd108a3b', class: 'table-responsive mb-auto' }, h("table", { key: '7dcd836e3d199898918cf350396f7870ce9d6e88', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd95aa49e8438b8d24235ad34c15490e2df53e538', class: "table-header" }, h("tr", { key: 'f96c41c4e995590a297230fe016d30112757f88b' }, h("th", { key: '6230d84786858111b8f1d67437945c1def386424', class: 'task-row' }, h("ir-checkbox", { key: '4a31444172f4fefd995a0e16d1f5f5d2dfb7aa44', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'ff2f1dc7d1a2be744f116bc55399b0782c67c5b9', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '9e549edaf1c348da52d42dc44c880358e0d6b2c7', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '3556a4ef2fa7f7b7b33088a5eb5e7b3195480788', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'cc118d8242bf0a3cb08ecf35dcc043f433ee9b33', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '71804ca808ed43cca1511a92685a1a2d590ab16a' }, locales.entries.Lcz_Status), h("svg", { key: '3c2deb8c3aad84d4172e2813e408a3f38fbeaeea', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '955e8cc5549231a60edf141d4e42cabdc59ad093', d: "m21 16-4 4-4-4" }), h("path", { key: '159c4276499ba6667a8f9c749ba9950d609876e1', d: "M17 20V4" }), h("path", { key: 'a99f11ee75cba4562077dce321673a842c9ae379', d: "m3 8 4-4 4 4" }), h("path", { key: '1e3fad02f74aedcbc87ed2e6ee173060d8ace6b4', d: "M7 4v16" })))), h("th", { key: 'c1aea827b9167ab6674aeda8a37d0af76fa3dd60', class: "extra-padding" }, locales.entries.Lcz_Hint), h("th", { key: '82efd58868a680fcb4bbd9a2ec789915d7c50832', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'a0dda92eeaac2f9ca0f4b3e80c69a1c6f3c6cacd', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'fb85163f85bd95b116c48f98f91a39fa24949b52', class: "text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '351bc83ac155269d1cace5e491f4b0d85e28ee0f', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '2abe20b4b6455aed75a9595a6e125b21b545170a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7404cf5129b9690b268010bceba2a579a376e6cd' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '771d342f9943e4ebb2c1d7c860b7948f3c3d90c1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1a7132e1789d3b14484b1d3d50bff0a7c2e8dfc2', d: "m21 16-4 4-4-4" }), h("path", { key: '509e184a1ccee5817e52a06119b0551bb1d82583', d: "M17 20V4" }), h("path", { key: 'dc83f666a57cae04361ca27d7eb40a3086c042e7', d: "m3 8 4-4 4 4" }), h("path", { key: 'f6365de1d2d40260b22ed715ebd9063111a9b112', d: "M7 4v16" }))))))), h("tbody", { key: '3ccdc09388cc1429889b5ff0ef77e1dfb8f9e952' }, tasks.length === 0 && (h("tr", { key: '386c9609a4fd2ae27e1c679cc1a58cd2e5a9c196', class: "ir-table-row" }, h("td", { key: '626ebfbce0d7005bb304dd8d61b62878e8c238b7', colSpan: 9, class: "text-center" }, h("div", { key: 'caab3601395195dbd9ac716433abc08cc6d33ecc', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'd60fa45eefa09c1896e1af97636f29ace7d63774' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding" }, task.status.description), h("td", { class: "task-row extra-padding" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
            })))), h("div", { key: 'f19f0e4f4f285b98c34836a309af48bdbff2a5ab', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '727b2b63288240a4a7dfe71b7f3fcb9f7825aadd' })))));
    }
    static get is() { return "ir-tasks-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-table.css", "../../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-table.css", "../../../../common/table.css"]
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
            }, {
                "method": "sortingChanged",
                "name": "sortingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ field: string; direction: 'ASC' | 'DESC' }",
                    "resolved": "{ field: string; direction: \"ASC\" | \"DESC\"; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "tasks",
                "methodName": "handleTasksChange"
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
