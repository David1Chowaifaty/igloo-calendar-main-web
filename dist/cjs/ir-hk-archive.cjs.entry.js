'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-Dn9o_etw.js');
var calendarData = require('./calendar-data-Br2L_0sg.js');
var irInterceptor_store = require('./ir-interceptor.store-B6XUQQuI.js');
var utils = require('./utils-HVSePjFf.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-wyGILxEL.js');
var irDate = require('./ir-date-wIaf9EWb.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-C7rmpwuA.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./calendar-dates-BxDGM1ix.js');
require('./language-observer-DKp37LIu.js');

const irHkArchiveCss = () => `.sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-inline-start:0 !important}.ir-me-1.sc-ir-hk-archive{margin-inline-end:0.25rem}.ir-ms-1.sc-ir-hk-archive{margin-inline-start:0.25rem}.ir-ps-0.sc-ir-hk-archive{padding-inline-start:0}`;

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
    houseKeepingService = new index$1.HouseKeepingService();
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
        return (index.h(index.Host, { key: 'b01ba295c6538d316b322685c2a26b0cffeda715' }, index.h("ir-title", { key: '9cc02cbcc611481d7a469c04d1b8153b13cefec9', class: "px-1", label: t.t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), displayContext: "sidebar" }), index.h("section", { key: '0a0f609824178b33e7de30f416f4f17ecc110d06', class: "px-1" }, index.h("div", { key: '530419f5cf00ebe1cdcab674cad0351c04bcf901', class: "d-flex" }, index.h("ir-select", { key: '9a7dab84873eea5388bcde7a06318ecbe28a6c37', class: "w-100", showFirstOption: false, data: [
                { text: t.t('Lcz_AllUnits', { fallback: 'All units' }), value: '000' },
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
            } }), index$1.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '7093a1e278959eda86ec9ad1d3bb90b479fb0c7d', class: "ir-ms-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === index$1.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
                { text: t.t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), value: '000' },
                ...index$1.housekeeping_store?.hk_criteria?.housekeepers
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
            } }))), index.h("div", { key: 'c769a4ac9bdba5466ecc0edab31917d603beef12', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: 'a1bb180a9486fa33dd942ce1321d02f0ea3b6b62', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "ir-me-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: 'ee78a0b29571cd3bbc92ba932d0702e2f7c382af', title: t.t('Lcz_Search', { fallback: 'Search' }), variant: "icon", icon_name: "search", class: "ir-me-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '2f973fe8a196a8476d709ea4cb5eb8ef847f38a0', title: t.t('Lcz_ExportToExcel', { fallback: 'Export to excel' }), variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: 'f29b6c0b946611d6a56b203f1f7648d091159e29' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, t.t('Lcz_NoResultsFound', { fallback: 'No results found' }))) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "ir-ps-0" }, t.t('Lcz_Period', { fallback: 'Period' })), index.h("th", null, t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), index.h("th", null, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", null, t.t('Lcz_BookingNumber', { fallback: 'Booking number' }))), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "ir-ps-0" }, irDate.formatDate(d.date, 'MMM DD, YYYY')), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (t.t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))), index.h("ir-sidebar", { key: '69f8eac62fc4477a13c9788920173badb0adbf5f', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: 'var(--ir-color-muted-background,#f2f3f8)',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '085230cc075512b3e3d8f1a40badd5b5e8f6c589', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = irHkArchiveCss();

exports.ir_hk_archive = IrHkArchive;
