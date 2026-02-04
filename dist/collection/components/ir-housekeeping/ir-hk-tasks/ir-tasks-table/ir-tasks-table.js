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
        return (h(Host, { key: '0be1b5b3d56dd0f395d5f99d587a3e5a6ec2f301', class: "flex-fill" }, h("section", { key: '59f0e2a3b61b558e5614a4d437a7cfc2d3bc5dad', class: "mobile-tasks-container flex-fill" }, h("div", { key: '7dba031e193db5ffdb9ea304f1725d8031a6a092', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '8e358e1ae4e5a381222de5b82fe83d29d198d54c' })), mobileTasks?.length === 0 && h("p", { key: '3b4a0f2fe7ddbda03a9d3efae0dff023d7a54a9b', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '96dabb92b8cb6938e7db228f869c48d0a6703b57' })), h("div", { key: '83790d754ccb8dbb7919324ae4ff12e3c9d5944e', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '3f7049dfc71f499ee66ef29eff147a0e14319fe9' }), h("div", { key: 'c4079d3f98872ac2f00c0b6b9113772289dd3319', class: 'table-responsive mb-auto' }, h("table", { key: 'bc01f725994a01397c1eb482f3a08c4129374c4f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '348b25dc9d93c366f56ba515c105a155a81923e7', class: "table-header" }, h("tr", { key: '63abffe61c5c81456a0af2b51f6142f1199ab9f8' }, h("th", { key: 'efaee8670b344b208cb7e981f2fdf8ffd4de0f02', class: 'task-row' }, h("ir-checkbox", { key: '6d2b25a35712202e698f5d4fe4554b708cf955c3', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'a8d1b69e4886b4bd84e0f0f1fb6a808abf7b0e38', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'cb7487e3951c1b081d1271a57d556a38aac65462', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '77b6ce1542a8c8cdca89d9d98dd5c986136975ef', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'c513c8b8f48773ab900b3233d1573291f6b28614', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7f99958067e39787f8cb7dfa23e3d80451de6c83' }, locales.entries.Lcz_Status), h("svg", { key: 'd45f30d74c33092fab3d85842df9490b0cdae6ab', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4fee630969e031068bbc16feedd96fd43a3cf102', d: "m21 16-4 4-4-4" }), h("path", { key: '31d82e68f8a0ca3cf783901ddb95eaa355c4d1e6', d: "M17 20V4" }), h("path", { key: '041b41db7e23ca420df787826ea8206f9a81db6b', d: "m3 8 4-4 4 4" }), h("path", { key: '94909788a4441cc8561ac81d52ad3e0cd2255429', d: "M7 4v16" })))), h("th", { key: 'e1dced7525fc65fb596303ce287c02b34d3ddda4', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6b3b96b022d31ffe028d37ddede225e7f4df2454', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'e1d161de86c594bb28e0c2f99693a5b8efa57a82', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '728ea02aa9b30dcf56b3097f9a51185dce0686f4', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '4778d6f3e7ed3132d9fb510be279becc6a3e50c1', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '5273517e27d5b76aa48953cb65ce5d41e8062203', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'da03cd5d82a8f0b4444ce65711083d96bfa59430' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '57c962542b002097d5406467e402397f5025959a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '351b5a7f90f353e012be286bcb5f0353d3b8df49', d: "m21 16-4 4-4-4" }), h("path", { key: 'e9a6fdd24bf6f14b1d650d5d8ba87e1fc32a699e', d: "M17 20V4" }), h("path", { key: '754cd77fd2b07fedbf324185df415d345ba79d32', d: "m3 8 4-4 4 4" }), h("path", { key: 'cf6515a351c87d7e77bfe5f905b9bc10cf1e90a7', d: "M7 4v16" }))))), h("th", { key: '15929c09124f6b6fb5baa196458c72c32e7b63bc' }))), h("tbody", { key: 'bfab6640c17f27675a6f0550e453cd9b790b30b9' }, tasks.length === 0 && (h("tr", { key: 'b6e39913e4566d57ac432a3233ea47e4f7bf5e3f', class: "ir-table-row" }, h("td", { key: '28ca004c031b44cc6725ef73c4e84fad374dfa04', colSpan: 9, class: "text-left" }, h("div", { key: '2634d9141a953a3c12eb42cee6c31e8eb1a37ba0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'bc2d6d5fe77af11aca47a723a1b8a4efc070b1e5' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'dffa6965eab3fd1ec5713a3d6916f2949bde7743', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '27e82e830cec89b254898b83e199d5552f5c3d6c' })))));
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
