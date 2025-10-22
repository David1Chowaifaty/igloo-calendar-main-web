import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent } from './index-60982d00.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-e63a6d61.js';
import { c as calendar_data } from './calendar-data-462ba979.js';
import { i as isRequestPending } from './ir-interceptor.store-e5fac1de.js';
import { l as locales } from './locales.store-629477c2.js';
import { N as downloadFile } from './utils-3885814a.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { t as toggleTaskSelection, h as hkTasksStore, b as updateSearchField, d as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, f as getPaginatedTasks, j as getMobileTasks, k as updateCurrentPage, l as updatePageSize, m as shouldLoadMore, n as loadMoreTasks } from './hk-tasks.store-362112a1.js';
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
        return (h(Host, { key: 'ea352af60783e151ed0d948c571833d4fd5f7750' }, h("ir-title", { key: '3e5cc1080aaa2a1a5789c715cb7c63deb90a27c4', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '81f666d94f0ac234fea194e39d4c24c59b799215', class: "px-1" }, h("div", { key: '34c028eaf4d816a0cb6a0151f4e4c3a4129e0dbd', class: "d-flex" }, h("ir-select", { key: '3da44a4844c5214ecff0b63f7209f17f3776e848', class: "w-100", showFirstOption: false, data: [
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
            } }), ((_b = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (h("ir-select", { key: '14afc248dd35bbf1891d87cd87fd41d062da6af9', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), showFirstOption: false, data: [
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
            } }))), h("div", { key: 'db1b8210b18233e446575f403f4326e5f83b5a0c', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: 'e67c6715f395fe051cbd39573ede1476a1d38388', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: 'fa1206509ec460f8e7cafbf6338f987be18ba868', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: 'cf4f9ccdf4eece64003d45a0e0a18f5ff4d3db02', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '7a930c9e6e0077bf74f60d98a15357bdc0cdab97' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: '61b50226d05c1fe5344876969133808d1ed72ae8', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: 'a1101fe49a8716ec2a12a6f73a55bc46b9c27097', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (h(Host, { key: 'e9565f68d848c69bf2b6586e9bd4f75cfaf441fe', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'db074c01b1c0ab74ed8167afd67cc63781e9dead', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '6668a87a9d4ab803db2d0d580f5275ebcf7ed9fc', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '24dff69b69ddddd42ae26088219399d8358ea5ca', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '1924fdbedbf84c74617d27b24fcac7920c669149' }, "-"), h("p", { key: '46b19c484cb6e7a0fe7a55114673dc8f8fa6811c', class: "m-0 p-0" }, "Unit ", h("b", { key: '6d0a61b1176f5dc90de0a0eb45363b49e1690e48' }, this.task.unit.name)))), h("p", { key: '75c8bee907412cfd0ffb38999ca12974b3c205fd', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'c6fbbd5edc293918b09a9ad1f5d0e44e2adceabe', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '8ed6733eb72ef117777e6340c83cc3563a01986f', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '833b2b9709769bf2f940dce686dbad4e9925e4ed', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '914828bb591c609e4a0ffbbfaaeffa7762fcc37f', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '76534d690e4233c3095f42aca93371a5fb1f30e2', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '7b23ce0e156c98262cb5e877129c7d2d0088f9b4' }, h("b", { key: 'cad040d8e3779d1379112dc97070c39992ffd345' }, this.task.adult), " Adults")), h("span", { key: '6959839850de8eeec3cfb9292ee14213dcde1c4f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd7ff1522a7db650bb0a6e3715fd3f3cdb4169210', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'bdb569f764d06c0e233cc3ed3b53af3e0ab67a2f', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'b3bccd2755182b26a18c1d6e166f62c9ccfcd880' }, h("b", { key: 'aa9c3b1afee203fbdfcc5268f2a4709ecf8f22a2' }, this.task.child), " Children")), h("span", { key: 'e25641d711dd121b072dedbd0844ac7335c7cb29', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '06313093848edff878345e486f692d9ee9916725', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'f3ff74ea780516a62496d7e382f12e3d01105aac', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '3ade315f6be8849530faf5e012473336c1e1540d', d: "M15 12h.01" }), h("path", { key: '83d4892cd9fda7db25a40d878fd6eacb8bb67cf7', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'f6b0dbdd082b8aa33785a4580347db490b1ca3a2', d: "M9 12h.01" })), h("span", { key: '2c67c6e1ae20966615b492e64cf1973150d3e80f' }, h("b", { key: '1a3e447f0a17968d970923f17b02c981b373fdf0' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '27f014f4a5ee13e62b6de2d7976667ce2f0c8a4b' }, h("div", { key: '296c0e3e7137b35c7251318ef3814f28bb7aabde' }, h("ir-button", { key: '86b7c5332d0f5c46e75c9bd0a47c2dd9865a1ae1', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '38e129114596094953aa45a9134d0c542f478709' }, h("ir-button", { key: 'eea579613b1f086f3877f33a1cb618f7b895850b', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '4ae97273bffe9cdee3e35c1c9d869144b7587a7e' }, h("ir-button", { key: '17a81386530a30533bfb7c61ea997193ae0dd933', onClickHandler: () => {
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
        return (h("div", { key: '6ac9fe96531de31446e5e13555a39709f971bec4', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '68a03645c4527e2992af7b12c241fe95b5cca1af', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'fd163bd97da1872b5b7a45a0c88799666da16139', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'ce35140441ba4958fb5dc2bf8dbf3f0256498077', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '40c84af9ab78330f68e3b690883f799514a3f6d8', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '860dd3e4cd804791fd79946cf8b30a3fa9ccb5f4', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '7596a6a1b7129d31e6712d29cd3ff9cba7d1dd99', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '4968a6c2dad9ab3ea995f11978654f1c010d7c0c', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '9aa1eaa8b32572475d20ee9ac7e01569bd29c614', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'ce2b55d2027447ce33d427ca4ef2f1bc5199d8ac', class: "pt-1" }, h("p", { key: '8431b0d6b3e369597d1594cf581d351e45513383', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Period), h("ir-select", { key: 'd0592856e17fd01201903cdd98d7b847afac7fcb', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: 'a9ac594f7fa7b7c0dff520cf5403866632151fcd' }, h("p", { key: '08c8a9d9331668450603280f93823b2a06afef07', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Housekeepers), h("ir-select", { key: 'ae7af65d5b0caade9c1959dd37be7159d9d826b9', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, showFirstOption: false, data: [
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
            } }))), h("fieldset", { key: 'b798843e86c5a63fbd2eb63021d93574c263c0a2' }, h("p", { key: 'a3b452ec1c181a1524dc3b46a380b0e9f156a8e8', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), h("ir-select", { key: 'd796377a30a6595954224a01bba9f3b7036d4546', testId: "dusty_units", showFirstOption: false, selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.dusty_units) === null || _h === void 0 ? void 0 : _h.code, data: (_k = (_j = housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.dusty_periods) === null || _k === void 0 ? void 0 : _k.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '9a82c176f29c230563f75cde51568bb610f0086b', class: "mb-1" }, h("p", { key: '52c6fc22a2f3ec1decb2fe4f50bf3228b51da6a1', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries['Lcz_HighlightCheck-insFrom']), h("ir-select", { key: '1d76df8ed18a043999886913a7e9bd6af39162c8', testId: "highlight_check_ins", selectedValue: (_m = (_l = this.filters) === null || _l === void 0 ? void 0 : _l.highlight_check_ins) === null || _m === void 0 ? void 0 : _m.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_p = (_o = housekeeping_store.hk_criteria) === null || _o === void 0 ? void 0 : _o.highlight_checkin_options) === null || _p === void 0 ? void 0 : _p.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '5a075bc641e81eb01593a9091a67ffcb106a621c', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '51a3011d25c73e886ab3d0c5e2cdaa5b94bf0935', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c298a18663fa7315daf5a7ff1d2ff4b3b2c74609', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h(Host, { key: 'c015bf6c7a7b11bec0d4303cb711fd798519b289' }, h("div", { key: 'afa6ce1ba5af0666056c373cd480319132b42f56', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: '9e1d8a977620f61ee1ec7d6d9b9ceaaec299286b', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: 'bdf73218344fe921140876458da2d216be0c37ca', name: "search", slot: "icon" }))), h("div", { key: '5e11ea553e466a32488455c2e296111904a0b094', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: 'f6fb65f2cea71552c4b41b61758ac8a4d8adb628', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: 'c4c1d5018c221c37879e547c968f7b195d63fede', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '58de461c7e4788b49b262216487964b111b4d6e2', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), h("ir-button", { key: '86009c7531d4e2ce7a30f5e36fedc56959433266', class: "clean-button", onClickHandler: e => {
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
        return (h(Host, { key: '6bcd73e09cdaa64ea219a33eb33e467fe061637e', class: "flex-fill" }, h("section", { key: '1733b19304f4b38aef9216a457d72cbe5299f5c0', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6e908c25a0fc4fd8fbbfdb5e8705910ce6b12605', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '08bc4d4ba762184668d11bd29ea75e459d4bd4af' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: 'a9fc988d7d3c0173e2df75656a11f9279242eb8d', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'fdf5196a2c70792524f2eb44ad0af6f589a457ac' })), h("div", { key: 'f90ea2e51be72e109d49814f48e57c7f6d1c5e37', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '1eed3e7c9bd3fadfc677669d05bbb28bfea13a8b' }), h("div", { key: 'b1859a77815df3505163c9a3a4b271a690aee3e0', class: 'table-responsive mb-auto' }, h("table", { key: '8dda5017d6dab4144125847ba83f13aa52a36029', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f70b647d997cd17e8bc6c012c8acf2583b125a42', class: "table-header" }, h("tr", { key: 'dfd283b5e70b592880ca4aac1f31a1eb835c9e2f' }, h("th", { key: '4688cd361f05bcfbd3e3df8cd1cdc012efa4c697', class: 'task-row' }, h("ir-checkbox", { key: 'b482714d23dad32dc51d66b37064d609251b532a', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '621be30473c6798c60b390c4e5190f5a52d3e1cf', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '0b90a369e9f4edaecae68fcbef81fbc4ae9944c6', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '21f288dced18cb1a7541a026384990c1942a3b9a', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: '69f80ac5cec2bfc04d88bb9b3540c52f8cfbfa88', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f0b1627a36e324a7ad555c638e32952210ece68f' }, locales.entries.Lcz_Status), h("svg", { key: 'da1e2a522272447f6f447351abc84e57fe94da89', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '3b7ffb083bbcf3af928d298fc606d22cc0d6da9d', d: "m21 16-4 4-4-4" }), h("path", { key: '2af0aed892f94c927a58601044b8d2709e9aadfb', d: "M17 20V4" }), h("path", { key: 'b573e8f4b2f94c76808ad256b49bec0e66b57f15', d: "m3 8 4-4 4 4" }), h("path", { key: '712f791158785ea6a698f1c47fe3590672d3ed96', d: "M7 4v16" })))), h("th", { key: '477ad9291ae36d3e0a2e99ad0427c4abc3bca9af', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'be30cad02a2532e3cb02cdc039e6e8de8563e851', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '72a1f64e8d318432839d4adec3a7dbd683667f04', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'be917c9dc224d5dfa6d9cef7978eedacf6635611', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f8f18183d94bcacfddaf4b5e1cc91c94094784cc', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'f80c89afb79532c16e56264f64c7b9ca1aa2e4f7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '5fd3cfb1dfeeaacc178ad692e41c4ccfed75af7e' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6c372a165184167502e8d345f0d7f09fd7fdf7e1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '09912215c2cc73fe6f2cf91e495394a30dcffe94', d: "m21 16-4 4-4-4" }), h("path", { key: 'b897779bf1fe52251105a79d8276f23d18cddeab', d: "M17 20V4" }), h("path", { key: '3e3184001f8efbb89cd17974aaa39d96a4891551', d: "m3 8 4-4 4 4" }), h("path", { key: '919f6fc240bc55a36b807f0686dda77372038cf5', d: "M7 4v16" }))))), h("th", { key: '2e1aabd50734de4231c0b74c9d6321970372b71b' }))), h("tbody", { key: '35b986715180a0f3f07634d48cd7074229839223' }, tasks.length === 0 && (h("tr", { key: '60641fb6008f4807dda15da779b98ae7d5e897c4', class: "ir-table-row" }, h("td", { key: 'ddd149db51f0e4c33ee2693815f7916fc5ebfeb5', colSpan: 9, class: "text-left" }, h("div", { key: '1682c7dcbd8333499375dcf59e95a803ff43f18d', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '5e4edf975023063f45ad2a737434d152da4e98fd' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: 'ed8892d2daf3801601fc90c1ef381ec5e9c0fbad', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '29cdf3a5c12b7de4a12832cb8ffe04b1429c82b7' })))));
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
        return (h(Host, { key: '422cd042e01833b33b56e9459442e1b3a465f530' }, shouldLoadMore() && h("ir-button", { key: 'f971e333e5e0306e9e43fb3d9280e02b8d452dc0', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: 'fe3d530b8481c9434384c4f3ae50eccbf03fe176', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map