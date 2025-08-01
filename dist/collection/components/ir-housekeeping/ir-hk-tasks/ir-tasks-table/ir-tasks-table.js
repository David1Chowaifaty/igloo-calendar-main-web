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
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '467bee6c1c470ec808b46ad5fd13b42b97dbb120', class: "flex-fill" }, h("section", { key: '8ef7a660356ce361ebf040d29d5a86e78eccb5e0', class: "mobile-tasks-container flex-fill" }, h("div", { key: '08c158daf53c35276c15e195b5e114476605efb2', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '9180806520d030528145c6e8e7fea8f74d8e9979' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '51c5d47916b0584b24996a5aac339f3a16e63541', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '513016268ed8027cc7c80b73fb39d4c74f9abae9' })), h("div", { key: '5521d769077a9308a39458cc219771b38910d35f', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '6f50481304137a97599d797457b1a919be20e7bb' }), h("div", { key: '36c425b10321a7b9576f763c0c40445b4a458124', class: 'table-responsive mb-auto' }, h("table", { key: 'c23e1f4e8c32ea480bace0e7e8dd7049ffe10694', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4d797f4d87b59410d09c4efad7e435ca42d0b64e', class: "table-header" }, h("tr", { key: '781a32abdc9691cdc20a000c086e5533042e8e2e' }, h("th", { key: 'e418ddba4f5e03a456e7d021f52b2f4ec0c4d203', class: 'task-row' }, h("ir-checkbox", { key: 'ee69e66cd3649b79826b5d67ef3bea0a0d4410a5', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '71d8ec48c60f0bf2c4b0288ce80886ef8f25aa17', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'd836239fb507dd6663a24dce4ef47b7c4329d012', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'fc23bcde3ce33cba4b09e14ff33fc73b417d17b0', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '2cd80b8623d70dc58c596449af4a9aa9f9d6b4e7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '52ccd0f0499a1a93eba331502a5a406b09c342e9' }, locales.entries.Lcz_Status), h("svg", { key: 'f85a1de2655ef2af0c7f5edbe555268d9f47cbd8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'eb8dd69b739df94a9feef2dfd2ed776c9d64da3c', d: "m21 16-4 4-4-4" }), h("path", { key: 'a94b481c2ff794051cc5ec3a8471a6b51dc7656d', d: "M17 20V4" }), h("path", { key: '850ae03d8476a0b06f5692c70d2911cb7402c617', d: "m3 8 4-4 4 4" }), h("path", { key: 'f52c9477e906fb153cf79effad3c8ee4ef086c96', d: "M7 4v16" })))), h("th", { key: '0cce9ff614e22f64c2cad91c57b7eb768a733292', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'bcc842364833827397a092973b2d42a0f0dad7f7', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'd93656f5a22250a794f65514e553fa8930b0680f', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '78848ca38e9a7a215544548c2c6d0b5464096584', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '4cc323d59c0ac93c2b4d01fd446eced5b4d2716c', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'efe117bd60b9133d74d0043db7f71c962d42a206', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '869718f2ecc243ed2d2b771dbe41d61a03675601' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '9975832f846b6f783e3378ec0593a3ffd01c9e71', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3730e38ca010033e060bb3c49edbd50118adfe0c', d: "m21 16-4 4-4-4" }), h("path", { key: '1af5f0b3c536c110991fd1f9f2cca968058c14b5', d: "M17 20V4" }), h("path", { key: 'b99201ceca3708b111e315bc63c3021ceb580952', d: "m3 8 4-4 4 4" }), h("path", { key: '352c4809ec4b444e0a134c5d6cf944c04373f3be', d: "M7 4v16" }))))))), h("tbody", { key: '6085ec9f3d161c25f4cf7c57af9ba58829f37214' }, tasks.length === 0 && (h("tr", { key: '9659082d81e0e1ec34f67a2941d185bee4bdaabe', class: "ir-table-row" }, h("td", { key: '55c7a7cf9129fb23c5bd93020975b00d56d828c6', colSpan: 9, class: "text-left" }, h("div", { key: '4bf85bba9bb448404b8bfa4553ecc5a0e3cad74a', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '262147425e5acbce50e9224e478d551685d7f8f8' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
            })))), h("div", { key: '9c8cba7da675e04be1902bb5b1ef1843ff7184bb', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '0877319470a73c9122367056bcf714edf7db3ec6' })))));
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
