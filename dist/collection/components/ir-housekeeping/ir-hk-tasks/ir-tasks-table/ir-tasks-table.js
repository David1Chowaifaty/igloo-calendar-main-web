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
        return (h(Host, { key: 'e6e873ca49ea06518d25d4a35b995c9f9c61940b', class: "flex-fill" }, h("section", { key: 'b0e132be384dd8c338efabb5d7f537cb1cde848f', class: "mobile-tasks-container flex-fill" }, h("div", { key: '83e8fd157be9bbb247457cb3bfed64e9bdf69295', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '6226f4754833fdca726ecbdb7402f2d0c18af9fb' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'eccf70d1558fdadacdf387a8d86e82f6738c05e3', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '9c35a3d9a2a48ea89612deded51a6fc2fa9cbe47' })), h("div", { key: '05aad27157afdd234c79e0ffb1645eaaa8828b5e', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'ffa1a7584a41da615a571ca8db0160ffb286b931' }), h("div", { key: '374d5ec38b590a7fc4cda407b09cac2e9e9db001', class: 'table-responsive mb-auto' }, h("table", { key: '572629f2437e992fbb04746dc56166f53abbafbb', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '19338f327063e1f190fea67f53b3652d20da77aa', class: "table-header" }, h("tr", { key: '3c7d3861d0b93166471641320edeeede0077da58' }, h("th", { key: '74afeb25fe3a8b22261958be65839d1ffafdd7b4', class: 'task-row' }, h("ir-checkbox", { key: 'b6e52bbeb6ec27db9ebeed48929914fdfd460fa2', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '81ceebcec089bc588cacea77f89df0895aa5c0f5', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '4a4340fd35679a642c1daeeb36249693fd93e05d', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'd6209308d813219cfa67f2843a24acfbe36333a7', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '40e70f80ad979dedc14d06af7fc973e130c65b33', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '44bf1000c5e74f37fbc3316e84183629bc4123d8' }, locales.entries.Lcz_Status), h("svg", { key: '8b67ee26515799fffabf98196cc3585f0c47f543', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cf83473bf1230b1ca2e2ae7760389851cca25ab5', d: "m21 16-4 4-4-4" }), h("path", { key: 'e2bb1ecff7a7838a2b51247892bf06c1e764d097', d: "M17 20V4" }), h("path", { key: 'f21d75be31fdd0a4a1fa7afc13b72e55645afb87', d: "m3 8 4-4 4 4" }), h("path", { key: '48a381997bd0aa3d7309ee1f1a68ce2483d244a6', d: "M7 4v16" })))), h("th", { key: '63e29d415ca67f067af12118d28b617e57580acf', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '8cf7e10231307262150b879c1a1c919c056bc531', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'e75db101e2c34c824ff62bccadae9c2cdd1e2af3', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '311aa21a37dc7d15cdec15e969624a3120d8e0f6', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'e83f6bb1e439c07e9a4f188b31eb1a09ce648bb1', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'cd087e5cf31141460882c5bf4fca0d76d7b5b774', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '2890cf221c2049d9f2de32c873b1895cd9f91305' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '067330671aa3de7cbf02236ca5c0717f152cbd74', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b8114ac008f9c4c4c27dfde24104a0849eb65c79', d: "m21 16-4 4-4-4" }), h("path", { key: '514fbc7cedc29ee978b0536851506d4f7ec284c0', d: "M17 20V4" }), h("path", { key: '52fb470830a4b37ec0f84bd2de0fa5a0bf1e1e5c', d: "m3 8 4-4 4 4" }), h("path", { key: 'ebc5d3d1d53422e40c2220f31bbc25e08ce175b9', d: "M7 4v16" }))))))), h("tbody", { key: 'c78f669eb68af3cfd82687a7027a68c29315fa9a' }, tasks.length === 0 && (h("tr", { key: 'e032eadbbddc45946e54d099067a2ce64ba80d63', class: "ir-table-row" }, h("td", { key: '2ee5670a80eda79c6adfd1156d8a1c90ba6e3dac', colSpan: 9, class: "text-left" }, h("div", { key: '0f6c80fea558066df8226d08ba46f01551e78d19', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '3dd26069f4e4579bbfc5c988fd983bd650dd1da3' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '911ac237364a0c9b83e21f5a0f982762cb24c51c', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '8a9417577a89bd23d49050471e764f1f8170b640' })))));
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
