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
        return (h(Host, { key: '17397b358c16da2df4cd0778c36ec0121e54a92f', class: "flex-fill" }, h("section", { key: '5f78887c8fd10812b480cc8eebbee53f60c83b48', class: "mobile-tasks-container flex-fill" }, h("div", { key: '503041f9109223f4c38c319fd5c8e8986796cd15', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '2fbc6f7941b9f3088ee3cffe7a8a70a51e84a7d6' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'acaa3633816811d285909b8795ee43019a7dbec4', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '6b07fd5774efc097dde85d79832a6bb620c575e0' })), h("div", { key: 'b3c78d07b24c745b3a76887aae045325b883fa4a', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'dead950ea73a1350e98f3edf6881588bada0ac36' }), h("div", { key: '02e8cf3b3ac34dea57fe9721924f496e25351956', class: 'table-responsive mb-auto' }, h("table", { key: '5647156677cd5f3995b268dd9169a3b276ea17af', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3e763fdc12b4856d78f608efaed60683a18ed44d', class: "table-header" }, h("tr", { key: 'a07087900e966bca186cad4d3716fc178b041227' }, h("th", { key: '02d4f9c4e0aec485e9cbf809fdc35b88b225fef3', class: 'task-row' }, h("ir-checkbox", { key: '29eb1c48048bc35b46a6dd95c1f48db964a954cc', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '216e16f5af19080d0449afdb5ad9b8d6a738aaa4', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '28a976d8601313de3b651f5b854173c28d9cc2cc', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '8d395ca1020410168399db4e836f751287207265', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'f2ee20b359abc384b896b8929345c16df478fec5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '6062f4bc4849a0d8e2349e12f51a9aca20cb6283' }, locales.entries.Lcz_Status), h("svg", { key: '1b1bb84db44e1eabcfe489a4cba321c8df9ff247', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b5fa0b668d9c34d1325717e3ea42dce516a12486', d: "m21 16-4 4-4-4" }), h("path", { key: '4f24137ff9e06bb0585c3e1a0a5fb7d9f481db8a', d: "M17 20V4" }), h("path", { key: '563b1c93e6401f3da49276d12cd48d2adf81c77a', d: "m3 8 4-4 4 4" }), h("path", { key: '923d292efed801325ba3fb1a54c6845e7a4ab790', d: "M7 4v16" })))), h("th", { key: '92da1c889db3e1a87b9b4073c87e369a094bcb05', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '0ed7774c3c23439e345013f6a59a6124c76e4877', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '0614d0674c061e6c78074982260a09e554c6bba1', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'b1d9bd830a08897abdd80c6f35dc7b0532ed6a20', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '6c96f2d40f83441079627014f3df62efa3a399ad', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '714f9b9f3521d5db3836c83d1d0db570eff51aac', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'd1ab38eaec0e23049b0841ba78a58cb296d96d0c' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '40da2cbd69ff85b8e4c9a55eda7a88eac4cbbf09', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '754fe5021995cf9f4f5b5be480cad8aa6e6094fa', d: "m21 16-4 4-4-4" }), h("path", { key: '346e77b73fe684b72ed404e4f2b1c4ebf21b9cc9', d: "M17 20V4" }), h("path", { key: 'f62119db7cb5643a57b9c9bf417fd372c16a21f7', d: "m3 8 4-4 4 4" }), h("path", { key: '06c227c94e0a97ea6700505a77313c40cb4c8841', d: "M7 4v16" }))))), h("th", { key: '3928f0ae16a967f7adc2ff10b92657403a59830c' }))), h("tbody", { key: '612f25dfd2a18fbd5aa7652a21794bab63ad5cc6' }, tasks.length === 0 && (h("tr", { key: '30dbdba15271d09b25b764b6a6545d417a4a15cf', class: "ir-table-row" }, h("td", { key: '26f75b20ccb69f62904bc575ee21744405f9a337', colSpan: 9, class: "text-left" }, h("div", { key: '3d994bd62d2690666ae154345da03fb045ffa5b2', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '0a933eaa7156d18e9acc27eadbe580b06fce50c9' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'e323a2210406a456fb5525e4352674f375701cde', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'bc7eb1cdf244b564bc21ef3bfa99763693790aef' })))));
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
