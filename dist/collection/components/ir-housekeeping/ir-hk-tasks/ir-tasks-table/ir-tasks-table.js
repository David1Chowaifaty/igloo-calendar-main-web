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
        return (h(Host, { key: '141d827ed3d434f1c6d74730ca647a1f9face502', class: "flex-fill" }, h("section", { key: '808f4861b89d1c731e15916e8174baf78b72ddd9', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'e2fda953775bb7887ff600968c2ae608927b96de', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '4062dbc84d4076e7a699a95d26e87e4f37f4adc1' })), mobileTasks?.length === 0 && h("p", { key: '80d8b7ef211f96bd6d99addaf797c294d5c01d11', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'a8fb8026d210b2bb5d77efcc8c02c7afe02a57f9' })), h("div", { key: '9e7466e04512caa7f683878dd2caca502c61722b', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '203fa92f2eae30d54ea45e6d327eabc1a8f881bd' }), h("div", { key: '278699df93da269c800bb1dde87e0eaf08f9933d', class: 'table-responsive mb-auto' }, h("table", { key: '8c27063695212b7d2e3d7e1ddfd7cf1fda4a9572', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '1e5229bb1672f2de8848730e04170e3bf31cd7a9', class: "table-header" }, h("tr", { key: '7840b4cf280389bf76553d78bf8a45d85666e86d' }, h("th", { key: '6f59dff0db9b484de056732feed9134148adeb07', class: 'task-row' }, h("ir-checkbox", { key: '50ffe91ec2c8f7b3942c6bd387f9c69f2ef0bd15', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '1ed258d11acd33b6455b65a4f99e79429fec8d53', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '4acfe9c21ac699a06394b48a878393b5e04a53e5', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '5db9193ee3109a7ce084f2391c848cd2dc135cf8', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '16246332a3b8b8b35da893d25e13d817b6654248', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd9b266f80ab4ae3b597dce7a445cc3f0f018bbc5' }, locales.entries.Lcz_Status), h("svg", { key: 'da7f0c57480a6654d14160ae06bd0aad56427948', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '52968467e88610ec743e28ff19098081923f10ce', d: "m21 16-4 4-4-4" }), h("path", { key: '393ab1f2ad5eb64df14fdc0edb7ccddac7853037', d: "M17 20V4" }), h("path", { key: '315ef81841f420b89362f3d53fc7d7453ee260a4', d: "m3 8 4-4 4 4" }), h("path", { key: 'c11a42d013d1a0ffa4e6a6fbf65e8e0c9f37176c', d: "M7 4v16" })))), h("th", { key: '7611fd55e5389364e84ea4efa3cfb8ae23eabadb', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'f4bc16e6b2175c49d60536de24b40588e2a2a682', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '34b4363ad916a174d2236bb13b8c5b9812381f37', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '0461358efe5fd8160716f9756ab1df6b5f2efeb3', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '5f6422be4e1b95fb28abdf2926c6d16ee4d783f9', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '9a0cd1e8288074c99befda119f32eae8d652de7a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b97cbfb259815ed429318f87992546c958b3fed9' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '36a952856d20f04befa2b73042666d9f78211000', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '9322fcf1c1d85be27510eee0ca1d9177774e9dd7', d: "m21 16-4 4-4-4" }), h("path", { key: 'b6fc627e336bbbfd6b8713fb4449a0e4e6cc46fb', d: "M17 20V4" }), h("path", { key: 'ca1014094c2d073c3aa72197d492efbb74fa3ba1', d: "m3 8 4-4 4 4" }), h("path", { key: 'af5d7c0f199f7e5d09314fd25d47d0aa28b8a471', d: "M7 4v16" }))))), h("th", { key: '5ea17b9b4a56dbb5de34c6a0a8157c8fd04dedbd' }))), h("tbody", { key: 'f24d133122382af7a23928e7c106a0c05abfb446' }, tasks.length === 0 && (h("tr", { key: 'fd66d8675fef95efdf69332137eb20860ce28668', class: "ir-table-row" }, h("td", { key: '3bb48dfbbb3fc74aa533a946fa1291083832543c', colSpan: 9, class: "text-left" }, h("div", { key: '35a95950c50d49f8ebd77c310557b75ba4c7b22b', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '3419728c27f634913e66779e1850805470ae17d3' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '26873339c0f048ac9c9bba7cdf9eb220b1e0525f', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'eb5344c75090eb6253536568702ecf84d0be4b50' })))));
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
