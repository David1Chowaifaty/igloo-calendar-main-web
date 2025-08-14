import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent } from './index-60982d00.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-e63a6d61.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import { i as isRequestPending } from './ir-interceptor.store-e5fac1de.js';
import { l as locales } from './locales.store-629477c2.js';
import { w as downloadFile } from './utils-2291c5d5.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { t as toggleTaskSelection, h as hkTasksStore, b as updateSearchField, d as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, f as getPaginatedTasks, j as getMobileTasks, k as updateCurrentPage, l as updatePageSize, m as shouldLoadMore, n as loadMoreTasks } from './hk-tasks.store-73b92191.js';
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
        return (h(Host, { key: '3708e460bbfe62e88d048f58aa2c2ba56b1cd4ef' }, h("ir-title", { key: '615b9d6b5ba4823c15c0081988ad3e078e5a767d', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '5505ce57de964c340f5b21c12c2a7307f7594ced', class: "px-1" }, h("div", { key: '276e95f3fb1bbdda5570e21f8d55d103feeff6f1', class: "d-flex" }, h("ir-select", { key: 'fd393a5460d1b943bc16a39a717caaf3b38fae05', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
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
            } }), ((_b = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (h("ir-select", { key: '9ce3ba07831cdf1bbb23ece99c4850c8dbc4647d', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), h("div", { key: 'bc88c8d16989cd81311d1229ffd66b8a62ec24d9', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '2e616b3ebd19603349b04f7760c1d1a824b87745', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: 'e7e0c2aca696d75f1143de9b493ad8c54445d537', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '3703d9f813f172e132c02b5f196e8f0f827873f2', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: 'b43e61b14f6c9ca545e09a67922be0e804eeb044' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: '9123f8c21344e1b99f896e6b3e03ec256253359a', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: '58ff432958a4c26402b20e4288bbe2b5a87bb342', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (h(Host, { key: '911fe3a094c71c962c1a00f8d01f7a50516c30d9', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'eadad40bc2f612d31be12b9c348e7d5b61d509a4', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '4e95cf87286d8e566e7d1ad9e966bdc571ef8e6f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'c86727c2e385476873f4f5b360ee9d6a8405761e', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '1ad3fbf0fd8414fe63f4323919e2c301163fb427' }, "-"), h("p", { key: '4696990b515b4a295cf6c5201e8529bc3afbdba1', class: "m-0 p-0" }, "Unit ", h("b", { key: '94e7a371935a83cc88ca1dcfec0de7b613cf68b0' }, this.task.unit.name)))), h("p", { key: 'bb3fd6d098c8e7f8819b09da81aecb96d1f5e9df', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '988769f954c940b10d13ccdec95fa302ee13e0b6', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '7164b1ce81cdd332a8020d98f7755d9f3ea4e5f0', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '2bcf1db44c014fdd8812cb89b36170a779a96178', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2a3dc9e451d2b358211e2043caa1fab198427fa3', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '5671e85fac6c4de6dbe8dc4c099cd9342cd4d074', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '8ac6883fe8fd71b0843b241545df72cfa9f4a845' }, h("b", { key: 'd240d2e0342e48321146435b03d47465ce567ff4' }, this.task.adult), " Adults")), h("span", { key: '603ff0d1c6655e9b69f2fd823312cec0c3d62acf', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0537323835be0d352fa1c11be39a0f7e7a8bff34', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'cfbf883bee472decbaaa3378ca9b8fcde9c8489e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '26017045b3108ba91e6df4b19398e76d3ec1d05d' }, h("b", { key: 'e6dbe50ca394474cc1a1026374dc54560c869fc9' }, this.task.child), " Children")), h("span", { key: 'f6bd17f2f01ff1065196f527cf96b602adfb32b3', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2586eba14fa1fb6ccd54df9e65bf3c6885394ff0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '3a4a6b590bf3e3d3b218beb24f1a1e943fc466a8', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'ca5cff0656c6e6d2f60444fd3d572de1ebe9ea98', d: "M15 12h.01" }), h("path", { key: 'ed2e0a088758aea1de0ad06368af964c4f3bffdb', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '66c71d903492571d3c25711fd7059b6b2f9607f3', d: "M9 12h.01" })), h("span", { key: '8295481191d1a920b0afad1e069be6405401c901' }, h("b", { key: '81eb8ded7eed322830484a589dad36381eeda5ec' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: 'd00f0bda637e64aff811cf05aaecf926ba1011e1' }, h("ir-button", { key: 'ab6f3672ff1e46258bfa3a663f9e3c6b656777a8', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: '4f6cbc3f5e97bb297c5676f363096d660d65b720' }, h("ir-button", { key: '0b5883846314962a2b5c76d07b784fd83d7509ec', onClickHandler: () => {
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
        var _a, _b, _c, _d, _e, _f;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: (_b = housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => ({ id: h.id })),
            cleaning_frequencies: (_c = calendar_data.cleaning_frequency) !== null && _c !== void 0 ? _c : (_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.cleaning_frequencies[0],
            dusty_units: (_e = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.dusty_periods[0],
            highlight_check_ins: (_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.highlight_checkin_options[0],
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
        return (h("div", { key: 'dc34181055c6b906397687013761a180d98e4a2d', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '5508aeface0167c5fbe371519b656056f031ab9f', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '9c3192671239d62747a9ffc1f0284e5d4b4aa8de', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '721b738553b475933c7d8ef8fc248e41a72e7725', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'cfa70895a40b2659d44ff623a335aaf942ec2273', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'b4763ad41b88556fdbdb12cca1be85892fd8de7c', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'a7ae49acc2c7295cda7c40f88d1de7016bd7ba65', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '0c7a8459622950ca4b2b8a5e30f78aa692dfe66f', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '12c17b366481c42e0f8af7367089d490313ee8a0', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '280eee193cb6564536a9bf26e83cc47f7c82bee3', class: "pt-1" }, h("p", { key: '9e65f046ea9fe881a4d12bc8d430d395196b2750', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Period), h("ir-select", { key: 'b4893e61855607049d7a705e7d7b94df5cec3143', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: '31c370946ad51e6cd83a53853b76ed164a16663b' }, h("p", { key: 'd22deb00aaa5c2958146a32633a861cd1cbf2aac', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Housekeepers), h("ir-select", { key: 'c11558642cef9535c97184ba706826511e90de23', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), h("fieldset", { key: '867647f4c7342f90964fe27160c3e67b24b4dba6' }, h("p", { key: '47108cf4e2b50a149f23e662b509d039a779386e', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), h("ir-select", { key: '1a0b4f528b15285979e346fdeafb0ff79af927f4', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.dusty_units) === null || _h === void 0 ? void 0 : _h.code, data: (_k = (_j = housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.dusty_periods) === null || _k === void 0 ? void 0 : _k.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: 'eedb961f14c02b5d9b7fb3c279ee37ddce274caa', class: "mb-1" }, h("p", { key: 'b1cbff2bb3f05294efc2fe989f13742d66b352ff', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries['Lcz_HighlightCheck-insFrom']), h("ir-select", { key: '7ed89edc6234a7610917c4c9a0787d25e67ffef6', testId: "highlight_check_ins", selectedValue: (_m = (_l = this.filters) === null || _l === void 0 ? void 0 : _l.highlight_check_ins) === null || _m === void 0 ? void 0 : _m.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_p = (_o = housekeeping_store.hk_criteria) === null || _o === void 0 ? void 0 : _o.highlight_checkin_options) === null || _p === void 0 ? void 0 : _p.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'f529cac96db5215d362ba78df6d930f1dbc6e4dd', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'bd87e091253fd841b2f965f39c8080efac3058a2', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '7a7db366d37af3ec52305d13b7103b70a4b2fd68', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}}";
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
        return (h(Host, { key: '75b0f5c1e34e1c3ecf97eb4377e107dd793d6b1e' }, h("div", { key: '5ed4317558e8ca1913b9c149d865b375911f4ec4', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: 'fff00d20fff2aa83112d9daf2e7e6063360fd878', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: '2b05f59c6b49cb6d990b3e4881d8fdee3f5a6474', name: "search", slot: "icon" }))), h("div", { key: 'f8adce8293217685482f7c0bd24b90d5e156a8a1', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: 'e41f4cf71433bf5d7d249686ab38174cfc7907c7', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: 'ff52fb7c0a17887029c56fa29bc90ecc223757ee', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '5652a9b895b8445b5a0bf38aab3ca0d4465f06ac', class: "d-none d-md-flex", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table-container.sc-ir-tasks-table{height:100%}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.table-container.sc-ir-tasks-table{display:none}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:flex}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:#e3f3fa !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}";
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
        return (h(Host, { key: 'ff05459f520b0f7c06ebfddbeaccab1d5f0c48b8', class: "flex-fill" }, h("section", { key: '3b6fac65efbc46b1e0701244f1948fd9099b6347', class: "mobile-tasks-container flex-fill" }, h("div", { key: 'd5e1d972441fb2bd8c1b85539aadf6c077e19ec9', class: "card p-1 m-0" }, h("ir-tasks-header", { key: 'd4771bf37d6cfe01048a53c8ab776bef90aa5d2f' })), (mobileTasks === null || mobileTasks === void 0 ? void 0 : mobileTasks.length) === 0 && h("p", { key: '9d7a05a23a55aef2b7c68b87ba4b21e5061f558c', class: "mx-auto" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'e27250a2a410ffe1c02bba0d785aef84aa9557cd' })), h("div", { key: 'b45fc659321dbb98677a4600608439b19df7d7f0', class: "card table-container flex-fill p-1 m-0" }, h("ir-tasks-header", { key: '537bde7a0346ec3d46a0a69ca3773430b8ac2f79' }), h("div", { key: '21b7a81310677c848146627959ee3c67519a1629', class: 'table-responsive mb-auto' }, h("table", { key: 'f372f5d2311fbe98cc577b273c9318232abcbe40', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5ab63bcf2f2fd9b243c94450a59e3fe105041a48', class: "table-header" }, h("tr", { key: 'e4af6c0044bb5fe6d4523c1c2f92cb3015c3869f' }, h("th", { key: '15687b54e5f1d4e67bc9ea1e0a945b884b1e67ec', class: 'task-row' }, h("ir-checkbox", { key: '3fa5ea9baa9b2d30891f91c9fc0b2b80e95f1af9', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '0b8793023bc11fad87638ea5db38e9b0aaa21dd2', class: "extra-padding" }, locales.entries.Lcz_Period), h("th", { key: 'e8e732e92cb545d67ed4b256b6f2ad32096328a2', class: "extra-padding" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '8f187da29cda036ab66c5ca3449e293918cd31b9', class: 'sortable extra-padding', onClick: () => this.handleSort('status') }, h("div", { key: 'c355b65037bf1ab91fa961b220a4da1d7d636b4f', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '7b3c41d5ca3678acadb98662936bae7dc04a717d' }, locales.entries.Lcz_Status), h("svg", { key: 'b9e7d51cd41c0d5382c788579a4b6db21e678348', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '4df131de1717e3fec719233a74341c6f89f65e95', d: "m21 16-4 4-4-4" }), h("path", { key: 'd7a1b9760420e53ad5458fd96344c76867f3b428', d: "M17 20V4" }), h("path", { key: 'd06b585428a17be8401b44d47e1ff9c1fe86e5b2', d: "m3 8 4-4 4 4" }), h("path", { key: 'c8dab39e4dce9b4c403890fcc5f622285f92787a', d: "M7 4v16" })))), h("th", { key: '7a561b791c22324b03393ec7dfb2fa381faba49f', class: "extra-padding text-left" }, locales.entries.Lcz_Hint), h("th", { key: '23ee1f16680683503a5060b11d005caf21d4a72c', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'f39e24e51a28b7b25314a6da251ec15da18ed761', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: 'ab3b47bc2606a592d742a3d60f91054c168303d6', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '53b5cab835ce9f954b6e108eacfda75c28c8bfe7', style: { textAlign: 'start' }, class: 'sortable extra-padding', onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'f38591778b14174247f6a7349993a9ff014b591a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '77e41ccb624f38c1afdbd96f6b7e04a5e58c01d9' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '19c9ab720a74fb243a06d49185f1a1be25a1c8f0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '562d4357223b243f1d314dfe8a64566c7539b548', d: "m21 16-4 4-4-4" }), h("path", { key: '9a3a65594bff5b13647f5f896099895fa6933ec3', d: "M17 20V4" }), h("path", { key: 'b0bb443e14d70657b061230c44bfd79c5b93a02d', d: "m3 8 4-4 4 4" }), h("path", { key: 'f4173e76a630913925a13d74912ef5a6e9043bee', d: "M7 4v16" }))))), h("th", { key: 'b0b49624503e85c1b39e96cfa7b1dcf0a643b33d' }))), h("tbody", { key: '1d0efc15e91fa4910bd3bc60936442cf1725746e' }, tasks.length === 0 && (h("tr", { key: '6ed4401ab7c78ac2f82f03c2b90c695e6e9da2e8', class: "ir-table-row" }, h("td", { key: 'e2199dc2ccac0fb673bc74bf84f4a830cce40d38', colSpan: 9, class: "text-left" }, h("div", { key: '01ecab2d481b241b50ad77d86fbbba125c791137', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '8f2510f4cb957f55c1d8b094192ce6c0f9519a5f' }, " ", locales.entries.Lcz_NoTasksFound))))), tasks === null || tasks === void 0 ? void 0 :
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
            })))), h("div", { key: '9156f7e771319d4a73dd3acaab92ee4aaa29d0e5', class: "mt-auto" }, h("ir-tasks-table-pagination", { key: '2a07d41efa0dc2bfc22b699b390586fc0e8744b1' })))));
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
        return (h(Host, { key: 'c7af01aff6f4b13a1f5acfa7b96ebaf68cbadcc6' }, shouldLoadMore() && h("ir-button", { key: 'e1d3cd3bf13be095c5d8046bd1f611a69ae0e942', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: '5293967fe26e69c24b348cdaa6e0fa3213ff8a61', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map