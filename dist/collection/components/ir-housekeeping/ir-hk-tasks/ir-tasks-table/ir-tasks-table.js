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
        return (h(Host, { key: 'ae96a93ff0cfd89fec242e85c9a591c6ea7cc204' }, h("section", { key: '0eeeab4140de7f062d26abd84f8630faefaaf11e', class: "mobile-tasks-container" }, h("wa-card", { key: '7304a8d4b4fecf4ac51a4f527d5ecae91eef55b3' }, h("ir-tasks-header", { key: 'd4ace07ca9b37a277e4b5677a34dd0980cf2174d' })), mobileTasks?.length === 0 && h("p", { key: '2e69709771d13926ff68bd4fc43caef1a4d02bec', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: '0cbacedc6469e4bb38081eb0a86287aaebd7899d' })), h("wa-card", { key: '3d0d364c06e3f4f9ab0955ab0c9b31633df7ef18', class: "table-container" }, h("ir-tasks-header", { key: '73b49c8930777e82e9847d8e3b1b31497c8c50fd' }), h("div", { key: '3c5bb9a9d3a7da1bea489224f51fc42e27a2203e', class: "table--container" }, h("table", { key: '7417c2eb757699cc6e19d544ff79c6c5f63e9f9a', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '546a64b82ef1e0765ce7866c13aafa3c75780d24', class: "table-header" }, h("tr", { key: '9174124a93578ae51489d58dfdcc839116e45d57' }, h("th", { key: 'cb3a52b770164c5230a8e55510bdbb0e0ef09904', class: 'task-row' }, h("wa-checkbox", { key: 'b5214056cb403b70443a123c8c428799cea1d57b', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: 'da860853a27a288bce373a3db273b94ef7c5d72a', class: "" }, locales.entries.Lcz_Period), h("th", { key: '0267f794c342863df4167e816aea59b8aec2a062', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '0d8b8a7ad1263bb4ab54e7bf1cb5ff8c16eaf64c', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '0b8439ed29f3756a6168786809da14862f91ea5f', class: "th-sort-inner" }, h("span", { key: '4fc34b292b8afe2efec93dd02ff30ef57f11f413' }, locales.entries.Lcz_Status), h("svg", { key: '30d84ab70b9f60383ab330a0dca13427b28c3525', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'dfa72b8e0ecdc3127fa66d63608a4f06fba38fe4', d: "m21 16-4 4-4-4" }), h("path", { key: '11c05f5549507865f630f153a1b6661dc88a2a14', d: "M17 20V4" }), h("path", { key: 'de9c3cc576e83ba6d139669022c96ad85293d0df', d: "m3 8 4-4 4 4" }), h("path", { key: '95298415d7109c78f63a598a63f7173b953bf3fa', d: "M7 4v16" })))), h("th", { key: '49433d160ddad67afd250b0aa50e1ea54a1afab9', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'cf80c1fa28a69f4f6a8c477f3701f89043001601', class: " text-left" }, "Tasks"), h("th", { key: '3bbccfd8b90bb1afc0c0e642d696f8cd1512358e', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '4b4eca7bdcf3f65bb9d29f2721c6953f90fdcb7d', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '7598feaf439f30bdbdca11164aa3407ca0357790', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '080908160e4a827078e15252d712261454198a00', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '87d1389f018907b7ac443563ab34f966005e7e74', class: "th-sort-inner" }, h("span", { key: '7293fc4c366a73a920eeed02b14d8888dabef138' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'ba2590d8b84141658977f6c70393b101a8a2b55f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'b8133fb3f5c907627ef433f5113fe6c73878c1d6', d: "m21 16-4 4-4-4" }), h("path", { key: '1fc095072394d713edcbaeb51128dff030cd8c75', d: "M17 20V4" }), h("path", { key: 'f0357becf4739593ccab3490287b649377b88e2b', d: "m3 8 4-4 4 4" }), h("path", { key: 'ac76dfaeaa89cc50bd5d39a369ba5d1352574a87', d: "M7 4v16" }))))), h("th", { key: '33a89c88c48292be6754b309c69106c5e484d1f1' }))), h("tbody", { key: '7c136505c1d0c7f418f47ab502429c126f4e3f76' }, tasks.length === 0 && (h("tr", { key: 'd63d2ca4e3106c05a72c81c600807b659ce4a4f7', class: "ir-table-row" }, h("td", { key: 'b5051b1edc54b7636b6bd60da4072f0f9f0e2f94', colSpan: 9 }, h("div", { key: 'aadaff9eea45592c5fed26e50f0b9e2a82ec4d5c', class: "table-empty-state" }, h("span", { key: '3188998150196a0db5dd9171b4d039016d06670e' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
                } }))), h("td", { class: "task-row " }, task.formatted_date), h("td", { class: "task-row " }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row  text-left" }, task.status.description), h("td", { class: "task-row  text-left" }, task.hint), h("td", { class: "task-row  text-left" }, h("div", { class: "th-sort-inner" }, this.taskBadges(task))), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "s", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
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
        })))), h("div", { key: '14b634923c88719975bb9d570daa05ccb6e17910', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: 'f341e867d2aff263706d36e5ed6a7d53a726362a' }))), h("ir-dialog", { key: '13eddbd0a94553e24484658cba3ebb7bb4155622', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '6732e8878819990381929b6947996ae399ed5385' }, locales.entries.Lcz_Assign, " ", h("strong", { key: '294ee9a0cab446764ae927522e2ce5dbb0f8d608' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: 'ac7a0f2dd0f66b9974b29516b3b3ab31d42fd5c2' }, pendingHkName), "?"), h("div", { key: 'b1f32775944686da035691bb4c495c2cc7e70dbf', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '98d52048ed61fcbbcfe3356611bf8b9562eaa240', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '2518eef350d3f588b7eb01daf58e45119687927a', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
