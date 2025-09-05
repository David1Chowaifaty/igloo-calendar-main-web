import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { d as updateSorting, c as clearSelectedTasks, t as toggleTaskSelection, h as hkTasksStore, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, f as getPaginatedTasks, j as getMobileTasks } from './hk-tasks.store.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-checkbox2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-pagination2.js';
import { d as defineCustomElement$4 } from './ir-select2.js';
import { d as defineCustomElement$3 } from './ir-tasks-card2.js';
import { d as defineCustomElement$2 } from './ir-tasks-header2.js';
import { d as defineCustomElement$1 } from './ir-tasks-table-pagination2.js';

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = /*@__PURE__*/ proxyCustomElement(class IrTasksTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = createEvent(this, "sortingChanged", 7);
        this.skipSelectedTask = createEvent(this, "skipSelectedTask", 7);
        this.tasks = [];
    }
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
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
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
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {Task} task - The task to check.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    isCheckable(task) {
        return hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(hooks(), 'days');
    }
    /**
     * Determines if a task is skippable.
     *
     * A task is considered skippable if its date is today and should be In house.
     *
     * @param {Task} task - The task to skip.
     * @returns {boolean} - Returns `true` if the task's date is today and in house, otherwise `false`.
     */
    isSkippable(task) {
        const isTodayTask = hooks().isSame(hooks(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: 'e07e8217af03e0f6ba7ac1aa1b2a7e1dc455c37e', class: "flex-fill" }, h("section", { key: '612fd4dd2a27ae9f0467c929c24a105508ee7f3a', class: "mobile-tasks-container flex-fill" }, h("div", { key: '3662d83386170e60afcd6f7e3df91b487d72b3e5', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'e51424f2c97009967e3458674a20319eacb5348f' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '179e64ba18604d346dbfc2a029d5ba7866c8852e', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '8ec06a219674c63d5c165422c5b261f55d10e5da' })), h("div", { key: '7aec37f00c2a754549fca4c4d087769053336af0', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '973cbcdec9f87d4723e4a49d9cb939508b9f96be' }), h("div", { key: '12ba7cf08b20649ff0385f449cf99e8af31b2c47', class: 'table-responsive mb-auto' }, h("table", { key: '955920ae2dab0fae6184f99e7e549429c77d5a3f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a94d5c9ad46aaffcc38bb089c9b7bdc95d6ef4b5', class: "table-header" }, h("tr", { key: '00a2ba3bec8b26263312e12b5fe1f337c5311b59' }, h("th", { key: '1dc7b56014f67f670172e7b2faa430935d104531', class: 'task-row' }, h("ir-checkbox", { key: 'de15597f4a40feaeaaea2e3221e9aedc935895a2', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'cd12b7cb8dad885921e4bff86a2658cb1e91f208', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'e80a12b4819d0061f2bfe4b2c113cc7982395532', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'a32a29f87d63137c3a2bc915379ccee8c3561066', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '49a560149506bbf4e887800088ee616c27d343bf', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '0384b4f238d6f718941f0dab36573c39bca08f8a' }, locales.entries.Lcz_Status), h("svg", { key: '2c52e039378ac3733aa5d89a4cc589bd600f0181', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '5c76cbb1069f399c95f7cdf1f64127d2fbc97e10', d: "m21 16-4 4-4-4" }), h("path", { key: '91fcdf4fa9f196cd1b76def8bc6e8e0ed79738fa', d: "M17 20V4" }), h("path", { key: 'a58076281ada818605d2a6c3fee5a816f46f4c76', d: "m3 8 4-4 4 4" }), h("path", { key: 'adbfd417604bcd4a0001bfae6f02fe355c691d74', d: "M7 4v16" })))), h("th", { key: '59e310dd65a41dc5488a540683091ab41a637b6a', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '0e450fe3b5fa99a6ab37103039baaeaef2ae49d1', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '827432b4d0f331fde94cf0da5ce6b0908aa4f1c9', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '9b860d567e9a154c2dff33311e152b444739cbd1', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '51d296788225903de882e1a2bb886a98009478b9', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '4c21510fd839b69914f2ee6511fa636a6bf5f97f', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'c915f23b1d8c01479aeabaaf4eb68bada4f1f034' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '4e88c500362d6ee4afe4cbcad046921e5c5c68f6', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'caa68770b2aec755db3c89c31fd1e3fcf36ccd7b', d: "m21 16-4 4-4-4" }), h("path", { key: '08add7f93d9ad5e5317d9e939dcc81d02ac3db36', d: "M17 20V4" }), h("path", { key: 'd5abe9b38819171101cef84d975b12c6e31306c8', d: "m3 8 4-4 4 4" }), h("path", { key: '67aed631033e24fce72939beafde363ca7c14781', d: "M7 4v16" }))))), h("th", { key: 'ed71bacfc17b5f2eb3157daeb641690da0633a41' }))), h("tbody", { key: 'e754181d46ad550b730d56f268916f1562263765' }, tasks.length === 0 && (h("tr", { key: '1daf4dc40dfce5298c91d76e895126ecfff6b239', class: "ir-table-row" }, h("td", { key: 'c6ca0d31a0c780933034745be2283e97b6e322d0', colSpan: 9, class: "text-left" }, h("div", { key: 'cf59301ca9a4795cf4e6e5609456f04fe6974c50', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '8f803f0409446e12e6b8e72c7ec272e484865479' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                        this.skipSelectedTask.emit(task);
                    } })))));
            })))), h("div", { key: 'e953c6c4a442bf2f211d395682c199afae5252e6', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'fdd61533005a4862ef880ea9586bd87b837a3723' })))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
    static get style() { return IrTasksTableStyle0 + IrTasksTableStyle1; }
}, [2, "ir-tasks-table", {
        "tasks": [1040]
    }, [[16, "clearSelectedHkTasks", "handleClearSelectedHkTasks"]], {
        "tasks": ["handleTasksChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-table", "ir-button", "ir-checkbox", "ir-icons", "ir-input-text", "ir-pagination", "ir-select", "ir-tasks-card", "ir-tasks-header", "ir-tasks-table-pagination"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-table2.js.map