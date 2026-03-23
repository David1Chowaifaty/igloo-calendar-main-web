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
        return (h(Host, { key: '985d2b4e57844737f3baecc13af821bc9c805943', class: "flex-fill" }, h("section", { key: 'f1c31b939938bdbcf9db23c41fa48c6c4f6d807c', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6de6575de8d65b366738ffcb91b6ee20d3870e77', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '8a2db8712148dc0176908e88425a6f0211d9939f' })), mobileTasks?.length === 0 && h("p", { key: 'a7d903ad359b3b1b72206bf314d130a82da840e0', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '6b4de1ce334ccd4d30104533a9104919b0d8cfdc' })), h("div", { key: '8682c9887992b850270e04b46b4cdcdfeab9b8fe', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '2f57e8a2c1fe9bd55e86d459afbe39f190e13d48' }), h("div", { key: '591950ef824e48ddcc2e71b9dad0c5bedb102a9d', class: 'table-responsive mb-auto' }, h("table", { key: '0d01be372a6ad5cb7083bb5f2bc58d85eda98ee8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b46124a3d04771b5f3ce2951b765a03d2336c4ab', class: "table-header" }, h("tr", { key: 'ff118a378f768363256230a2d0a21aca1e49ace8' }, h("th", { key: '6e7dcba0197fae0a9a0a5b2c1c0f8ca697360704', class: 'task-row' }, h("ir-checkbox", { key: 'd642f23580802e9ba5cad0c32d9e3290ac00d33f', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '772acda970a5c54959f52d18b632c856851ebc2a', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '8923678001d1e009aaba08a2c43dcc74b369d88f', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '7bb6d2b02c101bf7b4b257b3f745e8daabfbe991', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '873ff28bf39548cb1380ac48241314c76df55a51', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'bd980d713c89a4013084018069fc67ee5c302571' }, locales.entries.Lcz_Status), h("svg", { key: 'e426b3a9f7e7e141574c588679f8f53241310465', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'dc02da64afc4642879dd87f41b7dc2cfb829d460', d: "m21 16-4 4-4-4" }), h("path", { key: '169131bbb5ef4672df595d6bb78488b6c9e2e518', d: "M17 20V4" }), h("path", { key: 'caab9ec88f8a66643dce68c643a92f0d36d32087', d: "m3 8 4-4 4 4" }), h("path", { key: '34e691334389263e150995e13a82b5f3696cfe10', d: "M7 4v16" })))), h("th", { key: '527b6069718a5c4a89d7138893319cd132a23157', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'abbb6a757a154e71899973e717d4ad60c87e613c', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'd25074aa322a6d327a348e10d7c71c9d0a492fde', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'e10d77948d85523cb6903fb50fa75ccdf739b301', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'ae3582eb31a8f26c6a731165d4730f93646a1b44', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '09c7b6919a60f99cf8a4d1d0d6432561e6c22ff5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'ea5aea9f209df3f9f39973d75e95950f54a9cfeb' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'bac37da86b0bef7faaab55b1b4426e0f9a1116df', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '233b2c44bc9ea2586efc220fa20d006b4619c36c', d: "m21 16-4 4-4-4" }), h("path", { key: '093615500b8462f73dbc64768a09591354ca40e6', d: "M17 20V4" }), h("path", { key: 'c080e14108d2bf2bd056fcc78f4b90379dba8c38', d: "m3 8 4-4 4 4" }), h("path", { key: '156f17ad20eb9c97d040e4e66a4738b707169932', d: "M7 4v16" }))))), h("th", { key: 'd5edb739eeff7589d60e809ed1e965432adb9767' }))), h("tbody", { key: '03616be7f299e5ac92f38dfa9ab099dfa522da26' }, tasks.length === 0 && (h("tr", { key: '3a8edaadbddb0a6300b875e7ab9f9430412ed877', class: "ir-table-row" }, h("td", { key: 'b94ed7f308dc6619f1aa242c2feb8138f109066c', colSpan: 9, class: "text-left" }, h("div", { key: '45c647ffad51fa8583b23d83da8c7b9fd2f4adc8', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'f5750bed4c8b4d2d3f853d1194df37f8e4afbaf8' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '27a219c5d8a24d3f70888e1eff5a823b94a2be06', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '27db7573b356430a4b37d15c5301e4e6fe99f701' })))));
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
