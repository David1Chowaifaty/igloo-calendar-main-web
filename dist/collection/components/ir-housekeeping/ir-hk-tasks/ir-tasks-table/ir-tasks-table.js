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
        return (h(Host, { key: '632b2dcbb1fe893719e7242ca9b507fc1330b31e', class: "flex-fill" }, h("section", { key: '75ec3adac6f6d71271d53bcafb69d9cb6faa1f87', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6dea4fc4ba127985af863044775efee6a68889d3', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '35ec7311db16520c669c0e4bc3a8628ca8e263d1' })), mobileTasks?.length === 0 && h("p", { key: '9cf1b7e3ee6d36c17d5daa6245c84e33752ce009', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'a658ec8338a5da377cb2bb3f5701443fed6f5836' })), h("div", { key: '6f6e10c7e2d09082421bb2beca8b901aa7b0ea50', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '6836ff3f82790d6fbbcd450be72555d28d984a32' }), h("div", { key: '551decdbbca1d25a1022b85fe4a9cf0dd872b340', class: 'table-responsive mb-auto' }, h("table", { key: 'b7b0449eeef60d7262f758d2c5713deea6823c85', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '319ceaa7981603f8de13ab5e277740f76a3ddf4b', class: "table-header" }, h("tr", { key: 'a6c4121994a9db01697eac48d1fb3c7d01c8f3bb' }, h("th", { key: 'c79ed7b7e345d086e7512990480133fee500f70d', class: 'task-row' }, h("ir-checkbox", { key: 'f1913b36b3770264f0e2fff36059d30d9592842e', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f46417d5898bb8bf55ea78cb34aebb2dd6c0add1', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '22464923e0b851d1b4f42115fbbb262484e8da64', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '896da1d2ded3a49a6a1a3f3e041b93e15aaaa9ac', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'ebe6b669ead1ce2f8c4fe779a3215e7c3ce3e9d4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3752c79e72e51c57e879a3386f259efbe48d1656' }, locales.entries.Lcz_Status), h("svg", { key: 'b2483c34cdd41aa7ca7f23b877dfd35c247e9728', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '650375506d9e3186fb871a11f4ccb898d6542d52', d: "m21 16-4 4-4-4" }), h("path", { key: '7f87d656bf5f8bcb68667dee2830ae394cda9395', d: "M17 20V4" }), h("path", { key: '115a39f53625ddb513fc1306d75cde7cbf840634', d: "m3 8 4-4 4 4" }), h("path", { key: 'b81afa437d919df15ea0d89978c21fbbea3b3295', d: "M7 4v16" })))), h("th", { key: '38dc277dccdf844897069909e9d96235d36d3909', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'ba1f44d860539c1a323ae6fb7b16d0792c6fda3d', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '3f7b03c5f5e5a7e5546be89f07638520f69fefdb', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'deebb9b054a6f59b4529a8f8ac8838edd6b99b6a', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7026afeca546b04f41f9b3e56671ca507dced1f3', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '75087dbf5a1cbd33a4df685f3cadae983c53b82c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '8f6950dc67e45486d9321ea54897615a439a0630' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6f86fd7a8ecd01d223d8460ee3a4ef4d4e9c023a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cbae2d44ba683546dfb9d43a61fd22954a6aad70', d: "m21 16-4 4-4-4" }), h("path", { key: 'fc0f197eb94927d7fca1b360cd3a14cc04ccac94', d: "M17 20V4" }), h("path", { key: 'f7b711f6f89c4670a04382b57f7be465d9fff87e', d: "m3 8 4-4 4 4" }), h("path", { key: 'ff0c89c9089d63273d2cd1c65d78a7a453a8872e', d: "M7 4v16" }))))), h("th", { key: '55fedebf36d62bf63db95ad579af606bd75f9b02' }))), h("tbody", { key: 'e261b09a5480241bf594b22e1dd5516be40255c8' }, tasks.length === 0 && (h("tr", { key: 'f877b8662b6cfa8df3684712e9ba535948120443', class: "ir-table-row" }, h("td", { key: '4a4a237a591bfebec9d1cc956df2828431f5242e', colSpan: 9, class: "text-left" }, h("div", { key: '106769e6ed159c696ecf98bda8a9e4b852eaebd0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '10eb613a533c0e2ea6a248f24e95eaf8d7126283' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'd8e36d4d947a8d27529dd4fd980871867ac2cf4c', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '732750942826ace00484bb6f6f48334c76e23c7e' })))));
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
