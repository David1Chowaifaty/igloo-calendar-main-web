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
        return (h(Host, { key: '0e335c1b7c81cfa02d187f2da14cbf6361e8f398', class: "flex-fill" }, h("section", { key: 'a30fa78905ae74d49b7bad0077197763608f72ed', class: "mobile-tasks-container flex-fill" }, h("div", { key: '831911a801d4f065e0b9502957f4af362b7520e5', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'c72a5baa46cf40f4af568a987afd533b023e09ab' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '3e51b733a025ff17c6e8ea74c10bc9728030172e', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '61eeebc4733e4e560204d56f86387415b0f5772e' })), h("div", { key: 'cb3b30eb3750d45981b84bc29dc912e5b902d023', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'cc150d7f134cef5b922eb7bf5aedb6403d26fcfb' }), h("div", { key: '45d2a9416a8397d334bbbd96d28114a77f4979da', class: 'table-responsive mb-auto' }, h("table", { key: 'a210a3ab71a5a34b8da60b0dacabcd63475ac19b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'fa9300aae8477b821eb4bbc48d8d24f4aa6bfde7', class: "table-header" }, h("tr", { key: 'c162c341a0a4286d059237126d4185c8050325fd' }, h("th", { key: '8862be1bce3adc98d7be3ed307fc9833c3aeb6a0', class: 'task-row' }, h("ir-checkbox", { key: 'af9bc99757ad9c4f7ff3da53359aaea2acff7259', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '88a6508a494cbd9f6a8773b3590a237570fac7c6', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '5dd4c7775852375ca38063e8d32ce8de4c62c91c', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '4d3c2734f2621bd7633fd0f3b843e4226e859152', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '6e690b7439d45ce23e92cdcf190654e2072834ed', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '53ca74924bb39e75961d2390ae2aba7e04e058be' }, locales.entries.Lcz_Status), h("svg", { key: 'b866c1d474f24dcd0457ac24f37834eea64ffa4a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd2792629260dee773fc1cbfe37c3aa1eb44c4604', d: "m21 16-4 4-4-4" }), h("path", { key: '63d0e5b4d0e03a393d271f9f0b7c2eb6c1ed17d5', d: "M17 20V4" }), h("path", { key: '311e183014e69b5a870ddd19e6c9c977972cdf8c', d: "m3 8 4-4 4 4" }), h("path", { key: '4c1293691f57e6970e00b5d137d72089d4332f80', d: "M7 4v16" })))), h("th", { key: '4c38e5a832052aa0688f59a72eba89e9d491810c', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6c009f5cd47d1a16410463c031e6e05fc3879cc4', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'bc08b1b5e5b49be546b192146698ca11d14cd725', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'b62c8ced2c23ccfaaf48b6ad3624c1fa1ebcbd62', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'aa43a449632a7fe6bf2b2d2aea3d0cc020603a39', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '4e20e0c01a555758c68c81f68c46edfa1cd3efdc', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '08ba66aaaffe19bb896ee49f1a3a732bfa5ace5a' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'e437bb83e76220d259d6dcf2d5aed9cbd8b90f32', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e5aebefc95e35599eb195562b1500008bc042852', d: "m21 16-4 4-4-4" }), h("path", { key: '00186a6509c7025bae098ac5de82504659e48556', d: "M17 20V4" }), h("path", { key: '99a43c9c14709486f2011d5f42d8bec62122aa28', d: "m3 8 4-4 4 4" }), h("path", { key: 'bccf748ec9ce21d3c32a69b0c288520a80131ec2', d: "M7 4v16" }))))), h("th", { key: '43ca33362deb7be09c2bcbedc0d7261a7fded9f4' }))), h("tbody", { key: '304fe39d642383181e3499440f448e34f94d0bc2' }, tasks.length === 0 && (h("tr", { key: '786a2bc8aaa20ddd3cb292bfe31153562f347388', class: "ir-table-row" }, h("td", { key: '731c5f9fc85da314cff0200e0b777ed9c8ed272f', colSpan: 9, class: "text-left" }, h("div", { key: '8981daeed7fc7a8dbf01c5032c163056e292903a', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'b5d77baddc4b044aea6d74cc2bb3e77296c3cd91' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '044bdfe0727ce68a5301f5285964e175bd37f71b', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'e8558ab38ba0985490a6213662d9647436667336' })))));
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
