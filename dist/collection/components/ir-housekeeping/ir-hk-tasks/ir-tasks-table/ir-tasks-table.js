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
        return (h(Host, { key: 'c78555c9a9e970b1042747381d5515674d004c2a', class: "flex-fill" }, h("section", { key: '9d9a806a15564dedcb7dfaac5c2b4d7fbf76985c', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'd57256901a735dced9865f08aac3d3434a695028', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '43ccaefcf5cc47dd0ed25a0a02d55c0774335b9d' })), mobileTasks?.length === 0 && h("p", { key: '03cd797ba254d86b2fa7d969ec5699a7593d6361', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '4831d7522932d75ca4a18a3095586f1202e363b4' })), h("div", { key: '21816a2e3eb3c45e055c128e1a01355fef2d13f0', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '2c8b2911a759ece61afcee6b040f48b2f6ef908d' }), h("div", { key: 'a4c30c9a789e21eebf2115a8f5b9a8579dce3b1e', class: 'table-responsive mb-auto' }, h("table", { key: '0e34611af4c9b00c2d9c57dabe2acde02c22e856', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '589c61ba4218adc4b8748758e25fff301d9d16c6', class: "table-header" }, h("tr", { key: 'bb4dfb50daff17d1d2bcea07406b35473f1c4138' }, h("th", { key: '4c121cdb7dc0bc17333c5b65d7fc83e7e8ae456a', class: 'task-row' }, h("ir-checkbox", { key: '339e87015981bbb0ce2810083a350877fc1c6432', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '94196b21e3d92f89eb7664e22889435433a8ab79', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'e30b33fd4c5c193ea20ca6215c1e0288eca3b36f', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '2d4e6dd21fdc7070a919cf1d67566cfc5e5d44a5', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '4d4581ca4f25366067eff08f4f0e07af199fa8ce', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e96c11a8082051b1a32024d4ef2978f11282278a' }, locales.entries.Lcz_Status), h("svg", { key: '57aeaf69a386e51ab1c10e4ff08e43beb9eb3ab9', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'c0d8d11a7921404550941c8360e9efd01a7a63a6', d: "m21 16-4 4-4-4" }), h("path", { key: '878b29735626de38cdfae712dbc298d59f01761b', d: "M17 20V4" }), h("path", { key: 'bf9e23c9de69e4890e5a37bc6df8c5e65c07b22d', d: "m3 8 4-4 4 4" }), h("path", { key: 'a7741608512d1c158fd1a7718a55f45aceb38d54', d: "M7 4v16" })))), h("th", { key: '54a4df351c780750b8aa78ad51bf6c2dabeb72b5', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'b1182122fdce4b54ca895f405a9273a8db92032c', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '7dedd116bcdb8a45bc34261e0b57bf6706dcb29f', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '695197d6d8b4c84d405aad652a18c5b03fccbc35', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '8df404aa70ea4d3e5c8e0ea787d3fe98f6881669', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '1cab083235c85ca23b05533fe2d46a1e627e5623', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '4883b72f56430021e6f8c7f4b98045e490955b9c' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'd652e01bd0bb6b53a5b0c8f878146b3868223054', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '081b8cec0ff617db858d38d6ad00eb4a5898f457', d: "m21 16-4 4-4-4" }), h("path", { key: 'd058a2a876a28c9fee89f026fc9d7922ccffa37f', d: "M17 20V4" }), h("path", { key: '9363abd5e8289ff9e0f0018dd746b07d09b040ed', d: "m3 8 4-4 4 4" }), h("path", { key: '32064970c07d0aff59ca833adef28354c274f158', d: "M7 4v16" }))))), h("th", { key: '77525521b1e1c1dd1919b95dd04d3307919e3212' }))), h("tbody", { key: 'a02a71f5f0c51d2167d16635876481305e71fc9f' }, tasks.length === 0 && (h("tr", { key: 'dfbe896904cc95ca55aa4cf7bff0e3df3bff9235', class: "ir-table-row" }, h("td", { key: 'aff8ba1d7108243df2b09563e8df515a6af41fe4', colSpan: 9, class: "text-left" }, h("div", { key: 'f02d86809c2f0164b1f4e5c29b3ab99479cd4eb3', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '491ae4c41a4b740d2f387b2fd9a9c6e68b7db8c6' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '72b0d1556e742137d91029e2f346e5c206237847', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'e5d992f38a91dd673001f9a432dd74424b8a333f' })))));
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
