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
        return (h(Host, { key: 'ff05459f520b0f7c06ebfddbeaccab1d5f0c48b8', class: "flex-fill" }, h("section", { key: '3b6fac65efbc46b1e0701244f1948fd9099b6347', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'd5e1d972441fb2bd8c1b85539aadf6c077e19ec9', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'd4771bf37d6cfe01048a53c8ab776bef90aa5d2f' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '9d7a05a23a55aef2b7c68b87ba4b21e5061f558c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'e27250a2a410ffe1c02bba0d785aef84aa9557cd' })), h("div", { key: 'b45fc659321dbb98677a4600608439b19df7d7f0', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '537bde7a0346ec3d46a0a69ca3773430b8ac2f79' }), h("div", { key: '21b7a81310677c848146627959ee3c67519a1629', class: 'table-responsive mb-auto' }, h("table", { key: 'f372f5d2311fbe98cc577b273c9318232abcbe40', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5ab63bcf2f2fd9b243c94450a59e3fe105041a48', class: "table-header" }, h("tr", { key: 'e4af6c0044bb5fe6d4523c1c2f92cb3015c3869f' }, h("th", { key: '15687b54e5f1d4e67bc9ea1e0a945b884b1e67ec', class: 'task-row' }, h("ir-checkbox", { key: '3fa5ea9baa9b2d30891f91c9fc0b2b80e95f1af9', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '0b8793023bc11fad87638ea5db38e9b0aaa21dd2', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'e8e732e92cb545d67ed4b256b6f2ad32096328a2', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '8f187da29cda036ab66c5ca3449e293918cd31b9', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'c355b65037bf1ab91fa961b220a4da1d7d636b4f', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7b3c41d5ca3678acadb98662936bae7dc04a717d' }, locales.entries.Lcz_Status), h("svg", { key: 'b9e7d51cd41c0d5382c788579a4b6db21e678348', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4df131de1717e3fec719233a74341c6f89f65e95', d: "m21 16-4 4-4-4" }), h("path", { key: 'd7a1b9760420e53ad5458fd96344c76867f3b428', d: "M17 20V4" }), h("path", { key: 'd06b585428a17be8401b44d47e1ff9c1fe86e5b2', d: "m3 8 4-4 4 4" }), h("path", { key: 'c8dab39e4dce9b4c403890fcc5f622285f92787a', d: "M7 4v16" })))), h("th", { key: '7a561b791c22324b03393ec7dfb2fa381faba49f', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '23ee1f16680683503a5060b11d005caf21d4a72c', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'f39e24e51a28b7b25314a6da251ec15da18ed761', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'ab3b47bc2606a592d742a3d60f91054c168303d6', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '53b5cab835ce9f954b6e108eacfda75c28c8bfe7', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'f38591778b14174247f6a7349993a9ff014b591a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '77e41ccb624f38c1afdbd96f6b7e04a5e58c01d9' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '19c9ab720a74fb243a06d49185f1a1be25a1c8f0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '562d4357223b243f1d314dfe8a64566c7539b548', d: "m21 16-4 4-4-4" }), h("path", { key: '9a3a65594bff5b13647f5f896099895fa6933ec3', d: "M17 20V4" }), h("path", { key: 'b0bb443e14d70657b061230c44bfd79c5b93a02d', d: "m3 8 4-4 4 4" }), h("path", { key: 'f4173e76a630913925a13d74912ef5a6e9043bee', d: "M7 4v16" }))))), h("th", { key: 'b0b49624503e85c1b39e96cfa7b1dcf0a643b33d' }))), h("tbody", { key: '1d0efc15e91fa4910bd3bc60936442cf1725746e' }, tasks.length === 0 && (h("tr", { key: '6ed4401ab7c78ac2f82f03c2b90c695e6e9da2e8', class: "ir-table-row" }, h("td", { key: 'e2199dc2ccac0fb673bc74bf84f4a830cce40d38', colSpan: 9, class: "text-left" }, h("div", { key: '01ecab2d481b241b50ad77d86fbbba125c791137', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '8f2510f4cb957f55c1d8b094192ce6c0f9519a5f' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '9156f7e771319d4a73dd3acaab92ee4aaa29d0e5', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '2a07d41efa0dc2bfc22b699b390586fc0e8744b1' })))));
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
