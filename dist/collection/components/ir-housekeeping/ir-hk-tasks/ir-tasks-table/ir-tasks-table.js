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
        return (h(Host, { key: '51fb29f689c72f147afdcfd4581b689dfbfede1b', class: "flex-fill" }, h("section", { key: 'ca9a3bf8f517e08364c593f47b083eaef2ea6d2b', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6890ea480624c2ad031b3524cc11dde45389e37b', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '15f780d4489608c34e7caef9fed9a608be8add94' })), mobileTasks?.length === 0 && h("p", { key: '8ab8411b5884b511cfb70f619c4e57a6dd6a87c4', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '0bdef101e2a4e6945a7f2ed42ef5ecbf0a8439ab' })), h("div", { key: '374a1dd39b9d62ddef910a95baf788923f545ef5', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '492a84b4810974ed4feb1d444958a97a50851dc2' }), h("div", { key: 'fcfaa0fb92ce1ef1760b8467f25f10635105ee9a', class: 'table-responsive mb-auto' }, h("table", { key: '6a4ce4208755fa098fbd53922e7ac503467b4009', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dacd08784b31e133110af5a37d460e6e8e37bd03', class: "table-header" }, h("tr", { key: 'eee9562d484636414667c5c1ea8a995dd319ddbb' }, h("th", { key: '9f0569c2b2116a5bd41f12956984e2dc0de6356a', class: 'task-row' }, h("ir-checkbox", { key: 'e9a13a2fec514a66074d709f23fbf9ab8059b9fb', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '7bc1d699c4ac315b0c0d99fd467fe7f66b999a11', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'ad4964e229f5be8562b8dc50d64276b4f493948a', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'ec74b5c8780358c9fdd83ddbc2ff135254f61d45', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '0f650b6bdaad98bbf37085fbdadc69cadc3b1015', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '591482c4c22b6a7ff2c788e7044d9b0655e009f7' }, locales.entries.Lcz_Status), h("svg", { key: '5a3878df0a6b3898d6bcc193b22c24486a5f0bf2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'c70ba28d0f0b34ffe70c7f14ace75aa105e3fa0f', d: "m21 16-4 4-4-4" }), h("path", { key: '5bca3da25cfdd1daeb5527fee5b9fde0370b68a7', d: "M17 20V4" }), h("path", { key: '2eaadcab4e0fd2c328a54da931ab98a840787051', d: "m3 8 4-4 4 4" }), h("path", { key: '149517c0d61b62881ceb16df4793dffa457c70ee', d: "M7 4v16" })))), h("th", { key: '2cbb7b76175e3f9cc0e4c8dc0d6ffa9192081453', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'c57b38faad43b4bf39f85b0482085a1984115c6e', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '30e083eeab7bb5accde48f42d7afbd30a0e09de7', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'aefef7027ccf0f53ac77d56bb05636dda5db7682', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '2507b5bf7cb2c55d68aa8e67b9491acbda42b29f', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '9ac86665b666dd94b6f0d94e24058c7edff07cf4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '33086a50a148331ec810b3e70e265c7061f673ec' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '1ee9ddd0e7f4a93d350ef20cb147d44545231721', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '06ecb00b9945e5024aae574e5310583dab779e16', d: "m21 16-4 4-4-4" }), h("path", { key: '64f381e3293acffcc8d9a08c71e94fd34bcbce64', d: "M17 20V4" }), h("path", { key: 'a10e6f53510094bed9488638a295fabfdb592eab', d: "m3 8 4-4 4 4" }), h("path", { key: 'e09301da142777f32d2f35e56e38ef9ebec85a55', d: "M7 4v16" }))))), h("th", { key: '8593e9957ab000be1a8ed6fb5b184624bd0cd8bf' }))), h("tbody", { key: '97a2ed95be41c198260de00f82c5d3b80b6bc276' }, tasks.length === 0 && (h("tr", { key: '12aafef77f5ea63989541b8ed17a425142df5572', class: "ir-table-row" }, h("td", { key: 'eb6f0b91f8b602dc714d11404c1611844feb5ccc', colSpan: 9, class: "text-left" }, h("div", { key: '6eb472beb7a0da77bd4a7715665d822600c1e07b', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'dae156605b27315d749681baea458a8cf89b3e6f' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '2ed3761195071d07261788b318efdba6d69e9cb6', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'd31faefca4132d68845781b09aec7b4af4aed850' })))));
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
