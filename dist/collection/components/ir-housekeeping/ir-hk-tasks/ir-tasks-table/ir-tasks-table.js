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
        return (h(Host, { key: '148063ae4678c29c2fa67580298c5f155a536bdb', class: "flex-fill" }, h("section", { key: 'b7c1553fc37856e53ff44bbc4b8ce6d6c41975d4', class: "mobile-tasks-container flex-fill" }, h("div", { key: '519dab33a01c67bf5bf7132be69234eef660f704', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'e8c122f46df3d012e616910323d836f2c8ccd5d4' })), mobileTasks?.length === 0 && h("p", { key: 'cb0a65539d4a2f3b6d3dd4cf9b4ff07c71b87a68', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '75d70fe040456003515bc5c5b288cea05e28938b' })), h("div", { key: 'c8e8241f574559f7f17f3d94d8d38d5252b8f536', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'dcf3c4ed264e50a3755912856cebe6789c63d666' }), h("div", { key: 'd1e327bc695e77b0bb0069c7e4a38ad49a00f39e', class: 'table-responsive mb-auto' }, h("table", { key: '899a0b84515b0e35e151d79034811add9a15533c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd9d8444ea27065fd5acfee9f6594b167b2b7f74e', class: "table-header" }, h("tr", { key: '618eed9bd200700f9f09197a48c0bfe8f07b216f' }, h("th", { key: 'dd993c25d4b9cae9ba5b222bc1aba8d7af970f0c', class: 'task-row' }, h("ir-checkbox", { key: '06e9a6d87ad6c5fe487e1fe2749430bef7044f01', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '6b09c421af2fdb155d612f7c42069466b09ad2b5', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '0e4e716f2a92709387b2a46f62d15d8230bca5a5', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'bad4e1b2cb47c7f4b9cd9801232374151e4d8a2c', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '34fb0117d80f6d4abf31d291c3a8919e0333d1b3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'bc2a05e2b0d7fecf3beb406d024957a721f57ad3' }, locales.entries.Lcz_Status), h("svg", { key: 'fae645ea252a9472224c0c3695c29d7839587e3f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '8096b93c48fae1ec2420f995579ac669430777d1', d: "m21 16-4 4-4-4" }), h("path", { key: '46b1ee410e6635e6e0121f61ee050f85a7e880fd', d: "M17 20V4" }), h("path", { key: '27623222a732ea6bdaa1588ad80affbe116081d9', d: "m3 8 4-4 4 4" }), h("path", { key: 'a5b6cb2ac53a178a3009ef108f05bfcd3bd65e4a', d: "M7 4v16" })))), h("th", { key: 'a3694a3a9a29128449e230cdaf7b7f4be1e91cdd', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '31bc87daa1f1de389ca7a82e47c068b1408dd986', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '326909bb18bb746739e3cac0f3f2d28c9ba8ebeb', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '69949ccb9fb64e7b9bf9b0d4113b6f43130f34de', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'acc3a65b871c539807b5730c04c5af407b297212', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '5d817a633fbb511fe9ad8b4e9709484ba6f5a8e5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f5904c0e463a2b59f806b55f497a30a4348fb79e' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'c9c05d8a199576a04795f4b899b10e532659f230', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '32ae9de40ce5b6e79f180cc622314aa386ceb934', d: "m21 16-4 4-4-4" }), h("path", { key: 'ac86a4e64acad87c7b429e9541d4d3a61f0b837b', d: "M17 20V4" }), h("path", { key: 'caa4be381dd4fd80c3babbae5cfd5558349e3184', d: "m3 8 4-4 4 4" }), h("path", { key: 'cc568d3bde84a3763bf8280d2ffb47c8c1205bdf', d: "M7 4v16" }))))), h("th", { key: '9db7d15987b667ee2b01546ca409b363d6a269fd' }))), h("tbody", { key: 'ef7961fe885995677d1eba0f58f54b78200300cb' }, tasks.length === 0 && (h("tr", { key: 'b90dc30fd7c3db950f8e9e7bf62da9be2af96d80', class: "ir-table-row" }, h("td", { key: '7275fb5b3c56e3bd9d6854216e69268f3883e783', colSpan: 9, class: "text-left" }, h("div", { key: 'effcb447e34a333889df1817877f397cc3210850', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'ad0475aada6321b3249b51b2252665b8825703a1' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '07f5cc9c94efb1e26e46ba026040c7b6b46151a5', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '1d89eb2a18ff5dbe7374d4a46f852696183fd9d2' })))));
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
