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
        })), h("div", { key: '99b4f6b2566e80b71dd8d38a4685c693bb713d00', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '665c390e9763aced48b8925784963ea0019b7159' }), h("div", { key: '2e52a9fd5183440adeaf38b27b43164972f30c68', class: 'table-responsive mb-auto' }, h("table", { key: '5a0f1486f858d8fb0799c15c54e023168a610e03', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '18e2d0073bde78e8f24b45ac847b055c71efcb4b', class: "table-header" }, h("tr", { key: 'b751c7fa223070247b1de7f3e062a31305929c68' }, h("th", { key: 'b8b091e6ac3f0df703431c6e34f9a401488f88ac', class: 'task-row' }, h("ir-checkbox", { key: '176221b858afc7ef0668a17cf313545b461daee5', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'bfaf939ead7e7214d723e9abe52fdb53a6fdb61b', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'c1beef3f01cfda4ee64cca600eb1c068f537eb50', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '04e60e798a629352d02395ad0f6e28215bb658b8', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'ee306249944817291007e61a45f362eadfbc38a8', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '761bb1da9f9026563fb8e41968aa8a600e992b67' }, locales.entries.Lcz_Status), h("svg", { key: '53adf144abf28bdffc81de3c279c588a1f6db107', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '94550b661d6fdcf9a0b175a657c030c69e5c5a5d', d: "m21 16-4 4-4-4" }), h("path", { key: 'ea51a34f774749c80a78a2a285354273bd3a92b1', d: "M17 20V4" }), h("path", { key: '323879ef196bcef41d5985e4d73b1f2364d13d16', d: "m3 8 4-4 4 4" }), h("path", { key: '7a4e1b9a3b1844fc4759735a972beeb0f84e04a0', d: "M7 4v16" })))), h("th", { key: '69b057f2cedab84bcf164040e8b3e0c9ed302c75', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'ddada1b46f805b9adbf598b4602d94d1353624a3', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'd27530c9a8062c148ac52bea8dc563da0954dd2b', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '9b2414568de40ecbf0044a6f120b45f304c87e15', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '0f675445646ae5b9136e1ef3bb5d0e48627da5d1', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '4824d0e2a34cb3eba21e3e48b26a130eca3b9a15', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e6d157379ef5de9569ad13329fefcfb51dd68048' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '9542d2fc9659ad85a0a91ed0df04b5391d86d6e9', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '742ba101b120040c6b9e821aa8a25da6eddff394', d: "m21 16-4 4-4-4" }), h("path", { key: '1e281c357252698ecbb4f8e16d37f295f5926a23', d: "M17 20V4" }), h("path", { key: '18dbf4d05f12016304ba67240c89c97395ca6b01', d: "m3 8 4-4 4 4" }), h("path", { key: '1ab6f51cf728befb59bbfaf02efdaa34bc9050ad', d: "M7 4v16" }))))))), h("tbody", { key: 'de21060136a1af2912637c811833ea24c3ce9016' }, tasks.length === 0 && (h("tr", { key: '768e5b428754d67eb3f26058e9bcb73223c5a7fb', class: "ir-table-row" }, h("td", { key: '2e1672d9fbaf4fc7ea77f423643fbe88f1472893', colSpan: 9, class: "text-left" }, h("div", { key: 'ab00312ebccf7ba032148cf08b44b569eb212ba0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5157b78b0509b39d58003996696e80d699acc839' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint, " aaa"), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
            })))), h("div", { key: '8971900cdb2e78901a0495378d68d3714c4bfba8', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'b1b29680f79f1975dff3d4f0a6b3d7f5712a0aff' })))));
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
