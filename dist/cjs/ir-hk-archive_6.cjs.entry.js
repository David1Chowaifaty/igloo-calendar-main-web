'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const housekeeping_service = require('./housekeeping.service-c883b967.js');
const calendarData = require('./calendar-data-99f4dccd.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const utils = require('./utils-4927b5d1.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-7a1515e5.js');
require('./index-467172e1.js');
require('./axios-6e678d52.js');
require('./index-db8b30d9.js');

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.minSelectableDate = moment.hooks().subtract(90, 'days').toDate();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
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
        calendarData.calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    async getArchivedTasks(export_to_excel = false) {
        var _a;
        const res = await this.houseKeepingService.getArchivedHKTasks(Object.assign(Object.assign({ property_id: Number(this.propertyId) }, this.filters), { is_export_to_excel: export_to_excel }));
        this.data = (_a = [...((res === null || res === void 0 ? void 0 : res.tasks) || [])]) === null || _a === void 0 ? void 0 : _a.map(t => (Object.assign(Object.assign({}, t), { id: v4.v4() })));
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
            utils.downloadFile(url);
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
        return (index.h(index.Host, { key: 'da5f2f3c440aa04606283ec68237f906e0b581a1' }, index.h("ir-title", { key: 'cc45ed9fdec55516b0c23de7bed4f569b5b0cbc2', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '9c251f6aad249a885faee9aec2f0080681570018', class: "px-1" }, index.h("div", { key: '1714afe1b99eb3eef174d8b09255ad076bbf05ae', class: "d-flex" }, index.h("ir-select", { key: '2f00090d9a94aad230ca753ad631aa44454872e2', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
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
            } }), ((_b = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (index.h("ir-select", { key: '9cef448228592859af7c868e7b32d9c0754e6fc1', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_g = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _g === void 0 ? void 0 : _g.housekeepers.map(v => ({
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
            } }))), index.h("div", { key: '30778786270f4666a4527e90cc4065e8265523ad', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '0ae2f5921f320ce3f26538ade3f8c4fd1d1a2535', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: 'af07cdd428f66fa6dee1cb403b186695a4de7cef', title: (_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '0741f22655f08b0c78b1c3d432f5bc2725bdcbeb', title: (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: '512a2b8d1152eafdf9cc370fd37b7263d77b926c' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: '839d030bf0c5c9d08d4c2fe18aca950e9d05941c', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '1efe31ae35ff40ced16d6d4036d5887bf4ad0508', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksCardCss = "";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cleanSelectedTask = index.createEvent(this, "cleanSelectedTask", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (index.h(index.Host, { key: 'b625dded59cdf054b8b83b9684e9d6c41f94ae40', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: '76e93de1823a2b326f9bb1d82d00d96cc50f7975', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: '6f432546b81676cb540d0ba21934a9c44eb675ea', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: 'de7385498316bc3d2db5c85f4189e5b6acd4b1c4', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: 'f34cf9dd856a4b3cf4f08bcb135973856d6d7913' }, "-"), index.h("p", { key: '1fa5d0e7b03cbd3f5107ea6b4c30d6853b4e2051', class: "m-0 p-0" }, "Unit ", index.h("b", { key: 'd4b93bd252585a4b801aff282c631a48338a5dda' }, this.task.unit.name)))), index.h("p", { key: '950161d1e8d2a925dc7c4ac4456387d3eafc520e', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: 'ea3a922310cd94f2aa985f1bf3edc7bec2e6946f', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: '5c6d5eab1953db19a3896184c0ccbddf519178b9', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: '010058ed0cbec6d018a632a63be6796e46a8788a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'c13800583c7322e6c07d8126b5cd0676b70874d1', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: 'ecee153e848b852cd3b28646ac3923d9f5ae03db', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: '3342fec4b5390e34867bfc0872851c043247baa3' }, index.h("b", { key: 'b555a2ace72390f5bf5d37c04cfdb59bf17862cf' }, this.task.adult), " Adults")), index.h("span", { key: 'e6a67851a40a70a1dc93fa90024702f1e761bc7f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '94de441399671c21d7be4ec7bc2968ccfde3523d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: 'ecc02eb0f0c76db9deb9d9deb6fde8012f9dab2e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: '97ce78d5af5812dfaec3438b33f230a9b1353a9a' }, index.h("b", { key: 'a23b819caa906da02a747405ff3a7f250035868d' }, this.task.child), " Children")), index.h("span", { key: 'e699f6b887ef62717c030f2d79682f9c45815a6e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '8b0f3cb642b9c746bf439e9a70c3bd022e803aad', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: '265fb5d1425d3fb1afc87e6a8d093647f6144e0e', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: '19890002e93863a1b89c264d5d0b3a90bd821c0f', d: "M15 12h.01" }), index.h("path", { key: '3aba9d8b333c2275beb738c74d028f062dcd3810', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: 'aa479e581cd6c52732b86c707c76ba9f25c6c2b0', d: "M9 12h.01" })), index.h("span", { key: 'f174a8e8c5db281a33da1f7b852776e7051c2a41' }, index.h("b", { key: '380e6e462fe13c54b198345bb2dfd82ee369179e' }, this.task.infant), " Infants"))), this.isCheckable && (index.h("div", { key: 'f7f241e4ad2eac4a95060f5fbb3e61027eb2ebc6' }, index.h("ir-button", { key: '044ff0e125a9662858ad2180d451d9e05ebbd076', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
};
IrTasksCard.style = IrTasksCardStyle0;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%;flex:1}@media (min-width: 1024px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
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
            housekeepers: (_b = housekeeping_service.housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => ({ id: h.id })),
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
        return (index.h("div", { key: '409bce61cfc5a94700805314b76dd0b7a288de73', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: '963fcb6c0eee26a5e67214c260badcd35e5cd18d', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: 'bb52a3db5be608f093a6ce668b339f7a49f12be9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '139d872161904a98907fb4bd003da479047511d2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'bccf299695a2c8c8b965ca82027efc057d5ed865', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'b6d75bc038c8f80daa502252bb9c0b49e7653580', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: 'c8427e1d9a4b6b2f8c340b3e3e0a62eedfc6d2e7', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '9de7896518819952e2f1e166c9ddaf792c7a02a9', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: 'e55ce1f61f98575a23b74ff1635c185092c7cfcc', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'f9aa56281fe1d158c5cef66db902796748590a68', class: "pt-1" }, index.h("p", { key: 'fc00d99ee34c5982f7dadbc276751b2e4ce6a3e0', class: "m-0 p-0" }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: '0cbe3f06db841b33dc6ce87c90ba421d2c8193a2', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (index.h("fieldset", { key: '4dc99e91fc9379fb35b18b9908aca9d8e6895671' }, index.h("p", { key: '425d2da1ff24dbfe8b9dc3b6c59cafb4d5925ba9', class: "m-0 p-0" }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: '3dd9c3e4415e5c5ff69cf15956d89b6ccb596168', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
                { text: locales_store.locales.entries.Lcz_Allhousekeepers, value: '000' },
                ...(_f = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
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
            } }))), index.h("fieldset", { key: '615b026eba5ba8ab98d19b155a8fd71e6f8d7b47' }, index.h("p", { key: '5324b7b0249d8e55e0b2cdabeef81892e3b007c1', class: "m-0 p-0" }, locales_store.locales.entries.Lcz_CleaningFrequency), index.h("ir-select", { key: 'c46b62985fcb89a0fe547414f2bf302ce3af8cb1', testId: "cleaning_frequency", selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.cleaning_frequencies) === null || _h === void 0 ? void 0 : _h.code, LabelAvailable: false, showFirstOption: false, data: (_j = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), index.h("fieldset", { key: '7c9b1af35a0b01207e2c805831c97fce9ab0a786' }, index.h("p", { key: 'ac2e413102c6931d99ea26d8ba98b641b89694a7', class: "m-0 p-0" }, "Include dusty units"), index.h("ir-select", { key: '1d1fe7fd996c64a5f328bc73647dbc2deb075eac', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_l = (_k = this.filters) === null || _k === void 0 ? void 0 : _k.dusty_units) === null || _l === void 0 ? void 0 : _l.code, data: (_o = (_m = housekeeping_service.housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: '40e6faa0838d0cb289e2f15fd58783416160a032', class: "mb-1" }, index.h("p", { key: 'd88af9b12c415a5fb4d60270421e2c2377892756', class: "m-0 p-0" }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: '78194e8a3decd5dec644b96796e67eca7846c129', testId: "highlight_check_ins", selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_service.housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: '71f711a465f922e03418006401d6c7fb47b8a192', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: '281e558ebaa784826b976ac754376837df81bceb', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '90189b131ca24641f0c52f53975683c8b72c650a', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerButtonPress = index.createEvent(this, "headerButtonPress", 7);
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (index.h(index.Host, { key: '895464bc6c01d33abe6c952c831a2356af9f6e0f' }, index.h("div", { key: 'd65a313ac165105cf69ebef18ce8e26aaad6f4d2', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: '34001001acabe7c1eb421bf4a6276b32038882af', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: 'e537af37d03fb25c529a8fe141991e177b9ddc0f', name: "search", slot: "icon" }))), index.h("div", { key: '4f28d0d83b28b3b39db0ef917526e424db7380c3', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: '1a33e7fd8b0747713d43f25aa8132c540300b673', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: '4028765353278ff1b928864d9c09e0b8a280a8c2', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: '6072c1fe5606bcbcb081d314792a6097ba524bbd', class: "d-none d-md-flex", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animateCleanedButton = index.createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = index.createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = index.createEvent(this, "sortingChanged", 7);
        this.tasks = [];
    }
    componentWillLoad() {
        if (this.tasks && this.tasks.length > 0) {
            hkTasks_store.updateSorting('date', 'ASC');
        }
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = hkTasks_store.hkTasksStore.sorting.direction;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (hkTasks_store.hkTasksStore.sorting.field === key) {
            newDirection = hkTasks_store.hkTasksStore.sorting.direction === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        hkTasks_store.updateSorting(key, newDirection);
        this.sortingChanged.emit({ field: key, direction: newDirection });
    }
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        hkTasks_store.clearSelectedTasks();
    }
    handleTasksChange(newTasks) {
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
            hkTasks_store.clearSelectedTasks();
        }
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(task) {
        hkTasks_store.toggleTaskSelection(task);
        this.animateCleanedButton.emit(null);
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        this.rowSelectChange.emit(hkTasks_store.hkTasksStore.selectedTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return hkTasks_store.isAllTasksSelected();
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            hkTasks_store.clearSelectedTasks();
        }
        else {
            hkTasks_store.selectAllTasks(hkTasks_store.getCheckableTasks());
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
        return moment.hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(moment.hooks(), 'days');
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = hkTasks_store.getPaginatedTasks();
        const mobileTasks = hkTasks_store.getMobileTasks();
        return (index.h(index.Host, { key: '2374d80f19ece5fb1afcf031c7f63b4b0459ff51', class: "flex-fill" }, index.h("section", { key: '0f438fdaa0632b60422f67e2ed42ce108e5c1724', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: 'e8a00106f33f1a076114870272db191c32e57137', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: 'f8a631b27f9827141f2ef2b926289be413911665' })), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return index.h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: 'f31f2a9a30def62cc7e207c4bdcfe5d09e2a9a27' })), index.h("div", { key: 'db4c95949f8792c5728a56972dcb4d202c89a3fd', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: '0b71dd2283bf7ae81da62d2821eb65a141ce9398' }), index.h("div", { key: '8026006a683ef827db3248e4fecf6074061ec649', class: 'table-responsive mb-auto' }, index.h("table", { key: 'e3f49de727e0175fe3162a4b2869fc8f48ad210c', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'fb085e7f6a450c47e702cd507cafa71252aaac80', class: "table-header" }, index.h("tr", { key: 'b8a86546b85d2e35e0f3ae70042baf090c43e9ba' }, index.h("th", { key: '3be40d16d3064c9573ee8c869f559f9830ffacf2', class: 'task-row' }, index.h("ir-checkbox", { key: 'bfdb12f91016352e445701c3f6e62d03b4076041', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '25ab25be39961aa33898a924dcc6a8c9c4630121', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: '9a19b661f6d053fe5dae03ef767c6a5dd919173f', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: '4c40d07f0a1a444d87eb407281c8adc0e19cb948', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: '6911cd6b2e444c645b9da838aca687e2d80898b4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '8650a2097d7cec8d821dcfc2556a9db3c8881295' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: '600404f59f9d951ac23ff0f56414b16f52ab9c0c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '21def2fd3341ff442c456bfc626a6840d3f4471b', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'a45164fa787fb3ad1b9553b4144b95b6621cb044', d: "M17 20V4" }), index.h("path", { key: '55cfac132d22eefb14897317476de7cb5dae2d12', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'bc8579897eb7b2dd389f426ca295c932a800fc56', d: "M7 4v16" })))), index.h("th", { key: '2d924a6f35919e1b1c3f3cc8d989c8df175e7e41', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: 'fae4249aabee21757c2f6acbf4d311fe21fb8401', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: '932ded8dabc20c542588a67b65dcbd5d0dd60422', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: '70cc68d56f110011cce807e5437fd302ff713676', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: '1725fde9f83a50851f635ed01f143ce643d35638', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '005f2817c9adb52028ff6cf9fdee268ad92db070', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '4b24953bb4df3a47178401d79de2c5a336aa6e3f' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: 'bad57d8acdeab78bbc78357140df8b88e3176140', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'bab5d37bdb763166282f48002c92518f33cc4e2f', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'cdc3520f0b4238954e49e103e54dfe58fa5cf145', d: "M17 20V4" }), index.h("path", { key: '35579369bb781b9e5ad56e30dd181ccb64be72ae', d: "m3 8 4-4 4 4" }), index.h("path", { key: '617a1c53b9b499f28710d142af5703248f594007', d: "M7 4v16" }))))))), index.h("tbody", { key: '8de9e4cb597065b6b3e5fc379369ee6cbaec21a9' }, tasks.length === 0 && (index.h("tr", { key: 'fc1c459dcae69a8d16288b26680864d7947cc3d9', class: "ir-table-row" }, index.h("td", { key: '4ce7d34d29d6ec679512fbb2fb5ab26911dcca2f', colSpan: 9, class: "text-left" }, index.h("div", { key: '2c3fb8901174e2bc5003912c6f6c1b5f3e7cb857', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '774a6f2b98d72a01441f6b224b261cbc6dc29ac1' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasks_store.hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (index.h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, index.h("td", { class: "task-row " }, isCheckable && index.h("ir-checkbox", { checked: isSelected })), index.h("td", { class: "task-row extra-padding" }, task.formatted_date), index.h("td", { class: "task-row extra-padding" }, index.h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), index.h("td", { class: "task-row extra-padding text-left" }, task.status.description), index.h("td", { class: "task-row extra-padding text-left" }, task.hint), index.h("td", { class: "task-row text-left" }, task.adult), index.h("td", { class: "task-row text-left" }, task.child), index.h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (index.h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales_store.locales.entries.Lcz_Unassigned))));
            })))), index.h("div", { key: 'e97b56478faace237d0a98f4fb1fca3a591741da', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: '754bcf77c400ad37fe6e20bf56fc5cfca1b34137' })))));
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
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasks_store.hkTasksStore.pagination;
        const totalTasks = (_b = (_a = hkTasks_store.hkTasksStore.tasks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        return (index.h(index.Host, { key: 'a1c7d3879495f451d77d559c2ab970c0d78237f7' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: 'a8befa758cfb652d76a2153c8bd721a6677faeb4', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: '30274da8f1a05ee77ae9f24caa870caf7aaf08f1', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: hkTasks_store.hkTasksStore.pagination.tasksList, onPageChange: e => hkTasks_store.updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => hkTasks_store.updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

exports.ir_hk_archive = IrHkArchive;
exports.ir_tasks_card = IrTasksCard;
exports.ir_tasks_filters = IrTasksFilters;
exports.ir_tasks_header = IrTasksHeader;
exports.ir_tasks_table = IrTasksTable;
exports.ir_tasks_table_pagination = IrTasksTablePagination;

//# sourceMappingURL=ir-hk-archive_6.cjs.entry.js.map