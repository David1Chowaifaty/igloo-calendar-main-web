'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const housekeeping_service = require('./housekeeping.service-6bb565b8.js');
const calendarData = require('./calendar-data-960b69ba.js');
const irInterceptor_store = require('./ir-interceptor.store-33c3ba11.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-a78b3679.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-f07341ca.js');
require('./index-7564ffa1.js');
require('./axios-6e678d52.js');
require('./index-63734c32.js');

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
        this.minSelectableDate = utils.hooks().subtract(90, 'days').toDate();
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
        return (index.h(index.Host, { key: '1f9458fcc615608fd6c9fafa8d7e79f1c5da9721' }, index.h("ir-title", { key: '403b946f6954aedd56dde62ef37d498b34ec8b33', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: 'ec3c986751ea378911cba67945bc5be3e1a93a17', class: "px-1" }, index.h("div", { key: '47b8ac29a27b46ce97f0d82ca3cbe6bf9b3bfd5f', class: "d-flex" }, index.h("ir-select", { key: 'df22778ca68ddb7cbf7d41510a2b8fbad9ea8370', class: "w-100", showFirstOption: false, data: [
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
            } }), ((_b = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (index.h("ir-select", { key: 'dd961736f20bed5560775c0553c5f5116eb1ebdd', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), showFirstOption: false, data: [
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
            } }))), index.h("div", { key: '8b238f75bb343089ac3be27d3f3592c27848a9ba', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: 'e26b901cf3ddb73bf15a673f624d1cfc563bf8c6', maxDate: utils.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? utils.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? utils.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: '02179afa4e0a10f343148462081d2b7f79df8da4', title: (_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: 'dd89fd1aedbf795a5bec6cd1b357341b9ac37fae', title: (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: 'b1ea13262936ca2235b8f2a3bddaa4c5469c47ac' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: '0c0d27818c49c36badb32c2e657e28f949fe4920', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '5a2d58e5e9773dc5efdadfb13f71ffd18f263042', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksCardCss = "";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cleanSelectedTask = index.createEvent(this, "cleanSelectedTask", 7);
        this.skipSelectedTask = index.createEvent(this, "skipSelectedTask", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (index.h(index.Host, { key: 'fb20ac40d4546fde628b554233b6244ec496125b', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: '0131f319490c39fba65a0237b47576b4a1760efc', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: '7838c23c0f0cb6dfb0229aee29ed657d173b585f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: '35192254fdc2ef5c537cb351ea8beb09e31a67d6', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: '97765caa34af5e796e9c84b11b61b841170d446f' }, "-"), index.h("p", { key: 'a8f05d3ef71f12a3bfc49c7bb1303b6cbe2570cd', class: "m-0 p-0" }, "Unit ", index.h("b", { key: 'ad6b3d2109b01066a64f9d826ed7924bb8fec661' }, this.task.unit.name)))), index.h("p", { key: 'fb7effc5391fa7df82fedf98ec9736f98048df64', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: '210e6c2cc325e43e4144af449668171bc55f1cd6', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: 'de9f71bbd93276b2f0e8b7ec93807f3b68b87342', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: '3b28992571532fd22cd96f4eb82df97e022f18c2', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'd49c63b89f325bd662150c4b350de127a21be24b', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: '414a8a86b80eb3149f4409cc0e70bdfb818d1e98', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: '59e12ab9ee263ecefd0047caf21f8baa20b3b860' }, index.h("b", { key: '12741b097e3d071044769ccc8f019cff93b7fc98' }, this.task.adult), " Adults")), index.h("span", { key: '5543ef572ce2b4531986a34d2786237d4f0507c7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '115b30255c3c6aee9fdf1dbd0570ab3df61b8a7b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: '4b72e7089cb7e76ac5b3e40b8337a2d689af0578', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: 'd7ab9a85c4c452506774fe6f24bb860b4a2ecdc6' }, index.h("b", { key: 'b1626a5e1959402e6a49ba6b81d1b01f904f2ef0' }, this.task.child), " Children")), index.h("span", { key: '71c2392937369d083b2842309309d7676bc7902b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '543113578b25daf690c612234f99d2f463e61918', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: '032448c2769fac9f6f1828bf2ab634b61ceb440f', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: 'daf9c16a552d5027308eed2b85079f8c5123c782', d: "M15 12h.01" }), index.h("path", { key: '49f1cce741ebc1020a9c99c6894aa708ffb2b136', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: '5dc86d056ccf8dc4d4a96432c1e4a78fbbf1e345', d: "M9 12h.01" })), index.h("span", { key: '7d17e5118c84255fc9961e98ca56d6f2013804fa' }, index.h("b", { key: '04ff0fb19a378b305771cf30e2ddb0916a4e5eb9' }, this.task.infant), " Infants"))), this.isCheckable && (index.h(index.Fragment, { key: 'b34b6410c6f3e16309a11744a0eed86f341ef0d7' }, index.h("div", { key: '7aee22b17714b71b4f68b03f840c964c4d19d106' }, index.h("ir-button", { key: 'f19f18ba57cb5cb36912b6aa02d5dbca0d04b439', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), index.h("div", { key: 'ea9d4b93335217189972effcb4447e2400b8bd61' }, index.h("ir-button", { key: '5ef81f0d31451864f5678340f2b6cd1495397ac9', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (index.h("div", { key: '001ef36fed4748cb6e20b2f16c303a458f3b3ed2' }, index.h("ir-button", { key: '5206976dd1d7081d47939fd3563631ca13320f24', onClickHandler: () => {
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
            housekeepers: [],
            cleaning_frequencies: (_b = calendarData.calendar_data.cleaning_frequency) !== null && _b !== void 0 ? _b : (_c = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_frequencies[0],
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return (index.h("div", { key: '43a9b6b0d3e9a94f970e624bc6fc126ae2bbabe2', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: '6348a525d13fecd2ffada06eb5545c1c2cae33df', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '2a8f6e50a13cbd4f2e77be844bbb3926638216bb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '6222a0afcca44f705e4f6430a3189ea0c1f85bcf', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'f12983b49a1cf6b75e1f2bc6cb7a7f4542a2a582', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '153bc7263e915bda613bc59c174a48bf5bea7d8a', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '02506f307cf45d0d006299dd8b0245b2ed62edca', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'f1ccecb67bdafa162ee3218e72455d5cf804b50b', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: '238f5c569840aafa960b3ccf2257c355ab5e9e73', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'e2363233ad46301edf7adaeb6cf69ce70001e6f3', class: "pt-1" }, index.h("p", { key: 'baa9865653c1cca12a0d494a372282989ad1ea35', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: '998be638bbb302cde4a6287e608f40289f66c859', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, showFirstOption: false, data: (_c = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (index.h("fieldset", { key: '0c36130fcc18cd8d49787b47cf20b8c175e849d4' }, index.h("p", { key: '123e2b188b51c7d4065c73d978c911d54e91949a', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: '98b5ac13fa5cc5d4c2105585c61b72173f68d779', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, showFirstOption: false, data: [
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
            } }))), index.h("fieldset", { key: '88db773aaf28d22c2f553bb678be0f4d7adab4f2' }, index.h("p", { key: '8f23ddab9f93199d9067606ba8d00c8121b09cf5', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), index.h("ir-select", { key: 'ef4658c61d0ddf4e46d7f526a8f938c8e5427995', testId: "dusty_units", showFirstOption: false, selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.dusty_units) === null || _h === void 0 ? void 0 : _h.code, data: (_k = (_j = housekeeping_service.housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.dusty_periods) === null || _k === void 0 ? void 0 : _k.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: '65bc8d00c4ca64255fb8fd9fcac6f15c9f20c965', class: "mb-1" }, index.h("p", { key: 'd47ab0716e5cf68287576e7bb5ac0fd8e1d9ad57', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: 'b70bd58dd37914e34032d4ab69c5d9a65235fd33', testId: "highlight_check_ins", selectedValue: (_m = (_l = this.filters) === null || _l === void 0 ? void 0 : _l.highlight_check_ins) === null || _m === void 0 ? void 0 : _m.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_p = (_o = housekeeping_service.housekeeping_store.hk_criteria) === null || _o === void 0 ? void 0 : _o.highlight_checkin_options) === null || _p === void 0 ? void 0 : _p.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: 'd852097e2981627e60687cf76b3b7d62e656cddc', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: 'd5c583dcb2a9721b24543f4ae7389cc17d0de4d7', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '8f851e0eefc96c212a9d1cf9efda0b9523ea21cf', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}";
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
        return (index.h(index.Host, { key: 'f04910b2fb9aff20d8f0c6d3f7134f35986f2705' }, index.h("div", { key: '2fefc91ef06ee8db19c1c6be59528811d20eef08', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: 'faa06095357acd4b907d452d7143fb0a723ef88d', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: '0d756302abf2b64833ef57d870d700885bdb4d93', name: "search", slot: "icon" }))), index.h("div", { key: '9c14dd87ac67f069ac3d79f87d9df065c2e8a3c0', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: '46ce7b5551214d1122583305cbb1e4be6fe6edcd', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: '23e218213e77158de74561342f08c835f2056b38', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: '161d9d8e3494f7c8c795e9d1031ea33227f38a57', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), index.h("ir-button", { key: '7b92635a45e7acea011ec3a6a2638359a789d504', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Clean & Inspect', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animateCleanedButton = index.createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = index.createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = index.createEvent(this, "sortingChanged", 7);
        this.skipSelectedTask = index.createEvent(this, "skipSelectedTask", 7);
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
        return utils.hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(utils.hooks(), 'days');
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
        const isTodayTask = utils.hooks().isSame(utils.hooks(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = hkTasks_store.getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = hkTasks_store.getMobileTasks();
        return (index.h(index.Host, { key: '52c6f2cf13fe706d3535e828e2cdf8f34ef2312e', class: "flex-fill" }, index.h("section", { key: '5acdb592f040c2736aa35e67926969845d7adb5d', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: '8feb733aede4aa5f3b9339483d970badab2c14c8', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: '51e5e4bb6f777d3b2694b465bf4fff467a9cc4d3' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && index.h("p", { key: '854e57f89149c9f59296a3ecb1958b47042346ee', class: "mx-auto" }, locales_store.locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: 'f6f94813b316a50da0c54b9043be5573f331a1d4' })), index.h("div", { key: '1c96982a46c9486c1b66c839f912363c89d92d51', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: 'c5f12cbf8bf0db1591c5a0796d53e0b90051db69' }), index.h("div", { key: 'b1893ff200d1c772fb3b09afaaca7025fc26f973', class: 'table-responsive mb-auto' }, index.h("table", { key: 'd5792fed892d7381d0e49b3697d52283b74a76ed', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'f5c097ae1ae214153b12cd25827e92487728ab29', class: "table-header" }, index.h("tr", { key: '25a246a911c0286b693f9de858562688d7a57f85' }, index.h("th", { key: '45a9d1f9d3dd23876889564886ce12cfcc6512c0', class: 'task-row' }, index.h("ir-checkbox", { key: 'b8408cda60aa9605ef69cd296cb823a54db444eb', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: 'a7a748822862235990b8a9a7556f621471c4d933', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: 'e2ebb4186b6b7e811e07520d2ff4e433fca8d8b6', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: 'f12430b5f577c8ceaf00bdccb550b58d3d62977d', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: '8397749c14117e3c033002eb205682a1c3b532aa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'a84bdfeada2af04524c40f9c576781306c137e6d' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: '08c6e2178cdc09e74995e17bd6ed96c6ed5cce3b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '675d6ba8d0477e14e21c167c83f3ee5091e3bff9', d: "m21 16-4 4-4-4" }), index.h("path", { key: '6c3b2d7e5341eb60c3811bda2985149fa000082e', d: "M17 20V4" }), index.h("path", { key: 'c9ed41f15f8d65bf77f20d0b0fee174baddd63a4', d: "m3 8 4-4 4 4" }), index.h("path", { key: '8d2815bea86948b509544e017da770d4f6053941', d: "M7 4v16" })))), index.h("th", { key: 'f78c0360e3255b2f36cfa1db05c381794cdefc38', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: '5e64700b219da090c644220adbf2d856fe01dc9b', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: '2e0f07678cfed51d28ec62ca90eb34039629b6b7', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: 'b06430f08fcb2ecf8be5e57692dc097a3ce0f7a8', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: '896a63267ae7f36896c49109632a5eef5f10000b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '5e0b955bb5b3f7180e945e3ec68fb2d1fc8486e0', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '70f4fa8f7604b8332e10d92c9b38749c9e18dc82' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: 'bc607d124b0a5f994867a92c8d95a0c360294fe4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '8cdbbbc71ef7925c467668f88c2ac6eb77e4c462', d: "m21 16-4 4-4-4" }), index.h("path", { key: '77274731b054db733966de36ca492a2e5a365a83', d: "M17 20V4" }), index.h("path", { key: 'f1bcaec369cf2ba91cf08ff4fa82d4f498dc9464', d: "m3 8 4-4 4 4" }), index.h("path", { key: '3f8ca4006d8e244ff988dafc873517490735bc94', d: "M7 4v16" }))))), index.h("th", { key: '94a8903327f9dae97873223259c7802968813b2d' }))), index.h("tbody", { key: 'fa620ace9437c7cd945ef66001e3ff8edc1bb666' }, tasks.length === 0 && (index.h("tr", { key: '9c9380824567d1ce2234a32870c63df90537185d', class: "ir-table-row" }, index.h("td", { key: 'b758c40056a29a1c2a8c3ae6f8c8f7b2bb408e02', colSpan: 9, class: "text-left" }, index.h("div", { key: 'cbc601ce7f78a15afd450094094540fc3e056d07', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '8c58fc5f32806045af9eddd88e02fc043f265815' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
            tasks.map(task => {
                var _a;
                const isSelected = hkTasks_store.hkTasksStore.selectedTasks.some(t => t.id === task.id);
                const isCheckable = this.isCheckable(task);
                return (index.h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                        if (!isCheckable) {
                            return;
                        }
                        this.toggleSelection(task);
                    }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, index.h("td", { class: "task-row " }, isCheckable && index.h("ir-checkbox", { checked: isSelected })), index.h("td", { class: "task-row extra-padding" }, task.formatted_date), index.h("td", { class: "task-row extra-padding" }, index.h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), index.h("td", { class: "task-row extra-padding text-left" }, task.status.description), index.h("td", { class: "task-row extra-padding text-left" }, task.hint), index.h("td", { class: "task-row text-left" }, task.adult), index.h("td", { class: "task-row text-left" }, task.child), index.h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (index.h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : locales_store.locales.entries.Lcz_Unassigned)), index.h("td", null, this.isSkippable(task) && (index.h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                        this.skipSelectedTask.emit(task);
                    } })))));
            })))), index.h("div", { key: 'a91aea3044506bbd884d45324a3b4456a5e6f779', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: 'f0aa21eb2c23416951170a4d316c99a2770d1517' })))));
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
        const pageSizes = hkTasks_store.hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasks_store.hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasks_store.hkTasksStore.pagination.tasksList;
        return (index.h(index.Host, { key: 'a02c755a84c6b4c488bc81fafc0fe8ce9e73e305' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: '676d93b7b497ed72339b6125360e3ff53c0c3769', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: 'c2d4ed99fb39d1b87fde668765dbcd008fdee549', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => hkTasks_store.updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => hkTasks_store.updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
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