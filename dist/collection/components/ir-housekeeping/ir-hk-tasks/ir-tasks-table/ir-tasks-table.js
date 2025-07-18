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
        return (h(Host, { key: 'e57f0a6cee2ece93207bd2e1fe64631e22ee56d7', class: "flex-fill" }, h("section", { key: 'dfaede001667215d9c99a4e5919bc623a954c623', class: "mobile-tasks-container flex-fill" }, h("div", { key: '813fa0b3e753f1aef96d7b4af3c3531b0df5487f', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '95afae51597b2c6d95f71df31fe17198a042491b' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'ff5edeeb6487ec865f480cf53c2e4ff184fc8ee4', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'f3738bda87e67c595532b6312a4701179c9234b2' })), h("div", { key: 'f55b85730e50f84f0e141caf6491afb64e7d6473', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '71989f7817d4aeb3f4e2b5238adb7ca097916f50' }), h("div", { key: 'fc596205773c444bcf20487ad2ecfdd193eefea7', class: 'table-responsive mb-auto' }, h("table", { key: '98a1b1c62d3811d7aff8b33c9f65b75bf7f5e9a3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '79ddf9afe997262a741b1c5aa0b54bc460199855', class: "table-header" }, h("tr", { key: 'e5ad8338572a667787ba828b0b4ad9a86d57c69b' }, h("th", { key: '7ac32dab04fc8c1eb25c7e8e9626eb2c85e00fd6', class: 'task-row' }, h("ir-checkbox", { key: 'adb326a2486352c300837e5f997f28691100edf3', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '868b7b01328a1a1abd9ec9d0119160eaaa68789c', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '1733a6be3242783085157ff167797ea64f1ba1c1', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '6d684fb26f488b7cfb7fca3569db360be9209609', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '29bf010f64bf3e2f5b496c444662ef1876073248', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'fac8d6116f01f2d87020c57a44f0af1a9734d94b' }, locales.entries.Lcz_Status), h("svg", { key: '1153efa5c04fae5c19e24f5bd36b8aa4534b8c98', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a80201245e9a5ef5a0d74fe1c2f461821c4d61a9', d: "m21 16-4 4-4-4" }), h("path", { key: '7a297bef8c83723b53a1de8b13287d4359a0e491', d: "M17 20V4" }), h("path", { key: 'e69e501304d24f4c9fef2a572e63965dde80cb21', d: "m3 8 4-4 4 4" }), h("path", { key: 'd07e9c1ba90172367a48ad97ef10f10c72963292', d: "M7 4v16" })))), h("th", { key: 'b7ee4146deede6c4b3c8fb42c7aa49ef82f54259', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6ca1b5dae6361a0c72d7b1c4227b070108b95df3', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'dc6c749b6bc12b784bb11889d6cbc31ca9c1b582', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '0baa48cbb7c5648d6605ced21de628bdd079de69', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '372e9813f8113ef56c2cef63797ad924efb895d7', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '35eefa8a425154bc18ec2634c84d40dcf1c412e2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '2929f50177145db6caf1c69c50ca43519deb9c66' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '43c60f95b316ad9fcf10b8782b11643e04c17f6f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '27d4858cb5410c8c96e1950dfc3cdb6742c41975', d: "m21 16-4 4-4-4" }), h("path", { key: '0455eb97f0b04c8013e1fa5523761b226e039826', d: "M17 20V4" }), h("path", { key: 'd27a0b6e33f7a8eca35a600287528dbf3b93fdcb', d: "m3 8 4-4 4 4" }), h("path", { key: '960da8240a9b019d6873a94cdcf89835ca8bb423', d: "M7 4v16" }))))))), h("tbody", { key: '467eca6955214eabe575fc365e07eed427e771c1' }, tasks.length === 0 && (h("tr", { key: '2c80550e96b7179180bf73367e6fe8c0bb57886b', class: "ir-table-row" }, h("td", { key: '7ac5e8d7bf3093fc169e47ae22214d3f82ccc6c8', colSpan: 9, class: "text-left" }, h("div", { key: '922122286746177ce34c3cd2c12e680e00615952', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '66f0b81ef83f074c029ac3d561c6cc0a509deb93' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '66c8edb7bfdfe9cc76762b70e22356e6906f58a3', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '9fbad35e1398f9931e5ca3729352341b00d2d36c' })))));
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
