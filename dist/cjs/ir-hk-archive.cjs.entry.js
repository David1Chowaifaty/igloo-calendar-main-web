'use strict';

var index = require('./index-jMqrfjaT.js');
var housekeeping_service = require('./housekeeping.service-BgfORXpS.js');
var calendarData = require('./calendar-data-UNmh_Xjg.js');
var irInterceptor_store = require('./ir-interceptor.store-2sWM3xwm.js');
var locales_store = require('./locales.store-EkxfQjEN.js');
var utils = require('./utils-BxzV_u8d.js');
var moment = require('./moment-CdViwxPQ.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./index-CLqkDPTC.js');
require('./index-BXsYsiHK.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./type-Dy9pVS4V.js');

const irHkArchiveCss = () => `.sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}`;

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
        return (index.h(index.Host, { key: '27942442ad3ba0f08979f527633cc24155107968' }, index.h("ir-title", { key: '30f44fb7e7911227bd8b63f9a74343da81cc4f4a', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '968496ddb202e1c4cffbc3bb05034971131547a4', class: "px-1" }, index.h("div", { key: '9dc2908746b7c5178686509e2ae2faf9490efe14', class: "d-flex" }, index.h("ir-select", { key: 'f60df1d6889a081b9a495c05084063f54d33e4f9', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '2e7ad22649ca4ee7200a4a1d59423cfbec1437f1', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
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
            } }))), index.h("div", { key: '626f19e9a600c92f8ab305ecf06090338b12aad6', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: 'f916b3763d2c049455934de5b156f24e012b3429', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: 'bf964d88ee698a8c0e70c8bca76ea1cb112add5b', title: locales_store.locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '799f13423006a65ff121bd5424b06d1bca03c4a4', title: locales_store.locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: '50eeb3367de98f3531f626ee1c27aba9ff62ca76' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: 'f05385af84093f68b765dd638ba00a817fb14c0d', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: 'var(--ir-color-muted-background,#f2f3f8)',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: '7d98fd88c52bb988118972afcbfaf0cd78fd12d1', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = irHkArchiveCss();

exports.ir_hk_archive = IrHkArchive;
