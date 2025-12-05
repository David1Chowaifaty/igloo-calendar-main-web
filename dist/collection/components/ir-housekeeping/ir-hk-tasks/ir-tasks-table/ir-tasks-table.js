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
        return (h(Host, { key: '8a23d37097f55a5470549427cc2d0893330420da', class: "flex-fill" }, h("section", { key: '4d9cdb1743dec6ccbb48b3f9d789e0ef987e8b6a', class: "mobile-tasks-container flex-fill" }, h("div", { key: '60a63e0c69cbcf3858dec9d77442a94b920495ae', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'efcccb7add1e8e4754de388b88c2f80d03e366fe' })), mobileTasks?.length === 0 && h("p", { key: '8f08320d7e232533ca7b0cb27e2b05e5a6317c83', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '1ac891dd88b2642f1d1002b327540e4d95de8669' })), h("div", { key: 'd847dd3af510a1547b8ff4202118209873c0465e', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'e4868bc8e7ebc8b4467a6f59890b66edc6e0c3bf' }), h("div", { key: '874e655d0e05e0c0d85af3ed1b8adcac4438b5ee', class: 'table-responsive mb-auto' }, h("table", { key: 'c3e52b229cbec5b0b797ddd4e25639fa2f50dd0a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '11f1d4a9a6032d9d9cc3e194bc7ca427f4ca7ce8', class: "table-header" }, h("tr", { key: 'cf540be0b27a7b80ef774ed0fc22c572b34d4130' }, h("th", { key: 'b4dc27a6be144a8e3dbb1aa4d61beba8b7bc2e13', class: 'task-row' }, h("ir-checkbox", { key: '6332fc72387c8fda87ec63d52ffd56b85b065289', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'ab15a7ee3bcc9f9404d7a8904a10159aea04ecee', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '4d504fe3e10522ad9b7ced72e4e2d3e232512ce7', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '88d71e5dde4da8ef8affca06ec4b3358dee3c6f2', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '802bef100a6efc74ba53ca8efa24a61f155acc22', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '413292d19d4d074696748391187923dbc04937bd' }, locales.entries.Lcz_Status), h("svg", { key: '7e346737282f87b89f6fdc11786b37ff22b834fa', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '361b6b93288dd3812043582256bb2a008906ccb6', d: "m21 16-4 4-4-4" }), h("path", { key: '63ba414a047d4081e1cd726e537ab8be55aba5c4', d: "M17 20V4" }), h("path", { key: 'bb295d0d6142c82663e2721028d46f786acde83e', d: "m3 8 4-4 4 4" }), h("path", { key: 'ea3e6a882db1179811250143a9dd96d3b4aff6cf', d: "M7 4v16" })))), h("th", { key: '6ab341c507c119ebb78abc3d220a76ecf22cb3f0', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'aabc63d742ba48cbe55c5b387a2091928cbe6944', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'd50a4c44659f691b44ddbac2cf4a5ab26e33beed', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '4d01756a9b1782f8ee8b18d30102d5fff102e617', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '8025a87e32b968260bff21fd7deed5ebd4284b07', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '11498254fbf3857570ea6e71795c3371798a6dd6', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'c71e89beb4a87907ba1c26ec3e0f97865e5490cd' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6ff83232deee3b7a0d64528742054a6d046b136e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'f3e4fd9af68561abe84e8dd066e8f8386bc92e03', d: "m21 16-4 4-4-4" }), h("path", { key: 'dfe71387a3173de593e3bb2264a77921588944f9', d: "M17 20V4" }), h("path", { key: 'f2a07ad82f1a610c586563ce72476465f31dfbaa', d: "m3 8 4-4 4 4" }), h("path", { key: '3600f2b937629e5d0e34196c2bdf0c98688e8470', d: "M7 4v16" }))))), h("th", { key: 'b1cd0eeea79fb751320716d9da02d4c385a46436' }))), h("tbody", { key: '7d07c662ccace24b391a06d8b3b9153756fccc51' }, tasks.length === 0 && (h("tr", { key: '3dd336f38c370e6e428ae6e7881b2bcf3f3c9cf5', class: "ir-table-row" }, h("td", { key: 'c8a8dcd26f00c40b80a790eeaf38146c83365c80', colSpan: 9, class: "text-left" }, h("div", { key: '996468192de2ecf20a7c9f23531014a888349fb7', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'c36650b01e96b4427c0c287f0ea900e4dad7cef6' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '75312d6f9ab268f09b692dfbe243b24c8e5eb145', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'c36b91ca6569e97e11c4c555d8a5609f847ecf10' })))));
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
