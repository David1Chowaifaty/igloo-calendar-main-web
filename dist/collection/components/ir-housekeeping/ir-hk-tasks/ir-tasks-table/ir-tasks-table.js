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
        return (h(Host, { key: '6d8bf5ec1f22eb128cf22c09b176e4f4282b702f', class: "flex-fill" }, h("section", { key: '14183b73f94faeb8909af7b647c394f518424583', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'f4c4f2fb4ae3a2993c9657fbc58547fe409d561d', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '45203b36d4bc7cfaf42df24a213f01659208653e' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '6c671b3bb8527f4e09cdb1f80d4c1c76234f6c50', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '4de6d401c89b6292aa59fe2e6916cfd935a2be5e' })), h("div", { key: '034aa4974e59070f9ed67653bc95873ba904b970', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'ea77c48932a8875e171094343d130e2ddf26671c' }), h("div", { key: '81eb7744f2b8755acfb13457b88654758bdb3093', class: 'table-responsive mb-auto' }, h("table", { key: 'df300a881d6704ffdde7690a38a42313e9c318e9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c0730254628e4c3c05f78467fe6fb68312db3cfe', class: "table-header" }, h("tr", { key: '85126655bbebcd80515231ec99dcc4e9f1bc0461' }, h("th", { key: 'a08224dba7fbe9da9ba7e7f2c8d1b148420671b0', class: 'task-row' }, h("ir-checkbox", { key: '775c8aa1fa8172b5c60f9a782165fa61ce3cf479', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'a27e999a092dc928348102fc0efde55325a189c1', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '36045983e347c7a1f24c70b021ab57c89575ae70', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '101aff17daf7fbb55249fd67985726e91d0648fb', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'eef1c91455756e09f7ddec2845d1f18373275e15', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '05f5c2202200949af43094dec9f2ff70104bf7b3' }, locales.entries.Lcz_Status), h("svg", { key: '4c440e12b3a33bfff1fb90904f56b4eadffd9b64', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'f15fb21af34d5d06763fe3d1cba93e1b6abd1ef8', d: "m21 16-4 4-4-4" }), h("path", { key: 'c0a51687f3e4a022ddb7dda34ea4fa298c85e2b2', d: "M17 20V4" }), h("path", { key: '331d87bf63c5f2a69ca026a1b9917403ddcf9ece', d: "m3 8 4-4 4 4" }), h("path", { key: '48f6cec557b0c8d1ef04fe9d1848d8b8dfc26dbc', d: "M7 4v16" })))), h("th", { key: '087f7cb3e6253842d24a8707a8a91f0e2ccf84c7', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '92571b4fe235ececfb3bd7e2e3c855355d0e0928', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '1bc9e02788b23f0b3025fdc6611dd6f11bafa699', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '5a1add8e717565431015ca6fc9c238c6da2d50ae', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'c1dd595aa684896f0f5b06a4538ca66e1d1e8147', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '9db372a4ec4c713c853bd142f4a28453ce56e551', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f66b8ed1c922f9ba850373f4839a39c4b9640490' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6aa07437d5487e63faf0b4c9bb46998edeea745a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '24cc25e73cb78af05f1b758a18bee67c36bf8367', d: "m21 16-4 4-4-4" }), h("path", { key: 'f3f3c141c2615105448177ef9de0c6943fc6459f', d: "M17 20V4" }), h("path", { key: '591134a6685f048883833c1306f56e782cc2de00', d: "m3 8 4-4 4 4" }), h("path", { key: 'b58157ddfcb68816b6ffc01555dca0ca3014221c', d: "M7 4v16" }))))), h("th", { key: 'a8f9237ebfe636b49de829334303931264b20f2c' }))), h("tbody", { key: '397ace2cc7bd1e0cd6d396e247eee4cabd3e843e' }, tasks.length === 0 && (h("tr", { key: '68caca31c7a153a60bd167061f78d278009546eb', class: "ir-table-row" }, h("td", { key: '4596fc6c852e51648ef8057baa9bd961a7361428', colSpan: 9, class: "text-left" }, h("div", { key: 'a85343fec4a93fe178f0fbe9166d518fb9a1bb24', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '3c390c28dfa0b93970968cb82dc43c3e1d87744e' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'ac421fdbf28cac8fb461ac8591426a7ef802a22b', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '0f7db642db7d062eb7dc482494bef96ff3da9b8a' })))));
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
