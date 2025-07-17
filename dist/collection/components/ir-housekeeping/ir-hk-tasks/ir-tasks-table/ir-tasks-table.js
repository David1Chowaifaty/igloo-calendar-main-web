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
        return (h(Host, { key: '07d897c452214ad3b1129041ddfdd9e5e782bea7', class: "flex-fill" }, h("section", { key: '6132bb07e5ea8b0ae7a68516948e3c0e6600d388', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'bb944406b382259baf981db66586eaea954debb1', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '55ead99b3b6f90ce7c9643863de70a5429271065' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '88789898640e4eb7c28e79fd40fbbd8ff82e3a5f', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '41700a0f310c40a8d1887f00b506d0b29cc575f3' })), h("div", { key: '966f178e5b060247f33041acf8d7e7f30143de16', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '4f40e7c7224ba22ea68ed936487b215a8ad2e7a5' }), h("div", { key: 'a8f1e471a58182167e39b927a2e45a250e36e7e6', class: 'table-responsive mb-auto' }, h("table", { key: '09a9d80f043b287c16ebbc769a0a96186e0a34e5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8b2158dc12bc08a192d6a41ac8746eab72809a1e', class: "table-header" }, h("tr", { key: '688ded02cefa4887a79ec19970dc2c22374e25f4' }, h("th", { key: 'd039765a5513a6df5efde9449114e05a15187bdb', class: 'task-row' }, h("ir-checkbox", { key: '12b420e557e9691dfc4d0fe6b3943ee1f1ec3b13', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'be316220fbfc2cd8c96f086c92684539f5307c70', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'f8b1d96c4bb7ab1ec05650b97d275d5e9f828f9d', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '130102d365553acd0bad44cd00117fe00476365b', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '38a4220d647b680441ccfbd7a45296d5fe04a174', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3b1d96c95dbd60bf39275b8cda0dea5e2a5512cd' }, locales.entries.Lcz_Status), h("svg", { key: '9c2a4715755a1ecc5db35bc91d00264d5ae77db0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'eb15173f45b9d2f9975df136dbe8f3160ecc6c15', d: "m21 16-4 4-4-4" }), h("path", { key: '9a182d7908a02d0c2e9e331af12e173a3be15c3d', d: "M17 20V4" }), h("path", { key: '7c2fb880a82559e5f7348918d172d62f2e9adb4d', d: "m3 8 4-4 4 4" }), h("path", { key: '58eef8a5fa226c2311a1227228e2a1c8350135d3', d: "M7 4v16" })))), h("th", { key: 'a8e601913bad23c1f9aafab24a3e38aaf66b1569', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '8432d0ce6e629eef41a18e158966d8db8e894f9e', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '6027ab6475b0bc74fa197bbcdce6a98c8df75a75', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'bf018dbbd331de7a9d799837fbe2c60156ac7d83', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '856f5271e721304b76b2554a88dfb4f2d8014466', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '78adb87f5d106845c18a5c74becfbf66d99f3741', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '72aae0499eadd2429e63df67e77d1646f468ecc5' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '3a0a7fc49a36f0091b6ce98ed3327ee60dd132b1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '99feefceab2ffda041ba7a75e4972e9bf9431fc5', d: "m21 16-4 4-4-4" }), h("path", { key: 'e54f4640031337922f7e6fae6912f8b3f8a190e3', d: "M17 20V4" }), h("path", { key: 'f434cedd951f3216e26e4aa8cf011b10625b900e', d: "m3 8 4-4 4 4" }), h("path", { key: '81fbcb9ea6c6380e93032bd30b5312517540635a', d: "M7 4v16" }))))))), h("tbody", { key: '384ff2473903ef5d1434e680012b193533e6bf2f' }, tasks.length === 0 && (h("tr", { key: 'bb02791b6d51903fe88f632e47b8c79f97f7da73', class: "ir-table-row" }, h("td", { key: 'f75a2a39ffafe7d0981a6f375b7ed94521d02164', colSpan: 9, class: "text-left" }, h("div", { key: '9c4c99a723ef411750cbd281ff9ffa6075e289b0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'af8d701c4e62521c4afc84ff4868d3c0703cad1b' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'd40df35850a5c0f327bea58f02b20ba5ae576037', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '6613390d876d87c0fed2986f0223d100c8e6344d' })))));
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
