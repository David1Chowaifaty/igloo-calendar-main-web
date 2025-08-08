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
        return (h(Host, { key: '91104e3337554342adf9eff6451798633a190a24', class: "flex-fill" }, h("section", { key: 'd604f10c359d1665293093beffaf6652835a9c19', class: "mobile-tasks-container flex-fill" }, h("div", { key: '3a62be392c0b390a8e63671b766028ec02f07fcb', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'a18a74563451a8b1abf32407a2517b0eb8b119cc' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '1779a27700b0407502a9ea3241d4a616c14e3764', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '5b5943103a1468c4739fccc5d8beacb263bb6d87' })), h("div", { key: '4bdee17516e4f624e07f904de8eee9b8486de7da', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'e4ba54832ce252dbc6d67a0c16ae157024ff1d43' }), h("div", { key: '0578ffffca5cc3824f8c796299037079644b6b27', class: 'table-responsive mb-auto' }, h("table", { key: 'd6b70018de1c9525c275f12c322d01f4d0567743', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ba910fde5549cb19032b1fc8d9d7fb321b7bbd24', class: "table-header" }, h("tr", { key: '4b6d9fa88f31befe0d7c23b0a6fdaa62eaae07e5' }, h("th", { key: '6598c935a66ed2f153de2325cc48e4d88ef2315d', class: 'task-row' }, h("ir-checkbox", { key: 'a6a0bdc739fdc31540970188ae1d82aeb48bd6be', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '733f9eaa0ebc51e85ad1fefe38b53a6777e9494c', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '757951a1455627276da6e7838de01faa343c59df', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '42f799645100c80ecba0f6653b2c503db4b7e77a', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'b10ab94deb5ffd4597a049d3a0f50b4e23362c42', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'c1be0885b086f32d92dafac3fee6d736ffe04290' }, locales.entries.Lcz_Status), h("svg", { key: 'afa7d03d18e7e094681e75ef0fa3b792741030cf', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '30b396a1a19067a0fc35bf37e24205088e308067', d: "m21 16-4 4-4-4" }), h("path", { key: '500f6d42a76ecb6a5b69964dda86314d88bd1f8a', d: "M17 20V4" }), h("path", { key: 'bd32e2abc08de508323191a0ae76309f13878b03', d: "m3 8 4-4 4 4" }), h("path", { key: '5c9973469e845cf4d7a29642ab2678fae00a2153', d: "M7 4v16" })))), h("th", { key: 'f8f2b6df5f2eee63a04cf0cfe01a5ad47afbb6ba', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '5bc60833c908e51c6ac080808a7e3af2eb0b1f42', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'c49ac333763743d1265c061e6cf0ef3e887112bb', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'cc3f596734ddb4e20f2ab285582130dab6fba993', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'd39b7084f7cf6a896c293f536ff8f12ddd972738', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '143576e63a141e44d1f91c89ab3bf869dcf98f37', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7e1968f2d5749070475e2707d139c763515cf73b' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'b154527c970737da6711e97f24766a804ef04268', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'c5bfaf395971f86e6ce10cabe4f3b6df4164665e', d: "m21 16-4 4-4-4" }), h("path", { key: 'bb8399bd02079203085cdbf7908f0e235c6e3679', d: "M17 20V4" }), h("path", { key: '40bbc38a00dcc707799dadca1ceec652b29f97c8', d: "m3 8 4-4 4 4" }), h("path", { key: '5f001c02ab09a28adcab94ab66ac40ad24dd086b', d: "M7 4v16" }))))), h("th", { key: 'b2b38e85c0f3dd1dd8525daa55842cf3a810abf1' }))), h("tbody", { key: '11adbcaf5fb623fbc4cc3c26b1056ab4471ce410' }, tasks.length === 0 && (h("tr", { key: 'f8fb0153b05c6ee99ae09d2f25b2f3e7ff4b4af9', class: "ir-table-row" }, h("td", { key: 'b7098ce5bcc879e6da4f6bc9bf02a408f5a42c0f', colSpan: 9, class: "text-left" }, h("div", { key: '698767741b38f6779d84154424368bd14a2e2d0d', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'b112c3e7c647b06c8d34ca840a5d8e40fe6d3ce0' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'b327be0bd24033f27f2ad3ee8e5e224296d8bf91', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '34bacd868a0140f8547e19bb0a3095b4cd83f560' })))));
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
