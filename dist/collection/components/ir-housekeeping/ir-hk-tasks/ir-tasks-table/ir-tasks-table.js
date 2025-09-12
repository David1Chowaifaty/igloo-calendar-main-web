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
        return (h(Host, { key: 'ff44ce1549dbed3bb06cf26a3af22570bb11f934', class: "flex-fill" }, h("section", { key: '2f48e498a21308ba45cce0752519ced42500e8c5', class: "mobile-tasks-container flex-fill" }, h("div", { key: '08b7c6d9f5a352b7fcaf338fea0383ca555bef35', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'c64a0753a47f5a37be41ba42855163d7319615a8' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'ac752944b918c755d27b9da3b86194e73caece6c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'c9373cf1ec6dd769b7ec6f65f315b3c0672c6beb' })), h("div", { key: 'a91f7dab743430cb340caccb763d6ef1baa31b8c', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '62fea2d17115b1596d62e649a33b5d0c6caba367' }), h("div", { key: '7854dd6f29024a5fd4954a9b997605fde42ffdf4', class: 'table-responsive mb-auto' }, h("table", { key: '45acc8350f5b097f6471e7c035cca48d947a8b9f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3944f712bad513f6f0468754a5d2def60a6e75dc', class: "table-header" }, h("tr", { key: 'da41b2893362f5840bae9bde7d0e3f33a7c4dbce' }, h("th", { key: '5918ec6e1932acea7a5334b75e741043ad18a07e', class: 'task-row' }, h("ir-checkbox", { key: '6c0edc9a9ed2f6f93e0488590656abd7b0daec27', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '3651a84453a959af56982c68bfe04f387db97a00', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '8247dc206a40dda89e400a7604a188a38c83b7a5', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '2d3b8d4852fddc784442fb418fd05434a9b0f89c', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '0f4beaf28eddc402d009f5cbbb366b6660224640', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '65000f1f03492ab728dea66dd729b6acec5514a1' }, locales.entries.Lcz_Status), h("svg", { key: 'a8357a165f84a3ec2456b773bfecef78039a1d6d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3f1538a65e0754ba2e38c2f61cfcf901d5775458', d: "m21 16-4 4-4-4" }), h("path", { key: '30865e9e327cfe6c0387b4ac0290da27de17f253', d: "M17 20V4" }), h("path", { key: 'b288393d74b3be6ee2fed010f58a8f3a074cc2ac', d: "m3 8 4-4 4 4" }), h("path", { key: '4d23ab853935cb5d477d758b40c9b3b0347421f7', d: "M7 4v16" })))), h("th", { key: 'e4d077520d2daff7a08b907bbf6c221402322d9b', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '3b1a753f65f5698eba51bf72492739aaf276befd', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '9b6538911e1c353ba71195b68fc6b217000ab340', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '232abb1b887a881182b4668429b91b1019a3151d', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'a0f1aec4f35178fdbd4f57f7af65a6baa9d8712a', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'b7f62bc28dc3e557d5c5b64355befc2a1e09d9b3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'fa1c67f80fd67785b6a61f2b4361497612feff2e' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '1e53a7a585db5ed1f970b8143df5db612b14b3a2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cdfc5ef606bb5349153f12f7a77bff38f06d9501', d: "m21 16-4 4-4-4" }), h("path", { key: '56f0ed41c0152681c1582a099cfcef4038bce05e', d: "M17 20V4" }), h("path", { key: '25cd3251995bc0ac3818acc23d0471fc322f4ed2', d: "m3 8 4-4 4 4" }), h("path", { key: '524c6d4a3b12d1c31994303c63f1c6938d079e86', d: "M7 4v16" }))))), h("th", { key: '2494beeb3e604276886debcbb56cd9ea73eccb74' }))), h("tbody", { key: 'c06a5f0f2b2619de660362077dcee407cfa3d4a3' }, tasks.length === 0 && (h("tr", { key: 'a5fe94d07b6ec9edab12d4992825e15c62d114e4', class: "ir-table-row" }, h("td", { key: 'd4463501607708843d043cbb71905681e107a436', colSpan: 9, class: "text-left" }, h("div", { key: '473900f02bdf755e2fde7295313912e464e7a248', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '43f8211d4635c0f5ad37c720b2c45a5c6922da30' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '1a0f8ca3cbb75a5755048bc27f411823c6111d9c', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '9f42a65b6dd86f712de30c5ce26ff7033fe647f9' })))));
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
