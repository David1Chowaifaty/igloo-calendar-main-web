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
        return (h(Host, { key: '12b5be5de1f9baab291fe06c1c544297b3ceab0a', class: "flex-fill" }, h("section", { key: 'cbb7efd421e342469d083ebf1bba088f72fc420f', class: "mobile-tasks-container flex-fill" }, h("div", { key: '0bf00582a383a6313b69631977754bfd33f24faa', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '15cc870142bc890dee44f9cc740d8f13acba763c' })), mobileTasks?.length === 0 && h("p", { key: '9614e01c042c85544929b5810d7ebfb2bab0cc2c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'a272a0a6398d861fe09961f5b72fa49ef8a6d280' })), h("div", { key: '44a4a29358e80da0ccf2db49d61688b9c6f35477', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '8258e9c40866598af4cc312aa448aa3f51222ef8' }), h("div", { key: '8f5eaa2e77fe17491786c7d1e2057fcdf90d8220', class: 'table-responsive mb-auto' }, h("table", { key: '87b63a1b026bd37c8b9ba03a778eb64dacba06b9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0275106e06d30f6616afa5d488618c3f0a3b8fc2', class: "table-header" }, h("tr", { key: '154d9ddbcc7c0cc2c0071ea4bcb62b5000db296d' }, h("th", { key: '8f8b81a8f46d0261b1855c48142e0d2a3ed7e382', class: 'task-row' }, h("ir-checkbox", { key: '1dcef64caeb9e6247cceed816e211aaf271bb5dc', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '00f5db624c0e1d3f7ad5bb9a96beb326b65b6321', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '9094fb79584a65eae0b233cb127e919851928495', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '174a31c63d9c1701cb6232007b83c3ad220caae3', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '5a3a4e7b626385e7a14f21533cf9602015448d91', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '75e6350d01f2bb94d14a7cb5cb783042a57543f2' }, locales.entries.Lcz_Status), h("svg", { key: '43b2375204b8e6afb550b0e05bbdcb016016404a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '653333607189995c234ecb14e973fa60d61ed1e9', d: "m21 16-4 4-4-4" }), h("path", { key: 'e10d7543ae435f9091a56ee9a3ce20543064a058', d: "M17 20V4" }), h("path", { key: 'a4b942a138fdc814a5eb3cedd9c1549bfd1832e5', d: "m3 8 4-4 4 4" }), h("path", { key: '0ffc1e7713ef74de97036ab179e1f8d0feddc4dc', d: "M7 4v16" })))), h("th", { key: '6c79cf140018b07bb992ab53f1bb6bf207ea6be8', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'a5cfb1641bc41841e7ddc68641705fd88781c815', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'ee36ed847d8cb075d441776eb0d94fdc667af99f', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '685fd235372a9185f5b8e328723928129ae05258', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '8127c4c9e45178cf8ad5529442e9ee6b934c1a6d', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '039971b11537593f4ee57fe9190650a102170bc4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '309c3794882b38469bfe2c38cb918139ed5f7b28' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '960be27257680e2837bc3b503b17df934ad51d49', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '8d4ed71a96b15538fde64744f3ed82934300605e', d: "m21 16-4 4-4-4" }), h("path", { key: '0b74ed8880daffaa6ef793d389fef54ddd60dbdb', d: "M17 20V4" }), h("path", { key: '7325f3b7a40476a91b984b320ad470015926f84d', d: "m3 8 4-4 4 4" }), h("path", { key: 'b04fb24ac5dd94902e2580ef61683a00ef160bad', d: "M7 4v16" }))))), h("th", { key: '5d15c9dcdd101b928ecef7a9db32406f4a5e3964' }))), h("tbody", { key: 'a3857f1eb1c387c8e2f16a76ada4f16dad845e8b' }, tasks.length === 0 && (h("tr", { key: '207174a982f64f30febf232e7d95de21008d5418', class: "ir-table-row" }, h("td", { key: 'a4932caa62f40e779406b6ae0b9f4d4ff8cf6b55', colSpan: 9, class: "text-left" }, h("div", { key: '81638dce9c75a86292a1995c54ffe559db4d93ee', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '4f0dbc6ae09ea8fffa03411d60f7108804a31071' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '38c8ab0ea7da4620a9cae3617ad06e826bb6828a', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '11b08b32817bf68e2296db0e1f6cf9a1779fbdf1' })))));
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
