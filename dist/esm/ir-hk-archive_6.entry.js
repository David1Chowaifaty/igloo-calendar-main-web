import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent } from './index-0a4a209a.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-64b661f9.js';
import { c as calendar_data } from './calendar-data-a6093df2.js';
import { a as isRequestPending } from './ir-interceptor.store-e96f5930.js';
import { l as locales } from './locales.store-53ec3957.js';
import { d as downloadFile } from './utils-bf32d8ec.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { t as toggleTaskSelection, h as hkTasksStore, b as updateSearchField, d as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, f as getPaginatedTasks, j as getMobileTasks, k as updateCurrentPage, l as updatePageSize, m as shouldLoadMore, n as loadMoreTasks } from './hk-tasks.store-497924f8.js';
import './index-c1c77241.js';
import './axios-aa1335b8.js';
import './index-6ecc32cd.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.language = 'en';
        this.filters = {
            from_date: null,
            to_date: null,
            filtered_by_hkm: [],
            filtered_by_unit: [],
        };
        this.data = [];
        this.isLoading = null;
        this.fetchedData = false;
        this.minSelectableDate = hooks().subtract(90, 'days').toDate();
        this.houseKeepingService = new HouseKeepingService();
        this.units = [];
    }
    handleSideBarToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedBooking = null;
    }
    componentWillLoad() {
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
    async getArchivedTasks(export_to_excel = false) {
        var _a;
        const res = await this.houseKeepingService.getArchivedHKTasks(Object.assign(Object.assign({ property_id: Number(this.propertyId) }, this.filters), { is_export_to_excel: export_to_excel }));
        this.data = (_a = [...((res === null || res === void 0 ? void 0 : res.tasks) || [])]) === null || _a === void 0 ? void 0 : _a.map(t => (Object.assign(Object.assign({}, t), { id: v4() })));
        this.fetchedData = true;
        return { tasks: res === null || res === void 0 ? void 0 : res.tasks, url: res === null || res === void 0 ? void 0 : res.url };
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { fromDate, toDate } = e.detail;
        this.updateFilters({
            from_date: fromDate ? fromDate.format('YYYY-MM-DD') : null,
            to_date: toDate ? toDate.format('YYYY-MM-DD') : null,
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
            const { url } = await this.getArchivedTasks(true);
            downloadFile(url);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (h(Host, { key: 'bd46bc41a5910bfd66ad1bce8c62a825fbc91027' }, h("ir-title", { key: '42a825237619d7ce00f7e26e7c3c8618970412e5', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'faa188297ef5608ec3824a6c2cf0fcad3c957bed', class: "px-1" }, h("div", { key: '62d4800b7a1c0bd1a8c8d2a6e13070acd1c47ec2', class: "d-flex" }, h("ir-select", { key: '62ee77f7ece967364b8ea1344c718ea13431c4a8', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...(_a = this.units) === null || _a === void 0 ? void 0 : _a.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })).sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), ((_b = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (h("ir-select", { key: '754f26c94742e14c8be1e8a19c2d52497d5e72f1', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_g = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _g === void 0 ? void 0 : _g.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })).sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } }))), h("div", { key: 'e01499ddae26c0cc192fc10d7b3be7a7b9f5daaa', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '24b9faeba7aa13bce3c9319bbab5ab2249b643fd', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: 'fc6d884bc06fbbf8eb1e35937a22202cf91560d4', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: 'bf8c9f681682dd77ab73fd34b0580aafb33dec22', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '73d4783322b5b6ccb8e1ffaa7afc89ccf8768855' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: '9d065b769fcac07c901854dc1a218fc618dc33a9', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: 'e1b3c93ae8747acec18cae3b7c34ab7eddbf69a1', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksCardCss = "";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cleanSelectedTask = createEvent(this, "cleanSelectedTask", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '76411317af9948b797b97275f71805f50255697d', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '9de5ce9c9c09965c254277c7ef40459e3f71dc6c', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '51439001b7eae6a8f9c6d1ca9905c26fe02166b4', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '993adf06d3920cfa92d8d45bc81ea223fc513ce4', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '230058b9731cca6c74d6a887b557b202f2c8e9be' }, "-"), h("p", { key: 'dc3e975e16dc6985169277f9e2af449d46afe814', class: "m-0 p-0" }, "Unit ", h("b", { key: 'ab6a4c8c356feb7a2fd7a5d6fd216a0aca5caf4f' }, this.task.unit.name)))), h("p", { key: '85b02321f779c2991788578ee4ddb9969d9819bc', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'cbd5c9b9216e5ee9f36aa0512602d7117a37491a', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '162d7bbf994e426176702383a189f1faa29380c6', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'ea089b0cb73d84f018b2cf7b64f1d8a6ce6e5a93', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2f7e59f53ef4df142957c3b784845a8a7ea0227c', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '57ed4db0d2f629268aeed6f4570d8ac1d0e6b028', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '78ede2798b55803c68c88d80be0450572935cf37' }, h("b", { key: 'a3779477f507cd07d415a63593efcca58eddadc7' }, this.task.adult), " Adults")), h("span", { key: '51c650dbc7dcd50b6489b2d23f92bc8e52b754a6', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '5ef5e9e03fb672332f0de3d9d02e76be5bfd1f8f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '9f31395a077c07dec34e0ff0f465be38ecfff51e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '01da822efdb0e184a994f3ad41f5614f75a0ceca' }, h("b", { key: 'ab3704aeacd291da6e25232c65d2790e8d3a80e4' }, this.task.child), " Children")), h("span", { key: '42a6064ddf19c2655d141015bf42f6208a917be9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'e1b17e3ccf4bbef416e5df3bd9aed42ae5d0c424', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '1fafd22c356b90056bea2b7be1389e98ee4ba87f', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '984749a9fc9a23ed4ab9754d6991a6e57a49ddd7', d: "M15 12h.01" }), h("path", { key: '7929bedf54c9b19f6f69d94fa79633da9703cb6a', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'd26fb007ef75bb1a4d10128081fd75f766f0ceaa', d: "M9 12h.01" })), h("span", { key: '2b4973f91a118c6f236b6f0e6182853d0e7157a5' }, h("b", { key: '1036e2051ac466402fb498c0023fc514060294c5' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '0fe4d1e2f79e11aa2aeaec51b122619d8a5ffda9' }, h("ir-button", { key: 'bc599c6c989d38ed33db1e5d385d2d8cff1a3069', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
};
IrTasksCard.style = IrTasksCardStyle0;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%;flex:1}@media (min-width: 1024px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";
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
        var _a, _b, _c, _d, _e, _f;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: (_b = housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => ({ id: h.id })),
            cleaning_frequencies: (_c = calendar_data.cleaning_frequency) !== null && _c !== void 0 ? _c : (_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.cleaning_frequencies[0],
            dusty_units: (_e = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.dusty_periods[0],
            highlight_check_ins: (_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.highlight_checkin_options[0],
        };
        this.filters = Object.assign(Object.assign({}, this.baseFilters), { housekeepers: '000' });
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }] }));
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign(Object.assign({}, this.baseFilters), { housekeepers: '000' });
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }] }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (h("div", { key: '4a9fa7faa0e97a4e20769b4a73dd31e7d39e44c8', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'e1b40addbe71d9cbc46e4b3df7a66a77fd8cd70c', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '8f7937251eb667166ce590e5c283a86308a27e58', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '13381ce7a9da0ce7b916bb4583bf84c61de2d5c4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'b4b55c6c3b05b61aa194200f81726ef4e47e1249', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f4a0d2aff3d006bb3fc32702f5bc3cc55c68fb2e', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '2b9093e4eed418097bcc456035e1c1e3790f6174', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '2fa5bddf165b14599345311287ac18ad34f13663', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'a77790bf984f4e42c1d6d51e4013789ff499ef0d', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '1abf0d5da87b347ffb6483d54c6bbafd474d87b5', class: "pt-1" }, h("p", { key: '7092676ac06b5edf6a275645d040480cc1baa81e', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Period), h("ir-select", { key: 'c1fce38089954dd1840713968aefdb2c53e9dfb1', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: '8cba1b675bfe4691185274f5f29f0582a4878574' }, h("p", { key: '8108d284fb8a8e8b530c74f42ec103627b8c0843', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Housekeepers), h("ir-select", { key: '4c77da6e952db4454ae1b236898b4a905b273d5b', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
                { text: locales.entries.Lcz_Allhousekeepers, value: '000' },
                ...(_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })).sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                // if (e.detail === '000') {
                //   this.updateFilter({ housekeepers: { ids: this.baseFilters?.housekeepers?.ids } });
                // } else {
                //   this.updateFilter({ housekeepers: { ids: [e.detail] } });
                // }
                this.updateFilter({ housekeepers: e.detail });
            } }))), h("fieldset", { key: 'd7535f424a689f86f196e6f3f56c977b19bfd888' }, h("p", { key: 'e4be0322a8ea808ea7d49d9ee620b9f686012b81', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_CleaningFrequency), h("ir-select", { key: '045275de4f731bfd84ee111ebbe3a487851350f8', testId: "cleaning_frequency", selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.cleaning_frequencies) === null || _h === void 0 ? void 0 : _h.code, LabelAvailable: false, showFirstOption: false, data: (_j = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: 'd9d5c63d575fb049a2b60d91c546adcd3154e905' }, h("p", { key: 'ee80a536b99e19884093bd17534f7935e36c3ca9', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), h("ir-select", { key: '0ee3290604af9b54bc03951f9a4abe33c060a3da', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_l = (_k = this.filters) === null || _k === void 0 ? void 0 : _k.dusty_units) === null || _l === void 0 ? void 0 : _l.code, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: 'ed4a369c0bd469335bfff33b46dc891001ea7dd2', class: "mb-1" }, h("p", { key: 'cc7dee0793a87d3ddea722ae6026d32e5181dcc1', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries['Lcz_HighlightCheck-insFrom']), h("ir-select", { key: '939f5b18e0f7d7fe404e482bf94cef9f4dadfb02', testId: "highlight_check_ins", selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '725ca63b6139bfdde2d1a9b185933bc204c0da06', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'b75ae27b43c6e3a5079eca0cf6e5e7a4c7d0429d', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '7aa7b47ea0e71da2bc38814eba5172fcb635eb57', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h(Host, { key: '8faaa663ed8052157373a4a7bc22eb04d32206da' }, h("div", { key: '04c5470859d5261d3cac9e15603a42c260d542bc', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: '1ed265a702d102e80c3e4d61984778948ed5c01f', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: 'ceca710900fb5981f3af313834eaeca10c3df2dd', name: "search", slot: "icon" }))), h("div", { key: '466193ef6c350618f786552ccfef3a893b7219d3', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: 'e4b4131d3bcb316f744fb1226959dcb2414850d6', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: 'c1f2b72f4f3bdfed2fb5c8e58da0afc34dca2825', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '05f6543f44f70b5b9e39fd8b23317b3b8562cac1', class: "d-none d-md-flex", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = createEvent(this, "sortingChanged", 7);
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
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '7f17612699d841f8d7870fccfedbc619df272fec', class: "flex-fill" }, h("section", { key: '46e6e95948a364821c7b3ca36265ca4fb1ee6224', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6d999223fe9134704bf0a731a31a9407e570a033', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '7bd2704526dbcd646956ec6bb078657f53955c30' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'bd36bbadae2538a90845aae8eda6f3ed8729f1a4', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '75a0f0703cd9ddc738a3dee9e3137d8e7924285a' })), h("div", { key: 'f9ddad92dfc07e93205100fea98b5d97534759d7', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '664a9b8d5a9dcdec05eb96ba0ce1cb5306f5380c' }), h("div", { key: '598f8fc1d1c1dd1a51fbbd567244fbbda5a79142', class: 'table-responsive mb-auto' }, h("table", { key: '9c5980565fbbd2f3270f9220f95d5565b69933cc', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '87b1e5e706b39327410e9f02d90a713c71ae7b22', class: "table-header" }, h("tr", { key: '328892a3f976dfd551eff74d62b72dffa44b4fad' }, h("th", { key: 'f2cb9579c5f5c80cfe63ff694897ec9f132f5b97', class: 'task-row' }, h("ir-checkbox", { key: '4348d6134ef7619b5c1f7f89e55c516f56c8afb4', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '9e1d56a82a65027441f80eb2d3129d9016ffcb98', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '69d37e9164700ecf62ac61941be4fe970ca256c2', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '3841bef1f0f9263780127ba1fc6538f83addf071', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '87f821e58687da02980a822c0b3470824a0ad418', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '5abcebc3164616953d8306d7bc09263d96ccf37b' }, locales.entries.Lcz_Status), h("svg", { key: 'dc043d91005f4c0a90cb52741d5d3ce5db5490f1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4b2509829c6f454855ed9f52820232661dd8ee86', d: "m21 16-4 4-4-4" }), h("path", { key: '2a8e9449b086fa759f4656598b87878913f40b8b', d: "M17 20V4" }), h("path", { key: '692ceadd1fea9ea54a40a1a18ef49c48bf982722', d: "m3 8 4-4 4 4" }), h("path", { key: '35333a2f080c60dd76131c1c5181bd9bbcb0e6e1', d: "M7 4v16" })))), h("th", { key: 'db062e753a886419f7686c5f6f7b342e861c9e1a', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '2d950de98fb3ff774ddb51ea0862812ee00db048', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '6443a7866a3df1722fa2bb71c69799f8efee3dba', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'e53a4efbc4a627706239963e2c1b26afae11a775', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7b6bc171a825f7dbd11588d9fbb886f82693d415', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '7112cc00fb0634aa8ef9e2ccfbbc3ef8486f4260', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '33c8f1507dc5ab0554da3f5e5a263ea23ed77542' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '80fa6642ee9a602990a05b14243970c86fbe78c9', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'd038cf1a236a434f92c62ef27bdd91a28c1cd673', d: "m21 16-4 4-4-4" }), h("path", { key: 'd13d12139d6e0dd4ef01adb1aa2b249638e047b2', d: "M17 20V4" }), h("path", { key: '6b9bddd730ccbaaa61381325b7f4fde9f9b7efe2', d: "m3 8 4-4 4 4" }), h("path", { key: '76f0756d1d74c36840df92a7cb62fb27f3d061c6', d: "M7 4v16" }))))))), h("tbody", { key: '39e554364b29053038b343745606df1d2a4f7bef' }, tasks.length === 0 && (h("tr", { key: 'ddbabd029be36a99aabb4eb65301f770967d7cfa', class: "ir-table-row" }, h("td", { key: '60f3de535049d1f647bbd4feabff7218ef24064c', colSpan: 9, class: "text-left" }, h("div", { key: '9aeab0fa1c1b7447372caf88364e118b0f6128cd', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: 'b926faa8038104c2d6d58092a481bf33526b44c2' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales.entries.Lcz_Unassigned))));
            })))), h("div", { key: '85b08d7799299814091d43434fe6aceb257468a1', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '92da910818c5c9f4c4fa33a1f5946ddef0ff8eb0' })))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
};
IrTasksTable.style = IrTasksTableStyle0 + IrTasksTableStyle1;

const irTasksTablePaginationCss = ".sc-ir-tasks-table-pagination-h{display:block;margin-top:auto}.page-item.active.sc-ir-tasks-table-pagination .page-link.sc-ir-tasks-table-pagination{background-color:var(--blue)}.tasks-pagination.sc-ir-tasks-table-pagination{display:none !important}@media (min-width: 640px){.tasks-load-more.sc-ir-tasks-table-pagination{display:none}.tasks-pagination.sc-ir-tasks-table-pagination{display:flex !important}}";
const IrTasksTablePaginationStyle0 = irTasksTablePaginationCss;

const IrTasksTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = (_b = (_a = hkTasksStore.tasks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasksStore.pagination.tasksList;
        return (h(Host, { key: '0df719ddee9590fa0c7f14bac4708579f9d0a09b' }, shouldLoadMore() && h("ir-button", { key: '8c7911b1ff72d229359e4a5f757fd045f58a4d3e', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: 'af9cd237a589c2455bdc89b3ce6c866a115c1759', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map