'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const housekeeping_service = require('./housekeeping.service-ef854ce9.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
const irInterceptor_store = require('./ir-interceptor.store-c6d5162b.js');
const locales_store = require('./locales.store-4eb57996.js');
const utils = require('./utils-3b96f8e3.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-3cbca981.js');
require('./index-6299b0f7.js');
require('./axios-6e678d52.js');
require('./index-63734c32.js');

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
        return (index.h(index.Host, { key: '229f8137ab845ccce053e62157bb13c606664e94' }, index.h("ir-title", { key: 'dcfed6adceab98e72963f8566b3b804053d61846', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '4694ec4cbeb0d6765cc3e533b0b17c1d2382a76f', class: "px-1" }, index.h("div", { key: '15f2232551fac0f1c52b5eead9fc7f8dbed4c16a', class: "d-flex" }, index.h("ir-select", { key: '2d74c205c91f3c2cab550d921485415fe53d0c8d', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '1e078c1ae4649d06c3a7d3ce57a6a52af1c5e820', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
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
            } }))), index.h("div", { key: '227796ff6e36643015f5e3229dd9f538196e5486', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: 'a72e750c506e7949b9fbecbd88bab2f994494e85', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: '9eb6c034a382eee67925d5fc6738563518ebad42', title: locales_store.locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '76044b848a98036d8321b0453d1c092ad7849457', title: locales_store.locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: '97cbc8b3e84d2f367c4691a696993440521b90ee' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: 'd646a1d1865d0243c23a949ffc14d03eec55b4d1', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '641815cc03c4471a1ea1c5c6f710d9b19f489734', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (index.h(index.Host, { key: '5365c87d653d4b2c06be764483e94157a469b0eb', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { key: '35dc841d8361029694c2dfe83b9f6ce83a4e7709', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, index.h("div", { key: '406683428286409f9410e9259c34b205d4eeb98f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("p", { key: '155fdae77a07c6ebdc8b9342150f7ccc3ff9c128', class: "m-0 p-0" }, this.task.formatted_date), index.h("span", { key: '3086ad402703a5371acb0bb43b3a7a6bf462e757' }, "-"), index.h("p", { key: '07bbec33da53182799af812bd07ed62d53af0c0a', class: "m-0 p-0" }, "Unit ", index.h("b", { key: '846ba7e2a00bb8dc802a677f3af976c8a14de38f' }, this.task.unit.name)))), index.h("p", { key: '45d94168f4d3188a970914e978aab6d198f4917f', class: "m-0 p-0" }, this.task.status.description, " ", index.h("span", { key: '2d549c13bd9a93396848f020606294f4afaf8048', style: { marginLeft: '0.5rem' } }, this.task.hint)), index.h("p", { key: '1b5ecba7b462004c91e744610ad00c2e20df09d5', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, index.h("span", { key: 'f83a0f8c4bd7b78d28adf3cdda31f90c573f3ace', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '55208c08ec9ed89ad3d15962bf4bf8a3443cf6a0', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, index.h("path", { key: 'b13c60fa688c748ae5b686a388a6a8dac627c1d0', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), index.h("span", { key: '03d9765224ac4fad442e170f053c304bcdd391ad' }, index.h("b", { key: '60884bdf2c5be0309ea1795eeeef86a6eb9428db' }, this.task.adult), " Adults")), index.h("span", { key: '9d1a6e42a202ce210245386c85f4db74c1fd69e2', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: 'b085b537db340a57683dae35bc68386e390705cc', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, index.h("path", { key: '4324d922500e057f7dc66097f8f69356c3be74c5', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), index.h("span", { key: 'acf2efaf3cc372d8d0ef56d4c4413734169a113b' }, index.h("b", { key: '293d01d89cdb57e84c9a350515a92a4bacd6b02a' }, this.task.child), " Children")), index.h("span", { key: '32318613b32b9d1aaf1d46a66e0a251aea314aab', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '6500fe25b45210ba6bf7cd01a40a2dc3d654e9d0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, index.h("path", { key: 'a3c0added6e9548560a63d9fa4ea23c04bc181d6', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), index.h("path", { key: '74f71fd2c3fd915ae609e5ceedaf5afa1e974462', d: "M15 12h.01" }), index.h("path", { key: 'a45092203cfcfeadecf45c56e5ece3647acb7262', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), index.h("path", { key: 'acd6df9e08c685c89c85c9cad711b5c8632427de', d: "M9 12h.01" })), index.h("span", { key: '5072447b3f6d768ee8fbbe59f96833805b39683e' }, index.h("b", { key: '3e303c787c9e983f0dd848099435ec30246e698f' }, this.task.infant), " Infants"))), this.isCheckable && (index.h(index.Fragment, { key: 'ec3770b8eb55ec9c64b6dadfa24e542056619cb2' }, index.h("div", { key: 'ef9e9c02b3bc17300ca3a6937c35107ce15c67d4' }, index.h("ir-button", { key: '1936735129287fecf658b5b0c8f154013d0b9d79', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), index.h("div", { key: '046f1ecd67f4e5499ac5c9514426f10b329622ad' }, index.h("ir-button", { key: '0e378ec60cc085821f45794e8299854a65e1bc16', onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (index.h("div", { key: '9f22b1250bec3922deb33d18d84d2828d16ad4e0' }, index.h("ir-button", { key: '8cddf844471faac5adf092445d0445df97147ee1', onClickHandler: () => {
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
        return (index.h("div", { key: 'ed2bddccc2a39c5496a5a51e6f4a514ad73c208b', class: "card mb-0 p-1 d-flex flex-column" }, index.h("div", { key: 'c996921546538d968063f9562cf3802a9231d977', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: 'a0816160f70d8e8da48fa02feb20f72bead06acb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '4a669c969bea04e3fae24a9b57ab61ee9babd8d6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '6a459d9a075e5e648256b7937b51ed13729c2c89', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '2d5836e6b091a343068965deded186cbd69792bf', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: 'f9f86826f82e1256bb0bb364bd20354e2037d07a', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'f91beabcfe4a5f7c365e83000026e5277842c1b2', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, index.h("div", { key: '6fac69fa321e7ce6b298cd0c2df292bd6d5cdc66', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'aade4867aad678a65f8c0429776ed18190cbc891', class: "pt-1" }, index.h("p", { key: '1f420b6c300dcd58e9ae3fe7e68eec5ffbb4728b', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Period), index.h("ir-select", { key: 'b4e8d5d67f8dd2aa3c1c2823e01045a7fedbed9e', testId: "period", selectedValue: this.filters?.cleaning_periods?.code, showFirstOption: false, data: housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: 'a8f984876d84f4c905607e8eb89f6934467b212f' }, index.h("p", { key: 'ab4abd216ea7f13685605ef2b640c818485b5a6b', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries.Lcz_Housekeepers), index.h("ir-select", { key: 'ee8030c1b12212578764fdd713d9d29d7d619ed4', testId: "housekeepers", selectedValue: this.filters?.housekeepers, showFirstOption: false, data: [
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
            } }))), index.h("fieldset", { key: '914f656ca57635fc79b37527e20d35f756615db8' }, index.h("p", { key: '3ae624b7deb433a282eb6f7d9ff80a740201de64', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), index.h("ir-select", { key: 'd80f345e48502627262d960a5ba3042f0f0bbb90', testId: "dusty_units", showFirstOption: false, selectedValue: this.filters?.dusty_units?.code, data: housekeeping_service.housekeeping_store.hk_criteria?.dusty_periods?.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), index.h("fieldset", { key: 'c1477a7064d13758d25890d83e27ac81c1649401', class: "mb-1" }, index.h("p", { key: 'c30f01dddb5891bccbc9672bb4c5e2053c442bce', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales_store.locales.entries['Lcz_HighlightCheck-insFrom']), index.h("ir-select", { key: '2055925080a9c25711f21498a1a58f8010a132b6', testId: "highlight_check_ins", selectedValue: this.filters?.highlight_check_ins?.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: housekeeping_service.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => ({
                text: v.description,
                value: v.code,
            })) })), index.h("div", { key: '9a05cd08b6b2c0ed7edcfbd51c635f99a25037b9', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, index.h("ir-button", { key: 'c9633c9797413b71131b6cba87f671a43a5ec028', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'eaef5f688d432d97d5aa8fefabcb56c07ea37ba8', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h(index.Host, { key: '4918c0a81f8d8cc75d4d7cfc005cc99038c4e96f' }, index.h("div", { key: '44e60d29ec9bc0b81e7d58bdd7785e97849c8bcf', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input-text", { key: 'c3755a543098c24e51e7efd73c869b3324e88948', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasks_store.hkTasksStore.searchField, onTextChange: e => hkTasks_store.updateSearchField(e.detail) }, index.h("ir-icons", { key: '21ef439858f3e64b596ebdbc8ed83dc2b40c5a97', name: "search", slot: "icon" }))), index.h("div", { key: '84da573ec4d5237d14c18af9d867ca4fcc686b49', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-button", { key: '9a9a159bd2f54c67d9f87d95d8b716b02978d8ef', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), index.h("ir-button", { key: 'af1997aaad3b1ada194bb392c691397cfb3394c7', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), index.h("ir-button", { key: '74bee911f871ba04338b056bb744053ee27574ab', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), index.h("ir-button", { key: 'e3c191e0420ec11c7fccf380859399441e313829', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), text: 'Clean & Inspect', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}";
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
        return (index.h(index.Host, { key: '340d57e36084caa62064cd066bd2950ed3b42f54', class: "flex-fill" }, index.h("section", { key: '041bddc4a0c9b910a9b08e9dbcf6ac44f42e855c', class: "mobile-tasks-container flex-fill" }, index.h("div", { key: 'bad787b5f8ca44d8c6a5da22e86b851cd59dd943', class: "card p-1 m-0" }, index.h("ir-tasks-header", { key: '9650529da8578004d61fe344234ff94e3f567ecb' })), mobileTasks?.length === 0 && index.h("p", { key: '6b6a8c8194ad1c1475466893c073ee6de437d2fc', class: "mx-auto" }, locales_store.locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), index.h("ir-tasks-table-pagination", { key: '90a5d407502a72a69d562c6dfee582e2d1c9b47c' })), index.h("div", { key: '84427ac197bbd16728db852dfd5aae128db7e228', class: "card table-container flex-fill p-1 m-0" }, index.h("ir-tasks-header", { key: '3c47b4a503b2afa3f276aa2f6796ef256a96dfa4' }), index.h("div", { key: '4afa141e2bd76edcdd666d601173506ff9c52bf9', class: 'table-responsive mb-auto' }, index.h("table", { key: '3cb44c1974b36b43199bf7864d0998e2c8a6c032', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '6c5ac41fe2ed3f026695ea84756db373e001d050', class: "table-header" }, index.h("tr", { key: '26d6cc40ec177c394d3fb5395810fce53490ca0d' }, index.h("th", { key: '8e3ec83837329d85e8a647214205a7b7b0b880eb', class: 'task-row' }, index.h("ir-checkbox", { key: 'a374603f10a0d75b28ee74cf8357c9ff27836811', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), index.h("th", { key: '551d2f7e17812f69d305de6241439ddac64af683', class: "extra-padding" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: '24ec1d1e468682453116b86f2cee908578c38db1', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: '83076d7ff098f888910c68e4793b9ffd149e3da1', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, index.h("div", { key: '25dfe528c6276e35b71b2bc785ed1a7381982fc2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: 'b4f6c47892cc2f376c1eada6c5c602aa733f8ac5' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: 'c817651151764bb4a3328253f581f7e400901404', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'b9c779734cc94668cba4ec4a8a5c952e0b6787bd', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'f5754a945798417c7894614e15ddfee8727f278b', d: "M17 20V4" }), index.h("path", { key: '0413a9af75bf3ba134f5b73793216eb38ea6df61', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'cfd016e05d15c269bc2bd417c1f27e38c904562e', d: "M7 4v16" })))), index.h("th", { key: '4f7a7b86101a467cad3056c87415f2552e18acfe', class: "extra-padding text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: '6b81bf40e83ba239f4f42b161b6d30298f4eed98', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: '50a143eada4d593997495d3c5a34e0446c02515d', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: '8fa7683c56aad87fd035e7589fceb231b518f2a9', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: 'c6abc705f91e3c497150597476a3591e56d06255', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '78f6f1dc95667dd7c2ae8e74caf3de0e8b3726fe', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("span", { key: '1a0f65d47cd97b9d48d7a1ce2dfe7d4b77887bf7' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: '15b53f171a06d9d982c0fd17dc162e334c74ccd1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '61f4c5fa6af3ccffe9f266bee032d0aa8593cb40', d: "m21 16-4 4-4-4" }), index.h("path", { key: '04e78f61a19912d73ffef98c54daa03cd8b71001', d: "M17 20V4" }), index.h("path", { key: 'a281615f269ea1f44b66cf067cabc0e5ed365780', d: "m3 8 4-4 4 4" }), index.h("path", { key: '5a584220d152fe92ab8dc1951fcba38dcf5c4b92', d: "M7 4v16" }))))), index.h("th", { key: '02ce3189c0f8e387ff46c191a2a2e0a85ed2e246' }))), index.h("tbody", { key: '77f41e46fa68d8bbc9e23fb9626b5a38ccb260a5' }, tasks.length === 0 && (index.h("tr", { key: 'bff3d9a9f24b1fd22b43b9bd1973018333e30e4a', class: "ir-table-row" }, index.h("td", { key: 'd899fc848d3ea0edfbfe2d993072b9daa3888b9b', colSpan: 9, class: "text-left" }, index.h("div", { key: '5b40200afc51b93ba4963c438fb23f8203b30a91', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, index.h("span", { key: '7402d1b2410e595e6150ff65253405762185c794' }, " ", locales_store.locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), index.h("div", { key: 'c71da534dddfff2a7dc331078ecd5fc4e8d093ae', class: "mt-auto" }, index.h("ir-tasks-table-pagination", { key: 'eaac08899f845f7d7e78e609fbcdd58b1ac0fc18' })))));
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
        return (index.h(index.Host, { key: 'e2bb73156464c2854bb81343ffe3305b062a9301' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: '8700ab4e860f16cacce8ab45368d019f1377fb6c', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: 'ee2e317ff44cfca5360320d765dd8062d1a7caa8', showing: {
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