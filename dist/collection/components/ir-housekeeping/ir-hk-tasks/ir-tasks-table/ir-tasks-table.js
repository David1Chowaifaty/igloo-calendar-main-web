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
        return (h(Host, { key: '5325c15d867d5abc8efd588bab671664d01ced62', class: "flex-fill" }, h("section", { key: '968856c4563e5539be96e1d14b3ebc6ed9cec640', class: "mobile-tasks-container flex-fill" }, h("div", { key: '01f5c8821fca0b70639e4f165c454dc834ce0b59', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'b77342c10a903ddb25ad8845962f34c171b5a310' })), mobileTasks?.length === 0 && h("p", { key: '6287967c95616fd4e841ec59cf21faa41a45af3f', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '67c3e06937cfb928db385824f5b09b27e0f9117f' })), h("div", { key: 'e5e1bce6411407f8dcb0b7501d83a33aec23ac31', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '3f370a6aec0ea88ddb6327226321b12ab6ba2539' }), h("div", { key: '3fedf74e8bab49e2bf9b3454320588a26f190042', class: 'table-responsive mb-auto' }, h("table", { key: 'd3f05152fbbffa56f9d3e93630bf9057695407ef', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4c2f5aa1b007e18a4ac213a62bbf3ee20295b5b9', class: "table-header" }, h("tr", { key: '8a3a26944dfae993a3c9de9f22af1006cbdc1893' }, h("th", { key: 'e81a0d2afb6b8e7efe9ab8cc3a2c8082d17651a0', class: 'task-row' }, h("ir-checkbox", { key: '879a473bcd2899af79338de6e50d98ca5fd454bb', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'dd2f85d008509ef298483820d281dd44fa22babf', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'cfddd0abb4e22dc6d30c237411f88ccc12db57fb', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '1a4f8bba42070827f5cfd97c9c30fa84b45c60de', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'deb04c2b4e1cc16a8795dba42d2a00625c84e31c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f6aa39b6723298fe075241089ffe40715c0faed8' }, locales.entries.Lcz_Status), h("svg", { key: 'c41f1ab49ae052b8dd0ab697a5a7ff84cdd041a4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'bd7d9c8e1a524cc23c8af978bc95c5a299812b17', d: "m21 16-4 4-4-4" }), h("path", { key: 'b30486e013941d172eef10d2da8c6aec3ba19e1e', d: "M17 20V4" }), h("path", { key: '4a60418fec89a749c0d4e74f5694c350aa4e6e96', d: "m3 8 4-4 4 4" }), h("path", { key: '87becaa4d55dd2fa0bef1422b7df98ab8842a1b5', d: "M7 4v16" })))), h("th", { key: '9834c762eb3c1da65fa4442e2086e799942a3831', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '61d264e0bfcde3c213487d1c6b2f9a2545a9758e', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '1b3b1b75ba59153439acf538a0a77dd078b35876', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '40d541d5a34bf6bca7d5dba01a73706e3bb1fcea', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7605a8a77185a6180cb464c7e14271013b4a0858', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '863116092e08f47e67aecc3a629beff544dddee7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'dfaad08afa7a13604cc62466e0edad0ad7c14309' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'fb40135867d468ac0d26873e8dea2b4b8d752d31', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '824f7bce3bffb43ea00d0626f3032aaa4fff4d23', d: "m21 16-4 4-4-4" }), h("path", { key: 'd61abc4ffb7bf63a5561b9c2e5a282516bdb6681', d: "M17 20V4" }), h("path", { key: '9fe9710beae3d7d7bade87c4b534357201c9628d', d: "m3 8 4-4 4 4" }), h("path", { key: 'a793ac5073f1bacb64b228a78258d1129321d507', d: "M7 4v16" }))))), h("th", { key: '95d558b8a6dd7a3befb71063c76b862d1002ac6c' }))), h("tbody", { key: '19bf6f9f41a8b7d926cbbd995931e1da0ade80ba' }, tasks.length === 0 && (h("tr", { key: 'a23f38b345c70acc9df09ae7c0a7eb481297b5c9', class: "ir-table-row" }, h("td", { key: '55dcce605ff01bd79ca8f7f1117a6a3f6b229945', colSpan: 9, class: "text-left" }, h("div", { key: '25f0fa5c0ee98c67e1060d7e0551cfbd5cfe357e', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'fdb423571ebc4a54f0cdffdeccdeeafa05a73903' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '7c847123e1ab630e645a1a9d0811827cf9a2c8de', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '909142c030b1cbfe1d319cd8ece8ee8d4daa3886' })))));
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
