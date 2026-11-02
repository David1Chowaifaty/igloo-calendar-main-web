import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import { HouseKeepingService } from "../../../../services/housekeeping/index";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { t } from "../../../../services/locale/t";
import { formatCount } from "../../../../utils/number";
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
    /**
     * Marks the boundary row/group between today's tasks and future tasks.
     * Only relevant when the list actually contains a date beyond today.
     */
    isEndOfTodayBoundary(currentDate, nextDate) {
        if (!nextDate) {
            return false;
        }
        const isCurrentToday = moment(currentDate, 'YYYY-MM-DD').isSame(moment(), 'date');
        const isNextFuture = moment(nextDate, 'YYYY-MM-DD').isAfter(moment(), 'date');
        return isCurrentToday && isNextFuture;
    }
    taskBadges(task) {
        const config = [
            { code: 'CLN', variant: 'danger', label: t('Lcz_CleaningAbbreviation', { fallback: 'CL' }) },
            { code: 'T1', variant: 'success', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(1)] }) },
            { code: 'T2', variant: 'brand', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(2)] }) },
        ];
        const presentCodes = new Set([task.task_type?.code, ...(task.extra_task?.map(et => et.task_type?.code) ?? [])]);
        return config.map(({ code, variant, label }) => (h("wa-badge", { key: code, variant: variant, appearance: "filled", style: { opacity: presentCodes.has(code) ? '1' : '0' } }, label)));
    }
    getHousekeeperName(hkmId) {
        if (!hkmId) {
            return t('Lcz_Unassigned', { fallback: 'Unassigned' });
        }
        return housekeeping_store?.hk_criteria?.housekeepers?.find(h => h.id === hkmId)?.name ?? t('Lcz_Unassigned', { fallback: 'Unassigned' });
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
                is_to_remove: hkmId === 0,
                assignments: [buildAssignment(task), ...(task.extra_task ?? []).map(buildAssignment)],
            });
            // Update the task locally in the store
            const updatedTasks = hkTasksStore.tasks.map(t => (t.id === task.id ? { ...t, hkm_id: hkmId, housekeeper: hkmId ? this.getHousekeeperName(hkmId) : null } : t));
            updateTasks(updatedTasks);
            this.toast.emit({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
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
        return (h(Host, { key: 'e731347d1417c53a4600a236482f11597354833b' }, h("section", { key: 'd8d05432a99b8b3ca9e42d141457fac307381ea1', class: "mobile-tasks-container" }, h("wa-card", { key: '5566087b2872f145f7d05f211420bedf71bbd010' }, h("ir-tasks-header", { key: '5314ea6f921182567e5d652f4998acc241eeaf03' })), mobileTasks?.length === 0 && h("p", { key: '9283194ca629c6f59d7bc06f248f862ff803718a', class: "empty-msg" }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
            const groups = [];
            for (const task of mobileTasks) {
                const last = groups[groups.length - 1];
                if (last && last.date === task.date) {
                    last.tasks.push(task);
                }
                else {
                    groups.push({ date: task.date, formattedDate: task.formatted_date, tasks: [task] });
                }
            }
            return groups.map((group, groupIndex) => {
                const nextGroup = groups[groupIndex + 1];
                const isEndOfToday = this.isEndOfTodayBoundary(group.date, nextGroup?.date);
                return (h("div", { key: group.date, class: { 'mobile-date-group': true, 'end-of-today-group': isEndOfToday } }, h("p", { class: "mobile-date-label" }, group.formattedDate), group.tasks.map(task => {
                    const isCheckable = this.isCheckable(task);
                    const isSkippable = this.isSkippable(task);
                    return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
                })));
            });
        })(), h("ir-tasks-table-pagination", { key: 'd039e51fb64aa026931703422f7e51dd0a7c2e0e' })), h("wa-card", { key: 'a4d35a8e6ce80038bc2734c7870467fe3825f931', class: "table-container" }, h("ir-tasks-header", { key: '243282dadd97779f348341101321418bc332d36f', class: "tasks__header" }), h("div", { key: 'b779d68c2b8595e39df364ea847deeaddcfd3e5b', class: "table--container" }, h("table", { key: 'f3d5695f41a8b90a5ca4636edaad68e8b22e65e1', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3a6c5fc92d23ac0a98db9ca98b90cd4537710378', class: "table-header" }, h("tr", { key: '650bb59f722358d23e4c395a108a396091a3402a' }, h("th", { key: '8592da9b05fb9fb92af1c1258cb13f87deac6f0b', class: 'task-row' }, h("wa-checkbox", { key: '4c3705b1fd816dfe38e704d07da2139b6a3d72bf', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '4c74eee1a80e4611507be94f4ef3c454cdda8ec3', class: "" }, t('Lcz_Period', { fallback: 'Period' })), h("th", { key: '89cb7cc213f856355ac8b5de3fa73927df244cb7', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '06c06b4e07dba1e12f377a4e48a9437c56d218b4', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '59b51dd161a3bdc895c81bba815334dd61ac4a05', class: "th-sort-inner" }, h("span", { key: 'fbe43bf189e021546dba890941f93affad7bac8e' }, t('Lcz_Status', { fallback: 'Status' })), h("svg", { key: '9b62d4ef5b07403ad2410615cffe936702201640', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3dcc233f11695e8399547f2b323a4caae47821d0', d: "m21 16-4 4-4-4" }), h("path", { key: '87a725526672895bdf10176e60e7a8acb7a090dd', d: "M17 20V4" }), h("path", { key: 'c18d928afc4b0de17083234d98e213bcffd203d0', d: "m3 8 4-4 4 4" }), h("path", { key: '03c3eaabca0e73b75d4c2590cf6c5952315d3a68', d: "M7 4v16" })))), h("th", { key: '4ddc13e99513d94b107b7f59940281bf602b56ee', class: " ir-text-start" }, t('Lcz_Hint', { fallback: 'Hint' })), h("th", { key: 'eafa0af89c8fdef8629b0dff9d42fcdd235f99bd', class: " ir-text-start" }, t('Lcz_Tasks', { fallback: 'Tasks' })), h("th", { key: 'c4e0a1399bbe0dd105c3dbef413fbf45a163a0bf', class: "ir-text-start" }, t('Lcz_Ad', { fallback: 'Ad' })), h("th", { key: '347e6ffb2df65c037a8808779fd4355f5b1e167c', class: "ir-text-start" }, t('Lcz_Ch', { fallback: 'Ch' })), h("th", { key: 'ea9d9bb17ddf85c4e383837dcc13a2a9df88d3d5', class: "ir-text-start" }, t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (h("th", { key: '55ca1f7d67e11e7b1cf64423edf544800b3c5a84', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'f0298a1a9d3397c725657604f02bcef752669455', class: "th-sort-inner" }, h("span", { key: '94364f5c0f4be62c6627cdcc501d3242ca6a25bf' }, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("svg", { key: 'e964d6b1893c31d708e925806f1efa897edaff41', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd0893ed7e6efe6fbeb66de8fd88a7f3380161a43', d: "m21 16-4 4-4-4" }), h("path", { key: 'f8537a92ffd44ebaf516718b68617d7b1e06089b', d: "M17 20V4" }), h("path", { key: 'f071039de452df81b3fa9e18b737394e2845d678', d: "m3 8 4-4 4 4" }), h("path", { key: '099aa2e6b3ffe6c4f0f42fa768648860a8029a88', d: "M7 4v16" }))))), h("th", { key: 'b8b50758d4cddcd30c70c6973283d6466ca9adcf' }))), h("tbody", { key: 'a97131e425aff9c819d3a99918a339e6c621fb97' }, tasks.length === 0 && (h("tr", { key: '8c02b0427539f528c566d8bbeb2871d58a7fa961', class: "ir-table-row" }, h("td", { key: '5b916bc4b162b8c2487951297b36b2e603702f18', colSpan: 9 }, h("div", { key: 'f07ea5100639e9e36b511b347e643700de34a146', class: "table-empty-state" }, h("span", { key: 'c4f90a0928f03df8aef46cfaf5950bb27ad2487b' }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            const isEndOfToday = this.isEndOfTodayBoundary(task.date, tasks[taskIndex + 1]?.date);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: {
                    'selected': isSelected,
                    '--clickable': isCheckable,
                    'end-of-today-row': isEndOfToday,
                    'task-table-row ir-table-row ': true,
                }, key: task.id }, h("td", { class: "task-row " }, isCheckable && (h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                } }))), h("td", { class: "task-row " }, task.formatted_date), h("td", { class: "task-row " }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row  ir-text-start" }, task?.status?.code === 'NC' ? (task?.base_status?.description ?? task.status.description) : task.status.description), h("td", { class: "task-row  ir-text-start" }, task.hint), h("td", { class: "task-row  ir-text-start" }, h("div", { class: "th-sort-inner" }, this.taskBadges(task))), h("td", { class: "task-row ir-text-start" }, formatCount(task.adult)), h("td", { class: "task-row ir-text-start" }, formatCount(task.child)), h("td", { class: "task-row ir-text-start" }, formatCount(task.infant)), haveManyHousekeepers && (h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "s", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
                    e.stopPropagation();
                    const hkmId = Number(e.target.value);
                    this.pendingChange = { task, hkmId };
                    this.dialog.openModal();
                } }, h("wa-option", { value: "0" }, t('Lcz_Unassigned', { fallback: 'Unassigned' })), housekeepers
                .filter(housekeeper => housekeeper.is_active)
                .map(housekeeper => (h("wa-option", { key: housekeeper.id, value: String(housekeeper.id) }, housekeeper.name)))))), h("td", null, this.isSkippable(task) && (h("ir-custom-button", { onClick: e => {
                    e.stopPropagation();
                }, variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } }, t('Lcz_Skip', { fallback: 'Skip' }))))));
        })))), h("div", { key: 'cd2a08cad0eefc24ff9d446834729429256388da', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '38229f5da3e5aa92b251fd6319abf2c533c9c530' }))), h("ir-dialog", { key: '1330fb735301b5f71dae7484d48f7cceca785ab4', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: 'd4ae01d8ad7650fde01189c33c95ba052bb77936' }, t('Lcz_Assign', { fallback: 'Assign' }), " ", h("strong", { key: 'f2680cb0e0b3e7bcb63df6463399ed18519db59a' }, this.pendingChange?.task?.unit?.name), ' ', h("span", { key: '6c3a1b6a33c1f8b94f1a0babc4f925f1a2738a10', class: "hk-dialog__connector" }, t('Lcz_To', { fallback: 'To' })), " ", h("strong", { key: '8607a5fd1f159d7113962284f30ea888cdaf2007' }, pendingHkName), "?"), h("div", { key: 'ad3990ab83a7100ef39197e70170efb730425f47', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '1de9909ea53f6bebec33da53e2e31e25daad573e', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '51d41c7c84cd0b51eed4a2afa994927835ce3c55', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
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
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
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
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
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
                            "id": "src/components/ui/ir-toast/toast.ts::IToast",
                            "referenceLocation": "IToast"
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
