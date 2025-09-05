import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent } from './index-60982d00.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-e63a6d61.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import { a as isRequestPending } from './ir-interceptor.store-2beee824.js';
import { l as locales } from './locales.store-629477c2.js';
import { d as downloadFile } from './utils-82d70d85.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { t as toggleTaskSelection, h as hkTasksStore, b as updateSearchField, d as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, f as getPaginatedTasks, j as getMobileTasks, k as updateCurrentPage, l as updatePageSize, m as shouldLoadMore, n as loadMoreTasks } from './hk-tasks.store-73b92191.js';
import './index-c4cf83be.js';
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
        return (h(Host, { key: '28d511595d75564e9456fb7c753139cbec029c5d' }, h("ir-title", { key: '0cacf673c4619fe91cead835764cea99ea58a16c', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '0b13926c4c6f5dd16026ea2bdc5152a5e453a2dd', class: "px-1" }, h("div", { key: '1625a656afa0b2c6975460772f92204e3b8b2b8b', class: "d-flex" }, h("ir-select", { key: '296fe19a165b3ff4c6a6733182469c327969788c', class: "w-100", showFirstOption: false, data: [
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
            } }), ((_b = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (h("ir-select", { key: 'e6f9e1cfbe0ffc62a83911a4a3dfe20af0675aff', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), showFirstOption: false, data: [
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
            } }))), h("div", { key: 'ce32c570975dde0fda898d4849db5e9db2db5578', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '50900f4ce46345f730b118cc8b8868f6887f3a0a', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: 'd1367fda17997588406b4b671dd8db9079f7b77b', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '5e2dd348b320d8cd77fca72f91b86bdef6d551e0', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '8210183b3013b7493f094154dcb31efbc574cdc2' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: '6534414b24f2809d54d7c1e4cb02f2dca24bb351', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: '88ee9741a553d321c4edb4916f50f59e860cf84c', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksCardCss = "";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cleanSelectedTask = createEvent(this, "cleanSelectedTask", 7);
        this.skipSelectedTask = createEvent(this, "skipSelectedTask", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '2c2a90c5f0e152415b88d90900f3fa883a28a9b5', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'f7342e7d625c188117f763e2fa949880d69c996b', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '97d08f20418024ecbef966fcd3dc0309edba615a', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'a226ce3b8ace5510cdfdafae737293d17454a9d8', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'f5e46fa75f5ce189f00677a274eb47a01bc39300' }, "-"), h("p", { key: '083db266888bee68a53ea289bcdcdee2b6a64018', class: "m-0 p-0" }, "Unit ", h("b", { key: '1c2c11953a83aad97c8e63c726ad9feb566702ae' }, this.task.unit.name)))), h("p", { key: '246f209c51a101ac17ec372658b14b29af6cd1ba', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '0371fc4a998fe27e1e7bc928ac39979fc609d74c', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '0d8d580605974633c1b5d2b8d2a0c2565e17a5b4', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'e99a2f917c54ff9bf08cd7715e15b61cbaf8e61c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '77ad7d9f920797350a7313b7e496c22366c39acd', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'cdfbe19ae719735ae96da42650c20599e24ac9c4', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '8b6dac76968024b03e4d61cdccae826bcd5272fe' }, h("b", { key: 'ccc2614c8909a93e1ec9e071e5fc7ebf92c0941f' }, this.task.adult), " Adults")), h("span", { key: '089a23dca01d9c4f5ef12bc67d4eef265dcf33d4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '4a56d3a19db5c40dba460d804ea1e0d6f8ae7c4c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '20d50b78f591d9a1fc8adc0ff8ac1f65cb026102', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '451bb262c50085d3ee5957e1c22d3fd32588c356' }, h("b", { key: '0218f4c9418564b44f364387676c4f7be706128b' }, this.task.child), " Children")), h("span", { key: 'f6d50ac9d4ec3628d0df7de1b459f0c9d90c1dbd', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '057152826dbcdb0a2ac3c43bf57581ba3bd5f119', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '69aaffed620effee83df32ad9f61e0c5a605e6d2', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '37f317e7d74025c34e51720abee38a58de42116e', d: "M15 12h.01" }), h("path", { key: '5f16e3c88bd52b6314c2cc5c1f5b66d26f306796', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '924fbf5be6a36d9fe366a088912f3ef372fe8bcc', d: "M9 12h.01" })), h("span", { key: 'c9b854a1949ba44fa8d8899bbdc2dece8bc45bf4' }, h("b", { key: '4a2cdff2a8bbeec5eece241f4ba0672553722c0c' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '03468ff177e819da336d0e6ef6b9306e97d6bd76' }, h("div", { key: '045ac37863aff2a59d36eaea63e266dc573335ea' }, h("ir-button", { key: '7b6db0ad47f48eb776b2d70919437511b888cd8f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '46d15702e19c295b78fd18804a9f3b92a66cfab6' }, h("ir-button", { key: '22ded78af7ea6fd8a0b9812a2b49bd1277ef377e', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '8adbdea194476e2e4069ad54ce5c66ce65a2acd2' }, h("ir-button", { key: '228783de2763cfc3589ac440a9165581299e6b30', onClickHandler: () => {
                // toggleTaskSelection(this.task);
                this.skipSelectedTask.emit(this.task);
            }, size: "sm", text: 'Skip', labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
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
        var _a, _b, _c, _d, _e;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: [],
            cleaning_frequencies: (_b = calendar_data.cleaning_frequency) !== null && _b !== void 0 ? _b : (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_frequencies[0],
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
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }] }));
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign(Object.assign({}, this.baseFilters), { housekeepers: '000' });
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }] }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return (h("div", { key: '590f95bb1b66707323747749daeb2debcab5bca0', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'd9f2d5ee13987fcf525491e8d9254e8ec5628e0b', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'e26f699cd153343fdaf5960b7a8ee011fbfffe11', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'fce0d0210e3dd15c3171c40d78ddf0a0a12c1a32', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7c05f69ee7ba88a5a6d3f382d1a15e2df0820928', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '83cb413ffccc1594ebaba803950ec4b9df5a42e5', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '538a6e768d55807460c815ef1b37fbac1012b2c7', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '154d6dd1b27e44951d1299ecda529834e80a5ea9', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '25c1beaee5f55074920fe26f44f78bdf05ed35aa', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'fd27c393097e68a8c509c2a653f4e90553f46b1d', class: "pt-1" }, h("p", { key: 'ad9b7f5b6c7479078265a4e555cd1c4e2bf4f66c', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Period), h("ir-select", { key: '3805c1447427cf5c45fe5d737a31e2bc6fb073aa', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: 'e7330c21b26c7f16adcf7150bc8078d03a499870' }, h("p", { key: '7d42f59b9f8b8640f770fd598b369477170e118d', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Housekeepers), h("ir-select", { key: '268a9289b088cd3357836732b028f24a8b05a381', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, showFirstOption: false, data: [
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
            } }))), h("fieldset", { key: '050790c80f0d231343fcd594659ee1ee56c0d3b2' }, h("p", { key: '41aad4cd26c008651287a6310b0a89b86408e2d2', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), h("ir-select", { key: 'bab389bdf60cbc7f207c8aa0ba19474033852a2f', testId: "dusty_units", showFirstOption: false, selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.dusty_units) === null || _h === void 0 ? void 0 : _h.code, data: (_k = (_j = housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.dusty_periods) === null || _k === void 0 ? void 0 : _k.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '67fdf36587a0f0d4002598eb558b2cc2206a626f', class: "mb-1" }, h("p", { key: '96405bbbe10409af484c5ac5a56fe6fbc2ee24b7', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries['Lcz_HighlightCheck-insFrom']), h("ir-select", { key: 'f9a8f10fcec8b0085d347799ad614c9d2f23a48f', testId: "highlight_check_ins", selectedValue: (_m = (_l = this.filters) === null || _l === void 0 ? void 0 : _l.highlight_check_ins) === null || _m === void 0 ? void 0 : _m.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_p = (_o = housekeeping_store.hk_criteria) === null || _o === void 0 ? void 0 : _o.highlight_checkin_options) === null || _p === void 0 ? void 0 : _p.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'b9a73e5b927e59ea5ab892648d80fadc67fa6a99', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'f3792874558e53fc3f010a986db0b21e18188a2e', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'acb98cfb879c6addec6c150af6477e621bd8e949', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}";
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
        return (h(Host, { key: '80850473e6294108fbda39a41f05af7aec055da4' }, h("div", { key: '5fa084b5e55001e4be3b08bc40e8cc220831413e', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: '1b28242876f1d5805a8033ba28c6f7461895ba4a', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: '80203b45497db83d0b2486a4da8cefec820dec33', name: "search", slot: "icon" }))), h("div", { key: '04dcf3a9d0a4d3ce7b22ed68220c2b10c9276de4', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: '89c5a89bf8b70803e5e97891011fc880c14a3aae', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: 'ae15e41171720824addfbc84bef21c47a2c28c18', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '1ccf1704ce6b58e4f622506b34f705c42932caf4', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), h("ir-button", { key: '27bba48b7f1b45809bf8cb3ddbcd7eabf779c474', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Clean & Inspect', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'e827399014881c6c1cf45ae13af9b61f622d120c' }, shouldLoadMore() && h("ir-button", { key: '704976a5c300084ca37dc89084da4436f5cf61da', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: 'f6121b31c21dd69eb06ab394a48adef0d4a6c938', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map