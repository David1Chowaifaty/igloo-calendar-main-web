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
        return (h(Host, { key: '1b23fbdb0e8561a7012c49ddf3429b9ecbb86406', class: "flex-fill" }, h("section", { key: '505451058bf917bb98256effd0ce5b84bdda6f58', class: "mobile-tasks-container flex-fill" }, h("div", { key: '5b905c93297fb377fcc095e2d58c2b12c0760132', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '10054819286cc801e223d18e83981d6b338d855b' })), mobileTasks?.length === 0 && h("p", { key: '6117170ae77345651a2450f61583737b29f2da1d', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '230bb49e65b5902e8fe8be2df7c17503353cae77' })), h("div", { key: '103c6886279df9ba1b6d5643b1ad6257dd8a8540', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '0b2eda18b817578de5e6c7831abb25bf8972c171' }), h("div", { key: '536950a7274bd8a14491ecd8d2ced166afaddbe2', class: 'table-responsive mb-auto' }, h("table", { key: '90816b010b575d16baa2283ff1079d55f554883a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '183c80f21ec6f7a5d454ec85f25c2fb50f01b152', class: "table-header" }, h("tr", { key: '71b40db4c90d3ca28e5b72c2baecdc417ac6d8ff' }, h("th", { key: 'c783d80a2f384e813b2da3f18d6d2274ef1272be', class: 'task-row' }, h("ir-checkbox", { key: '7134e6071bea2f34f0979daebfc7d0c7d28c12f5', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '8ceec11c97f5499e329da436301ffae40f18fa93', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6d669255de77ef51afca86e20f0990ca6561f931', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '2708f9017057abd87ed0d7fe23ee85d904032799', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '9d77e0f5364908fc7f8359aa83605179a98f1e36', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '70142a2fc2a79f49527a572fb74837234e987075' }, locales.entries.Lcz_Status), h("svg", { key: 'e44f59cbb6668880c95c519f275d4b9621f362f5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1b9581852746b5c5b3b3cb69e53dc02d77e318a6', d: "m21 16-4 4-4-4" }), h("path", { key: 'f41003b861b4708cb40ea31b62cb1c4e5724da13', d: "M17 20V4" }), h("path", { key: '8cba442ccc7e2a470d8009206058558a37e551af', d: "m3 8 4-4 4 4" }), h("path", { key: 'a6a498a9cf9ed64fac1aa0d391917ce180987652', d: "M7 4v16" })))), h("th", { key: '5e13fb2598f55facbe51150b2d046f8f17d9859e', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '47ceb1ead859abb693fc0bbb332223bd12bcd0df', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '2a10b1b8b2fec8c96c5c70b37a075dad6f00235b', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '0b13413956739b380af1cc4f0b2f203824f14338', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'ae7129a4b53609a2c76d8a69eea65d232f7db020', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '407d3c2e0a7d8c9cc01568c36ba1970a80cb6df9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7e9924ca99be879760ce0c1ff1f1b07d2894a945' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '859f55023d2c5960b4a925d58a84a5b24bb08288', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '63216a7dead8b75093e11a945522b9226945bd79', d: "m21 16-4 4-4-4" }), h("path", { key: 'f0513dc12ae7977bc5a365d7aaddd76c70c2b6a1', d: "M17 20V4" }), h("path", { key: 'ae080364b2c56c9d8ce1a9ca40c05400bdee5144', d: "m3 8 4-4 4 4" }), h("path", { key: 'd9a2d7f58c18410afe07d4bc988d68a66c5c0eed', d: "M7 4v16" }))))), h("th", { key: 'e31c89ed5b7bc009b34e0ca729e0fb85b205da59' }))), h("tbody", { key: '711feb0bb5b969aefd2f1daac1631b1e7a646b69' }, tasks.length === 0 && (h("tr", { key: 'c025b0414c88e3b3c81cdfdea867ea745cfafaa9', class: "ir-table-row" }, h("td", { key: 'fc35e38dd592d02c3e1e72a1d8e9452e6fa0975b', colSpan: 9, class: "text-left" }, h("div", { key: '9c5850a62f6bfdab7c40c368f110fa1e344d7cd1', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '28d794ff47797efd5638e4c6af163898980aa724' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '21c1b5fb09b50b290a4b3b506dfe1ecf8b747eaa', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'bca0496f64f3bb1e39336aeb08078a8c82a8b043' })))));
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
