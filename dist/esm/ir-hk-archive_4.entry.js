import { r as registerInstance, h, H as Host, c as createEvent } from './index-1d2aa5ad.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-f355e1d9.js';
import { c as calendar_data } from './calendar-data-ce538d8c.js';
import { i as isRequestPending } from './ir-interceptor.store-1b562ec6.js';
import { l as locales } from './locales.store-95a78d6b.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import './index-e42e9935.js';
import './axios-aa1335b8.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filters = {
            from_date: hooks().add(-90, 'days').format('YYYY-MM-DD'),
            to_date: hooks().format('YYYY-MM-DD'),
            filtered_by_hkm: [],
            filtered_by_unit: [],
        };
        this.data = [];
        this.isLoading = null;
        this.houseKeepingService = new HouseKeepingService();
        this.units = [];
    }
    componentWillLoad() {
        this.initializeData();
        this.setUpUnits();
    }
    setUpUnits() {
        const units = [];
        calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    async initializeData() {
        await this.getArchivedTasks();
    }
    async getArchivedTasks() {
        var _a;
        const res = await this.houseKeepingService.getArchivedHKTasks(Object.assign({ property_id: Number(this.propertyId) }, this.filters));
        this.data = (_a = [...(res || [])]) === null || _a === void 0 ? void 0 : _a.map(t => (Object.assign(Object.assign({}, t), { id: v4() })));
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        this.updateFilters({
            from_date: start.format('YYYY-MM-DD'),
            to_date: end.format('YYYY-MM-DD'),
        });
    }
    updateFilters(props) {
        this.filters = Object.assign(Object.assign({}, this.filters), props);
    }
    async searchArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'search';
            await this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async exportArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'excel';
            this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: 'f88dc0c2af973e9eb0ec4b4f509a560faacc70a0' }, h("ir-title", { key: 'ec47e965acd4d66390d414bcb98181e643161b80', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '81d2537dedb0d1f4f0c8335477f09b729471c64f', class: "px-1" }, h("div", { key: '1fcbd65f5b0ad9119322c19ebde7bb0eafcd6dd5', class: "d-flex" }, h("ir-select", { key: '66aa8ca66f47db5603026de3ad7f26bd334f68c0', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...(_a = this.units) === null || _a === void 0 ? void 0 : _a.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), h("ir-select", { key: '47aca3b3b8a8430f1db239d37e784a8b5de8eac1', class: "ml-1 w-100", selectedValue: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.filtered_by_hkm) === null || _c === void 0 ? void 0 : _c.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.filtered_by_hkm[0]) === null || _e === void 0 ? void 0 : _e.toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } })), h("div", { key: 'a7029408ef114d09e2d1649d50bfeca1fad80b4b', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '796b445ab9df3bd471c36895138a41ff1bda8efe', class: "mr-1", dateLabel: locales.entries.Lcz_Dates, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.filters.from_date,
                toDate: this.filters.to_date,
            } }), h("ir-button", { key: '4f96739dbd534976fec2706b41b726469a7cb3ac', title: (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '781965bd24ec340890d435da636403584e24901f', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), ((_j = this.data) === null || _j === void 0 ? void 0 : _j.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, "No Results Found")) : (h("table", { class: "mt-2" }, h("thead", null, h("th", { class: "sr-only" }, "period"), h("th", { class: "sr-only" }, "housekeeper name"), h("th", { class: "sr-only" }, "unit"), h("th", { class: "sr-only" }, "booking number")), h("tbody", null, (_k = this.data) === null || _k === void 0 ? void 0 : _k.map(d => (h("tr", { key: d.id }, h("td", { class: "pr-2" }, d.date), h("td", { class: "px-2" }, d.house_keeper), h("td", { class: "px-2" }, d.unit), h("td", { class: "px-2" }, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : ('N/A')))))))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.filters = {
            cleaning_periods: {
                code: '',
            },
            housekeepers: '000',
            cleaning_frequencies: { code: '' },
            dusty_units: { code: '' },
            highlight_check_ins: { code: '' },
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        var _a, _b, _c, _d, _e;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: { ids: (_b = housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => h.id) },
            cleaning_frequencies: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_frequencies[0],
            dusty_units: (_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.dusty_periods[0],
            highlight_check_ins: (_e = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.highlight_checkin_options[0],
        };
        this.filters = Object.assign(Object.assign({}, this.baseFilters), { housekeepers: '000' });
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: {
                ids: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers.ids : [Number(this.filters.housekeepers)],
            } }));
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign(Object.assign({}, this.baseFilters), { housekeepers: '000' });
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: {
                ids: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers.ids : [Number(this.filters.housekeepers)],
            } }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return (h("div", { key: '0ec313724c0e62ea7a3d96e7019bcedeed15afb9', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '0117be01e984859e80138b77059627b84c292ecf', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '8af4853a39ec66255d1530d70886df1cd25a64ab', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '4a28078d74691942d42df46a717ca3f529a61b72', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7c690e4480236e523af962b00cb1d7146bebd116', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '93edd37e61bf45d9a98389416d636c18e53408ce', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '1ae51cef2cb767f3e4560aa2d00c2479fcc9ff24', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '8d19ad7af48f1203c1e15bc712f7c7573a1ec2a4', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'dc35675a83a9c33e531fdc433a8a88e82f5d7325', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'c4879b1de11434c421b0351c6308078c27cd1350', class: "pt-1" }, h("p", { key: '48e1694eb79c8e32e132e74be9dbf109b2b21e4f', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'ba4ddb3d5599135a2adc5598b7fa1e095d52712d', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: '32b9ac3e46318181cd55b3e4cdd169c77aa5c594' }, h("p", { key: '639a791d9166070b8bef3ddab5de700ca2ee9ea7', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '8562ea39145cec38cae70ebc0fde622657d213be', testId: "housekeepers", selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_e = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                // if (e.detail === '000') {
                //   this.updateFilter({ housekeepers: { ids: this.baseFilters?.housekeepers?.ids } });
                // } else {
                //   this.updateFilter({ housekeepers: { ids: [e.detail] } });
                // }
                this.updateFilter({ housekeepers: e.detail });
            } })), h("fieldset", { key: '3c5fe437940c618b60fafb4b33fd66530207cfa4' }, h("p", { key: '0c11529ca2dbb44d78f88ddc6ca48186fac1994b', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '18f036eb471ea6146c29aaa5892245c334fa1ccc', testId: "cleaning_frequency", selectedValue: (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.cleaning_frequencies) === null || _g === void 0 ? void 0 : _g.code, LabelAvailable: false, showFirstOption: false, data: (_h = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: 'a99c67293a2c7b27dee45a1efcc32f37d2e0f2f5' }, h("p", { key: 'ac2c85ced416e3c4deea32f80bc533a0212e1e83', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '7c3f89b1e396ba986e1c552cc05978ec7cc9e3d1', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.dusty_units) === null || _k === void 0 ? void 0 : _k.code, data: (_m = (_l = housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.dusty_periods) === null || _m === void 0 ? void 0 : _m.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: 'c6bd557041f372c8d995547ae3fb5b32db3bc381', class: "mb-1" }, h("p", { key: '1a5a2beefcacb1c5ae894b9a0b4f97284dc1555c', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'e0538b0ed68b33cfb54efd0dd9d9201eae17ef86', testId: "highlight_check_ins", selectedValue: (_p = (_o = this.filters) === null || _o === void 0 ? void 0 : _o.highlight_check_ins) === null || _p === void 0 ? void 0 : _p.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_r = (_q = housekeeping_store.hk_criteria) === null || _q === void 0 ? void 0 : _q.highlight_checkin_options) === null || _r === void 0 ? void 0 : _r.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '18e0e2a0822388e7fd9578df5a8ad9387657604c', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'b1758b4fa3ec6c6604674f3916875f29f4256339', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '01f4f0b94103cee574a3b88989a36573e6191777', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '903ff4ceebb0279911e5f2c85f8b799b0e185f9d', class: "d-flex align-items-center justify-content-between" }, h("h3", { key: '8769c746e274f1e268a32494273eb4d4275b5281' }, "Housekeeping Tasks"), h("div", { key: '66481ab316d48713f052bb3924d7aa5245710509', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: 'db8fe6513ab4ade32025c2d4220336aa59dbabf8', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }), h("ir-button", { key: 'de6b4aa2f0396c4f95005109ce80e97434a85a94', size: "sm", btn_color: "outline", text: "Archive", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: 'df3f3be1d8abfd76ffb79f4150be63407901e5a4', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.25rem 0.5rem !important;white-space:nowrap;max-width:max-content !important;border:0}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.table-container.sc-ir-tasks-table{max-height:80vh}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";
const IrTasksTableStyle0 = irTasksTableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.tasks = [];
        /**
         * Tracks which task IDs are currently selected via checkboxes.
         */
        this.selectedIds = [];
        /**
         * Controls whether the "Confirm Clean" modal is shown.
         */
        this.showConfirmModal = false;
        /**
         * The key we are sorting by (e.g., "date", "unit", "status", "housekeeper").
         */
        this.sortKey = 'date';
        /**
         * The sort direction: ASC or DESC.
         */
        this.sortDirection = 'ASC';
        this.checkableTasks = [];
    }
    componentWillLoad() {
        this.sortTasks('date', 'ASC');
        if (this.tasks) {
            this.assignCheckableTasks();
        }
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
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedIds = [];
    }
    handleTasksChange(newTasks) {
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
            this.selectedIds = [];
            this.assignCheckableTasks();
        }
    }
    /**
     * Helper to sort tasks array in state.
     */
    /**
     * Sorts the tasks by the given key in ASC or DESC order.
     * If values for `key` are duplicates, it sorts by `date` ascending.
     * If `date` is also the same, it finally sorts by `unit.name` ascending.
     */
    sortTasks(key, direction) {
        const sorted = [...this.tasks].sort((a, b) => {
            var _a, _b, _c, _d;
            // Primary comparison: a[key] vs b[key]
            let aPrimary = a[key];
            let bPrimary = b[key];
            if (key === 'status') {
                aPrimary = a[key].description;
                bPrimary = b[key].description;
            }
            if (aPrimary < bPrimary) {
                return direction === 'ASC' ? -1 : 1;
            }
            if (aPrimary > bPrimary) {
                return direction === 'ASC' ? 1 : -1;
            }
            // First tiebreaker: compare by date (always ascending)
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            // Second tiebreaker: compare by unit.name (always ascending)
            if (((_a = a.unit) === null || _a === void 0 ? void 0 : _a.name) < ((_b = b.unit) === null || _b === void 0 ? void 0 : _b.name))
                return -1;
            if (((_c = a.unit) === null || _c === void 0 ? void 0 : _c.name) > ((_d = b.unit) === null || _d === void 0 ? void 0 : _d.name))
                return 1;
            return 0;
        });
        // Update component state
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
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        if (this.tasks.length === 0) {
            return;
        }
        const filteredTasks = this.tasks.filter(t => this.selectedIds.includes(t.id));
        this.rowSelectChange.emit(filteredTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return this.checkableTasks.length > 0 && this.selectedIds.length === this.checkableTasks.length;
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            this.selectedIds = [];
        }
        else {
            this.selectedIds = this.checkableTasks.map(t => t.id);
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    /**
     * Assigns checkable tasks based on predefined criteria.
     *
     * This method filters tasks and determines which ones are eligible
     * to be selected using checkboxes. A task is considered "checkable"
     * if its date is today or earlier.
     *
     * The filtered tasks are stored in `this.checkableTasks`, ensuring
     * only relevant tasks can be interacted with by users.
     */
    assignCheckableTasks() {
        const tasks = [];
        this.tasks.forEach(task => {
            if (this.isCheckable(task)) {
                tasks.push(task);
            }
        });
        this.checkableTasks = [...tasks];
    }
    /**
     * Determines if a task is checkable.
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {string} date - The task's date in 'YYYY-MM-DD' format.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    isCheckable(task) {
        if (!task.hkm_id) {
            return false;
        }
        return hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(hooks(), 'days');
    }
    render() {
        return (h("div", { key: '5411b152b8ea911b9a54a6867442b4122bf935da', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '0986ac7516f5dd6f90ba35b982e681e9ca1227cb', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f208b77958878d42bcfd37378e77e9320ef14b09', class: "table-header" }, h("tr", { key: '37a5e24dba89b081aaef9bf9eff1d9f20e094d20' }, h("th", { key: 'ec3ebdff1edfd05aa0ba0cfbc7adb7337e9e1423' }, h("ir-checkbox", { key: '7c213cf7c918dde72d0c944af37b16b4aa8f9ecb', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'cea329d956b005fbbdb0d27865b0e171a5804bab' }, "Period"), h("th", { key: 'd0e94d17ee1796098243353109b5b1c3f76f6e94' }, "Unit"), h("th", { key: '396b80ed85f443319be6841ee73364664aa14fc7', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '86d8dfc7cf4114d3cb11b98ed0ca0a13eec9898e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'df86998b14e384478d3b82b00fe68610b08abcdf' }, "Status"), h("svg", { key: 'f752f10725244fb2c23b818fc2cad2768d9aeb6a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a34f0e1bba80ba36c293c2a13ee0f1e90ac8e4e0', d: "m21 16-4 4-4-4" }), h("path", { key: '565abdf906b905de45d6794e92b5d7a9072bb967', d: "M17 20V4" }), h("path", { key: '7c0de8c0abd4c45da1fc33cd0abaf578491ea9a0', d: "m3 8 4-4 4 4" }), h("path", { key: '0b92c7b0e0ba978aaed130d4e7468329f6b7711e', d: "M7 4v16" })))), h("th", { key: 'a1ce33cb7386b31ff79fd1686b7b1cfffba3b766' }, "Hint"), h("th", { key: 'cad4b33229074863554f25ef94846353a599dbc9' }, "A"), h("th", { key: 'ac3588314d357f48ce2974f83e03c78b6909c34a' }, "C"), h("th", { key: 'b9676323e41de1721cc431c1724b7452738fa2da' }, "I"), h("th", { key: '37a9341606a0cc9b54363f3ce7cd0eaa52f4695c', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '09d9a0f0c4ff17e583f5ec393f77141586b099d7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '92323512ca00c214c6cf7e45ef6530cebd489ec4' }, "Housekeeper"), h("svg", { key: '3263070d788c578435b6350f697554666af098b3', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'f4525e247235049dc80c3dbce38b077d3d4641ac', d: "m21 16-4 4-4-4" }), h("path", { key: 'e300235d373928b6153c23c2227c590d28186f32', d: "M17 20V4" }), h("path", { key: '2228cb3457580a29b19a6990c4a492d69959e529', d: "m3 8 4-4 4 4" }), h("path", { key: '32e91413e558c854ac2100e3231a782c73705584', d: "M7 4v16" })))))), h("tbody", { key: 'f4ef1db4d3c450eea0050744f98c7e1de2d7c62f' }, this.tasks.length === 0 && (h("tr", { key: 'd501a14d812cf2cbfaebf99ae44fcf4ebfc1d010' }, h("td", { key: '2c9de253ac5ef0c63a6f0864f0682f966c19bb10', colSpan: 9, class: "text-center" }, h("div", { key: '652b21823fed6a851a6ceed1092760db7b2acab8', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5232184c82746ab636061ddea3072b4834a60892' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.formatted_date), h("td", { class: "task-row" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row" }, task.status.description), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
        })))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
};
IrTasksTable.style = IrTasksTableStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table };

//# sourceMappingURL=ir-hk-archive_4.entry.js.map