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
        return (h(Host, { key: 'c7775c9347b90139db10b5474ed054c204e358c0' }, h("section", { key: 'd01956358a57f847c52789c2c2033487a398b178', class: "mobile-tasks-container" }, h("wa-card", { key: '573d3aca76f586034ff725f69ed4955066ce8c3d' }, h("ir-tasks-header", { key: '730f334876b341e96c3af37d02f1ae7d68439bd0' })), mobileTasks?.length === 0 && h("p", { key: 'ad5d9495a4e76b99cf0513be017e0a6e047d8ae7', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), (() => {
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
            return groups.map(group => (h("div", { key: group.date, class: "mobile-date-group" }, h("p", { class: "mobile-date-label" }, group.formattedDate), group.tasks.map(task => {
                const isCheckable = this.isCheckable(task);
                const isSkippable = this.isSkippable(task);
                return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
            }))));
        })(), h("ir-tasks-table-pagination", { key: 'b7acd7e2046e1515c5db48bfe89179aee0f6bd7c' })), h("wa-card", { key: '892eb1ff69544a4f2e8242f05f9bbe7d01575c86', class: "table-container" }, h("ir-tasks-header", { key: '72dc3e6bfebb1d9a3d261a007d63c327e62f9460' }), h("div", { key: '83bcea70f289c05a1861ddd41b86cba296a9a655', class: "table--container" }, h("table", { key: '96e1b000b1a5f3d802e16feea2d10453df6f6db1', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '15cc067bea9702764be7259ff8c131885f3221f6', class: "table-header" }, h("tr", { key: 'cc97d1df3b14afaa6ec062d3cfee5d903fc35f42' }, h("th", { key: 'd9b697f5a55949137f197e83a654194cb11fbb62', class: 'task-row' }, h("wa-checkbox", { key: 'd50bec42364139f6f0163d60ef01a5aada1bedf6', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: 'aaa558078ada9a4d4d53765ea22b76fc25e8d4de', class: "" }, locales.entries.Lcz_Period), h("th", { key: 'e7aee465608036b713f1a8721530b01b65078c4f', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '51654109ed96f367fa9c1460945d6dabdd8c9c37', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '6bf6cb4cf168256c2cc72d74f1e0d70432206fd4', class: "th-sort-inner" }, h("span", { key: 'dd89e9d4e33399edc4ce060c865ede40d98335ae' }, locales.entries.Lcz_Status), h("svg", { key: 'f3fdd4857897068d573ed38690c7a549ff04a293', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'bf21cb3d603e2ee3e00f78ff53e6b02bad7168d7', d: "m21 16-4 4-4-4" }), h("path", { key: '94f171204246d7821e7287388550d03c972a5e3c', d: "M17 20V4" }), h("path", { key: '63b9ba7d8094616a535c0c3b7b94f675360f6059', d: "m3 8 4-4 4 4" }), h("path", { key: '60330d1fe5acca1082f08a6803506287ce390336', d: "M7 4v16" })))), h("th", { key: 'b1e7590fe0a618999a1a7fa82b07eeb49148ffd0', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: '95b4c00295d8ca187cd1fa2aff2210b2bb320bcf', class: " text-left" }, "Tasks"), h("th", { key: '4b2992b37beda512748b2acdfa988d09c319f178', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'a397e198db02b23f97eeeb85da82eb0796dfe74c', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'd1407ba2ad64bd3a8541bc2a7cbeda9bdf5a904c', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'd9c18ab311dc07f99831682269d71e5b6366530d', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '38486c8b3fe4f84d2ad49087bf7aef9f79db603d', class: "th-sort-inner" }, h("span", { key: 'f9382031f5d1277539cd31cbfad0f2511f04c83c' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'ec6972f6a2e75ed7f1cd55d8434f55ec0890ee9c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '6573daabe57328676771277242c7d661e1a8aee2', d: "m21 16-4 4-4-4" }), h("path", { key: '61af157cafbce42e3e117b6853aadbc60e70492d', d: "M17 20V4" }), h("path", { key: 'aec3fdf104d6719a26bd1f5bdf243ff474adf4e5', d: "m3 8 4-4 4 4" }), h("path", { key: 'abc8dd72b15947868b7cba34b2cd55f02a609651', d: "M7 4v16" }))))), h("th", { key: '0e8db778330f61b8d732137aee7d88078a5ae604' }))), h("tbody", { key: 'f331198d1105711c953a5d2e392364a0071f40bd' }, tasks.length === 0 && (h("tr", { key: 'a8865eb969a839d36190d367d3fc94bfb1cd8d75', class: "ir-table-row" }, h("td", { key: '0df8a818a66f0e6ec1e936215ebd50c89ce9c3c4', colSpan: 9 }, h("div", { key: 'f05fb916c33cadf0b45ffc42a6a4d7360ad9d260', class: "table-empty-state" }, h("span", { key: '65a4d47bbd5426f5d6271b8895a54010dd002006' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'cf56f121f72a0bed70b115d4a6132f9b6ec9a08a', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '2552760238a79c9fece8b8fd9baeecc1fd52c54d' }))), h("ir-dialog", { key: '33be9f6109a574a2118f696b2888269b4c9d1dfb', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '735fdbfddd521a2baae4578956d75ca0888e0039' }, locales.entries.Lcz_Assign, " ", h("strong", { key: 'cce7a89e105cfc913df2b63b83786a7687ae3661' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: 'fbb75dc368135dccc54badd91e7069022c734b52' }, pendingHkName), "?"), h("div", { key: 'ca8ce830aeabc188529bf1ac9ad0b61e765f38b8', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '077bead2119786fba49ddaff78ef447df0cf7723', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '2dac42bed8e92104c8f529ed94039f3519e1647b', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
