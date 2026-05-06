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
        return (h(Host, { key: 'af40eb975d84ad87dafdcf1f9b232f0f550d3d6d' }, h("section", { key: '3d0b041c9ff36f19e1a9151f74de54d87dea73f0', class: "mobile-tasks-container" }, h("wa-card", { key: '1def3f219db94a1f3d3c9091a1d14ee57ed8cc08' }, h("ir-tasks-header", { key: '41a74facab9119eb8726e947bbc6b07a6f2f8343' })), mobileTasks?.length === 0 && h("p", { key: '8f23d7bc4ad237393dc49848dad8141b96e19f66', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: 'ecaae61b6d2d7d71cb7fd575776c74c39c4f60ec' })), h("wa-card", { key: '62721a15690dfafc6e30a7876e7c5f6c34c050bb', class: "table-container" }, h("ir-tasks-header", { key: 'c3dce4b1ef336d6610a0617f8081ba26837fac1d' }), h("div", { key: '04de92f517caac5390d7f7a2e1a9d9315c0ae89b', class: "table--container" }, h("table", { key: 'b3caa940690ebaaf4397318e055ce57b7f8ffb53', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f91a04ee290a5e3d9b55cac522926b0724e8bde8', class: "table-header" }, h("tr", { key: 'fbbe342cb3f8b4c5d4c737278234fb9f599d2b96' }, h("th", { key: '82f787db2999d93ebbc9a2d273b8c3cc44c037ed', class: 'task-row' }, h("wa-checkbox", { key: '5fbddafc12ae2bd04a63475b39c327fb5bcfbbf1', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: 'd0a9d687f1dd9d179ea9d161a3e60961ef623f20', class: "" }, locales.entries.Lcz_Period), h("th", { key: '10d4f231ddcb0d09f97f8a6b2f4e5e1010930c16', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '772c40a9ca16af237b5c056a0c2038f829a4b3d1', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '90347087f5063d44a92d9ed81317cd124d08c268', class: "th-sort-inner" }, h("span", { key: 'ec03282cccf055049b316edc8f3b5105dbd20d3c' }, locales.entries.Lcz_Status), h("svg", { key: '7106d205e377b397a8192b8176186c83155f34e1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '868d66e35b9bb89f7f9df9c3ce941f37e4d21861', d: "m21 16-4 4-4-4" }), h("path", { key: 'cb6c0dfd0f5e0c0a43f3463756a1451700f0bdf3', d: "M17 20V4" }), h("path", { key: '89804b15d4006ce703058993c3cc519bd08d5d11', d: "m3 8 4-4 4 4" }), h("path", { key: 'f9b4f801c6899a4cc903c2f648f4ae0ce6237da7', d: "M7 4v16" })))), h("th", { key: '8ba931a0622f5985045010e8ecf35edb6c663854', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'd489eb04edcde7fd0f220155faf888d83ae45f1f', class: " text-left" }, "Tasks"), h("th", { key: 'b146b398f3f4bc7d891916646aff7133f635b1a8', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '32a6f7dde0dea4036404ad97d09559cb34f589ab', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '5cf5a3a9444e000a3269116118113fc55113d127', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '8554b568d6c260be2bc1b9f7bccf3927eda09f57', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '29231637be80bb3183272ffca0ded2e9c693f4cd', class: "th-sort-inner" }, h("span", { key: '0744b4e06e610948423ff9402dbc0020c918a3c3' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6db89c28afbe4bd635976308bb99a4367f38ae43', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '95d5475d5d93f07231b5f64aa2b4b1f3b8b600b0', d: "m21 16-4 4-4-4" }), h("path", { key: 'd347c01f1b9be03416c31310925e8e072af02ecb', d: "M17 20V4" }), h("path", { key: 'c4b06ed9670d1066c150abadfb56ae14b07cd08a', d: "m3 8 4-4 4 4" }), h("path", { key: '1be11486a48d396a1055f679de1809523ff7dda8', d: "M7 4v16" }))))), h("th", { key: '14737bfa6e8d845f0b8310626b8574b41a8adaa5' }))), h("tbody", { key: '38e87d072d53f4b852eb11a0a687ee2842488b31' }, tasks.length === 0 && (h("tr", { key: '6ac6e48b1353be9903984bb63c81c9784b8e3638', class: "ir-table-row" }, h("td", { key: '876ec5b85c4dde47da6f04cfa7f5f5488334f8b6', colSpan: 9 }, h("div", { key: 'c49e4a266d52d85c410b4a8c4f395843ebbbf556', class: "table-empty-state" }, h("span", { key: 'da0afcf398417f8c3c7d1982485d979aa17a2301' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'be49e6104b817208bcfa2b3375d9376c15fddddf', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: 'f62c061a01c9eba4c34fb772da758f6314b61ff8' }))), h("ir-dialog", { key: 'f7c16e2573f066bc050a5518b4a032f7b05fc5f5', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'f56560ea2ce08653581956320d6bac7272dfb840' }, locales.entries.Lcz_Assign, " ", h("strong", { key: 'f418fb54ad29beb474f224fe291287908de0e555' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '2a854390404ceffa712fb0d83051746c952b7590' }, pendingHkName), "?"), h("div", { key: '7e80bf095384eaae3ee7812e52250189a91b19f9', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '8c438fc7491fcf4bbe52c8902cc4615a15c8a1a2', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '5c9590972a205747e502c5a004c08207dff7af30', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
