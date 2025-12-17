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
        return (h(Host, { key: '961c0f3af82916ed87fa4d23750d9a1853f5a995', class: "flex-fill" }, h("section", { key: 'e5d4f7a45e44ab5f38d83947ea0fef881d22d749', class: "mobile-tasks-container flex-fill" }, h("div", { key: '29f269aa6febe92c2a582a56e460ef21f42f01cf', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '353c256a5e41f2b47f64f023ebf40e87adff4f7a' })), mobileTasks?.length === 0 && h("p", { key: '33e89803ce26471b685dfdfd5ff22fb1ea5fe98c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'c17dd3508aadabf4a62e05e222d312bf8a171672' })), h("div", { key: '29a13347306cb56911cf4cfcf9f2c26d85ccac24', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'f0934293be81eec4b7d0eb67fc02e94c5b82bf54' }), h("div", { key: 'c3ecdb47cee23d79b725ca2939ba6db41dbfe24d', class: 'table-responsive mb-auto' }, h("table", { key: '3d19c3cb9d6c53a73587429aba8253ff63754dbf', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '9621043537b7cedb939fde97ce18651b1b194ffe', class: "table-header" }, h("tr", { key: 'af0b192947d26f358c8828b0f45c39d0f3e95292' }, h("th", { key: 'c2de54a7712f2e99b203c26fb6fe738ffa69262d', class: 'task-row' }, h("ir-checkbox", { key: '6ce50cbf2af7d50d20dc9f911efdb7b3ebfc137f', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '9a98cc8d9e1450b7da47383cbd2ca762ae3f626d', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '484ac4c8f833a482b1a6062200b25653ea6b5b93', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'aac84fbfa9d617922bc1a4782c28b3e3d5306604', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '09861241aab56fd80f9ad03b50fa3a8b899f0d0e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '8f2ca8028f5efc381c4821670298873b496ce2b1' }, locales.entries.Lcz_Status), h("svg", { key: '0270ee86538d41431291b4a8044a1a65f9f97525', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '449439110f1e98359f01f22a05b5b24a3eb3778a', d: "m21 16-4 4-4-4" }), h("path", { key: 'ff3fa201e4a85c181828eae380167d7c1fd21ff1', d: "M17 20V4" }), h("path", { key: '2fe4ba2a9673bec1ccb7570873fa4fd52f8d0c66', d: "m3 8 4-4 4 4" }), h("path", { key: 'c0037b74a95ec3ca8612680628c4430e8243b88f', d: "M7 4v16" })))), h("th", { key: '49e2b1a5454b2c795dc6cfc05160b1b64df2eb33', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'fbfd3cdcc958b43d9664abfc921adb99a3e40f0a', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'f763a14196d08738937c900fa342398f9ba4799f', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'b06b97b8ae02faa5c1bec4727f020bbc71fdc847', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '762354310aa711686fd491ee3ffb95100279f20f', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '65a6d89fc3dc00c9aef4368f5db857c261108225', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '98f6f423d0d6816c34bf4966683e528cbcca4ddc' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '1e210ec32b8f24eb67d9c1532cf2f47bc9d5f6a5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '0a757c012303e6c4158787b92a3c23ebfcd2c9d5', d: "m21 16-4 4-4-4" }), h("path", { key: 'f39c0d51efb46da9ef14771889e5d2728fad54db', d: "M17 20V4" }), h("path", { key: '98b69b3871e0df38746fa928008dd009cbe36126', d: "m3 8 4-4 4 4" }), h("path", { key: 'a0c02ac16eae95610c83907a644776486e6b1e33', d: "M7 4v16" }))))), h("th", { key: 'b210f172cc95daa6d341dd34225672efdd8f728c' }))), h("tbody", { key: '6d47c48abd3b4bf658feb8a7b8749d51aa7a244c' }, tasks.length === 0 && (h("tr", { key: 'a0db87bf0fa4b594a97aafe35af1cdd7f0e7f9b1', class: "ir-table-row" }, h("td", { key: '08cf4e03ac175dd17cb5ed24aa3efd84b5dd529e', colSpan: 9, class: "text-left" }, h("div", { key: '59acebefefe59801f8e76253cc0d98d7e0b7bcbd', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '2d7e279fabf32b9818da7a10a7c0afa046bced5c' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '337579349982754375e6a17b8363f52cc988c3b5', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '0433b5a5cf0f98cecd9e97da51d17019aebb9f3e' })))));
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
