'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const housekeeping_service = require('./housekeeping.service-ef854ce9.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
const irInterceptor_store = require('./ir-interceptor.store-c6d5162b.js');
const locales_store = require('./locales.store-4eb57996.js');
const utils = require('./utils-9892967b.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-3cbca981.js');
require('./index-6299b0f7.js');
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
        return (index.h(index.Host, { key: '89a396f16228dbd5ed52e0f515c3d981ae53b1a5' }, index.h("ir-title", { key: '66198a48415c891bf547c974da767c1f1032a19e', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '7af3b5fb2af6ec25845966d494ab1ed481ff8326', class: "px-1" }, index.h("div", { key: '3ec46a0af39afcd23c5e3a5b6a69548a8ad9a1aa', class: "d-flex" }, index.h("ir-select", { key: '87214724cfe42aa6bae219063c4ae9c1b63ab716', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '418f674fb03ae8e8b10c1b595928107fda34d1d8', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
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
            } }))), index.h("div", { key: 'c56b7eab12a06413f31c684238ebc8f6b21fef70', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '3c9bd064aa55464bd456e9adf5851789c3f262d3', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: 'c2c6cd83c04df316fbfa4733df2c73207c6f8ad4', title: locales_store.locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: 'ac2bcdd2e27b64f01341d501c5b926bae48a1e00', title: locales_store.locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: 'b210c286af8516cec55ce338447ae66b9397694f' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: '2a6d39d453798ef39b4cd8f65eb657fa34ae2f09', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '09d74cfebb329ba79b093356e633baad430c92ac', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (index.h(index.Host, { key: 'ba0c576b8dd835089443c8e3167bcd091c3f89c0', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: '753a6265af26d2d3c2bb5020e8d17e5e71996319', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: 'd63a2dbb5558226accbb5b802e475e984827700b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: '4e58c13ec320a274950016bcc45a7c0afa2c6a68', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: '291a75a3888a7832d4abe4b1a9ea296d1ab45cc0' }, "-"), index.h("p", { key: 'ed04ea993ca7b74ac54eaeb00b7da1a53e5e99d5', class: "m-0 p-0" }, "Unit ", index.h("b", { key: 'b8d5582a5f11010d9537437ec879492fa8043c58' }, this.task.unit.name)))), index.h("p", { key: '5b9bcb2c410e07473f0a104044444a9e5f11f539', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: 'cbf6bca76af2cfcf606996d0a05c343c6f875764', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: 'b812bf4875dcf19509c81f0cc4b82b96ac13abd8', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: '40370cf99500ef48728b405c95153f83f80e338a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '494d58d60b4e68c6132be16f70b359e55603bbb8', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: 'e0cbda4238b4dbaddc20cb97239165f314700c44', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: '075b9a7aa52926fd727e7b2be21c0b7642033439' }, index.h("b", { key: '6cf55885d819c5f375e03cfe31aebef1a65d7d42' }, this.task.adult), " Adults")), index.h("span", { key: 'cbe4b7de00d4ac242ec94fa165c6ff4e92f30b2e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '481c07aa68174b00a6e6e07fd00b4cddfb9fa4a1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: 'f5680e572efc7dc9bfa34bf90533127e38775e95', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: 'a050e7afe3d198cdf66b9b7b1a17ce6d0396b8e8' }, index.h("b", { key: '749c0be7e31d09583571d438849d270751b108a8' }, this.task.child), " Children")), index.h("span", { key: 'ef48e981780355e7817bfeb07fe1db2f09983f2b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'f1a68b1b40621f04a0a15f3608f63907a0473d4c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: 'fd330277b29398d99ba0aa019ca6f201a2ec994a', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: '6bc293d18b9ba47596173eaafaef7ab6d0efb2ca', d: "M15 12h.01" }), index.h("path", { key: '5d9dc678424f78f5eb454c41cf015e6de2bfab32', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: 'bcd266df3c4e5c0934909134fca4ecbc8c28fea2', d: "M9 12h.01" })), index.h("span", { key: 'd91809cf4b64ce29af2621f50c3f2463ec24b19c' }, index.h("b", { key: '882933c2c70eef9538536d829c2fd53bfd82e828' }, this.task.infant), " Infants"))), this.isCheckable && (index.h(index.Fragment, { key: '86e5fb83f624a8dd85274e08660822bffc51cd8c' }, index.h("div", { key: '781de45d2d49657d2fea828b9588a2179f7e88de' }, index.h("ir-button", { key: '57ebef8d6612230b041aee2df8e398033120da5f', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), index.h("div", { key: 'a845beb6ac239287d8ed669205b6cec8b2b17671' }, index.h("ir-button", { key: '609685179151499f7b45ea03ce3ece6e727cdee7', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (index.h("div", { key: '28414df035148d0f823bed0a522b30bf1daa3838' }, index.h("ir-button", { key: 'e92f46435f33c8f0cdb2ff8e7a0ea3f644f10b62', onClickHandler: () => {
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
        return (index.h("div", { key: 'cac402f07b6760db2248a63e2543e3bd2e8b9159', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: 'ab54df1e7c735071415fa94fcbc0d8bf960f900f', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '3a72ed94d36afe97add2e974618690c15cf399e9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '72fc93858e2351d4cb9ff62bc79cefbf3f899336', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '8ca360b389ae0a6488145c92092163d591c75fab', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'c83c5ad6b8364779ceb400157778599207d184d2', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '4e9f2c237da27af70f636eb9023c7d6fb3a85ce9', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '4b5578b0c2ee213ed42e3f05e8fdf6f87fa2031e', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: '412a9d45796de3c08c279f01b51c92684ab948d1', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'cb6e7097334485feefa2b7ba5b5e53e5f3c01621', class: "pt-1" }, index.h("p", { key: 'e99ebe05fc705de42beec9bdd25456e7c683a91e', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: '5a119fce8cade149b993a74f5af75a22131d1381', testId: "period", selectedValue: this.filters?.cleaning_periods?.code, showFirstOption: false, data: housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: '5ab0ee77894044d1ad6f383ee6aedfd0781ca631' }, index.h("p", { key: 'ac584689f3f62df0d5a97046856ce0c47ec825c9', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: 'c1f87cf54665c34378807fd7d01248ff6edaa8ab', testId: "housekeepers", selectedValue: this.filters?.housekeepers, showFirstOption: false, data: [
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
            } }))), index.h("fieldset", { key: 'ac06edff4b173b48f45aeec5448183229bcd3312' }, index.h("p", { key: '7368f4f0c4e022fd3eb8f0fdf9aa710c1c74172d', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), index.h("ir-select", { key: '20c1a591b80358c6febb7ff59b3eaa6693bc6d51', testId: "dusty_units", showFirstOption: false, selectedValue: this.filters?.dusty_units?.code, data: housekeeping_service.housekeeping_store.hk_criteria?.dusty_periods?.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: '2a522e09b38b8a97ed1b84a8e9aba3852d7ba9fa', class: "mb-1" }, index.h("p", { key: '4b3dbd266c0770366e59d072c4aeca9959f91bd2', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: '556a413a153cdcdd7567cb09cc16f67594b0a936', testId: "highlight_check_ins", selectedValue: this.filters?.highlight_check_ins?.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: housekeeping_service.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: '98d902d83dda7f5cd9c96e529effc989c40fffb2', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: '4a81a25f5b6d54aaa473859534bec4072a04e673', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'e88645d69cf2cda635abe8d176b5da5171136ede', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h(index.Host, { key: 'a67914f4398c42bb08b80fe6a24e2b459f60cc8f' }, index.h("div", { key: 'dc43c747d2c7d6673f7166ac0c8e97d304dfe651', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: '86046311e684c2ec797738dd33e81351f5915840', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: '3ef6e6bf9f19acd6cfb17d9019813010a289da6d', name: "search", slot: "icon" }))), index.h("div", { key: '1d30b916890ba3ce076688f28f6cdf1162fe1301', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: 'f7517f1f3b9dd3ed6eb0fb88c8eab145e184e503', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: 'e1257fef206f94ca499336422dbba344abdeb200', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: '4a9b338016855629206a882852f7d927d9562dc0', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), index.h("ir-button", { key: '7acada3adcacdcb849ed20de19841f802c5cda45', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Clean & Inspect', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-tasks-table{flex:1 1 0%}.table--container.sc-ir-tasks-table{overflow-x:auto}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}";
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
        return (index.h(index.Host, { key: '384a0e94a2eef22205711920138e22ecf529bbb5', class: "flex-fill" }, index.h("section", { key: '3932b00062c7f33f5ddafd75c5d67e0984d136ef', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: 'e46a913148ac437db1ef60e38f5df8160d430958', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: '7efbb2e7ab0117d4b97e8d41fc265b73e61dac31' })), mobileTasks?.length === 0 && index.h("p", { key: 'd193cb027607c4c98fbceb973b566ff9dedeec94', class: "mx-auto" }, locales_store.locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: '387979152e6758998baa2f93fa721f8b7044ca04' })), index.h("div", { key: 'dc49189fff528e16b5223663ecb7eda23add5b99', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: 'd3bec5d389f6f586bb58f96c6b385b0406fca24a' }), index.h("div", { key: 'ec3cb5d29fe5be8d768ba1e486da0435200bcec2', class: 'table-responsive mb-auto' }, index.h("table", { key: '0797d96b8893e68b5c10c128a44b4477dd783788', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '7511efb313740e31c63e5a436e5349d3bdc84804', class: "table-header" }, index.h("tr", { key: 'f7aced71faaa91b766daf2b3a3a284cbe7725d10' }, index.h("th", { key: 'ca697f616af2d4377ba58c2d1ff53364898286ec', class: 'task-row' }, index.h("ir-checkbox", { key: '15790bc064ade3fb484ce994093767174bab69e2', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '9570b62485800434d74f886d7bccbcca92f43208', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: 'c270323fd50444979f84bbac9fe4cc5a085932d9', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: 'dcbb33a2594542da3a0b288012facad8e01bcdb6', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: '8865930843ee59bae3954b26fd60121d926b0d56', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '08acf4507184136139294d72e4880ba0f4cf644a' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: 'def743bec8a1124200fe4f30ffe685e83206924b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'acaca0fd047d93d7e02c8c0380a7811b67d51aaf', d: "m21 16-4 4-4-4" }), index.h("path", { key: '1da19fb9c7dac4b00916df5b08b8c1916dacf4c1', d: "M17 20V4" }), index.h("path", { key: 'e49457ed57704959eef2bf9ac26568149be6fb15', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'ab9f65088b79fce2817cb4aa7f5c4bf155a73f64', d: "M7 4v16" })))), index.h("th", { key: '8e615bd3b9c83d3745e5d193ffd832f05a81c56f', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: '6b6d9307b6ed1b1ba3bfa4f010c5aff1d335784a', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: '349c636e29809585f2e9408dae9f538ac2cf98e9', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: '143ad5e85041f04e9429eff739ebdc95c6719001', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: '60d78844aea3ab7d2bb80964919a883128ac92df', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: 'db76968b6813c5651369f4445030eaabbfb49f0a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '8a5142a7fa36b9b999ebaade2cc7d77c0acb9698' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: '54f85b91e8dbdf41264f4658799ba357a94b6227', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '535ecc9a720fc2dc785c8f04906714b386799572', d: "m21 16-4 4-4-4" }), index.h("path", { key: '11d1a6d8ecd6dd27aebe1051a6726701af3bb24c', d: "M17 20V4" }), index.h("path", { key: 'fda06c15223ca29563465a8ae4055a91ba6d9f92', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'd1828f150805e2171214bac08358ec179f3ffc24', d: "M7 4v16" }))))), index.h("th", { key: 'ca84900413e983cd5f8939a65bec789aab0aa503' }))), index.h("tbody", { key: 'be923e9bdd8de9b736b7384bf87c71272c03df08' }, tasks.length === 0 && (index.h("tr", { key: '5086d18af64ee1e4d010e98a400f8593f3183e2e', class: "ir-table-row" }, index.h("td", { key: 'b7a19ee104e6338b8706886d207f90d60f8db545', colSpan: 9, class: "text-left" }, index.h("div", { key: 'fcbbfb8cf520d4a9e570fd1731eb61168943ee89', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '97a1397bdad8ae579eec6f268f6068cba8ba498b' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), index.h("div", { key: '2c4c35156820ae85fff5ead221ee9a737115b3c5', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: 'd3db1dc276f3dff08f843b25fcf74d6bf22162b6' })))));
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
        return (index.h(index.Host, { key: 'ec6348708166abc4eec1112a5125a0cd68b75b31' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: '1d00de6a2791e7f001c19d1bd6fa6359cec4c1bf', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: '8358511dea85c58cbbc46b21a17183fada5e8109', showing: {
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