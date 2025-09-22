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
        return (h(Host, { key: '66b0e47b39c3bc30170efbcd48408c458422ed65', class: "flex-fill" }, h("section", { key: 'e73610d571add14aea03b2db4e83e2541a764b44', class: "mobile-tasks-container flex-fill" }, h("div", { key: '55cfb46354481c4a155d2b4d0e75ba2d0a4be68b', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'aad8b2c18c84c6183434a5a76dc65ab640fa2502' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '2f388a8bfab8d0c92863b5597244255fb39cccd7', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'ee7e61299fe8f32c265a4c525310f9bd9925a64d' })), h("div", { key: 'e250a5c9d8485a68fcff6f3b29f3e812bb1751e1', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '364d08aa0acfad8bf333dc2d2b135a9289c7d4d2' }), h("div", { key: '46e3ae1836fd23b2e4e05fbf7f3047705d47f6bc', class: 'table-responsive mb-auto' }, h("table", { key: '4ef311857cfce3bb5e2e8be41716b4a191199e4e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b6f2ec413f83b2ac5fdc0a820acc8cabfc2a1af6', class: "table-header" }, h("tr", { key: '9d37b14d4daeea598983745f17c7655a555406a2' }, h("th", { key: '84f7e28bad18350bd6511866d5a057f6378e7f3b', class: 'task-row' }, h("ir-checkbox", { key: '8be1722b89583b5b1b35e069409287ae693443ae', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'd60166d72db109b8cc273fd367b016759f115761', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'e4cab0103bc0355ec914542c75dbfd05ce6d8daf', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '8cff2291c22de7e7b4a41854b01b7092e6e748ed', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'b2797d3fa837b5b56984ef0c2bec909a98127a5d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '1ef23b1de3a3340134704a31d1d19fbead93794e' }, locales.entries.Lcz_Status), h("svg", { key: '2a2dd56848b6b0203dbc443caf11f46052dcb7da', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '58e034f9a8919d8133e450f76c43011ecca23332', d: "m21 16-4 4-4-4" }), h("path", { key: '23fa6790c36826c968da85a6248a9db75a3209ff', d: "M17 20V4" }), h("path", { key: '62f21ee45093521ac01e9b3a5e7a9930fc381ec7', d: "m3 8 4-4 4 4" }), h("path", { key: '66ba193fa94817cb6f2d414d3a98748b83912b52', d: "M7 4v16" })))), h("th", { key: 'cb13b95b51c4e9303276c6af2db73560457b6ddc', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '551c2a38319a9b09341ff5121916803d3d285795', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '257247469c20b0cfec9d8a24e8930a40e8b63acd', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'ff5849eb0eacb71f8be8a415877572fd15a8cd07', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '651dd1bbe64c0ee63ad97f3da1559aacab2ffe24', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'b02ca55d968d7d278a746ea4d7b3f69eb27b00d5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '944669f44279f832e04dada46ef8a3244fa87fed' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '98ae45511fe6bcc1ecf82e291929dd356d724fa3', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '53ba55d38b35926524a6675f3dcf3eba0e62dac8', d: "m21 16-4 4-4-4" }), h("path", { key: '07240c3f1dd5a8a5723b6199ce5818695831ea44', d: "M17 20V4" }), h("path", { key: '92dfe3922bc097edef07a6d0c6148eefce3c3a15', d: "m3 8 4-4 4 4" }), h("path", { key: '1ee14d5329758e887bb9a7f054c02428ad1a29bf', d: "M7 4v16" }))))), h("th", { key: '862c34cc179d0a976f40acecdf3c321c3dfb0e67' }))), h("tbody", { key: '1fb77cb526fb245876712473cf93165a8c438840' }, tasks.length === 0 && (h("tr", { key: '9268fff9a78bca1a08e0cd221ee2afe57f8f4746', class: "ir-table-row" }, h("td", { key: '9e168fc162e7d553ecb9f59b2ea69a16041934ca', colSpan: 9, class: "text-left" }, h("div", { key: '2be54bd88809db338290e0c0f1b073eeb3917884', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '06307282a853e12bf780b86e7770a8d3663d2d0e' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '5a25a68fbc4b2168e5365ea71bef519ef832e71b', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'd613ddd4d05e0ae7f98cf1a4a492ed024df5c1f9' })))));
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
