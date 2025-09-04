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
        return (h(Host, { key: 'd9e18b5bc78278b9564dc89c2032c23ec0d23f24', class: "flex-fill" }, h("section", { key: '4771b94ff8f914c2103b02ab8986fc61b0369fc2', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'a75d96c670262c672f1e93199372056ec4319564', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '6afd6238955d8da27c2ab6bb61012cc6af189b29' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'e4680bd0dff15e5111c8a0b7ecd3ac7914ba9630', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '7716b989c1391635ea1493f567e3020d7fcf5544' })), h("div", { key: 'afe7d6248a70a6dfd97272870eb3abaf046b43ed', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'c1b7e6c5f72b716a92d3da78ecaa77568adcaee7' }), h("div", { key: 'ce6bff29e2a4714f567917661f252dea84db0dfa', class: 'table-responsive mb-auto' }, h("table", { key: '9da796b496ef42f6707a71688166aafd96c9e9db', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2852757389874e5dd1abb9a5ae357b974a546e31', class: "table-header" }, h("tr", { key: 'd3f18a84f926cb741e7d06a68db078c70aeaee7c' }, h("th", { key: '96f1e144bc9605acc7bd4a3720e07eaa69ace629', class: 'task-row' }, h("ir-checkbox", { key: '51188ac3bfb3e74b82170687842ec0e5508ce0a1', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '577808698ee1555df1b061cdba728a4f28dd491a', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '14c0f0f70d206f51caa824498757adc390c458a9', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '3dc55f43c559cd6174e7f390b5f4df788bebf961', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '0bc39bf4f6bc0ac0979e735fd03b5bc9d4aebaf0', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'a22ac27d1602ce89c35fa3a6f8606a17588fe8ee' }, locales.entries.Lcz_Status), h("svg", { key: '0041cc97349ba6e3dce1fdb350d137e98ec60bfd', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1342281150d7839a4a79a49f18800ba137c01fab', d: "m21 16-4 4-4-4" }), h("path", { key: 'c1b01c209c525c13f01c314624be547d90c005a1', d: "M17 20V4" }), h("path", { key: 'a5d12a9927e91f5795262acb851bf07c122d4a26', d: "m3 8 4-4 4 4" }), h("path", { key: '6d7956be8f09255ef97c026641463b83c99d7253', d: "M7 4v16" })))), h("th", { key: '9323ce8e8669911f97b4771fc27120378e7bdea4', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'e70aa6edeeab691dd7bbfd045a4d7c577cf5ee84', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '5b39e47463e0bb0e32f6ba6158cb59abc733f656', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'ea04b0e55a03e2bcebb32b24a072e31ddd8f4151', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'e30c336aa3b10a447e2435b48dbbc5f5ef7a1ca5', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '75970b12fc60c5960f6b73f2bb791ad72f52e8ca', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'bcc1768cb9486297a7cf122588b865e71b1a54af' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '2c893b97b4f01a7ed7afb7ed7a4709e1f45a509b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '34ab7dd6511b4f8dfcd9bccee8099c053d87a0a3', d: "m21 16-4 4-4-4" }), h("path", { key: '4bc6aa0311799b2c318d8f57cd231a3a2499e5c9', d: "M17 20V4" }), h("path", { key: '4c65edce910e324eb69310962d239ca929a47c8c', d: "m3 8 4-4 4 4" }), h("path", { key: '04a413b64cdcc363f3fd207daf9599e787bf62ce', d: "M7 4v16" }))))), h("th", { key: 'eed898c436b5e84720ff709ffa609011c2a7a4f2' }))), h("tbody", { key: '635552f58184812f3d07c9dc362ea5e29d760d94' }, tasks.length === 0 && (h("tr", { key: 'a918ed8b3699962d910eb15c112b5722e29be289', class: "ir-table-row" }, h("td", { key: '7d38d1999a989c4cdbcedf32f33daf3b7d7c73a9', colSpan: 9, class: "text-left" }, h("div", { key: '06c4f5ef1efc90fb60478cb8d1bd857d0c6c118a', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'de0b22833b13e8f605abdfb13d7d3b222b66a35a' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'd3c62832c2238fb7843de9e7d88f34bc6f036223', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'c2f6f454589bc1a1df5df9e2dcc3412ed84c503c' })))));
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
