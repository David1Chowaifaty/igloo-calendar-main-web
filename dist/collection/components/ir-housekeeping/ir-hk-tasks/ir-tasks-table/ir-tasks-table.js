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
        return (h(Host, { key: '147164b1d2a5a29286864960d69ad9b66d6534bb', class: "flex-fill" }, h("section", { key: '838ede580d2945bac7d5c6199cb87c42d4dbea83', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'e8a5a2e502e2698c530b0d4f20360f42cb8c66c7', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'cc44f2a628543358c6ea373b0fed0e58fc4611c6' })), mobileTasks?.length === 0 && h("p", { key: '9951e8df7050d8b3daebfceb4c842b9417f30c1c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '5b07aad886e5a04337379121373bd53c1e6b7fcc' })), h("div", { key: '6d31fad3363880cff05a62da5d7b5acc3868371f', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '9f2f116dcffdaeb24d26beaa51f4b26368ddfaa4' }), h("div", { key: '14120e044784b5ece52370508b8708f56020a16a', class: 'table-responsive mb-auto' }, h("table", { key: '6394f32f999d9b9f332a32e2f59bcbb3d6c188f1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5ffabd9b70576d4021126b801ee1054bf4b81f88', class: "table-header" }, h("tr", { key: 'cfafad70203f2759c4b2e6a96270aa79e04ae78f' }, h("th", { key: '8942a006f4447d0fc18c82e6a51c82b18c9fff2a', class: 'task-row' }, h("ir-checkbox", { key: 'f605b41cd28e2d1ec55231f78bda284d12af67f2', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '86a362cf98ee689c88adc2765e076e8d12a67715', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '5de14fbf54cb938bba9503c577eb6f1d7b2fd32e', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '4ff8e1c609457a9e68e3367b97d318bbd2c21237', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '9895a287a646b97ab463faf03e0ef13129ce99f8', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '1c6d8d8cf5e12586d130cf0294fdec338afd5f35' }, locales.entries.Lcz_Status), h("svg", { key: '1fe3ef7788c07f690fec1b3e99e5cb4846220962', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3014d76f6478c3d120a9610354ac48f15aec8e96', d: "m21 16-4 4-4-4" }), h("path", { key: 'fc85a5643f0b981b279a27076325a8399d77f9c1', d: "M17 20V4" }), h("path", { key: '5b181445ce07ed53efb60f0fde1875155f0877f3', d: "m3 8 4-4 4 4" }), h("path", { key: '84626c941ab960092b7098327e73004be2799b9b', d: "M7 4v16" })))), h("th", { key: 'b23b8deac28762d156ef0019660c523cc9a78668', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '85c094532777148591593a528d680da976a9a05d', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'd3911db0dd09cc50cd9a24c5f28d5fb9373d7e6d', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '36a8ec23069d82fbdf8111558444066b6f1ed2ca', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '9a231984be5aa2476fa5c104f1f786a69c9553ea', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '4b6a4f89e894da2a1e8746b899b905a4e497cf35', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '9b0690a27835bc89d4cc1e601f3a7faeb01b36c3' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6f9efdea4734467298eec1bbf84e873fa6392b41', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4329073618464af8e4ffce6e50be9e1f6a6f854e', d: "m21 16-4 4-4-4" }), h("path", { key: '096e9a500bec90116faacdf96f75165ea5c3136d', d: "M17 20V4" }), h("path", { key: 'd898330423cca6e2a20895b568d5ad4a625ac43b', d: "m3 8 4-4 4 4" }), h("path", { key: '40d05a31b18bb1f1df69860f64732337092630a9', d: "M7 4v16" }))))), h("th", { key: '79d3b8abe610b06429de3af4459990bf3f78c5ac' }))), h("tbody", { key: '21ab62caa99096af222a8b022ed39cba84b91613' }, tasks.length === 0 && (h("tr", { key: '27590b7777597fd3b0aa775c42071109aef5dab6', class: "ir-table-row" }, h("td", { key: '4a9ddb0cdbb43ea174c4fd392236e1e8082ddd7b', colSpan: 9, class: "text-left" }, h("div", { key: '37a6f2e07872a0dc363c479357fd94c1b2fce552', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'be963c3c2a390195aa089e0848ed257c7f44d4d8' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '823d6338f51de6481ebc5c11431e47b899ffdeac', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'f7b177c55199673a3c1481a0c7f9b6954e46f58e' })))));
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
