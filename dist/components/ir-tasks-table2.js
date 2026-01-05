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

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-tasks-table{overflow-x:auto}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}";
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
        return (h(Host, { key: 'f764c9a49ef159a5367571a35f0b40cbd42686fd', class: "flex-fill" }, h("section", { key: '43cc665e5157336851031d21c7613cad6b681891', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'b8969428d3a67a74d787841345fb1b5c6685bff7', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'aa3ed78fac90bcf242076a2060b667e2fbea3962' })), mobileTasks?.length === 0 && h("p", { key: '0d094eb51a6a42955048abbba38696d223bfea4c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'fed1e93eb9fda070ed5314bcc7b243fa1860dd84' })), h("div", { key: '6bf33fdd4efcc8832fcd8c2047668a9e0c6726a2', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '6a78be4c9b55505059e678391bc7d388f2f9ef43' }), h("div", { key: '5b60fe391de16f8d621940c34a7ab263666cf7bc', class: 'table-responsive mb-auto' }, h("table", { key: 'fef201606f7ca2fc50554c39b1a8261ba6edb4ff', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6db3f74c2337198454d683c01fecf380bff928bc', class: "table-header" }, h("tr", { key: 'e8d261f77680009a7c2e2ca29a4b871792b1fb39' }, h("th", { key: '0c187ff9d9087ebe8dc015a3b0e521b5cfb27e72', class: 'task-row' }, h("ir-checkbox", { key: '3507aa27171635caa172c8c98888b93d357d0a8f', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f8a1f7dbf304b66b3a5637a4d8fb2097f9b5d37b', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '6d1dce567f9e2ee9b2cda18c9b4f0fab5a107260', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'a2fa45d514a568aefcdb012f05887a21e45c02eb', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '515ed531a475a49ac403ba1bac7a1b994f770afd', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'fd38abe52d9ff60d477589107647e7f29e6bda5a' }, locales.entries.Lcz_Status), h("svg", { key: '65b99206f5c07334e222f1e87ffce8d0de5a58c7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1a1085d08609c420baabb890b894ee99db3bbf80', d: "m21 16-4 4-4-4" }), h("path", { key: '4be1fc27b8b1b12ea4a4bb88d24be0d91ef62a09', d: "M17 20V4" }), h("path", { key: '5e622816c72e0aa71d1159ccfa8e8707e8011d0c', d: "m3 8 4-4 4 4" }), h("path", { key: '976e2b9a68c65b91f2f8c6260f9c10ce6eb9e0eb', d: "M7 4v16" })))), h("th", { key: '1465076fe88bd591a8012387ea800c3b0dd91733', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '1676c900cf19271e5c98d968ea8ec99d2454e0e1', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '2d9c337e1854e17bc1379e881be9fb1cf5104368', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'e6c0586d42801c34f64fa3e862af3ac28f2d2adf', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '4f94a53766a5fe077ab4402ab6e8ea010c958d3b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'dc6bd5bc1b539554c6c201c038bb2f35f1a4c211', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e49fe6a2c469db3e9ee28cfc37abb6bef6e367e7' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'cfaae1eb46f191c7176ca3330c4222f887a2942a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd989d078e96736111966c660a1007d3fc66b354f', d: "m21 16-4 4-4-4" }), h("path", { key: '8726605e51a8e37f7d09bb069bbf3eb4a4611add', d: "M17 20V4" }), h("path", { key: 'd748e11d3dc9c702598cd206418e7cf54242ccd6', d: "m3 8 4-4 4 4" }), h("path", { key: '94944261aea70a92516ed9145235fec3c3929822', d: "M7 4v16" }))))), h("th", { key: '107986c30b16d1e6ff6b7c7b19a376d367e645a7' }))), h("tbody", { key: '1e3584c8a0aacd21f6006f8bf2ce337e9583be26' }, tasks.length === 0 && (h("tr", { key: 'b61f58b55a924451e542df63a9093a12846f3cff', class: "ir-table-row" }, h("td", { key: '383ca3d3dad82bec8f40390be20ecf2943d049ec', colSpan: 9, class: "text-left" }, h("div", { key: '52aa3ef61190dea3077aec04984158e1b2e6ddb9', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5243c641e4fd4adf07c6a1f1e79c2f11719b0301' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '28f28a0e1185a53446928e2be3712c8e33ecd44c', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '9c299ff818fd83519fade6bc41f04ead8ec3bfd4' })))));
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