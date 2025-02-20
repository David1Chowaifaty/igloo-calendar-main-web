'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const housekeeping_store = require('./housekeeping.store-d0cb71d9.js');
const moment = require('./moment-1780b03a.js');
require('./index-3cfd4bf8.js');

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selectedDates = {
            start: moment.hooks().add(-90, 'days').format('YYYY-MM-DD'),
            end: moment.hooks().format('YYYY-MM-DD'),
        };
        this.data = [
            {
                id: 1,
                date: '20 Jun (Mon)',
                hk_id: 2,
                housekeeper: 'Test',
                unit: {
                    id: 2,
                    name: 'test',
                },
                booking_nbr: 15525610155,
            },
            {
                id: 2,
                date: '20 Jun (Mon)',
                hk_id: 2,
                housekeeper: 'Test aanjhjanjn ajna',
                unit: {
                    id: 2,
                    name: 'test',
                },
                booking_nbr: 15525610155,
            },
        ];
    }
    // private houseKeepingService = new HouseKeepingService();
    componentWillLoad() {
        this.initializeData();
    }
    async initializeData() { }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        this.selectedDates = {
            start: start.format('YYYY-MM-DD'),
            end: end.format('YYYY-MM-DD'),
        };
    }
    async searchArchive(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    async exportArchive(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    render() {
        return (index.h(index.Host, { key: '8c5703969524ff57af4f9d06f8534cc3be8a3b4a' }, index.h("ir-title", { key: '88d9d0338f42311445ae8d2817248b956aeb9144', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '403a5f558fd2c94daf07ca7cb9f40202a1cc1352', class: "px-1" }, index.h("div", { key: 'ca58d9e9f6fa890d3baa142146d34013add20c94', class: "d-flex" }, index.h("ir-select", { key: '7f1a45fec7f9c0e1881b3dc02895fe9de3a8deea', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), index.h("ir-select", { key: '46211716c7c6c772709033ace4f4156da9322764', class: "ml-1 w-100", LabelAvailable: false, data: housekeeping_store.housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })), firstOption: "All housekeepers" })), index.h("div", { key: '9ad5ba6cf6dd5afbe3dd09fd3754a021e01aea26', class: "d-flex mt-1 align-items-center" }, index.h("igl-date-range", { key: 'a3d85803317a3f30e3359e124ac3a15671c985f8', class: "mr-1", withDateDifference: false, minDate: moment.hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), index.h("ir-icon", { key: '8428a362eb00de71a412ed6d36fa22d7fde7cb11', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, index.h("svg", { key: '84bfe04479649a0811ec22d6b93fa7484e22c77b', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { key: '6efc9501ce8c2104bd5a605fd68bfe3a4d2ac4af', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), index.h("ir-icon", { key: '04243f0f5d0ee4553c92f2b398ff6752c32aba80', onIconClickHandler: this.exportArchive.bind(this) }, index.h("svg", { key: 'e3839ca9feda9967b886a6ce8bee4a896931015a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, index.h("path", { key: '74d8553556f8b136125f9d27b8c800b4864b9828', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))), index.h("table", { key: '636e3177d469e916f152ee32be3b39a0f554e07a', class: "mt-2" }, index.h("thead", { key: '35e133a6aa2b8d3d656fc1993cea2b4e4d6ab3f7' }, index.h("th", { key: '918c39f2c7be13c8ff67a1be9fe62daa6dd3ef23', class: "sr-only" }, "period"), index.h("th", { key: 'c0c9c22c5c39cd3bd6207946cae196e9e2252e92', class: "sr-only" }, "housekeeper name"), index.h("th", { key: 'c014a1d1e28c871899f50bf4b19107656f06f4b4', class: "sr-only" }, "unit"), index.h("th", { key: 'a01824885918907a827a87b09eafb12aef6588d3', class: "sr-only" }, "booking number")), index.h("tbody", { key: 'd4b90e9075b06d18a15e0f302953e3f8c69a2adf' }, this.data.map(d => {
            var _a;
            return (index.h("tr", { key: d.id }, index.h("td", { class: "pr-2" }, d.date), index.h("td", { class: "px-2" }, d.housekeeper), index.h("td", { class: "px-2" }, (_a = d.unit) === null || _a === void 0 ? void 0 : _a.name), index.h("td", { class: "px-2" }, index.h("ir-button", { btn_color: "link", btnStyle: {
                    width: 'fit-content',
                    padding: '0',
                    margin: '0',
                }, labelStyle: {
                    padding: '0',
                }, text: d.booking_nbr.toString(), onClick: () => {
                    window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
                } }))));
        }))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
        this.filters = {
            cleaning_periods: {
                code: '',
            },
            housekeepers: {
                ids: [],
            },
            cleaning_frequencies: { code: '' },
            dusty_units: { code: '' },
            highlight_check_ins: { code: '' },
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        var _a, _b, _c, _d, _e;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store.housekeeping_store === null || housekeeping_store.housekeeping_store === void 0 ? void 0 : housekeeping_store.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: { ids: (_b = housekeeping_store.housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => h.id) },
            cleaning_frequencies: (_c = housekeeping_store.housekeeping_store === null || housekeeping_store.housekeeping_store === void 0 ? void 0 : housekeeping_store.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_frequencies[0],
            dusty_units: (_d = housekeeping_store.housekeeping_store === null || housekeeping_store.housekeeping_store === void 0 ? void 0 : housekeeping_store.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.dusty_periods[0],
            highlight_check_ins: (_e = housekeeping_store.housekeeping_store === null || housekeeping_store.housekeeping_store === void 0 ? void 0 : housekeeping_store.housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.highlight_checkin_options[0],
        };
        this.filters = Object.assign({}, this.baseFilters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, this.baseFilters);
        this.applyFilters.emit(this.filters);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (index.h("div", { key: '3b840947344003709e999e9c7f9f3b4695e37ba0', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: 'b5ba63ca83f036c804a9820c3b29c4d15d8f6f4e', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '8266b96341f53a3f661213f69b56b60629c2f6cd', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '51184ff1a6ce092821e82bec37883efc8d9c31ff', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '17d48295a584b066d4ddfee10b02865c42456c3e', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'f6258af0162e7a6056d2818ce1cf8ed93e1b9c28', class: "m-0 p-0 flex-grow-1" }, "Filters")), index.h("ir-button", { key: '0a26b35db6fe3220f0db57da05000b13a6beb9a5', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '6f4b63260dba38dddab18567060540963b65e340', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: 'e6f8b82324f64bb407f687ddbbd7b2ee65a09970', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '77b292df8d0ed7b931a8a8afbfadb1a59ae715be', class: "pt-1" }, index.h("p", { key: 'f9c9d9ecd46d5d1f52a499b0ddaa56b45f6c7500', class: "m-0 p-0" }, "Period"), index.h("ir-select", { key: 'e0a9427abe353446b0f0bdf5d9012935be617a30', selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store.housekeeping_store === null || housekeeping_store.housekeeping_store === void 0 ? void 0 : housekeeping_store.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), index.h("fieldset", { key: '393b80e416f50607b18f61e3e07785a578038102' }, index.h("p", { key: 'f20e830fb2edf002c6ff2015b444b05b8e761482', class: "m-0 p-0" }, "Housekeepers"), index.h("ir-select", { key: '5b17e6132e26f14630a6f443ca1993831bf26aaf', selectedValue: ((_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers) === null || _e === void 0 ? void 0 : _e.ids.length) === housekeeping_store.housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.housekeepers) === null || _g === void 0 ? void 0 : _g.ids[0].toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_h = housekeeping_store.housekeeping_store === null || housekeeping_store.housekeeping_store === void 0 ? void 0 : housekeeping_store.housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                var _a, _b;
                if (e.detail === '000') {
                    this.updateFilter({ housekeepers: { ids: (_b = (_a = this.baseFilters) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.ids } });
                }
                else {
                    this.updateFilter({ housekeepers: { ids: [e.detail] } });
                }
            } })), index.h("fieldset", { key: '2642efd75af608e9db08a761f7c01b39d548502e' }, index.h("p", { key: '318c9dfdcee9a5d89541f3a9ebd49f6542a3ef7e', class: "m-0 p-0" }, "Cleaning frequency"), index.h("ir-select", { key: 'c6ed366cd205df68bfe9c8277e7bdb2221528887', selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies) === null || _k === void 0 ? void 0 : _k.code, LabelAvailable: false, showFirstOption: false, data: (_l = housekeeping_store.housekeeping_store === null || housekeeping_store.housekeeping_store === void 0 ? void 0 : housekeeping_store.housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), index.h("fieldset", { key: '621069038788b529eee0f334e4586eb79a741f1e' }, index.h("p", { key: 'd5e0359af6a6ce09b585c28e2f373d921ecde3dc', class: "m-0 p-0" }, "Dusty units"), index.h("ir-select", { key: 'd414fe82b201c2ab6db9f20655e5bee0de5cb4bd', showFirstOption: false, LabelAvailable: false, data: (_o = (_m = housekeeping_store.housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("fieldset", { key: '3fc1d2d569b4caf36e9a12212a4c0542bf102c7d', class: "mb-1" }, index.h("p", { key: 'caeaba3f69cbe4fa2260d3989d52535a52303b6c', class: "m-0 p-0" }, "Highlight check-ins"), index.h("ir-select", { key: 'e4dfd95db2a72d7fc6102e947787b2a0d334d80b', selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: '1820f26ea4c024f8acff53a779c65b4f67875fc7', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: '476732cca1b1148bdfaa050e826c37aa07d8f7ad', btn_type: "button", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '5e516dfa03c8526daff582ba8a0b8c5ea940b20d', btn_type: "button", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerButtonPress = index.createEvent(this, "headerButtonPress", 7);
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (index.h("div", { key: '7436da2916d4143ce980d37e902d863d730c64d2', class: "d-flex align-items-center justify-content-between" }, index.h("h4", { key: 'da2cc88f796d97aa49a8657bf7b50605a27b1202' }, "Housekeeping Tasks"), index.h("div", { key: '70cd45c5b82d2b92a3a6a0f4f6d2bb874e708627', class: "d-flex align-items-center", style: { gap: '1rem' } }, index.h("ir-button", { key: 'ef279318d82b66910c2926f26477876183820d9a', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }), index.h("ir-button", { key: 'b5ba4d73ad75674c1fc1ea74fd697e846134938a', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.25rem 0.5rem !important;white-space:nowrap;max-width:max-content !important}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";
const IrTasksTableStyle0 = irTasksTableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animateCleanedButton = index.createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = index.createEvent(this, "rowSelectChange", 7);
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
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedIds = [];
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
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
        console.log('here');
    }
    render() {
        return (index.h("div", { key: 'efce2880f3eb4efc93508e5f29681203ddccf03f', class: "card h-100 p-1 m-0 table-responsive" }, index.h("table", { key: '82e6e26c6e491aad39b48da63f9520e54f7f4a42', class: "table " }, index.h("thead", { key: 'd1cb6da04b3c8b618c2160b6dbfdb7c36de9bacb', class: "table-header" }, index.h("tr", { key: '550b1f7bd0adb1edbabf61494ed6aa907586abe4' }, index.h("th", { key: 'c4895e9579129ebbc3adf11861cd8b2eec596ebf' }, index.h("ir-checkbox", { key: '698ac48358fb4e57d49c95e5d10f3cb1039ab924', checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '32ebc44d3905986db5ba8547e46aee2d6a9f38c9' }, "Period"), index.h("th", { key: 'a9ee1f0e5b900ec53585b5de87772db14a3aaaac' }, index.h("span", { key: 'c81666ae9a91e825dc31a9bc42fa710545a659f9' }, "Unit")), index.h("th", { key: '0b1d1f79c6c513ac22a42784c917456d9be0f62f', class: 'sortable', onClick: () => this.handleSort('status') }, index.h("div", { key: '6460b4fd3cb554a05ed03686b22789d5e14649b7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '0858907df328a3fe3ca5fe2a251097aa43eed668' }, "Status"), index.h("svg", { key: 'ef03ad0b04aa48685ccbbe84b61795c2f27a91bf', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '2be59f02868b3ec0ccfbc19dc89e8358efa08345', d: "m21 16-4 4-4-4" }), index.h("path", { key: '7f775b5b99f8236f269862f92078ef123f1f6f18', d: "M17 20V4" }), index.h("path", { key: 'd0e2e20fefbd826143158a074fe6f2d5d49b6aa7', d: "m3 8 4-4 4 4" }), index.h("path", { key: '8072d6c0bcc9ec2ea3578a3b2ee584ed2947aa0f', d: "M7 4v16" })))), index.h("th", { key: '19a00bc94d339dbd1b59abd9c97d30f3e2faccbd' }, "Hint"), index.h("th", { key: '5de05fa8ec5300e8ed18d8ec7b2a7215462920a0' }, "A"), index.h("th", { key: '0be5aac4036dc4ce46d0a88186eed7312d9c972b' }, "C"), index.h("th", { key: 'df7b9e797ddd42e18339e1f3889232148c528683' }, "I"), index.h("th", { key: '7a03836052804dd70cb677feae7f7885b2367896', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '435073a90ad7e8c967da3e0c84e521570239be3d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '61aaaa3017ef39b00714171b576b8ee476e6fcee' }, "Housekeeper"), index.h("svg", { key: 'ce7fb7d428039fed5d223eba1a34fb2a5b481ffc', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '63066203c099a2df3c21b0b3e04f18757b370c8b', d: "m21 16-4 4-4-4" }), index.h("path", { key: '13f9891952ba5ca728f5d9c4e952adf68398e504', d: "M17 20V4" }), index.h("path", { key: '76cb3fd9f3a397955e191e21882e17d21e6385d1', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'a0a5bb37459c7023a6bd92479a0713a44385ead4', d: "M7 4v16" })))))), index.h("tbody", { key: '051e21b3bf5c890185e4c5714c759c04f711b2ec' }, this.tasks.length === 0 && (index.h("tr", { key: 'ff2b8ecb326b6765d92975cee5439fc1aeb8a04a' }, index.h("td", { key: 'ea31ae72fcd81dbddf17a73ab4fe2ba092c9b323', colSpan: 9, class: "text-center" }, index.h("div", { key: 'd503518589b1fa33268cfe5a1e8affd23eff0139', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '24f9a34e6ac9acde07822facc9c5b2d890e6369e' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            return (index.h("tr", { style: { cursor: 'pointer' }, onClick: () => this.toggleSelection(task.id), class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, index.h("td", { class: "task-row" }, index.h("ir-checkbox", { checked: isSelected })), index.h("td", { class: "task-row" }, task.date), index.h("td", { class: "task-row" }, task.unit.name), index.h("td", { class: "task-row" }, task.status.description), index.h("td", { class: "task-row" }, task.hint), index.h("td", { class: "task-row" }, task.adult), index.h("td", { class: "task-row" }, task.child), index.h("td", { class: "task-row" }, task.infant), index.h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
        })))));
    }
};
IrTasksTable.style = IrTasksTableStyle0;

exports.ir_hk_archive = IrHkArchive;
exports.ir_tasks_filters = IrTasksFilters;
exports.ir_tasks_header = IrTasksHeader;
exports.ir_tasks_table = IrTasksTable;

//# sourceMappingURL=ir-hk-archive_4.cjs.entry.js.map