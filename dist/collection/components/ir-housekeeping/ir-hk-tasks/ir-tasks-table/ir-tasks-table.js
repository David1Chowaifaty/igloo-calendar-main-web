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
        return (h(Host, { key: '6bcd73e09cdaa64ea219a33eb33e467fe061637e', class: "flex-fill" }, h("section", { key: '1733b19304f4b38aef9216a457d72cbe5299f5c0', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6e908c25a0fc4fd8fbbfdb5e8705910ce6b12605', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '08bc4d4ba762184668d11bd29ea75e459d4bd4af' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'a9fc988d7d3c0173e2df75656a11f9279242eb8d', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'fdf5196a2c70792524f2eb44ad0af6f589a457ac' })), h("div", { key: 'f90ea2e51be72e109d49814f48e57c7f6d1c5e37', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '1eed3e7c9bd3fadfc677669d05bbb28bfea13a8b' }), h("div", { key: 'b1859a77815df3505163c9a3a4b271a690aee3e0', class: 'table-responsive mb-auto' }, h("table", { key: '8dda5017d6dab4144125847ba83f13aa52a36029', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f70b647d997cd17e8bc6c012c8acf2583b125a42', class: "table-header" }, h("tr", { key: 'dfd283b5e70b592880ca4aac1f31a1eb835c9e2f' }, h("th", { key: '4688cd361f05bcfbd3e3df8cd1cdc012efa4c697', class: 'task-row' }, h("ir-checkbox", { key: 'b482714d23dad32dc51d66b37064d609251b532a', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '621be30473c6798c60b390c4e5190f5a52d3e1cf', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '0b90a369e9f4edaecae68fcbef81fbc4ae9944c6', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '21f288dced18cb1a7541a026384990c1942a3b9a', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '69f80ac5cec2bfc04d88bb9b3540c52f8cfbfa88', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f0b1627a36e324a7ad555c638e32952210ece68f' }, locales.entries.Lcz_Status), h("svg", { key: 'da1e2a522272447f6f447351abc84e57fe94da89', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3b7ffb083bbcf3af928d298fc606d22cc0d6da9d', d: "m21 16-4 4-4-4" }), h("path", { key: '2af0aed892f94c927a58601044b8d2709e9aadfb', d: "M17 20V4" }), h("path", { key: 'b573e8f4b2f94c76808ad256b49bec0e66b57f15', d: "m3 8 4-4 4 4" }), h("path", { key: '712f791158785ea6a698f1c47fe3590672d3ed96', d: "M7 4v16" })))), h("th", { key: '477ad9291ae36d3e0a2e99ad0427c4abc3bca9af', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'be30cad02a2532e3cb02cdc039e6e8de8563e851', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '72a1f64e8d318432839d4adec3a7dbd683667f04', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'be917c9dc224d5dfa6d9cef7978eedacf6635611', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f8f18183d94bcacfddaf4b5e1cc91c94094784cc', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'f80c89afb79532c16e56264f64c7b9ca1aa2e4f7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '5fd3cfb1dfeeaacc178ad692e41c4ccfed75af7e' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6c372a165184167502e8d345f0d7f09fd7fdf7e1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '09912215c2cc73fe6f2cf91e495394a30dcffe94', d: "m21 16-4 4-4-4" }), h("path", { key: 'b897779bf1fe52251105a79d8276f23d18cddeab', d: "M17 20V4" }), h("path", { key: '3e3184001f8efbb89cd17974aaa39d96a4891551', d: "m3 8 4-4 4 4" }), h("path", { key: '919f6fc240bc55a36b807f0686dda77372038cf5', d: "M7 4v16" }))))), h("th", { key: '2e1aabd50734de4231c0b74c9d6321970372b71b' }))), h("tbody", { key: '35b986715180a0f3f07634d48cd7074229839223' }, tasks.length === 0 && (h("tr", { key: '60641fb6008f4807dda15da779b98ae7d5e897c4', class: "ir-table-row" }, h("td", { key: 'ddd149db51f0e4c33ee2693815f7916fc5ebfeb5', colSpan: 9, class: "text-left" }, h("div", { key: '1682c7dcbd8333499375dcf59e95a803ff43f18d', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5e4edf975023063f45ad2a737434d152da4e98fd' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'ed8892d2daf3801601fc90c1ef381ec5e9c0fbad', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '29cdf3a5c12b7de4a12832cb8ffe04b1429c82b7' })))));
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
