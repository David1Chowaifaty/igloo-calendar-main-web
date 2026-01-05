'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const housekeeping_service = require('./housekeeping.service-9e0d3074.js');
const calendarData = require('./calendar-data-0598de26.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-02a0d542.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-691d527e.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./index-8bb117a0.js');

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    propertyId;
    language = 'en';
    ticket;
    filters = {
        from_date: null,
        to_date: null,
        filtered_by_hkm: [],
        filtered_by_unit: [],
    };
    data = [];
    isLoading = null;
    fetchedData = false;
    selectedBooking;
    minSelectableDate = moment.hooks().subtract(90, 'days').toDate();
    houseKeepingService = new housekeeping_service.HouseKeepingService();
    units = [];
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
        const res = await this.houseKeepingService.getArchivedHKTasks({ property_id: Number(this.propertyId), ...this.filters, is_export_to_excel: export_to_excel });
        this.data = [...(res?.tasks || [])]?.map(t => ({ ...t, id: v4.v4() }));
        this.fetchedData = true;
        return { tasks: res?.tasks, url: res?.url };
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
        this.filters = { ...this.filters, ...props };
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
        return (index.h(index.Host, { key: 'fe04eeaccd2b4adbcc6fdc2abac21181a833432b' }, index.h("ir-title", { key: '343608a2022202c01c34acdb9c996d6f664aa046', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '971af39fe54685ae43ba09a0c19e139b176f3242', class: "px-1" }, index.h("div", { key: '57bd977dbfcab504f79b332131fb6babf1a9df37', class: "d-flex" }, index.h("ir-select", { key: 'b1cbb4b8c9c6fe388940801ecbbe2f65a1168757', class: "w-100", showFirstOption: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...this.units
                    ?.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '778abb421deb14fa440bd9bbeeb67812fdca59c4', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers
                    .map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } }))), index.h("div", { key: '20ecdfa7487072f17a04a54e89ea532149b7eeda', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '099ac1ac1a115e64201271e188b155fc1f1c170a', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: 'feb9546b67d56ded81271b885c56af8d6de187ee', title: locales_store.locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '655c65eab09b4038793f4c5c414702c115009789', title: locales_store.locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: '6b98b9098f2b270da509f896586627cf18cefe1e' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: '3ece520d2ac53cfecbb024813454e96b85f5f1c8', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: 'b786c14eb74560b499a18bbc7d7a94e3822ed353', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
    task;
    isCheckable;
    isSkippable;
    cleanSelectedTask;
    skipSelectedTask;
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (index.h(index.Host, { key: 'bc7cc1b8fcd2fa2b9611df46f1b4e6f0eb59c252', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: '35d540c896a4b30fa6ce7c6fc38fca285c5c5b00', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: '7a37c5cd7958cddced01397ccbc817f2841ed982', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: '9bd16f96d73d81a5f521928d5fe322b73c7f2a16', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: 'eeede9882dadac40d774c1c1c730bb0987412aab' }, "-"), index.h("p", { key: '604a44e26193865ae997e66272e40db7da07401f', class: "m-0 p-0" }, "Unit ", index.h("b", { key: 'c89a997320c8fc24efc85be1761f056dd5850e03' }, this.task.unit.name)))), index.h("p", { key: 'fa86811f1ba4263e80436f429c941f36fbc52241', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: 'b1fb3a5c2c90f8c558f55fa15cf8f35863a50e11', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: 'dd03c4bbf72ca195b6cfcc4bab8217220b21bddf', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: '7b6712d0d5cea121ce73040419c3e28fc000228a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '0522a0557ad0fae286f2329899b32f14d87f47d0', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: '4b4f66b5149493506540b83961924f08460ba031', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: '453c37447737d09617733569c48b3e62935a33a4' }, index.h("b", { key: '0e6fcec830f4c19a337b46db9ec07b15b64db610' }, this.task.adult), " Adults")), index.h("span", { key: '1b7ae96ace14c5944c1d00527a3d02084404292c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '0991595e5ad231331ba0a932f0d91291abbcde26', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: 'ff7bd3b54b2d9dc77b4c7a64e7cf9ef484a97ada', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: '5a120771eda0d9022fb932988378857e4f73958c' }, index.h("b", { key: '1f99515289866dfc644f6a5d75079e5f7f8447f8' }, this.task.child), " Children")), index.h("span", { key: '40424cfc6b8c9aa7ffe4ef6b6872ebe20c45a4b6', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'fd025d79b94c8352e098e913dfafa25f2648b88e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: '6bc096c60f25e3004e1771f54e15e63241eec9e7', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: 'dfc8b06ade602ac9ac01fa167c2a83009b9c719e', d: "M15 12h.01" }), index.h("path", { key: '743277374be30cd2d1dce372c2612864f33aa3d3', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: 'df08975d024543a1b7892a015ded9fb79d2b48ad', d: "M9 12h.01" })), index.h("span", { key: 'c22d8e16279e79874dea7aaf3faf37405cf8855b' }, index.h("b", { key: 'd8773d32884dcaf103b478624dfeb5aea25218d0' }, this.task.infant), " Infants"))), this.isCheckable && (index.h(index.Fragment, { key: 'ae83ec2d47e45afbb81843edcb41c407fe3ded23' }, index.h("div", { key: 'f84f40497237bf44342dd43887bdd93fc53e984d' }, index.h("ir-button", { key: '6544a543bd4973e870e27178807ba75607130597', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), index.h("div", { key: 'b4f44650eb5de6a819a9764252b99884b587163d' }, index.h("ir-button", { key: '9e76e7781e53da31241a87a82d2d8af794974a77', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (index.h("div", { key: '3de257d2c3bb57a972e852724d7671c153de9090' }, index.h("ir-button", { key: 'b093f23f78cb2578dabbc7008154e5e4e61aa742', onClickHandler: () => {
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
    }
    isLoading;
    filters = {
        cleaning_periods: {
            code: '',
        },
        housekeepers: '000',
        cleaning_frequencies: { code: '' },
        dusty_units: { code: '' },
        highlight_check_ins: { code: '' },
    };
    collapsed = false;
    applyFilters;
    baseFilters;
    componentWillLoad() {
        this.baseFilters = {
            cleaning_periods: housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods[0],
            housekeepers: [],
            cleaning_frequencies: calendarData.calendar_data.cleaning_frequency ?? housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies[0],
            dusty_units: housekeeping_service.housekeeping_store?.hk_criteria?.dusty_periods[0],
            highlight_check_ins: housekeeping_service.housekeeping_store?.hk_criteria?.highlight_checkin_options[0],
        };
        this.filters = { ...this.baseFilters, housekeepers: '000' };
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit({
            ...this.filters,
            housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }],
        });
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters, housekeepers: '000' };
        this.applyFilters.emit({
            ...this.filters,
            housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }],
        });
    }
    render() {
        return (index.h("div", { key: '55799788060b588b213093ae646f5f92cadcf0cb', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: '51adf8024c73922a6bbf4c0ccc59b123ef15e327', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: 'af3d3f654294efd1eef22ce8017ee4c1bcf2bf9a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'ed1ead2941bb7f771f744526deaa32a200798545', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '1277923dc7893532154c7b11887ee43b26d56546', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'f2c0278a4062e5630c2de96ff89384370a153919', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: 'ea7adf05f6fb6622cef8342646dd1e219c07d969', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '5ec8b6a55fd59449fcfa44bf259f033d0cdbd769', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: 'c999bd57d543342faf3102fd274a99bd1ab9fe81', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '6bc2b094421d8ce028e1e321c419499b992525db', class: "pt-1" }, index.h("p", { key: 'e1691939a70c347d124c2a50d148142f4d188338', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: 'ee14a9bf83140dc742308dee6b35fb02932b5a75', testId: "period", selectedValue: this.filters?.cleaning_periods?.code, showFirstOption: false, data: housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: '824748a2d0b9c162dcb0abe34507b80ece51acb4' }, index.h("p", { key: '3694cb103833ef650bccdd24ac4febffd5f05f16', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: 'd7f63d21857773ac86077068cc6d9e453c060834', testId: "housekeepers", selectedValue: this.filters?.housekeepers, showFirstOption: false, data: [
                { text: locales_store.locales.entries.Lcz_Allhousekeepers, value: '000' },
                ...housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers
                    .map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                // if (e.detail === '000') {
                //   this.updateFilter({ housekeepers: { ids: this.baseFilters?.housekeepers?.ids } });
                // } else {
                //   this.updateFilter({ housekeepers: { ids: [e.detail] } });
                // }
                this.updateFilter({ housekeepers: e.detail });
            } }))), index.h("fieldset", { key: 'a29d87fe2879362384eb0ad73ce4452fa65a1b39' }, index.h("p", { key: 'f556a1306fd7ce2392e117935a8efafa2532422a', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), index.h("ir-select", { key: 'd5d111e35a30c97b9d05e91ccf571914a50df014', testId: "dusty_units", showFirstOption: false, selectedValue: this.filters?.dusty_units?.code, data: housekeeping_service.housekeeping_store.hk_criteria?.dusty_periods?.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: '646198541dc50a2d28ccd7ffc34a7d34c0bf9fb1', class: "mb-1" }, index.h("p", { key: 'ee16d15705b636263ab6371c9f45ca18e2d85560', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: 'bf6e5c7e4526342917f7982309a3405b8ca446bc', testId: "highlight_check_ins", selectedValue: this.filters?.highlight_check_ins?.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: housekeeping_service.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: 'e2f68ed9ef2577135e008c74f1e42c48d3186ba6', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: '1342468f6be01f65a3a3cc24f6ecd07a597d70bb', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '80c799116e552743d5b0776c87192a7ded5973ff', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
    btnRef;
    headerButtonPress;
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (index.h(index.Host, { key: 'a7aadbf54a44f28e05cf90528b7dbf3f2097a81a' }, index.h("div", { key: '69476395d2ba871cd3c848fce617791967983cf4', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: 'b7d6e758ae93307100836e234573a727655e5699', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: 'f7ae394092b4b22c9598474e6f8a1291c6ee8b27', name: "search", slot: "icon" }))), index.h("div", { key: '76e7e501aa44119d14c5be221e42a6db75af8048', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: '82bd3f748d97b5065eb1dc797cea53cdcf3d8929', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: '5fc283f55cd01d96700fa3a6f73246fe3e831da1', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: 'd883d7c2eb9b05e4d523ec53e81b0626c301b8d0', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), index.h("ir-button", { key: 'e47d39d8599947eba8e475e752fde4f0f4ea2f3a', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Clean & Inspect', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-tasks-table{overflow-x:auto}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animateCleanedButton = index.createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = index.createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = index.createEvent(this, "sortingChanged", 7);
        this.skipSelectedTask = index.createEvent(this, "skipSelectedTask", 7);
    }
    tasks = [];
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
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
        if (newTasks?.length) {
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
        const haveManyHousekeepers = housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = hkTasks_store.getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = hkTasks_store.getMobileTasks();
        return (index.h(index.Host, { key: 'f764c9a49ef159a5367571a35f0b40cbd42686fd', class: "flex-fill" }, index.h("section", { key: '43cc665e5157336851031d21c7613cad6b681891', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: 'b8969428d3a67a74d787841345fb1b5c6685bff7', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: 'aa3ed78fac90bcf242076a2060b667e2fbea3962' })), mobileTasks?.length === 0 && index.h("p", { key: '0d094eb51a6a42955048abbba38696d223bfea4c', class: "mx-auto" }, locales_store.locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: 'fed1e93eb9fda070ed5314bcc7b243fa1860dd84' })), index.h("div", { key: '6bf33fdd4efcc8832fcd8c2047668a9e0c6726a2', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: '6a78be4c9b55505059e678391bc7d388f2f9ef43' }), index.h("div", { key: '5b60fe391de16f8d621940c34a7ab263666cf7bc', class: 'table-responsive mb-auto' }, index.h("table", { key: 'fef201606f7ca2fc50554c39b1a8261ba6edb4ff', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '6db3f74c2337198454d683c01fecf380bff928bc', class: "table-header" }, index.h("tr", { key: 'e8d261f77680009a7c2e2ca29a4b871792b1fb39' }, index.h("th", { key: '0c187ff9d9087ebe8dc015a3b0e521b5cfb27e72', class: 'task-row' }, index.h("ir-checkbox", { key: '3507aa27171635caa172c8c98888b93d357d0a8f', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: 'f8a1f7dbf304b66b3a5637a4d8fb2097f9b5d37b', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: '6d1dce567f9e2ee9b2cda18c9b4f0fab5a107260', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: 'a2fa45d514a568aefcdb012f05887a21e45c02eb', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: '515ed531a475a49ac403ba1bac7a1b994f770afd', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'fd38abe52d9ff60d477589107647e7f29e6bda5a' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: '65b99206f5c07334e222f1e87ffce8d0de5a58c7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '1a1085d08609c420baabb890b894ee99db3bbf80', d: "m21 16-4 4-4-4" }), index.h("path", { key: '4be1fc27b8b1b12ea4a4bb88d24be0d91ef62a09', d: "M17 20V4" }), index.h("path", { key: '5e622816c72e0aa71d1159ccfa8e8707e8011d0c', d: "m3 8 4-4 4 4" }), index.h("path", { key: '976e2b9a68c65b91f2f8c6260f9c10ce6eb9e0eb', d: "M7 4v16" })))), index.h("th", { key: '1465076fe88bd591a8012387ea800c3b0dd91733', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: '1676c900cf19271e5c98d968ea8ec99d2454e0e1', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: '2d9c337e1854e17bc1379e881be9fb1cf5104368', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: 'e6c0586d42801c34f64fa3e862af3ac28f2d2adf', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: '4f94a53766a5fe077ab4402ab6e8ea010c958d3b', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: 'dc6bd5bc1b539554c6c201c038bb2f35f1a4c211', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'e49fe6a2c469db3e9ee28cfc37abb6bef6e367e7' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: 'cfaae1eb46f191c7176ca3330c4222f887a2942a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'd989d078e96736111966c660a1007d3fc66b354f', d: "m21 16-4 4-4-4" }), index.h("path", { key: '8726605e51a8e37f7d09bb069bbf3eb4a4611add', d: "M17 20V4" }), index.h("path", { key: 'd748e11d3dc9c702598cd206418e7cf54242ccd6', d: "m3 8 4-4 4 4" }), index.h("path", { key: '94944261aea70a92516ed9145235fec3c3929822', d: "M7 4v16" }))))), index.h("th", { key: '107986c30b16d1e6ff6b7c7b19a376d367e645a7' }))), index.h("tbody", { key: '1e3584c8a0aacd21f6006f8bf2ce337e9583be26' }, tasks.length === 0 && (index.h("tr", { key: 'b61f58b55a924451e542df63a9093a12846f3cff', class: "ir-table-row" }, index.h("td", { key: '383ca3d3dad82bec8f40390be20ecf2943d049ec', colSpan: 9, class: "text-left" }, index.h("div", { key: '52aa3ef61190dea3077aec04984158e1b2e6ddb9', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '5243c641e4fd4adf07c6a1f1e79c2f11719b0301' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasks_store.hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (index.h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, index.h("td", { class: "task-row " }, isCheckable && index.h("ir-checkbox", { checked: isSelected })), index.h("td", { class: "task-row extra-padding" }, task.formatted_date), index.h("td", { class: "task-row extra-padding" }, index.h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), index.h("td", { class: "task-row extra-padding text-left" }, task.status.description), index.h("td", { class: "task-row extra-padding text-left" }, task.hint), index.h("td", { class: "task-row text-left" }, task.adult), index.h("td", { class: "task-row text-left" }, task.child), index.h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (index.h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, task.housekeeper ?? locales_store.locales.entries.Lcz_Unassigned)), index.h("td", null, this.isSkippable(task) && (index.h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } })))));
        })))), index.h("div", { key: '28f28a0e1185a53446928e2be3712c8e33ecd44c', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: '9c299ff818fd83519fade6bc41f04ead8ec3bfd4' })))));
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
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasks_store.hkTasksStore.pagination;
        const totalTasks = hkTasks_store.hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasks_store.hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasks_store.hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasks_store.hkTasksStore.pagination.tasksList;
        return (index.h(index.Host, { key: 'bf468382a75a29b5405acc57f6a5c50576498f9d' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: '745fe7d6af0bc1d73c732cf7482fae52c9e400a6', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: '97a5a1b68dba21a2dd2bf55bd80b1060a065d5e3', showing: {
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