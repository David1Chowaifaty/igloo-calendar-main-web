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
        return (h(Host, { key: '6e0f7a5171b900b5aea6bfea03a03e3d73591e7d', class: "flex-fill" }, h("section", { key: '374c81997be20c6788644efc4f1ddaa915d19de1', class: "mobile-tasks-container flex-fill" }, h("div", { key: '7d38aa6bc79940230bcb139a26e09632595c3759', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'e18d31bc10c95d0d09d68d95be9dfee9385521b5' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'ba0600788ea299bd010714a02fe08f33869c0a35', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '7d7266b5bf7fdfaba98023201b62f52710e1818b' })), h("div", { key: 'f9dd8486008759f6457c320057036f8269a4555c', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'f246920847277f5ba801d7f702ab1de3efafb0b1' }), h("div", { key: 'e01d3061b25c7ba53004ae87ca43b9df99afdf22', class: 'table-responsive mb-auto' }, h("table", { key: '3e68e0e3a204ef67d35dcd052a93d314d173c89a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '17f15e292df93859a6facc954e2370479eeb9088', class: "table-header" }, h("tr", { key: '958d33b719a3c6810d6a660cec6fb58a13df1347' }, h("th", { key: 'fee94fe7913df7bd2446df201a2528607f94a22a', class: 'task-row' }, h("ir-checkbox", { key: '3c9129bfd486fd4af281abae684330fbc2352553', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '0154a4c3c95ce8b043b0ce0031c9d997983b33a8', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'ce48b5c47c89f8d0f7b68aab0b0b2c7e00d2d3cf', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'b80493bf963f73b5e4d6554bddfb488d6f9cdaff', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'c7f1e66608ca4b823fbcd98682851bc7daf4b4b9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3477beaa4dfc0cb6a8aab46b5e166f2e2243c592' }, locales.entries.Lcz_Status), h("svg", { key: 'e4df2d1d28ad65acd773751cfec1e777fbf29a17', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '39fb8a042aaf49b2cdc5cb2b1b74711491d7f540', d: "m21 16-4 4-4-4" }), h("path", { key: 'c9ba8584f81a7a07fc33b2b3f02a9effc48fc2ce', d: "M17 20V4" }), h("path", { key: '1f749665ccc73933c41412d50977aa643d4ebb1b', d: "m3 8 4-4 4 4" }), h("path", { key: '95fb0c3d0c8d2a69a41f7da5cfaee263ef296f53', d: "M7 4v16" })))), h("th", { key: 'ab2bb76e1d5ed5569df05dadee25fa3c024779c5', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6fde60bdb4b0e02743fb673b56be3a7c345ae0da', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '05f83314c71b89fd492633ebdd02cfe6d3a46909', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'bd830e6919a08e39a6dfd41e8d4dc5830269741a', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'b7f2063ea16ed44af841a3f8112b2cf14505dc3a', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'ff2d9ade29065f9594233afee483415a8355b571', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3d53334a5018776136475565e0e016181ac9f785' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'ec6f01777d0a9ff5899342f371f5268ada82d3bd', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4013c8b6abc547687387fb17b54e9a3e228e3597', d: "m21 16-4 4-4-4" }), h("path", { key: 'd2787395e4dbcee20c01468c65987e43940bbca0', d: "M17 20V4" }), h("path", { key: '4d296508ce5fd2bd78d546f61d21dba9266d9c66', d: "m3 8 4-4 4 4" }), h("path", { key: '157765d2847852f8a83e93874fcf056bbbc79b5b', d: "M7 4v16" }))))), h("th", { key: 'edd167503d005bff735fc31e3ccf180af1005a51' }))), h("tbody", { key: 'c09f823df00e8efd4d78d26d575e8070a7633d99' }, tasks.length === 0 && (h("tr", { key: '10e043865cdc694d61290edb96c85da922f332db', class: "ir-table-row" }, h("td", { key: '6e2afd4eb7b82056d1f6f2134a1ce4a358cdbc41', colSpan: 9, class: "text-left" }, h("div", { key: '3b976e9227eb8cfeddba3908bb92f502db6f2305', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'dc47e7628e6e3f8a0e81a2984117effd70eafb13' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'db6741207b07fb9c8d119b4d21f0b036eab677ee', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '73cf4366df5aa2124585c25cfd9471dfee35706f' })))));
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
