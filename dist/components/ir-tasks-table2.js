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
        return (h(Host, { key: '632b2dcbb1fe893719e7242ca9b507fc1330b31e', class: "flex-fill" }, h("section", { key: '75ec3adac6f6d71271d53bcafb69d9cb6faa1f87', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6dea4fc4ba127985af863044775efee6a68889d3', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '35ec7311db16520c669c0e4bc3a8628ca8e263d1' })), mobileTasks?.length === 0 && h("p", { key: '9cf1b7e3ee6d36c17d5daa6245c84e33752ce009', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'a658ec8338a5da377cb2bb3f5701443fed6f5836' })), h("div", { key: '6f6e10c7e2d09082421bb2beca8b901aa7b0ea50', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '6836ff3f82790d6fbbcd450be72555d28d984a32' }), h("div", { key: '551decdbbca1d25a1022b85fe4a9cf0dd872b340', class: 'table-responsive mb-auto' }, h("table", { key: 'b7b0449eeef60d7262f758d2c5713deea6823c85', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '319ceaa7981603f8de13ab5e277740f76a3ddf4b', class: "table-header" }, h("tr", { key: 'a6c4121994a9db01697eac48d1fb3c7d01c8f3bb' }, h("th", { key: 'c79ed7b7e345d086e7512990480133fee500f70d', class: 'task-row' }, h("ir-checkbox", { key: 'f1913b36b3770264f0e2fff36059d30d9592842e', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f46417d5898bb8bf55ea78cb34aebb2dd6c0add1', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '22464923e0b851d1b4f42115fbbb262484e8da64', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '896da1d2ded3a49a6a1a3f3e041b93e15aaaa9ac', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'ebe6b669ead1ce2f8c4fe779a3215e7c3ce3e9d4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3752c79e72e51c57e879a3386f259efbe48d1656' }, locales.entries.Lcz_Status), h("svg", { key: 'b2483c34cdd41aa7ca7f23b877dfd35c247e9728', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '650375506d9e3186fb871a11f4ccb898d6542d52', d: "m21 16-4 4-4-4" }), h("path", { key: '7f87d656bf5f8bcb68667dee2830ae394cda9395', d: "M17 20V4" }), h("path", { key: '115a39f53625ddb513fc1306d75cde7cbf840634', d: "m3 8 4-4 4 4" }), h("path", { key: 'b81afa437d919df15ea0d89978c21fbbea3b3295', d: "M7 4v16" })))), h("th", { key: '38dc277dccdf844897069909e9d96235d36d3909', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'ba1f44d860539c1a323ae6fb7b16d0792c6fda3d', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '3f7b03c5f5e5a7e5546be89f07638520f69fefdb', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'deebb9b054a6f59b4529a8f8ac8838edd6b99b6a', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7026afeca546b04f41f9b3e56671ca507dced1f3', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '75087dbf5a1cbd33a4df685f3cadae983c53b82c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '8f6950dc67e45486d9321ea54897615a439a0630' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6f86fd7a8ecd01d223d8460ee3a4ef4d4e9c023a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cbae2d44ba683546dfb9d43a61fd22954a6aad70', d: "m21 16-4 4-4-4" }), h("path", { key: 'fc0f197eb94927d7fca1b360cd3a14cc04ccac94', d: "M17 20V4" }), h("path", { key: 'f7b711f6f89c4670a04382b57f7be465d9fff87e', d: "m3 8 4-4 4 4" }), h("path", { key: 'ff0c89c9089d63273d2cd1c65d78a7a453a8872e', d: "M7 4v16" }))))), h("th", { key: '55fedebf36d62bf63db95ad579af606bd75f9b02' }))), h("tbody", { key: 'e261b09a5480241bf594b22e1dd5516be40255c8' }, tasks.length === 0 && (h("tr", { key: 'f877b8662b6cfa8df3684712e9ba535948120443', class: "ir-table-row" }, h("td", { key: '4a4a237a591bfebec9d1cc956df2828431f5242e', colSpan: 9, class: "text-left" }, h("div", { key: '106769e6ed159c696ecf98bda8a9e4b852eaebd0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '10eb613a533c0e2ea6a248f24e95eaf8d7126283' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: 'd8e36d4d947a8d27529dd4fd980871867ac2cf4c', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '732750942826ace00484bb6f6f48334c76e23c7e' })))));
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