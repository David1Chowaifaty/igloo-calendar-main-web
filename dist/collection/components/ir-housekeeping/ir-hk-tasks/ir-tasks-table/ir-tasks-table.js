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
                assignment: [buildAssignment(task), ...(task.extra_task ?? []).map(buildAssignment)],
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
        return (h(Host, { key: '789fc15ec36dd4a7e8f9c38132ec3cda52939211' }, h("section", { key: 'd215d59b720c990e67cc78fdf22ff3028b07d589', class: "mobile-tasks-container" }, h("wa-card", { key: 'bf7024cb83ce4b2f60f5ee0165ce92db556fc450' }, h("ir-tasks-header", { key: '5fa18ef089d3ec0a6594096e633a8f237e3a74d2' })), mobileTasks?.length === 0 && h("p", { key: '90535c447b16c2904b28bbb3cf6ed7e78c0e1891', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'e8bf9f3627e7d07a526582f8d63ee66bb412fbba' })), h("wa-card", { key: '992d043476eda61350f18eee3fc105bbb0cef76a', class: "table-container" }, h("ir-tasks-header", { key: '8732d2e5bad8c6f8a9fc8ff7686fa491184edf6e' }), h("div", { key: 'b321e0c8d2f498258c8c17a8741117ca62bec73b', class: "table--container" }, h("table", { key: 'cdf786891abae31b964e917c044ce1e663bf93f3', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '80f055eb7618acce6fc09104a2d7059b9bbbef95', class: "table-header" }, h("tr", { key: 'c559b2fae552cccef6a4d638bd0f85dbe77d1fb6' }, h("th", { key: 'f3a6b4ae086ff7e552d5055394cd06c7e960a9a8', class: 'task-row' }, h("wa-checkbox", { key: '63d262d4b77667657865200e8faef0bf8527e153', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '3398728d6075764f6376374df8e77a106c9f1181', class: "" }, locales.entries.Lcz_Period), h("th", { key: '4a49e5b83fce616521dde739334e146eb52a71ef', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '80869bb6f7434e6aa9f49b6ec824e638446a0fb2', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: 'a06a6c9d5ecbabbcea98e8ed149356c930d144eb', class: "th-sort-inner" }, h("span", { key: 'bc883f34b1e1b5f7232a7720d24673ec5a98f1ce' }, locales.entries.Lcz_Status), h("svg", { key: 'c36158c6358b6a46f765e0b1b132f5a426ae6111', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '286c5af937a9801aab5b13822738085b6aa5d9a3', d: "m21 16-4 4-4-4" }), h("path", { key: '531c335f3c50151c662ee7b976507b01d38e52f4', d: "M17 20V4" }), h("path", { key: 'f390e607397b7857521b74f26f1ce76423030347', d: "m3 8 4-4 4 4" }), h("path", { key: '445292f36e636e2b26abbd2b3fd83a18723439f6', d: "M7 4v16" })))), h("th", { key: '993d66643c32036ff6585e43a7f5a2862b1209fc', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: '8f423f0b73abb116695845211ca5e08366e80dd0', class: " text-left" }, "Tasks"), h("th", { key: '42ef9c899f553aa205c9fc4a4157586c1390a25c', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '9824d126a63a2f346bd82214d3def9af1e66b284', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '89627a9a5bc6d91f9fabf1ee483c000e12681241', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f2cb1cf62b3c141a12a9fda7fbef2eaef7d90a68', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'e98ae7756d8d34f185f59715fc716cadc2c07c90', class: "th-sort-inner" }, h("span", { key: 'a7c8240178a959a8a8ad9fd9d3cdc182c52615a9' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '9563586eb6d9b7059cceaa15aee91d58766a0d10', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e811c0eb50efe80921df1ae65604b1c4c072ce04', d: "m21 16-4 4-4-4" }), h("path", { key: '3ff2f853086255e33b177e311fd60a7a0c720b7d', d: "M17 20V4" }), h("path", { key: '78ffbcecae0075d37c336ae305ab2dafbf0ebd65', d: "m3 8 4-4 4 4" }), h("path", { key: '5ddadfb1661659ee57b65d99f9bb6d572fee6de6', d: "M7 4v16" }))))), h("th", { key: '4738051cf4728ecfcab84fced619f197217f0d4c' }))), h("tbody", { key: '5e575eee1aabae19902b0f44dd28d43f39872711' }, tasks.length === 0 && (h("tr", { key: '9b7a7f7d02862c3c6860e2bad5f601aaa333c980', class: "ir-table-row" }, h("td", { key: '3c47dd6e2f37135cacca35c725efc6b751ce11ee', colSpan: 9 }, h("div", { key: '37f359c41580505b13754ccd316e22c9f97a57b0', class: "table-empty-state" }, h("span", { key: '873e763871b6ba578a61b8d329fe563c4b251cc7' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'aef4dcb2effb03b4f2a46dde5cb8e8f7f87c5bcf', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '3bd18125e651db3d8a264c933d7869f54f54c011' }))), h("ir-dialog", { key: 'be488bd77cfed95f476fd6894d6073312e10cb77', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '9d01a502e3e932a659dce840040a28f5a0d68859' }, locales.entries.Lcz_Assign, " ", h("strong", { key: 'a04cb93d7dd29bb37a33d00154f6fe2260bb9341' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '177aa767a76d2d07490906dea45bc0c08769af84' }, pendingHkName), "?"), h("div", { key: '45921c78666fd2a46c7240334968623533bacf10', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: 'dcb5c53d95b599c641c863d492cd4850ade7ccc1', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'fc9b566adf88e1d0e4619706d510ddc0a942d2ad', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
