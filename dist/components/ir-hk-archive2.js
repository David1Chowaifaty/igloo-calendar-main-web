import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { c as calendar_data } from './calendar-data.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { J as downloadFile } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$T } from './igl-application-info2.js';
import { d as defineCustomElement$S } from './igl-block-dates-view2.js';
import { d as defineCustomElement$R } from './igl-book-property2.js';
import { d as defineCustomElement$Q } from './igl-book-property-footer2.js';
import { d as defineCustomElement$P } from './igl-book-property-header2.js';
import { d as defineCustomElement$O } from './igl-booking-form2.js';
import { d as defineCustomElement$N } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$M } from './igl-date-range2.js';
import { d as defineCustomElement$L } from './igl-property-booked-by2.js';
import { d as defineCustomElement$K } from './igl-rate-plan2.js';
import { d as defineCustomElement$J } from './igl-room-type2.js';
import { d as defineCustomElement$I } from './ir-autocomplete2.js';
import { d as defineCustomElement$H } from './ir-booking-details2.js';
import { d as defineCustomElement$G } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$F } from './ir-booking-header2.js';
import { d as defineCustomElement$E } from './ir-button2.js';
import { d as defineCustomElement$D } from './ir-combobox2.js';
import { d as defineCustomElement$C } from './ir-country-picker2.js';
import { d as defineCustomElement$B } from './ir-date-picker2.js';
import { d as defineCustomElement$A } from './ir-date-range2.js';
import { d as defineCustomElement$z } from './ir-date-view2.js';
import { d as defineCustomElement$y } from './ir-dialog2.js';
import { d as defineCustomElement$x } from './ir-events-log2.js';
import { d as defineCustomElement$w } from './ir-extra-service2.js';
import { d as defineCustomElement$v } from './ir-extra-service-config2.js';
import { d as defineCustomElement$u } from './ir-extra-services2.js';
import { d as defineCustomElement$t } from './ir-guest-info2.js';
import { d as defineCustomElement$s } from './ir-icon2.js';
import { d as defineCustomElement$r } from './ir-icons2.js';
import { d as defineCustomElement$q } from './ir-input-text2.js';
import { d as defineCustomElement$p } from './ir-interceptor2.js';
import { d as defineCustomElement$o } from './ir-label2.js';
import { d as defineCustomElement$n } from './ir-modal2.js';
import { d as defineCustomElement$m } from './ir-otp2.js';
import { d as defineCustomElement$l } from './ir-otp-modal2.js';
import { d as defineCustomElement$k } from './ir-payment-actions2.js';
import { d as defineCustomElement$j } from './ir-payment-details2.js';
import { d as defineCustomElement$i } from './ir-phone-input2.js';
import { d as defineCustomElement$h } from './ir-pickup2.js';
import { d as defineCustomElement$g } from './ir-pickup-view2.js';
import { d as defineCustomElement$f } from './ir-pms-logs2.js';
import { d as defineCustomElement$e } from './ir-popover2.js';
import { d as defineCustomElement$d } from './ir-price-input2.js';
import { d as defineCustomElement$c } from './ir-range-picker2.js';
import { d as defineCustomElement$b } from './ir-reservation-information2.js';
import { d as defineCustomElement$a } from './ir-room2.js';
import { d as defineCustomElement$9 } from './ir-room-guests2.js';
import { d as defineCustomElement$8 } from './ir-select2.js';
import { d as defineCustomElement$7 } from './ir-sidebar2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-textarea2.js';
import { d as defineCustomElement$4 } from './ir-title2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-tooltip2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';
import { v as v4 } from './v4.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = /*@__PURE__*/ proxyCustomElement(class IrHkArchive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: 'e80e45949776bd22782115b1ab3079f2120edab3' }, h("ir-title", { key: 'c736a1b95155804af50bd6bd1ef78217429905fb', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '160069beefb14c4366c8050d40fd15dc74d65cb9', class: "px-1" }, h("div", { key: '0658b793813c9c4cf88d82ea3efcb59159ebf53d', class: "d-flex" }, h("ir-select", { key: '4817dbc5dc3f008b0b8b5a1fd2c84d9d8e55c755', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
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
            } }), ((_b = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.housekeepers.length) > 1 && (h("ir-select", { key: 'b2a4f3587c1fb6a3a44dcd12aa88e2e402ed8f0b', class: "ml-1 w-100", selectedValue: ((_d = (_c = this.filters) === null || _c === void 0 ? void 0 : _c.filtered_by_hkm) === null || _d === void 0 ? void 0 : _d.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.filtered_by_hkm[0]) === null || _f === void 0 ? void 0 : _f.toString(), LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), h("div", { key: 'ad1e24eee63c651d0d427ac1a30aa75c072e6428', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '00e01ac9f5aa91482ebdb79b6899415bd313c943', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: '49a43a3ead37cba80f23e6219902188f62c29c5a', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '7a981a1f73f806a6e74c0576d3542dc250374b0d', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '63bb98e7b0be2d42bf0b63c87dfb2754b3ff296a' }, ((_k = this.data) === null || _k === void 0 ? void 0 : _k.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, (_l = this.data) === null || _l === void 0 ? void 0 : _l.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: 'c747ce1864e2a316277c0a9081bce5dc1003cb9b', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: 'e891ffe946f01a9f3cfbea044a118814ab05f6ca', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: (_m = this.selectedBooking) === null || _m === void 0 ? void 0 : _m.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
    static get style() { return IrHkArchiveStyle0; }
}, [2, "ir-hk-archive", {
        "propertyId": [8, "property-id"],
        "language": [1],
        "ticket": [1],
        "filters": [32],
        "data": [32],
        "isLoading": [32],
        "fetchedData": [32],
        "selectedBooking": [32]
    }, [[0, "dateRangeChanged", "handleDateRangeChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-archive", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-booking-details", "ir-booking-extra-note", "ir-booking-header", "ir-button", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-services", "ir-guest-info", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-label", "ir-modal", "ir-otp", "ir-otp-modal", "ir-payment-actions", "ir-payment-details", "ir-phone-input", "ir-pickup", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-price-input", "ir-range-picker", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-select", "ir-sidebar", "ir-spinner", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkArchive);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-guest-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-payment-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkArchive as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-archive2.js.map