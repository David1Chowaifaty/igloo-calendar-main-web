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
        return (h(Host, { key: '914d29791e26e8e36e493b3853c1520c1dc20d74', class: "flex-fill" }, h("section", { key: '3e360fefccaf84ed995780b671991bd3a84484bb', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'f187389d015ad47b28f6d68d360bbdb8b20fc339', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '70f984afb8813ee8d3f2eccbda46ea2761feeb59' })), mobileTasks?.length === 0 && h("p", { key: '7d330785d6f71ce95851700fb87fdcb0860379fb', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '028c59b6c169f2992ecf4122a28a88d69f823e94' })), h("div", { key: '83c9cd72e2b562d83eb7614f4ed7c60374169e7c', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'c4338dbb3386e3c5948a606650e30eeb5c44ae45' }), h("div", { key: '5856edd2bfdcc1ccd4028dfbcd73d7a14a733f14', class: 'table-responsive mb-auto' }, h("table", { key: '7db519c165afc96130a30a8f11ef1c9a3a137845', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5ee44382d04db429cbde17c9378c883ab11fa112', class: "table-header" }, h("tr", { key: '936a991546751524ef296593fdfc99f1f6e9e20f' }, h("th", { key: 'd243f3a0d064a6b4f5fe61f0dc5e203d3013a161', class: 'task-row' }, h("ir-checkbox", { key: '25fe672561e550b55305dc021f513c257f95cef0', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f40c5013aa661ff5bc643c2bd677b8c89febc303', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'a360b6012c1d13e4bbd055140bb83d765f80f045', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '040f9e2506cc780abdcd567ca76540f4df10040e', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '8f56a023c7255ee5ddac9ba20434fb35cf4222cb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '9c7265aef831880e9f70f4603a9993a73300c8b8' }, locales.entries.Lcz_Status), h("svg", { key: '1859efbe70a07a09cfeb69f3f1f6b1365ee77d11', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'ad4a041a0272522b475e1ad028bb9e03c55a3fb4', d: "m21 16-4 4-4-4" }), h("path", { key: 'f7f523e30a053a4ae42c73b043658230bc903d50', d: "M17 20V4" }), h("path", { key: '7610ce3e84c1049806dffd64c4ecac2912c2d1b3', d: "m3 8 4-4 4 4" }), h("path", { key: 'bde902d2f17cf0e1b0e21fbabc7f1467a30aea76', d: "M7 4v16" })))), h("th", { key: '7b7d9aa3bb3b71cd63ba99b977b250528448a753', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'f357a87461577931dd5b1a44287e695d41373d80', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '7fa56f052e0505242820550019449404de30885d', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '46ee7d5ae3829d932e58fb79497b211453e8dfdb', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '85b91db58bde0a8fde764b14501980b6b2f77ad9', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'd1ce280ac5b007dbd6ab5436aa8c7a1f28905a63', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e6c9f95ad69e3b849aeaf95b7fff6ef789463a05' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'fda90f3666da8bb1c3780a8ea156eced32670c40', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '92ebab68c6ccecd1cd44b7343be5833a30d9086c', d: "m21 16-4 4-4-4" }), h("path", { key: 'eb423b52f6cc334c5d71ea1afe37853514216243', d: "M17 20V4" }), h("path", { key: 'e7e73aaa264389b5705a77d4b398590cbf4abab1', d: "m3 8 4-4 4 4" }), h("path", { key: '2a0a0bc38acc916af725ac7d8f689359fae7528b', d: "M7 4v16" }))))), h("th", { key: 'ce35010d1e9b25f563653223c875261e271624bb' }))), h("tbody", { key: '56d12fedd98b6faaa9dd5d26e3641533b4967483' }, tasks.length === 0 && (h("tr", { key: '79382925fefe1dfb31739245da9c79852db7859a', class: "ir-table-row" }, h("td", { key: '7965009177687c86933c8a840a196b3da9bb07ab', colSpan: 9, class: "text-left" }, h("div", { key: '51b0f201c0828e36b67632151646b5e1db04e657', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'fb0ff11f5ac065a222a7525fe3306afdbe6dc5b1' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '5ce51628c1429afcf0b2d9aefb3186706db3c5ed', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '12de37e717fa35da3ed5139b3e36dee3be8342ee' })))));
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
