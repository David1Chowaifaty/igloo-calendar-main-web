import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import { hkTasksStore, toggleTaskSelection, selectAllTasks, clearSelectedTasks, getCheckableTasks, isAllTasksSelected, updateSorting, getPaginatedTasks, getMobileTasks, } from "../../../../stores/hk-tasks.store";
export class IrTasksTable {
    constructor() {
        this.tasks = [];
    }
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
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
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
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '3bce2b95eae885ffb6a734b0956746e1295e0552', class: "flex-fill" }, h("section", { key: '8b30f1d61ec2730d13c0b2af9429b7dc2b69f518', class: "mobile-tasks-container flex-fill" }, h("div", { key: '1a4117d9dc793e632874ee0a0dca84632a35dcff', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '4416a185229cc4db93f8a339fe20a317af223177' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'b32a02b3c393df6e2db8eb705e60d0a9a56e86f6', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '564c9a152c355cf7b248586e5eb17944306dc185' })), h("div", { key: 'b345ae62972497ddc06e461e86668a927b9360d5', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'f2884b3ad5fdb6243e030f300f5a87102a49279c' }), h("div", { key: '9ca2efcad20a0c5e86b26cb601230b993c138042', class: 'table-responsive mb-auto' }, h("table", { key: '2e2f4df4c996a933ec861b15bbb7635f383d745e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8821eecbf86dd423345d833e4550379bd4d30ed5', class: "table-header" }, h("tr", { key: '50be0de947df46c5fc4b55d7828c0c219eabe3e4' }, h("th", { key: '0e5922a2310ee6975c78337c8dabf162fe97fbb1', class: 'task-row' }, h("ir-checkbox", { key: '7eda7773faf8fb01264a14a895ead63dcb202e74', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'd250c2f4675c4b6248ae0e626cc7cccc6e599408', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6bc8529c33a382b6970939867237159bbd9ba78d', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '3b31606cd205b20bd305de1f24e8b1535a684941', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '361d29829a90081c8545aa54eb13859531471e22', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '1deac5dfe03d4aef1c02c839eb9b707427b537ef' }, locales.entries.Lcz_Status), h("svg", { key: '45963c14a0f4cd4fa488d54f1cecb00cba3c0c20', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '56406234d60e7ee50a6d4ade3381f3ac602ce474', d: "m21 16-4 4-4-4" }), h("path", { key: 'b51232caef2ec3ecd4c08de33149686d5c15eb2d', d: "M17 20V4" }), h("path", { key: '75e13202160aeea496c93e2b993d945230a4e5ac', d: "m3 8 4-4 4 4" }), h("path", { key: '75900e9ed50884959d4b6fa78808e64fd075fed2', d: "M7 4v16" })))), h("th", { key: '75b55480f1b378a15b30f8a7d46ed202e8eea8e5', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '944e61f69fc54416e8ed2bbb8f9b7fa85513bac0', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '40447cc0116065572df11c6a5b92dfd96582bce6', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'e546abbe487534d3a688c1bc19b46be021004b93', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'cf578955d1768c6b0caa7e853a940cdb98d1ecd7', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '63b7c27fda079b2f4c18ef07f83b34f91df913fe', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd46e0e87fb28fdf340b90af028dbb4ee4c523f52' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6f019870f67b8a3638e860d87efe9c1138eea63c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1d57171098bddea59603275af6579a625b47376a', d: "m21 16-4 4-4-4" }), h("path", { key: 'b163564c20aa2f59bb16e038b1d3dd959fcf17d3', d: "M17 20V4" }), h("path", { key: '235464d51d6b5b87c1707efbf50e7002d304caa5', d: "m3 8 4-4 4 4" }), h("path", { key: 'e46617e48e97b09277695f001561d0d4ca8c58c7', d: "M7 4v16" }))))), h("th", { key: 'fca793cc3d0d69b0b21d6d38eed53807454f690a' }))), h("tbody", { key: '34064e1c66a85fdd29ecd02c47f00ac0d3f73c31' }, tasks.length === 0 && (h("tr", { key: 'eb34f18385a6c7b54c6f6c22f28c296d986a7cdc', class: "ir-table-row" }, h("td", { key: 'e0b8df568b64f8ea1c4f8300aad9eb70a29b833e', colSpan: 9, class: "text-left" }, h("div", { key: 'af12747e7564234d763fc1a59da2ae08c3c79f37', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '29992925073de4becd510e516952daea714564f0' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                        this.skipSelectedTask.emit(task);
                    } })))));
            })))), h("div", { key: '02a768a45ece08b4520346a654ea7a4955c06860', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '2aa74262a7e515037b3ac1fa71f1c781e86745dd' })))));
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
