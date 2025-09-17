import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent } from './index-60982d00.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-e63a6d61.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import { i as isRequestPending } from './ir-interceptor.store-e5fac1de.js';
import { l as locales } from './locales.store-629477c2.js';
import { F as downloadFile } from './utils-82b40e97.js';
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
        return (h(Host, { key: 'cf6fe96760d97c1fc742b84af7dca154684b8349' }, h("ir-title", { key: 'd032dacde2c4078888ba6318411aaf8a272f600c', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'b6a24e9e2111381dd6f96e0fda61206f8fea1771', class: "px-1" }, h("div", { key: 'a890b46170f7380be8b231caf80d3e2825608cdf', class: "d-flex" }, h("ir-select", { key: '8998502abb6f67fa947e6201e4542c77001bb811', class: "w-100", showFirstOption: false, data: [
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
            } }), ((_b = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (h("ir-select", { key: 'bed062d971ef1bffe513dfb714ab2a04570aba3c', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), showFirstOption: false, data: [
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
            } }))), h("div", { key: '20ba0339d6b2f7b52849ee892754896d21f00b50', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '07cefd5acf3936cc666cebdbb3c7b187916cacac', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: '0aaee4a06ddbc80e208cfde873f19609b27ba5e4', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: 'c15187596e08e6a165dcf5cf79f693afda545d00', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '811a46c18726db343148bc67abeff20b399b47e2' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: 'c98258e13333d7ec01a0cb796f85fe2942d4f5b9', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: '801540424efbeed360136895041d38845ddd0e7c', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (h(Host, { key: '77fe8363ee946b8d8a06f04bced4d0a875d54152', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'd682f0ec1d1c05886d8a2e14355c6af9fe6d7cfa', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'f673ffdd47dd857bb266bc341f61e742b23682c8', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '5a9f54c9372bca841d85067b1a9941021f7ba528', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '8972d7fcc356d3d830e3b7eb8b62370aa02e3d77' }, "-"), h("p", { key: 'a67f7e9525690d850b32b9c4560ec22b78506a3b', class: "m-0 p-0" }, "Unit ", h("b", { key: 'bfe6e2623e8d12e74adc443f36f3ea51499509f2' }, this.task.unit.name)))), h("p", { key: '6ece422c5e5bbdb8fb04ade28b7ec15d0c5509bb', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '97b0ac9dffd34c9cd7853cedc89781767cc23959', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '9aee8ef33f8dd07ba80dd75b3ad616b0d73b7302', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '239526763a50ecf9b905db92133beb550a35bff7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6439e287a3f024ec14c34a18fcd884eb9678cecd', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '2ae44c01caa872d86542348511dd4b8feca44af9', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '0decf61b4e87bac2bc50991373f6548af62b43c1' }, h("b", { key: 'c0debaa81e44a8fb0b9fb368074ae9a111959059' }, this.task.adult), " Adults")), h("span", { key: 'ae1b8ca93bbad1d1e65475743fe6357c21f94745', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '93c90ac0525bda24dcec4aa54c2a13a4435f4b47', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '1dbf6ada050d59d3bdf70c4d1e95eea02c93f1d7', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'd09d9c7498633b98f1637d65048a05ccdf3e06bc' }, h("b", { key: 'b3d64c92148c427d7d4e382d7c8ef72a5c638b72' }, this.task.child), " Children")), h("span", { key: '52fbace6db6148b60e00929959b0b572b98fc7ba', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ff45f89ecb46610b836fb774871e21afdae4cf86', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '797e2f5fddfb7d1d777178af4f5787df93e9604c', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '604f5d73309d693dd592f269ce8de33cfab1e1a2', d: "M15 12h.01" }), h("path", { key: '1ba45e0275aaa80a2db2292d098750f624dde4b9', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'c073479968af63b33d0b287894d263f8baeeedde', d: "M9 12h.01" })), h("span", { key: 'ceec4413267923250e950a2c2ac5cf8e6790ffe9' }, h("b", { key: 'ad668f68c5a074c629938bf529a86d28456a7d87' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'e4ef2b2cde76ef54fc432e0b1248d58d8a32a07f' }, h("div", { key: '17d6b7b1335578a70d7629a3197f8b3a181ec4a8' }, h("ir-button", { key: '465e1d67f11dfce6f2f560d9d3d4feb32a81587f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '8b2cda5f2dddc2991dbb7929ad22806d2dfa2590' }, h("ir-button", { key: 'fd498b5855d661c884a1150e96b660936c1fb3cd', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'abc63c95b641e965178638a5e35d983e07ad3462' }, h("ir-button", { key: 'a86a1df8ae84ed5a9afa2bb89197142d14ae51d0', onClickHandler: () => {
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
        return (h("div", { key: 'ab70cbf0602204ef94d740dfb2e5d3775db31318', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '1c2659c43f2ae4ee9551e5d2b64ab546be1a4f12', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '332afbc6a8f652df893e2c5d67d603337544a27d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'fbd3338dacb4e314e479f750cb9def5a5aa27c94', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'c2b0cf8697931718cf39a51b7c38782412902fe7', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '18edeffa0e8c028a6f1679075cd952f6dd7f8566', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'b76d3ee91b0815a8420a63d8d9b46a4d1182131f', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '19c61e9c9c2b13f8b666c15875f54a3a9fa51ac5', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'c9799486b837fd3901cc43784cf6088f5b0e7a4d', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'ff3354fa7af7ca1ddce3ac35b4c81a94c4bb4b95', class: "pt-1" }, h("p", { key: '9386a6ce83b03b14083f6f9f98d00b0c3c832f51', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Period), h("ir-select", { key: '6adbc3cc507d0981e25e593cc6e77539dc083119', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: '37dbe6ee80b68d87fcee2e4e8c66d47beecf5973' }, h("p", { key: 'e9fa1c11ffad23d3f68852ef36b30f443e72ccb4', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Housekeepers), h("ir-select", { key: 'd1dd4e261d9625c9d951cc0650ca8c99d7d9bc82', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, showFirstOption: false, data: [
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
            } }))), h("fieldset", { key: 'f8bc1d717d96afeec152b09907e099c3522f1839' }, h("p", { key: '95aa85967e2c6c7f62c88863621309f39a4b9a34', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), h("ir-select", { key: 'e4f63612f632857ff99f5aa4ac858bd5c3a38f6a', testId: "dusty_units", showFirstOption: false, selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.dusty_units) === null || _h === void 0 ? void 0 : _h.code, data: (_k = (_j = housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.dusty_periods) === null || _k === void 0 ? void 0 : _k.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '350ae1c0d29b4be1f6e9bd1fb185a6b57de9d686', class: "mb-1" }, h("p", { key: '5e41a05ed955c69dcf07a6727e17c54fa2a48704', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries['Lcz_HighlightCheck-insFrom']), h("ir-select", { key: 'a93d25b3d4cc7be0cbed38a9399469d02352a780', testId: "highlight_check_ins", selectedValue: (_m = (_l = this.filters) === null || _l === void 0 ? void 0 : _l.highlight_check_ins) === null || _m === void 0 ? void 0 : _m.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_p = (_o = housekeeping_store.hk_criteria) === null || _o === void 0 ? void 0 : _o.highlight_checkin_options) === null || _p === void 0 ? void 0 : _p.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '88c3e10d3e7ae93f5e30b63db938ee10f7ffb485', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '180e3ddb93ae89fead9d0e7a26be4262232768d4', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '63c36d6e86da30dd91826594201d8f615193513c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h(Host, { key: '3bba2c2036c9d84d4fb312f699818db8688e318a' }, h("div", { key: '4b7263c17373439bdcd306490673b5d327bbb5d6', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: '0eefe243ed33f1fc6ba6009601cf0cec2b00c665', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: '887eda923f8c90e2c9e4029afb4894bed7bd4695', name: "search", slot: "icon" }))), h("div", { key: 'e650693d4555c3cc093ede95dba90296588dd1cf', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: '8efa7496b42a17219ceeed9035b4d45d46b85b74', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: '8d520340c78f19e2bb2f1318ace6eae942825469', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '1bb0b17d7bf89c83cd21d0df7f9eef2d36ee61bc', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), h("ir-button", { key: '82b092845a868ff2ce2f8fd888a94a1116c422ba', class: "clean-button", onClickHandler: e => {
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
        return (h(Host, { key: '2115e75071cd97afacefd60a2e902eb117bc3a3c', class: "flex-fill" }, h("section", { key: '5e45c637385b4f7cd0f43409e877fcf1784a3c92', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'eb7ff6efdd5fa3816e40d649cc421d8fe87001e3', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'c12882cf09da92c0db0afb19e4ceffa2e38383a9' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'ff70ba00209dc6e4cafb6e3d56ad6eb4243b0698', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: '1eccd9a3ef2e4aa29082060c609d39adfffa4bc4' })), h("div", { key: 'c151012c42a3c279064690962bcc5dd2e35de338', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '142e7b52f2507c84d531802ebb01fc043fc10b5d' }), h("div", { key: '589cf2fed3b6eddc6569973d71e88ec755bb8d54', class: 'table-responsive mb-auto' }, h("table", { key: '842663905c6383c02bdaabe668e1ed293f2b9965', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7c393b8c56dec2d9db0859918ac5458f4c087754', class: "table-header" }, h("tr", { key: 'd963b54db0f796797a1a22d1a9c443905d4985e6' }, h("th", { key: '5f48e5b6202131470bd7dff6cfaf68504f4d1612', class: 'task-row' }, h("ir-checkbox", { key: '1db02538d8c8a496e2086bc84d3a304e01dc0bc0', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '0a5ad5dd792a6d5d7afc5914b77ec4fed3ce6b01', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '274db5fed768fdc9fc82118aec02114a02adb9f1', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '8f10399811825614634c985a22c6015f62f7ce19', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '89ef861564ec86e5e70ccbba0d028cfaf186e7c4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'b6d605d016796d05b4dfc0c9e7df55e7f4b1b389' }, locales.entries.Lcz_Status), h("svg", { key: '831a162d700f9c7d658f6f4c124c7467fe56e1f5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '61a718a40598d79ddd56aec33269036e2333fe24', d: "m21 16-4 4-4-4" }), h("path", { key: '3054f9d845f04165568260641c361ef39843400a', d: "M17 20V4" }), h("path", { key: '432b4bd11f6e60528c3127a55cd72ef63620e694', d: "m3 8 4-4 4 4" }), h("path", { key: 'd5021dea62f5d0f7a002e4abdc74d849103f4d4f', d: "M7 4v16" })))), h("th", { key: '5e93c1a827278e837d1d89d1cb09756f0876d585', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'eb1c80318c26216b05e906979d72b0eccf997641', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'ade5926827c0670f6a3024c3154ba7b0caaf4f61', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'cc4b0a3366c5b0925739ea6140c52c76733b43b5', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f28af2c5e2766578785244b47a02482d858bc6be', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'ce2dc235694f480371aa3400e28ed8027e9eea41', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f6ddd451793131f15c4d1efefba05d44f59f0cb3' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '7214e88eb1addbd3375ca505fb085cb3de15763b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '08cf60717b9a7ded518974bb869bf08b89e0917c', d: "m21 16-4 4-4-4" }), h("path", { key: '14c762c4fd11f9a065a91146755ad045457712fe', d: "M17 20V4" }), h("path", { key: '0f573a538fd5962ea355dcefdd6746e02a445a31', d: "m3 8 4-4 4 4" }), h("path", { key: '75d93228f7e19a199d704fe340a68f69c5785d5f', d: "M7 4v16" }))))), h("th", { key: 'af7f2c80c9f2b2b4c56e5d69ae1ba2c5d86efe17' }))), h("tbody", { key: 'ca23eacdf637abf3887b544fe87d8ec8d65fc39e' }, tasks.length === 0 && (h("tr", { key: 'a100eef679574a18fa2482a378a6e7a4d5a6bf21', class: "ir-table-row" }, h("td", { key: 'e7530b74e118949d082edb92b3913972f7081c18', colSpan: 9, class: "text-left" }, h("div", { key: '6384c20acf25967bddbf8f6dd2d15251f12b8baf', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '17d467f2688427dac5157ea44f03754647bbfec3' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'f038e9125b79f57bf9a242c53dfbf3b5a1953a6d', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: 'cdcd198d828f237b74fcb80e4249e8bded62eee5' })))));
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
        return (h(Host, { key: 'cbccf2aec66c81b9f73250c47fdd71a39ef1ae13' }, shouldLoadMore() && h("ir-button", { key: '19ceb60a04ea143a95f3f6abe58550ca27733ed3', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: '4ee30342bbf8561b8628a161ce7b0ee56d964bd5', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map