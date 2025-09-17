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
        return (h(Host, { key: '2115e75071cd97afacefd60a2e902eb117bc3a3c', class: "flex-fill" }, h("section", { key: '5e45c637385b4f7cd0f43409e877fcf1784a3c92', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'eb7ff6efdd5fa3816e40d649cc421d8fe87001e3', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'c12882cf09da92c0db0afb19e4ceffa2e38383a9' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'ff70ba00209dc6e4cafb6e3d56ad6eb4243b0698', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '1eccd9a3ef2e4aa29082060c609d39adfffa4bc4' })), h("div", { key: 'c151012c42a3c279064690962bcc5dd2e35de338', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '142e7b52f2507c84d531802ebb01fc043fc10b5d' }), h("div", { key: '589cf2fed3b6eddc6569973d71e88ec755bb8d54', class: 'table-responsive mb-auto' }, h("table", { key: '842663905c6383c02bdaabe668e1ed293f2b9965', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7c393b8c56dec2d9db0859918ac5458f4c087754', class: "table-header" }, h("tr", { key: 'd963b54db0f796797a1a22d1a9c443905d4985e6' }, h("th", { key: '5f48e5b6202131470bd7dff6cfaf68504f4d1612', class: 'task-row' }, h("ir-checkbox", { key: '1db02538d8c8a496e2086bc84d3a304e01dc0bc0', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '0a5ad5dd792a6d5d7afc5914b77ec4fed3ce6b01', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '274db5fed768fdc9fc82118aec02114a02adb9f1', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '8f10399811825614634c985a22c6015f62f7ce19', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '89ef861564ec86e5e70ccbba0d028cfaf186e7c4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b6d605d016796d05b4dfc0c9e7df55e7f4b1b389' }, locales.entries.Lcz_Status), h("svg", { key: '831a162d700f9c7d658f6f4c124c7467fe56e1f5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '61a718a40598d79ddd56aec33269036e2333fe24', d: "m21 16-4 4-4-4" }), h("path", { key: '3054f9d845f04165568260641c361ef39843400a', d: "M17 20V4" }), h("path", { key: '432b4bd11f6e60528c3127a55cd72ef63620e694', d: "m3 8 4-4 4 4" }), h("path", { key: 'd5021dea62f5d0f7a002e4abdc74d849103f4d4f', d: "M7 4v16" })))), h("th", { key: '5e93c1a827278e837d1d89d1cb09756f0876d585', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'eb1c80318c26216b05e906979d72b0eccf997641', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'ade5926827c0670f6a3024c3154ba7b0caaf4f61', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'cc4b0a3366c5b0925739ea6140c52c76733b43b5', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f28af2c5e2766578785244b47a02482d858bc6be', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'ce2dc235694f480371aa3400e28ed8027e9eea41', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f6ddd451793131f15c4d1efefba05d44f59f0cb3' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '7214e88eb1addbd3375ca505fb085cb3de15763b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '08cf60717b9a7ded518974bb869bf08b89e0917c', d: "m21 16-4 4-4-4" }), h("path", { key: '14c762c4fd11f9a065a91146755ad045457712fe', d: "M17 20V4" }), h("path", { key: '0f573a538fd5962ea355dcefdd6746e02a445a31', d: "m3 8 4-4 4 4" }), h("path", { key: '75d93228f7e19a199d704fe340a68f69c5785d5f', d: "M7 4v16" }))))), h("th", { key: 'af7f2c80c9f2b2b4c56e5d69ae1ba2c5d86efe17' }))), h("tbody", { key: 'ca23eacdf637abf3887b544fe87d8ec8d65fc39e' }, tasks.length === 0 && (h("tr", { key: 'a100eef679574a18fa2482a378a6e7a4d5a6bf21', class: "ir-table-row" }, h("td", { key: 'e7530b74e118949d082edb92b3913972f7081c18', colSpan: 9, class: "text-left" }, h("div", { key: '6384c20acf25967bddbf8f6dd2d15251f12b8baf', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '17d467f2688427dac5157ea44f03754647bbfec3' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'f038e9125b79f57bf9a242c53dfbf3b5a1953a6d', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'cdcd198d828f237b74fcb80e4249e8bded62eee5' })))));
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
