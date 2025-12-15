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
        return (h(Host, { key: 'ed3b1f41a973ac75d046350451e12f5bfda635a4', class: "flex-fill" }, h("section", { key: '5405c4bc689cb51517eb78cf6710d0f5deee9d0d', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'bf002cc060002ac3724e1762842e030e6e499788', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '5051672be93b3f5d2eb9c584b2219900fc0c5b5f' })), mobileTasks?.length === 0 && h("p", { key: '6283838ffc60442b2b58c7c0d81f0cbac02aa2f2', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'cd9d57c2d17b966f3bbe9d0b5066f0f7d40b702d' })), h("div", { key: '639fc8c71e2e457c4e7c15ef12a63493a1f66d6e', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '8c7ca5358507f5f6c2d79eef5ae6b68d044fdeff' }), h("div", { key: '75b56889571fd81accefd263dcc94bbefbdf58fc', class: 'table-responsive mb-auto' }, h("table", { key: 'fab82b94003bc8ad88bc7f390f5a20fbca2ce5f0', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c04400efb36fdc63aeeb93c5362f8bc297d49343', class: "table-header" }, h("tr", { key: '400a5d528f92007d6179102aed0e330cd4a5ef4e' }, h("th", { key: 'c1732f264c849bdaa95e0d8e169e51003fabe146', class: 'task-row' }, h("ir-checkbox", { key: 'c556f7c64894858e4ee89e44820349cf6bc5a1fd', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'c99c7ed1a9f8253fcaaee8273a5742bd25c4eb84', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '0690f4bbd3da025c9141f3308258a71c8d663afd', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '7e0c78d0d2f50c2feac1a773751eadfb1c4fd197', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '88ede17c9f7f0727347193a13b6285c4aff6cba6', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '740ae780d7167c67975e60bc252a2c76a7693eb9' }, locales.entries.Lcz_Status), h("svg", { key: 'afa3348a3c542f6126389fdbdcb90d8b9e9fbd7e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '00852ad8b2f0bad9fd22d3ef9372044c03eb79ad', d: "m21 16-4 4-4-4" }), h("path", { key: '2934999ac57a60c0e2b97755f6ecf09adcb5f484', d: "M17 20V4" }), h("path", { key: '0f39dfc23f898063eac616595f1853cd697e9b71', d: "m3 8 4-4 4 4" }), h("path", { key: '2c4057bc10d1d8e27b628ce6068029b3ed33f87e', d: "M7 4v16" })))), h("th", { key: '1f70e30547e5d0ecd5cb193c9c78fb23613dc24c', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '8495f3192b0ac9ee3f4c88edc86ae79b004a6d2e', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '894220b73188bde903657e08ba71a45d9f1980c8', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '1c547c427184b31d2d37139523024a8e3b36c5eb', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '94a092a681d08f3dfb4f24c2d5843e71c606bc2d', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '71d070e7ceb7db253bfd090ae7c20b3e3e5ce82b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '28ea2d90bc180859471ba8f80bac1bbef52f2abf' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '250bf3288503f021d9f28075868de730c630c2e8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b58956497be2acde29dd5f77311a15e447a60847', d: "m21 16-4 4-4-4" }), h("path", { key: '2a31c7be85317bc186717124608a9d23b55e6180', d: "M17 20V4" }), h("path", { key: 'f9cf2620186251b4fcb860ab578f29129905bab9', d: "m3 8 4-4 4 4" }), h("path", { key: '960885a04011e80b3818f4f162d4508fcb925bfd', d: "M7 4v16" }))))), h("th", { key: '362dcbb66ec4379e8ea85132e5c34534c2ff1806' }))), h("tbody", { key: '8e35b88b749c9d7d978babaad4619fdf2a1f0d1e' }, tasks.length === 0 && (h("tr", { key: '231188be81d4d4cda0647d66b829e2886973c1d8', class: "ir-table-row" }, h("td", { key: '1ba774616d845a5424eff2b71a377d953df7e7cf', colSpan: 9, class: "text-left" }, h("div", { key: '107f9562792417348d1096537076f22d01758088', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '7a5001d430383101af466c8408f6440b65c69dda' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'f5639b8d5e4d5fe7d5085ffe94011de4a61a43c8', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'cd8a917de7c4c510bd1cf62d3e47f9511fb50004' })))));
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
