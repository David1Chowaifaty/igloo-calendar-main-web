import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import { HouseKeepingService } from "../../../../services/housekeeping.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { t } from "../../../../services/locale/t";
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
            { code: 'CLN', variant: 'danger', label: 'CL' },
            { code: 'T1', variant: 'success', label: 'T1' },
            { code: 'T2', variant: 'brand', label: 'T2' },
        ];
        const presentCodes = new Set([task.task_type?.code, ...(task.extra_task?.map(et => et.task_type?.code) ?? [])]);
        return config.map(({ code, variant, label }) => (h("wa-badge", { key: code, variant: variant, appearance: "filled", style: { opacity: presentCodes.has(code) ? '1' : '0' } }, label)));
    }
    getHousekeeperName(hkmId) {
        if (!hkmId) {
            return t('Lcz_Unassigned');
        }
        return housekeeping_store?.hk_criteria?.housekeepers?.find(h => h.id === hkmId)?.name ?? t('Lcz_Unassigned');
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
        return (h(Host, { key: 'afac57181cc9ee79c63eba356b089da21c72ad6f' }, h("section", { key: '6857aab8b336646936ddf28661e357da34fc04fd', class: "mobile-tasks-container" }, h("wa-card", { key: '47c6b776dea591436249aa8d8a3615f1682588db' }, h("ir-tasks-header", { key: '053e970709bf5ffac1ecda7de7423c857d316846' })), mobileTasks?.length === 0 && h("p", { key: 'a7198b4c8a08e18ee699c391d5ec47c8567416a7', class: "empty-msg" }, t('Lcz_NoTasksFound')), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: '93c026e9fb5defd12e25a349695f257d12dc66d2' })), h("wa-card", { key: '6b869c6f3aecb84fe28cb0e3059120986cfae7d3', class: "table-container" }, h("ir-tasks-header", { key: '4ba2dde545ae61f2ff975b1078833902aa28fed0', class: "tasks__header" }), h("div", { key: '22581408139996c58acbbadd82a0ff64f5b9a59b', class: "table--container" }, h("table", { key: '27393473b39670ee6f43979e38d6334765875939', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '23c9fc581ebd290eaf26a9f0c1b9d9cb83b8519d', class: "table-header" }, h("tr", { key: '0a4448b33abfb254d41a541e8280ded1dc98c196' }, h("th", { key: '9e6ae86a139ee461d724752fd749f74521d26480', class: 'task-row' }, h("wa-checkbox", { key: 'f1626299b1384b78447c7336f6a0bce4f1d8a10e', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '9bb45926c6dee864e746371bbd51388385544a3d', class: "" }, t('Lcz_Period')), h("th", { key: '336f492aca0010bc2665aa400678f53ede4f0888', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t('Lcz_Unit')), h("th", { key: '698a0c76853e7098142b82009d490b3ae3005425', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '4cae0b774ed13c35a714ba4542b0d3bd447c7773', class: "th-sort-inner" }, h("span", { key: '870a0f6b9ea40faf7cffa54c91b8500e21242ed3' }, t('Lcz_Status')), h("svg", { key: '3e453554eab12dd72c7e6e8c934689cda3a2cfd5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a184b5bb2ac7256123ce01b06674b282dec08bc1', d: "m21 16-4 4-4-4" }), h("path", { key: '0ca8a9fb279f160e71d66c52fb2dce96475dfb08', d: "M17 20V4" }), h("path", { key: '718d4740c38b399d402606e7d95513ea56f87c53', d: "m3 8 4-4 4 4" }), h("path", { key: 'e94db8b9040083e609f2c44165ac4fee63777525', d: "M7 4v16" })))), h("th", { key: '93a6eb9d4fc155e5e968783f8116d50a7663c0a5', class: " ir-text-start" }, t('Lcz_Hint')), h("th", { key: 'ca923e1ec4f9cc1159838bbfe7db63de70250662', class: " ir-text-start" }, "Tasks"), h("th", { key: '2362a1627d6ff4e61f1adf049cc2cdad9be6c851', class: "ir-text-start" }, t('Lcz_A'), "d"), h("th", { key: '939fa4511c98dc4cd46c99eb5c1715344069c3ee', class: "ir-text-start" }, t('Lcz_C'), "h"), h("th", { key: '192cb7ade9cbfba240c9b7b3033799c00dc157a6', class: "ir-text-start" }, t('Lcz_I'), "n"), haveManyHousekeepers && (h("th", { key: '5ddbcbd81b546c292b7ae2f0555fe1b76ccad86a', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '096881c282f5d3efeaa7a83a99f54b16912a6212', class: "th-sort-inner" }, h("span", { key: '44fdf58fab4b125e4da6adfb0cf4bed0071d5035' }, t('Lcz_Housekeeper')), h("svg", { key: 'df352e0bc3ebc5c77c1d5ff152170490be489ba7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a1b7a2512444ee9287c588d68bc90d32ddb3b2fc', d: "m21 16-4 4-4-4" }), h("path", { key: '83ffbd68c2cd5a9ddf21b12032bdaa1f4b6fe014', d: "M17 20V4" }), h("path", { key: '5f7f30397c91868e2f2d6bffb2cd905c703e85be', d: "m3 8 4-4 4 4" }), h("path", { key: '60c497fadafd9399ccc3776e95e9a398d3d2c9aa', d: "M7 4v16" }))))), h("th", { key: '5f633630cbf30b84321e9636a8dcb45c9f5edf36' }))), h("tbody", { key: 'f4ebd1e52bbe4c2d814a0e8687d97f3d16dea29b' }, tasks.length === 0 && (h("tr", { key: '193979c75e239489a14f9aedf75479ac945fc74b', class: "ir-table-row" }, h("td", { key: 'ee69f08ea6ec158018f18ddf21c3b69315ebfbd6', colSpan: 9 }, h("div", { key: '5d14ea17e3bcddda0ee80be3427864228676affb', class: "table-empty-state" }, h("span", { key: '8a1a00d5fe2a8f44ba8f9596908dfa91eb447632' }, t('Lcz_NoTasksFound')))))), tasks?.map((task, taskIndex) => {
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
                } }))), h("td", { class: "task-row " }, task.formatted_date), h("td", { class: "task-row " }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row  ir-text-start" }, task?.status?.code === 'NC' ? (task?.base_status?.description ?? task.status.description) : task.status.description), h("td", { class: "task-row  ir-text-start" }, task.hint), h("td", { class: "task-row  ir-text-start" }, h("div", { class: "th-sort-inner" }, this.taskBadges(task))), h("td", { class: "task-row ir-text-start" }, task.adult), h("td", { class: "task-row ir-text-start" }, task.child), h("td", { class: "task-row ir-text-start" }, task.infant), haveManyHousekeepers && (h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "s", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
                    e.stopPropagation();
                    const hkmId = Number(e.target.value);
                    this.pendingChange = { task, hkmId };
                    this.dialog.openModal();
                } }, h("wa-option", { value: "0" }, t('Lcz_Unassigned')), housekeepers
                .filter(housekeeper => housekeeper.is_active)
                .map(housekeeper => (h("wa-option", { key: housekeeper.id, value: String(housekeeper.id) }, housekeeper.name)))))), h("td", null, this.isSkippable(task) && (h("ir-custom-button", { onClick: e => {
                    e.stopPropagation();
                }, variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } }, "Skip")))));
        })))), h("div", { key: '9edf937b3f44f936169bcd446cf17e8e8af05e0f', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: 'dd25593e918c6af544d11b05c3581989eb7a4f60' }))), h("ir-dialog", { key: 'e9df72b41379cb19526013243226860a0433e876', ref: el => (this.dialog = el), label: t('Lcz_Confirmation'), lightDismiss: false }, h("span", { key: 'f1254e0cb1f4cfa5a9e69512240f89927761f271' }, t('Lcz_Assign'), " ", h("strong", { key: '5bc7d25b379f5b812ddf6a86feb1c7ca7b36af9a' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: 'bc542b2a63d7a5fcc6f583610806fec1ea363239' }, pendingHkName), "?"), h("div", { key: '117c802005bbbbf93d1146b2356e07158ad31bbc', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '1a230e4b8f15730350a9e380bf31ea7a3ffda348', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel')), h("ir-custom-button", { key: 'ca3c864ed535b39d6ef66e60baecf96ac19d0927', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t('Lcz_Confirm'))))));
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
