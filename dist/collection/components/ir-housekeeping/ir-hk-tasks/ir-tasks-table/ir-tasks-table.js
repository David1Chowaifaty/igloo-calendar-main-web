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
        return (h(Host, { key: '594f2b91004ffb2436fc86670fae1fc5688dfb7c', class: "flex-fill" }, h("section", { key: 'ea1d7164653078eb58cf991e0e7c7974e3724754', class: "mobile-tasks-container flex-fill" }, h("div", { key: '84c88f251c72769f1375a2b324b9ac955af5aba5', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'e920783ea4da0a1f1536e441082eafc23952f3cf' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '9f9fc85c23fcd134f8622cb2ce9d112258cca99c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '8428e1b19a013531e4be43cc593aabb7f519777a' })), h("div", { key: 'a8e7a29968535f7aaf356e17f8e0dbdd546590e4', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '869f4f4f10e4f6028b9d8075a30823a342b42a70' }), h("div", { key: '36d9bfebfd82317babe4f2a24161c2bde467e9bd', class: 'table-responsive mb-auto' }, h("table", { key: '92cea762498f757c4da83c92babc6d67518272a5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4332b3da9d0fdeb78c5576a881d6847b90fd7ac7', class: "table-header" }, h("tr", { key: '47ee2e5c00d2f1f67f1ec44ffd8a3541cdc41be6' }, h("th", { key: '45457c41f9cb7ab12899731bedcf02b41397c1d8', class: 'task-row' }, h("ir-checkbox", { key: '0d80a98b097e14959e778fdf274c248d6129351f', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'fb103e8b36698dd0babfbeb67e868497ac27e378', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6836eb21ea606f22c2b59ca317a5c67d733915a9', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'ca3fc5074fbfa15b79e39740d935a3129764aced', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '753edf09d059562f2b6e549c740abcd05eff8743', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b5731a7be18d01f7fc41d1da980da51dd3aab635' }, locales.entries.Lcz_Status), h("svg", { key: 'cd8ef7030a09308c7b3f8f0c1008f395b3dafdfb', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4279595a7416f26ffe43e8b6078aed122be13976', d: "m21 16-4 4-4-4" }), h("path", { key: 'ff6cf8c08500846e12ea6a4ace7b86847ea7c8ce', d: "M17 20V4" }), h("path", { key: 'b39db0ce86e1787479ac4e61bdefcd9f2114db5f', d: "m3 8 4-4 4 4" }), h("path", { key: 'd1bf4db1d240f9ff409c1847983f724bf63cdc54', d: "M7 4v16" })))), h("th", { key: 'df955dfd13451d0f79f41f5d78b3a9e4beaa30d0', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'ede3e4e08dbeb70f3074b78f72cfe9669027f84b', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'ab0e8d2e8f9708246f974f9b874c031caae16cbd', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'b9f6c2984c8626d9e9ec96866a940f27b5a0cc56', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '48076693c94af61bc55cf59c663859f5e1496469', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '8287a939c6574cc5deeedba389029601fd221c5c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '524ac7f1ef3de5803163d81c9a181e3d9e679fce' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'eb0df1cb4b0ca508826e1a83461d3076f71a2a9f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3945d1f5dbd4074f5f81add9fab93b4955e6b982', d: "m21 16-4 4-4-4" }), h("path", { key: '30c985e6a7fbfd924e2d0ff23525de9a11b5b603', d: "M17 20V4" }), h("path", { key: '0fd0b737aece284f3d6b06730d62ea2816ada2f7', d: "m3 8 4-4 4 4" }), h("path", { key: 'b3f11bca9745985705ce32d8b5a38ccbae700af2', d: "M7 4v16" }))))), h("th", { key: 'd65ba010b60107d90f9fbe6bdc0ab121e47c8cb0' }))), h("tbody", { key: '3ae6c24bb1d5c8859ff38790083d5d8b1bf0db4b' }, tasks.length === 0 && (h("tr", { key: '3939c6311a0af50db20ddd7c10c159c4d2fb4887', class: "ir-table-row" }, h("td", { key: '80be3aaf0a18d259662878fbfd369301bab7be7f', colSpan: 9, class: "text-left" }, h("div", { key: 'c6b9d90578bfe18aa55a73bfa9988eff18137b3b', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5bdb09ed22eb11a9138ee69e93a43c811aeb5ea5' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '09b8dad180a71c2ee4b7c44cfc74e0b68068236a', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'ab082aa283bd6af4d031f512719f3bfd2ec2b3d0' })))));
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
