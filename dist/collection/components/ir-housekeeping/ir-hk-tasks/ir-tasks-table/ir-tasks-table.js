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
        console.log(task);
        const isTodayTask = moment().isSame(moment(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '7b5c7f3f41c44a002e9c0985dc7e4feb52a3f3ff', class: "flex-fill" }, h("section", { key: 'eed853742780f4fdb8efc4b3456a2f63634761e9', class: "mobile-tasks-container flex-fill" }, h("div", { key: '8166cf71433f14ace2afaf23b4ca1dbd8ef1fcd1', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '9b55da4cbb3629117c67e0b25147d0c051822382' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'fcae843318a92d401487654bd2bf8a7e05069043', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '41e023adc17238076e4d9ddaa8f76e7f71eaa7a6' })), h("div", { key: '31da37823e0217f97eefae8b37de87e82644aedf', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'cda8daa19bc289850277b79a800203ede569dbc3' }), h("div", { key: 'f6bae7074888705369931829460d48582a8d6e5e', class: 'table-responsive mb-auto' }, h("table", { key: '5f1946b7590f46e45c1cc239d5d7c270d755e266', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a2a8d046cf3f1cf543ecee98c28a95331fe61d03', class: "table-header" }, h("tr", { key: '7fd7faf644d9da6a29f46e759bb30e594d23c53b' }, h("th", { key: 'b64d9ac7f205abe8f917049b533611d7d82c5fcc', class: 'task-row' }, h("ir-checkbox", { key: '03c5a3c06db0d2d8e491e83e8806626e65b6b15d', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '0a680e9d7a81ab1f27b2863efd47a536b642dbdd', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'a1ed43f008bbe79425a9966d2c9f02c167717ff5', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'ce77ded52f52a1d410c182a419da2d93fd829678', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '45f248ce0bbccfcf5d713bd1d12376d08f058341', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '5f3487f64759ec397804ca6dc895be953b983b5f' }, locales.entries.Lcz_Status), h("svg", { key: '02e2d34b91dbe82da0f15ca61c814f24928d735c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4796cd8ea7311d6e48cd67fd3469149ff245398a', d: "m21 16-4 4-4-4" }), h("path", { key: '6f13125c1c3786ec9b7c5e6b417bc87cf470c495', d: "M17 20V4" }), h("path", { key: 'cbaa10cf36802ffa1cb862b102599813d202bf82', d: "m3 8 4-4 4 4" }), h("path", { key: 'ded8c37f907d58bd3486f4b5a33114cfc9a2c89c', d: "M7 4v16" })))), h("th", { key: '8bda4283b6eaf716064de1a1fca64be3ad36bde9', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'fcebd333bda7b53807ec0e7a4522578b716887c7', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '59d62401c26e03645d843f6619e93a859a10bb06', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '56a24dc1fbf2707717c83ed98b8a68a5218b4308', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'afaa0d7ce4d46b3e2f3dd642e26467f0268c0a1e', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '3d154fac03980b7e61e2850d267efe41ce116a72', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '5e245c7bc9de718b1aa10e2a59d31ea8c6ecb525' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'f19f853c0bd175f4461ebed0ea2cd39df07dc5d8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '78463c7ba92d7dc122b79560acabfb62a684130b', d: "m21 16-4 4-4-4" }), h("path", { key: 'b29c7e80c0de8bb9ab769cc8f0e5433dd44d738d', d: "M17 20V4" }), h("path", { key: '910e2c988fdf613ee1ab722d4812ffad0a6d7ab1', d: "m3 8 4-4 4 4" }), h("path", { key: '2003f9ab138b28f1fb5cb68abfd443dacc7740df', d: "M7 4v16" }))))), h("th", { key: '865f0b5fcb5abf920c9ab9acf88ea49c50fbe314' }))), h("tbody", { key: '8d1c7a78a25650cbc4beae4fce759cadc626d7b1' }, tasks.length === 0 && (h("tr", { key: 'c27f3b0087a550c2ed54d8b54dac8e52c1fadad1', class: "ir-table-row" }, h("td", { key: '92a5795db82d7320c1d7885e8593d6b72fb6930c', colSpan: 9, class: "text-left" }, h("div", { key: '56d41747b5ea772b8a5b10b0a597aff224f1ba23', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'ecad9f58b60f9902c5ad0a0f21680ffe64c5e811' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '574c935b0514006b72213ac33bb22e431f48f1d5', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '2db994680a6e368e0b161c28f2a26962d904742b' })))));
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
