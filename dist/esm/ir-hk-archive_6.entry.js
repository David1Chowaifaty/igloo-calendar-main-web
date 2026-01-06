import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent } from './index-7e96440e.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-9879d1c1.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
import { l as locales } from './locales.store-cb784e95.js';
import { p as downloadFile } from './utils-646592bd.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { t as toggleTaskSelection, h as hkTasksStore, b as updateSearchField, d as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, f as getPaginatedTasks, j as getMobileTasks, k as updateCurrentPage, l as updatePageSize, m as shouldLoadMore, n as loadMoreTasks } from './hk-tasks.store-2266a681.js';
import './index-f100e9d2.js';
import './axios-aa1335b8.js';
import './index-1e1f097b.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    minSelectableDate = hooks().subtract(90, 'days').toDate();
    houseKeepingService = new HouseKeepingService();
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
        calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    async getArchivedTasks(export_to_excel = false) {
        const res = await this.houseKeepingService.getArchivedHKTasks({ property_id: Number(this.propertyId), ...this.filters, is_export_to_excel: export_to_excel });
        this.data = [...(res?.tasks || [])]?.map(t => ({ ...t, id: v4() }));
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
        return (h(Host, { key: '404248b046bfeda7c51473d9f2005f5974afffea' }, h("ir-title", { key: 'cece0cbf27e8cc9680555a9482f6b1e53a12ec11', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '13de1e087e72f5ffeffd866e6b00cab87595bf83', class: "px-1" }, h("div", { key: '5628916a033f0e69caec9451021c052af9bd6ba3', class: "d-flex" }, h("ir-select", { key: 'be570a7a047c7683ec3d34575c95ac9e89122132', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("ir-select", { key: '30fe1815eb701e68fc353665db4ed6d7b17318d4', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...housekeeping_store?.hk_criteria?.housekeepers
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
            } }))), h("div", { key: '79d894e7b05e612e28795a04043367e0c188d372', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: 'd547ddfc3f774b542087250d40d3ff1be299f172', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: '6d67c013abc3350161609379f6ea2ea3666bff57', title: locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: 'f0ef56646e753165d974fcf84910e795984ba83e', title: locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: 'd67cbe72de0c531b9d6bcb646c70fadceddac2d4' }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: '1fcc98900b9db1deb985345605bb58c97867c024', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: '760711a47fcef292ce91d0d060bd08437e0bf906', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
    task;
    isCheckable;
    isSkippable;
    cleanSelectedTask;
    skipSelectedTask;
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'a7a693dc41e03ad5fca80552b513676bec5c28f4', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'a735db6e1c30fb9632e286be2a42233d136c0e7f', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '587215cf95121f8a30b1336a0530710e98e8eb72', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'e4cb506d8a405ef2714b971cc88a57d062a66523', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '295f3ac08fd382e48a6bf04b476ab8af4c31b17a' }, "-"), h("p", { key: '527f3c1fe883e5004ab575cb670dfef3ce79bb82', class: "m-0 p-0" }, "Unit ", h("b", { key: '89d86273bdb2a1dd42775c30d07332aad025e7ad' }, this.task.unit.name)))), h("p", { key: '1185ce4c68d8d4da130219728c62a342d6c8a101', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '6a5ef0cddccd60062ad419aa03ac29b0f9a9c498', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'e06afe943b306981975ed4cb6dee188dc2a85064', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '33dfb1287b4d757a333b0ae35c6ef371a2c98226', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '49dca8fd325cf760d30bbae745335acd462f2850', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '25601c9dc0ff40ba7b4c66d860569acadd959fc2', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '2a37231cc1413023178d2fcf8c2ee714925585ea' }, h("b", { key: '11ba5ecc75c1bf43423eabd63c1f5acc47f9825a' }, this.task.adult), " Adults")), h("span", { key: '233b5c3cddc29681aebd1b5006c4bca8004797e8', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '87cd9034d1fe718a1a77cc3447a69cf1ab060760', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '6b1996eaceadbcb9aeafeb6eed46b6011364bc1c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '5184cac847bd5063e0e2cd3da459120a14e2c055' }, h("b", { key: 'bdcb1b9ca4f4e073a3d454135fdf399566c3b173' }, this.task.child), " Children")), h("span", { key: '893d41f325d6c9b39291c2249ffdf825c4f164bb', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '96e66b180f9094249449410f8988424724c66b56', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '6d7f3a0650e35c965bd1f27abc7b9ebc89fb026c', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'c27b98305796d0d973ec73d947705d0242f21080', d: "M15 12h.01" }), h("path", { key: '4280443be29adf7209a3411d4895068d56288afe', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '0ea020e1025c4577df7e42a3975dafb552062825', d: "M9 12h.01" })), h("span", { key: '613a9762df667f5b65afc5e8aacf00ff88f1c0e4' }, h("b", { key: '21e60a5c9f51599ddf1fdaf1da05ec41a4b891d2' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '7f3dd105e3dc909b5aea9abb7bba275cf8c5bdd2' }, h("div", { key: '550cad14e41b74d967cd3b119db41ce4c9352bab' }, h("ir-button", { key: '4bb27ec8217c9f163887b70a980f831e9dc22472', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '67f3628d32d8ba824935c222d6e43e4d9a338402' }, h("ir-button", { key: '56438cbcae679fa6f5bcff2dd20a6689f2050439', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '90fe6f331275374a8452113b8b4e91443cdd14fb' }, h("ir-button", { key: '50a960d530736a1b36cf6d42e68af7726b98104d', onClickHandler: () => {
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
            cleaning_periods: housekeeping_store?.hk_criteria?.cleaning_periods[0],
            housekeepers: [],
            cleaning_frequencies: calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies[0],
            dusty_units: housekeeping_store?.hk_criteria?.dusty_periods[0],
            highlight_check_ins: housekeeping_store?.hk_criteria?.highlight_checkin_options[0],
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
        return (h("div", { key: 'd4b5df268ccb0d45db503f72099e48de1502e961', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '83eeed2381e62370b38af52329cd5ba002cdcb2f', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '892ca8ce05f04dcc10302b8ca0225b2c3e47646a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '534494458fceead31034a0d4177fcbf3c5b1b7e0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'f5e35b6ce0b41e6be5f32d98a7986aa28d4d5696', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '4aa631cc15f2b7c38ff98515ebe7f2d023031d33', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'f6a4c20ff53e13e1f17bfebcabe9b808f2877e46', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '1ee94b462a5848d606c54636870724a3cf10c544', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'aac12aa8683af8c5c9e91f43014d2af964f50bf7', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '53bb5793540e729a8e4a4265618de76aacf4bee6', class: "pt-1" }, h("p", { key: '8e0f69cbf9da811f64a1290fdb96aff49f6e8af4', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Period), h("ir-select", { key: 'b9dbef3e15ee64196adffcede80068c220feedf7', testId: "period", selectedValue: this.filters?.cleaning_periods?.code, showFirstOption: false, data: housekeeping_store?.hk_criteria?.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: '35b50cc8659ea7fb12f3e485106f88469fe68dd9' }, h("p", { key: '12065fffac0d6512767633c992aca0c568d68009', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Housekeepers), h("ir-select", { key: 'f90c9f9c2bddb5a549ad588116b6e3e71a4c6c20', testId: "housekeepers", selectedValue: this.filters?.housekeepers, showFirstOption: false, data: [
                { text: locales.entries.Lcz_Allhousekeepers, value: '000' },
                ...housekeeping_store?.hk_criteria?.housekeepers
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
            } }))), h("fieldset", { key: 'd8134d3787c9804221c546d31082203786d441b7' }, h("p", { key: '711f44ce74857e8de53d88bc5481a85a011d1c90', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), h("ir-select", { key: 'ad45093c171ee8f7b2fee907fa33754ea86dae73', testId: "dusty_units", showFirstOption: false, selectedValue: this.filters?.dusty_units?.code, data: housekeeping_store.hk_criteria?.dusty_periods?.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: 'd1c73e1e3768453127d692f109c6feaaef798520', class: "mb-1" }, h("p", { key: 'be73f71d2129b99ea44d7b018838eadc3cc28687', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries['Lcz_HighlightCheck-insFrom']), h("ir-select", { key: 'b2a915cbbafcb70fa0f031a7bf11ddd657c451fc', testId: "highlight_check_ins", selectedValue: this.filters?.highlight_check_ins?.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'c3fbe9dabd939f9f80ea7361b0d74f3d3bc95209', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'f535c5a5488c18caa527f6acb76dcac73ef7bb7b', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '74d242ea23686b51ebac51cd6dcbbf6966e95a2c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
    btnRef;
    headerButtonPress;
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h(Host, { key: 'ac0005f7285400f8d14964c1d7d25f8acb551470' }, h("div", { key: '727134eb7810e5f475bdb6a19151c226110874bb', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: '60623b6de25a2d2025ec02251ba7e7ecab730def', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: 'f69cde2462887f424d11bee561ceedadf31289ee', name: "search", slot: "icon" }))), h("div", { key: 'ea2128fa83c45bf670d02bb8129dc0759fd66c01', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: 'f1a720f71eccadc9c1b20d438fa7822a0054275e', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: 'b5bc874fc87b6463a4bf3f0fcfe6fb4b9d81920c', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '27613dfee2a2c00de031a61febd5aa2130d210fb', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), h("ir-button", { key: 'ffec3f20676f8ac0a6b7d7d748f16d7c4560b191', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Clean & Inspect', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-tasks-table{overflow-x:auto}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = createEvent(this, "sortingChanged", 7);
        this.skipSelectedTask = createEvent(this, "skipSelectedTask", 7);
    }
    tasks = [];
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
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
        if (newTasks?.length) {
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
        const haveManyHousekeepers = housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = getPaginatedTasks();
        // const tasks = hkTasksStore.tasks;
        const mobileTasks = getMobileTasks();
        return (h(Host, { key: '632b2dcbb1fe893719e7242ca9b507fc1330b31e', class: "flex-fill" }, h("section", { key: '75ec3adac6f6d71271d53bcafb69d9cb6faa1f87', class: "mobile-tasks-container flex-fill" }, h("div", { key: '6dea4fc4ba127985af863044775efee6a68889d3', class: "card p-1 m-0" }, h("ir-tasks-header", { key: '35ec7311db16520c669c0e4bc3a8628ca8e263d1' })), mobileTasks?.length === 0 && h("p", { key: '9cf1b7e3ee6d36c17d5daa6245c84e33752ce009', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'a658ec8338a5da377cb2bb3f5701443fed6f5836' })), h("div", { key: '6f6e10c7e2d09082421bb2beca8b901aa7b0ea50', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '6836ff3f82790d6fbbcd450be72555d28d984a32' }), h("div", { key: '551decdbbca1d25a1022b85fe4a9cf0dd872b340', class: 'table-responsive mb-auto' }, h("table", { key: 'b7b0449eeef60d7262f758d2c5713deea6823c85', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '319ceaa7981603f8de13ab5e277740f76a3ddf4b', class: "table-header" }, h("tr", { key: 'a6c4121994a9db01697eac48d1fb3c7d01c8f3bb' }, h("th", { key: 'c79ed7b7e345d086e7512990480133fee500f70d', class: 'task-row' }, h("ir-checkbox", { key: 'f1913b36b3770264f0e2fff36059d30d9592842e', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: 'f46417d5898bb8bf55ea78cb34aebb2dd6c0add1', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: '22464923e0b851d1b4f42115fbbb262484e8da64', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '896da1d2ded3a49a6a1a3f3e041b93e15aaaa9ac', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'ebe6b669ead1ce2f8c4fe779a3215e7c3ce3e9d4', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '3752c79e72e51c57e879a3386f259efbe48d1656' }, locales.entries.Lcz_Status), h("svg", { key: 'b2483c34cdd41aa7ca7f23b877dfd35c247e9728', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '650375506d9e3186fb871a11f4ccb898d6542d52', d: "m21 16-4 4-4-4" }), h("path", { key: '7f87d656bf5f8bcb68667dee2830ae394cda9395', d: "M17 20V4" }), h("path", { key: '115a39f53625ddb513fc1306d75cde7cbf840634', d: "m3 8 4-4 4 4" }), h("path", { key: 'b81afa437d919df15ea0d89978c21fbbea3b3295', d: "M7 4v16" })))), h("th", { key: '38dc277dccdf844897069909e9d96235d36d3909', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: 'ba1f44d860539c1a323ae6fb7b16d0792c6fda3d', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '3f7b03c5f5e5a7e5546be89f07638520f69fefdb', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'deebb9b054a6f59b4529a8f8ac8838edd6b99b6a', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '7026afeca546b04f41f9b3e56671ca507dced1f3', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '75087dbf5a1cbd33a4df685f3cadae983c53b82c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '8f6950dc67e45486d9321ea54897615a439a0630' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '6f86fd7a8ecd01d223d8460ee3a4ef4d4e9c023a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cbae2d44ba683546dfb9d43a61fd22954a6aad70', d: "m21 16-4 4-4-4" }), h("path", { key: 'fc0f197eb94927d7fca1b360cd3a14cc04ccac94', d: "M17 20V4" }), h("path", { key: 'f7b711f6f89c4670a04382b57f7be465d9fff87e', d: "m3 8 4-4 4 4" }), h("path", { key: 'ff0c89c9089d63273d2cd1c65d78a7a453a8872e', d: "M7 4v16" }))))), h("th", { key: '55fedebf36d62bf63db95ad579af606bd75f9b02' }))), h("tbody", { key: 'e261b09a5480241bf594b22e1dd5516be40255c8' }, tasks.length === 0 && (h("tr", { key: 'f877b8662b6cfa8df3684712e9ba535948120443', class: "ir-table-row" }, h("td", { key: '4a4a237a591bfebec9d1cc956df2828431f5242e', colSpan: 9, class: "text-left" }, h("div", { key: '106769e6ed159c696ecf98bda8a9e4b852eaebd0', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '10eb613a533c0e2ea6a248f24e95eaf8d7126283' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, 'task-table-row ir-table-row': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row extra-padding" }, task.formatted_date), h("td", { class: "task-row extra-padding" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row extra-padding text-left" }, task.status.description), h("td", { class: "task-row extra-padding text-left" }, task.hint), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: " task-row extra-padding", style: { textAlign: 'start' } }, task.housekeeper ?? locales.entries.Lcz_Unassigned)), h("td", null, this.isSkippable(task) && (h("ir-button", { text: "Skip", size: "sm", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } })))));
        })))), h("div", { key: 'd8e36d4d947a8d27529dd4fd980871867ac2cf4c', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '732750942826ace00484bb6f6f48334c76e23c7e' })))));
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
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasksStore.pagination.tasksList;
        return (h(Host, { key: '25a633bda2eeff24288a312f1151d3ffef3f7975' }, shouldLoadMore() && h("ir-button", { key: '3bc9de6ae55c694e7233e46ebfe6c92e960637dd', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: 'fd795aaceaa4f9a78974df10826373e3c2aa5789', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map