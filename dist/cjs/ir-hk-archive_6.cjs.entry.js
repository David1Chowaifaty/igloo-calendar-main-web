'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const housekeeping_service = require('./housekeeping.service-6bb565b8.js');
const calendarData = require('./calendar-data-960b69ba.js');
const irInterceptor_store = require('./ir-interceptor.store-33c3ba11.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-9c4cabe9.js');
const moment = require('./moment-1780b03a.js');
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
        return (index.h(index.Host, { key: '54fd7625942e08e34f82884664f1bc31b98cdd69' }, index.h("ir-title", { key: '57293435328dae4dd5cce911a78351537358c176', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '0c394f3144b1d775aa08c6cce5abc5f2d3616b18', class: "px-1" }, index.h("div", { key: '1d3f7307dd5c341f697d1f02b17a32a8eb1c9282', class: "d-flex" }, index.h("ir-select", { key: 'b70d769713da7e6e4d5e13d8423dba210dea8494', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
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
            } }), ((_b = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (index.h("ir-select", { key: '1bd95175ad81d5cbeadc9888dde1a92f45493124', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), index.h("div", { key: '40dff567adcbd10744aff52ffe826ee45605bb5a', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '7bf8e85017fd709d5e1d3575f8d91aba379aeea1', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: 'c7be5b56a7f25ab2e0eb7c09d4e0540345f997ba', title: (_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: 'de80b7589e784755739a27ae2f14ec8079135d20', title: (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: 'ff0a12a21aa3efdab478824a0fb25cfaf34d4b33' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: 'c689afa2fe3e7d1f1a5e6edaa291fbf0a8e0b19a', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '63fd096126faabe3ec77c5e0f58cb0c54a9acd7c', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (index.h(index.Host, { key: '17b98f585c0391711e8408078b78f9130790f280', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: '4581b88ea4fe49f3a329d67d67fca7bc173e3269', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: '3c7a139170faf21e71d9523577f6265dd8bf969e', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: 'c6ee08304e1312c8bdd242ff497568ebeecb0e5e', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: '6514714c13320ab2acc1dbf9b2940776adcb22ec' }, "-"), index.h("p", { key: '2394fe26a4a3c4465763399b1a426406dd566cd9', class: "m-0 p-0" }, "Unit ", index.h("b", { key: 'f0d7e117f242cf0e3a4cd2289f12fb64e91bf13f' }, this.task.unit.name)))), index.h("p", { key: 'b7b8b471d13d672aaf8b25c19561a66007cb25d9', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: 'efa36467d7de64fb3d1af4bb17b39d2268c30d52', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: '6a7402743d78825fb6fc6e16fd7bc18039635ac4', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: '74e17a4fff1d4661a20082993f851a7a4396b01b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '26bed9f84f942118351fe517d47fb17484c1c980', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: '722d4752e9787443165b86e3d3a85d4bcce2a59d', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: 'e561de3ed7ae3722346ef6028426bc5873e1613e' }, index.h("b", { key: '7545303dcb026c096608ce44fd1f3d77a82c8bf3' }, this.task.adult), " Adults")), index.h("span", { key: '5eabc1bbf3580c147f7ac353358dda56550d6c98', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '32c597b297fb5fd7a4ac0e7a47d31206010af405', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: '92c2480df4778036ad78dac0a2e176cd9a89e4d1', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: '2b3dcd17e37ea0a7d6cb64e62aee7f0fc39dbfbc' }, index.h("b", { key: '3246548cb73b56ec3b978b83e32f390c8b11e252' }, this.task.child), " Children")), index.h("span", { key: '14538b99f4b557388807af64d6d27710e012827f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '6f23d1cc6d9e2361f7691f1ffad29b65c683529a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: '89e51a4f236a011cb2fe44cdccda32879c752467', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: 'b0f1af63f821a8cd5eb193ba443a0a0c9e2162ba', d: "M15 12h.01" }), index.h("path", { key: 'da8a9901d873c1b0f25213fec66512814b909c13', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: '10dd1db3a2f09369101659904d078f4d37eded7f', d: "M9 12h.01" })), index.h("span", { key: 'd943ce7c48c8e0b60e535aaeeab84e727ab3fcae' }, index.h("b", { key: '19b92672102c11b933598581796a6d6e3d2f8614' }, this.task.infant), " Infants"))), this.isCheckable && (index.h("div", { key: '914fe833073dcb611152510761a8ca23236623df' }, index.h("ir-button", { key: '53e559dad15dd90a97be2f17c206cd3ab3a3bcbf', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (index.h("div", { key: '710c86b4e7e52bb0c9db44820c5e885ea438747d' }, index.h("ir-button", { key: 'a9e8e842dac1245b203c77b3c22e7234e0e87c53', onClickHandler: () => {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return (index.h("div", { key: '90398ec757e23e3dca5486f62e223e44ab17552e', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: '55a008b370f7d952948daeb699ec90c7ad752789', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '3349a3b9eec0388575d45180616c76b5d06b1386', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'afeb9799f6dd652afd261f1e9359a9b9ea0a868a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '7d754a7f3beb9ff1845a3725d16fa0d2389dfef3', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'c7526f87b4b6b8e2b3358dc6599ca40fe87c747a', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '584a5a924cb4f11dbfd08bd483a4edaaaa790b00', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '4468cd733bd65b31fdd7292bbe09050a5625df7b', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: '0735b0e9eed20779fa0b89ddd26d352e382fd781', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '447ed35776aa48350d6f8d398320a70ef5de0aec', class: "pt-1" }, index.h("p", { key: '4e86052bd6b99aead67e777dbc01851c26301554', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: '35df691eb385d30cec2ef7bd1048fb9421f4d2bf', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (index.h("fieldset", { key: 'e63d0602919c1615f4746c1e2ab73de61f25ca39' }, index.h("p", { key: '6b9a72f45abad0577d1fd1fc4c6e9edd8f06d627', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: '81902be16bd5745d20133cd64f5fc8013eb4439e', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), index.h("fieldset", { key: '45e935dca9394feed7347e90ca0a69773fe11cce' }, index.h("p", { key: '4867710ac0fa2cc685c53da5b89b12a2bdd3f22c', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), index.h("ir-select", { key: 'ef67553f01f14d8af228c872c6e7b42c9b6d017e', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.dusty_units) === null || _h === void 0 ? void 0 : _h.code, data: (_k = (_j = housekeeping_service.housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.dusty_periods) === null || _k === void 0 ? void 0 : _k.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: '21f09d743db8c2172e85ba33e25eb7a2accc2b47', class: "mb-1" }, index.h("p", { key: '62c9341994e5f7829fdee472b571cce372fa12bc', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: '2bd71c7ff7b385857723110150a3e7d067308dc2', testId: "highlight_check_ins", selectedValue: (_m = (_l = this.filters) === null || _l === void 0 ? void 0 : _l.highlight_check_ins) === null || _m === void 0 ? void 0 : _m.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_p = (_o = housekeeping_service.housekeeping_store.hk_criteria) === null || _o === void 0 ? void 0 : _o.highlight_checkin_options) === null || _p === void 0 ? void 0 : _p.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: 'fa40a3d632df21be06ba90f7be5de01121280616', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: 'e6eacbfe4194893ec47adeb66d05c7a31d25dfd7', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '0b9d9b4e23806c153761d96dfc4e19685b822d75', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h(index.Host, { key: '40ed42472d5037a653e26928cf61ab08a4c854af' }, index.h("div", { key: 'b346458f84f9cc405cb5bb16b9d76cdd91b9f85a', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: '816fb87072c5cbd98f7e5d9879c9355ae49a4b19', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: '8c5e22ff577cef976fa6c98841eea23886218a0e', name: "search", slot: "icon" }))), index.h("div", { key: '1a5de79fd9c6e1e1855a1e428f5c900d1fd27724', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: '5be8dd74821c4bf816fb0b69070e91264df8c599', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: '27d889cb9581f4091caeffc134a1b1dd31ca64cf', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: '08c34c7b4509d5cca8115436a59fc941a8f44e11', class: "d-none d-md-flex", onClickHandler: e => {
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
        return moment.hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(moment.hooks(), 'days');
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
        const isTodayTask = moment.hooks().isSame(moment.hooks(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    render() {
        var _a, _b;
        const haveManyHousekeepers = ((_b = (_a = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.length) > 1;
        const tasks = hkTasks_store.getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = hkTasks_store.getMobileTasks();
        return (index.h(index.Host, { key: '8ad82c2356d5ee10ee9552c49e8f73d7f29fb9d1', class: "flex-fill" }, index.h("section", { key: '82bf207804d80ddf90b5437b2937f1034a571c90', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: '554f92dce9f5bfec0c9a0e06b6c62ed525af4ef2', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: '2f46a3012ccd82a4bda2ab858876a97821d12dde' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && index.h("p", { key: 'b86a7c50dd45fac86ede895b30a45623b69c6c3a', class: "mx-auto" }, locales_store.locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: 'd384832edc3a1bf8c1d8d999fe9da7a07e7f5330' })), index.h("div", { key: 'bf8862a5765095ba0df77e213761c9b90685161e', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: '8576f7a9a20bb2af9ceda4690f3d6ee7ad35d6e6' }), index.h("div", { key: '903dee0464392158716865901b4fe8e398f4231a', class: 'table-responsive mb-auto' }, index.h("table", { key: '266d7656486f4fac51a66b43998521b9b45b94a9', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'cf25f31ca672ebd59ebe8f5e2e1a359fa848b610', class: "table-header" }, index.h("tr", { key: 'b405aafac536de4ab23efab25fd48d406503e755' }, index.h("th", { key: '79173d4e9fa10a9a1eb3f8678838eb1dd4454b38', class: 'task-row' }, index.h("ir-checkbox", { key: '0cb0d2bd1d6cd396ba2b729a753728d225f04728', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '2b3e597830fec4544b8b3c649b4259a04b620186', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: '4fe0fb2d7e7c7a01208398391f6b889768e43de2', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: '40a3ade6aee16c49113d6fc5ee2b25799c35f1a5', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: 'f744576aab9f4537411b46e9fd3ca7eab388fe23', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'c3656ea4a63de8206c10115361cde2e16ca8cf26' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: '64351f43d510db1f4b02060cd97592383c93d7c1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'ad833fe748a8d9b8668c56aebba980e0dfb89849', d: "m21 16-4 4-4-4" }), index.h("path", { key: '0ab2c3207ca199be7935f5a9a84536da9860510f', d: "M17 20V4" }), index.h("path", { key: 'a7cc6cfabc03f70de0465a14b1519ee8ad1dc73d', d: "m3 8 4-4 4 4" }), index.h("path", { key: '2f18f3e84415336527002e6d30104452dac087b2', d: "M7 4v16" })))), index.h("th", { key: '17659965b327535f3f91d72bfc7fd6fafa1fc6f0', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: 'b77f9d9ec3eafda0929c4e1359ec001681d27969', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: 'adeb48cae27edce8ec20a702f537f1e62944f73e', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: 'c40e7f0af35baab4be96cbe595d1f0ffcae38db9', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: 'ce528793f33aa401b5b2663f96c9a604c1fcfaf0', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '7cbd0b250e0952d0f7d9aa6c63dfe8908a4ee9ac', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'f96be32c67567b2b009a86ef822a9fcf4fa846c2' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: '995d794ccf8dc164e110104f5fbe633a97cdecc7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'c66e56755cd18355ab32d13c8aaf5253c0287c94', d: "m21 16-4 4-4-4" }), index.h("path", { key: '10a11813b8f2af1d61b4be98c62040edf26c2b75', d: "M17 20V4" }), index.h("path", { key: '7571ae7ca6e8b8ed55ba0a62ed16b4370e86b870', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'be8cb1cb415e220277898c21c11841f2fa1f78f4', d: "M7 4v16" }))))), index.h("th", { key: '7f90d1dc9320f1996b1880eb5d46004141d57551' }))), index.h("tbody", { key: '437642c761753f2b6d1582e5e553153e7125efc5' }, tasks.length === 0 && (index.h("tr", { key: 'ab86df716f33ee808d517b76da219ce19b14021d', class: "ir-table-row" }, index.h("td", { key: 'f07e04970d269f99c75fa913a5cb386bb7363cf5', colSpan: 9, class: "text-left" }, index.h("div", { key: 'd711dba6767dab2abcd6b10a16a148b3263334a1', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '021f2671cf3ff3bedffcec3ad16b8f321f86f036' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), index.h("div", { key: '5e2128f8e6454c7b8e029f111d91b69b872543f7', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: 'ab33362edab5fd74a9d05261c07f1a67968b857a' })))));
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
        return (index.h(index.Host, { key: 'b5c72238ae8a49f819dd856bf45d58a827f6957e' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: '370037c2a720d5fe44cb99e28472c14c669e06ee', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: 'c6bc78656102ce5049ffe6b55a6900c207b75dc1', showing: {
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