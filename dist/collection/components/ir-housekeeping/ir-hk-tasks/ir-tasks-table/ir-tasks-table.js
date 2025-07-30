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
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '266a5ada549a677a884a4bb153856c64388a6a54', class: "flex-fill" }, h("section", { key: '1bbe7d84d3570d0860cd43497b3c7ca43710e524', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'c372add9b1b5bc072afd26d2cfdbe38ccd016290', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'b59ac829455172195aefb4e0d885e37ff9c27c3f' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '188736a78095edaba632b443b14cc1894bd8586e', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'd6b5a569a2294f2e083730f9dd27b1024df31fdb' })), h("div", { key: '4cd8fddc0c21110928b6cca71339f81ac6a56269', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '0b8be1e65f1794c09485582be72511869f845a93' }), h("div", { key: '0f6fdc4956c732967b77c6d865bb050fef555faa', class: 'table-responsive mb-auto' }, h("table", { key: '75f1995e68cd06f926fc0ef03afdd7f4486af04f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '623f523ee8172d8aa2f8836d48dbc0c3dcf028f7', class: "table-header" }, h("tr", { key: '5b42ad624646a09814d84e1ba2aec2edb93598cd' }, h("th", { key: 'a480af1b4fe48077a35c6268990d00b2d6f5d5c6', class: 'task-row' }, h("ir-checkbox", { key: '9f8b3b15b2485d73bfa762e3ca9d6457abd5f00c', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '1ddf915271a5baf242b7d940d183a7912ae65dbb', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '9f383135246006eac0a3d20c06579f662a7c78f0', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'b9e6a672437dd1367f808135f543b48f844f1305', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '5278b675a39ebcbc7de7f53847444727878fa989', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '4d1b4e9b7d34134f60579aa3f65f4f84d8c66613' }, locales.entries.Lcz_Status), h("svg", { key: '4a7cd8089862e5ffc91201241d6e50e0c538261a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'bfb7892c50bc9a3fcb8580291b128d06c691c458', d: "m21 16-4 4-4-4" }), h("path", { key: 'bcfc995e2667d6328804358f55cf7669c180d639', d: "M17 20V4" }), h("path", { key: '1bf67e8953e2b7ade7b8158f206cc16080cdf87a', d: "m3 8 4-4 4 4" }), h("path", { key: 'd74e773a5e67a803370c15c4d9632a6a8eefa4e5', d: "M7 4v16" })))), h("th", { key: '20ee44b8def26a0bd516589ff6c1c3df792968f0', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'b7e1bc2350b847810dc35b6953aefc862299fbd6', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'c8824a59d064ab6bacaa705cea38dccb30434d16', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'd2eae6fd1a1f159a406e0758903ce6d801382a26', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f6f19cb86a22d519522e953085f0aeea42504b74', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'bfa072db73950f67d017e03b556a37b50cd3093c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'c752a12d7c4501381ad8857a1ab2e35d1113f776' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '59b63bd36ec8ce1039bbc7ab40b2d0de00855d0d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '5e20f5c4f7276e8a39679e3be8bab0fc1734722f', d: "m21 16-4 4-4-4" }), h("path", { key: '55546a843f7561b1d9d9016d92b45fae5e2aa0da', d: "M17 20V4" }), h("path", { key: 'aeb38519f55eb3e246e7b23189e731dd94185d24', d: "m3 8 4-4 4 4" }), h("path", { key: '6df91878661ab754c0b05023554d1bdfc91f6e7d', d: "M7 4v16" }))))))), h("tbody", { key: '931b615b5bd2dd3f715089a9a4b9f53f8d0f5854' }, tasks.length === 0 && (h("tr", { key: '7f7b8754b5c5911449a4204de4c1100547ad8946', class: "ir-table-row" }, h("td", { key: '457e179f456de9295d4d4775fce8792c41ca7bfb', colSpan: 9, class: "text-left" }, h("div", { key: '2b328dd68b3ed4bb1ef650175d2ae576f2c1296a', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '02f1b5901d9c3b6243c2a7b982bb879c65d0ea28' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
            })))), h("div", { key: '14c9a7185cedc61a8906fe69e6603339ea10fd99', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'c0547c2b5a1cfe6f96c9df725154843d01d8b417' })))));
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
