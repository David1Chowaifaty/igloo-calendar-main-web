'use strict';

var index = require('./index-Dt9a74kn.js');
var housekeeping_service = require('./housekeeping.service-Cv3FpQZ1.js');
var calendarData = require('./calendar-data-CC4kt7DA.js');
var irInterceptor_store = require('./ir-interceptor.store-CcYE4FKe.js');
var locales_store = require('./locales.store-CJveOVzn.js');
var moment = require('./moment-CdViwxPQ.js');
var v4 = require('./v4-Bq3ldsQe.js');
require('./index-PIkoJJtF.js');
require('./axios-DG0YPAll.js');
require('./_commonjsHelpers-B83fTs8d.js');

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";

const IrHkArchive = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filters = {
            from_date: moment.hooks().add(-90, 'days').format('YYYY-MM-DD'),
            to_date: moment.hooks().format('YYYY-MM-DD'),
            filtered_by_hkm: [],
            filtered_by_unit: [],
        };
        this.data = [];
        this.isLoading = null;
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.units = [];
    }
    componentWillLoad() {
        this.initializeData();
        this.setUpUnits();
    }
    setUpUnits() {
        const units = [];
        calendarData.calendar_data.roomsInfo.forEach(r => {
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
        this.data = (_a = [...(res || [])]) === null || _a === void 0 ? void 0 : _a.map(t => (Object.assign(Object.assign({}, t), { id: v4.v4() })));
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
        return (index.h(index.Host, { key: '9012fac90a4ae6ed8fa5f21d2147ff361fe8336a' }, index.h("ir-title", { key: '7227726b0d3950f9266cf7b0d5e07b4666238025', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: 'da296fa9e80baf770fd075bcf126fadc423c5816', class: "px-1" }, index.h("div", { key: 'e40ee2658642d8aa2e2a532113ebf207a0d10765', class: "d-flex" }, index.h("ir-select", { key: '5889e6695a69f3050a2823ea76f94b7891331150', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
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
            } }), index.h("ir-select", { key: '6b1498b5617a52ec78c31ae9245412b95b898e20', class: "ml-1 w-100", selectedValue: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.filtered_by_hkm) === null || _c === void 0 ? void 0 : _c.length) === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.filtered_by_hkm[0]) === null || _e === void 0 ? void 0 : _e.toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_f = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
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
            } })), index.h("div", { key: '45fd61fce01e7aaa0a5b814454f0c846aa1c7d5d', class: "d-flex mt-1 align-items-center" }, index.h("igl-date-range", { key: '121ad32e0ddbb8573fbfb75d679e76f58fac98d9', class: "mr-1", dateLabel: locales_store.locales.entries.Lcz_Dates, minDate: moment.hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.filters.from_date,
                toDate: this.filters.to_date,
            } }), index.h("ir-button", { key: '99536a1052d56e8f0de25956af0f3d7924c49867', title: (_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: 'a18bb42b9a142d3e3f01a05e6c305c342246f675', title: (_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), ((_j = this.data) === null || _j === void 0 ? void 0 : _j.length) === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, "No Results Found")) : (index.h("table", { class: "mt-2" }, index.h("thead", null, index.h("th", { class: "sr-only" }, "period"), index.h("th", { class: "sr-only" }, "housekeeper name"), index.h("th", { class: "sr-only" }, "unit"), index.h("th", { class: "sr-only" }, "booking number")), index.h("tbody", null, (_k = this.data) === null || _k === void 0 ? void 0 : _k.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pr-2" }, d.date), index.h("td", { class: "px-2" }, d.house_keeper), index.h("td", { class: "px-2" }, d.unit), index.h("td", { class: "px-2" }, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
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
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters");
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
            cleaning_periods: (_a = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: { ids: (_b = housekeeping_service.housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => h.id) },
            cleaning_frequencies: (_c = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_frequencies[0],
            dusty_units: (_d = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.dusty_periods[0],
            highlight_check_ins: (_e = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.highlight_checkin_options[0],
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
        return (index.h("div", { key: 'ffe866362f58b49c3ebeb19795d1429d8953972b', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: '57d4acc9058b07f5f3f952099b4e2c69a04589c8', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '0a686d5a589ff4c598194dacbd4bdb7bf43cdd05', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '0681ac7279032ae97a857ed6913dd9275f77b363', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'acbc77c4bc4b873e4bd15ade941d9d7b1f5fb887', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '5c5a6f84db7ff7182a559872e349e9fdf2394d50', class: "m-0 p-0 flex-grow-1" }, "Filters")), index.h("ir-button", { key: '69bb50ea76f44a33ca74236481e0acd3f3aa86f7', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'c949b13a60b9998cbeb9d305cc60e9d087f0dd38', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: 'b4cf200129f9db045a97052c2770d24e09b9ccd4', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '3dfebad0c6870b872dd74562a525c9ca40780cb7', class: "pt-1" }, index.h("p", { key: 'd5e240dcd99973bedb24cdd1da23778d98afb6d4', class: "m-0 p-0" }, "Period"), index.h("ir-select", { key: '4e926e7c33f528d8af3527e1e1157af64a374852', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), index.h("fieldset", { key: 'bd9a9af52a5854590736c2121d6eda1835ef536a' }, index.h("p", { key: 'aa345b13d0bdab66439f5f991244042389967673', class: "m-0 p-0" }, "Housekeepers"), index.h("ir-select", { key: '528a8b31e9061dba582b67cd394d45375d680565', testId: "housekeepers", selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_e = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.housekeepers.map(v => ({
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
            } })), index.h("fieldset", { key: '1163749f0b7b8ac70daa645623b0f76637635c87' }, index.h("p", { key: '3774f0a24cb8feb0d156fcf9d1cb116fda23f696', class: "m-0 p-0" }, "Cleaning frequency"), index.h("ir-select", { key: '92a8ef230b3b9d9ee5727b8885df15af6b2c4313', testId: "cleaning_frequency", selectedValue: (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.cleaning_frequencies) === null || _g === void 0 ? void 0 : _g.code, LabelAvailable: false, showFirstOption: false, data: (_h = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), index.h("fieldset", { key: '93d22323defa78d134a515669f816c50d61db9a3' }, index.h("p", { key: 'affaaccf2910923500c6754f6f9f67b57f3fca7f', class: "m-0 p-0" }, "Dusty units"), index.h("ir-select", { key: 'f6843005dee4166ea059c52893d321dc3bbae639', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.dusty_units) === null || _k === void 0 ? void 0 : _k.code, data: (_m = (_l = housekeeping_service.housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.dusty_periods) === null || _m === void 0 ? void 0 : _m.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: '0d66ed51529e1f9b4b6f23b8c96d2287c51cf7ea', class: "mb-1" }, index.h("p", { key: '4a73d8acca0455c3094628db5c341a56e6587d06', class: "m-0 p-0" }, "Highlight check-ins"), index.h("ir-select", { key: 'fc3ca4a8daf4000e1e2ecf7abc297885b75b6bf8', testId: "highlight_check_ins", selectedValue: (_p = (_o = this.filters) === null || _o === void 0 ? void 0 : _o.highlight_check_ins) === null || _p === void 0 ? void 0 : _p.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_r = (_q = housekeeping_service.housekeeping_store.hk_criteria) === null || _q === void 0 ? void 0 : _q.highlight_checkin_options) === null || _r === void 0 ? void 0 : _r.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: 'a8b6b6e72f1f7583cbbea736dd93dfb10979b8bd', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: 'cabe53f241ece2af883389c90e6dddac684bf755', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'a30070b9b4abc988e24227f4cf2c45c12dda7cbe', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = irTasksFiltersCss;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";

const IrTasksHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerButtonPress = index.createEvent(this, "headerButtonPress");
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (index.h("div", { key: '258b84bcae51b7655b521594708b7ef2d6d3ee60', class: "d-flex align-items-center justify-content-between" }, index.h("h3", { key: 'b819fb78537c52444bfc1189f6d5f2f8544a4ed4' }, "Housekeeping Tasks"), index.h("div", { key: '94e11c5b647272694ea6eb551a1fbb45dd1c1254', class: "d-flex align-items-center", style: { gap: '1rem' } }, index.h("ir-button", { key: '532ca57b0a865224c69b3bc79fae44cdc49f996d', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }), index.h("ir-button", { key: '7ce1b541a6cb576a170a61278265af5b23cf47e2', size: "sm", btn_color: "outline", text: "Archive", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: 'b9499980a8e245ea3eb831576150ac71f41bed97', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = irTasksHeaderCss;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.25rem 0.5rem !important;white-space:nowrap;max-width:max-content !important;border:0}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.table-container.sc-ir-tasks-table{max-height:80vh}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";

const IrTasksTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animateCleanedButton = index.createEvent(this, "animateCleanedButton");
        this.rowSelectChange = index.createEvent(this, "rowSelectChange");
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
        return moment.hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(moment.hooks(), 'days');
    }
    render() {
        return (index.h("div", { key: '1a31e9aaca972981e91332546f614477ea169640', class: "card table-container h-100 p-1 m-0 table-responsive" }, index.h("table", { key: 'd9a43e44e60a6e905194b564f05a64d3d6012ea8', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'ce877ffe166c8dff0f1df11916853f94c747db6b', class: "table-header" }, index.h("tr", { key: '7cce9f282123297bf1d2fc9a6b246e169aa77c5d' }, index.h("th", { key: '79a3e886c4376dee0189affc30e5583b698b9340' }, index.h("ir-checkbox", { key: '539f9429ef7af34081c23855032b0a96059125fe', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '8aaea1e3232f646c95e778943a6254b9d7c793da' }, "Period"), index.h("th", { key: '5c18bb65eba322d0497cf795fbbba4684d254cda' }, "Unit"), index.h("th", { key: '9d6a25f673b1ac3edf27466d5594c04cbe74930e', class: 'sortable', onClick: () => this.handleSort('status') }, index.h("div", { key: 'ec03a501b6ede7bc7575f2fc493c8606f6b264e6', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'b8ce956b2ad256ea7854d135d4a4bf7052d20c09' }, "Status"), index.h("svg", { key: '4a7a1ef85426adc22bcbdfc8e5cf390e1bee390c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '5473e70fdaf623a3b171230d5c376b6b955db813', d: "m21 16-4 4-4-4" }), index.h("path", { key: '243bcafaec85af90e844d9f2c64f30b395a86925', d: "M17 20V4" }), index.h("path", { key: '26f1dffac3ab142c1da40bc2a97b5c31be6cd225', d: "m3 8 4-4 4 4" }), index.h("path", { key: '01306124265ef9221ed2f3e4902ff1ec17eb7861', d: "M7 4v16" })))), index.h("th", { key: '58a328b8403b6374ee3718d2da0b6d1d219f1702' }, "Hint"), index.h("th", { key: '8484fbd9020b3c7bc0ba688d877c04cdab8af11f' }, "A"), index.h("th", { key: '83f31e84869a56fc06bfbef45ef935725842ccca' }, "C"), index.h("th", { key: 'e034f139339f0127b319111bdce26c559d2daaf1' }, "I"), index.h("th", { key: 'b504d03f7c717afcb2724986796da151654c4f81', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '142802dd268c5d837225d33099f8897f0c6191dc', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '21ac784b9844ce3a86171df0909b072e6e77d109' }, "Housekeeper"), index.h("svg", { key: '0fa1ae46d6910f8e96d4ada6d651563f7a2709b4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '447a894d13034b68994194cfad3b571d491694a2', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'a3caf4da698159a1b630b6c04b5a838938efbaf7', d: "M17 20V4" }), index.h("path", { key: '579ff2f5c6396cad03e95fb16351106ca288e7e1', d: "m3 8 4-4 4 4" }), index.h("path", { key: '576ecd748fdef05ddb3afe38beb000e066f7b4f3', d: "M7 4v16" })))))), index.h("tbody", { key: 'd768e731f80cf2ffb1485da508f3f05e405fa60c' }, this.tasks.length === 0 && (index.h("tr", { key: '13129e68df534623e68a88200b9c29cee8aff032' }, index.h("td", { key: '64415c40b8cecc3d35ebf43a4aeed43ebb01b427', colSpan: 9, class: "text-center" }, index.h("div", { key: 'b6ed2b3635b8074eaeaf75e95faf530086b1faf9', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: 'd505e70ff910e05e0ea4f6f59b82f160917be451' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (index.h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, index.h("td", { class: "task-row" }, isCheckable && index.h("ir-checkbox", { checked: isSelected })), index.h("td", { class: "task-row" }, task.formatted_date), index.h("td", { class: "task-row" }, index.h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), index.h("td", { class: "task-row" }, task.status.description), index.h("td", { class: "task-row" }, task.hint), index.h("td", { class: "task-row" }, task.adult), index.h("td", { class: "task-row" }, task.child), index.h("td", { class: "task-row" }, task.infant), index.h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
        })))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
};
IrTasksTable.style = irTasksTableCss;

exports.ir_hk_archive = IrHkArchive;
exports.ir_tasks_filters = IrTasksFilters;
exports.ir_tasks_header = IrTasksHeader;
exports.ir_tasks_table = IrTasksTable;
//# sourceMappingURL=ir-hk-archive.ir-tasks-filters.ir-tasks-header.ir-tasks-table.entry.cjs.js.map

//# sourceMappingURL=ir-hk-archive_4.cjs.entry.js.map