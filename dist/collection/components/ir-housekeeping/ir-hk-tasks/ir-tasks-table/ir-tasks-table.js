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
        return (h(Host, { key: 'f023a83e13dc7ba5fe7efd55e294d8586d467771', class: "flex-fill" }, h("section", { key: '28b4edf66510673444b678975d5a6877206f226e', class: "mobile-tasks-container flex-fill" }, h("div", { key: '60322aad3da30cd9991de804caeb1074691d7029', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '3ba05d7ee7a5cd3ca2ec3d6f7010fd9d8fbeff05' })), mobileTasks?.length === 0 && h("p", { key: '760349698082f2b432863def3ed19fa719b9525c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '80c8cd9ef6d47cb10697382736c0eb837035ebd4' })), h("div", { key: 'e95214ac969065fa053c8c420e2b1e01247aa03b', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '203861a46a2d6b8a39b80f0a4b43cb357b1a3cdf' }), h("div", { key: '470f0453d51db53d2d59073a5269fb9c66708c58', class: 'table-responsive mb-auto' }, h("table", { key: 'af5124c4d81d0ca33c82cddfc7e79f136edd50ec', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3570bb136730d9e4098f2b359ea9f52c8d17575a', class: "table-header" }, h("tr", { key: '4c53d0f9b7712d368139dbb5a40ed6bfef224bd5' }, h("th", { key: '101a20f4b394eeb6e7b86d70f01a576465f53ef0', class: 'task-row' }, h("ir-checkbox", { key: '21c17ff913bee6a97b089311077fd02556a22284', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f6822c42a63e706ca09d83b1e41b5189abc415c2', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6972f6bc79d561e72c8f86b958bc94cc799baab3', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'fadd5f0976aa759b704f0c20b0c116beb5deea18', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '030dc877b2451d988e7d1bcac95cc418d89baf99', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '10681a06e24b64b948904e3bab23c9e2dd0669ad' }, locales.entries.Lcz_Status), h("svg", { key: 'f797ebf7cce9786cf67729f901433d2265f02099', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a33b8e644c6d99fd8e1ac6792fa68849f272de58', d: "m21 16-4 4-4-4" }), h("path", { key: '9b48e710e57fe249417f02a3c72ea244a32037bb', d: "M17 20V4" }), h("path", { key: '92b919f0bf0dd4932153d872c50c7eac79cf5a66', d: "m3 8 4-4 4 4" }), h("path", { key: '13fdc2853249cadd3753defae7dc69cf7d92c861', d: "M7 4v16" })))), h("th", { key: '3a411edaa4e051c5052e0d7b12e4c396d83b3711', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'b8e1a4f535c0f389a57b65d2fbdb31846a83dbaf', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'f7958aa3eae9cdbaefbd6d529e4ef9c17e0870df', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '16399dcfaf5e7e17533139f1d5458ef8012f6b55', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'e6ae9a43c8541d616b7cc60dd68b6d791d959081', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '7aa495ccaf51c8c72c14ed54bbcecf0f1703c5a5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3281460a9b9206d96669ad0ef423ab9ea7d96321' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '2dde9661eec12921beb33e79723b047fb7125a1f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '96efaea7a9a71325135c9cc4931ac51aec300216', d: "m21 16-4 4-4-4" }), h("path", { key: '7cb1f03ebfa5a7bd2ed9cbf0a2020832fa2b6a1e', d: "M17 20V4" }), h("path", { key: '8d3ced98dab65b6b0a37e3255615de899d2e6569', d: "m3 8 4-4 4 4" }), h("path", { key: '9d88afbae149559dcfaa12f76a83036458364681', d: "M7 4v16" }))))), h("th", { key: '957350b01aa9c412e3645a0a1d207d1f0337f31f' }))), h("tbody", { key: 'a17c5085d7195119d394ad96d549396b97d981ce' }, tasks.length === 0 && (h("tr", { key: 'b20c0a19aeea269d83e133ddd9cc3f02dad7f58b', class: "ir-table-row" }, h("td", { key: 'ecfc42afaee8c3bda04bd4e92891861f98b6971b', colSpan: 9, class: "text-left" }, h("div", { key: 'a086d6555189c99ec58eebca3f082dd354b6cdc8', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '23c43dbd99c4571a9220ef7ac724216864ea6faf' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '8bc6787329a255aad83d59425adcb11179f669f4', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'a045755c57a371389bcfef45c71f9cd469bdb5f2' })))));
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
