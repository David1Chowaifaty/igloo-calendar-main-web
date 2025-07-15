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
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '2374d80f19ece5fb1afcf031c7f63b4b0459ff51', class: "flex-fill" }, h("section", { key: '0f438fdaa0632b60422f67e2ed42ce108e5c1724', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'e8a00106f33f1a076114870272db191c32e57137', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'f8a631b27f9827141f2ef2b926289be413911665' })), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'f31f2a9a30def62cc7e207c4bdcfe5d09e2a9a27' })), h("div", { key: 'db4c95949f8792c5728a56972dcb4d202c89a3fd', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '0b71dd2283bf7ae81da62d2821eb65a141ce9398' }), h("div", { key: '8026006a683ef827db3248e4fecf6074061ec649', class: 'table-responsive mb-auto' }, h("table", { key: 'e3f49de727e0175fe3162a4b2869fc8f48ad210c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'fb085e7f6a450c47e702cd507cafa71252aaac80', class: "table-header" }, h("tr", { key: 'b8a86546b85d2e35e0f3ae70042baf090c43e9ba' }, h("th", { key: '3be40d16d3064c9573ee8c869f559f9830ffacf2', class: 'task-row' }, h("ir-checkbox", { key: 'bfdb12f91016352e445701c3f6e62d03b4076041', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '25ab25be39961aa33898a924dcc6a8c9c4630121', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '9a19b661f6d053fe5dae03ef767c6a5dd919173f', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '4c40d07f0a1a444d87eb407281c8adc0e19cb948', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '6911cd6b2e444c645b9da838aca687e2d80898b4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '8650a2097d7cec8d821dcfc2556a9db3c8881295' }, locales.entries.Lcz_Status), h("svg", { key: '600404f59f9d951ac23ff0f56414b16f52ab9c0c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '21def2fd3341ff442c456bfc626a6840d3f4471b', d: "m21 16-4 4-4-4" }), h("path", { key: 'a45164fa787fb3ad1b9553b4144b95b6621cb044', d: "M17 20V4" }), h("path", { key: '55cfac132d22eefb14897317476de7cb5dae2d12', d: "m3 8 4-4 4 4" }), h("path", { key: 'bc8579897eb7b2dd389f426ca295c932a800fc56', d: "M7 4v16" })))), h("th", { key: '2d924a6f35919e1b1c3f3cc8d989c8df175e7e41', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'fae4249aabee21757c2f6acbf4d311fe21fb8401', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '932ded8dabc20c542588a67b65dcbd5d0dd60422', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '70cc68d56f110011cce807e5437fd302ff713676', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '1725fde9f83a50851f635ed01f143ce643d35638', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '005f2817c9adb52028ff6cf9fdee268ad92db070', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '4b24953bb4df3a47178401d79de2c5a336aa6e3f' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'bad57d8acdeab78bbc78357140df8b88e3176140', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'bab5d37bdb763166282f48002c92518f33cc4e2f', d: "m21 16-4 4-4-4" }), h("path", { key: 'cdc3520f0b4238954e49e103e54dfe58fa5cf145', d: "M17 20V4" }), h("path", { key: '35579369bb781b9e5ad56e30dd181ccb64be72ae', d: "m3 8 4-4 4 4" }), h("path", { key: '617a1c53b9b499f28710d142af5703248f594007', d: "M7 4v16" }))))))), h("tbody", { key: '8de9e4cb597065b6b3e5fc379369ee6cbaec21a9' }, tasks.length === 0 && (h("tr", { key: 'fc1c459dcae69a8d16288b26680864d7947cc3d9', class: "ir-table-row" }, h("td", { key: '4ce7d34d29d6ec679512fbb2fb5ab26911dcca2f', colSpan: 9, class: "text-left" }, h("div", { key: '2c3fb8901174e2bc5003912c6f6c1b5f3e7cb857', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '774a6f2b98d72a01441f6b224b261cbc6dc29ac1' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'e97b56478faace237d0a98f4fb1fca3a591741da', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '754bcf77c400ad37fe6e20bf56fc5cfca1b34137' })))));
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
