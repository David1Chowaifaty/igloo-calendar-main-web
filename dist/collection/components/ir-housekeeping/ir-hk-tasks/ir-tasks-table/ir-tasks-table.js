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
        return (h(Host, { key: '4502d273c38a220a3aff60d7020077a1ba971a95', class: "flex-fill" }, h("section", { key: '61b1bea75fafe98ef8336cc7e94bdd853a51895b', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'babce45dbbe6638801af34a3d59bf89b9b5074b3', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '2030c15985889b6eb8483098af7402128a74141c' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'e598ec0108cd30ac641a92c89b486326452b2821', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'ec6096e18c06d207676c1f234656b62464702010' })), h("div", { key: 'c6fcf5f535bae55a3c36d97ea6da4c276f9dd73e', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'e8f28291503a982d74a77b133dc9712c095d3ae9' }), h("div", { key: '3a15cf1bb2bf03ff65924f8380f18b9c1ecac9b0', class: 'table-responsive mb-auto' }, h("table", { key: 'ca35824e31a24a78047bf441242f717b4de622e1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd0e584a7e4e7e6fbdc4630bbd5cd39ca67adc0cc', class: "table-header" }, h("tr", { key: '346e862d6d508c4030e45cbfb716aef89db2ebad' }, h("th", { key: '5d1a02457ee67ed52f53db4f24de9cecfedde43e', class: 'task-row' }, h("ir-checkbox", { key: '283a6cd336214801414679ebaec1542c5184dd4c', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'a8c8b854c6dd332df246bc006f02078b565d7902', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '3fd97cffbddab8798a59e220080193587bef7793', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'f9b1dbcf337c07582ad6db1cd1c23eae7cf444b5', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '97b581cbdd4602d748e46c90e31a87dfb69d1efe', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd455353fcc3940b853fc748762bc33ddec265699' }, locales.entries.Lcz_Status), h("svg", { key: '85ddacf3769ce76ce6f494343a5463ebdcd0f001', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1198879aea436d540922fef6e4fe77f5afcaea0d', d: "m21 16-4 4-4-4" }), h("path", { key: '31b954dba226180bedde72981a4f3333ac274169', d: "M17 20V4" }), h("path", { key: '14e786dbed70db15dbfe5c6d9d96f44529f74c34', d: "m3 8 4-4 4 4" }), h("path", { key: '9f42a5b3897deb9773a5c95a7a106c9466088127', d: "M7 4v16" })))), h("th", { key: 'be2a13e45f57f828d281aa0a2c3306c73cf00511', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '2ba1d36b4dfd6ed2772dbb3c8563121157f426bb', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '7465b363e4241a10a49751197b2b67e929db9bf7', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'f218d943f644ffd3cbe615a5c8a66eb27614a9a9', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '73a876e7bc3df3156dee0d70b24aaa70af8ec702', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'a7e4379a8fee6630bfeb9284c03e168a6c926dfb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '02958d1d3c6579c638090c5f33ff58a707466d7e' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '23922c30c0f9003926c424a415fd8cb28f283440', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3c129395ee6b8ec3b5db03131ac36257d921792a', d: "m21 16-4 4-4-4" }), h("path", { key: '760f5801741125882064c1cafdb653d154c1fc78', d: "M17 20V4" }), h("path", { key: '62ccf1f6be593d70c799663f5234a474286a125d', d: "m3 8 4-4 4 4" }), h("path", { key: '3296c3f81429aabe2ddb978f9944357b92eca9f6', d: "M7 4v16" }))))), h("th", { key: 'c4362c95f3713f5774867db1d35dae4470275139' }))), h("tbody", { key: 'e43622e80ae8fd28cf52233f891e06fba8549b19' }, tasks.length === 0 && (h("tr", { key: '8e5485367577b048da31543dff51339816aec62f', class: "ir-table-row" }, h("td", { key: '4903faf935fff64adbae528f8741c3054ef09839', colSpan: 9, class: "text-left" }, h("div", { key: '6f6b31f321a0d681c4be03287e6735ce24f632ef', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '1c44dc33e1811e55373bd0bf8b154ca252c2d048' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'd921ed7f0d8608de267704f99b3d8acb5a3082b2', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'd85811ad10987bed0a3467dd8b08b80fd7b81c59' })))));
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
