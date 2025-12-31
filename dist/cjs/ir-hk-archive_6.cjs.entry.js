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
        return (index.h(index.Host, { key: '03ab52dee41604e35cfe57fa1232059ab40ca802' }, index.h("ir-title", { key: '7992aae955b44ddd1be928d4670c95ca80cef092', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '1135e07e5123e1a2d90fb9128541c29c14945435', class: "px-1" }, index.h("div", { key: 'bfe049d41a8ddb0b650a0ec4fe1c149e05d34985', class: "d-flex" }, index.h("ir-select", { key: 'bad78bc18ce075e20f0a71cf7e702c685cf06c1f', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '6899a39fb4221ddb22f2edc56eb17c36a16bca2d', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
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
            } }))), index.h("div", { key: 'c0d15f56c6e8ffe006fc9ea16e5fb246b0815be8', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: 'e2e70d0aa00ae9e713b76fe573e62e1c080b2d5e', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: '79eecc6ae3be2a9f2b77597d961e12a086f68acf', title: locales_store.locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: 'fea3c37476c8c08302de26d086ba01dc65623dd8', title: locales_store.locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: 'f80947cf2641d7a74c981bc974ccc04f309f51c4' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: '9a3a926573c0f3977b461c09adbb7fa4af4b93e5', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '2cd8d1baecbb1804f477369aeec45c5ae90b527f', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (index.h(index.Host, { key: 'e51e1c79681dfe8ff12b3ad9505184c4daaf2429', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: 'db5e16e1d166fbe8c4ba7a985ea21d9e73ac4dc6', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: '60718277cfdf5ff18cd41286131b64286c3f839b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: '4b1ae26509a40c2b15daabb888e5ff92fe024469', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: '24b474672790732651dc1ba942e0fcacf357e051' }, "-"), index.h("p", { key: 'c6d8cc1eee3d3fe40364199fc01fbdfbbae0f144', class: "m-0 p-0" }, "Unit ", index.h("b", { key: 'd1b26fe8695d58bcf2efda8782fe9567247d1468' }, this.task.unit.name)))), index.h("p", { key: '2b2bad89228271dbe77889d575321f3b8ffa37b9', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: '11eb24816b5486e62d8f9a4038198667a88a16d5', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: '180d5e0f300f5d4b5d1d55bcdbe678deb15147dd', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: '524245e00d71d321effd9b51632013f7ebfe7b73', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'e59a69f126b5a0b8348253e5d74edb07c437b459', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: '68c386e669006ec97a5e93938982bbb7c3de459c', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: 'c7a4fb36ba0f14322ac944a03c889aa24b9598fc' }, index.h("b", { key: '94e5337d26fc20af20c513993d2c13b776c0156d' }, this.task.adult), " Adults")), index.h("span", { key: '3a36136dc1e4f4351f8b6f8be1774226fe260e9c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '93c05cea0a738c3a6e9967570b21f5d3f0c0f292', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: '2d263405a23587b3c9132030ced84f60fa4cb883', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: 'c4ccfd1879f11888d955d15ad11cd6b64938e856' }, index.h("b", { key: 'b3549c267132dad69a8aa02f9852a6b8ef875efd' }, this.task.child), " Children")), index.h("span", { key: 'e4066a63651d7367e908de177e016560d412deba', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'd2a143f478d7ee881a193aa5baa9f95fa9e4cec4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: 'da0b4c8ab58ffca71635300151b482d4cc61d16e', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: '507b7be4de4c966c37cc3f47f7153c3b0922ee95', d: "M15 12h.01" }), index.h("path", { key: '82de3cd29800eb07aa831ffbb791c57b4a08a683', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: 'e5e9d2081b3e5c677ba85ff75881050708f22bcc', d: "M9 12h.01" })), index.h("span", { key: '73e791c9b6f26d776d19e005323e587b12d55d74' }, index.h("b", { key: '22a51e894b903f5b6870f82152e24936aa8a20d0' }, this.task.infant), " Infants"))), this.isCheckable && (index.h(index.Fragment, { key: '30b8900d5ba9a26806f811837b4c29b76b4f31ff' }, index.h("div", { key: '58207506ca63b765a89a9ac7f6a333e82a58736b' }, index.h("ir-button", { key: 'a46d2f7e6f917411f07619aa0d2946e9110d06a3', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), index.h("div", { key: '0401e207ecd503a21bf2f97a433714e2e681fb43' }, index.h("ir-button", { key: 'fb2f8066732c640925313f7d9e2d20f35d0af456', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (index.h("div", { key: 'c7ddf5780238b3beb0ad73bc10973f80461876bc' }, index.h("ir-button", { key: '9b05b26a9241a508c83d87f5a4b511816981de0e', onClickHandler: () => {
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
        return (index.h("div", { key: '8bd847bb99fc407d28ea8ce4d6f3fc1ad0800d4e', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: 'd45ff23d6f641ebf773e09262bfa5bfa8c431106', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '9768adf9c063d28567160159872146fdee23d674', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'b2209f03ab32040be84945075419382870922137', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '4077b92cd4caa275faf8142f3d46a1fc73de4464', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '35a3093b4cf0540eedff04297924d0202e8e4c7e', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '1cd4e4cbbb92e5ce78af9e5b6b77e46d3115f9a4', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'ee96cee8b2eea858fd8c14bf8db3aac79aa729f8', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: 'a66647a4e7746dcc6feb5dfa30a7b23eadfb31d9', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '390e44f1fb1b87a8403dfde2a1d9db5b8715b46c', class: "pt-1" }, index.h("p", { key: 'e129905faa08762f20f42b52bc5cfaa5b30d0fac', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: 'ecfab590cf0bc1ceb492108b62f7cac0064a73bb', testId: "period", selectedValue: this.filters?.cleaning_periods?.code, showFirstOption: false, data: housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: 'a480b649d2aef3f0ab2f2dbf93ca074591a34b43' }, index.h("p", { key: '47dc18781e44930b546d530cc1372b2f5f928693', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: '25f3590ca07efe4da08b856e0abca5ca16f48f9c', testId: "housekeepers", selectedValue: this.filters?.housekeepers, showFirstOption: false, data: [
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
            } }))), index.h("fieldset", { key: '199db9d4940d54063d6c2c49e85a16f8166f4438' }, index.h("p", { key: '153a600c02ba70cd2130469733a7530882672cbb', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), index.h("ir-select", { key: 'b8fcb5834a7acb7576e2e9a79c6309fd2cbe897e', testId: "dusty_units", showFirstOption: false, selectedValue: this.filters?.dusty_units?.code, data: housekeeping_service.housekeeping_store.hk_criteria?.dusty_periods?.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: 'f41872b76daec59d7f3c9322c04fcfe9d157e7d0', class: "mb-1" }, index.h("p", { key: 'e53e3f502316e8eb76c7f37627603ddcebf109b0', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: 'ac5f636d08bd78adc34a43fdcaaca1f7be837217', testId: "highlight_check_ins", selectedValue: this.filters?.highlight_check_ins?.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: housekeeping_service.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: '2096eb54f57a554e7a4b7219e53324e05b9344f7', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: 'e76df7e2656682a9d447fbba22e29b14383aa6d6', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '229e2e360177f2b9616c21e0cd14f5b7055a0b68', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h(index.Host, { key: 'fafbbb3b1e36ee2e13b9e73e27e0203bead93d74' }, index.h("div", { key: 'fece7c73846114581359209b863813b142c5e8cb', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: 'c3b1a048f3d330bef3f3fa70e45fd7de0ad27e00', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: '379a59aa9905a8f1d8700f485fbaf5558eb874f9', name: "search", slot: "icon" }))), index.h("div", { key: '16a1dfa37efd153eca2ad27f1fdb0eb3d3076854', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: '474b43d402a1d5a35d8218de30a62085f7891f0c', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: '42021de338d306987037a2c4f96211879568309f', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: 'c4d19bc3c705ff0478f103d1006f08662040b406', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), index.h("ir-button", { key: '9fb39bbd95ee63b13c3a41ce5fb7a97aea5dd07a', class: "clean-button", onClickHandler: e => {
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
        return (index.h(index.Host, { key: 'cca0c0e4b52f274a1b2224551a4ec95e219ad9b6', class: "flex-fill" }, index.h("section", { key: 'af14efa97c051feb2cafc4598ca00c0410f1429a', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: '58251b179b9a9fb7c0a4b1e4369bbd36082e4c02', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: 'b8f104f48ebb5795e42c8a2330d26d0b00c0326a' })), mobileTasks?.length === 0 && index.h("p", { key: '6090475b6e0fb9425c867de878a134661cf2315f', class: "mx-auto" }, locales_store.locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: '77e02652c87a1ddc00ed2315bb63691de22874cf' })), index.h("div", { key: '8d5d81671d5d2c7013182a6c48212fc14fe57e42', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: 'd5353c74819cb3f64580a759d0e31e4cbd2bedf8' }), index.h("div", { key: '60dbcdb69997d89f89e1fb3a042c98f94db4765b', class: 'table-responsive mb-auto' }, index.h("table", { key: 'e6f1bfdbdbc94c5bc699808ebcbb48054c893d46', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '066788bf6796d7e9a6c8ec13e5bc281440212bd9', class: "table-header" }, index.h("tr", { key: '4cdc60d9c6e0a23c47cac6bde8e26e4fd96bb028' }, index.h("th", { key: '4a16d71876eb344e73172ad102bf1854e9a5bb75', class: 'task-row' }, index.h("ir-checkbox", { key: '663d98bcca2c5cd3803be70c2397a75aaa5d5ec2', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '844e81c9fd5421cddb763c56b5c3719a0437469c', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: '6338218fefe9305dc73a44b9ab69c22d107d060c', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: '6779f8b44c64747458e269733861ccbf57869215', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: '140974ea967dd5378cedece9a9c0ce405f82bb26', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '1f945af1e156d06ccc5609e07c34b03f4ae4de25' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: '766b7de2ecbe8a6e54fe12e8428aa8da0379d913', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '195113c29f18b397e6ab5b69cc4d638349c420e8', d: "m21 16-4 4-4-4" }), index.h("path", { key: '8091d1074bcda4601931a8e783fc577c55ef5874', d: "M17 20V4" }), index.h("path", { key: '5704a735c362dc59acaaa12ac9df402a2cbcd9d5', d: "m3 8 4-4 4 4" }), index.h("path", { key: '84ea092f98b9e1238bae53b86c2860de5a51b992', d: "M7 4v16" })))), index.h("th", { key: 'a51d4c9dcabebf2147597efc59d7a10dad604484', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: '09245932d48630af459e9f80d3bd9a561aa4cdaa', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: '7dced3c26348de0818d532ff0d52505591392ba8', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: '19488a9b359da06a3fa3999f61e35d04bf6ca84d', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: '474ddbde24c80a37e2a113c628ccd72c1a6eeb8d', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: 'eee411fd2297adf1a78258710535b8ede8415ce2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'd6e9f82db358d1f54a9dba64c6f9ec476ce33568' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: 'd483a60b89500660c802fc5860b36bfece8dc758', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'cf47d466ce3501e285a8cc66aee30b6f9600b2e4', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'c083eddcda2b00c29a9d23117b78d10adad59b2f', d: "M17 20V4" }), index.h("path", { key: '235d683814b23ae00e0e07d4bfed33c47561ea48', d: "m3 8 4-4 4 4" }), index.h("path", { key: '8008b3ef834260a805e2a7ad490da63b6e5044b9', d: "M7 4v16" }))))), index.h("th", { key: '5ea2c54c05c7a4453222973143f3cee8125465b6' }))), index.h("tbody", { key: '4f95b77dac376610857deba3e843a8134a7c5c95' }, tasks.length === 0 && (index.h("tr", { key: '57c66b6e1a587fa0f604206bed27e0509bd64b6a', class: "ir-table-row" }, index.h("td", { key: '0501045ab0cfb92b1f4a328f26a4987c84028f75', colSpan: 9, class: "text-left" }, index.h("div", { key: 'c51c77fa435a3fc63c16fdc39221adf43b219dbe', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: 'ca19e20ad39e951915f090173e3595ffcd84d3ae' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), index.h("div", { key: 'a38565b1c1981d05104b2e82affc04573a0ec7a9', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: '9e41f1f0674689b1d65f9ecb891249d45931b492' })))));
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
        return (index.h(index.Host, { key: '880087759c168997525c1d528e99af4d4b0c40af' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: 'e0fffa25cdad2f766d36513f4a77ff72a821beab', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: 'b9c55a0e8392f6bc4f26ab850969b833bc968619', showing: {
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