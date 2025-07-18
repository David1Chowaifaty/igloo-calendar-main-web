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
        return (h(Host, { key: '7f17612699d841f8d7870fccfedbc619df272fec', class: "flex-fill" }, h("section", { key: '46e6e95948a364821c7b3ca36265ca4fb1ee6224', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6d999223fe9134704bf0a731a31a9407e570a033', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '7bd2704526dbcd646956ec6bb078657f53955c30' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'bd36bbadae2538a90845aae8eda6f3ed8729f1a4', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '75a0f0703cd9ddc738a3dee9e3137d8e7924285a' })), h("div", { key: 'f9ddad92dfc07e93205100fea98b5d97534759d7', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '664a9b8d5a9dcdec05eb96ba0ce1cb5306f5380c' }), h("div", { key: '598f8fc1d1c1dd1a51fbbd567244fbbda5a79142', class: 'table-responsive mb-auto' }, h("table", { key: '9c5980565fbbd2f3270f9220f95d5565b69933cc', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '87b1e5e706b39327410e9f02d90a713c71ae7b22', class: "table-header" }, h("tr", { key: '328892a3f976dfd551eff74d62b72dffa44b4fad' }, h("th", { key: 'f2cb9579c5f5c80cfe63ff694897ec9f132f5b97', class: 'task-row' }, h("ir-checkbox", { key: '4348d6134ef7619b5c1f7f89e55c516f56c8afb4', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '9e1d56a82a65027441f80eb2d3129d9016ffcb98', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '69d37e9164700ecf62ac61941be4fe970ca256c2', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '3841bef1f0f9263780127ba1fc6538f83addf071', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '87f821e58687da02980a822c0b3470824a0ad418', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '5abcebc3164616953d8306d7bc09263d96ccf37b' }, locales.entries.Lcz_Status), h("svg", { key: 'dc043d91005f4c0a90cb52741d5d3ce5db5490f1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4b2509829c6f454855ed9f52820232661dd8ee86', d: "m21 16-4 4-4-4" }), h("path", { key: '2a8e9449b086fa759f4656598b87878913f40b8b', d: "M17 20V4" }), h("path", { key: '692ceadd1fea9ea54a40a1a18ef49c48bf982722', d: "m3 8 4-4 4 4" }), h("path", { key: '35333a2f080c60dd76131c1c5181bd9bbcb0e6e1', d: "M7 4v16" })))), h("th", { key: 'db062e753a886419f7686c5f6f7b342e861c9e1a', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '2d950de98fb3ff774ddb51ea0862812ee00db048', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '6443a7866a3df1722fa2bb71c69799f8efee3dba', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'e53a4efbc4a627706239963e2c1b26afae11a775', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7b6bc171a825f7dbd11588d9fbb886f82693d415', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '7112cc00fb0634aa8ef9e2ccfbbc3ef8486f4260', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '33c8f1507dc5ab0554da3f5e5a263ea23ed77542' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '80fa6642ee9a602990a05b14243970c86fbe78c9', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd038cf1a236a434f92c62ef27bdd91a28c1cd673', d: "m21 16-4 4-4-4" }), h("path", { key: 'd13d12139d6e0dd4ef01adb1aa2b249638e047b2', d: "M17 20V4" }), h("path", { key: '6b9bddd730ccbaaa61381325b7f4fde9f9b7efe2', d: "m3 8 4-4 4 4" }), h("path", { key: '76f0756d1d74c36840df92a7cb62fb27f3d061c6', d: "M7 4v16" }))))))), h("tbody", { key: '39e554364b29053038b343745606df1d2a4f7bef' }, tasks.length === 0 && (h("tr", { key: 'ddbabd029be36a99aabb4eb65301f770967d7cfa', class: "ir-table-row" }, h("td", { key: '60f3de535049d1f647bbd4feabff7218ef24064c', colSpan: 9, class: "text-left" }, h("div", { key: '9aeab0fa1c1b7447372caf88364e118b0f6128cd', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'b926faa8038104c2d6d58092a481bf33526b44c2' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '85b08d7799299814091d43434fe6aceb257468a1', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '92da910818c5c9f4c4fa33a1f5946ddef0ff8eb0' })))));
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
