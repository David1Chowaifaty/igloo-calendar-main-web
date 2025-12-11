import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import { hkTasksStore, toggleTaskSelection, selectAllTasks, clearSelectedTasks, getCheckableTasks, isAllTasksSelected, updateSorting, getPaginatedTasks, getMobileTasks, } from "../../../../stores/hk-tasks.store";
export class IrTasksTable {
    tasks = [];
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
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
        if (newTasks?.length) {
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
        const haveManyHousekeepers = housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: 'e8b3b15c0679b175b628394d8aad3b4f4cb222e7', class: "flex-fill" }, h("section", { key: 'd6ac53c37078dd0959570cb7aef28323e8f8627a', class: "mobile-tasks-container flex-fill" }, h("div", { key: '24ebdd8e7231a2aa62745d2460e5c7f8064d44bc', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '27dd6253c3f6d5210aadd6e00536e7f6f22448fc' })), mobileTasks?.length === 0 && h("p", { key: '0e9381984ce9f098914fd15e66c918fa3c8b1a29', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '0a5d1c587b4c15bd282c0696c8ff333fb175db16' })), h("div", { key: '6c77069584b4f341fddc9f9e43fa6ee93007f71f', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '4bcea2b5d4e7026af6f84dc7f4e7c4eb65130f11' }), h("div", { key: '7d86e0ae47caaf57219b2e0f4126578d6a79cd40', class: 'table-responsive mb-auto' }, h("table", { key: '76ebb6bac8ef7a9042d45c4e3e7d433379f5f4df', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c944d3ed0e5b0daae968871bba4009e11b83ce41', class: "table-header" }, h("tr", { key: '40561c0e7a1b655e6c7eba7fd2c0038fa706fd01' }, h("th", { key: '76b81e15f08e8f010a7d938b24832caf2d00346c', class: 'task-row' }, h("ir-checkbox", { key: '5de53bac1ac6f4084949b152d500bbf099cac689', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'c29d538863d4b8a1c93ac3fa9594b3571963aef1', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'c692af7cf57e1ed7fd2f7e9ecf05b19d1976c44d', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'd6d87477e8de277e24757dee04cd726d6e9b5ceb', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'e81998671edea843d61eddc6eb62970e346cc5e6', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '90f0436a82208e815821ecc71398a0934e1500a3' }, locales.entries.Lcz_Status), h("svg", { key: '04b211ca91eb1ce507783ab9d43aae23007fb4c0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '239d73e6205024874f9e1a78c5d27f46b32270cc', d: "m21 16-4 4-4-4" }), h("path", { key: '0721715f1bd01781984dbcc8ff86c05c816bfb67', d: "M17 20V4" }), h("path", { key: '62862077049f457722d4ee0f2931cdaf27aa1b99', d: "m3 8 4-4 4 4" }), h("path", { key: '6d3bf6a7b07140fb9148052a1c4bc9a94059787c', d: "M7 4v16" })))), h("th", { key: '9687a5c1857395ef48e78f263ac464f038139166', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '4c5811c066a61d204d25590205fc640b2975caa9', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'c12027457cbd48dd911b11d376af3b4c5a8af4c0', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '98c961294bb37b30aa261702a14c42830b4e0a95', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '49206943d78e1ad6f8f240c9eb1651257a87a1d1', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '23496719c650d3e698cea44d10d17a289f1deb47', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd5048182f625e3e5a028204b034dc05eaa8a588c' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '5efe65b72fc9832f586be6c353452a9248411cfe', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd9dddaffc52ec37ddad5ee828ca50b3f7c767e00', d: "m21 16-4 4-4-4" }), h("path", { key: '03d4b0e8340ce29e921f0ca409fdf39814d36791', d: "M17 20V4" }), h("path", { key: 'e880d2c2719b370977aad39dcac1fc4f63f0b582', d: "m3 8 4-4 4 4" }), h("path", { key: 'b888bf7ee46170e2f48a71e3bf5e18021af5efba', d: "M7 4v16" }))))), h("th", { key: '3b599096043c6e81525a333533b85e4554157dbf' }))), h("tbody", { key: 'b9acae3b78957a2b8e61f9df08986cf468b69f70' }, tasks.length === 0 && (h("tr", { key: '3459ddb0539a4c80ef38974b68a5f4310f4338b8', class: "ir-table-row" }, h("td", { key: '35cf7dc56a973b108e1ca8d82a6e4593c20ef08b', colSpan: 9, class: "text-left" }, h("div", { key: '787258147a09e29e0e1305cd2b8b261e8dace357', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '4d9a289689715fec20a5d7a16f3d9d56166f7f03' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, task.housekeeper ?? locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } })))));
        })))), h("div", { key: 'd779030a733824855e9a5bbd4ca05df6a5532787', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'c81d702dc49db33e98d936f89393bb673b820067' })))));
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
