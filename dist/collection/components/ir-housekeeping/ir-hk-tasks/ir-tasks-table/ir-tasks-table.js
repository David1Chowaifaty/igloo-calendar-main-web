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
        return (h(Host, { key: '4ad015b93bfb3aacbf0da2130c512ec7ec78c5b1', class: "flex-fill" }, h("section", { key: '67455601f6f816a7fcf47bb2914218f8ce8e8bbf', class: "mobile-tasks-container flex-fill" }, h("div", { key: '263dea0d97e49ff6f53cf194da85bcddca68ed15', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '2f1393d176267a1b2280bd4a58743baeec3bd590' })), mobileTasks?.length === 0 && h("p", { key: 'aa512c3b8529760f80b92d7d03fdaaa473d10ca6', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '20c726791c0561a954282d0fe4a083c1eca90a63' })), h("div", { key: '3c4fe364be95d3c860a8324a11d4fc9e7837fe56', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'e21de7f0c2df09c5e163ffb70eb18e8fcb516d12' }), h("div", { key: '999e4670535e85cf74bd37cac64b1e15031c37c7', class: 'table-responsive mb-auto' }, h("table", { key: 'e29776cae6ef2877e91dfa1ae04684226e8e0b8d', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '832dbbf4697b52f6307b5a392e0729c4ce3fc516', class: "table-header" }, h("tr", { key: '998aac61cbce13c610b97653fe7e1515e0b1e3f9' }, h("th", { key: '3cba2d52f4b41683023e602689e0a9c556e02002', class: 'task-row' }, h("ir-checkbox", { key: '3d8c5efcea1c8d4af33b41a72ff43c3cfb43160e', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '6ebfe0295cd6aeac5090c1aea0b3165653b2004a', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '8efae2ac40999db730681ae851502a313597a9c1', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '01f62f3f0fd68959f64e0f4364307f790e3b6aca', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '2c90bca6eaaddea875aa9a62d6774218eac316fa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '26f8678e7d2b907581ada162bf65fb2fe345812e' }, locales.entries.Lcz_Status), h("svg", { key: '080a668c54bc93d282d9ebccde8731c7ecede6c2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '5e4df9b9bd1b98ee7c8a6ffdf3aa759e65dfe0bf', d: "m21 16-4 4-4-4" }), h("path", { key: '793596e133032585a5dd6db38c3ad274a1bb1775', d: "M17 20V4" }), h("path", { key: '31409579a88371fc3081034ac8111cfa4b1e96d5', d: "m3 8 4-4 4 4" }), h("path", { key: '52225d63f33b0bb3cedf2096f1f12c053db47682', d: "M7 4v16" })))), h("th", { key: 'b7f95cbd7117cc84558285694885f1b96ec8acf8', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '4e41154df7f4f38c8753f3ad7ba4b8b7836e1c90', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '4281f0203c299e50eb6af16a017a3c20ec970450', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '82df1c15dee6b7fb2944b2ddb99fdef3dd9bed05', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '5d930751fbd87dcfef12beff3b9575e621bef72f', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'e19152bd29d9ce64f51c36b96c1c5743e9762acc', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b8eab366d71b6df1491c1f147297a48696ac55fb' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '3d1a29c7a835ced79516d2b4fcf43070d2c3dc64', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '2c883e5c7914e54094bb985fabc287dfd1783898', d: "m21 16-4 4-4-4" }), h("path", { key: 'da0729a8649d614ceef39ceb06a505ce33a0b498', d: "M17 20V4" }), h("path", { key: 'b7fc8b709613aa5cfd74796ae6678761057f7070', d: "m3 8 4-4 4 4" }), h("path", { key: '44de78f38655cad0a655ca3b2fec266bdce4ad9b', d: "M7 4v16" }))))), h("th", { key: 'ab2b635d08a47266508332ddbdc7de4e73eb8d75' }))), h("tbody", { key: 'a8f06ee213b2ce8efefd00e4c897a782dbbfda4f' }, tasks.length === 0 && (h("tr", { key: '194907bc674d526e477e3ae100cd3ae6f02df977', class: "ir-table-row" }, h("td", { key: 'b8b75e752f2da29ad5e5c2e912ce999aea2cb934', colSpan: 9, class: "text-left" }, h("div", { key: 'c178effd84366bd8478f58c262ba0f90328daf06', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '9225b31cf31295e5349280b224bbaf4631f52e38' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '029b4e7bfcf9ff0155a7516ec9efe671d9676fc5', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '5400d7ef70b92e00ee6f77a33bdf1f7289e179a9' })))));
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
