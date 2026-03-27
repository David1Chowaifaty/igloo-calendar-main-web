import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import { HouseKeepingService } from "../../../../services/housekeeping.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { hkTasksStore, toggleTaskSelection, selectAllTasks, clearSelectedTasks, getCheckableTasks, isAllTasksSelected, updateSorting, getPaginatedTasks, getMobileTasks, updateTasks, } from "../../../../stores/hk-tasks.store";
import calendar_data from "../../../../stores/calendar-data";
export class IrTasksTable {
    el;
    tasks = [];
    pendingChange = null;
    selectRevertKey = 0;
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
    toast;
    houseKeepingService = new HouseKeepingService();
    dialog;
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
     */
    isCheckable(task) {
        return moment(task.date, 'YYYY-MM-DD').isSameOrBefore(moment(), 'days');
    }
    /**
     * Determines if a task is skippable.
     */
    isSkippable(task) {
        const isTodayTask = moment().isSame(moment(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    taskBadges(task) {
        const config = [
            { code: 'CLN', variant: 'danger', label: 'CL' },
            { code: 'T1', variant: 'success', label: 'T1' },
            { code: 'T2', variant: 'brand', label: 'T2' },
        ];
        const presentCodes = new Set([task.task_type?.code, ...(task.extra_task?.map(et => et.task_type?.code) ?? [])]);
        return config.map(({ code, variant, label }) => (h("wa-badge", { key: code, variant: variant, appearance: "filled", style: { opacity: presentCodes.has(code) ? '1' : '0' } }, label)));
    }
    getHousekeeperName(hkmId) {
        if (!hkmId) {
            return locales.entries.Lcz_Unassigned;
        }
        return housekeeping_store?.hk_criteria?.housekeepers?.find(h => h.id === hkmId)?.name ?? locales.entries.Lcz_Unassigned;
    }
    async confirmOwnershipChange() {
        if (!this.pendingChange) {
            return;
        }
        const { task, hkmId } = this.pendingChange;
        try {
            const buildAssignment = (task) => {
                return {
                    PR_ID: task.unit.id,
                    DATE: task.date,
                    HK_TASK_TYPE_CODE: task.task_type.code,
                    HKM_ID: hkmId === 0 ? null : hkmId,
                };
            };
            await this.houseKeepingService.overrideHKTaskOwnership({
                property_id: calendar_data.property.id,
                assignments: [buildAssignment(task), ...(task.extra_task ?? []).map(buildAssignment)],
            });
            // Update the task locally in the store
            const updatedTasks = hkTasksStore.tasks.map(t => (t.id === task.id ? { ...t, hkm_id: hkmId, housekeeper: hkmId ? this.getHousekeeperName(hkmId) : null } : t));
            updateTasks(updatedTasks);
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.pendingChange = null;
            this.dialog.closeModal();
        }
    }
    render() {
        const haveManyHousekeepers = housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = getPaginatedTasks();
        const mobileTasks = getMobileTasks();
        const housekeepers = housekeeping_store?.hk_criteria?.housekeepers ?? [];
        const pendingHkName = this.pendingChange ? this.getHousekeeperName(this.pendingChange.hkmId) : '';
        return (h(Host, { key: '430ca64c979e089ec39c19fd63ea25c296154249' }, h("section", { key: '8d9fd6db211a481f160c751270d4a037ee4e0e01', class: "mobile-tasks-container" }, h("wa-card", { key: 'f301c6e8ac8ae8f5e26aea24419647ff0aef8788' }, h("ir-tasks-header", { key: 'b7f0e136abf7653699b726cc3c2995edadd0b4c0' })), mobileTasks?.length === 0 && h("p", { key: 'b416ed63109f59b2647c6954992e8ec577e11d35', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'b00a969705cd9850ca56dcb2de19c0fb63debce5' })), h("wa-card", { key: 'b766c4ae2c7375ee09a065d0cf33e7f729b59600', class: "table-container" }, h("ir-tasks-header", { key: '9deb077c8c954fb561b29aa4318a86814ee929c2' }), h("div", { key: '7b85b382f7a97f4a68b3261cd1b68e5940c87197', class: "table--container" }, h("table", { key: 'b890c19552b77a48060efff1552ade0c0ad7050b', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b5e3eba40ee1dba58684b978e832e18504456e8d', class: "table-header" }, h("tr", { key: '5d2ce40f93cca66f70926d8db944891c9e260fd0' }, h("th", { key: 'f4f036489c485eaad71404d89ac94cea1daefef9', class: 'task-row' }, h("wa-checkbox", { key: '6144353de9c75f290f0fd6e4bc2873e6e0cb40f9', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '6efdc3bd6f9b117772258bfc10399b857b38e939', class: "" }, locales.entries.Lcz_Period), h("th", { key: '5abc3bc4ad4bbae20cd51f7a12a1dded3b200a8d', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '594ac31d2eb32f1448a5149d2d90145328b03f37', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '7d254d9a211112f380dc8e79898754e6d0a642a3', class: "th-sort-inner" }, h("span", { key: '45ee9afec8f5ae1431ddd153b7d1f7054ca375ed' }, locales.entries.Lcz_Status), h("svg", { key: '04650155c3a42f003fd304fd932047c428bca4b8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'fed14d7ef8c0f91c0ab4f4121bf21df7bdfcf8d8', d: "m21 16-4 4-4-4" }), h("path", { key: '30055d0e97073a4cf90c157d0026fd09d561fd4a', d: "M17 20V4" }), h("path", { key: '53c2e60366fff9ace714a6b3a88f0352e80536be', d: "m3 8 4-4 4 4" }), h("path", { key: 'd163fb812cea949a3391619522830c8e1b511bb6', d: "M7 4v16" })))), h("th", { key: '03c4c55cd6601724adf6d1f23f28886089583ff7', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'd9b68ab99d14d7425fdb9b33e9a7355c645d67db', class: " text-left" }, "Tasks"), h("th", { key: '85640fc07bf5f58f8bd1eac256980d058b42950e', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'eafafb7e59e52dc9ea72eed8b2f71db9f01e4bd2', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '9a71baf447bd1fa7e185ac9dea0b804e8d028ee8', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '96bd641f07bf8254784df24e286a7f487a172e51', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'b39d1768d26b3d4255430ead401fdcf09e84d9a1', class: "th-sort-inner" }, h("span", { key: 'ed438c2acb2493e26d48863b83ddaade233ac984' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '043a6fa84c22a7eef1b890ebf42327d4a756cc8f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cbe45b2116a0d9bff5011b9aaa0c11cf898cf23a', d: "m21 16-4 4-4-4" }), h("path", { key: '262e9ace0ccc36a6e6ac2f6948668f532300d740', d: "M17 20V4" }), h("path", { key: '8065870a8b1362f78d1bb16f93b6577f24fc7336', d: "m3 8 4-4 4 4" }), h("path", { key: 'b3b99017252a8a802fcf1bee70164090388330d3', d: "M7 4v16" }))))), h("th", { key: 'cdc1b2d1c3df72538a9be5aab0aa5e87a5de0fe6' }))), h("tbody", { key: 'f22f3e0238f7ae4bfd111d2bedc8da0c2e2f08ce' }, tasks.length === 0 && (h("tr", { key: 'a46c2fa3994cf1dcf2c0a2e4b72f55dff28b5682', class: "ir-table-row" }, h("td", { key: 'b5a828e317140ac6ab813b478c12b411e6f172b4', colSpan: 9 }, h("div", { key: '2a0cf68d7afe2f55c01e0d20a3fca3b70214dd8a', class: "table-empty-state" }, h("span", { key: '5c1ed08039b3865672850f952e17ae3cea6277ad' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, '--clickable': isCheckable, 'task-table-row ir-table-row ': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && (h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                } }))), h("td", { class: "task-row " }, task.formatted_date), h("td", { class: "task-row " }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row  text-left" }, task.status.description), h("td", { class: "task-row  text-left" }, task.hint), h("td", { class: "task-row  text-left" }, h("div", { class: "th-sort-inner" }, this.taskBadges(task))), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "small", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
                    e.stopPropagation();
                    const hkmId = Number(e.target.value);
                    this.pendingChange = { task, hkmId };
                    this.dialog.openModal();
                } }, h("wa-option", { value: "0" }, locales.entries.Lcz_Unassigned), housekeepers
                .filter(housekeeper => housekeeper.is_active)
                .map(housekeeper => (h("wa-option", { key: housekeeper.id, value: String(housekeeper.id) }, housekeeper.name)))))), h("td", null, this.isSkippable(task) && (h("ir-custom-button", { onClick: e => {
                    e.stopPropagation();
                }, variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } }, "Skip")))));
        })))), h("div", { key: 'abd75e0a28a9581e40398788e96bcaaae8061c74', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '760f1f133500f5f496579f2c80633c0c7e774162' }))), h("ir-dialog", { key: '6e61b924391752a89b85e26ea3997352153e0a35', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '3e7ff58641338f91bb8905dc65de1c57492ce66d' }, locales.entries.Lcz_Assign, " ", h("strong", { key: '4e62af5d9ab76910c5441eaff11b725475173db1' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '763dbf0af0adb08746bdb605ad33ce2a0553960c' }, pendingHkName), "?"), h("div", { key: 'a3a9172bb7f73415b879b75e1c9773e9b4b2eccb', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '08d58c0225fe58ec676a1665514a81f0e8f61c1a', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '1206374a953ced02227b75cf8767b3ca264f57ec', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
    static get states() {
        return {
            "pendingChange": {},
            "selectRevertKey": {}
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
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
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
