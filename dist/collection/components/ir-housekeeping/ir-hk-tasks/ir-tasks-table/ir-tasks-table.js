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
        return (h(Host, { key: '52c6f2cf13fe706d3535e828e2cdf8f34ef2312e', class: "flex-fill" }, h("section", { key: '5acdb592f040c2736aa35e67926969845d7adb5d', class: "mobile-tasks-container flex-fill" }, h("div", { key: '8feb733aede4aa5f3b9339483d970badab2c14c8', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '51e5e4bb6f777d3b2694b465bf4fff467a9cc4d3' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '854e57f89149c9f59296a3ecb1958b47042346ee', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'f6f94813b316a50da0c54b9043be5573f331a1d4' })), h("div", { key: '1c96982a46c9486c1b66c839f912363c89d92d51', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'c5f12cbf8bf0db1591c5a0796d53e0b90051db69' }), h("div", { key: 'b1893ff200d1c772fb3b09afaaca7025fc26f973', class: 'table-responsive mb-auto' }, h("table", { key: 'd5792fed892d7381d0e49b3697d52283b74a76ed', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f5c097ae1ae214153b12cd25827e92487728ab29', class: "table-header" }, h("tr", { key: '25a246a911c0286b693f9de858562688d7a57f85' }, h("th", { key: '45a9d1f9d3dd23876889564886ce12cfcc6512c0', class: 'task-row' }, h("ir-checkbox", { key: 'b8408cda60aa9605ef69cd296cb823a54db444eb', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'a7a748822862235990b8a9a7556f621471c4d933', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'e2ebb4186b6b7e811e07520d2ff4e433fca8d8b6', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'f12430b5f577c8ceaf00bdccb550b58d3d62977d', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '8397749c14117e3c033002eb205682a1c3b532aa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'a84bdfeada2af04524c40f9c576781306c137e6d' }, locales.entries.Lcz_Status), h("svg", { key: '08c6e2178cdc09e74995e17bd6ed96c6ed5cce3b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '675d6ba8d0477e14e21c167c83f3ee5091e3bff9', d: "m21 16-4 4-4-4" }), h("path", { key: '6c3b2d7e5341eb60c3811bda2985149fa000082e', d: "M17 20V4" }), h("path", { key: 'c9ed41f15f8d65bf77f20d0b0fee174baddd63a4', d: "m3 8 4-4 4 4" }), h("path", { key: '8d2815bea86948b509544e017da770d4f6053941', d: "M7 4v16" })))), h("th", { key: 'f78c0360e3255b2f36cfa1db05c381794cdefc38', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '5e64700b219da090c644220adbf2d856fe01dc9b', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '2e0f07678cfed51d28ec62ca90eb34039629b6b7', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'b06430f08fcb2ecf8be5e57692dc097a3ce0f7a8', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '896a63267ae7f36896c49109632a5eef5f10000b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '5e0b955bb5b3f7180e945e3ec68fb2d1fc8486e0', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '70f4fa8f7604b8332e10d92c9b38749c9e18dc82' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'bc607d124b0a5f994867a92c8d95a0c360294fe4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '8cdbbbc71ef7925c467668f88c2ac6eb77e4c462', d: "m21 16-4 4-4-4" }), h("path", { key: '77274731b054db733966de36ca492a2e5a365a83', d: "M17 20V4" }), h("path", { key: 'f1bcaec369cf2ba91cf08ff4fa82d4f498dc9464', d: "m3 8 4-4 4 4" }), h("path", { key: '3f8ca4006d8e244ff988dafc873517490735bc94', d: "M7 4v16" }))))), h("th", { key: '94a8903327f9dae97873223259c7802968813b2d' }))), h("tbody", { key: 'fa620ace9437c7cd945ef66001e3ff8edc1bb666' }, tasks.length === 0 && (h("tr", { key: '9c9380824567d1ce2234a32870c63df90537185d', class: "ir-table-row" }, h("td", { key: 'b758c40056a29a1c2a8c3ae6f8c8f7b2bb408e02', colSpan: 9, class: "text-left" }, h("div", { key: 'cbc601ce7f78a15afd450094094540fc3e056d07', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '8c58fc5f32806045af9eddd88e02fc043f265815' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'a91aea3044506bbd884d45324a3b4456a5e6f779', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'f0aa21eb2c23416951170a4d316c99a2770d1517' })))));
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
