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
        return (h(Host, { key: 'cca0c0e4b52f274a1b2224551a4ec95e219ad9b6', class: "flex-fill" }, h("section", { key: 'af14efa97c051feb2cafc4598ca00c0410f1429a', class: "mobile-tasks-container flex-fill" }, h("div", { key: '58251b179b9a9fb7c0a4b1e4369bbd36082e4c02', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'b8f104f48ebb5795e42c8a2330d26d0b00c0326a' })), mobileTasks?.length === 0 && h("p", { key: '6090475b6e0fb9425c867de878a134661cf2315f', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '77e02652c87a1ddc00ed2315bb63691de22874cf' })), h("div", { key: '8d5d81671d5d2c7013182a6c48212fc14fe57e42', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'd5353c74819cb3f64580a759d0e31e4cbd2bedf8' }), h("div", { key: '60dbcdb69997d89f89e1fb3a042c98f94db4765b', class: 'table-responsive mb-auto' }, h("table", { key: 'e6f1bfdbdbc94c5bc699808ebcbb48054c893d46', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '066788bf6796d7e9a6c8ec13e5bc281440212bd9', class: "table-header" }, h("tr", { key: '4cdc60d9c6e0a23c47cac6bde8e26e4fd96bb028' }, h("th", { key: '4a16d71876eb344e73172ad102bf1854e9a5bb75', class: 'task-row' }, h("ir-checkbox", { key: '663d98bcca2c5cd3803be70c2397a75aaa5d5ec2', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '844e81c9fd5421cddb763c56b5c3719a0437469c', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6338218fefe9305dc73a44b9ab69c22d107d060c', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '6779f8b44c64747458e269733861ccbf57869215', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '140974ea967dd5378cedece9a9c0ce405f82bb26', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '1f945af1e156d06ccc5609e07c34b03f4ae4de25' }, locales.entries.Lcz_Status), h("svg", { key: '766b7de2ecbe8a6e54fe12e8428aa8da0379d913', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '195113c29f18b397e6ab5b69cc4d638349c420e8', d: "m21 16-4 4-4-4" }), h("path", { key: '8091d1074bcda4601931a8e783fc577c55ef5874', d: "M17 20V4" }), h("path", { key: '5704a735c362dc59acaaa12ac9df402a2cbcd9d5', d: "m3 8 4-4 4 4" }), h("path", { key: '84ea092f98b9e1238bae53b86c2860de5a51b992', d: "M7 4v16" })))), h("th", { key: 'a51d4c9dcabebf2147597efc59d7a10dad604484', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '09245932d48630af459e9f80d3bd9a561aa4cdaa', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '7dced3c26348de0818d532ff0d52505591392ba8', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '19488a9b359da06a3fa3999f61e35d04bf6ca84d', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '474ddbde24c80a37e2a113c628ccd72c1a6eeb8d', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'eee411fd2297adf1a78258710535b8ede8415ce2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd6e9f82db358d1f54a9dba64c6f9ec476ce33568' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'd483a60b89500660c802fc5860b36bfece8dc758', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cf47d466ce3501e285a8cc66aee30b6f9600b2e4', d: "m21 16-4 4-4-4" }), h("path", { key: 'c083eddcda2b00c29a9d23117b78d10adad59b2f', d: "M17 20V4" }), h("path", { key: '235d683814b23ae00e0e07d4bfed33c47561ea48', d: "m3 8 4-4 4 4" }), h("path", { key: '8008b3ef834260a805e2a7ad490da63b6e5044b9', d: "M7 4v16" }))))), h("th", { key: '5ea2c54c05c7a4453222973143f3cee8125465b6' }))), h("tbody", { key: '4f95b77dac376610857deba3e843a8134a7c5c95' }, tasks.length === 0 && (h("tr", { key: '57c66b6e1a587fa0f604206bed27e0509bd64b6a', class: "ir-table-row" }, h("td", { key: '0501045ab0cfb92b1f4a328f26a4987c84028f75', colSpan: 9, class: "text-left" }, h("div", { key: 'c51c77fa435a3fc63c16fdc39221adf43b219dbe', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'ca19e20ad39e951915f090173e3595ffcd84d3ae' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'a38565b1c1981d05104b2e82affc04573a0ec7a9', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '9e41f1f0674689b1d65f9ecb891249d45931b492' })))));
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
