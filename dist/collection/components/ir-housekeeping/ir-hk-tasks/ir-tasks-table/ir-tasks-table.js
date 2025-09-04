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
        return (h(Host, { key: 'd8028d62f95bd29ab568926035905bc44c16d06c', class: "flex-fill" }, h("section", { key: '5f0c660698f4b58bc6c40f75c6700e141a7e8148', class: "mobile-tasks-container flex-fill" }, h("div", { key: '44cfacc9de1eac8cda0d5e978b7df20d7764a820', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '5c2f27b9675abe9aa5e7d7250cb6606b3d64ecbc' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '66de5fe5cbf6df9eab46f500445f5f76bef69c8d', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '79e041cc3fd80ee6644a16cc0ef187c10983b2cc' })), h("div", { key: 'b2bf59b583d0bca44dff1240ac6e3bab45f5610e', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '9cc903bda21b5ee2052e87ae326ee9a77acb3e68' }), h("div", { key: 'b7167389e29fd5b9d038f7793769cee8196b87d8', class: 'table-responsive mb-auto' }, h("table", { key: '041ab774973f32a528e0fff8d505157b517de7f2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3cf17e3742656fbf85a36600ae0ef9d9669b533f', class: "table-header" }, h("tr", { key: '991ab1eeb2ecd90943339688f61c3be27ca003db' }, h("th", { key: '937bd57566074713c3591c8bcda65a102e9c9626', class: 'task-row' }, h("ir-checkbox", { key: '16fdd00edf47632cf4d632bdbbb0fe03fe4c22dc', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '9c5a03b285890e87e1200710b72ea56de9485c37', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '2dadd18e5838090881121a41016043862cb0dce5', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'a7fe3d96b677422b6db84e01aac9c2ad47cadf35', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '452be834c553b72001f2119eca3581c41f69a16a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b3e11a2270b281bb6477ea360bbf2b506f1e4dd0' }, locales.entries.Lcz_Status), h("svg", { key: 'cab981b480499c03c196157b38cfce5110652776', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'db4c483a85061767c495447d8697a2dd1b275eea', d: "m21 16-4 4-4-4" }), h("path", { key: '27a1a566dfc72cf7e6831d917f1f27d14c9d62f8', d: "M17 20V4" }), h("path", { key: '8d6fd418e1e0ee6343facef2730c8d8002603463', d: "m3 8 4-4 4 4" }), h("path", { key: '92d0b1718b0abe7f76d356d00626d559d838d0f0', d: "M7 4v16" })))), h("th", { key: '37978bcfc0b6a2be6f7391ca8846295142c2c601', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'c7090c5a91a894b87e7d92ab6f6456e68a4a41fe', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '875d63ad620684909e46dd89e7d711653d1f1cee', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'efed6e25d28d11c76708c743d7818ea01a4013f0', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'bc112284ba163695ed08cce1c6bd23e7bcc431bd', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'a99462b86d73b18035b984e882c76b7073c89581', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '83922a710751bb2099cb6dad381ce336c3871e43' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'b89db790f19086386f0f7b28651b0cd42297ede2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '0b1191263de732576b6adac648abacf9f3879af0', d: "m21 16-4 4-4-4" }), h("path", { key: '464c8170fef256b5a467e88309d06c35b884ad3c', d: "M17 20V4" }), h("path", { key: '89b5b487e1dd0e9be6f3d8d48534d92b26b3e766', d: "m3 8 4-4 4 4" }), h("path", { key: '562555c89df5b9f1f80994edfdca25b3852b6bf0', d: "M7 4v16" }))))), h("th", { key: '3d07187df1bab75d6c621a1c2cde5a5e8d592d7f' }))), h("tbody", { key: 'd19c5b1520cf38d7adbba6fb8b80a46b7df85371' }, tasks.length === 0 && (h("tr", { key: '8147bd316e8e5280842f36ac877a15db321777d0', class: "ir-table-row" }, h("td", { key: '8362f6923723f1cdfee3434e62b5737cf5ac513a', colSpan: 9, class: "text-left" }, h("div", { key: '4e1c055b854ddfe29f94807e23a9fec034bac495', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '4eb7ab2203b1101f96f90322e11871c3166f4f45' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '8b291bef55e32718929a1fd3c8caf3a8e93e0026', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '9cff1e1fc8be60e1b399361945b1b8c3f407b2c1' })))));
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
