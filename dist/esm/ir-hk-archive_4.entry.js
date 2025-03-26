import { r as registerInstance, h, H as Host, c as createEvent } from './index-jhiFt_tX.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-BFNHYo2T.js';
import { c as calendar_data } from './calendar-data-D2MMPhx6.js';
import { i as isRequestPending } from './ir-interceptor.store-C5Y_S4JJ.js';
import { l as locales } from './locales.store-BsXBgatZ.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { v as v4 } from './v4-DD3477fe.js';
import './index-C7eXIDl2.js';
import './axios-8ipPhlJK.js';
import './_commonjsHelpers-E-ZsRS8r.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";

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
IrHkArchive.style = irHkArchiveCss;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";

const IrTasksFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters");
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (h("div", { key: '0ec313724c0e62ea7a3d96e7019bcedeed15afb9', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '0117be01e984859e80138b77059627b84c292ecf', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '8af4853a39ec66255d1530d70886df1cd25a64ab', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '4a28078d74691942d42df46a717ca3f529a61b72', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7c690e4480236e523af962b00cb1d7146bebd116', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '93edd37e61bf45d9a98389416d636c18e53408ce', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '1ae51cef2cb767f3e4560aa2d00c2479fcc9ff24', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '8d19ad7af48f1203c1e15bc712f7c7573a1ec2a4', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'dc35675a83a9c33e531fdc433a8a88e82f5d7325', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'c4879b1de11434c421b0351c6308078c27cd1350', class: "pt-1" }, h("p", { key: '48e1694eb79c8e32e132e74be9dbf109b2b21e4f', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'ba4ddb3d5599135a2adc5598b7fa1e095d52712d', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: '642a94b4164367471c473c550499d44898452273' }, h("p", { key: 'a1aa5493c3560e1b6d9bf77a51e21640c8b411fe', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '8cd45a599416d8abc15fe9769962f63820f8af8d', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
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
            } }))), h("fieldset", { key: 'f9853fd1d79865c472b6fc830bfe382644ac784d' }, h("p", { key: '56b7cfc44c171c33dd69f1e0133e8dee15bae0f2', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '996c71c304778a5a8caf002ad96136f11f46ea15', testId: "cleaning_frequency", selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.cleaning_frequencies) === null || _h === void 0 ? void 0 : _h.code, LabelAvailable: false, showFirstOption: false, data: (_j = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: '785744a5c128b988581b2481b9f88f0bd0e6f66e' }, h("p", { key: 'b030fae69dfccaccbff6a9be615ceb467c046b08', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'eae3ef83f919f512f2a586203a97823c5e7c9cff', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_l = (_k = this.filters) === null || _k === void 0 ? void 0 : _k.dusty_units) === null || _l === void 0 ? void 0 : _l.code, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: 'f3289c70e4aa89d5147913309fc01665cf0759c8', class: "mb-1" }, h("p", { key: '312b3c4c682bdbbc7ad9f325c7ddec30a7b92f3a', class: "m-0 p-0" }, "Highlight check-ins from"), h("ir-select", { key: '996a3c1c78149d4f757228a4b08f8f71855c51bb', testId: "highlight_check_ins", selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'd72a2ecaf9f8d53ad72e06718e5a32a5508a40d6', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '3795474a1b5d3835611977871e78a91c51ebe07e', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '255fe285d3b632678a0cb19fbfe919450dcd5cff', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = irTasksFiltersCss;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headerButtonPress = createEvent(this, "headerButtonPress");
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '903ff4ceebb0279911e5f2c85f8b799b0e185f9d', class: "d-flex align-items-center justify-content-between" }, h("h3", { key: '8769c746e274f1e268a32494273eb4d4275b5281' }, "Housekeeping Tasks"), h("div", { key: '66481ab316d48713f052bb3924d7aa5245710509', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: '7234e39a4200b4ae5b797af8c22aab10e3a0a0f7', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: '22fa3e53b193d3523961d86544c5047955cf012f', size: "sm", btn_color: "outline", text: "Archives", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: 'af35485bf45ce4f95ea0a67a9758338d67bf08aa', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = irTasksHeaderCss;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{white-space:nowrap;max-width:max-content !important;border:0}.task-row.sc-ir-tasks-table{padding:0.25rem 0.5rem !important}.extra-padding.sc-ir-tasks-table{padding:0.25rem 1rem !important}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.table-container.sc-ir-tasks-table{max-height:80vh}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton");
        this.rowSelectChange = createEvent(this, "rowSelectChange");
        this.sortingChanged = createEvent(this, "sortingChanged");
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
        this.sortingChanged.emit({ field: key, direction: newDirection });
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
        return (h("div", { key: '7dd6990bdbc30a865ba0c9f463d7c076deedf91b', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '7c6e028380ae5ea688022b9ff0308835e270ab91', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f0ed96c10622420ae1c850922043eee6c5b5a427', class: "table-header" }, h("tr", { key: '6abebb29d603ec5768bab7f8b5a2895d985744ff' }, h("th", { key: '9f6046563cb9fad2b99094c459622aff14f06e62', class: 'task-row' }, h("ir-checkbox", { key: 'ec8b1c79273fb40fe8ee18240487230511445989', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '50f1224bffcb3d978992eaa1d6f7a2638db97e30', class: "extra-padding" }, "Period"), h("th", { key: '1879084f47bc8645652800144604238f34866bdb', class: "extra-padding" }, "Unit"), h("th", { key: '3c49d43ddbf22b07f40ae7031fd69c33677e0515', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'd33e50fe1010f9e9e5d14400f5dde694f21a5017', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'e5db18fc3815aa9f508667105d608a26c1936f1e' }, "Status"), h("svg", { key: '8bc58e383e3ec7423207dcb8e5685417aafb2dec', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '0aa6f7ac8efd3553de0dbc55c663ad047364acd3', d: "m21 16-4 4-4-4" }), h("path", { key: '70d45d65e93270b1378ff51a3a3db248e8d76baf', d: "M17 20V4" }), h("path", { key: '19ae69480f1fde0d3ad0dfe0e754b3d74fe191a1', d: "m3 8 4-4 4 4" }), h("path", { key: '984613fa4d92732ab0f1ffd3b3bccd1e89d46da8', d: "M7 4v16" })))), h("th", { key: '1cb82233160c77ba2b6e104419fee124b8b81c0a', class: "extra-padding" }, "Hint"), h("th", { key: '80aba781f02055b4de46c78c107a9aebeccea39e' }, "A"), h("th", { key: '227c83ca7dd1bb37916eada2c3aeadb5bd1cdd3b' }, "C"), h("th", { key: '1754b68b0990f5a23e5ce285f9bf85364ba8b66b' }, "I"), h("th", { key: 'c5dc9eb3fbd15703d3d5b9203f2a6d9266fc6dd1', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '3f9d8b375a6527e5ae0545004e27ef9f95a70924', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '5e3f057f6ec7c32d234bef4c75fe8a1425fe963b' }, "Housekeeper"), h("svg", { key: '9799066f18f86b6db625f3a1288bd75b025aeb1b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '24cca6028677377cc0b409a07556a3fa323d4287', d: "m21 16-4 4-4-4" }), h("path", { key: 'b43c780687f8a3939f15aa5a44ff00ae96c30df7', d: "M17 20V4" }), h("path", { key: '845871086b201edcb56e5642a1199135968e53a6', d: "m3 8 4-4 4 4" }), h("path", { key: '41c23bc7a38eddf5d0e1acb7f13d8e6c05b59538', d: "M7 4v16" })))))), h("tbody", { key: '79da31fae882cf333068db3d3f10b1b10f425df1' }, this.tasks.length === 0 && (h("tr", { key: 'd80cc9db4b1141004a08a2156a9e5353f8bb5fd2' }, h("td", { key: 'e1acbfe2428ad79fa4960653da5166717fe86801', colSpan: 9, class: "text-center" }, h("div", { key: 'b41cb7e0f075fd2f7acb82e0eb4ea7f2b4bd0027', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '6ba1fa102853bba15cc3df4d181d15fd9d987db9' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding" }, task.status.description), h("td", { class: "task-row extra-padding" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
        })))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
};
IrTasksTable.style = irTasksTableCss;

export { IrHkArchive as ir_hk_archive, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table };
//# sourceMappingURL=ir-hk-archive.ir-tasks-filters.ir-tasks-header.ir-tasks-table.entry.js.map

//# sourceMappingURL=ir-hk-archive_4.entry.js.map