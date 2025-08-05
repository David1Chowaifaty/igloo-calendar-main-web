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
        return (h(Host, { key: '6bbf55c1afb01544fb82fc369435341bd6b75e22', class: "flex-fill" }, h("section", { key: 'defcb45d1d5450175036f3a866b90e453d30d661', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'ac3733ca04c7a2aca3e6fc763585b00273585434', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '2da2a7baa7a88228f7a868630c952e0e82be4432' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '324cc2e171ce2cd254cc5b71760909e24bc8629b', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'c07ab7a030f2220fb707c4319c3ed121ae53cdd0' })), h("div", { key: '2d4fd5113d5cceee3b4bc5dd11fb322a41c3fd62', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '93ee29a6bc5ab685ba35057d196855c0af1bc56c' }), h("div", { key: 'a532f7af4e36801a6632f05e2c57b50062637920', class: 'table-responsive mb-auto' }, h("table", { key: '014cebeb41b89b48c58189cde770912d19ce2c3f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e356a0539e3842c6a266225bdaddfb12e80ee4a2', class: "table-header" }, h("tr", { key: '595d9a140b0384cd1c0231c32cf907fe7c05c34e' }, h("th", { key: '675d13b59bc175669ef5afc26f176feb3a385ea6', class: 'task-row' }, h("ir-checkbox", { key: 'a43aed7960bdad7f6031c19dbb14764b5caa1c8c', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'd7223acb93745933ba39304168bda426ce288de9', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '2aceb10168cdee4d66ff32b3d5ac796e0544b82a', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '3d5c863a06b41a81c4d32b59c794a9cebf6a7734', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '5f2712730c6653d85669ceb80f153c17a345583e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '99e19388dd616daccfa2615fb6edfcf928f48d8a' }, locales.entries.Lcz_Status), h("svg", { key: '5b7b4c55aa6560e49b04a434fe08b3cd1d785b71', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'c307635358d2c07bfb87977ab413665c70811e82', d: "m21 16-4 4-4-4" }), h("path", { key: 'a8135a77a72e9425a7ca62b225c13e6bfae94d0b', d: "M17 20V4" }), h("path", { key: '925f4251230e5979c0f85b67349728f6493ed384', d: "m3 8 4-4 4 4" }), h("path", { key: '4e7d4266ad49d4f26ebedf727cd9783d8cd53932', d: "M7 4v16" })))), h("th", { key: 'fee39405404b4bac2a6af67fc017ae400a251f96', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '989c8978a6c1a7c629456634cee9667853fd3ef3', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '75b47317ced69bd3fa26df1a3c6847611a3c11e3', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '0eac15e65f7c2e570507d659b7ff99a96a15b183', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'c320264c1d6b02be31f3b857b7f6a424ef2a5f24', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '5f10cf125df0a79652653a4ccd5883eec95bad50', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '1e4304294b3241c71d0544148608d2ac489fd0e4' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'c12673c0ac9f4e807361172f805102efbfbe3fca', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '36f92df2722b953568d8f437d5b663c962e1ced4', d: "m21 16-4 4-4-4" }), h("path", { key: '4292dc38f999b3889e67c57324736434bec3d2c9', d: "M17 20V4" }), h("path", { key: 'd453b427a83596c5b0967c9ac7e15250913ae0f0', d: "m3 8 4-4 4 4" }), h("path", { key: '4f9de531836c7c44eb8684b4912fee05c42afb81', d: "M7 4v16" }))))))), h("tbody", { key: '5a30b68aee0427976f1057cb4549719ddcfffab0' }, tasks.length === 0 && (h("tr", { key: 'd10028a9b22a6fe093535631c67ad33afdde3924', class: "ir-table-row" }, h("td", { key: 'a19654b52806fa33c87bc8ba42d9d374c61c1295', colSpan: 9, class: "text-left" }, h("div", { key: '62f0d611f5f1cb4e9c1f5a5d9cda7b738a3eecd2', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '0c040d6ad034a36646fa194f121c779655e94e67' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'b2674c70a29d7695fef65c9c6de5b8fa8beca21b', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '15daccf6ce027a2827356906ccabb05d08421c35' })))));
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
