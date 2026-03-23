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
        return (h(Host, { key: '6119dc1908c9ec5cb23e91bd5a433a2db7eb0774', class: "flex-fill" }, h("section", { key: '9a14476f1a615f5dc40ae6193ccb398a5787312f', class: "mobile-tasks-container flex-fill" }, h("div", { key: '4e4f3d0247805e7face047b0930dbe5846b07381', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '36ab5d17293cf16d42d03add66ee299149ccb976' })), mobileTasks?.length === 0 && h("p", { key: 'daee5208dfb36842a0f7f75118cde46aa4c94863', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '586892f5bb23efe2a6237d91fed9d550a4befdd9' })), h("div", { key: 'a71f9f6ff021242a28a068a3ed6f9d1ee153a8cc', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '3cf7d342226db3906accc673eacdaa7774dee75c' }), h("div", { key: 'e8845855e3ffbdb5d828841a442e3fa6530356d8', class: 'table-responsive mb-auto' }, h("table", { key: '51cf1fdd1c09943ff03a9dd82379446e0897ce84', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dffb9e84b800678ba8b1324b3cea39039e54d9e4', class: "table-header" }, h("tr", { key: '0635c41a3df7ab42c06e5c34b132081d858bf7e3' }, h("th", { key: '2f7d73f3bcafc8602277709cb751e40aee2aa4db', class: 'task-row' }, h("ir-checkbox", { key: '5009c07863e15b3b9cf794b2b95ced1a07aa9595', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'a459350fbaa929436d36b2860508482a9e03ec33', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '26701079e13bf62287b1880867c252867a3cbc04', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'bb40848796512935b351579999ac522531b10746', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '488c7334dbc2a7acc2dcbaf44a2864bd954f3a96', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3a7d435341ae730129fea8322f3ba28635f677c4' }, locales.entries.Lcz_Status), h("svg", { key: '412a8bcbc48a5f01fd5926854621553be7e0909a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '9582464ea95dfba5b61f0580b75fc825c423c92b', d: "m21 16-4 4-4-4" }), h("path", { key: '825f8e1c1229d75eaafe03a0b11b27afb5ce8740', d: "M17 20V4" }), h("path", { key: '45d6a226eb08eba6849df71579907e210069777b', d: "m3 8 4-4 4 4" }), h("path", { key: '7b4222b66355fe5b8cc14ebc82a382cb1d81a83b', d: "M7 4v16" })))), h("th", { key: '5f05ed164a3c3850ff1098d8d7fb68fc30cdd355', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '1325c40c920e657ad1c0ae0c64ad3aefc412037f', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '622c31a60d143e40318b1711f05eb27ad1155d1b', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '2a8be80a2d7907bff76135a088b5d6706180caa7', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f3930485dd77278595c8c9aa296c16a3e6eb3061', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '690bd2c36f5b2a50bb9310d9d305eb22e8900a75', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd08f35316aec7b43537eb6b4577d678d6924f144' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'c111a9597cd9b9decf8a39ab24d0976b012f01d0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'de6c9e7e60a746126b135358d1012d935778a4d9', d: "m21 16-4 4-4-4" }), h("path", { key: 'f9511712d62321153552feb761342c9c7a4310c3', d: "M17 20V4" }), h("path", { key: '017e38e202506a5bd84a60f2ebef5ab1b6bc5ed4', d: "m3 8 4-4 4 4" }), h("path", { key: '4d5443f5b17a470e0d796dd338c8b44da794b45e', d: "M7 4v16" }))))), h("th", { key: '873449f14c608f383657e52ed99b47a5736c1a0e' }))), h("tbody", { key: '629141caa96b6f43c2128cbdd6518f79ac71c567' }, tasks.length === 0 && (h("tr", { key: 'd8352a9aa7f671c3a29ae26dc6946e1039ce017d', class: "ir-table-row" }, h("td", { key: 'c41f1f4ee92e543f80a3fd424d5c2f98e26e88ff', colSpan: 9, class: "text-left" }, h("div", { key: 'c49fed894e63fcbc4ea1fc094ecc039988aec61e', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '4de98e0049c6ed0b0d0abd732d9ff2f6a0ca2f1e' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '2bac1b9c933f1a01b0cf68dbae28f3ee2fd5cf5f', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '16dc60da1c528e1e6f840b7f2ab98b95870fd11d' })))));
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
