'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-DnLl4vlg.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var utils = require('./utils-DC_1UV-i.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CqJPQrfm.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
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
        return (index.h(index.Host, { key: '7a8d73510eb3af74a2d21b085e24c4d27ece975d' }, index.h("ir-title", { key: '36ddce4d83708e9833e6f4822d909ced84de40de', class: "px-1", label: t.t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), displayContext: "sidebar" }), index.h("section", { key: '8ea8b299b9953fe65447eda386351e7419473799', class: "px-1" }, index.h("div", { key: '56d2d67c5dabc8de21fa1e912441bd1b1279fd42', class: "d-flex" }, index.h("ir-select", { key: 'aa15704055584f1d720f8fead39fd6fd6b04b7ee', class: "w-100", showFirstOption: false, data: [
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
            } }), index$1.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '227dea656e8016ab4463e12e5caf352c9a135499', class: "ir-ms-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === index$1.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
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
            } }))), index.h("div", { key: '9fec70b65ec0964f281f7708ef074ee88f859ce9', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '57fad7612552b4d5a780b1bb60a16ddb8975b1a2', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "ir-me-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: 'bce47a6b576fb3a678085a270955a1ed0a471423', title: t.t('Lcz_Search', { fallback: 'Search' }), variant: "icon", icon_name: "search", class: "ir-me-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '13046012eb275c84057b76b15ac5d4bff64ce6c1', title: t.t('Lcz_ExportToExcel', { fallback: 'Export to excel' }), variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: '5b3a3220eadc28a04d69b33a2991ee87f3ad4802' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, t.t('Lcz_NoResultsFound', { fallback: 'No results found' }))) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "ir-ps-0" }, t.t('Lcz_Period', { fallback: 'Period' })), index.h("th", null, t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), index.h("th", null, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", null, t.t('Lcz_BookingNumber', { fallback: 'Booking number' }))), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "ir-ps-0" }, irDate.formatDate(d.date, 'MMM DD, YYYY')), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (t.t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))), index.h("ir-sidebar", { key: '7e8198e066f4c55ffb0c58a77f85971ebb6e39ee', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: 'var(--ir-color-muted-background,#f2f3f8)',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: 'ab87f6d0761b7062eef4894a2ffdf3e94793f46e', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = irHkArchiveCss();

exports.ir_hk_archive = IrHkArchive;
