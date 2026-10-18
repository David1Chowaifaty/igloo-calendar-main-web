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
        return (h(Host, { key: '0036059d6c29fa1f08b4755ff222398c354019c8' }, h("section", { key: 'efd36cc949fded874990b765812731e9e0f74698', class: "mobile-tasks-container" }, h("wa-card", { key: '7eb776be3d4a7b8c9305f833977bfde1959bad3c' }, h("ir-tasks-header", { key: '5a96c137325ef7bb43f2f71b9ac5f04b505dd358' })), mobileTasks?.length === 0 && h("p", { key: 'fb5188ee7b1685ae2bf8d62850e93d2f9e647eb9', class: "empty-msg" }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: 'd96a2df02407b51e821916b47da3e941250f96b4' })), h("wa-card", { key: '10a4a74bd85ac206fec67498afea0ba79096a2d2', class: "table-container" }, h("ir-tasks-header", { key: 'dd6866b12ec8b054aadb16821f934d696d5be2f8', class: "tasks__header" }), h("div", { key: '608471a99c897fc6330af3b360b6f5a4c194f138', class: "table--container" }, h("table", { key: 'ab72b63f7d23823afdc0f8f8bc0d8a41e4f3f047', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '19e009bd81475ddea7f457dcce3f63ffbfe12da5', class: "table-header" }, h("tr", { key: 'a4e4f785264076ace0d7b52f53674f725ad59d0d' }, h("th", { key: '6f2df3aa6faa02906c2cced7eefc21d046aaa6f9', class: 'task-row' }, h("wa-checkbox", { key: '34b84284cf7d677625fdc57477551bd2d15a93aa', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '183f55b3cd7ac1d124028087fb7edb67ac830790', class: "" }, t('Lcz_Period', { fallback: 'Period' })), h("th", { key: '8141bac805cb1d768afe7d5c5379cdf8cba61fb3', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '0b387ead62969529d9696d79fbb501e48c99c103', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '2b84ce38b83bc64b50cdbe7aeade58cc7657c70c', class: "th-sort-inner" }, h("span", { key: '3f34e8805358a73169ecf914d2e5d509b534dd6d' }, t('Lcz_Status', { fallback: 'Status' })), h("svg", { key: '2fca77ec44e34bb1a41f1c87398c5607138c7c00', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '9a688e5ee75868c9b9545a081f684b20cf788e5d', d: "m21 16-4 4-4-4" }), h("path", { key: '552e7d5de41dad93f65e9ead84be39f1a9b46ef6', d: "M17 20V4" }), h("path", { key: '368b2707291d04845984ca0c40e46ee7b651b4e7', d: "m3 8 4-4 4 4" }), h("path", { key: '9137170ab51ef185c3b7e10dd31fd21fcde1c33a', d: "M7 4v16" })))), h("th", { key: '576677e6757c550b1704114cc359d12b44590bb4', class: " ir-text-start" }, t('Lcz_Hint', { fallback: 'Hint' })), h("th", { key: 'f1a3b5df31479be441dcb196e09d12dd26825a93', class: " ir-text-start" }, t('Lcz_Tasks', { fallback: 'Tasks' })), h("th", { key: 'e84af94a8134347b53e3bd7f9f019c220f6b5ddb', class: "ir-text-start" }, t('Lcz_Ad', { fallback: 'Ad' })), h("th", { key: 'c8b22b7de578305fda78b2aff427aa1a40bea472', class: "ir-text-start" }, t('Lcz_Ch', { fallback: 'Ch' })), h("th", { key: '84e76ca8d35fe52b95b132e9c6d67a4e0c10cba8', class: "ir-text-start" }, t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (h("th", { key: 'f2596bd9cbeb9ca9347c9ec9a64a613d2291f8ed', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '5dfe1a8df7665a4c557be1ffb83e0382540104a9', class: "th-sort-inner" }, h("span", { key: '27276c72b6d32761952d73969d29dcf4a2a8a0ce' }, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("svg", { key: 'cafb33e0f02ec6bd35d7d68e45267f35df7acdb3', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '17ddc9628b7e4a79c07acf24834fd9ae443c122b', d: "m21 16-4 4-4-4" }), h("path", { key: 'a02af5e70836c72489b3559e2989449ea886fc94', d: "M17 20V4" }), h("path", { key: '78925eedf2f22523fda760df81e7d22d68552b10', d: "m3 8 4-4 4 4" }), h("path", { key: '3e5118529abdf131664bfff2467b4a34afa373ee', d: "M7 4v16" }))))), h("th", { key: '5c52b7bfeadef42b318884d8ac187717fc224c9f' }))), h("tbody", { key: 'c07d7c397e1431490dc8eb73f936f3e0ed3b1253' }, tasks.length === 0 && (h("tr", { key: '7becbe4f679914f732a09f2c62ca206ae7a5dd1c', class: "ir-table-row" }, h("td", { key: '5c22128779cf3ed33762d829835371bb3d9943a7', colSpan: 9 }, h("div", { key: '1f68da3d02e5e1c1906e77b892f59b876f9abad9', class: "table-empty-state" }, h("span", { key: '8d6f9bc39c7955b698e44bd5b22f37c94e33977b' }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
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
        })))), h("div", { key: 'aa426c5e57664fa68cdf158eb35db8abf1d19713', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '7050071f9437ea5cf40b017c3077cecda11e1129' }))), h("ir-dialog", { key: '2cedfd102a85563d29592617912b5adcef4f8f18', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '982ebaa0401f0ad7fa6dacfc643e4c7acc122317' }, t('Lcz_Assign', { fallback: 'Assign' }), " ", h("strong", { key: '79c2342fc8930b06d66df398d433854b08aa3cd7' }, this.pendingChange?.task?.unit?.name), ' ', h("span", { key: '876a844a08007ad735b63aba7958042b9f8d1012', class: "hk-dialog__connector" }, t('Lcz_To', { fallback: 'To' })), " ", h("strong", { key: '868a4896af28e4e0618c680b2bde8f31c032effe' }, pendingHkName), "?"), h("div", { key: '8e2ba6f302af1822c3ac48d36c59737eb8531224', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '4a0448b79031efdba83d3897bdf578483bf01a63', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'd127b666de2c2e8c8fa0d586a878eece5229f39c', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
