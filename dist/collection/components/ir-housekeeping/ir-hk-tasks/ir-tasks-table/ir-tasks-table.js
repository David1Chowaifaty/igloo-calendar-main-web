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
        return (h(Host, { key: 'bcae355d67d36c0ed67a7f9c5f503c7b06730bfb', class: "flex-fill" }, h("section", { key: '0a1bbd8b2a4c13fe292198543fee69273d7d3dcc', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'a3a8ce0117ab3f61df9c128ad6de19a324d1b347', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'ebce244bba419c08bce9feacd5c9c35345488e6d' })), mobileTasks?.length === 0 && h("p", { key: 'ea64c63faef9497a5fa9b7624f23cd1be0368f80', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '9d2a7db8f48d841a9013f4b91fb9c8b4dd91948d' })), h("div", { key: '144c16b667495e19c5828e43a35299e295a3c9c8', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '802fe65cb8e75999b58f256c98c4ce729e707d24' }), h("div", { key: 'a90ec16e81ee595557b94e13fd1fc44e85c7d586', class: 'table-responsive mb-auto' }, h("table", { key: '18337e3ef6a0c093717d6c37d021b53fd34bdb4c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2026d5a2968f950825737c4e2f43befec550c135', class: "table-header" }, h("tr", { key: 'ecaf85c782c59d796f3c1d12b0dcaad793fcfcc9' }, h("th", { key: 'a82c971575d56aca6037568f0840851b5285bf65', class: 'task-row' }, h("ir-checkbox", { key: '108486a9a3ecc3a981397bfc482a1c2d1f113987', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '3862dad689d0263dcfc7f9266bb6f50f604c035c', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '372622f8ef826fbe97cd6e219409e92bd336c1c0', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '8e8fdf949ca4632da3ef71a29b5874cf50af49c2', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '71e058ce94fdaae6f01b92e64d1c92940d0d6b9b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd8c4b8763b8b7ca53728cc48525c4427a2714991' }, locales.entries.Lcz_Status), h("svg", { key: '82ce870d8acdbce6035be400d9c5fcd2de980042', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3f3d85258750aecf1088dc5736e3a79e8ade648b', d: "m21 16-4 4-4-4" }), h("path", { key: 'f34991b7ef244bf2a8c2c569c3b714357c76e336', d: "M17 20V4" }), h("path", { key: 'd92badf4a7a04ed531ef4ada320c81f89267d016', d: "m3 8 4-4 4 4" }), h("path", { key: '1889d371991a416bde8695edb7003a5c50f344c6', d: "M7 4v16" })))), h("th", { key: '4dea4b69f9c6cbd500891c473db27d124d0d80c6', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '5925be687719a52b97393d309abd2f6d7335fccb', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '802215c98556afb75aa2864d336f70d4e95e1c28', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '69585e7ce8f7b7dd42893cb6e6691db7166d0ac4', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7bb071dbc2348837736aac73bb2ca09580d49c7b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'b6ca784a04d429f4d9dd288aa1a6a0a6d2527614', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '0e238e38beb4b9dbc6e85e6abb43e9b1b8f37d6d' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '21b7b6be56f16c30ed1ad1ba848d55d2723805f1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '0b8f222b317ac16068746e816b0c6c08821bebb0', d: "m21 16-4 4-4-4" }), h("path", { key: '9b280871233446dd6639d4049bbdae9509045858', d: "M17 20V4" }), h("path", { key: '1e78a9dbd0264c42ec10af7d4561928c8c719e35', d: "m3 8 4-4 4 4" }), h("path", { key: '38f1acf4a98b3c423d060b618965f0f49fe92625', d: "M7 4v16" }))))), h("th", { key: '10a4bba1b99be1e8b784d7b8a052f43f3873c5ac' }))), h("tbody", { key: '2de53e5f0eead7f087efe4a912a1917b588ec3a6' }, tasks.length === 0 && (h("tr", { key: 'd32149b9eda95d3023a9a79b95250d5cd0472fbc', class: "ir-table-row" }, h("td", { key: 'e7d39b3772b189c28d3c4e0db7d0b006f74d1f59', colSpan: 9, class: "text-left" }, h("div", { key: 'e35aa777aeb0dc59930be21bd1b3a5d8b0a7307d', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'ebb76d05ddf09a13414b8e1e806f2b3af85ccfed' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'f440b9d1c445beb03ee2d4b61c181919562bb635', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'd42352e487797d4d37ee68bf1c0c94f698e67fa8' })))));
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
