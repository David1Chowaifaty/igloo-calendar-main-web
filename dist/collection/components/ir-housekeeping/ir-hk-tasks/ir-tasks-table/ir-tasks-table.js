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
        return (h(Host, { key: '642482c2a8e2096d7a4a60db1ca53310e87d7d97' }, h("section", { key: '7d3151ed1cc04e98dc39161e1801ccfb35426f6a', class: "mobile-tasks-container" }, h("wa-card", { key: 'aede155332fd4e181c26e8b6f2e546b93fde92e3' }, h("ir-tasks-header", { key: '6126efb999a0778e6b604797ef5de0708f866e18' })), mobileTasks?.length === 0 && h("p", { key: '96cf5d3f3e41e1e602344e294fb10965d5bcbf3a', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: '94278e6bf4dc04e929cf587ae1632b9d4c265949' })), h("wa-card", { key: 'dc035006e5e923b1eedf3b8df9fbcf9191b346f4', class: "table-container" }, h("ir-tasks-header", { key: '34d4ffe9f0ad342149ae9ddc14e86bcc5176b721' }), h("div", { key: '46a972c902d2e24578c337f0574bd2011dde3261', class: "table--container" }, h("table", { key: '5053437f40615fc67fdb2ac77ad06abbff606848', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'fa7e333f39bd37606629675dab5d936b89533939', class: "table-header" }, h("tr", { key: '5beeec68c0ec0eb36632c643b8ea5c2cb34822eb' }, h("th", { key: '1b0a89ca93811d72b019b52dbd0e2d3e280c6d81', class: 'task-row' }, h("wa-checkbox", { key: '8325b2cadce0c56c812dc94b9ae21363a713a712', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '1a92979b6f14f13dbbeca533c73b0ebccf0fde4f', class: "" }, locales.entries.Lcz_Period), h("th", { key: 'cae67ef7e68d3ba97e2e03e54562811485b69533', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '1e66df065c44bc24f932360b5ef812cac21bde4e', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: 'f0a8ff9f49c249adba0a113009fd480768bbc02a', class: "th-sort-inner" }, h("span", { key: 'df60f42b40942f018bb9ce15df8e3ad4be1978c3' }, locales.entries.Lcz_Status), h("svg", { key: 'ffbafbd82d18435a91d76680739e31b76bc9c387', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '5c70d86e7b756d614fbbb51559c237b91f82f476', d: "m21 16-4 4-4-4" }), h("path", { key: 'e62d47e7b3a4433f413ab190e2aedc4b8513671b', d: "M17 20V4" }), h("path", { key: 'deeb614e82a82efce7f21e6eb6708928ba8582a7', d: "m3 8 4-4 4 4" }), h("path", { key: '9ba85ab871481e191d102bb139df81958bdb75d0', d: "M7 4v16" })))), h("th", { key: 'afe17eb622938584e47d00de7571bae82ff0fdcb', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: '19b9cd4db71bafbbe7cd93ae1ace2245de7a0456', class: " text-left" }, "Tasks"), h("th", { key: 'd6c2457d49b315a3a4b2880c3be2db133e2fe82c', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '0b1ca3ba91f147be25fe0b636e4c526cccd64e4a', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '1d18ea59cc70a5270d7665790830e608181f65c2', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '0ffee70b6852b335d248a172e2c211a3fab2192a', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '1201872c24b26c83c3f67a0439a52152a13ebd6e', class: "th-sort-inner" }, h("span", { key: 'd3f45f6abc487781fbe814b6e6ae7bdee2fb59d4' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'eab5550a532906de3bbab4e7e141d1aaf8439e39', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '56c842d2c168a02a34c7ea2d822eb09ddc7fbc08', d: "m21 16-4 4-4-4" }), h("path", { key: '2659c9c6d788eb5b5247c6d9654c01d8985c0c17', d: "M17 20V4" }), h("path", { key: '3ccd6f110215e4a5d0d3f748df439d07f498449a', d: "m3 8 4-4 4 4" }), h("path", { key: 'c8dea39b9b85f1c9e2a706cf7209df5f8afedf4f', d: "M7 4v16" }))))), h("th", { key: '8dc043bbf20e650e96a4b7c027379a2c54fd6c61' }))), h("tbody", { key: 'ccbb48067ad583179ec563b4ecffc7f5a911a381' }, tasks.length === 0 && (h("tr", { key: 'd43ada1f9515a3f01627e9323d00c4531b97efcb', class: "ir-table-row" }, h("td", { key: '944b50329fee95a0babfc6f8be0ffb81fe68fd53', colSpan: 9 }, h("div", { key: '523fd35c80514ca6713ec3fefdd15fbf49967c72', class: "table-empty-state" }, h("span", { key: 'f06d6a5a7ea53a8c1a0a4b7c08490a57b69663ee' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '83de5e34730c263428e38238eba8aa0b2178c359', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '316e4c05090ed9c39a9b6db50a256dd73c100e3a' }))), h("ir-dialog", { key: 'eb5f6a8e278a58607838a2a19e159f293635cae0', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'fdf1fada76a6e4bff12f26720022884c23eae7f7' }, locales.entries.Lcz_Assign, " ", h("strong", { key: '471635cd6bb5b6a0e6368344ea5f1cb8411bc18d' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '896784a65c9d15b9c5b2f585b9d036076eea579f' }, pendingHkName), "?"), h("div", { key: '808b2057198bbeb2870e0faf0334bb751176876b', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '062cc3c95157671a90b2d013646d91b19d88ff43', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '8035584d8bcf23749edaf84f3657246ae421cd20', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
