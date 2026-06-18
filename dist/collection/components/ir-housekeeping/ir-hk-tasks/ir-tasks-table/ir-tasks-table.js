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
        return (h(Host, { key: '42e0ad47bb5c5d1e0b6b1a9bf5f608211b775ee2' }, h("section", { key: '443a4394fa5cfe943e72b4740188f15b3489f698', class: "mobile-tasks-container" }, h("wa-card", { key: 'fa78d6da4ffc66d0e2a3029ba598b6cc31607c99' }, h("ir-tasks-header", { key: '0ad7ce5f64320a9eb5f8099bb298cfbcd95476c7' })), mobileTasks?.length === 0 && h("p", { key: '7f1a93fc57f5ddeadc0da46915e137d08e28a4ac', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: 'dffd95bf075187f0a88ce05c2bf7cd0a6a3fb917' })), h("wa-card", { key: '77bf06f5eb002f98e43a9ba0ccef6067d6526de8', class: "table-container" }, h("ir-tasks-header", { key: 'd64dede58312018825c33a521ca6ede69baa4c75' }), h("div", { key: '96e7cf74515ec3388f8b10bf9a443b5a12569ef1', class: "table--container" }, h("table", { key: 'e48bff63b25be4f042b95ee28c5160a849e41623', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ed93a67f58bac3db81f2df7197a0a8d67b3f5f46', class: "table-header" }, h("tr", { key: 'f58252dcd7c6d5289da4d938e164b48b8139df91' }, h("th", { key: '119848a1b6b531609f7f5cda74397e28f6fb5ca8', class: 'task-row' }, h("wa-checkbox", { key: 'a2ff4f7c041ebc0b15d5d1fef566fffc14b4d8a3', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '7a7ddf72f195c8bb44fd367a50649d3531c4b47e', class: "" }, locales.entries.Lcz_Period), h("th", { key: 'aff05d09ae608787a85e0e95190649c5250f6e06', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'a3e239c3d953719de9cc4f6a176674d3dae3cc5e', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: 'fc1233b2a68ceb2f448e860f9a904b7a9a19d2e5', class: "th-sort-inner" }, h("span", { key: 'dcafa93dbc1c2f7020bc20eb03041bed80a43759' }, locales.entries.Lcz_Status), h("svg", { key: 'd06ba513f57fb2d1ec1c3fff75f7ab027eaeffaa', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '9dccf5de01fe77956d2811c84726010c6ebbbe87', d: "m21 16-4 4-4-4" }), h("path", { key: 'a2ed9d69019fd476d82e65701d3b4452996bc725', d: "M17 20V4" }), h("path", { key: '3edf2e90e21234ca9c57fb09011d2d12c80b47f5', d: "m3 8 4-4 4 4" }), h("path", { key: '3a1fb46dccfc1a0faa8f8317739370104ba4a188', d: "M7 4v16" })))), h("th", { key: 'ba7fca40a568023bd3b89c0029d899d39b1b5866', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: '96ceb8d3375e4f05c95cd7811751b28898f96693', class: " text-left" }, "Tasks"), h("th", { key: 'c32abbf7c468fa97a1fd22bef970bed3216c5849', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '5e54efeec67cce509fd9676263e2c8ccf449e980', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '979c21aa96c44b9c3ff8640d70b0707a00533ca1', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '02ab437f44d578c9f0bda31b97a09b126144dc3a', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'ea7771d8662a5959130752812883579b3447c7e1', class: "th-sort-inner" }, h("span", { key: 'a010bac98d0ec97ffcbd49e7e7ee6b6bfa6ea6a4' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'd0616d271d0da0d77f36dcb28274dff08fdb44e5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1cd10f9e4363c34559c91b4a2cf8bb1861b9ee06', d: "m21 16-4 4-4-4" }), h("path", { key: '65ad1d1d5a0b5350865c06682cb53f8263d30702', d: "M17 20V4" }), h("path", { key: 'c2e2ae809bb876f01e4b84b6589bd667891327b3', d: "m3 8 4-4 4 4" }), h("path", { key: '9dcd4666ddf612a25698a41185cf534aa23c7cab', d: "M7 4v16" }))))), h("th", { key: 'db559ce300b107d1b9a9d1e4310bf7f4df139ed2' }))), h("tbody", { key: 'ab954e7d35841f6409ab196afb37a3bda06d9684' }, tasks.length === 0 && (h("tr", { key: 'dfc16ed66622607d65dcc154ab11a848abad01e4', class: "ir-table-row" }, h("td", { key: 'c8121b9d88edecaa1a0b1df098005e39495d8587', colSpan: 9 }, h("div", { key: '4fa815f368c08b8e8bb3b2772f17beee2d2c00c7', class: "table-empty-state" }, h("span", { key: '19d04949d78e6954545edb14411761517fcff5c0' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '87d1b710b7f7cebbcf11329da401cae86269b617', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: 'cf63adbf15f3dddf57a830d4b5fd976318ca5cb0' }))), h("ir-dialog", { key: 'c7f088c680eca654c282d571d32eaeada01b00e3', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '1b4d117e97045a00bf27439036cd344ee9eb313b' }, locales.entries.Lcz_Assign, " ", h("strong", { key: 'a110f450ae8694ddfb405e04d7bd8cf1525ee907' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '6e6050f4c4aac1bb21802cba5305ab452b059836' }, pendingHkName), "?"), h("div", { key: '1736e0326b6709fc7122aa8dab89d790540f96b3', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: 'f9e3f7926fd194ca9962e1e4f9d9a7c9bdaba77e', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '3774605de5452241cd07b806f7a389904a40d24d', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
