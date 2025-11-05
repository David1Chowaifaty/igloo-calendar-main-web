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
    /**
     * Determines if a task is skippable.
     *
     * A task is considered skippable if its date is today and should be In house.
     *
     * @param {Task} task - The task to skip.
     * @returns {boolean} - Returns `true` if the task's date is today and in house, otherwise `false`.
     */
    isSkippable(task) {
        const isTodayTask = moment().isSame(moment(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: 'bfa8658982c61f84910891a9f345b6ef1f4bb4eb', class: "flex-fill" }, h("section", { key: '9fa6af6a5b034448449b4672abb727e4a47a95ee', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'eb21b3de2c9dbfdde638c4dddae55edf707f8e92', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '83eaa758df0eec4b67f0c81feb92d267c1ca6f78' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '4f421e5112ae9532427f21c5ae556b5fba0ec61b', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '17ec7d3f38de9c74bc9507ef7c2c5f1b3fcfcdad' })), h("div", { key: '5ef8d6d43f76d638723a26abbc9b253a280d3a15', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '530039d17af9b4b51f1eb9ed4c3026b9403cd2b4' }), h("div", { key: 'e5c976d5b9cebb3d18b9530dfe851aa59934128b', class: 'table-responsive mb-auto' }, h("table", { key: 'ea8c59e51e70623cb4589bbb58a86f6ec7e67245', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a362d7d9d287d0a45b0179660f49afe753f8ce19', class: "table-header" }, h("tr", { key: '5af238d6346466052a9a437ae2b66ec932e07850' }, h("th", { key: '4f23eed5c38773de437caeb2e8bac8a92116796f', class: 'task-row' }, h("ir-checkbox", { key: '9db59978dafd1c701baae15d4cf26b6f50472b10', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '654f08aeaa9dab113f55e79e787d528b883f5b28', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6552ab33caeb7679b569c6748a0e0617559e15b5', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'c26e7795b649bbd429c5e7fa0afcbf16f7e9bc6e', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'b69a633f5f3c072c6a49a60768a1898ba7814b13', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'a1e3fa0a0b7e997733d46b5d14cb2883fefa1e2a' }, locales.entries.Lcz_Status), h("svg", { key: 'abe9b0f96e4612938993db716763d1085037a74a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '173b265e8ac965a32efc1c8e5e1401fe196bc1a4', d: "m21 16-4 4-4-4" }), h("path", { key: '8cfc237122fcecc7f46cca2fa7a4ed0375af62c5', d: "M17 20V4" }), h("path", { key: '1db651845be2a7a7fe4cd0fe42b3c91504f8be1b', d: "m3 8 4-4 4 4" }), h("path", { key: '022c4a2f0ce9e5c53d336d32b12584740b241aba', d: "M7 4v16" })))), h("th", { key: 'ab1a0d8c1601c4d51c9da7f7ccb5643f790cd719', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'eba3d4f029bb2d44fb8a19aca040af6030e20e77', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '3e6eeba8602f65eb96d66a141f7b67126b0b3947', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '084f05488ed4d352fa33e9f1cde481b7610b5a56', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '185a6749344866bfa7f08de16f5c8d72f979ad23', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'c3256b9afabc8c2d23162e8b411fe5d5e2a8e799', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '69ac471dd0647b5b67894de10c9bdd6ba6008186' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'b086369d74b53166e71f67cd776e95d423efd582', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '256b425023dfd486f8e8adb478a508ad0b658111', d: "m21 16-4 4-4-4" }), h("path", { key: 'ee03cf288896ca86803813f9bb5fc601a4964899', d: "M17 20V4" }), h("path", { key: 'ff5f6ae25375abc77df818468c550102e3d7d836', d: "m3 8 4-4 4 4" }), h("path", { key: 'f5e6a63f0158e07d86f5d6c7e66ac37001772be6', d: "M7 4v16" }))))), h("th", { key: '87107691b9a8f76378d77fadad09ebc948da6a0d' }))), h("tbody", { key: 'becb10d8790f0641c9023b7fdb744848e32b18c1' }, tasks.length === 0 && (h("tr", { key: '5ff965203304ae892dbbc76bf90433a26a293f52', class: "ir-table-row" }, h("td", { key: '3e5eac2177ecc1bb26530b46b5290bf55775e696', colSpan: 9, class: "text-left" }, h("div", { key: '00f60f2736dd82e870caeadaf99046c1b33e0af2', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'b89746c664c45e2a3b45203159cde89caa5819b2' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                        this.skipSelectedTask.emit(task);
                    } })))));
            })))), h("div", { key: 'b686c4dfa4d64db472e89df1696b2103526da7dd', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '68a375a6a6c7c9cf7467f59c1bfedac5f2a00803' })))));
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
            }, {
                "method": "skipSelectedTask",
                "name": "skipSelectedTask",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
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
