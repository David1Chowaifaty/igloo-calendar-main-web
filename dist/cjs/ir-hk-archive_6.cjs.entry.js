'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const housekeeping_service = require('./housekeeping.service-c883b967.js');
const calendarData = require('./calendar-data-b2787812.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const utils = require('./utils-92c1b8ab.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-763717d5.js');
require('./index-467172e1.js');
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
        return (index.h(index.Host, { key: '159d9ba3fd2e8ac3c0ba6548cc4c1df5cff9a9e8' }, index.h("ir-title", { key: '123b5ada9ab6db69e7e61f8296fbeafe82f2a81f', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: 'd70b199aae627e4ccff4b7225bea4ab6e7318f56', class: "px-1" }, index.h("div", { key: 'eaaaa359a2f61a636690515e096520de1b3ac547', class: "d-flex" }, index.h("ir-select", { key: 'ddf1cd01a6a245388c3847a6d280352ce053c501', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
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
            } }), ((_b = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (index.h("ir-select", { key: 'b4a8098c07f55b1a6e595b0ebd5ed16c47e16335', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), index.h("div", { key: '7f5fc8ebf50757c962b6a5260b000c3642207551', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '64137c4be8b865230584a160f680e688a04541f3', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: '316087ed9df937c2aa7705c29ebb25dc310150b7', title: (_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: 'db19f4a61b61f8e06e88ea0ec66743c2648aa3d1', title: (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: 'fb100cf3febc0ee6497ebc6e986ed15ff5f56e32' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: 'b7befee9d62a1b9a4829fddfbf827f769598f67f', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: 'dcfa7c0ef5a7e070ca535daeb7f3f01fad9a4f33', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (index.h(index.Host, { key: '2c06449a004db266186cb830959a6f63321b191c', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: '9a5f48f88543f9e75db5b15090c92cce78d7828f', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: '0fa0af1022ec0adb4f9b2ddb3d2dcfb19303df00', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: '699832ea855eb7feccc5e19202da91c5628a0780', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: '0287069e54d9cba6d87671c521ee0be54f38e652' }, "-"), index.h("p", { key: '3c7523e72a501fc6f5cb90aa543aeb4ef0ec56d5', class: "m-0 p-0" }, "Unit ", index.h("b", { key: '53a1ea48a2de6176aadba1f87a719a2bfc8f72fb' }, this.task.unit.name)))), index.h("p", { key: 'd69baf43bd23834a264936070f6b0540295482c4', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: '4dec598c85fc93c9fa3ff960b9643fa0e22926c3', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: 'fcd6dd728eb9bbe16da689d1827010ba0a61172e', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: '845fdde8fd46d112c3aee5c8707950eff3218ec5', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '6d7f1f76ce673032912169a498b502593f606d68', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: '9acc11e8a642bb3c94276d11cb91b7c296015599', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: '281369743c077722d0e73a88ab371e7a79b9ccdd' }, index.h("b", { key: 'ed476cf257af41856066bfa4ac3e149aa5e170bc' }, this.task.adult), " Adults")), index.h("span", { key: '45540cd60872dbc0d5eb01fd4fcbe984953264f3', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'e08aee5cf325d16bcd3b98d176e0518fc6ebed08', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: '5d4a1460d93270a7c6a90d584af520fb9267f42c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: '4a175486c6178e850819d0343192ac14074557d6' }, index.h("b", { key: '28bed38636819b0d034bfad59e53020734022940' }, this.task.child), " Children")), index.h("span", { key: '2040a3b28a8c6fb6e749366641e757d722bc6413', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '2efb55a4974b1bdfda2f5fd444109a497fd7ba81', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: 'b9ffa9aedf6a133d7dbe62b821af3cad2869a987', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: '02239f037ea077d71e41b445aee7a0abe08fcc79', d: "M15 12h.01" }), index.h("path", { key: 'ee67e65d0637fe863ddefe596769c8a757bd33be', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: 'fd8a4d254293ae2bf89641e8d94417ec05712d03', d: "M9 12h.01" })), index.h("span", { key: '34f55595090c71c4eb49d182461aecd4de8cd48b' }, index.h("b", { key: 'b05e423b7136fbb073400db18dc3ab33eff8e526' }, this.task.infant), " Infants"))), this.isCheckable && (index.h("div", { key: '8875e2d07cfa01808bc8f5131371903d330f3e18' }, index.h("ir-button", { key: 'd241ad10f7b101f4c73ccf4ef61a2fa2bced1e4f', onClickHandler: () => {
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
        var _a, _b, _c, _d, _e, _f;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: (_b = housekeeping_service.housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => ({ id: h.id })),
            cleaning_frequencies: (_c = calendarData.calendar_data.cleaning_frequency) !== null && _c !== void 0 ? _c : (_d = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.cleaning_frequencies[0],
            dusty_units: (_e = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.dusty_periods[0],
            highlight_check_ins: (_f = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.highlight_checkin_options[0],
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
        return (index.h("div", { key: '67fe97f28ecd801c626798d47c0ea41fc8454da1', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: '44766f4b08f799a95f6de0134f6a853dafa9d193', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '2661f5732cb66d735c162a67fc4717d3461795de', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '6a2759bcf0390cb4fa7fdd18b08ded6c194a2346', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'f04e75f07ad232825a2ff161f175b7d22b128e2b', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '15b1ece1c3555dde2ee23d29250a1ac0eb6701ca', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '8e90eaf69d03bc7c503b3be6d5c873ccbe4a289e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'e148e966e4521db4b5322dcafcaf3d553d482502', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: 'a6c391197c8f22f98d4b233ef4a629a3c7ca87ab', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '96007368d7d4072c039e469391d460451d2fe9f1', class: "pt-1" }, index.h("p", { key: 'aebe2cfa7b7d759fd07def2cf902ec4efc6db750', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: 'be49c03194dc97874ecefb6a2350d48779a9a2ae', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (index.h("fieldset", { key: 'c19b5fa526f315c9231d4dbcb4005147c2b43b94' }, index.h("p", { key: '1b919d186614aa7beeecd3e8eca3300023b0d82d', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: '170899349c5ea8c7495d6d2b75cda5afe1232b8a', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), index.h("fieldset", { key: 'e1a2ef7962d45bb023ba6f164e5496e511ba3f9a' }, index.h("p", { key: '74eb5d8463c50b6365ef5350a556877a50383e9f', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_CleaningFrequency), index.h("ir-select", { key: 'd9d0a322517efd988530debe5038ade18a367d04', testId: "cleaning_frequency", selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.cleaning_frequencies) === null || _h === void 0 ? void 0 : _h.code, LabelAvailable: false, showFirstOption: false, data: (_j = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), index.h("fieldset", { key: '403f6021b26fe8f3a01abb5e4cc721be66a75da8' }, index.h("p", { key: '7e120d21c84502901a550fd1c1c1109853a452af', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), index.h("ir-select", { key: '03103ceda68af71de5898898b37a9ae57772c8a0', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_l = (_k = this.filters) === null || _k === void 0 ? void 0 : _k.dusty_units) === null || _l === void 0 ? void 0 : _l.code, data: (_o = (_m = housekeeping_service.housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: '2a54d9f66938853cd47ec25f15a94eb7ffd37d11', class: "mb-1" }, index.h("p", { key: '7ab6a989ec006b6f92ef95fe47f6e6a12f6213dd', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: 'cdf6f85128c232ebb2cfb085062cb55211bcab8a', testId: "highlight_check_ins", selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_service.housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: '4f8ec80026f96eabf469939e40f1fe18dbba2f3d', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: '3f95a079768931e7bf1855ef0d1a54b3dd5c78b3', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '6de1690fbb88ffaf94b6b69f871506fab012db2c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h(index.Host, { key: 'fe3d17565ea45c37fa89aa3f73c6dbbef2c568a3' }, index.h("div", { key: '54147b913f6741ea47b6f43c534f6faacc92c01a', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: '10fbb34e99fd33159270c46c9c6c5e66fe17e710', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: '78be31b858b6ebbdc19cc4388eead187d1c9711e', name: "search", slot: "icon" }))), index.h("div", { key: '4d763e2baa0f3b24921e4b6590fea63871322e35', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: 'd51237187bb20db52669b4560902fada5d667fbd', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: 'dbafc3a49bf32722914578bcee8c9e58011adbc1', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: '3a115d52fb6e6c545ece990c8984c97a92a72f66', class: "d-none d-md-flex", onClickHandler: e => {
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
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = hkTasks_store.getMobileTasks();
        return (index.h(index.Host, { key: 'e6e873ca49ea06518d25d4a35b995c9f9c61940b', class: "flex-fill" }, index.h("section", { key: 'b0e132be384dd8c338efabb5d7f537cb1cde848f', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: '83e8fd157be9bbb247457cb3bfed64e9bdf69295', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: '6226f4754833fdca726ecbdb7402f2d0c18af9fb' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && index.h("p", { key: 'eccf70d1558fdadacdf387a8d86e82f6738c05e3', class: "mx-auto" }, locales_store.locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            return index.h("ir-tasks-card", { task: task, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: '9c35a3d9a2a48ea89612deded51a6fc2fa9cbe47' })), index.h("div", { key: '05aad27157afdd234c79e0ffb1645eaaa8828b5e', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: 'ffa1a7584a41da615a571ca8db0160ffb286b931' }), index.h("div", { key: '374d5ec38b590a7fc4cda407b09cac2e9e9db001', class: 'table-responsive mb-auto' }, index.h("table", { key: '572629f2437e992fbb04746dc56166f53abbafbb', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '19338f327063e1f190fea67f53b3652d20da77aa', class: "table-header" }, index.h("tr", { key: '3c7d3861d0b93166471641320edeeede0077da58' }, index.h("th", { key: '74afeb25fe3a8b22261958be65839d1ffafdd7b4', class: 'task-row' }, index.h("ir-checkbox", { key: 'b6e52bbeb6ec27db9ebeed48929914fdfd460fa2', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '81ceebcec089bc588cacea77f89df0895aa5c0f5', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: '4a4340fd35679a642c1daeeb36249693fd93e05d', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: 'd6209308d813219cfa67f2843a24acfbe36333a7', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: '40e70f80ad979dedc14d06af7fc973e130c65b33', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '44bf1000c5e74f37fbc3316e84183629bc4123d8' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: '8b67ee26515799fffabf98196cc3585f0c47f543', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'cf83473bf1230b1ca2e2ae7760389851cca25ab5', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'e2bb1ecff7a7838a2b51247892bf06c1e764d097', d: "M17 20V4" }), index.h("path", { key: 'f21d75be31fdd0a4a1fa7afc13b72e55645afb87', d: "m3 8 4-4 4 4" }), index.h("path", { key: '48a381997bd0aa3d7309ee1f1a68ce2483d244a6', d: "M7 4v16" })))), index.h("th", { key: '63e29d415ca67f067af12118d28b617e57580acf', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: '8cf7e10231307262150b879c1a1c919c056bc531', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: 'e75db101e2c34c824ff62bccadae9c2cdd1e2af3', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: '311aa21a37dc7d15cdec15e969624a3120d8e0f6', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: 'e83f6bb1e439c07e9a4f188b31eb1a09ce648bb1', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: 'cd087e5cf31141460882c5bf4fca0d76d7b5b774', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '2890cf221c2049d9f2de32c873b1895cd9f91305' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: '067330671aa3de7cbf02236ca5c0717f152cbd74', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'b8114ac008f9c4c4c27dfde24104a0849eb65c79', d: "m21 16-4 4-4-4" }), index.h("path", { key: '514fbc7cedc29ee978b0536851506d4f7ec284c0', d: "M17 20V4" }), index.h("path", { key: '52fb470830a4b37ec0f84bd2de0fa5a0bf1e1e5c', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'ebc5d3d1d53422e40c2220f31bbc25e08ce175b9', d: "M7 4v16" }))))))), index.h("tbody", { key: 'c78f669eb68af3cfd82687a7027a68c29315fa9a' }, tasks.length === 0 && (index.h("tr", { key: 'e032eadbbddc45946e54d099067a2ce64ba80d63', class: "ir-table-row" }, index.h("td", { key: '2ee5670a80eda79c6adfd1156d8a1c90ba6e3dac', colSpan: 9, class: "text-left" }, index.h("div", { key: '0f6c80fea558066df8226d08ba46f01551e78d19', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '3dd26069f4e4579bbfc5c988fd983bd650dd1da3' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), index.h("div", { key: '911ac237364a0c9b83e21f5a0f982762cb24c51c', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: '8a9417577a89bd23d49050471e764f1f8170b640' })))));
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
        return (index.h(index.Host, { key: 'daee11f535b9611f855536fbe9aa3fe9f7c875d5' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: 'c0e4ea76931ca0d74dd6ffcae750a921b5fa4325', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: '7adfa9562995c145af36c90b1704101c322e6b34', showing: {
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