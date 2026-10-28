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
        return (h(Host, { key: '4cf9fc6e2325c3ebf71886bacbf3f945641ae366' }, h("section", { key: '5530a1756f0b37fc6eb6be22e715e1208303cd1e', class: "mobile-tasks-container" }, h("wa-card", { key: 'ca9d0b39bc47b5b537f3dc773dedc19b2ce4dba7' }, h("ir-tasks-header", { key: '26c5eb0b6abcd40cada1e58ee28d16f8ff5f5d4b' })), mobileTasks?.length === 0 && h("p", { key: 'a6f11ae4021d7c62a4cbbbf37d575f8a943aad51', class: "empty-msg" }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: '1025f918f1c01e49fba54f383d782f981596cdf6' })), h("wa-card", { key: 'a506e6c236fe64d42270244fdc6372f6eb87500b', class: "table-container" }, h("ir-tasks-header", { key: 'd79e97d63910523e576812d210e76bca0e7d20fe', class: "tasks__header" }), h("div", { key: 'c8209f4da520766c2b4c32c4e82d53bb32220f9b', class: "table--container" }, h("table", { key: 'bf96e14071e3d1ba98ed90ee7689db0ad422fafa', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd6637b9df015c0a00d8630017b6ea1b980b5a1f0', class: "table-header" }, h("tr", { key: '5126f76e9f8faa9d778783726d12f2980ed0b9f6' }, h("th", { key: '22788e9ae2f438dab8dcb73c3563277dd5ef91b2', class: 'task-row' }, h("wa-checkbox", { key: 'c81cc7429c87fd7898ab1c0bfffc4db88b5b0d24', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: 'e5535ef0c3d48a5c49205ffc0941958f53813aa5', class: "" }, t('Lcz_Period', { fallback: 'Period' })), h("th", { key: 'f0ffbe2cc64d3455c2f3de6ad4923384b2bb9ed3', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '8cdd5d54d8036d6fea82e2270af941cae9e5f22a', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '92bd35d61a963db947be5fdeb80d2967606d2984', class: "th-sort-inner" }, h("span", { key: '94a97c0fcd802cec7d8e3163b710489959b93d66' }, t('Lcz_Status', { fallback: 'Status' })), h("svg", { key: '40e98d20d3d8faee46b14f58446b13766edb64d2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cfefb06eaa989322bab34708727364abeebb5246', d: "m21 16-4 4-4-4" }), h("path", { key: '6b87c5e895b87317735358a5218b2d553d484a43', d: "M17 20V4" }), h("path", { key: 'c8c2c3b12dcc187bffd6ea87bfbcb669bef37bf8', d: "m3 8 4-4 4 4" }), h("path", { key: '761d93fdb9c2cd93e154d14977be8bba684f2292', d: "M7 4v16" })))), h("th", { key: 'd5fbdec97cd17d418018466a6eb8458ddcc32a19', class: " ir-text-start" }, t('Lcz_Hint', { fallback: 'Hint' })), h("th", { key: 'bfb5f30356fe602d323c32fa2f239143e1e0ac8e', class: " ir-text-start" }, t('Lcz_Tasks', { fallback: 'Tasks' })), h("th", { key: '280687287494bc011a5b41a4093e187956d0b427', class: "ir-text-start" }, t('Lcz_Ad', { fallback: 'Ad' })), h("th", { key: 'fc77c13a6adc35c80d41aa648a22a7a2ff7ee22d', class: "ir-text-start" }, t('Lcz_Ch', { fallback: 'Ch' })), h("th", { key: 'e1ef87cb1b7b8d0e2d7639b39d0e58527bda59e4', class: "ir-text-start" }, t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (h("th", { key: 'f449ce653e12c8a4eed1a62242493a94a8340d9e', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '0c76589c4c4c4baa79a4afa33d873cce575db2b5', class: "th-sort-inner" }, h("span", { key: 'e895cff4d43cea4d9e89a90c3f28a8dc4442a59e' }, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("svg", { key: '937702fb134561e0f40da9099b1c8787fe4c6994', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '2f1a2fb48fd3d46328abddac8b4072bc29170877', d: "m21 16-4 4-4-4" }), h("path", { key: '7a20f4bdb4ae3a5a860d3923cfcee50e82b0b3e3', d: "M17 20V4" }), h("path", { key: 'c26c13fc7852c18e01aedd6ffc1e047484358a8f', d: "m3 8 4-4 4 4" }), h("path", { key: '41d9ae0e371d9e1b507965a5292a1d471b2bad37', d: "M7 4v16" }))))), h("th", { key: '915841beb3b6342f7db2d5259c781a3fd253ac45' }))), h("tbody", { key: '53a5563a3e01fd0cd83ccac3ae60e4e985b7399d' }, tasks.length === 0 && (h("tr", { key: 'be845a3b5511043747c14c8a02a40a20dceb666e', class: "ir-table-row" }, h("td", { key: '775d1963db2fb6cd8cedb45ee028aec1b552fb81', colSpan: 9 }, h("div", { key: '2acdbc77e494a2738649e4ebf0704d1d774f014b', class: "table-empty-state" }, h("span", { key: '1f94560be53a16a40505c15e6668d2da75d26678' }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
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
        })))), h("div", { key: 'd2c5e606532015a94d8fcf34e37ae10a1829a2b2', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '862d515e52296212413640b6a81931af7e188f7d' }))), h("ir-dialog", { key: '3c1f106ed22ceb5cc0c04f974dc4452707653419', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: 'ff7fb5cea934565f2bb9085273e9f1235971346a' }, t('Lcz_Assign', { fallback: 'Assign' }), " ", h("strong", { key: 'daa1cc41f8e180dadeabf02e05f01af477a570ba' }, this.pendingChange?.task?.unit?.name), ' ', h("span", { key: '020445171920df33caeaab75e900a8449d903ceb', class: "hk-dialog__connector" }, t('Lcz_To', { fallback: 'To' })), " ", h("strong", { key: 'c9e6a5a763308640262fe899b640bbf589546243' }, pendingHkName), "?"), h("div", { key: '6a72ae77a54168193b10433cae006fe7370e94d6', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '36817d13f51cdf39eade7b7c30d92055df5074b3', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '357c6d207d972c6dc8d406ed543a551b99cc73f3', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
