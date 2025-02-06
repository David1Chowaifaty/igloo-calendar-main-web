import { r as registerInstance, c as createEvent, h } from './index-c553b3dc.js';
import { h as hooks } from './moment-ab846cee.js';

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;height:100%}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyClicked = createEvent(this, "applyClicked", 7);
        this.resetClicked = createEvent(this, "resetClicked", 7);
        this.filters = {
            period: '',
            housekeepers: '',
            cleaning_frequency: '',
            dusty_units: '',
            highlight_check_ins: '',
        };
        this.collapsed = false;
    }
    generateDaysFilter() {
        let list = [{ code: '0', value: 'Do not include' }];
        for (let i = 3; i <= 7; i++) {
            list.push({ code: i.toString(), value: `Cleaned ${i} ago` });
        }
        return list;
    }
    generateCheckinsDaysFilter() {
        let list = [{ code: '0', value: 'No' }];
        for (let i = 2; i <= 10; i++) {
            list.push({ code: i.toString(), value: `Cleaned ${i} ago` });
        }
        return list;
    }
    render() {
        return (h("div", { key: 'fa6bcfd2c6728aeed15267352cf00836b0ccce47', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '6270a5311e59345a198f0a10266372b94a8f1843', class: "d-flex align-items-center", style: { gap: '0.5rem', cursor: 'pointer' } }, h("svg", { key: 'a0e33255c243c6ab098269e60ed023ddb59ec7ff', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'dcf5aee30e4ebc71c103be61b6536531c327836c', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '1e2e49b4f5727e603b40576895b67cb3c09113dd', class: "m-0 p-0 flex-grow-1", onClick: () => (this.collapsed = !this.collapsed), "data-toggle": "collapse", "data-target": `#hkTasksFiltersCollapse`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse" }, "Filters")), h("div", { key: 'd35b7620e9a888252ccd571d6161d49178d838a7', class: "m-0 p-0 ", id: "hkTasksFiltersCollapse" }, h("div", { key: '04b622cd9819af6731785f02d22f17ff09782987', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '9d29492d1fef2e15ef13bab7c82bb754554d0370', class: "pt-1" }, h("p", { key: 'd3d12bcfb53e29a2dcc168985d39b4d59bc5a41a', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'a6bed6090c3f7dc98de73a39bc8e11a8c161b31b', LabelAvailable: false, showFirstOption: false, data: [
                { code: '001', value: 'For today' },
                { code: '002', value: `Until ${hooks().format('DD MMM')}` },
                { code: '002', value: `Until ${hooks().add(10, 'days').format('DD MMM')}` },
            ].map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '4572829e5fc7c8dc1bf757b770dd13425c9028d4' }, h("p", { key: '2c13d08cd5773eda40b3d11a7d37678dc393ed49', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'a44a451bc41f2c34fb06477ccb96293ff8b5340b', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '92a4acb1018543121179fc8454a5a9b03a9ce2c4' }, h("p", { key: 'fef29181b8d718b2086477a96a447e56a2e613ce', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '648b63f4442be2b72bb6d1e237496a9a0f2bc099', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: 'a182189840e53a3c57a63362ed62ad980b6d1bef' }, h("p", { key: '8923773a7e63c559145555471f37cbfe254adf54', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '1404d6c0fe24004eba12258326f28a7d2ee14dee', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: 'ba43dd1f097f42260c68e6e031368f0d8ea13de8', class: "mb-1" }, h("p", { key: 'ff46fb3229b4234a16efcd3aae51f25ad1d8af5e', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'cb0f7fd455cd57ab09233efe94c20bcfd5a16982', LabelAvailable: false, showFirstOption: false, data: this.generateCheckinsDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("div", { key: 'fe802f7f6f7ed64b0f502a1c3296752bbcf7f88a', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '3b314bb5d98e7fe9ca81e06373d43509b04c20e8', text: "Reset", size: "sm", btn_color: "outline" }), h("ir-button", { key: '28dba03f76a6cd59df3d5f2971cb32bf3526620a', text: "Apply", size: "sm" }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        console.log('here');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '2ea47cc6e9f77f77fb1654bd80d173176c7d4597', class: "d-flex align-items-center justify-content-between" }, h("h4", { key: 'f168f401957a6382fc46c02dcb8090dbb0795f22' }, "Housekeeping Tasks"), h("div", { key: 'f57216b570fec18f5c92ebb1ed1fdb4c27e47c64', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: 'a9f96c39cb1cb8daa540075029494471b3702415', size: "sm", btn_color: "outline", text: "Export" }), h("ir-button", { key: 'd5562b5fae720a1d5136a835a65ec200ee14246d', size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.25rem 0.5rem !important}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{max-width:max-content !important;text-align:start}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";
const IrTasksTableStyle0 = irTasksTableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.tasks = [];
        this.selectedIds = [];
        this.showConfirmModal = false;
        this.sortKey = 'date';
        this.sortDirection = 'ASC';
    }
    componentWillLoad() {
        this.sortTasks('date', 'ASC');
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = this.sortDirection;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (this.sortKey === key) {
            newDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        this.sortTasks(key, newDirection);
    }
    /**
     * Helper to sort tasks array in state.
     */
    sortTasks(key, direction) {
        const sorted = [...this.tasks].sort((a, b) => {
            if (a[key] < b[key])
                return direction === 'ASC' ? -1 : 1;
            if (a[key] > b[key])
                return direction === 'ASC' ? 1 : -1;
            return 0;
        });
        this.tasks = sorted;
        this.sortKey = key;
        this.sortDirection = direction;
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(id) {
        if (this.selectedIds.includes(id)) {
            this.selectedIds = this.selectedIds.filter(item => item !== id);
        }
        else {
            this.selectedIds = [...this.selectedIds, id];
            this.animateCleanedButton.emit(null);
        }
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return this.tasks.length > 0 && this.selectedIds.length === this.tasks.length;
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            this.selectedIds = [];
        }
        else {
            this.selectedIds = this.tasks.map(task => task.id);
        }
        console.log('here');
        this.animateCleanedButton.emit(null);
    }
    render() {
        return (h("div", { key: 'd3af61722aee26b7482ff5b1bf3037b4879f525a', class: "card h-100 p-1 m-0 table-responsive" }, h("table", { key: '58d6445764115ac20d8e6ef89b97b7623edc2097', class: "table " }, h("thead", { key: '5518c59a9630884795bc6ad7f78334d873716d1f' }, h("tr", { key: 'f5e77bd24c59718cea5504eb1e1a09901382959a' }, h("th", { key: '5dcc5d071de50e7117c23a211a3b494103c3c50a' }, h("ir-checkbox", { key: 'ea08bad773e187a83ab61fa3c576a27c9be95ada', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '3612c6edc032ed732b39458ef4a981b03f249667' }, "Period"), h("th", { key: 'b34098fff04987fc33d4ed23c32a9b8b5e8cfdf3', style: { cursor: 'pointer' }, onClick: () => this.handleSort('unit') }, "Unit"), h("th", { key: '147e1a4ac89448d4f10ca7f489bc7877fafcfdee', style: { cursor: 'pointer' }, onClick: () => this.handleSort('status') }, "Status"), h("th", { key: '04af4d698eb121562b4397db1b2d146f92d86fc4' }, "Hint"), h("th", { key: '2b29d91ebd3c7bebdc561fd56211fb4cc403bb87' }, "A"), h("th", { key: '3aebfad32457dd15b39d5fda4ea6158383c26ac8' }, "C"), h("th", { key: '4a4f311ff29e4069e24cbe2cc0706100cd0f955d' }, "I"), h("th", { key: 'f41875afcb1fd7b7067df743df883889392ac2aa', style: { cursor: 'pointer', textAlign: 'start' }, onClick: () => this.handleSort('housekeeper') }, "Housekeeper"))), h("tbody", { key: '7be5c2eb73626061cae26433820bda5dc1119ca6' }, this.tasks.map(task => {
            const isSelected = this.selectedIds.includes(task.id);
            console.log(isSelected);
            return (h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.date), h("td", { class: "task-row" }, task.unit), h("td", { class: "task-row" }, task.status), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.a), h("td", { class: "task-row" }, task.c), h("td", { class: "task-row" }, task.i), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, task.housekeeper)));
        })))));
    }
};
IrTasksTable.style = IrTasksTableStyle0;

export { IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table };

//# sourceMappingURL=ir-tasks-filters_3.entry.js.map