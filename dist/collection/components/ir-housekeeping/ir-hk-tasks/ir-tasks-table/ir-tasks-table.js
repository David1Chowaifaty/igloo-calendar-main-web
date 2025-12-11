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
        return (h(Host, { key: 'cf8d22aa87fbcb2184b2bd0232b96695a58f8aec', class: "flex-fill" }, h("section", { key: 'a31ff874f2c2661cdf0ced699b5f1e847e8f8027', class: "mobile-tasks-container flex-fill" }, h("div", { key: '01c3355ae4f01cd4c6a3aa71eb28c087e2da4de7', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '6f656334812575b37bbf6b783f164cb5d9589f22' })), mobileTasks?.length === 0 && h("p", { key: '49f9ebcf1d941225e99bc4434ca499fe561874b7', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '22a76ce4ac74e5368d131643a1cf8a0c4f7da6bb' })), h("div", { key: 'c5e2ee4cb586d5f16c8763c27008f8c732de578f', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '52fa0c4a1a2181d20c385f5ca214a5be9a046a5e' }), h("div", { key: 'dbd2e3dd08830a03c3c2259d783f0fafc504748e', class: 'table-responsive mb-auto' }, h("table", { key: 'a1403a4976766e50e07437efbd6f51d7ad3f782d', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '63d923464daa485d0f16cf56d0e5ccc8ac993b38', class: "table-header" }, h("tr", { key: 'dcb9d7b47781abd0794db5ca2ed287129c568c12' }, h("th", { key: '681e9a2310ecc30a284f6432bc41cd2b94938fcd', class: 'task-row' }, h("ir-checkbox", { key: '1787b72d305cb7b283fa2d7df37823e8aa3de41c', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '893de1bfe70accf166752ab12b514b8b83ebf64e', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '0875e7444e45f98b9301d05d93dc298967f866dd', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'b7013325a0df23e25f6395600077dbdbc5a46c14', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'e7f437d10694985c211ed575fcb4698aeecc2370', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '976a06ebdcebd101f6b207d3b10ccdaa4dccc2d9' }, locales.entries.Lcz_Status), h("svg", { key: '613abb94a771d5883893c9ffd71124bb7bdb7a6e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '98d7200f048306d510cb4f3bc95f463aa46186b7', d: "m21 16-4 4-4-4" }), h("path", { key: 'cdd76ffd5caab15cdd9a74737077395a25c6b566', d: "M17 20V4" }), h("path", { key: '1f27c242a5166c30a1dc7c2dc21ed070789481f6', d: "m3 8 4-4 4 4" }), h("path", { key: 'b6269f5e698e09005e55ef7f6ce242e190a5ec9e', d: "M7 4v16" })))), h("th", { key: '86afccdead2281715909451be5dce4c990ab8847', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6a27ecb0ac09bb815d0f2a906eb442a713e06547', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '918332eb8780a74726e1ee25621910728dd38563', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '2fa5e7af1b16e802ffdc87cd2b2513f04b42a28a', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'e7689b0e3e74ee43e61a52798eb65137246bbf70', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '01896abcd12e064111fab3980e12b48a0d0a9f3e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f9c025ad6e6cd3f147ab752c749c084eef37f495' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '56de6985c9dbd2a55e0d6dffa9c037f76c6a08c8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '2d939093edf38f672695db24db0b30b8c0fd669d', d: "m21 16-4 4-4-4" }), h("path", { key: '50225188bff4befdab9d75dcbf660b7ef151d668', d: "M17 20V4" }), h("path", { key: '20ea7295c60b027be3ff072a9d6027607e57f2c4', d: "m3 8 4-4 4 4" }), h("path", { key: '9dcadcd82ba0140dcdf1258b8c41864c69b33d70', d: "M7 4v16" }))))), h("th", { key: '9de10afa182849d2b8097695b431e846687b064e' }))), h("tbody", { key: '99a9a93ff552f987a36f35ed2d96d6dcdc85f7df' }, tasks.length === 0 && (h("tr", { key: '732636302a0decdecfd27ebd2cadc28ff60181a3', class: "ir-table-row" }, h("td", { key: '5cc219d541b421111cc7b8a4cb383143cc148647', colSpan: 9, class: "text-left" }, h("div", { key: '39b651584dbd3d7c61dd82d951c382f182b60317', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '0ff8dc576cc3e9556afcbfdbe9f982c1b152ded9' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '1fb91ea35df48750cd02c976929bd246013e872b', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '051c6484af6ab03169ca943963b0699c3795e168' })))));
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
