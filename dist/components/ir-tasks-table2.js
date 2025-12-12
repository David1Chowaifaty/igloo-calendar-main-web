import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { d as updateSorting, c as clearSelectedTasks, t as toggleTaskSelection, h as hkTasksStore, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, f as getPaginatedTasks, j as getMobileTasks } from './hk-tasks.store.js';
import { d as defineCustomElement$a } from './ir-button2.js';
import { d as defineCustomElement$9 } from './ir-checkbox2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-pagination2.js';
import { d as defineCustomElement$4 } from './ir-select2.js';
import { d as defineCustomElement$3 } from './ir-tasks-card2.js';
import { d as defineCustomElement$2 } from './ir-tasks-header2.js';
import { d as defineCustomElement$1 } from './ir-tasks-table-pagination2.js';

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-tasks-table{flex:1 1 0%}.table--container.sc-ir-tasks-table{overflow-x:auto}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = /*@__PURE__*/ proxyCustomElement(class IrTasksTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = createEvent(this, "sortingChanged", 7);
        this.skipSelectedTask = createEvent(this, "skipSelectedTask", 7);
    }
    tasks = [];
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
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
        const haveManyHousekeepers = housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '384a0e94a2eef22205711920138e22ecf529bbb5', class: "flex-fill" }, h("section", { key: '3932b00062c7f33f5ddafd75c5d67e0984d136ef', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'e46a913148ac437db1ef60e38f5df8160d430958', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '7efbb2e7ab0117d4b97e8d41fc265b73e61dac31' })), mobileTasks?.length === 0 && h("p", { key: 'd193cb027607c4c98fbceb973b566ff9dedeec94', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '387979152e6758998baa2f93fa721f8b7044ca04' })), h("div", { key: 'dc49189fff528e16b5223663ecb7eda23add5b99', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: 'd3bec5d389f6f586bb58f96c6b385b0406fca24a' }), h("div", { key: 'ec3cb5d29fe5be8d768ba1e486da0435200bcec2', class: 'table-responsive mb-auto' }, h("table", { key: '0797d96b8893e68b5c10c128a44b4477dd783788', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7511efb313740e31c63e5a436e5349d3bdc84804', class: "table-header" }, h("tr", { key: 'f7aced71faaa91b766daf2b3a3a284cbe7725d10' }, h("th", { key: 'ca697f616af2d4377ba58c2d1ff53364898286ec', class: 'task-row' }, h("ir-checkbox", { key: '15790bc064ade3fb484ce994093767174bab69e2', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '9570b62485800434d74f886d7bccbcca92f43208', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'c270323fd50444979f84bbac9fe4cc5a085932d9', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'dcbb33a2594542da3a0b288012facad8e01bcdb6', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '8865930843ee59bae3954b26fd60121d926b0d56', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '08acf4507184136139294d72e4880ba0f4cf644a' }, locales.entries.Lcz_Status), h("svg", { key: 'def743bec8a1124200fe4f30ffe685e83206924b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'acaca0fd047d93d7e02c8c0380a7811b67d51aaf', d: "m21 16-4 4-4-4" }), h("path", { key: '1da19fb9c7dac4b00916df5b08b8c1916dacf4c1', d: "M17 20V4" }), h("path", { key: 'e49457ed57704959eef2bf9ac26568149be6fb15', d: "m3 8 4-4 4 4" }), h("path", { key: 'ab9f65088b79fce2817cb4aa7f5c4bf155a73f64', d: "M7 4v16" })))), h("th", { key: '8e615bd3b9c83d3745e5d193ffd832f05a81c56f', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6b6d9307b6ed1b1ba3bfa4f010c5aff1d335784a', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '349c636e29809585f2e9408dae9f538ac2cf98e9', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '143ad5e85041f04e9429eff739ebdc95c6719001', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '60d78844aea3ab7d2bb80964919a883128ac92df', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'db76968b6813c5651369f4445030eaabbfb49f0a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '8a5142a7fa36b9b999ebaade2cc7d77c0acb9698' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '54f85b91e8dbdf41264f4658799ba357a94b6227', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '535ecc9a720fc2dc785c8f04906714b386799572', d: "m21 16-4 4-4-4" }), h("path", { key: '11d1a6d8ecd6dd27aebe1051a6726701af3bb24c', d: "M17 20V4" }), h("path", { key: 'fda06c15223ca29563465a8ae4055a91ba6d9f92', d: "m3 8 4-4 4 4" }), h("path", { key: 'd1828f150805e2171214bac08358ec179f3ffc24', d: "M7 4v16" }))))), h("th", { key: 'ca84900413e983cd5f8939a65bec789aab0aa503' }))), h("tbody", { key: 'be923e9bdd8de9b736b7384bf87c71272c03df08' }, tasks.length === 0 && (h("tr", { key: '5086d18af64ee1e4d010e98a400f8593f3183e2e', class: "ir-table-row" }, h("td", { key: 'b7a19ee104e6338b8706886d207f90d60f8db545', colSpan: 9, class: "text-left" }, h("div", { key: 'fcbbfb8cf520d4a9e570fd1731eb61168943ee89', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '97a1397bdad8ae579eec6f268f6068cba8ba498b' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, task.housekeeper ?? locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } })))));
        })))), h("div", { key: '2c4c35156820ae85fff5ead221ee9a737115b3c5', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'd3db1dc276f3dff08f843b25fcf74d6bf22162b6' })))));
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
    const components = ["ir-tasks-table", "ir-button", "ir-checkbox", "ir-custom-button", "ir-icons", "ir-input-text", "ir-pagination", "ir-select", "ir-tasks-card", "ir-tasks-header", "ir-tasks-table-pagination"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
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