import { Host, h } from "@stencil/core";
import moment from "moment";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import { HouseKeepingService } from "../../../../services/housekeeping.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { hkTasksStore, toggleTaskSelection, selectAllTasks, clearSelectedTasks, getCheckableTasks, isAllTasksSelected, updateSorting, getPaginatedTasks, getMobileTasks, updateTasks, } from "../../../../stores/hk-tasks.store";
import calendar_data from "../../../../stores/calendar-data";
export class IrTasksTable {
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
        this.animateCleanedButton.emit(null);
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
            await this.houseKeepingService.overrideHKTaskOwnership({
                property_id: calendar_data.property.id,
                assignment: {
                    HK_TASK_ASSIGNMENT_ID: Number(task.id),
                    PR_ID: task.unit.id,
                    DATE: task.date,
                    HK_TASK_TYPE_CODE: task.hk_task_type_code,
                    HKM_ID: hkmId,
                },
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
        return (h(Host, { key: 'e54a0888b240a0e05ee1de065382e667dabaa41a' }, h("section", { key: '32d76bad994b474801acd6d19807646bb182cf49', class: "mobile-tasks-container" }, h("wa-card", { key: 'd5d1a4cfbccc27fe49ab1f079d11abab8e4ca09e' }, h("ir-tasks-header", { key: 'c0f692efaf3746bf030d27fd2159a47db69ee557' })), mobileTasks?.length === 0 && h("p", { key: 'aa369ea6c5c2460687cce2742ff739d6eaf4faa8', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'e66d9389a7ec3d33afee282f5815dbd9917d6baf' })), h("wa-card", { key: 'b558a42616b8a34fa45666d1271b3ad0ce6936bc', class: "table-container" }, h("ir-tasks-header", { key: '990775b377a905e51375cf2ef9053e8293c53641' }), h("div", { key: '88a2d9854f9a1d73c494319dfc6bbaf74f54cee8', class: "table--container" }, h("table", { key: '895799d96fc21cfeed903ff92b69f2c55c4c399f', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'fe48519d545e1700ccae057b6449f6e8ab4cc985', class: "table-header" }, h("tr", { key: '2e3af5222b1d858ace9188a0033cdf83f575e8a6' }, h("th", { key: '9ac77e01cfccaf50061564d18a2a6ad3aac4c9f6', class: 'task-row' }, h("wa-checkbox", { key: '549e8270d24bb3d7221da2f09b3e7fdb1711a5b8', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: 'a22631e62a172cb9194a4f3d75c4b8bd6b69c42a', class: "" }, locales.entries.Lcz_Period), h("th", { key: '2c4ee2a0137970202bc36ee9f7d868dd792420ac', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '3caccd9f77b8dff1fb25ad7f44a1168b179da34a', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '5f1d1fd5ec56271899301d1368f01fe4c97e4824', class: "th-sort-inner" }, h("span", { key: '29de8728128b351c6e630e3956b526ec661d3381' }, locales.entries.Lcz_Status), h("svg", { key: '2dd94a629ffdc0aa422407aac86d09edee23ebfe', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'dbdcd8a385d4940991e35ae3f75cf550e9791c1c', d: "m21 16-4 4-4-4" }), h("path", { key: 'c104e8df3f991b05ad8dfc3ca0b854e6c01a505d', d: "M17 20V4" }), h("path", { key: '50c1794407ac37a6f92817e4c7d62e9b44821ff0', d: "m3 8 4-4 4 4" }), h("path", { key: 'dd7eff1335f82bf082420fc4d5043c69a67a566c', d: "M7 4v16" })))), h("th", { key: 'ba41c289dc91ab21bcb1ec06e417ae17e5a21637', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'a29658690b9c3fe511733b3fde3b43df928886ed', class: " text-left" }, "Tasks"), h("th", { key: 'd843b90cd668eb565a5e04eaa335fbf7f2597884', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'fab781016ce1f552694630b516fedf5c788a65f4', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '603e7fab6980fce8791e9cccbcd995d1efd8f380', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'c8f34d9c3d0a7aee19c95a162788a11a16b51ef6', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '6766764bac5c6fe8f0de01b3c44ab3ad2cec42db', class: "th-sort-inner" }, h("span", { key: '5a1977189dfef72dc28a9cd522824865f44f7dfb' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'b8111c7ed28e2bd9ca928bf62e9e6b5616965b32', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cd34647236deb560cf9f75994b401bd744ad8d48', d: "m21 16-4 4-4-4" }), h("path", { key: '493e6b0b454a54a657c699e81eb8e508e6143b8c', d: "M17 20V4" }), h("path", { key: '13cf98ad8b97134f07ed017a8f177e695980cd50', d: "m3 8 4-4 4 4" }), h("path", { key: '298114ddb442deaa774a12c9c67ce1e709be4c92', d: "M7 4v16" }))))), h("th", { key: '532fa18cd9755b758068e97d0f8d94f28455bee3' }))), h("tbody", { key: '80aab7d2edc0d56a9b2c8130a973c6ed9995986d' }, tasks.length === 0 && (h("tr", { key: '58098f6029a45bba3a6f9d948e032122be93f255', class: "ir-table-row" }, h("td", { key: 'c76b304febe3842782c6622c864c3cb5928ca1a1', colSpan: 9 }, h("div", { key: '4ff54999c0420bd1ec9b688c5775b07c702b0cc7', class: "table-empty-state" }, h("span", { key: '062a0ecc8b7a7c8412993cd918d74495bf6857e9' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'c88e3ddaee3cfece85d980a436d53e7eec900a0c', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '61f47f49c04cdda40c884d28a3d5fc3f1d35f5d9' }))), h("ir-dialog", { key: 'cd7bb115f0b146e66ba91933aef9d95067aa6c92', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '62d7c1fa428e6cd2a769617876d3043fafbebdd3' }, locales.entries.Lcz_Assign, " ", h("strong", { key: '46b09abe2a6aa20de082d09617a2098a7df99fbb' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '165761b22700348b9ade3a3779817980ad1182a1' }, pendingHkName), "?"), h("div", { key: '05c4b069e5493a93e8bd4bd17b1a4e6a389c2057', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '8d22b6b787d3359f472c429f595b6c69fb267b10', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '404b46ef446289b9025c062d98b4c038ac53642a', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
