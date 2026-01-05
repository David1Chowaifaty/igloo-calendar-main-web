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
        return (h(Host, { key: 'f764c9a49ef159a5367571a35f0b40cbd42686fd', class: "flex-fill" }, h("section", { key: '43cc665e5157336851031d21c7613cad6b681891', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'b8969428d3a67a74d787841345fb1b5c6685bff7', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'aa3ed78fac90bcf242076a2060b667e2fbea3962' })), mobileTasks?.length === 0 && h("p", { key: '0d094eb51a6a42955048abbba38696d223bfea4c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'fed1e93eb9fda070ed5314bcc7b243fa1860dd84' })), h("div", { key: '6bf33fdd4efcc8832fcd8c2047668a9e0c6726a2', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '6a78be4c9b55505059e678391bc7d388f2f9ef43' }), h("div", { key: '5b60fe391de16f8d621940c34a7ab263666cf7bc', class: 'table-responsive mb-auto' }, h("table", { key: 'fef201606f7ca2fc50554c39b1a8261ba6edb4ff', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6db3f74c2337198454d683c01fecf380bff928bc', class: "table-header" }, h("tr", { key: 'e8d261f77680009a7c2e2ca29a4b871792b1fb39' }, h("th", { key: '0c187ff9d9087ebe8dc015a3b0e521b5cfb27e72', class: 'task-row' }, h("ir-checkbox", { key: '3507aa27171635caa172c8c98888b93d357d0a8f', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f8a1f7dbf304b66b3a5637a4d8fb2097f9b5d37b', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6d1dce567f9e2ee9b2cda18c9b4f0fab5a107260', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'a2fa45d514a568aefcdb012f05887a21e45c02eb', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '515ed531a475a49ac403ba1bac7a1b994f770afd', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'fd38abe52d9ff60d477589107647e7f29e6bda5a' }, locales.entries.Lcz_Status), h("svg", { key: '65b99206f5c07334e222f1e87ffce8d0de5a58c7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1a1085d08609c420baabb890b894ee99db3bbf80', d: "m21 16-4 4-4-4" }), h("path", { key: '4be1fc27b8b1b12ea4a4bb88d24be0d91ef62a09', d: "M17 20V4" }), h("path", { key: '5e622816c72e0aa71d1159ccfa8e8707e8011d0c', d: "m3 8 4-4 4 4" }), h("path", { key: '976e2b9a68c65b91f2f8c6260f9c10ce6eb9e0eb', d: "M7 4v16" })))), h("th", { key: '1465076fe88bd591a8012387ea800c3b0dd91733', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '1676c900cf19271e5c98d968ea8ec99d2454e0e1', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '2d9c337e1854e17bc1379e881be9fb1cf5104368', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'e6c0586d42801c34f64fa3e862af3ac28f2d2adf', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '4f94a53766a5fe077ab4402ab6e8ea010c958d3b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'dc6bd5bc1b539554c6c201c038bb2f35f1a4c211', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e49fe6a2c469db3e9ee28cfc37abb6bef6e367e7' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'cfaae1eb46f191c7176ca3330c4222f887a2942a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd989d078e96736111966c660a1007d3fc66b354f', d: "m21 16-4 4-4-4" }), h("path", { key: '8726605e51a8e37f7d09bb069bbf3eb4a4611add', d: "M17 20V4" }), h("path", { key: 'd748e11d3dc9c702598cd206418e7cf54242ccd6', d: "m3 8 4-4 4 4" }), h("path", { key: '94944261aea70a92516ed9145235fec3c3929822', d: "M7 4v16" }))))), h("th", { key: '107986c30b16d1e6ff6b7c7b19a376d367e645a7' }))), h("tbody", { key: '1e3584c8a0aacd21f6006f8bf2ce337e9583be26' }, tasks.length === 0 && (h("tr", { key: 'b61f58b55a924451e542df63a9093a12846f3cff', class: "ir-table-row" }, h("td", { key: '383ca3d3dad82bec8f40390be20ecf2943d049ec', colSpan: 9, class: "text-left" }, h("div", { key: '52aa3ef61190dea3077aec04984158e1b2e6ddb9', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5243c641e4fd4adf07c6a1f1e79c2f11719b0301' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '28f28a0e1185a53446928e2be3712c8e33ecd44c', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '9c299ff818fd83519fade6bc41f04ead8ec3bfd4' })))));
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
