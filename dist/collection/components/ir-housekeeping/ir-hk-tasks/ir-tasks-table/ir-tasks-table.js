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
        return (h(Host, { key: '1c49d212407a364f7998b0337aafae40af03251a', class: "flex-fill" }, h("section", { key: 'dfcdaf54db888db1b530ded74e2dfa0170ab98a5', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'f163f1f3eb4d8358c6a984befc3f08ec1534d9cb', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'f536e460687a3c80cf9f7159d1d991a9a13eba53' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'd84b5899596e7162e37d9fa6299ae7d7157ea0ab', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '482dbc39c2672a1c951735d629671c01c2fb8118' })), h("div", { key: '2ccf8b010dde3dd51532cf94adc4a8c8fe949430', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '2f0026bf96dba62bd3633f446f6875f09b1d95e8' }), h("div", { key: '041347c4308e7a6ed48b0bf6cce632470ee1357e', class: 'table-responsive mb-auto' }, h("table", { key: 'acdf85141ddc6bd55760bc60d50494ef39bdaa38', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '20a96ae686eecfe9d7ff09a49141600d60c4c3af', class: "table-header" }, h("tr", { key: '9260282666b90932a7c87ff7b09488ef0a0d0891' }, h("th", { key: '0f534ad408a4e8d66d3ac7252a7c1783a29bf355', class: 'task-row' }, h("ir-checkbox", { key: '3202ae623265806f78e90c0114627f3e3bd9a3d8', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '522a6abb5e3d9129c2e699588a2c75f33088a3c2', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'eb49d6520a7130e94c1453f451c8616dc68a27ab', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '5a03a36d8b38f0a8db8d527a41c1ce878840daa9', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'b3527e28e32e734cd1c2203bf0517ea81a4cd412', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '66bf39e4919c68db4d8b004e146ba66910538706' }, locales.entries.Lcz_Status), h("svg", { key: '7cadf695a72b5caaa02a53b346acc0f927ca7edb', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '6766f14a28d9860262afecb6a9feb95877ef2588', d: "m21 16-4 4-4-4" }), h("path", { key: 'a81cc33238a64a38b148f5ef25a48c287d2d1367', d: "M17 20V4" }), h("path", { key: 'b7fa650f19833201450008914aa44e1e52e84db2', d: "m3 8 4-4 4 4" }), h("path", { key: '958ebd00559edb66f9bdba06f8dd1be5bb02d084', d: "M7 4v16" })))), h("th", { key: '54bdf6dd1364522fd2561b6b4f27a6b05e40f175', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '9d9d9f3aba17a09e67ad74e7765b179fa5e80c05', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '8b3fffe456499a1c0794f442206e4c93fa75b40c', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '8ee61197b68a705d0a9c0a8263cb8a8554ae827c', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'fd037f9579b31d0473519be3711b7ff747c218dc', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'c353cc6d0b723ee25ada70c10965a224aaec2bc3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '99257141a07e224ac11fdc9c88924a84a1846d6e' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '8ed83634e6119b8c42f88c3f332393e508af4fb2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd32803aae3d0013aff416f7d204feabf7c1444b3', d: "m21 16-4 4-4-4" }), h("path", { key: '52d8295f0e49a793383d68452f7479b9b8a81950', d: "M17 20V4" }), h("path", { key: 'd2eebf752e32962fdb6c31672d033566f33e2742', d: "m3 8 4-4 4 4" }), h("path", { key: '06e107ef20b5bb83f103c9f48bda7b0f90ee973b', d: "M7 4v16" }))))), h("th", { key: 'ba178288d11453e239f75bcca4aab6fa6a1b1562' }))), h("tbody", { key: '9bcbc1d3f58e608a83c86eaf2d9308ab51ef7a38' }, tasks.length === 0 && (h("tr", { key: 'd404913464dca4e8772b84f17a7299fffaf50994', class: "ir-table-row" }, h("td", { key: 'e490655234f693a460bb08a5975d8a4850e5f970', colSpan: 9, class: "text-left" }, h("div", { key: 'ba18baa44788acf9cc6048120fe4bd01e3b254ba', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '0e55ef476831006d46ba699005674a2df6bfd9d5' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'e29b58f87d29d512d04510459a1597a010d45291', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '0a000774d97b98da0f3a0613a55e634b0ff4948e' })))));
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
