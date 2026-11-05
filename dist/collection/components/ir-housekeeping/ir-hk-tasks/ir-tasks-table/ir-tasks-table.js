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
        return (h(Host, { key: '6ed310085e2afa2843cb3e663355456f5a65bb9a' }, h("section", { key: 'c2c8c5a770a93408f1154445c0998beeb34a1946', class: "mobile-tasks-container" }, h("wa-card", { key: 'ee84dc85cf8be81bebb1c71286d79e019976ef76' }, h("ir-tasks-header", { key: 'b5788e2f8b7563f90a8ee5f108c7bc4cc8967c24' })), mobileTasks?.length === 0 && h("p", { key: 'c3354ad3bed0b9e60a11e921e60437b3405d1f3b', class: "empty-msg" }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: '8ec664e17ff435ac1ab881b6441a1b4fe1e5440a' })), h("wa-card", { key: '936a547efd248273e6413db34d5ffc2bf97085a5', class: "table-container" }, h("ir-tasks-header", { key: 'd02774f0633a82b35f66e0fd2c080cb3e6e8f51b', class: "tasks__header" }), h("div", { key: 'e72990446839bc30a59ec2a3eb8aa0f464f0b4ae', class: "table--container" }, h("table", { key: '1317d48b9dab6c5bc1477cca9274832f0c0a5db6', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '27d432ac09b6b0b5b729d1d4508b2d81a215f02a', class: "table-header" }, h("tr", { key: '19d6eabd3cfc80e1ac62297b3a670cfed5c2aaa1' }, h("th", { key: '5f2634760235aec901fcf9d65a6ea87f4edee55b', class: 'task-row' }, h("wa-checkbox", { key: '8b22601e0490fa700d78983eb9f6b764ffb2aea3', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '943559e5ec94f4dfd24906da37d093e31e2f9806', class: "" }, t('Lcz_Period', { fallback: 'Period' })), h("th", { key: 'd11397028cdef36ff2a98d1cf3d445819685530c', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '5918f610b2a756022077daafaf7c5e5e6cb93f4e', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '415446f5044823252b2a480e5572ece825ccb66c', class: "th-sort-inner" }, h("span", { key: '1fdc184c1ea3fd2af57f9b4aa81bd4d8334dc256' }, t('Lcz_Status', { fallback: 'Status' })), h("svg", { key: '56e00770d3d7a1bbc809ca5c1fafa1feb9d5ddd1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'ba0cb6f5a2e3208ab433bf63cd6e5d68936d58f1', d: "m21 16-4 4-4-4" }), h("path", { key: 'fddc7d8dac0fb36abae2a4474b579eafff22b934', d: "M17 20V4" }), h("path", { key: 'a01a0835d7eebc91d4d83514131e3c8094ad46f5', d: "m3 8 4-4 4 4" }), h("path", { key: '1de40a10a3c65ee2dcb991ea6ac6e43160c84cdf', d: "M7 4v16" })))), h("th", { key: '6d7924129550c36dc356fec8745f412cd3bde771', class: " ir-text-start" }, t('Lcz_Hint', { fallback: 'Hint' })), h("th", { key: '27cd5d60b65468a38c9415d7fb4cd92ea60437a6', class: " ir-text-start" }, t('Lcz_Tasks', { fallback: 'Tasks' })), h("th", { key: '85020d2144ddb354d5746bc744972a4cd30cb61e', class: "ir-text-start" }, t('Lcz_Ad', { fallback: 'Ad' })), h("th", { key: '8211870690d91af5809861b2f52b163b7bcef457', class: "ir-text-start" }, t('Lcz_Ch', { fallback: 'Ch' })), h("th", { key: '48a9a3842f2e53390ac9871f7f86387dc0c4e2e3', class: "ir-text-start" }, t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (h("th", { key: 'd7638b000205522ca03cb2d125faee6d9e7ad432', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'd3ea1f1484dde694071144e34d6dc32256aac49c', class: "th-sort-inner" }, h("span", { key: 'aff5baae04249c40b442a14d33cf0c12c8c76cbb' }, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("svg", { key: '1e6798199e43abb0fc76e29eeccdab8a5363e77c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'f81360012abed8fcee2806f1c09f75ebdb895f26', d: "m21 16-4 4-4-4" }), h("path", { key: 'baa06818c8526d72d789ae80fe63010da68f5766', d: "M17 20V4" }), h("path", { key: '58bef5e7cd9ae16d4bd583e8977150393dd4e230', d: "m3 8 4-4 4 4" }), h("path", { key: 'fe80e3efd9903ebebc08229a8220961cb9dafa36', d: "M7 4v16" }))))), h("th", { key: 'f6196241ee7ba5a3852948dfe1a84a17601db2fc' }))), h("tbody", { key: '9fd5e094277036041c87af4c8dff4687014ac04c' }, tasks.length === 0 && (h("tr", { key: '55a55afd18ecac92b23367ef4868eac2f613199a', class: "ir-table-row" }, h("td", { key: '0e83d1a01694341854b29f56e4cbf637c9e6abd4', colSpan: 9 }, h("div", { key: '9b9808ce312faf552b68018f51f9ea9f274259f0', class: "table-empty-state" }, h("span", { key: 'c2ff914331e6b88facc57bc0848925b775f973c3' }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
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
        })))), h("div", { key: '13aec5979c51c725688741ce518613056213685b', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '77daea036e40ab4d09c5947ce59f54f9bc71e5a9' }))), h("ir-dialog", { key: 'bee44053d4847954a9e1dde62f513e18f83fd346', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '47ab1005c0ac51dbae5eb3e951071d7795540a71' }, t('Lcz_Assign', { fallback: 'Assign' }), " ", h("strong", { key: '151251eb2ffaa234d2f4c95bc2aca648aa41af78' }, this.pendingChange?.task?.unit?.name), ' ', h("span", { key: '94777f0068888c36b203a2451efd1dcae9882a39', class: "hk-dialog__connector" }, t('Lcz_To', { fallback: 'To' })), " ", h("strong", { key: '181e144e1cf9366b91b2b50841bf47c06e3e9f64' }, pendingHkName), "?"), h("div", { key: 'b59c8c499ee20014433d6b31868313d5247742d6', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: 'dd51db0cb4faffabc6888671382175e5c6e3dc7d', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '6819c520574616267f15f66b465cf2a3766f3a03', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
